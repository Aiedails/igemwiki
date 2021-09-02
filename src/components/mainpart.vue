<template>
  <div>
    <div style="position: absolute; top: 100px; left: 300px">{{ width }}</div>
    <div id="part1">
      <div style="text-align: center">
        <img class="logo" src="@/assets/svgs/Logo.svg" />
        <div class="Title">M I B O M</div>
        <div class="sub_title">
          Mussel Inspired Biological Opertional Material
        </div>
      </div>
      <div style="margin-top: -30px">
        <img class="mount1" src="@/assets/svgs/Mountain1.svg" />
        <div class="part1_middle">
          <img class="mid1" src="@/assets/svgs/Middle1.svg" />
          <img class="cloud1_0 cloud1" src="@/assets/svgs/Cloud1_Under.svg" />
          <img class="cloud1_1 cloud1" src="@/assets/svgs/Cloud1_Above.svg" />
        </div>
        <img class="mount4" src="@/assets/svgs/Mountain4.svg" />
      </div>
      <img class="mount2" src="@/assets/svgs/Mountain2.svg" />
      <img class="mount3" src="@/assets/svgs/Mountain3.svg" />
    </div>
  </div>
</template>

<script>
//import { gsap } from "gsap";
//uncomment this line to use gsap in this components
//I recommend just to use gsap saperately, not gloably.
//So use VueMotion in simple animate and gsap for more complex one.

export default {
  name: "mainpart",
  props: {
    width: Number,
  },

  data: () => ({
    isIntersecting: false,
    istop: true,
    options: {
      //used for the $vuetify.goto() func.
      duration: 400,
      offset: 0,
      easing: "easeInQuad",
    },
  }),
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
      console.log(this.isIntersecting);
      this.istop = this.isIntersecting;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
#part1 {
  position: relative;
}
.logo {
  margin-top: 50px;
  width: 100px;
}
.Title {
  font-family: "EB Garamond", serif;
  font-size: 5rem;
}
.sub_title {
  font-family: "EB Garamond", serif;
  font-size: 1.5rem;
}
.mount1 {
  display: inline-flex;
  width: 30%;
  padding-left: 2%;
}
.mount4 {
  display: inline-flex;
  width: 30%;
  padding-right: 2%;
  padding-bottom: 5%;
}
.part1_middle {
  min-width: 45%;
  margin-right: -5%;
  display: inline-flex;
  position: relative;
  transform: translateY(-20%);
}
.mid1 {
  margin: auto;
  padding-bottom: 50%;
  width: 20%;
  z-index: 3;
}
.cloud1 {
  position: absolute;
}
.cloud1_0 {
  width: 50%;
  top: 10%;
  left: 23%;
  z-index: 2;
}
.cloud1_1 {
  width: 37.7%;
  top: 15.28%;
  left: 32.8%;
  z-index: 5;
}
.mount2 {
  position: absolute;
  width: 10%;
  left: 25%;
  top: 80%;
}
.mount3 {
  position: absolute;
  width: 15%;
  left: 70%;
  top: 85%;
}

img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
}
</style>