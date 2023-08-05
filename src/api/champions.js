export async function fetchChampions() {
  const response = await fetch(
    "https://mocki.io/v1/4350eb47-800d-492b-9a1a-591d1741aa64",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.champions;
}
