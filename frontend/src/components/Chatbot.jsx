import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import chatbotBackground from "../assets/video/chatbotBackground.mp4";
import { Image } from 'antd';
import { Input } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
const { Dragger } = Upload;

function Chatbot() {
  const [image, setImage] = useState(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [detectedDisease, setDetectedDisease] = useState("");
  const [showUploader, setShowUploader] = useState(true);
  const messagesEndRef = useRef(null);

  const props = {
    name: "file",
    multiple: false,
    customRequest: async ({ file, onSuccess, onError }) => {
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
            }
          }
        );

        const prediction = response.data.result;
        const chatEnabled = response.data.chat_enabled;
        setPrediction(prediction);
        setDetectedDisease(prediction);
        setShowUploader(false); // Hide the uploader after successful upload

        onSuccess("ok");

        // if (!chatEnabled) {
        //   alert("Not a Plant . No chat needed.");
        // }
      } catch (error) {
        console.error("Error uploading image:", error);
        setPrediction("Error uploading image. Please try again.");
        onError(error);
      } finally {
        setIsLoading(false);
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
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
    <div className="h-screen flex flex-col relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={chatbotBackground}
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 h-24 flex justify-between items-center px-6 shadow-lg bg-black bg-opacity-50">
        <h1 className="text-white text-xl font-bold mt-20 md:mt-0 md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">AI Chatbot</h1>
        <Link
          to="/"
          className="text-white text-xl hover:text-yellow-300 transition-colors font-bold mt-20 md:mt-0 md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "
        >
          Back to Home
        </Link>
      </div>

      <div className="relative z-10 flex-grow p-6 overflow-y-auto">
        {!chatStarted ? (
          <div className="flex flex-col items-center justify-center h-full bg-white bg-opacity-20 rounded-lg shadow-xl p-8">
            {!image && showUploader && (
              <Dragger {...props} className="w-1/2 max-w-md bg-white bg-opacity-40 rounded-lg ">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text ">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for single upload.
                </p>
              </Dragger>
            )}
            {image && (
              <>
                <div className="mb-6 rounded-lg">
                  <Image
                    src={image}
                    alt="Uploaded"
                    width={400}
                    className="max-w-md max-h-64 rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full max-w-md mb-6">
                  <Input
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
