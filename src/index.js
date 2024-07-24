import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>This project was coded by <a href="https://github.com/anabana21" target="_blank" rel="noreferrer">Ana Vogt</a> and is <a href="https://github.com/anabana21/homework-week-3-react" target="_blank" rel="noreferrer">open-sourced on Github</a> and hosted on <a href="https://grand-llama-873f8e.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> </footer>
    </div>
  </StrictMode>
);
