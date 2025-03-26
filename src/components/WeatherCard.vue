<template>
  <div class="weather-card">
    <div class="weather-card-title">
      <img
        class="weather-card-title-flag"
        :src="`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`"
        :alt="countryName"
      />
      <h2 class="weather-card-title-text">{{ cityName }} - {{ stateCode }}</h2>
    </div>

    <WeatherLoading v-if="isLoading" />

    <div class="weather-card-content" v-else>
      <WeatherUnit :value="tempValue" type="Temperature" />
      <WeatherUnit :value="humiValue" type="Humidity" />
      <WeatherUnit :value="presValue" type="Pressure" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import WeatherUnit from './WeatherUnit.vue'
import WeatherLoading from './WeatherLoading.vue'
import { getLatLonByCityStateCountry, loadWeatherValues } from '@/services/WeatherCardService'

const props = defineProps({
  countryCode: {
    type: String,
    required: true,
  },
  countryName: {
    type: String,
    required: true,
  },
  stateCode: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
})

const isLoading = ref(true)

let lat: number | undefined = undefined
let lon: number | undefined = undefined
let tempValue: number
let humiValue: number
let presValue: number

const loadWeatherData = async () => {
  isLoading.value = true
  if (!lat && !lon) {
    const latLon = await getLatLonByCityStateCountry(
      props.cityName,
      props.stateCode,
      props.countryCode,
    )
    lat = latLon.lat
    lon = latLon.lon
  }

  const {
    current: { temp, pressure, humidity },
  } = await loadWeatherValues(lat, lon)

  tempValue = temp
  humiValue = humidity
  presValue = pressure

  isLoading.value = false
}

let intervalId: number
onMounted(() => {
  intervalId = setInterval(() => {
    loadWeatherData()
  }, 600_000)
  loadWeatherData()
})

onUnmounted(() => clearInterval(intervalId))
</script>

<style lang="scss" scoped>
.weather-card {
  box-shadow: 5px 5px 15px 5px #000000;
  padding: 20px;
  margin-bottom: 20px;
  width: 720px;
  height: 185px;

  &-title {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid green;
    margin-bottom: 10px;

    h2 {
      padding-left: 10px;
    }
  }

  &-content {
    display: flex;
    gap: 10px;
  }
}
</style>
