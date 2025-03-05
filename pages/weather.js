// pages/weather.js
import { useState } from 'react';

const WeatherPage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    const fetchWeatherData = async () => {
        if (!city) {
            setError('Masukkan nama kota!');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`/api/weather?city=${city}`);
            if (!res.ok) {
                throw new Error('Gagal mengambil data cuaca');
            }

            const data = await res.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <div className="container">
            <h1>Informasi Cuaca</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Masukkan nama kota"
                />
                <button type="submit">Cari</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {weatherData && (
                <div className="weather-card">
                    <h2>{weatherData.city}, {weatherData.country}</h2>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                        alt={weatherData.description}
                    />
                    <p className="temperature">{weatherData.temperature}°C</p>
                    <p className="description">{weatherData.description}</p>
                    <div className="details">
                        <p>Terasa seperti: {weatherData.feels_like}°C</p>
                        <p>Kelembaban: {weatherData.humidity}%</p>
                        <p>Kecepatan angin: {weatherData.wind_speed} m/s</p>
                    </div>
                </div>
            )}

            <style jsx>{`
                .container {
                    max-width: 400px;
                    margin: auto;
                    text-align: center;
                }
                .weather-card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 20px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .temperature {
                    font-size: 2.5rem;
                    font-weight: bold;
                }
                .description {
                    text-transform: capitalize;
                }
                .details {
                    border-top: 1px solid #eee;
                    padding-top: 10px;
                }
                .error {
                    color: red;
                }
                input {
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    margin-right: 8px;
                }
                button {
                    padding: 8px 16px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0051a2;
                }
            `}</style>
        </div>
    );
};

export default WeatherPage;
