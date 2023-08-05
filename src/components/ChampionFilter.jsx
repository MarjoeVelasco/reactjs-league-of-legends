import React, { useState } from "react";

function ChampionFilter({ onSearchChange, onRoleChange }) {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleRoleChange = (event) => {
    onRoleChange(event.target.value);
  };

  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search champion..."
        className="p-2 border border-gray-300 rounded-md mr-4"
      />
      <select
        onChange={handleRoleChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Roles</option>
        <option value="fighter">Fighter</option>
        <option value="mage">Mage</option>
        <option value="marksman">Marksman</option>
        <option value="support">Support</option>
        <option value="tank">Tank</option>
      </select>
    </div>
  );
}

export default ChampionFilter;
