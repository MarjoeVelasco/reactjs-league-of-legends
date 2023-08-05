import React from "react";

function SkillDetails({ name, description, videoWebm, videoMp4 }) {
  return (
    <div className="bg-slate-950 bg-opacity-50 p-4">
      <p className="text-md text-center">{name}</p>
      <p className="text-sm text-center pb-3">Skill</p>
      <video className="w-full border-2 border-yellow-600" controls>
        <source src={videoWebm}/>
        <source src={videoMp4}/>
        Your browser does not support the video tag.
      </video>
      <p className="mt-4 pb-4">{description}</p>
    </div>
  );
}

export default SkillDetails;
