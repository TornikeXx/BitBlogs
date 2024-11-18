import CardFrame from "../../../../../components/CardFrame/CardFrame";
import React from "react";

interface CardsProps {
  tittle: string;
  name: string;
}

const Card: React.FC<CardsProps> = ({ tittle, name }) => {
  return (
    <CardFrame>
      <img
        src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
        alt="Cover image for The Future of Blockchain Technology"
        className="rounded-lg object-cover w-full h-[200px]"
      />
      <h1 className=" text-[#03050c] text-xl font-semibold">{tittle}</h1>
      <p className="text-[#555969] font-thin">{name}</p>
      <p className="text-[#555868] my-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        error ad quo consectetur quam, qui dolorum obcaecati. Vero, praesentium
        omnis delectus nisi iste id alias facilis, exercitationem cumque
        pariatur aut.
      </p>
      <div className="flex items-center gap-2">
        <button className="bg-[#e0e2eb] text-[#3d435c] rounded-md py-[2px] px-[10px] mt-2 dark:bg-[#121317] dark:text-[#a2a6b9]">
          blockchain
        </button>
        <button className="bg-[#e0e2eb] text-[#3d435c] rounded-md py-[2px] px-[10px] mt-2 dark:bg-[#121317] dark:text-[#a2a6b9]">
          Technology
        </button>
        <button className="bg-[#e0e2eb] text-[#3d435c] rounded-md py-[2px] px-[10px] mt-2 dark:bg-[#121317] dark:text-[#a2a6b9]">
          Future
        </button>
      </div>
    </CardFrame>
  );
};

export default Card;
