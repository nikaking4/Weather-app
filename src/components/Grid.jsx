function Grid({ current }) 
{
    return (
<section className="metrics">
        <div className="metrics__card">
        <p className="metrics__label">temp</p>
        <p className="metrics__value">{Math.round(current.temp)}°</p>
      </div>
      <div className="metrics__card">
        <p className="metrics__label">Feels Like</p>
        <p className="metrics__value">{Math.round(current.feelsLike)}°</p>
      </div>
      <div className="metrics__card">
        <p className="metrics__label">Humidity</p>
        <p className="metrics__value">{current.humidity}%</p>
      </div>
      <div className="metrics__card">
        <p className="metrics__label">Wind</p>
        <p className="metrics__value">{Math.round(current.windSpeed)} km/h</p>
      </div>
      <div className="metrics__card">
        <p className="metrics__label">Precipitation</p>
        <p className="metrics__value">{current.precipitation} mm</p>
      </div>
    </section>
  );
}
export default Grid;