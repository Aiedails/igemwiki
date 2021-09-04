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
      <img class="line1_0" src="@/assets/svgs/Line.svg" />
      <img class="line1_1" src="@/assets/svgs/Line.svg" />
      <img class="bone_fracture" src="@/assets/svgs/Bone_Fracture.svg" />
      <img class="mount7" src="@/assets/svgs/Mountain7.svg" />
      <img class="boat2" id="boat2" src="@/assets/svgs/Boat2.svg" />
    </div>
    <v-row id="part3" justify="center" style="margin-top: 100px">
      <v-col cols="12">
        <div
          style="
            margin: 35px auto 0;
            max-width: 800px;
            text-align: center;
            display: block;
          "
          class="text-h5 text-xl-h4"
          id="text1"
        >
          Bone fracture is really common in daily life. Sports, car accidents,
          falls, and certain medicall conditions are all possible causes of bone
          fracture.
        </div>
      </v-col>
      <v-col cols="12">
        <div
          style="
            margin: 35px auto 0;
            max-width: 800px;
            text-align: center;
            display: block;
          "
          class="text-h5 text-xl-h4"
          id="text2"
        >
          In china, it is estimated that in 2021, there will be 295526 traumatic
          fractures, of which 10.21% will be femoral fractures. 95% of femoral
          shaft fractures are comminuted. Therefore, there will be an average of
          at least 280,000 comminuted fractures per year in China.
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
          style="
            margin: 35px auto 0;
            max-width: 800px;
            text-align: center;
            display: block;
          "
          class="text-h5 text-xl-h4"
          id="text3"
        >
          According to our interviews with clinicians, the surgical time for
          comminuted fractures is twice as long as that for conventional
          fractures, which is mainly because of the cumbersome fixation of bone
          fragments. This indicates at least 4.4 hours of surgery per week will
          be taken up due to the complex fixation in one hospital. Medical
          resources are tied up in complex procedures.
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
    <div id="part7">
      <img class="mibom" src="@/assets/svgs/Mibom.svg" />
      <img class="line2_0" src="@/assets/svgs/Line.svg" />
      <img class="line2_1" src="@/assets/svgs/Line.svg" />
    </div>
    <div id="part8">
      <div
        style="
          margin: 35px auto 0;
          max-width: 800px;
          text-align: center;
          display: block;
        "
        class="text-h5 text-xl-h4"
        id="text4"
      >
        This year, ShanghaiTech_China developed a new flexible osteogenic glue--
        MIBOM, Mussel Inspired Biologically Operation Material--to address these
        limitations, which contains four systems, responsible for the adhesion,
        structural strength, degradation and drug release respectively.
      </div>
      <div style="position: relative; margin: 35px 5%">
        <img class="menu" src="@/assets/svgs/Menu.svg" />
        <img class="logo_a" src="@/assets/svgs/Middle1.svg" />
        <img class="logo_h" src="@/assets/svgs/Logo_hydrogel.svg" />
        <img class="logo_r" src="@/assets/svgs/Logo_regulation.svg" />
        <img class="logo_d" src="@/assets/svgs/Logo_drug.svg" />
        <div class="text_a text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-xl-h3">
          ADHESION
        </div>
        <div class="text_h text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-xl-h3">
          HYDROGEL
        </div>
        <div class="text_r text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-xl-h3">
          REGULATION
        </div>
        <div class="text_d text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-xl-h3">
          DRUG RELEASING
        </div>
      </div>
    </div>
    <img class="divider" src="@/assets/svgs/Divider.svg" />
    <div id="part9">
      <img class="adhesion" src="@/assets/svgs/Adhesion.svg" />
      <div class="text-h5 text-xl-h4" id="text5">
        The first part of MIBOM is the adhesion system. We got the inspiration
        for this design from mussels, a creature that can adhere themselves
        tightly to reefs, thanks to the mussel foot protein(mfp-5). We
        constructed modified mfp-5 in E.coli and extract it in a more effective
        way, compared with the current natural extraction from the mussels.
        These proteins can form firm bridges between the hydrogel medium and the
        bone fragments, sticking them together, helping the bone to recorver.
      </div>
      <div class="a_steps">
        <img class="a_step1" src="@/assets/svgs/A_step1.svg" />
        <img class="a_step2" src="@/assets/svgs/A_step2.svg" />
        <img class="a_step3" src="@/assets/svgs/A_step3.svg" />
        <img class="a_line12" src="@/assets/svgs/A_line12.svg" />
        <img class="a_line23" src="@/assets/svgs/A_line23.svg" />
      </div>
    </div>
    <img class="divider" src="@/assets/svgs/Divider.svg" />
    <div id="part10">
      <img class="hydrogel" src="@/assets/svgs/Hydrogel.svg" />
      <v-row>
        <v-col cols="8" sm="8" md="8" lg="8" xl="9">
          <div class="text-h5 text-xl-h4" id="text6">
            A Bicrosslinking system combining Alginate and Methacrylate Gelatin
            (GelMA) is chosen to make MIBOM more operational in medical surgery.
            GelMA is a type of biocompatible and nontoxic hydrogel, which can
            polymerize rapidly under UV conditions. In the case of an actual
            medical surgery, the doctor can simply inject the glue into the
            fractures and initiate polymerization with a short period of
            ultraviolet light. And alginate to provide higher structural
            strength.
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8" xl="10">
          <div class="h_steps">
            <img class="h_step1" src="@/assets/svgs/H_step1.svg" />
            <img class="h_step2" src="@/assets/svgs/H_step2.svg" />
            <img class="h_step3" src="@/assets/svgs/H_step3.svg" />
            <img class="h_step4" src="@/assets/svgs/H_step4.svg" />
            <img class="h_line12" src="@/assets/svgs/H_line12.svg" />
            <img class="h_line23" src="@/assets/svgs/H_line23.svg" />
            <img class="h_line34" src="@/assets/svgs/H_line34.svg" />
          </div>
        </v-col>
      </v-row>
    </div>
    <img class="divider" src="@/assets/svgs/Divider.svg" />
    <div id="part11">
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
.line1_0 {
  position: absolute;
  width: 13%;
  left: 3%;
  top: 60%;
}
.line1_1 {
  position: absolute;
  width: 13%;
  left: 84%;
  top: 60%;
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
#part7 {
  position: relative;
  text-align: center;
}
.mibom {
  width: 50%;
  max-width: 850px;
  margin: auto;
}
.line2_0 {
  position: absolute;
  width: 13%;
  left: 3%;
  top: 50%;
}
.line2_1 {
  position: absolute;
  width: 13%;
  left: 84%;
  top: 50%;
}
#part8 {
  position: relative;
}
.menu {
  width: 70%;
  max-width: 1190px;
}
.logo_a {
  position: absolute;
  width: 6%;
  max-width: 102px;
  left: min(59%, 1003px);
  top: 3%;
}
.logo_h {
  position: absolute;
  width: 12%;
  max-width: 204px;
  left: min(56.1%, 953.7px);
  top: 29%;
}
.logo_r {
  position: absolute;
  width: 12%;
  max-width: 204px;
  left: min(56.1%, 953.7px);
  top: 54%;
}
.logo_d {
  position: absolute;
  width: 14%;
  max-width: 238px;
  left: min(55.5%, 943.5px);
  top: 80%;
}
.text_a {
  position: absolute;
  left: 72%;
  top: 8%;
}
.text_h {
  position: absolute;
  left: 72%;
  top: 34%;
}
.text_r {
  position: absolute;
  left: 72%;
  top: 59%;
}
.text_d {
  position: absolute;
  left: 72%;
  top: 83%;
}
.divider {
  width: 90%;
  margin: 0 5%;
}
#part9 {
  position: relative;
  margin: 65px 3%;
}
.adhesion {
  position: absolute;
  display: inline-block;
  width: 35%;
  max-width: 595px;
}
#text5 {
  display: inline-block;
  margin-left: calc(50% - 100px);
  width: 55%;
  max-width: 935px;
  min-height: 420px;
}
.a_steps {
  position: relative;
  margin: 35px 3%;
  margin-left: max(3%, (100% - 1598px) / 2);
  max-width: calc(1700px * 0.94);
}
.a_step1 {
  width: 20%;
  margin-left: 3%;
}
.a_step2 {
  position: absolute;
  width: 15%;
  left: 35%;
}
.a_step3 {
  position: absolute;
  width: 35%;
  left: 68%;
  top: 20%;
}
.a_line12 {
  position: absolute;
  width: 21.5%;
  left: 14%;
  top: 45%;
}
.a_line23 {
  position: absolute;
  width: 30%;
  left: 49.5%;
  top: 12%;
}
#part10 {
  position: relative;
  margin: 0 5%;
}
.hydrogel {
  position: absolute;
  display: inline-block;
  width: 35%;
  max-width: 500px;
  left: max(65%, 100% - 500px);
  top: 10%;
}
#text6 {
  margin-top: 65px;
  margin-left: 5%;
}
.h_steps {
  position: relative;
  margin: 35px 3%;
  max-width: 1200px;
}
.h_step1 {
  width: 17%;
}
.h_step2 {
  position: absolute;
  width: 23%;
  left: 22%;
  top: -40%;
}
.h_step3 {
  position: absolute;
  width: 17%;
  left: 56%;
}
.h_step4 {
  position: absolute;
  width: 14.5%;
  left: 85%;
  top: -5%;
}
.h_line12 {
  position: absolute;
  width: 13%;
  top: 20%;
}
.h_line23 {
  position: absolute;
  width: 13%;
  left: 44%;
  top: 35%;
}
.h_line34 {
  position: absolute;
  width: 13%;
  left: 71.5%;
  top: 15%;
}
#part11 {
  position: relative;
  margin-top: 65px;
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