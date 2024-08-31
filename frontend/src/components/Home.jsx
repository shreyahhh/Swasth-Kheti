import React from 'react';

function Home() {
  const cards = [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "/docs/images/blog/image-4.jpg",
      bgColor: "bg-[#f2f9f1]", // first-color
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "/docs/images/blog/image-4.jpg",
      bgColor: "bg-[#ddeedf]", // second-color
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "/docs/images/blog/image-4.jpg",
      bgColor: "bg-[#b6cdbd]", // third-color
    },
    {
      id: 4,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      imageUrl: "/docs/images/blog/image-4.jpg",
      bgColor: "bg-[#5c715e]", // fourth-color
    },
    {
        id: 5,
        title: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        imageUrl: "/docs/images/blog/image-4.jpg",
        bgColor: "bg-[#f2f9f1]", // first-color
      },
      {
        id: 6,
        title: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        imageUrl: "/docs/images/blog/image-4.jpg",
        bgColor: "bg-[#f2f9f1]", // first-color
      },

    // Repeat for remaining cards
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#A9B18F] py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 max-w-7xl">
        {cards.map((card) => (
          <a
            href="#"
            key={card.id}
            className={`flex flex-col h-full ${card.bgColor} bg-opacity-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300`}
          >
            <img
              className="object-cover w-full h-48 rounded-t-lg"
              src={card.imageUrl}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 flex-grow">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {card.title}
              </h5>
              <p className="mb-3 text-sm text-gray-700">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
