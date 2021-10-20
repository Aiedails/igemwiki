<template>
  <v-row justify="center" style="margin: auto 3%">
    <!-- 3% on v-row and 2% on fixed v-col work well. -->
    <v-col cols="2"></v-col>
    <!--
    <v-col cols="2" style="position: fixed; left: 2%" v-show="width >= 1264">
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
              @click="$vuetify.goTo('#students', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Students
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#professors', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              professors
            </v-stepper-step>
          </v-stepper>
        </template>
      </v-hover>
    </v-col>
    -->
    <!-- cards -->
    <!-- ####################################################################### -->
    <!-- Below is really MAIN PART -->
    <v-col cols="12" xs="12" sm="12" md="12" lg="8">
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
            v-scroll="updatepos"
            v-show="!firstload"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              y: 0,
            }"
          >
            <v-simple-table>
              <template v-slot:default>
                <thead v-intersect="onIntersect">
                  <tr>
                    <th>Name</th>
                    <th class="text-center">MIBOM technical interation</th>
                    <th class="text-center">Integrated Human Practice</th>
                    <th class="text-center">Entrepreneurship</th>
                    <th class="text-center">
                      The practice of balancing educational resources
                    </th>
                    <th class="text-center">
                      Collaborative international education practice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in hphelp" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td
                      v-for="(i, index) in item.isin"
                      :key="index"
                      class="text-center"
                    >
                      <v-list-item-avatar
                        class="secondary"
                        v-if="i > 0"
                        size="30"
                      >
                        <v-icon dark>mdi-check</v-icon>
                      </v-list-item-avatar>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none; margin-top: 35px"
            id="description"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th class="text-center">Reagents</th>
                    <th class="text-center">Equipment</th>
                    <th class="text-center">Mentorship</th>
                    <th class="text-center">Critical gene and cell</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in practicehelp" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td
                      v-for="(i, index) in item.isin"
                      :key="index"
                      class="text-center"
                    >
                      <v-list-item-avatar
                        class="secondary"
                        v-if="i > 0"
                        size="30"
                      >
                        <v-icon dark>mdi-check</v-icon>
                      </v-list-item-avatar>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none; margin-top: 35px"
            id="description"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Attributions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Rui Su</th>
                    <th>
                      Team leader, Lab design, Project manager, Monitor cell and
                      material experiments, Manage daily affairs of the team.
                    </th>
                  </tr>
                  <tr>
                    <th>Chenghao Zhu</th>
                    <th>
                      Monitor all experiments about mussel protein and
                      plasmids(Molecular experiments), Team finance.
                    </th>
                  </tr>
                  <tr>
                    <th>Yujie Wen</th>
                    <th>
                      Major in a series experiments of Mfp, Responsible for the
                      Presentation video
                    </th>
                  </tr>
                  <tr>
                    <th>Shiyue Ding</th>
                    <th>
                      Major in Entrepreneurship and Integrated Human Practices
                      part of the project, Responsible for some of the art work.
                    </th>
                  </tr>
                  <tr>
                    <th>Qi Xin</th>
                    <th>
                      Design the suicide system, Construct the
                      plasmid(pGL4.30-EGFP), Works on purification of Mfp,
                      Responsible for Parts registry.
                    </th>
                  </tr>
                  <tr>
                    <th>Kaijun Wang</th>
                    <th>
                      Design the suicide system, Construct the
                      plasmid(Downstream degradation plasmid), Prelab research
                      about Piezo1.1 and GCaMP, Responsible for Parts registry.
                    </th>
                  </tr>
                  <tr>
                    <th>Jing Sun</th>
                    <th>
                      Responsible for Modeling part of project, Works on partial
                      Collaboration and Education parts of the project, Data
                      analysis of the phototoxic and GCaMP.
                    </th>
                  </tr>
                  <tr>
                    <th>Han Ding</th>
                    <th>
                      Responsible for the Education and Safety part of the
                      project, Construct 5 plasmids in molecular and cell
                      experiments, Participate in the Promotion video.
                    </th>
                  </tr>
                  <tr>
                    <th>Huayu Wang</th>
                    <th>
                      Construct 5 plasmids in molecular and cell experiments,
                      Participate in the Promotion video.
                    </th>
                  </tr>
                  <tr>
                    <th>Zhiwen Huang</th>
                    <th>
                      Design of Homepage, Art work of the promotion video, Art
                      design of some elements on wiki page, Responsible for the
                      cell viability test experiment, Early design of the
                      extraction of Mfp, Participate in the Presentation video.
                    </th>
                  </tr>
                  <tr>
                    <th>Handi Jia</th>
                    <th>
                      Partial work on mechanical properties of Mfp and its
                      extraction and modification. Responsible for the Promotion
                      video and Presentation video.
                    </th>
                  </tr>
                  <tr>
                    <th>Zhiyi Wang</th>
                    <th>Wiki arrangement and partial work on page design.</th>
                  </tr>
                  <tr>
                    <th>Jieni Hu</th>
                    <th>
                      Responsible for the art design of Design, Description page
                      of Wiki, Responsible for the design of Poster, Works on
                      Collaboration with GA_State_SW_Jiaotong, Participate in
                      the promotion video.
                    </th>
                  </tr>
                  <tr>
                    <th>Shuyao Su</th>
                    <th>Works on collaboration with GA_State_SW_Jiaotong.</th>
                  </tr>
                  <tr>
                    <th>Yiyao Zhu</th>
                    <th>
                      Responsible for the hardware part of the project,
                      Responsible for the Promotion video and Presentation
                      video, Works on photo.
                    </th>
                  </tr>
                  <tr>
                    <th>Ziao Ling</th>
                    <th>
                      Works on early cell culture, Responsible for phototoxic,
                      preparation of GelMA, Partial work on Education part.
                    </th>
                  </tr>
                  <tr>
                    <th>Ziding Zhou</th>
                    <th>
                      Responsible for degradation experiment and Collaboration
                      with Jiangnan_China.
                    </th>
                  </tr>
                  <tr>
                    <th>Zixuan Li</th>
                    <th>Design of suicide system in eukaryocyte cells.</th>
                  </tr>
                  <tr>
                    <th>Zhuoya Li</th>
                    <th>
                      Partial work on page elements, Construct the
                      plasmid(pGL-EGFP), Partial work on Mfp extraction and
                      modification, Partial work on Promotion video and
                      Presentation video.
                    </th>
                  </tr>
                  <tr>
                    <th>Ruixuan Xue</th>
                    <th>Partial work on Modeling.</th>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </template>
      </v-hover>
      <!-- Used to present Professors -->
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
        name: "Jin Dai",
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