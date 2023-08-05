import React from "react";
import { Link } from "react-router-dom";

function Card({ champion_name, roles, difficulty, profile_image, url }) {
  return (
    <div>
      <Link to={url}>
        <div className="border-double border-2 border-yellow-600 card card-compact w-auto bg-base-100 shadow-xl hover:scale-105 duration-500 ease-in-out">
          <figure>
            <img src={profile_image} alt={champion_name} />
          </figure>
          <div className="card-body gap-0">
            <p className="font-normal card-title text-center text-sm text-white">
              {champion_name}
            </p>
            <div className="flex text-xs">
              <span className="mr-1">Role: </span>

              {roles.map((role,index) => (
                <div className="tooltip" data-tip={role} key={index}>
                  <img
                    src={`./assets/role_icons/${role}.webp`}
                    alt={`Role icon for ${role}`}
                    width="20px"
                  />
                </div>
              ))}
            </div>
            <span className="text-xs">Difficulty: {difficulty}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
