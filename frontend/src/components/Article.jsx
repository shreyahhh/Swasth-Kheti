import React, { useRef } from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid h-[20rem] sm:h-[24rem] lg:h-[30rem] w-[16rem] sm:w-[18rem] lg:w-[20rem] items-end overflow-hidden rounded-xl flex-shrink-0"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
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
  );
}

const contents = [
    {
        img: "https://www.material-tailwind.com/image/blog-11.jpeg",
        title: "Search and Discovery",
        desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
      },
      {
        img: "https://www.material-tailwind.com/image/blog-10.jpeg",
        title: "Last visits in US",
        desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
      },
      {
        img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
        title: "Grow in a beautiful area",
        desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
      },
      {
        img: "https://www.material-tailwind.com/image/blog-11.jpeg",
        title: "Search and Discovery",
        desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
      },
      {
        img: "https://www.material-tailwind.com/image/blog-10.jpeg",
        title: "Last visits in US",
        desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
      },
      {
        img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
        title: "Grow in a beautiful area",
        desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
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
        Article
      </Typography>
      <Typography
        variant="lead"
        className="max-w-lg font-normal text-gray-500 mb-6 lg:mb-10"
      >
        We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.
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
          {contents.map(({ img, title, desc }) => (
            <ContentCard key={title} img={img} title={title} desc={desc} />
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