import React from "react";

function WeatherCard({ data }) {
  return (
    <div className="bg-white text-black dark:text-white dark:bg-gray-800 p-6 m-4 rounded shadow text-center">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-2xl">{data.main.temp}°C</p>
      <p>{data.weather[0].description}</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
