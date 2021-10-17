
<template>
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <v-col
      cols="2"
      style="position: fixed; left: 35px;"
      v-show="width >= 1264"
    >
      <v-skeleton-loader
        v-show="firstload"
        type="list-item-two-line@2"
      ></v-skeleton-loader>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-stepper
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            v-show="!firstload"
            v-model="position"
            vertical
            non-linear
            style="transition: all 1s ease 1s; padding-bottom: 8px"
          >
            <v-stepper-step
              editable
              edit-icon="1"
              step="1"
              @click="$vuetify.goTo('#prologue', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Prologue
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#lab_safety', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Lab Safety
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#general_information', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              General microorganism information & general project design
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#specific_design', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Specific project design
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#use_of_harmful', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Use of harmful reagents and procedures
            </v-stepper-step>
          </v-stepper>
        </template>
      </v-hover>
    </v-col>
    <!-- ####################################################################### -->
    <v-col cols="12" xs="12" sm="12" md="12" lg="8">
      <!-- This is a card for text. -->
      <v-skeleton-loader
        v-show="firstload"
        type="image, article@3"
      ></v-skeleton-loader>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none"
            id="description"
            v-intersect="onIntersect"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-container style="padding: 20px">
        
<v-row justify="center"> <v-card-title class="text-h4 title">
Interdisciplinary design
  </v-card-title>
</v-row>
<v-card-title class="text-h5">
Overview
</v-card-title>
<v-card-text>
  <p class = "body-1">
We are really proud of our interdisciplinary design. When we identified comminuted fractures as a problem that needed to address, we were not limited to synthetic biology to solve the problems. We first list all the problems we need to solve to make a qualified osteogenic glue, the following table shows the problems and solutions:
</p>
<p class = "body-1">
|               Problems in comminuted fractures               |         Solutions(Design)          |
</p>
<p class = "body-1">
| :----------------------------------------------------------: | :--------------------------------: |
</p>
<p class = "body-1">
|      Finding a substance that can adjoin the fragments       |  Adhesion system(Mussel protein)   |
</p>
<p class = "body-1">
|    Finding a way provide the material structural strength    |          Hydrogel system           |
</p>
<p class = "body-1">
| Constructing a stress-sensitive pathway to degrade the material | Stress-sensitive regulation system |
</p>
<p class = "body-1">
|               Drug delivery of the bone repair               |        Drug release system         |
</p>
</v-card-text>
<v-card-title class="text-h5">
Combination of synthetic biology and material
</v-card-title>
<v-card-text>
  <p class = "body-1">
To really develop a product, the synthetic biology is important but we should not be limited to the scope of synthetic biology. For example, after producing the mussel protein in ***E.coli*** successfully, we found that the mussel protein solution can not adjoin the bone fragments until it is completely dried, which usually costed 48 hours in the oven. Although our modification on protein showed a adhesive promotion of Mfp5-2, but it is still not enough for our goal of bone repair. Our thinking was not limited, we then tried a hydrogel system to increase the material cohesion and the results are amazing. Combination of Synthetic biology  and polymer chemistry helped us build a incredible osteogenic glue. We believed that the Interdisciplinary design is the core of MIBOM.
</p>
<v-row justify="center">
  <v-col cols=6>
<v-img src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--res--1-5.jpg" contain max-height="600px" />
  </v-col>
  <v-col cols=6>
<v-img src="https://2021.igem.org/wiki/images/d/d6/T--ShanghaiTech_China--res--1-1.jpg" contain max-height="600px" />
  </v-col>
<p class = "body-1">
> Fig.1: Incredible adhesive and cohesive ability of MIBOM
</p>
<p class = "body-1">
<u>**并列一行**</u>
</p>
</v-card-text>
<v-card-title class="text-h5">
Pathway construction of Eukaryotic cells
</v-card-title>
<v-card-text>
  <p class = "body-1">
We are proud of our braveness that we tried to build a stress-sensitive pathway in Eukaryotic cells. Members of our team mostly had never known any knowledge of culturing eukaryotic cells.(This is mainly because members of our team are so young that they are mostly under 20). Most iGEM teams were not willing to do a project about eukaryotic cells because of the difficulty of eukaryotic cell experiments. This year, we successfully overexpressed a stress-sensitve protein, Piezo1.1, in HEK293 cells, and we built a fluorescent system to detect the influx of calcium, which represents the activation of Piezo1.1. We captured an obvious fluorescent change of cells cotransfected with Piezo1.1([BBa_K3755006](http://parts.igem.org/Part:BBa_K3755006)) and GCaMP([BBa_K3755007](http://parts.igem.org/Part:BBa_K3755007)), which proved our detection system is promising. We also proved that the downstream pathway of Piezo1.1 we constructed was effective. This year, we did lot of work on eukaryotic cells and built a series of system about detecting and expressing. 
</p>
<p class = "body-1">
<video id="video" controls="" preload="none"> <source id="mp4" src="force 4times.mp4" type="video/mp4"> </video>
</p>
<p class = "body-1">
> Video.1: Fast fluorescent change of HEK293 cells overexpressing Piezo1.1
</p>
<p class = "body-1">
![0930 red 20 02](0930 red 20 02-16342144712891.png)
</p>
<p class = "body-1">
> Fig.2: Cells overexpressing Piezo1.1, marked by mRuby2
</p>
<p class = "body-1">
***<u>并列一行</u>***
</p>
<p class = "body-1">
See more details on our [Results](https://2021.igem.org/Team:ShanghaiTech_China/Results) page.
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Chinese traditional design on Homepage
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
The inspiration of our homepage style comes from traditional Chinese ink wash painting—an East Asian type of expressionistic brush painting, whose goal is not simply to reproduce the appearance of a subject but to capture its soul. That's to say, there's a lot of blank and symbolization in Chinese ink wash painting in order to express those unseen things.
</p>
<p class = "body-1">
The direct style origin of our homepage is  one of the most famous ink wash paintings in ancient Chinese: *A Thousand Miles of Rivers and Mountains* (《千里江山圖》). The style is called the "blue-and-green landscape" style, where mineral pigments such as turquoise and lapis lazuli are used to create bright blue and green landscapes.
</p>
<p class = "body-1">
![*A Thousand Miles of Rivers and Mountains* (../homepage_design/ql.jpg)](ql.jpg)
</p>
<p class = "body-1">
> Picture.1: A selection of *A Thousand Miles of Rivers and Mountains* (《千里江山圖》)
</p>
<p class = "body-1">
![MIBOM1](MIBOM1.png)
</p>
<p class = "body-1">
> Picture.2: Our Design on Homepage
</p>
<p class = "body-1">
We also referred to an ancient Chinese painting book about marine creatures: *Hai Cuo Tu* (《海錯圖》) for the image of mussels.
</p>
<p class = "body-1">
![](hc.jpg)
</p>
<p class = "body-1">
> Picture.3: The picture of mussels in *Hai Cuo Tu* (《海錯圖》)
</p>
<p class = "body-1">
![Adhesion](Adhesion.png)
</p>
<p class = "body-1">
> Picture.4: Our design on Homepage
</p>
<p class = "body-1">
***<u>以上所有图片都单独一行</u>***
</p>
<p class = "body-1">
We hope our design of homepage can be impressing with the help of traditional Chinese painting elements, making our homepage both internationalized and indigenized, serving as a window for the world to know more about China.
</p>
<p class = "body-1">
</p>
            </v-container>
          </v-card>
        </template>
      </v-hover>
    </v-col>
    <v-col cols="2" v-if="width >= 1264"></v-col>
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
  </v-row>
</template>
<script>
export default {
  name: "mainpart",
  props: {
    width: Number,
  },

  data: () => ({
    step: [],
    position: 1, //used for v-stepper
    isIntersecting: false,
    istop: true,
    firstload: true, //used for skeleton loader.
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
    this.step[0] = document.getElementById("prologue");
    this.step[1] = document.getElementById("lab_safety");
    this.step[2] = document.getElementById("general_information");
    this.step[3] = document.getElementById("specific_design");
    this.step[4] = document.getElementById("use_of_harmful");
    this.updatepos();
    setTimeout(() => {
      this.firstload = false;
      console.log("loaded");
    }, 1000);
  },
};
</script>

  }<style lang="scss">
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>    
