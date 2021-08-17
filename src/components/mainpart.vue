<template>
  <div>
    <div style="position: absolute; top: 100px; left: 300px;">{{ width }}</div>
    <img class="logo_l" src="@/assets/svgs/Logo.svg" />
    <!--
    <img class="title_l" src="@/assets/svgs/Title.svg" />
    -->
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

    <!-- The back-to btn, use the `istop` to judge show or not. -->
    <v-container>
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
    tl_boat1.to("#boat1", { duration: 0.8, x: -750, opacity: 0, ease: "sine.out" });

    var tl_boat2 = gsap.timeline({ repeat: -1 });
    tl_boat2.from("#boat2", {
      duration: 2.5, 
      opacity: 0,
      x: -160, y: 80, 
      ease: "sine.in",
    });
    tl_boat2.to("#boat2", { duration: 5, x: 400, y: -200, ease: "none" });
    tl_boat2.to("#boat2", { duration: 0.8, x: 440, y: -220, opacity: 0, ease: "sine.out" });

    var tl_boat3 = gsap.timeline({ repeat: -1 });
    tl_boat3.to("#boat3", { duration: 5, x: -60});
    tl_boat3.to("#boat3", { duration: 8, x: 0, ease: "slow"});

    var tl_boat4 = gsap.timeline({ repeat: -1 });
    tl_boat4.from("#boat4", {
      duration: 0.8,
      opacity: 0,
      x: -50,
      ease: "sine.in",
    });
    tl_boat4.to("#boat4", { duration: 7, x: 700, ease: "none" });
    tl_boat4.to("#boat4", { duration: 0.8, x: 750, opacity: 0, ease: "sine.out" });

    var tl_boat5 = gsap.timeline({ repeat: -1 });
    tl_boat5.to("#boat5", { duration: 8, x: 160, ease: "slow"}, "+=0.5");
    tl_boat5.to("#boat5", { duration: 5, x: 0, ease: "power1"});

    var tl_boat6 = gsap.timeline({ repeat: -1 });
    tl_boat6.to("#boat6", { duration: 8, x: -100, ease: "slow"}, "+=0.5");
    tl_boat6.to("#boat6", { duration: 5, x: 0, ease: "power1"});

    var tl_boat7 = gsap.timeline({ repeat: -1 });
    tl_boat7.to("#boat7", { duration: 8, x: 160, ease: "slow"}, "+=0.5");
    tl_boat7.to("#boat7", { duration: 5, x: 0, ease: "power1"});

    var tl_cloud_ani = gsap.timeline({ repeat: -1 });
    tl_cloud_ani.to(".cloud_ani", { duration: 5, x: 10});
    tl_cloud_ani.to(".cloud_ani", { duration: 5, x: -10});
    tl_cloud_ani.to(".cloud_ani", { duration: 5, x: 0});

    var tl_droplet = gsap.timeline({ repeat: -1, repeatDelay: 1});
    tl_droplet.from("#droplet", { duration: .3, opacity: 0})
    tl_droplet.to("#droplet", { duration: 2, y: 500, opacity: 0, ease: "power2.in"})

    var tl_light = gsap.timeline({ repeat: -1});
    tl_light.fromTo("#light", { rotation: -5, transformOrigin: '100% 0%'},
     {duration: 3, rotation: 2})
    tl_light.to("#light", { duration: 3, rotation: -5})

    var tl_press = gsap.timeline({duration: 3, repeat: -1});
    tl_press.to("#stone", {duration: 3, y: 30}, 1);
    tl_press.to("#plate", {duration: 3, y: 30}, 1);
    tl_press.to("#gear_s", {duration: 3, rotate: 180}, 1);
    tl_press.from("#gear_l", {duration: 3, rotate: 180}, 1);
    tl_press.to("#stone", {duration: 3, y: 0}, 5);
    tl_press.to("#plate", {duration: 3, y: 0}, 5);
    tl_press.to("#gear_s", {duration: 3, rotate: 0}, 5);
    tl_press.from("#gear_l", {duration: 3, rotate: 0}, 5);
  },
};
</script>

<style lang="scss">
$logo_left: calc(50% - 50px);
$logo_top: 30px;
$logo_width: 100px;

$mount1_left: 44px;
$mount1_top: 215px;
$mount1_width: 580px;

$mount2_left: 570px;
$mount2_top: 890px;
$mount2_width: 225px;

$mount3_right: 340px;
$mount3_top: 950px;
$mount3_width: 275px;

$mount4_right: 66px;
$mount4_top: 255px;
$mount4_width: 564px;

$mount5_left: calc(50% - 725px - 25px); 
$mount5_top: 1673px; 
$mount5_width: 725px;

$mount6_left: calc(50% + 62px); 
$mount6_top: 1887px; 
$mount6_width: 734px;

$mount7_left: calc(50% - 216px); 
$mount7_top: 2146px; 
$mount7_width: 170px;

$mount8_left: calc(50% - 280px); 
$mount8_top: 5139px; 
$mount8_width: 480px;

$mount9_left: calc(50% - 850px); 
$mount9_top: 7627px; 
$mount9_width: 1317px;

$mount10_right: calc(50% - 245px); 
$mount10_top: 15680px; 
$mount10_width: 657px;

$mid1_left: calc(50% - 96px);
$mid1_top: 280px;
$mid1_width: 192px;

$mid2_left: calc(50% - 1000px); 
$mid2_top: 2519px; 
$mid2_width: 2000px;

$mid3_left: calc(50% - 120px); 
$mid3_top: 6210px; 
$mid3_width: 513px;

$mid4_left: calc(50% - 910px); 
$mid4_top: 9170px; 
$mid4_width: 1708px;

$mid5_right: calc(50% - 146px); 
$mid5_top: 12585px; 
$mid5_width: 940px;

$cloud1_0_left: calc(50% - 251px);
$cloud1_0_top: 369px;
$cloud1_0_width: 506px;

$cloud1_1_left: calc(50% - 152px);
$cloud1_1_top:  417px;
$cloud1_1_width: 382px;

$cloud2_left: 170px;
$cloud2_top: 770px;
$cloud2_width: 563px;

$cloud3_0_right: 195px;
$cloud3_0_top: 469px;
$cloud3_0_width: 258px;

$cloud3_1_right: 218px;
$cloud3_1_top: 469px;
$cloud3_1_width: 258px;

$cloud4_0_left: calc(50% - 290px - 224px);
$cloud4_0_top: 1747px;
$cloud4_0_width: 224px;

$cloud4_1_left: calc(50% - 280px - 575px);
$cloud4_1_top: 1747px;
$cloud4_1_width: 575px;

$cloud5_left: calc(50% + 100px);
$cloud5_top: 4040px;
$cloud5_width: 570px;

$cloud6_0_left: calc(50% + 110px);
$cloud6_0_top: 2812px;
$cloud6_0_width: 336px;

$cloud6_1_left: calc(50% + 87px);
$cloud6_1_top: 2812px;
$cloud6_1_width: 753px;

$cloud7_left: calc(50% - 150px - 287px);
$cloud7_top: 6530px;
$cloud7_width: 522px;

$cloud8_0_left: calc(50% - 385px - 390px - 22px);
$cloud8_0_top: 7764px;
$cloud8_0_width: 390px;

$cloud8_1_left: calc(50% - 50px - 763px);
$cloud8_1_top: 7764px;
$cloud8_1_width: 763px;

$cloud9_0_right: calc(50% + 168px);
$cloud9_0_top: 9475px;
$cloud9_0_width: 390px;

$cloud9_1_left: calc(50% - 150px - 754px);
$cloud9_1_top: 9475px;
$cloud9_1_width: 754px;

$cloud10_0_left: calc(50% - 92px);
$cloud10_0_top: 12755px;
$cloud10_0_width: 220px;

$cloud10_1_left: calc(50% - 280px);
$cloud10_1_top: 12755px;
$cloud10_1_width: 450px;

$boat1_left: 1172px;
$boat1_top: 913px;
$boat1_width: 55px;

$boat2_right: calc(50% - 41px); 
$boat2_top: 2079px; 
$boat2_width: 61px;

$boat3_left: calc(50% - 324px - 460px);
$boat3_width: 460px; 
$boat3_top: 3879px;

$boat4_left: calc(50% + 300px - 700px);
$boat4_width: 55px; 
$boat4_top: 5600px;

$boat5_left: calc(50% + 294px);
$boat5_width: 457px; 
$boat5_top: 8345px;

$boat6_left: calc(50% - 700px - 115px);
$boat6_width: 115px; 
$boat6_top: 14810px;

$boat7_left: calc(50% + 533px);
$boat7_width: 195px; 
$boat7_top: 15309px;

$frame_width: 135px;

$frame1_l_left: -450px; 
$frame1_l_top: 1384px;
$frame1_r_left: 450px - 135px; 
$frame1_r_top: 1496px;
$frame1_width: $frame1_r_left - $frame1_l_left + 135px - 70px;

$frame2_l_left: -650px - 135px; 
$frame2_l_top: 2510px;
$frame2_r_left: 23px; 
$frame2_r_top: 3098px;
$frame2_width: $frame2_r_left - $frame2_l_left + 135px - 70px;

$frame3_l_left: -700px; 
$frame3_l_top: 4554px;
$frame3_r_left: +700px - 135px; 
$frame3_r_top: 4800px;
$frame3_width: $frame3_r_left - $frame3_l_left + 135px - 70px;

$frame4_l_left: -600px; 
$frame4_l_top: 5890px;
$frame4_r_left: 600px - 135px; 
$frame4_r_top: 6074px;
$frame4_width: $frame4_r_left - $frame4_l_left + 135px - 70px;

$frame5_l_left: -600px; 
$frame5_l_top: 7020px;
$frame5_r_left: 600px - 135px; 
$frame5_r_top: 7426px;
$frame5_width: $frame5_r_left - $frame5_l_left + 135px - 70px;


$frame6_l_left: -20px; 
$frame6_l_top: 9410px;
$frame6_r_left: 780px - 135px; 
$frame6_r_top: 9978px;
$frame6_width: $frame6_r_left - $frame6_l_left + 135px - 70px;

$frame7_l_left: 120px; 
$frame7_l_top: 11820px;
$frame7_r_left: 780px - 135px; 
$frame7_r_top: 12410px;
$frame7_width: $frame7_r_left - $frame7_l_left + 135px - 70px;

$frame8_l_left: -600px; 
$frame8_l_top: 13780px;
$frame8_r_left: 600px - 135px; 
$frame8_r_top: 15205px;
$frame8_width: $frame8_r_left - $frame8_l_left + 135px - 70px;




.logo_l {

  position: absolute;
  left: $logo_left;
  top: $logo_top;
  width: $logo_width;
}
.title_l {
  margin-top: 80px;
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-size: 5rem;
}
.sub_title_l {
  margin-top: -15px;
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
}

.mount1_l {
  position: absolute;
  left: $mount1_left;
  top: $mount1_top;
  width: $mount1_width;
}
.mount2_l {
  position: absolute;
  left: $mount2_left;
  top: $mount2_top;
  width: $mount2_width;
  z-index: 3;
}
.mount3_l {
  position: absolute;
  right: $mount3_right;
  top: $mount3_top;
  width: $mount3_width;
  z-index: 3;
}
.mount4_l {
  position: absolute;
  right: $mount4_right;
  top: $mount4_top;
  width: $mount4_width;
  z-index: 3;
}
.mount5_l {
  position: absolute;
  left: $mount5_left;
  top: $mount5_top;
  width: $mount5_width;
  z-index: 3;
}
.mount6_l {
  position: absolute;
  left: $mount6_left;
  top: $mount6_top;
  width: $mount6_width;
  z-index: 3;
}
.mount7_l {
  position: absolute;
  left: $mount7_left;
  top: $mount7_top;
  width: $mount7_width;
  z-index: 3;
}
.mount8_l {
  position: absolute;
  left: $mount8_left;
  top: $mount8_top;
  width: $mount8_width;
  z-index: 3;
}
.mount9_l {
  position: absolute;
  left: $mount9_left;
  top: $mount9_top;
  width: $mount9_width;
  z-index: 3;
}
.mount10_l {
  position: absolute;
  right: $mount10_right;
  top: $mount10_top;
  width: $mount10_width;
  z-index: 3;
  transform: rotateY(180deg);
}


.mid1_l {
  position: absolute;
  left: $mid1_left;
  top: $mid1_top;
  width: $mid1_width;
  z-index: 3;
}
.mid2_l {
  position: absolute;
  left: $mid2_left;
  top: $mid2_top;
  width: $mid2_width;
  z-index: 3;
}
.mid3_l {
  position: absolute;
  left: $mid3_left;
  top: $mid3_top;
  width: $mid3_width;
  z-index: 3;
}
.mid4_l {
  position: absolute;
  left: $mid4_left;
  top: $mid4_top;
  width: $mid4_width;
  z-index: 3;
}
.mid5_l {
  position: absolute;
  right: $mid5_right;
  top: $mid5_top;
  width: $mid5_width;
  z-index: 3;
}


.cloud1_0_l {
  position: absolute;
  left: $cloud1_0_left;
  top: $cloud1_0_top;
  width: $cloud1_0_width;
  z-index: 1;
}
.cloud1_1_l {
  position: absolute;
  left: $cloud1_1_left;
  top: $cloud1_1_top;
  width: $cloud1_1_width;
  z-index: 5;
}
.cloud2_l {
  position: absolute;
  left: $cloud2_left;
  top: $cloud2_top;
  width: $cloud2_width;
  z-index: 2;
}
.cloud3_0_l {
  position: absolute;
  right: $cloud3_0_right;
  top: $cloud3_0_top;
  width: $cloud3_0_width;
  z-index: 1;
}
.cloud3_1_l {
  position: absolute;
  right: $cloud3_1_right;
  top: $cloud3_1_top;
  width: $cloud3_1_width;
  z-index: 5;
}
.cloud4_0_l {
  position: absolute;
  //left: 452px;
  left: $cloud4_0_left;
  top: $cloud4_0_top;
  width: $cloud4_0_width;
  z-index: 2;
}
.cloud4_1_l {
  position: absolute;
  //left: 105px;
  left: $cloud4_1_left;
  top: $cloud4_1_top;
  width: $cloud4_1_width;
  z-index: 5;
}
.cloud5_l {
  position: absolute;
  left: $cloud5_left;
  top: $cloud5_top;
  width: $cloud5_width;
  z-index: 5;
}
.cloud6_0_l {
  position: absolute;
  left: $cloud6_0_left;
  top: $cloud6_0_top;
  width: $cloud6_0_width;
  z-index: 2;
}
.cloud6_1_l {
  position: absolute;
  left: $cloud6_1_left;
  top: $cloud6_1_top;
  width: $cloud6_1_width;
  z-index: 5;
}
.cloud7_l {
  position: absolute;
  left: $cloud7_left;
  top: $cloud7_top;
  width: $cloud7_width;
  z-index: 2;
}
.cloud8_0_l {
  position: absolute;
  left: $cloud8_0_left;
  top: $cloud8_0_top;
  width: $cloud8_0_width;
  z-index: 2;
}
.cloud8_1_l {
  position: absolute;
  left: $cloud8_1_left;
  top: $cloud8_1_top;
  width: $cloud8_1_width;
  z-index: 4;
}
.cloud9_0_l {
  position: absolute;
  right: $cloud9_0_right;
  top: $cloud9_0_top;
  width: $cloud9_0_width;
  z-index: 2;
}
.cloud9_1_l {
  position: absolute;
  left: $cloud9_1_left;
  top: $cloud9_1_top;
  width: $cloud9_1_width;
  z-index: 4;
}
.cloud10_0_l {
  position: absolute;
  left: $cloud10_0_left;
  top: $cloud10_0_top;
  width: $cloud10_0_width;
  z-index: 1;
}
.cloud10_1_l {
  position: absolute;
  left: $cloud10_1_left;
  top: $cloud10_1_top;
  width: $cloud10_1_width;
  z-index: 4;
}


.boat1_l {
  position: absolute;
  left: $boat1_left;
  top: $boat1_top;
  width: $boat1_width;
  z-index: 1;
}
.boat2_l {
  position: absolute;
  right: $boat2_right;
  top: $boat2_top;
  width: $boat2_width;
  z-index: 2;
}
.boat3_l {
  position: absolute;
  left: $boat3_left;
  top: $boat3_top;
  width: $boat3_width;
  z-index: 5;
}
.boat4_l {
  position: absolute;
  left: $boat4_left;
  top: $boat4_top;
  width: $boat4_width;
  z-index: 5;
}
.boat5_l {
  position: absolute;
  left: $boat5_left;
  top: $boat5_top;
  width: $boat5_width;
  z-index: 6;
}
.boat6_l {
  position: absolute;
  left: $boat6_left;
  top: $boat6_top;
  width: $boat6_width;
  z-index: 3;
}
.boat7_l {
  position: absolute;
  left: $boat7_left;
  top: $boat7_top;
  width: $boat7_width;
  z-index: 3;
  transform: rotateY(180deg);
}

.frame_l {
  width: $frame_width;
}
.cont {
  width: 100%;
  display: block;
  text-align: center;
}
.frame1_l_l {
  position: absolute;
  left: calc(50% + #{$frame1_l_left}); 
  top: $frame1_l_top;
}
.frame1_r_l {
  position: absolute;
  left: calc(50% + #{$frame1_r_left}); 
  top: $frame1_r_top;
}
.text1 {
  position: absolute;
  top: $frame1_l_top + 35px;
  min-width: $frame1_width;
  max-width: $frame1_width;
  left: calc(50% + #{$frame1_l_left} + 35px);
  text-align: center;
}
.frame2_l_l {
  position: absolute; //left: 175px
  left: calc(50% + #{$frame2_l_left}); 
  top: $frame2_l_top;
}
.frame2_r_l {
  position: absolute;
  left: calc(50% + #{$frame2_r_left}); 
  top: $frame2_r_top;
}
.text2 {
  position: absolute;
  top: $frame2_l_top + 35px;
  min-width: $frame2_width;
  max-width: $frame2_width;
  left: calc(50% + #{$frame2_l_left} + 35px);
}
.frame3_l_l {
  position: absolute; 
  left: calc(50% + #{$frame3_l_left}); 
  top: $frame3_l_top;
}
.frame3_r_l {
  position: absolute;
  left: calc(50% + #{$frame3_r_left}); 
  top: $frame3_r_top;
}
.text3 {
  position: absolute;
  top: $frame3_l_top + 35px;
  min-width: $frame3_width;
  max-width: $frame3_width;
  left: calc(50% + #{$frame3_l_left} + 35px);
}
.frame4_l_l {
  position: absolute; 
  left: calc(50% + #{$frame4_l_left}); 
  top: $frame4_l_top;
}
.frame4_r_l {
  position: absolute;
  left: calc(50% + #{$frame4_r_left}); 
  top: $frame4_r_top;
}
.text4 {
  position: absolute;
  top: $frame4_l_top + 35px;
  min-width: $frame4_width;
  max-width: $frame4_width;
  left: calc(50% + #{$frame4_l_left} + 35px);
}
.frame5_l_l {
  position: absolute; 
  left: calc(50% - 600px); top: 7020px;
}
.frame5_r_l {
  position: absolute;
  left: calc(50% + 600px - 135px); top: 7426px;
}
.text5 {
  position: absolute;
  top: calc(7020px + 35px);
  min-width: calc(1200px - 35px - 35px);
  max-width: calc(1200px - 35px - 35px);
  left: calc(50% - 600px + 35px);
}
.frame6_l_l {
  position: absolute; 
  left: calc(50% - 20px); top: 9410px;
}
.frame6_r_l {
  position: absolute;
  left: calc(50% + 780px - 135px); top: 9978px;
}
.text6 {
  position: absolute;
  top: calc(9410px + 35px);
  min-width: calc(800px - 35px - 35px);
  max-width: calc(800px - 35px - 35px);
  left: calc(50% - 20px + 35px);
}
.frame7_l_l {
  position: absolute; 
  left: calc(50% - 120px); top: 11820px;
}
.frame7_r_l {
  position: absolute;
  left: calc(50% + 780px - 135px); top: 12410px;
}
.text7 {
  position: absolute;
  top: calc(11820px + 35px);
  min-width: calc(900px - 35px - 35px);
  max-width: calc(900px - 35px - 35px);
  left: calc(50% - 120px + 35px);
}
.frame8_l_l {
  position: absolute; 
  left: calc(50% - 600px); top: 13780px;
}
.frame8_r_l {
  position: absolute;
  left: calc(50% + 600px - 135px); top: 15205px;
}
.text8 {
  position: absolute;
  top: calc(13780px + 35px);
  min-width: calc(1200px - 35px - 35px);
  max-width: calc(1200px - 35px - 35px);
  left: calc(50% - 600px + 35px);
}



.wave_l {
  position: absolute;
  left: calc(50% - 357px);
  top: 6810px; width: 715px;
}
.droplet_l {
  position: absolute;
  left: calc(50% + 280px);
  top: 6566px; width: 15px;
  z-index: 5;
}
.mussels_l {
  position: absolute;
  left: calc(50% - 437px);
  top: 7855px; width: 772px;
  z-index: 5;
}
.cloud_big_l {
  position: absolute;
  left: calc(50% - 133px);
  top: 8810px; width: 845px;
  z-index: 5;
}
.light_l {
  position: absolute;
  right: calc(50% - 407px);
  top: 8970px; width: 1090px;
  z-index: 4;
}
.plate_l {
  position: absolute;
  right: calc(50% + 250px);
  top: 12370px; width: 486px;
  z-index: 2;
}
.stone_l {
  position: absolute;
  right: calc(50% + 366px);
  top: 11977px; width: 268px;
  z-index: 3;
}
.gear_s_l {
  position: absolute;
  right: calc(50% + 200px);
  top: 12544px; width: 135px;
  z-index: 2;
}
.gear_l_l {
  position: absolute;
  right: calc(50%);
  top: 12650px; width: 300px;
  z-index: 2;
}

#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>