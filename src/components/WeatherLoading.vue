<template>
  <div class="loading">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" />
    </svg>
    <h1>Loading</h1>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  width: 100%;

  svg {
    width: 40px;

    circle {
      fill: transparent;
      stroke: #2f3;
      stroke-width: 10;
      stroke-dasharray: 20;
      stroke-linecap: round;
      stroke-dashoffset: 75;
      transform-origin: 50% 50%;

      animation-duration: 1.4s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      animation-name: circle--animation;
    }
  }

  h1 {
    margin-left: 10px;
  }
}

@keyframes circle--animation {
  0% {
    stroke-dashoffset: 75;
  }

  50% {
    stroke-dashoffset: 280;
  }
}
</style>
