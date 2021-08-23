<template>
  <div>
    <div
      :style="{ 'min-height': `calc(${this.height}px * 0.7)` }"
      class="contain_title"
    >
      <div style="display: flex">
        <div
          style="
            max-width: 60%;
            padding-top: 30%;
            margin-left: 10%;
            display: inline-block;
          "
        >
          <div style="color: white; display: inline-flex-box" class="text-h1">
            M I B O M
          </div>
          <div style="color: white; display: inline-flex" class="text-h6">
            Mussel Inspired Biological Opertional Material
          </div>
        </div>
        <v-spacer></v-spacer>
        <img
          class="mount4"
          src="@/assets/svgs/Mountain4.svg"
          style="display: none"
        />
      </div>
    </div>

    <!--
    <div style="position: absolute; top: 100px; left: 300px;">{{ width }}</div>
    <img class="logo_l" src="@/assets/svgs/Logo.svg" />
    <div class="title_l">M I B O M</div>
    <div class="sub_title_l">Mussel Inspired Biological Opertional Material</div>

    <img class="mount1_l" src="@/assets/svgs/Mountain1.svg" />
    <img class="mount2_l" src="@/assets/svgs/Mountain2.svg" />
    <img class="mount3_l" src="@/assets/svgs/Mountain3.svg" />
    <img class="mount4_l" src="@/assets/svgs/Mountain4.svg" />
    <img class="mid1_l" src="@/assets/svgs/Middle1.svg" />
    <img class="cloud1_0_l cloud1" src="@/assets/svgs/Cloud1_Under.svg" />
    <img class="cloud1_1_l cloud1" src="@/assets/svgs/Cloud1_Above.svg" />
    <img class="cloud2_l cloud_ani" src="@/assets/svgs/Cloud2.svg" />
    <img class="cloud3_0_l cloud_ani" src="@/assets/svgs/Cloud3_Under.svg" />
    <img class="cloud3_1_l cloud_ani" src="@/assets/svgs/Cloud3_Above.svg" />
    <img class="boat1_l" id="boat1" src="@/assets/svgs/Boat1.svg" />

    <img class="frame_l frame1_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont">
      <div class="text1 text-h4">Bone fracture is really common in daily life. <br/>
        Sports, car accidents, falls, and certain medicall conditions <br/>
        are all possible causes of bone fracture.
      </div>
    </div>
    <img class="frame_l frame1_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="mount5_l" src="@/assets/svgs/Mountain5.svg" />
    <img class="mount6_l" src="@/assets/svgs/Mountain6.svg" />
    <img class="mount7_l" src="@/assets/svgs/Mountain7.svg" />
    <img class="boat2_l" id="boat2" src="@/assets/svgs/Boat2.svg" />
    <img class="cloud4_0_l cloud_ani" src="@/assets/svgs/Cloud4_Under.svg" />
    <img class="cloud4_1_l cloud_ani" src="@/assets/svgs/Cloud4_Above.svg" />

    <img class="frame_l frame2_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text2">
      <div class="text-h4">For the time being, treatment of severe comminuted fracture 
        is difficult due to multiple fragments with sophisticated morphology and high 
        incidence of delayed union and nonunion.
      </div>
    </div>
    <img class="frame_l frame2_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="mid2_l" src="@/assets/svgs/Middle2.svg" />
    <img class="boat3_l" id="boat3" src="@/assets/svgs/Boat3.svg" />
    <img class="cloud5_l cloud_ani" src="@/assets/svgs/Cloud5.svg" />
    <img class="cloud6_0_l cloud_ani" src="@/assets/svgs/Cloud6_Under.svg" />
    <img class="cloud6_1_l cloud_ani" src="@/assets/svgs/Cloud6_Above.svg" />

    <img class="frame_l frame3_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text3">
      <div class="text-h4">Usually, alloy implants such as screws and plates are 
        applied to the bone during a surgery, which can bring a lot of problems including 
        second surgery.
      </div>
    </div>
    <img class="frame_l frame3_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="mount8_l" src="@/assets/svgs/Mountain8.svg" />
    <img class="boat4_l" id="boat4" src="@/assets/svgs/Boat4.svg" />

    <img class="frame_l frame4_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text4">
      <div class="text-h4">This year, ShanghaiTech_China developed a new flexible 
        osteogenic glue--MIBOM, Mussel Inspired Biologically Operation Material--
        to address these limitations, which contains two systems.
      </div>
    </div>
    <img class="frame_l frame4_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="mid3_l" src="@/assets/svgs/Middle3.svg" />
    <img class="cloud7_l cloud_ani" src="@/assets/svgs/Cloud7.svg" />
    <img class="wave_l" src="@/assets/svgs/wave.svg" />
    <img class="droplet_l" id="droplet" src="@/assets/svgs/droplet.svg" />

    <img class="frame_l frame5_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text5">
      <div class="text-h4">The first part of MIBOM is the adhesion system. 
        We got the inspiration for this design from marine mussels, a kind of shellfish 
        that can adhere themselves tightly to reefs. The remarkable feature about this creature 
        is the high viscosity of its mussel protein in aqueous environment. We modified 
        the mussel mucin to make it more viscous, and combined it with biological 
        hydrogel to make the product more operational in medical surgery. 
      </div>
    </div>
    <img class="frame_l frame5_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="mount9_l" src="@/assets/svgs/Mountain9.svg" />
    <img class="mussels_l" src="@/assets/svgs/Mussels.svg" />
    <img class="cloud8_0_l cloud_ani" src="@/assets/svgs/Cloud8_Under.svg" />
    <img class="cloud8_1_l cloud_ani" src="@/assets/svgs/Cloud8_Above.svg" />
    <img class="boat5_l" id="boat5" src="@/assets/svgs/Boat5.svg" />

    <img class="mid4_l" src="@/assets/svgs/Middle4.svg" />
    <img class="cloud9_0_l cloud_ani" src="@/assets/svgs/Cloud9_Under.svg" />
    <img class="cloud9_1_l cloud_ani" src="@/assets/svgs/Cloud9_Above.svg" />
    <img class="cloud_big_l" src="@/assets/svgs/Cloud_big.svg" />
    <img class="light_l" id="light" src="@/assets/svgs/Light.svg" />
    <img class="frame_l frame6_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text6">
      <div class="text-h4">We chose Methacrylate Gelatin (GelMA), 
        a type of biocompatible and nontoxic hydrogel, which can polymerize rapidly 
        under UV conditions, as our option. In the case of an actual medical surgery, 
        the doctor can simply inject the glue into the fractures and initiate polymerization 
        with a short period of ultraviolet light. 
      </div>
    </div>
    <img class="frame_l frame6_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="mid5_l" src="@/assets/svgs/Middle5_Mountain.svg" />
    <img class="plate_l" id="plate" src="@/assets/svgs/Middle5_Plate.svg" />
    <img class="stone_l" id="stone" src="@/assets/svgs/Middle5_Stone.svg" />
    <img class="gear_s_l" id="gear_s" src="@/assets/svgs/Middle5_Gear.svg" />
    <img class="gear_l_l" id="gear_l" src="@/assets/svgs/Middle5_Gear.svg" />
    <img class="cloud10_0_l cloud_ani" src="@/assets/svgs/Cloud10_Under.svg" />
    <img class="cloud10_1_l cloud_ani" src="@/assets/svgs/Cloud10_Above.svg" />

    <img class="frame_l frame7_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text7">
      <div class="text-h4">The second part is a control system. In this part, 
        we wish to establish a connnection between cells and materials. We utilized Piezo1, 
        a special membrane protein which can sense small stress changes in the microenvironment. 
        In the process of bone growth, the change of stress will activate our microforce-sensing 
        system, controlling the degradation of glue according to bone growth. 
      </div>
    </div>
    <img class="frame_l frame7_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />

    <img class="frame_l frame8_l_l" src="@/assets/svgs/Frame_Topleft.svg" />
    <div class="cont text8">
      <div class="text-h4">We also plan to introduce a drug system in the coming future. 
        Hydrogel makes an integrated drug delivery system for bone growth possible. 
        We planned to embed certain drugs in special nanoparticles, which cannot diffuse 
        inside the hydrogel. With the degradation of the material, nanoparticles are released 
        into the internal environment, promoting the process of injury recovery. 
      </div>
      <br> <br> <br>
      <div class="text-h4">Besides, we have a grand blueprint for the future of MIBOM. 
        Experiments using different kinds of hydrogels are designed to perform anytime, 
        we also tried to introduce different Piezo1 pathway downstream enzymes into the 
        system to improve the stability of the connection between cells and material. 
        We hope our products can be applied to more conditions and a wider range of people, 
        which makes it more sustainable.
      </div>
      <br> <br> <br>
      <div class="text-h4">Combined with the hardware we designed, doctors can 
        complete the operation in one step and omit the complex operations in the past. 
        We hope our MIBOM can greatly reduce the recovery time for the patients and bring 
        less pain with no second surgery.
      </div>
    </div>
    <img class="frame_l frame8_r_l" src="@/assets/svgs/Frame_Bottomright.svg" />
    <img class="boat6_l" id="boat6" src="@/assets/svgs/Boat1.svg" />
    <img class="boat7_l" id="boat7" src="@/assets/svgs/Boat1.svg" />

    <img class="mount10_l" src="@/assets/svgs/Mountain8.svg" />
    -->

    <!-- The back-to btn, use the `istop` to judge show or not. -->
    <v-container style="display: none">
      <v-fab-transition>
        <v-btn
          v-show="!istop"
          id="backtobtn"
          dark
          fab
          large
          fixed
          right
          bottom
          class="primary"
          @click="$vuetify.goTo(0, options)"
          sytle="position: fixed;"
        >
          <v-icon> mdi-chevron-up </v-icon>
        </v-btn>
      </v-fab-transition>
    </v-container>
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
    height: Number,
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
  mounted() {
    var tl_boat1 = gsap.timeline({ repeat: -1 });
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

    var tl_boat2 = gsap.timeline({ repeat: -1 });
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

    var tl_boat3 = gsap.timeline({ repeat: -1 });
    tl_boat3.to("#boat3", { duration: 5, x: -60 });
    tl_boat3.to("#boat3", { duration: 8, x: 0, ease: "slow" });

    var tl_boat4 = gsap.timeline({ repeat: -1 });
    tl_boat4.from("#boat4", {
      duration: 0.8,
      opacity: 0,
      x: -50,
      ease: "sine.in",
    });
    tl_boat4.to("#boat4", { duration: 7, x: 700, ease: "none" });
    tl_boat4.to("#boat4", {
      duration: 0.8,
      x: 750,
      opacity: 0,
      ease: "sine.out",
    });

    var tl_boat5 = gsap.timeline({ repeat: -1 });
    tl_boat5.to("#boat5", { duration: 8, x: 160, ease: "slow" }, "+=0.5");
    tl_boat5.to("#boat5", { duration: 5, x: 0, ease: "power1" });

    var tl_boat6 = gsap.timeline({ repeat: -1 });
    tl_boat6.to("#boat6", { duration: 8, x: -100, ease: "slow" }, "+=0.5");
    tl_boat6.to("#boat6", { duration: 5, x: 0, ease: "power1" });

    var tl_boat7 = gsap.timeline({ repeat: -1 });
    tl_boat7.to("#boat7", { duration: 8, x: 160, ease: "slow" }, "+=0.5");
    tl_boat7.to("#boat7", { duration: 5, x: 0, ease: "power1" });

    var tl_cloud_ani = gsap.timeline({ repeat: -1 });
    tl_cloud_ani.to(".cloud_ani", { duration: 5, x: 10 });
    tl_cloud_ani.to(".cloud_ani", { duration: 5, x: -10 });
    tl_cloud_ani.to(".cloud_ani", { duration: 5, x: 0 });

    var tl_droplet = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl_droplet.from("#droplet", { duration: 0.3, opacity: 0 });
    tl_droplet.to("#droplet", {
      duration: 2,
      y: 500,
      opacity: 0,
      ease: "power2.in",
    });

    var tl_light = gsap.timeline({ repeat: -1 });
    tl_light.fromTo(
      "#light",
      { rotation: -5, transformOrigin: "100% 0%" },
      { duration: 3, rotation: 2 }
    );
    tl_light.to("#light", { duration: 3, rotation: -5 });

    var tl_press = gsap.timeline({ duration: 3, repeat: -1 });
    tl_press.to("#stone", { duration: 3, y: 30 }, 1);
    tl_press.to("#plate", { duration: 3, y: 30 }, 1);
    tl_press.to("#gear_s", { duration: 3, rotate: 180 }, 1);
    tl_press.from("#gear_l", { duration: 3, rotate: 180 }, 1);
    tl_press.to("#stone", { duration: 3, y: 0 }, 5);
    tl_press.to("#plate", { duration: 3, y: 0 }, 5);
    tl_press.to("#gear_s", { duration: 3, rotate: 0 }, 5);
    tl_press.from("#gear_l", { duration: 3, rotate: 0 }, 5);
  },
};
</script>

<style lang="scss">
.mount4 {
  width: 300px;
  margin-right: 35px;
  margin-top: 100px;
  display: inline-block;
}
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}

.contain_title {
  margin: 0;
  background-color: #00072d;
  display: block;
}
</style>