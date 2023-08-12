/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import card1 from "../public/cards/card1.jpg";
import card2 from "../public/cards/card2.jpg";
import card3 from "../public/cards/card3.jpg";

const Cards = () => {
  return (
    <div className="flex flex-row">
      <div className=" w-1/3 mt-4 mx-4 h-40 bg-white border-2 shadow-slate-100 text-black ">
        <Image src={card1} alt="card1" />
        <h1 className="p-4">Card title</h1>
      </div>
      <div className="w-1/3  mt-4 mx-4 h-40 bg-white border-2 shadow-slate-100 text-black ">
        <Image src={card2} alt="card2" />
        <h1 className="p-4">Card title</h1>
      </div>
      <div className="w-1/3 mt-4 mx-4 h-40 bg-white border-2 shadow-slate-100 text-black ">
        <Image src={card3} alt="card3" />
        <h1 className="p-4">Card title</h1>
      </div>
    </div>
  );
};

export default Cards;
