import React from "react";
import Carousel from "./Carousel";

function ChampionSkins({ champion }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-white text-3xl font-bold tracking-widest">Skins</h1>
      </div>
      <div className="carousel carousel-center max-w-screen-lg rounded-box m-auto p-4">
        {champion.skins.map((skin, index) => (
          <Carousel key={index} imageUrl={skin.imageUrl} alt={skin.name} />
        ))}
      </div>
    </div>
  );
}

export default ChampionSkins;
