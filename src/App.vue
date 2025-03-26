<script setup lang="ts">
import WeatherCard from './components/WeatherCard.vue'

const joinville = {
  countryCode: 'br',
  countryName: 'Brazil',
  cityName: 'Joinville',
  stateCode: 'SC',
}
const urubici = {
  countryCode: 'br',
  countryName: 'Brazil',
  cityName: 'Urubici',
  stateCode: 'SC',
}
const sanFrancisco = {
  countryCode: 'us',
  countryName: 'United States of America',
  cityName: 'San Francisco',
  stateCode: 'CA',
}
const yakutsk = {
  countryCode: 'ru',
  countryName: 'Russia',
  cityName: 'Yakutsk',
  stateCode: 'Sakha Republic',
}
</script>

<template>
  <main>
    <h1>Hello Recruiter</h1>
    <WeatherCard v-bind="joinville" />
    <WeatherCard v-bind="sanFrancisco" />
    <WeatherCard v-bind="urubici" />
    <WeatherCard v-bind="yakutsk" />
  </main>
</template>

<style scoped lang="scss">
h1 {
  padding: 20px 0;
}

.unit {
  display: flex;
  padding: 15px 0;
  align-items: center;
  gap: 10px;

  width: 200px;

  &-label {
    font-size: large;
  }

  &-section {
    display: flex;
    align-items: center;

    width: 75px;
    gap: 5px;

    .icon {
      height: 40px;
    }
  }
}

.weather-card {
  box-shadow: 5px 5px 15px 5px #000000;
  padding: 20px;

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
