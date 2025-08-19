import { useState } from "react";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import WeatherCard from "./Components/Weathercard";

const API_KEY = "e384e6928209077c411614b9960ef8cd"; // apna API key

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError("❌ City not found");
        return;
      }
      const alreadyexists = weatherList.find(item => item.id===data.id);
      if(alreadyexists){
        alert("City already shown");
        return;
      }

      setError(""); 
      setWeatherList((prev) => [data, ...prev]); 
    } catch (e) {
      setError("⚠️ Network Error" ,e.message);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-200 dark:bg-gray-900 dark:text-white">
      <Header />
      <div className="my-4 flex flex-col items-center">
      <SearchBox onSearch={fetchWeather} />
       <button onClick={() => setWeatherList([])} className="bg-red-600 items-center justify-center text-white px-4 py-2 rounded hover:bg-red-700">Clear All</button>
       </div>
      {error && <p className="text-red-600 text-center">{error}</p>}
       


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {weatherList.length > 0 ? (
          weatherList.map((city) => (
            <WeatherCard key={city.id} data={city} />
          ))
        ) : (
          <p className="items-center my-4 flex flex-col  text-2xl">No weather data available</p>
        )}
        
      </div>
      <footer className="text-center p-4 text-gray-600 dark:text-gray-400 w-full border-t">
        © 2025 Weather App || Made with ❤️ by ABHIROOP GHOSH
      </footer>
    </div>
  );
}

export default App;
