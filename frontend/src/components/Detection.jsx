import React from 'react';

function Detection() {
    return (
        <>
            <div className='h-1/2 bg-blue-400 flex items-center justify-center'>
                <h1 className='text-4xl text-white'>Detection</h1>
                
            </div>
            <div className="flex items-center justify-center w-full mt-4">
                <label 
                    htmlFor="dropzone-file" 
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg 
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 20 16"
                        >
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>

        </>
    );
}

export default Detection;
// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { UploadIcon, SendIcon } from 'lucide-react';

// export default function Component() {
//   const [image, setImage] = useState(null);
//   const [prediction, setPrediction] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleImageUpload = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//       // Simulate a prediction after image upload
//       setTimeout(() => {
//         setPrediction("Leaf Spot Disease");
//         setMessages([{ role: 'bot', content: "I've detected Leaf Spot Disease. What would you like to know about it?" }]);
//       }, 1500);
//     }
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       setMessages([...messages, { role: 'user', content: input }]);
//       setInput('');
//       // Simulate bot response after user sends a message
//       setTimeout(() => {
//         setMessages(prev => [...prev, { role: 'bot', content: "Here's some information about Leaf Spot Disease: It's a common fungal disease that affects many plants. Symptoms include brown or black spots on leaves. To treat it, remove affected leaves and apply a fungicide." }]);
//       }, 1000);
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Plant Disease Chatbot</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {!prediction ? (
//           <div className="flex flex-col items-center space-y-4">
//             <label htmlFor="image-upload" className="cursor-pointer">
//               <div className="flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg hover:bg-gray-200">
//                 <UploadIcon className="w-8 h-8 text-gray-400" />
//               </div>
//               <Input
//                 id="image-upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </label>
//             <p className="text-sm text-gray-500">Upload a picture of your plant</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             <p className="font-semibold">Predicted Disease: {prediction}</p>
//             <div className="h-64 overflow-y-auto space-y-2">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'}`}
//                   style={{ maxWidth: '80%' }}
//                 >
//                   {message.content}
//                 </div>
//               ))}
//             </div>
//             <form onSubmit={handleSendMessage} className="flex space-x-2">
//               <Input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask about the disease..."
//                 className="flex-grow"
//               />
//               <Button type="submit" size="icon">
//                 <SendIcon className="w-4 h-4" />
//               </Button>
//             </form>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }
