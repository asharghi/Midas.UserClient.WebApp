<template>
  <swiper class="full-height" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <SwipeInfo v-if="index > 0" label="Dra ned for forrige" :down="true" />
      <SwipeInfo v-if="index < items.length-1" label="Dra opp for neste" :down="false" />
      <img src="../assets/panorama_sample.jpeg" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import SwipeInfo from "@/components/SwipeInfo.vue";
import "swiper/css/swiper.css";

export default {
  components: {
    SwipeInfo,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      items: [1, 2, 3],
      swiperOptions: {
        direction: "vertical",
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  directives: {
    swiper: directive
  }
};
</script>
<style scoped>
.full-height {
  height: 100vh;
}
</style>
