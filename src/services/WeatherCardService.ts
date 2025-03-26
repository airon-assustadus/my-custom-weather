const OPENWEATHERMAP_APIKEY = 'fc67bdf360f5e36df246ade494cea600'

const loadWeatherValues = async (lat: number = 0, lon: number = 0) => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely,alerts&appid=${OPENWEATHERMAP_APIKEY}&units=metric`

  return fetch(url).then((res) => res.json())
}

const getLatLonByCityStateCountry = async (city: string, state: string, country: string) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${OPENWEATHERMAP_APIKEY}`

  const fetching = await fetch(url)

  const result = await fetching.json()
  const weather = result[0]

  return {
    lat: weather.lat,
    lon: weather.lon,
    city: weather.city,
    state: weather.state,
    countryCode: weather.country,
  }
}

export { loadWeatherValues, getLatLonByCityStateCountry }
