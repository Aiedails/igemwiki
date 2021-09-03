<template>
  <div>
    <div style="position: absolute; top: 100px; left: 300px">{{ width }}</div>
    <div id="part1">
      <div style="text-align: center">
        <img class="logo" src="@/assets/svgs/Logo.svg" />
        <div class="text-h4 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h1">
          M I B O M
        </div>
        <div class="text-h6 text-sm-h6 text-md-h5 text-lg-h5 text-xl-h5">
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
      <img class="cloud2 cloud_ani" src="@/assets/svgs/Cloud2.svg" />
      <img class="cloud3_0 cloud_ani" src="@/assets/svgs/Cloud3_Under.svg" />
      <img class="cloud3_1 cloud_ani" src="@/assets/svgs/Cloud3_Above.svg" />
      <img class="boat1" id="boat1" src="@/assets/svgs/Boat1.svg" />
    </div>
    <div id="part2">
      <img class="mount5" src="@/assets/svgs/Mountain5.svg" />
      <img class="mount6" src="@/assets/svgs/Mountain6.svg" />
      <img class="bone_fracture" src="@/assets/svgs/Bone_Fracture.svg" />
      <img class="mount7" src="@/assets/svgs/Mountain7.svg" />
      <img class="boat2" id="boat2" src="@/assets/svgs/Boat2.svg" />
    </div>
    <v-row id="part3" justify="center" style="margin-top: 100px">
      <v-col cols="12">
        <div
          style="margin-top: 35px; text-align: center; display: block"
          class="text-h5 text-xl-h4"
          id="text1"
        >
          Bone fracture is really common in daily life. <br />
          Sports, car accidents, falls, and certain medicall conditions <br />
          are all possible causes of bone fracture.
        </div>
      </v-col>
      <v-col cols="12">
        <div
          style="text-align: center; display: block"
          class="text-h5 text-xl-h4"
          id="text2"
        >
          Bone fracture is really common in daily life. <br />
          Sports, car accidents, falls, and certain medicall conditions <br />
          Sports, car accidents, falls, and certain medicall conditions <br />
          are all possible causes of bone fracture.
        </div>
      </v-col>
    </v-row>
    <v-row
      id="part4"
      justify="center"
      align="center"
      class="white"
      style="margin-top: 50px"
    >
      <v-col cols="12" sm="12" md="6" lg="6" xl="6" align-self="center">
        <v-row
          justify="center"
          class="text-h2 text-sm-h1 text-md-h1 text-lg-h1 text-xl-h1"
        >
          <div
            v-intersect="{
              handler: numberup,
              options: { threshold: 1.0 },
            }"
          >
            {{ animatednumber }}
          </div>
        </v-row>
        <v-row
          justify="center"
          class="text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4"
        >
          Traumatic fractures
        </v-row>
        <v-row
          justify="center"
          class="text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4"
        >
          in China 2021 by estimate
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <v-img
          :aspect-ratio="2231 / 1171"
          src="@/assets/svgs/Pie.svg"
          style="margin: auto 5%"
        />
      </v-col>
    </v-row>
    <v-row id="part5" justify="center" style="margin-top: 35px">
      <v-col cols="12">
        <div
          style="margin-top: 35px; text-align: center; display: block"
          class="text-h5 text-xl-h4"
          id="text3"
        >
          Bone fracture is really common in daily life. <br />
          Sports, car accidents, falls, and certain medicall conditions <br />
          are all possible causes of bone fracture.
        </div>
      </v-col>
    </v-row>
    <div id="part6">
      <div style="position: relative">
        <img class="clock_0" src="@/assets/svgs/Clock_Under.svg" />
        <img class="clock_1" src="@/assets/svgs/Clock_Above.svg" />
      </div>
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-h3" style="display: inline-block">4.4h</div>
          <div class="text-h5" style="display: inline-block; padding-left: 5px">
            per week
          </div>
        </v-col>
        <v-col cols="12">
          <div
            style="text-align: center; display: block; padding-right: 140px"
            class="text-h3"
          >
            ≈2662
          </div>
          <div class="text-h5">routine fracture operations</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
//uncomment this line to use gsap in this components
//I recommend just to use gsap saperately, not gloably.
//So use VueMotion in simple animate and gsap for more complex one.

export default {
  name: "mainpart",
  props: {
    width: Number,
  },

  data: () => ({
    fracture_number: 0,

    step: [], //use for store position of title
    position: 1, //use for v-stepper to know where we are

    isIntersecting: false,
    istop: true,
    options: {
      //used for the $vuetify.goto() func.
      duration: 400,
      offset: 0,
      easing: "easeInQuad",
    },
  }),
  computed: {
    animatednumber: function () {
      return this.fracture_number.toFixed(0);
    },
  },
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
      console.log(this.isIntersecting);
      this.istop = this.isIntersecting;
    },
    numberup(entries, observer, isIntersecting) {
      if (this.fracture_number < 295526 && isIntersecting) {
        gsap.to(this.$data, {
          duration: 0.5,
          delay: 1,
          fracture_number: 295526,
        });
      }
    },
    updatepos() {
      /*
      var pos = [];
      var posnow = 0;
      for (var i = 0; i < this.step.length; i++) {
        pos[i] = this.step[i].getBoundingClientRect().top;
        if (pos[i] <= 300) posnow = i;
      }
      this.position = posnow + 1;
      */
    },
  },
  mounted() {
    this.step[0] = document.getElementById("text1");
    this.step[1] = document.getElementById("text2");
    this.step[2] = document.getElementById("general_information");
    this.step[3] = document.getElementById("specific_design");
    this.step[4] = document.getElementById("use_of_harmful");
    this.updatepos();
    setTimeout(() => {
      this.firstload = false;
      console.log("loaded");
    }, 1000);
    gsap.fromTo(
      ".part1_middle",
      { opacity: 0 },
      { duration: 0.3, delay: 1, yPercent: -18, opacity: 1, ease: "back" }
    );
    gsap.fromTo(
      ".mount1",
      { opacity: 0, rotationY: -180 },
      {
        duration: 0.5,
        delay: 1,
        rotationY: 0,
        opacity: 1,
        ease: "back",
        transformOrigin: "0% 0%",
      }
    );
    gsap.fromTo(
      ".mount4",
      { opacity: 0, rotationY: 180 },
      {
        duration: 0.5,
        delay: 1,
        rotationY: 0,
        opacity: 1,
        ease: "back",
        transformOrigin: "100% 0%",
      }
    );
    gsap.fromTo(
      ".mount2",
      { opacity: 0, y: 80 },
      {
        duration: 0.3,
        delay: 1,
        y: 0,
        opacity: 1,
        ease: "back",
        transformOrigin: "100% 0%",
      }
    );
    gsap.fromTo(
      ".mount3",
      { opacity: 0, y: 80 },
      {
        duration: 0.3,
        delay: 1,
        y: 0,
        opacity: 1,
        ease: "back",
        transformOrigin: "100% 0%",
      }
    );
    gsap.fromTo(
      ".cloud1",
      { opacity: 0 },
      {
        duration: 3,
        delay: 1.5,
        y: 0,
        opacity: 1,
        ease: "back",
        transformOrigin: "100% 0%",
      }
    );
    gsap.fromTo(
      ".cloud_ani",
      { opacity: 0 },
      {
        duration: 3,
        delay: 1.5,
        y: 0,
        opacity: 1,
        ease: "back",
        transformOrigin: "100% 0%",
      }
    );

    gsap.fromTo(
      "#part2",
      { opacity: 0 },
      {
        duration: 0.3,
        delay: 3,
        y: 0,
        opacity: 1,
        ease: "power3.in",
        transformOrigin: "100% 0%",
      }
    );
    gsap.fromTo(
      ".clock_1",
      { rotate: -219 },
      { duration: 0.6, delay: 1, rotate: 0 }
    );

    var tl_boat1 = gsap.timeline({ repeat: -1, delay: 3 });
    tl_boat1.from("#boat1", {
      duration: 0.8,
      opacity: 0,
      x: 50,
      ease: "sine.in",
    });
    tl_boat1.to("#boat1", { duration: 7, x: -700, ease: "none" });
    tl_boat1.to("#boat1", {
      duration: 0.8,
      x: -750,
      opacity: 0,
      ease: "sine.out",
    });
    var tl_boat2 = gsap.timeline({ repeat: -1, delay: 3 });
    tl_boat2.from("#boat2", {
      duration: 2.5,
      opacity: 0,
      x: -160,
      y: 80,
      ease: "sine.in",
    });
    tl_boat2.to("#boat2", { duration: 5, x: 400, y: -200, ease: "none" });
    tl_boat2.to("#boat2", {
      duration: 0.8,
      x: 440,
      y: -220,
      opacity: 0,
      ease: "sine.out",
    });
  },
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
.sub_title {
  font-family: "EB Garamond", serif;
  font-size: 1.5rem;
}
.mount1 {
  display: inline-flex;
  width: 30%;
  max-width: 510px;
  padding-left: min(2%, 35px);
  z-index: 3;
}
.mount4 {
  position: relative;
  display: inline-flex;
  width: 30%;
  max-width: 510px;
  padding-right: min(2%, 35px);
  padding-bottom: min(5%, 85px);
  z-index: 3;
}
.part1_middle {
  min-width: max(46%, 100% - 510px - 510px + 6%);
  //Oh I love this code.
  margin-left: -3%;
  margin-right: -3%;
  display: inline-flex;
  position: relative;
  //transform: translateY(-18%);
}
.mid1 {
  margin: auto;
  padding-bottom: min(50%, 391px);
  width: 20%;
  max-width: 156.4px;
  z-index: 3;
}
.cloud1 {
  position: absolute;
}
.cloud1_0 {
  width: 50%;
  max-width: 391px;
  top: 10%;
  left: max(23%, 50% - (391px * 27 / 50));
  z-index: 2;
}
.cloud1_1 {
  width: 37.7%;
  max-width: 294.814px;
  top: 15.27%;
  left: max(32.8%, 50% - (294.814px * 17.2 / 37.7));
  z-index: 5;
}
.mount2 {
  position: absolute;
  width: 10%;
  max-width: 170px;
  left: min(25%, 425px);
  top: 70%;
  z-index: 5;
}
.mount3 {
  position: absolute;
  width: 15%;
  max-width: 255px;
  left: 70%;
  top: 70%;
  z-index: 3;
}
.cloud2 {
  position: absolute;
  width: 23%;
  max-width: 391px;
  left: min(8%, 135px);
  top: 63%;
  z-index: 3;
}
.cloud3_0 {
  position: absolute;
  width: min(10%, 170px);
  left: max(81%, 100% - 323px);
  top: 40%;
  z-index: 2;
}
.cloud3_1 {
  position: absolute;
  width: min(12%, 204px);
  left: max(80%, 100% - 340px);
  top: 40%;
  z-index: 4;
}
.boat1 {
  position: absolute;
  width: 40px;
  left: 65%;
  top: 70%;
  z-index: 2;
}
#part2 {
  position: relative;
}
.mount5 {
  width: 30%;
  max-width: 510px;
  margin-left: max(18%, 50% - 544px);
}
.mount6 {
  position: absolute;
  width: 30%;
  max-width: 510px;
  left: min(52%, 50% + 34px);
  top: 40%;
  z-index: 3;
}
.bone_fracture {
  position: absolute;
  width: 60%;
  max-width: 1020px;
  left: max(22%, 50% - 476px);
  top: 17%;
  z-index: 2;
}
.mount7 {
  position: absolute;
  width: 10%;
  max-width: 170px;
  left: max(37%, 50% - 221px);
  top: 80%;
  z-index: 5;
}
.boat2 {
  position: absolute;
  width: 50px;
  left: 48%;
  top: 65%;
  z-index: 1;
}
#part6 {
  text-align: center;
  position: relative;
  display: block;
  margin-top: 35px;
}
.clock_0 {
  width: 40%;
  max-width: 680px;
  margin: auto;
}
.clock_1 {
  position: absolute;
  width: 17%;
  max-width: 289px;
  top: 23%;
  left: max(41.8%, 50% - 139.34px);
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