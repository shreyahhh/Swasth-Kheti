import React from 'react';

function Home() {
  const cards = [
    {
      id: 1,
      title: "Late Blight",
      description: "PLANTS AFFECTED: Primarily tomatoes and potatoes DESCRIPTION: Caused by the fungus Phytophthora infestans, it leads to dark, water-soaked lesions on leaves, stems, and tubers.",
      imageUrl: "src/assets/images/late_blight.jpeg",
      bgColor: "bg-[#edf4e1]", // first-color
    },
      {
        id: 2,
        title: "Target Spot",
        description: "PLANTS AFFECTED: Tomatoes.\nDESCRIPTION: Caused by the fungus Corynespora cassiicola, characterized by circular lesions with a dark center and concentric rings.",
        imageUrl: "src/assets/images/Target-Spot-Typical-Lesion.jpg",
        bgColor: "bg-[#edf4e1]", // second-color
      },
      
    {
      id: 3,
      title: "Powdery Mildew",
      description: "PLANTS AFFECTED: A wide range of plants, including cucumbers, melons, grapes, and some ornamentals. DESCRIPTION: Characterized by white or gray powdery spots on leaves and stems, caused by various fungi such as Podosphaera xanthii",
      imageUrl: "src/assets/images/powdery_mildew.jpg",
      bgColor: "bg-[#edf4e1]", // third-color
    },
    {
      id: 4,
      title: "Common Rust",
      description: "PLANTS AFFECTED: Corn (maize).DESCRIPTION: Caused by the fungus Puccinia sorghi, it produces reddish-brown pustules on leaves and stems",
      imageUrl: "src/assets/images/rust.jpeg",
      bgColor: "bg-[#edf4e1]", // fourth-color
    },
    {
        id: 5,
        title: "Tomato Yellow Leaf Curl Virus (TYLCV)",
        description: "PLANTS AFFECTED: Tomatoes.DESCRIPTION: A viral disease transmitted by whiteflies, leading to yellowing and curling of leaves, stunted growth, and reduced fruit yield..",
        imageUrl: "src/assets/images/leafspot.jpeg",
        bgColor: "bg-[#edf4e1]", // first-color
      },
      {
        id: 6,
        title: "Bacterial Spot",
        description: "PLANTS AFFECTED: Tomatoes and peppers.DESCRIPTION: Caused by bacteria like Xanthomonas campestris, leading to small, water-soaked lesions that eventually turn dark and sunken.",
        imageUrl: "src/assets/images/bacterialspot.jpeg",
        bgColor: "bg-[#edf4e1]", // first-color
      },
      {
        id: 7,
        title: "Tomato Mosaic Virus (ToMV)",
        description: "PLANTS AFFECTED: Tomatoes. DESCRIPTION: A viral disease causing mottling and discoloration of leaves, stunted growth, and reduced fruit production",
        imageUrl: "src/assets/images/blackspot.jpeg",
        bgColor: "bg-[#edf4e1]", // first-color
      },
      {
        id: 8,
        title: "Cercospora Leaf Spot (Gray Leaf Spot)",
        description: "PLANTS AFFECTED: Corn (maize).DESCRIPTION: Caused by the fungus Cercospora zeae-maydis, leading to grayish spots with dark borders on leaves.",
        imageUrl: "src/assets/images/botrytis.jpeg",
        bgColor: "bg-[#edf4e1]", // first-color
      },
      {
        id: 9,
        title: "Leaf Scorch",
        description: "PLANTS AFFECTED: Various plants, including raspberries and tomatoes.DESCRIPTION: Characterized by browning or scorching of leaf edges, often due to environmental stress or pathogens",
        imageUrl: "src/assets/images/scroch.jpeg",
        bgColor: "bg-[#edf4e1]", // first-color
      },
      {
        id: 10,
        title: "Early Blight",
        description: "PLANTS AFFECTED: Tomatoes and potatoes.DESCRIPTION: Caused by the fungus Alternaria solani, it results in dark, concentric ring lesions on older leaves.",
        imageUrl: "src/assets/images/early_blight.jpeg",
        bgColor: "bg-[#edf4e1]", // first-color
      },
      {
        id: 11,
        title: "Leaf Mold",
        description: "PLANTS AFFECTED: Primarily tomatoes. DESCRIPTION: Leaf mold is caused by the fungus Passalora fulva and is characterized by yellow spots on the upper surfaces of leaves, with a corresponding moldy growth on the underside.",
        imageUrl: "src/assets/images/leaf_mold.jpeg",
        bgColor: "bg-[#edf4e1]", // pale green color
      },
      {
        id: 12,
        title: "Northern Leaf Blight",
        description: "PLANTS AFFECTED: Corn. DESCRIPTION: Caused by the fungus Setosphaeria turcica, Northern Leaf Blight presents as long, cigar-shaped grayish-green lesions on the leaves.",
        imageUrl: "src/assets/images/northern_leaf_mold.jpg",
        bgColor: "bg-[#edf4e1]", // light blue color
      }
      

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
