<template>
  <div :class="{'swipe-info':true, 'down':down}">
    <div>
      <img src="../assets/swipeup.png" />
    </div>
    <div>
      <span>{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    down: Boolean
  }
};
</script>

<style scoped>
.swipe-info {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 0;
  z-index: 10;
  margin: 1em 0 1em 0;
}
.swipe-info.down {
  top: 0;
  bottom: auto;
}
.swipe-info.down img {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.swipe-info img {
  width: 3em;
}
.swipe-info span {
  color: white;
  font-weight: bold;
  opacity: 0.5;
}
</style>
