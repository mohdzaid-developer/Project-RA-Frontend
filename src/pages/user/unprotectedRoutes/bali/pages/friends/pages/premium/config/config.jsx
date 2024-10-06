//Assets
import friendsPremium from "@/assets/friendsPremium.webp";
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";

export const data = {
  title: "Zindhagi Na Melige Dubara",
  heroImg: friendsPremium,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-22.3%"],
  xRange2: ["0%", "-15%"],
  xRange3: ["0%", "-12.5%"],
  xRange4: ["0%", "-8%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [
    baliSlider1,
    baliSlider2,
    baliSlider3,
    baliSlider4,
    baliSlider5,
    baliSlider6,
  ],
  price: "1,00,000",
};

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: "",
    color: "DDA15E",
    plans: [
      {
        title: "Rest",
        data: ["Relax after your arrival"],
      },
      {
        title: "Visit",
        data: ["Local beaches", "Vue Beach Club"],
      },
    ],
  },
  {
    day: 1,
    title: "Temples and Culture",
    image: "",
    color: "F5CFDE",
    plans: [
      {
        title: "Activities",
        data: ["Water sports (e.g., jet skiing or parasailing)"],
      },
      {
        title: "Visit",
        data: ["GWK", "Uluwatu Temple", "Kecak Dance Performance"],
      },
      {
        title: "Dinner",
        data: ["Seafood dinner at Jimbaran Beach (not included in package)"],
      },
    ],
  },
  {
    day: 2,
    title: "Adventure and Nature",
    image: "",
    color: "EB7E67",
    plans: [
      {
        title: "Activities",
        data: ["River Rafting and ATV ride"],
      },
      {
        title: "Visit",
        data: ["Tegenungan Waterfall", "Ubud Monkey Forest (if time permits)"],
      },
    ],
  },
  {
    day: 3,
    title: "Island Adventure",
    image: "",
    color: "FFE894",
    plans: [
      {
        title: "Visit",
        data: ["Explore Nusa Penida Island"],
      },
    ],
  },
  {
    day: 4,
    title: "Relaxation and Leisure",
    image: "",
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Local shopping", "Spa session", "Finns Beach Club"],
      },
    ],
  },
  {
    day: 5,
    title: "Gili Trawangan Day 1",
    image: "",
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: ["Gili Trawangan"],
      },
    ],
  },
  {
    day: 6,
    title: "Gili Trawangan Day 2",
    image: "",
    color: "F2A7B3",
    plans: [
      {
        title: "Return",
        data: ["Return to Bali mainland"],
      },
      {
        title: "Visit",
        data: ["Sunset at Tanah Lot Temple (if possible)"],
      },
    ],
  },
  {
    day: 7,
    title: "Volcano and Temple Tour",
    image: "",
    color: "8EC8C5",
    plans: [
      {
        title: "Visit",
        data: [
          "Jeep tour to Mount Batur",
          "Besakih Temple",
          "Lempuyang Temple (Heaven’s Gate)",
          "Tirta Gangga",
        ],
      },
    ],
  },
  {
    day: 8,
    title: "Departure Day",
    image: "",
    color: "D4A5A5",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
