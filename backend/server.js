require('dotenv').config();
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000;

app.get('/api/weather/current', async (req, res) => {
  const { city, countryCode } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${process.env.OPENWEATHER_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching current weather data");
  }
});

app.get('/api/weather/future', async (req, res) => {
  const { city, countryCode } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${process.env.OPENWEATHER_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching future weather data");
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
