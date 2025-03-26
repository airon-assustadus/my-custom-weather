<script setup lang="ts">
import { WeatherUnitType } from '@/enums/WeatherUnitType'

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator(value: string) {
      return Object.keys(WeatherUnitType).includes(value)
    },
  },
})

let unit
let icon
let color: string

switch (props.type) {
  case WeatherUnitType.Humidity: {
    unit = '%'
    icon = 'humidity'
    break
  }
  case WeatherUnitType.Pressure: {
    unit = 'hPa'
    icon = 'pressure-icon'
    break
  }
  default: {
    unit = '°C'
    if (props.value <= 5) {
      icon = 'termometer-blue'
      color = 'blue'
    } else if (props.value > 25) {
      icon = 'termometer-red'
      color = 'red'
    } else {
      icon = 'termometer-orange'
      color = 'orange'
    }
  }
}
</script>

<template>
  <div class="unit">
    <span class="unit-label">{{ props.type }}</span>
    <div class="unit-section">
      <img class="icon" :src="`src/assets/${icon}.png`" :alt="props.type" />
      <span class="value" :style="{ color }">{{ props.value }} {{ unit }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.unit {
  display: flex;
  padding: 15px 0;
  align-items: center;
  gap: 10px;

  width: 250px;

  &-label {
    font-size: large;
  }

  &-section {
    display: flex;
    align-items: center;

    width: 120px;
    gap: 5px;

    .icon {
      height: 40px;
    }
  }
}
</style>
