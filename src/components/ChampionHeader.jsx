import React, {useRef } from "react";

function ChampionHeader({ champion }) {
  const loreRef = useRef(null);
  
  const handleReadMoreClick = () => {
    loreRef.current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <img
        src={champion.champion_splash}
        alt={champion.champion_name}
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-center px-4 py-8">
          <span className="text-white text-4xl font-bold tracking-widest">
            {champion.champion_name}
          </span>
          <br />
          <span className="text-white text-xl font-bold">
            {champion.champion_title}
          </span>
          <br />
          <button className="mt-8 btn btn-warning" onClick={handleReadMoreClick}>Read More</button>
        </p>
      </div>
    </div>
  );
}

export default ChampionHeader;
