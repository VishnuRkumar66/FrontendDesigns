import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import vrk from "./assets/vrklogo.png";
import bento from "./assets/bento.png";
import bento1 from "./assets/bento1.png";
import product from "./assets/product.png";
import product1 from "./assets/product1.png";
import extension from "./assets/extension.png";
import extension1 from "./assets/extension1.png";
const App: React.FC = () => {
  const [mode, setMode] = useState<{ [key: number]: "desktop" | "mobile" }>({});

  function handleClick(index: number, view: "desktop" | "mobile") {
    setMode((prev) => ({ ...prev, [index]: view }));
  }

  type ContentItem = {
    id: string;
    pic: string;
    pic1: string;
    desc: string;
  };
  const content: ContentItem[] = [
    {
      id: "BENTO GRID",
      pic: bento,
      pic1: bento1,
      desc: "Responsive BentoGrid Layout using React, TypeScript, and Tailwind CSS. The layout showcases dynamic cards with varying column and row spans, inspired by modern UI designs.",
    },
    {
      id: "PRODUCT LIST",
      pic: product,
      pic1: product1,
      desc: "A Page that updates the UI in multiple places based on user interactions.By using a JSON file, dynamically populated the DOM and it helped me deepen my understanding of how dynamic rendering works in React.",
    },
    {
      id: "EXTENSION",
      pic: extension,
      pic1: extension1,
      desc: "This project was a fun way to work with dynamic data and add simple filters. I used Tailwind CSS to build a colorful, responsive grid that looks good on any device. It helped me practice building clean and interactive UIs.",
    },
  ];
  const [search, setSearch] = useState("");
  const filteredContent = content.filter((item) =>
    item.id.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-[#2F3C7E] min-h-screen  text-white">
      <div className="bg-[#303f95] font-bold p-2 flex justify-between items-center grid-cols-3  text-center fixed left-0 right-0 top-0">
        <div
          onClick={() =>
            window.open("https://vishnurkumar66.github.io/myportfolio")
          }
          className="flex items-center cursor-pointer"
        >
          <img className="w-7 h-7 rounded-2xl mr-5" src={vrk} alt="" />
          <h2 className="hidden md:block tracking-tight text-[#FBEAEB]">
            VISHNU R KUMAR
          </h2>
        </div>

        <input
          className="border rounded p-1 text-[10px] w-full max-w-[240px] ml-2 mx-1 font-light"
          type="text"
          name="search"
          placeholder="search designs.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="gap-2 flex justify-center items-center p-2">
          <FontAwesomeIcon
            icon={faGithub}
            onClick={() => window.open("https://github.com/VishnuRkumar66")}
            className="hover:text-gray-500 hover:scale-120 transition-transform"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            onClick={() => window.open("https://wa.me/9895010782")}
            className="hover:text-green-400
          hover:scale-120 transition-transform"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            onClick={() => window.open("https://www.instagram.com/v.r.k_18")}
            className="hover:text-rose-600
          hover:scale-120 transition-transform"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            onClick={() =>
              window.open("http://www.linkedin.com/in/vishnurkumar66")
            }
            className="hover:text-blue-500 
          hover:scale-120 transition-transform"
          />
        </div>
      </div>
      <div className="px-4">
        <h2 className="pt-15 pb-3 font-semibold">MY CREATIONS</h2>

        <div className="text-amber-900  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          {filteredContent.map((item, index) => (
            <div
              key={index}
              className="flex rounded flex-col m-auto bg-[#FBEAEB] p-2"
            >
              <div className="">
                <img
                  className="h-49 w-84 hover:scale-102 transition-transform  rounded cursor-pointer"
                  src={mode[index] === "mobile" ? item.pic1 : item.pic}
                  alt="pic"
                />
              </div>
              <div className="h-36">
                <div className="flex text-white justify-evenly italic font-semibold text-[10px]">
                  <button
                    onClick={() => handleClick(index, "desktop")}
                    className="border rounded-lg p-2 my-2 bg-violet-950 hover:bg-violet-800 
                    cursor-pointer"
                  >
                    DESKTOP DESIGN
                  </button>
                  <button
                    onClick={() => handleClick(index, "mobile")}
                    className="border rounded-lg p-2 my-2 bg-amber-950 hover:bg-amber-900 cursor-pointer"
                  >
                    MOBILE DESIGN
                  </button>
                </div>
                <div className="font-bold text-amber-900">{item.id}</div>
                <div className="text-[12px]/[15px] text-black/70">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
