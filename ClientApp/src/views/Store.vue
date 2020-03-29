<template>
  <swiper :style="'height: ' + windowHeight + 'px;'" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <SwipeInfo v-if="index > 0" label="Dra ned for forrige" :down="true" />
      <SwipeInfo v-if="index < items.length-1" label="Dra opp for neste" :down="false" />
      <div style="width: 100vw;overflow-y: scroll;">
        <div :style="'width:2000px;height: ' + windowHeight + 'px;background-image: url('+ item +');'" class="panorama-sample"></div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { dragscroll } from 'vue-dragscroll'
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
      //using window.innerHeight for iOS safari
      windowHeight: 0,
      items: ['/assets/panorama_sample.jpeg', '/assets/panorama_sample.jpeg', '/assets/panorama_sample.jpeg'],
      swiperOptions: {
        direction: "vertical",
        mousewheel: false,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    window.addEventListener("resize", this.setWindowHeight);
    this.setWindowHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.setWindowHeight);
  },
  methods: {
    setWindowHeight() {
      this.windowHeight = window.innerHeight;
    }
  },
  directives: {
    swiper: directive,
    'dragscroll': dragscroll
  }
};
</script>
<style scoped>
.panorama-sample {
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-overflow-scrolling: touch;
}
*{
  cursor: pointer;
}
</style>
