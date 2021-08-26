
<template>
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <v-col cols="2" style="position: fixed; left: 35px" v-show="width >= 1264">
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
              @click="$vuetify.goTo('#overview', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              overview
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#model', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              cooperation in models
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#hp', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              cooperation in human practice
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#develop', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Development of kill switch
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
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="overview"
                  >Overview</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  We established a connection GA_State_SW_Jiaotong through a
                  regional online conference. Since that meeting, we have
                  maintained a strong interest in each other's project content,
                  so in following weeks, we held several online and offline
                  meetings on experimental design, modeling, and human practice.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="model">
                  The first stage-implement enlightment and cooperation in
                  models</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  1.ShanghaiTech_China→GA_State_SW_Jiaotong: Implement
                  enlightment
                </p>
                <p class="body-1">
                  This year, GA_State_SW_Jiaotong's goal is to develop a
                  treatment for baldness by altering e. coli to secrete Gas6 and
                  EGF to promote hair growth. In the final implementation of the
                  selection of materials, GA_State_SW_Jiaotong is still hesitant
                  about E. coli(中间那个点应该是中心点，打不出来) packaging. In
                  this regard, we rediscussed with them. In combination with our
                  own gel project and system, we have provided a new idea: using
                  hydrogel to encapsulate E. coli (同上)may be more beneficial
                  to the survival and protein expression of engineered bacteria.
                  And this can be applied to daily life better.
                </p>
                <p class="body-1">
                  2.GA_State_SW_Jiaotong→ShanghaiTech_China: Cooperation in
                  models
                </p>
                <p class="body-1">
                  Our team ShanghaiTech_China is not good at mechanical
                  analysis. In our envisioned model, we want to know how the
                  mechanical force conduct from the hydrogel to the cells. But
                  we do not know how to build such models. GA_State_SW_Jiaotong
                  helped us on establishing the mechanical force conduction
                  model and taught us how to analyze these kinds of models.
                  During the first stage, we gained a lot from
                  GA_State_SW_Jiaotong. We believed this communication benefited
                  our project much.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="hp">
                  The second stage-cooperation in Human practice:</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  1.ShanghaiTech_China→GA_State_SW_Jiaotong: Education in
                  proverty-striken area
                </p>
                <p class="body-1">
                  We have the resources to support education in underdeveloped
                  areas. In order to expand the understanding of synthetic
                  biology, we used this resource to write lecture materials in
                  collaboration with GA_State_SW_Jiaotong to introduce two
                  teams' projects in poor areas (middle and primary schools in
                  Yunlong County, Yunnan Province, China, and Jing County, Anhui
                  Province, China). Meanwhile, we introduced the students to the
                  background of synthetic biology, comprehensive content, and
                  designed interesting experiments to lead them to understand
                  the content of synthetic biology.
                </p>
                <p class="body-1">
                  (Education中还有一部分由于我们还没有开展科学家进校园，所以还没写)
                </p>
                <p class="body-1">
                  2.GA_State_SW_Jiaotong→ShanghaiTech_China: Education in
                  international
                </p>
                <p class="body-1">
                  At present, GA_State_SW_Jiaotong has the educational resources
                  of American middle and high schools, which can realize the
                  teaching of synthetic biology for senior students. Using this
                  resource,GA_State_SW_Jiaotong helped us design lessons and
                  content for this educational practice, helping us publicize
                  MIBOM design. This expanded the audience for our synthetic
                  biology education. In addition, through the educational design
                  of GA_State_SW_Jiaotong stage play, this cooperation also
                  helps us expand the diversity and interest in our education,
                  so that we can learn a lot of diversified teaching methods.
                </p>
                <p class="body-1">3.Mutual Collaboration:</p>
                <p class="body-1">
                  GA_State_SW_Jiaotong and ShanghaiTech_China both have official
                  accounts of this project as online popularization tools. In
                  response, we worked together to write synthetic biology
                  popular tweets, and each suggested tweets about the project.
                  This effectively expands the audience for our respective
                  programs.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4" id="develop">
                  The third stage-development of kill switch:</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  1.ShanghaiTech_China→GA_State_SW_Jiaotong: Kill switch design
                </p>
                <p class="body-1">
                  Since Hnoss of GA_State_SW_Jiaotong helps hair growth by
                  expressing Gas6 and EGF molecules in EScherichia coli, the
                  safety risks of EScherichia coli in human environment should
                  be taken into account. For this, an effective kill switch is
                  needed to solve the problem. After communicating with
                  GA_State_SW_Jiaotong, we found that we had made a rigorous
                  kill switch in the early design, which was conducive to the
                  more efficient regulation of the termination and initiation of
                  protein expression. Therefore, we reached a cooperation with
                  Southwest Jiaotong University. We provided the design scheme,
                  principle, sequence and plasmid, sequencing the effectiveness
                  of the plasmid. Then we mailed the plasmid to
                  GA_State_SW_Jiaotong. GA_State_SW_Jiaotong is responsible for
                  the expression and experimental verification of the system.
                  (结果未知)
                </p>
                <p class="body-1">
                  2.xxx→ShanghaiTech_China: Expressing and Testing
                </p>
                <p class="body-1">(结果未知)</p>
                <p class="body-1"></p>
              </v-card-text>
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
      var pos = [];
      var posnow = 0;
      for (var i = 0; i < this.step.length; i++) {
        pos[i] = this.step[i].getBoundingClientRect().top;
        if (pos[i] <= 300) posnow = i;
      }
      this.position = posnow + 1;
    },
  },
  mounted() {
    this.step[0] = document.getElementById("overview");
    this.step[1] = document.getElementById("model");
    this.step[2] = document.getElementById("hp");
    this.step[3] = document.getElementById("develop");
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
