import React, { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import { fetchChampions } from "../api/champions";
import LoadingSpinner from "./LoadingSpinner";
import ChampionFilter from "./ChampionFilter";


function ChampionList() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const champions = await fetchChampions();
        setHeroes(champions);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      abortController.abort();
    };
  }, []);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleRoleChange = (value) => {
    setSelectedRole(value);
  };

  const filteredHeroes = heroes.filter((hero) => {
    const championName = hero.node.champion_name.toLowerCase();
    const championRoles = hero.node.recommended_roles.map((role) =>
      role.toLowerCase()
    );

    const isNameMatch = championName.includes(searchQuery.toLowerCase());
    const isRoleMatch =
      selectedRole === "" || championRoles.includes(selectedRole);

    return isNameMatch && isRoleMatch;
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-lg m-auto pt-10">
        <ChampionFilter
          onSearchChange={handleSearchChange}
          onRoleChange={handleRoleChange}
        />
        <div className="grid grid-cols-4 gap-5 lg:grid-cols:4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 p-4 pt-10">
          {filteredHeroes.length > 0 ? (
            filteredHeroes.map((a) =>
              a.node.champion.profile_image?.url ? (
                <Card
                  key={a.node.uid}
                  url={a.node.url}
                  champion_name={a.node.champion_name}
                  roles={a.node.recommended_roles}
                  difficulty={a.node.difficulty}
                  profile_image={a.node.champion.profile_image?.url}
                />
              ) : null
            )
          ) : (
            <p>No champion found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChampionList;
