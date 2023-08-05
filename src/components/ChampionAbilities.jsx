import React, { useState } from "react";
import SkillDetails from "./SkillDetails"; // Custom component for displaying skill details

function ChampionAbilities({ champion }) {
  const [selectedSkill, setSelectedSkill] = useState("passive");

  const handleSkillClick = (skillKey) => {
    setSelectedSkill(skillKey);
  };

  const skillsData = {
    passive: {
      name: champion.champion_passive.champion_passive_name,
      description: champion.champion_passive.champion_passive_description,
      videoWebm: champion.champion_passive.champion_passive_video_webm,
      videoMp4: champion.champion_passive.champion_passive_video_mp4,
    },
    q: {
      name: champion.champion_q.champion_q_name,
      description: champion.champion_q.champion_q_description,
      videoWebm: champion.champion_q.champion_q_video_webm,
      videoMp4: champion.champion_q.champion_q_video_mp4,
    },
    w: {
      name: champion.champion_w.champion_w_name,
      description: champion.champion_w.champion_w_description,
      videoWebm: champion.champion_w.champion_w_video_webm,
      videoMp4: champion.champion_w.champion_w_video_mp4,
    },
    e: {
      name: champion.champion_e.champion_e_name,
      description: champion.champion_e.champion_e_description,
      videoWebm: champion.champion_e.champion_e_video_webm,
      videoMp4: champion.champion_e.champion_e_video_mp4,
    },
    r: {
      name: champion.champion_r.champion_r_name,
      description: champion.champion_r.champion_r_description,
      videoWebm: champion.champion_r.champion_r_video_webm,
      videoMp4: champion.champion_r.champion_r_video_mp4,
    },
  };

  return (
    <div className="w-full bg-[url('../src/images/noxus_splash.jpg')] bg-no-repeat bg-center bg-cover text-primary-content mt-4">
      <div className="bg-slate-900 bg-opacity-30 pt-20 pb-10">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold tracking-widest pt-2">
            Abilities
          </h1>
        </div>

        <div className="max-w-screen-md m-auto">
          <div className="grid grid-cols-3 gap-4 grid-flow-row">
            <div className="p-5 text-center row-start-1 row-end-4">
              {Object.keys(skillsData).map((skillKey) => (
                <div
                  key={skillKey}
                  className="flex flex-col justify-center items-center p-2 cursor-pointer"
                  onClick={() => handleSkillClick(skillKey)}
                >
                  <p>{skillKey.toUpperCase()}</p>
                  <img
                    className=""
                    src={champion[`champion_${skillKey}`][`champion_${skillKey}_icon`]}
                    alt={champion[`champion_${skillKey}`][`champion_${skillKey}_name`]}
                  />
                </div>
              ))}
            </div>

            <div className="p-5 col-start-2 col-end-4 row-start-1 row-end-4">
              {selectedSkill && (
                <SkillDetails
                  name={skillsData[selectedSkill].name}
                  description={skillsData[selectedSkill].description}
                  videoWebm={skillsData[selectedSkill].videoWebm}
                  videoMp4={skillsData[selectedSkill].videoMp4}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampionAbilities;
