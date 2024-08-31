import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Chatbot() {
  const [image, setImage] = useState(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

        // Access the prediction from the response data
        const prediction = response.data.result; // Assuming "result" contains the prediction
        setPrediction(prediction);
      } catch (error) {
        console.error("Error uploading image:", error);
        setPrediction("Error uploading image. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const startChat = () => {
    if (image) {
      setChatStarted(true);
    } else {
      alert("Please upload an image before starting the chat.");
    }
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

      <div className="flex-grow p-6">
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
                <button
                  onClick={startChat}
                  className="bg-purple-500 text-white text-xl px-6 py-3 rounded-full hover:bg-purple-600 transition-colors"
                  disabled={isLoading}
                >
                  Start Chat
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col bg-white bg-opacity-20 rounded-lg shadow-xl p-6">
            <div className="flex-grow overflow-y-auto mb-6">
              {/* Chat messages will go here */}
              <p className="text-white text-xl">
                Chat messages will appear here
              </p>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow p-3 text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white text-xl px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-colors">
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
