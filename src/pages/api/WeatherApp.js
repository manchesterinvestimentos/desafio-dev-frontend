export const fetchWeather = async (city) => {
  const apiKey = "3b160403fab665468371376faad5d880";
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar os dados do clima:", error);
    throw error;
  }
};


  export const fetchCitySuggestions = async (query) => {
    const apiKey = "3b160403fab665468371376faad5d880";
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&limit=5`
      );
      const data = await response.json();
      if (data.cod === "200") {
        const uniqueCities = data.list.map((city) => ({
          name: city.name,
          country: city.sys.country,
        }));
        const filteredCities = Array.from(
          new Set(uniqueCities.map((city) => `${city.name}, ${city.country}`))
        ).map((cityString) => {
          const [name, country] = cityString.split(", ");
          return { name, country };
        });
        return filteredCities;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
      return [];
    }
  };
  
  
  