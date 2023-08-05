import React, { useRef } from "react";

function ChampionLore({ champion }) {
  const loreRef = useRef(null);

  const handleReadMoreClick = () => {
    loreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={loreRef} id="lore" className="max-w-screen-md m-auto p-4 pt-20">
      <div className="text-center">
        <h1 className="text-white text-3xl font-bold tracking-widest">
          {champion.champion_name}
        </h1>
        <p className="text-white text-xs tracking-widest">
          {champion.champion_title}
        </p>
      </div>
      <p className="pt-4 text-justify">{champion.lore}</p>
    </div>
  );
}

export default ChampionLore;
