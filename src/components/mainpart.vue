<template>
  <v-row justify="center" style="margin: auto 3%">
    <!-- 3% on v-row and 2% on fixed v-col work well. -->
    <v-col cols="3"></v-col>
    <!-- cards -->
    <!-- ####################################################################### -->
    <!-- Below is really MAIN PART -->
    <v-col cols="12" xs="12" sm="12" md="12" lg="6">
      <!-- this is used to make sure the col won't move when screen reach xl.
             by the test, the col will move "a col" left, so we use offset to eliminate it.
             but notice that the col will still get wider on the right.
        -->
      <!-- This is a card for text. -->
      <v-skeleton-loader
        v-show="firstload"
        type="list-item-avatar-three-line@7"
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
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Description</th>
                    <th class="text-center">Protocols and record</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">Cell experiment record</td>
                    <td class="text-center">
                      <a
                        href="https://2021.igem.org/wiki/images/9/9d/T--ShanghaiTech_China--exp--cell_experiment_record.pdf"
                        >Cell Experiment Record.pdf</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">Protocols of cell experiment</td>
                    <td class="text-center">
                      <a
                        href="https://2021.igem.org/wiki/images/c/c4/T--ShanghaiTech_China--exp--protocols_and_results.pdf"
                        >Protocols of cell experiment.pdf</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">Protocols of cell lipofectamine LTX transfaction</td>
                    <td class="text-center">
                      <a
                        href="https://2021.igem.org/wiki/images/c/c7/T--ShanghaiTech_China--exp--lipofectamine_ltx_and_plus_protocol_v2.0.pdf"
                        >lipofectamine_ltx_and_plus_protocol_v2.0.pdf</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">Protocols of staining with FDA and PI</td>
                    <td class="text-center">
                      <a
                        href="https://2021.igem.org/wiki/images/9/95/T--ShanghaiTech_China--exp--ibidi_AN33_Live_Dead_staining_with_FDA_and_PI.pdf"
                        >ibidi_AN33_Live_Dead_staining_with_FDA_and_PI.pdf</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">Protocols of cell lipofectamine 2000 transfaction</td>
                    <td class="text-center">
                      <a
                        href="https://2021.igem.org/wiki/images/f/f7/T--ShanghaiTech_China--exp--Lipofectamine_2000_Reag_protocol.pdf"
                        >Lipofectamine_2000_Reag_protocol.pdf</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">Molecular experiments record</td>
                    <td class="text-center">
                      <a
                        href="https://2021.igem.org/wiki/images/e/e9/T--Shanghaitech_China--exp--timeline.pdf"
                        >Molecular_experiments_record.pdf</a
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </template>
      </v-hover>
      <!-- Used to present Professors -->
    </v-col>
    <v-col cols="3" v-if="width >= 1264"></v-col>
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
//import { gsap } from "gsap"
//uncomment this line to use gsap in this components
//I recommend just to use gsap saperately, not gloably.
//So use VueMotion in simple animate and gsap for more complex one.

export default {
  name: "mainpart",
  props: {
    width: Number,
  },

  data: () => ({
    step: [], //use for store position of title
    position: 1, //use for v-stepper to know where we are
    isIntersecting: false,
    istop: true,
    firstload: true, //used for skeleton loader.
    options: {
      //used for the $vuetify.goto() func.
      duration: 400,
      offset: 0,
      easing: "easeInQuad",
    },
    hphelp: [
      {
        name: "Yifeng Zhang",
        isin: [1, 0, 0, 0, 0],
      },
      {
        name: "Xin Sun",
        isin: [1, 0, 0, 0, 0],
      },
      {
        name: "Yong Ding",
        isin: [1, 1, 0, 0, 0],
      },
      {
        name: "Shanghai Ninth People's Hospital",
        isin: [0, 1, 0, 0, 0],
      },
      {
        name: "Jing Dai",
        isin: [0, 1, 0, 0, 0],
      },
      {
        name: "Hongyan Jiang",
        isin: [1, 1, 1, 0, 0],
      },
      {
        name: "MicroPort",
        isin: [0, 1, 1, 0, 0],
      },
      {
        name: "Suting Hong",
        isin: [0, 0, 1, 0, 0],
      },
      {
        name: "Office of Tech Transfer, Shanghaitech University",
        isin: [0, 0, 1, 0, 0],
      },
      {
        name: "Jiancao Township Government, Yunlong County",
        isin: [0, 0, 0, 1, 0],
      },
      {
        name: "Jiancao Middle School",
        isin: [0, 0, 0, 1, 0],
      },
      {
        name: "Jiancao Center Wanquan Primary School",
        isin: [0, 0, 0, 1, 0],
      },
      {
        name: "Jingxian Jiaxiang Middle School",
        isin: [0, 0, 0, 1, 0],
      },
      {
        name: "Shanghai Advanced Research Institute, CAS",
        isin: [0, 0, 0, 1, 0],
      },
      {
        name: "Southwest Jiaotong University",
        isin: [0, 0, 0, 0, 1],
      },
    ],
    practicehelp: [
      {
        name: "Haitao Yang",
        isin: [1, 1, 1, 0],
      },
      {
        name: "Wei Shen",
        isin: [1, 1, 1, 0],
      },
      {
        name: "Yifeng Zhang",
        isin: [1, 0, 0, 0],
      },
      {
        name: "Bailong Xiao",
        isin: [0, 0, 0, 1],
      },
      {
        name: "Ying Xi",
        isin: [1, 0, 0, 1],
      },
      {
        name: "Jing Yang",
        isin: [1, 1, 1, 0],
      },
      {
        name: "Xuesong Chen",
        isin: [1, 1, 1, 0],
      },
      {
        name: "Yijun Zheng",
        isin: [0, 0, 0, 1],
      },
    ],
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
    this.updatepos();
    setTimeout(() => {
      this.firstload = false;
      console.log("loaded");
    }, 1000);
  },
};
</script>

<style lang="scss">
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>