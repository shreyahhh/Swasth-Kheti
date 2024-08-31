import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Chatbot() {
  const [image, setImage] = useState(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [detectedDisease, setDetectedDisease] = useState("");
  const messagesEndRef = useRef(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/predict/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const prediction = response.data.result;
        const chatEnabled = response.data.chat_enabled;
        setPrediction(prediction);
        setDetectedDisease(prediction);

        if (!chatEnabled) {
          alert("Not a Plant . No chat needed.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        setPrediction("Error uploading image. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (message) => {
    if (message.trim() === "") return;

    const userMessage = { text: message, sender: "user" };
    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat/", {
        question: message,
        disease: detectedDisease,
      });

      const botMessage = { text: response.data.answer, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        text: "Error: Unable to get a response. Please try again later.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const startChatWithPrompt = (prompt) => {
    setChatStarted(true);
    setMessages([
      { text: prediction, sender: "bot" },
      { text: prompt, sender: "user" }
    ]);
    sendMessage(prompt);
  };

  const handleStartChat = () => {
    startChatWithPrompt(`Tell me more about ${prediction}.`);
  };

  const handlePrevention = () => {
    startChatWithPrompt(`What are the prevention methods for ${prediction}?`);
  };

  const handleCure = () => {
    startChatWithPrompt(`What are the cure methods for ${prediction}?`);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-purple-400 via-black-500 to-red-500">
      <div className="h-24 flex justify-between items-center px-6 shadow-lg">
        <h1 className="text-white text-3xl font-bold">AI Chatbot</h1>
        <Link
          to="/"
          className="text-white text-xl hover:text-yellow-300 transition-colors"
        >
          Back to Home
        </Link>
      </div>

      <div className="flex-grow p-6 overflow-y-auto">
        {!chatStarted ? (
          <div className="flex flex-col items-center justify-center h-full bg-white bg-opacity-20 rounded-lg shadow-xl p-8">
            <label className="bg-blue-500 text-white text-xl px-6 py-3 rounded-full cursor-pointer hover:bg-blue-600 transition-colors mb-6">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            {image && (
              <>
                <img
                  src={image}
                  alt="Uploaded"
                  className="max-w-md max-h-64 mb-6 rounded-lg shadow-md"
                />
                <div className="w-full max-w-md mb-6">
                  <input
                    type="text"
                    value={isLoading ? "Predicting..." : prediction}
                    placeholder="Predicted disease will appear here..."
                    className="w-full p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
                {prediction && !isLoading && (
                  <div className="flex space-x-4">
                    <button
                      onClick={handleStartChat}
                      className="bg-purple-500 text-white text-xl px-6 py-3 rounded-full hover:bg-purple-600 transition-colors"
                    >
                      Start Chat
                    </button>
                    <button
                      onClick={handlePrevention}
                      className="bg-green-500 text-white text-xl px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                    >
                      Prevention
                    </button>
                    <button
                      onClick={handleCure}
                      className="bg-yellow-500 text-white text-xl px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
                    >
                      Cure
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col bg-white bg-opacity-20 rounded-lg shadow-xl p-6">
            <div className="flex-grow overflow-y-auto mb-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow p-3 text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => sendMessage(inputMessage)}
                disabled={isLoading}
                className="bg-blue-500 text-white text-xl px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chatbot;