// pages/api/weather.js
export default async function handler(req, res) {
    const API_KEY = process.env.OPENWEATHER_API_KEY; // Pastikan API key ada di .env.local
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'Nama kota harus diberikan' });
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`
        );

        if (!response.ok) {
            throw new Error('Gagal mengambil data cuaca');
        }

        const data = await response.json();

        const weatherData = {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
