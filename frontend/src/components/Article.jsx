// import React, { useRef } from 'react';
// import { Typography, Card, CardBody } from "@material-tailwind/react";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// function ContentCard({ img, title, desc }) {
//   return (
//     <Card
//       className="relative grid h-[20rem] sm:h-[24rem] lg:h-[30rem] w-[16rem] sm:w-[18rem] lg:w-[20rem] items-end overflow-hidden rounded-xl flex-shrink-0"
//       color="transparent"
//     >
//       <img
//         src={img}
//         alt="bg"
//         className="absolute inset-0 h-full w-full object-cover object-center"
//       />
//       <div className="absolute inset-0 bg-black/70" />
//       <CardBody className="relative flex flex-col justify-end">
//         <Typography variant="h4" color="white" className="text-lg sm:text-xl lg:text-2xl">
//           {title}
//         </Typography>
//         <Typography
//           variant="paragraph"
//           color="white"
//           className="my-2 font-normal text-sm sm:text-base"
//         >
//           {desc}
//         </Typography>
//       </CardBody>
//     </Card>
//   );
// }

// const contents = [
//   {
//     img: "src/assets/images/E1.jpg",
//     title: "Collecting and Saving Seeds",
//     description: "Learn the techniques for collecting and saving seeds to promote sustainable gardening practices.",
//     link: "https://www.growingagreenerworld.com/collecting-and-saving-seeds/",
//   },
//   {
//     img: "src/assets/images/E2.jpg",
//     title: "Three Key Benefits of Gardening in Raised Beds",
//     description: "Discover the advantages of gardening in raised beds, including improved soil conditions and easier maintenance.",
//     link: "https://www.growingagreenerworld.com/three-key-benefits-of-gardening-in-raised-beds/",
//   },
//   {
//     img: "src/assets/images/E3.jpg",
//     title: "The Ultimate Tomato Cage in 5 Simple Steps",
//     description: "Follow these simple steps to create the ultimate tomato cage for a thriving garden.",
//     link: "https://www.growingagreenerworld.com/ultimate-tomato-cage/",
//   },
//   {
//     img: "src/assets/images/E4.jpg",
//     title: "Simple Ways to Reduce Garden Disease",
//     description: "Implement these easy strategies to minimize the occurrence of diseases in your garden.",
//     link: "https://www.growingagreenerworld.com/simple-ways-to-reduce-garden-disease/",
//   },
//   {
//     img: "src/assets/images/E5.jpg",
//     title: "Controlling or Eliminating Powdery Mildew",
//     description: "Effective methods to control or eliminate powdery mildew from your plants.",
//     link: "https://www.growingagreenerworld.com/controlling-or-eliminating-powdery-mildew/",
//   },
//   {
//     img: "src/assets/images/E6.jpeg", // corrected the file extension
//     title: "Bacteria, Fungus, and Viruses, an Overview",
//     description: "Get an overview of the common bacterial, fungal, and viral threats to plants.",
//     link: "https://www.growingagreenerworld.com/bacteria-fungus-and-viruses-an-overview/",
//   },
//   {
//     img: "src/assets/images/E7.jpg",
//     title: "Organic Pest Controls",
//     description: "Learn about organic methods to control pests in your garden without harmful chemicals.",
//     link: "https://www.growingagreenerworld.com/organic-pest-controls/",
//   },
//   {
//     img: "src/assets/images/E8.jpeg", // corrected the path separator
//     title: "Soil Prep for the Vegetable Garden",
//     description: "Proper soil preparation is key to a successful vegetable garden. Here's how to do it right.",
//     link: "https://www.growingagreenerworld.com/soil-prep-for-the-vegetable-garden/",
//   },
// ];

// export function BlogSection11() {
//   const scrollContainerRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollLeft += scrollOffset;
//     }
//   };

//   return (
//     <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
//       <Typography
//         variant="h2"
//         color="blue-gray"
//         className="text-2xl leading-snug lg:text-3xl mb-2"
//       >
//         Article
//       </Typography>
//       <Typography
//         variant="lead"
//         className="max-w-lg font-normal text-gray-500 mb-6 lg:mb-10"
//       >
//         We&apos;re constantly trying to express ourselves and actualize our
//         dreams. If you have the opportunity to play this game of life you need
//         to appreciate every moment.
//       </Typography>

//       <div className="relative">
//         <button
//           onClick={() => scroll(-300)}
//           className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block"
//           aria-label="Scroll left"
//         >
//           <ChevronLeftIcon className="h-6 w-6" />
//         </button>
//         <div
//           ref={scrollContainerRef}
//           className="flex overflow-x-auto gap-4 md:gap-6 scroll-smooth scrollbar-hide pb-4"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           <style jsx>{`
//             div::-webkit-scrollbar {
//               display: none;
//             }
//           `}</style>
//           {contents.map(({ img, title, desc }) => (
//             <ContentCard key={title} img={img} title={title} desc={desc} />
//           ))}
//         </div>
//         <button
//           onClick={() => scroll(300)}
//           className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block"
//           aria-label="Scroll right"
//         >
//           <ChevronRightIcon className="h-6 w-6" />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default BlogSection11;

import React, { useRef } from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ContentCard({ img, title, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="relative grid h-[20rem] sm:h-[24rem] lg:h-[30rem] w-[16rem] sm:w-[18rem] lg:w-[20rem] items-end overflow-hidden rounded-xl flex-shrink-0"
        color="transparent"
      >
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <CardBody className="relative flex flex-col justify-end">
          <Typography variant="h4" color="white" className="text-lg sm:text-xl lg:text-2xl">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="my-2 font-normal text-sm sm:text-base"
          >
            {desc}
          </Typography>
        </CardBody>
      </Card>
    </a>
  );
}

const contents = [
  {
    img: "src/assets/images/E1.jpg",
    title: "Collecting and Saving Seeds",
    description: "Learn the techniques for collecting and saving seeds to promote sustainable gardening practices.",
    link: "https://www.growingagreenerworld.com/collecting-and-saving-seeds/",
  },
  {
    img: "src/assets/images/E2.jpg",
    title: "Three Key Benefits of Gardening in Raised Beds",
    description: "Discover the advantages of gardening in raised beds, including improved soil conditions and easier maintenance.",
    link: "https://www.growingagreenerworld.com/three-key-benefits-of-gardening-in-raised-beds/",
  },
  {
    img: "src/assets/images/E3.jpg",
    title: "The Ultimate Tomato Cage in 5 Simple Steps",
    description: "Follow these simple steps to create the ultimate tomato cage for a thriving garden.",
    link: "https://www.growingagreenerworld.com/ultimate-tomato-cage/",
  },
  {
    img: "src/assets/images/E4.jpg",
    title: "Simple Ways to Reduce Garden Disease",
    description: "Implement these easy strategies to minimize the occurrence of diseases in your garden.",
    link: "https://www.growingagreenerworld.com/simple-ways-to-reduce-garden-disease/",
  },
  {
    img: "src/assets/images/E5.jpg",
    title: "Controlling or Eliminating Powdery Mildew",
    description: "Effective methods to control or eliminate powdery mildew from your plants.",
    link: "https://www.growingagreenerworld.com/controlling-or-eliminating-powdery-mildew/",
  },
  {
    img: "src/assets/images/E6.jpeg",
    title: "Bacteria, Fungus, and Viruses, an Overview",
    description: "Get an overview of the common bacterial, fungal, and viral threats to plants.",
    link: "https://www.growingagreenerworld.com/bacteria-fungus-and-viruses-an-overview/",
  },
  {
    img: "src/assets/images/E7.jpg",
    title: "Organic Pest Controls",
    description: "Learn about organic methods to control pests in your garden without harmful chemicals.",
    link: "https://www.growingagreenerworld.com/organic-pest-controls/",
  },
  {
    img: "src/assets/images/E8.jpeg",
    title: "Soil Prep for the Vegetable Garden",
    description: "Proper soil preparation is key to a successful vegetable garden. Here's how to do it right.",
    link: "https://www.growingagreenerworld.com/soil-prep-for-the-vegetable-garden/",
  },
];

export function BlogSection11() {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <Typography
        variant="h2"
        color="blue-gray"
        className="text-2xl leading-snug lg:text-3xl mb-2"
      >
        English Articles
      </Typography>

      <div className="relative">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 md:gap-6 scroll-smooth scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {contents.map(({ img, title, description, link }) => (
            <ContentCard key={title} img={img} title={title} desc={description} link={link} />
          ))}
        </div>
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

export default BlogSection11;
