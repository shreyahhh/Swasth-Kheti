
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
        link: "https://www.herzindagi.com/hindi/society-culture/how-to-make-moss-stick-for-vine-plants-at-home-article-301060",
        img: "src/assets/images/H1.jpg",
        title: "घर पर वाइन पौधों के लिए मॉस स्टिक कैसे बनाएं",
        description: "जानिए वाइन पौधों के लिए घर पर मॉस स्टिक बनाने की सरल प्रक्रिया।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/how-to-get-more-cucumbers-from-plants-article-300850",
        img: "src/assets/images/H2.jpg",
        title: "पौधों से अधिक खीरे कैसे प्राप्त करें",
        description: "अपने खीरे के पौधों से अधिक उपज प्राप्त करने के लिए अपनाएं ये आसान तरीके।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/winter-green-veg-and-flower-seeds-to-sowing-in-september-article-300051",
        img: "src/assets/images/H3.jpg",
        title: "सितंबर में बोने के लिए सर्दियों की हरी सब्जियों और फूलों के बीज",
        description: "जानिए सितंबर में कौन-कौन से हरी सब्जियों और फूलों के बीज बोने चाहिए।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/how-do-leaves-tell-you-about-a-plant-health-article-297749",
        img: "src/assets/images/H4.jpg",
        title: "पत्तियाँ आपको पौधे के स्वास्थ्य के बारे में कैसे बताती हैं",
        description: "पौधों की पत्तियों के माध्यम से उनके स्वास्थ्य की जानकारी कैसे पाएं।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/how-to-take-care-of-bengal-currant-plant-karonda-article-298474",
        img: "src/assets/images/H5.jpg",
        title: "कैसे करें करौंदा पौधे की देखभाल",
        description: "करौंदा पौधे की उचित देखभाल के लिए आवश्यक जानकारी प्राप्त करें।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/what-happens-if-you-put-grind-banana-peel-on-plants-article-298166",
        img: "src/assets/images/H6.jpg",
        title: "क्या होता है जब आप पौधों पर केले का छिलका डालते हैं?",
        description: "जानें कैसे केले का छिलका पौधों के लिए लाभकारी होता है।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/how-to-get-rid-of-dirt-caused-by-hanging-planters-article-299198",
        img: "src/assets/images/H7.jpg",
        title: "हैंगिंग प्लांटर्स से होने वाली गंदगी से कैसे छुटकारा पाएं?",
        description: "हैंगिंग प्लांटर्स से होने वाली गंदगी को साफ रखने के सरल उपाय।"
    },
    {
        link: "https://www.herzindagi.com/hindi/society-culture/how-do-i-get-the-maximum-flowers-in-my-hibiscus-article-300604",
        img: "src/assets/images/H8.jpg",
        title: "हिबिस्कस में अधिकतम फूल कैसे प्राप्त करें",
        description: "जानिए हिबिस्कस पौधे में अधिक फूल पाने के आसान तरीके।"
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
        Hindi Articles
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
