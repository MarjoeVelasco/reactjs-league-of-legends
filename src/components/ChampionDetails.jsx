import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchChampionDetails } from "../api/championDetails";
import LoadingSpinner from "./LoadingSpinner";
import Carousel from "./Carousel";


function ChampionDetails() {
  const { name } = useParams();
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loreRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState("passive");


  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const champions = await fetchChampionDetails({ name });
        setHeroes(champions);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    //fetch data response
    fetchData();

    // Cleanup function
    return () => {
      abortController.abort();
    };
  }, []);

  // Cache data
  const heroDetails = useMemo(() => {
    return heroes;
  }, [heroes]);

  const handleReadMoreClick = () => {
    loreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillClick = (skillName) => {
    setSelectedSkill(skillName);
  };


  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full bg-[url('../src/images/ionia-03.jpg')] bg-no-repeat bg-fixed bg-center bg-cover ">
      {heroDetails.map((a) => (
        <div key={a.uid}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src={a.champion_splash}
              alt={a.champion_name}
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center px-4 py-8">
                <span className="text-white text-4xl font-bold tracking-widest">
                  {a.champion_name}
                </span>
                <br />
                <span className="text-white text-xl font-bold">
                  {a.champion_title}
                </span>
                <br />
                <button
                  className="mt-8 btn btn-warning"
                  onClick={handleReadMoreClick}
                >
                  Read More
                </button>
              </p>
            </div>
          </div>

          <div ref={loreRef} id="lore" className="max-w-screen-md m-auto p-4 pt-20">
            <div className="text-center">
              <h1 className="text-white text-3xl font-bold tracking-widest">{a.champion_name}</h1>
              <p className="text-white text-xs tracking-widest">{a.champion_title}</p>

            </div>

            <p className="pt-4 text-justify">{a.lore}</p>

    
          </div>
        {/************** SKILS START *************/}
        <div className="w-full bg-[url('../src/images/noxus_splash.jpg')] bg-no-repeat bg-center bg-cover text-primary-content mt-4">
          <div className="bg-slate-900 bg-opacity-30 pt-20 pb-10">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bold tracking-widest pt-2 ">Abilities</h1>
          </div>

          <div className="max-w-screen-md m-auto ">
            <div className="grid grid-cols-3 gap-4 grid-flow-row">
              <div className="p-5 text-center row-start-1 row-end-4">
                <div
                  className="flex flex-col justify-center items-center p-2 cursor-pointer"
                  onClick={() => handleSkillClick("passive")}
                >
                  <p>Passive</p>
                  <img
                    className=""
                    src={a.champion_passive.champion_passive_icon}
                    alt={a.champion_passive.champion_passive_name}
                  />
                </div>

                <div
                  className="flex flex-col justify-center items-center p-2 cursor-pointer"
                  onClick={() => handleSkillClick("q")}
                >
                  <p>Q</p>
                  <img
                    className=""
                    src={a.champion_q.champion_q_icon}
                    alt={a.champion_q.champion_q_name}
                  />
                </div>

                <div
                  className="flex flex-col justify-center items-center p-2 cursor-pointer"
                  onClick={() => handleSkillClick("w")}
                >
                  <p>W</p>
                  <img
                    className=""
                    src={a.champion_w.champion_w_icon}
                    alt={a.champion_w.champion_w_name}
                  />
                </div>

                <div
                  className="flex flex-col justify-center items-center p-2 cursor-pointer"
                  onClick={() => handleSkillClick("e")}
                >
                  <p>E</p>
                  <img
                    className=""
                    src={a.champion_e.champion_e_icon}
                    alt={a.champion_e.champion_e_name}
                  />
                </div>

                <div
                  className="flex flex-col justify-center items-center p-2 cursor-pointer"
                  onClick={() => handleSkillClick("r")}
                >
                  <p>R</p>
                  <img
                    className=""
                    src={a.champion_r.champion_r_icon}
                    alt={a.champion_r.champion_r_name}
                  />
                </div>
              </div>

              <div className="p-5 col-start-2 col-end-4 row-start-1 row-end-4">
                {selectedSkill === "passive" && (
                  <div className="bg-slate-950 bg-opacity-50 p-4">
                    <p className="text-md text-center">{a.champion_passive.champion_passive_name}</p>
                    <p className="text-sm text-center pb-3">Passive</p>
                    <video className="w-full border-2 border-yellow-600" controls>
                      <source
                        src={a.champion_passive.champion_passive_video_webm}
                        type="video/webm"
                      />
                      <source
                        src={a.champion_passive.champion_passive_video_mp4}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-4 pb-4">{a.champion_passive.champion_passive_description}</p>
                  </div>
                )}

                {selectedSkill === "q" && (
                  <div className="bg-slate-950 bg-opacity-50 p-4">
                    <p className="text-md text-center">{a.champion_q.champion_q_name}</p>
                    <p className="text-sm text-center pb-3">First Skill</p>

                    <video className="w-full border-2 border-yellow-600" controls>
                      <source src={a.champion_q.champion_q_video_webm} type="video/webm" />
                      <source src={a.champion_q.champion_q_video_mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-4 pb-4">{a.champion_q.champion_q_description}</p>
                  </div>
                )}

                {selectedSkill === "w" && (
                  <div className="bg-slate-950 bg-opacity-50 p-4">
                    <p className="text-md text-center">{a.champion_w.champion_w_name}</p>
                    <p className="text-sm text-center pb-3">Second Skill</p>


                    <video className="w-full border-2 border-yellow-600" controls>
                      <source src={a.champion_w.champion_w_video_webm} type="video/webm" />
                      <source src={a.champion_w.champion_w_video_mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-4 pb-4">{a.champion_w.champion_w_description}</p>
                  </div>
                )}

                {selectedSkill === "e" && (
                  <div className="bg-slate-950 bg-opacity-50 p-4">
                    <p className="text-md text-center">{a.champion_e.champion_e_name}</p>
                    <p className="text-sm text-center pb-3">Third Skill</p>
                    <video className="w-full border-2 border-yellow-600" controls>
                      <source src={a.champion_e.champion_e_video_webm} type="video/webm" />
                      <source src={a.champion_e.champion_e_video_mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-4 pb-4">{a.champion_e.champion_e_description}</p>
                  </div>
                )}

                {selectedSkill === "r" && (
                  <div className="bg-slate-950 bg-opacity-50 p-4">

                    <p className="text-md text-center">{a.champion_r.champion_r_name}</p>
                    <p className="text-sm text-center pb-3">Fourth Skill</p>

                    <video className="w-full border-2 border-yellow-600" controls>
                      <source src={a.champion_r.champion_r_video_webm} type="video/webm" />
                      <source src={a.champion_r.champion_r_video_mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="mt-4 pb-4">{a.champion_r.champion_r_description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          </div>
        {/************** SKILS END *************/}
         
       

          {/******** CHAMPION SKINS START *******/}
          <div className="text-center pt-20">
            <h1 className="text-white text-3xl font-bold tracking-widest">Skins</h1>
          </div>

          <div className="carousel carousel-center max-w-screen-lg rounded-box m-auto p-4 pb-20">
          {a.skins.map((skin, index) => (
              <Carousel key={index} imageUrl={skin.imageUrl} alt={skin.name}/>
          ))}
          </div>
          {/******** CHAMPION SKINS END *******/}

        </div>
      ))}
    </div>
  );
}

export default ChampionDetails;
