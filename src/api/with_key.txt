export async function fetchChampionDetails(champion_name) {
  const response = await fetch(
    `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${champion_name.name}`,
    {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': 'a9be090d8emsh51ed80281ccf6b9p1f27e3jsne4ffd5a8b891',
        'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
      }
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log(data);
  return data.champion;
}
