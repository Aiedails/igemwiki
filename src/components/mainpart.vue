<template>
  <!-- disabled href="#..." in this components, because of bad experience. -->
  <!-- The final solution is to use v-col to manage the page. which may be better -->
  <v-row justify="center" style="margin: auto 3%">
    <!-- 3% on v-row and 2% on fixed v-col work well. -->
    <v-col cols="2"></v-col>
    <!-- No ` margin-top: 35px;` is required on iGEM server -->
    <v-col cols="2" style="position: fixed; left: 2%" v-show="width >= 1264">
      <!-- 1264px is the width between md(960~1264) & lg(1264~1904) -->
      <!-- steppers! Put here as reference.
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Select an app
          <small>Summarize if needed</sm>all>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card class="mb-12" outlined>
            <v-list style="padding: 0">
              <v-list-item link>aaa</v-list-item>
              <v-list-item link>aaa</v-list-item>
            </v-list>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Configure analytics for this app
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Select an ad format and name ad unit
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>

        <v-stepper-step step="4"> View setup instructions </v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>
      </v-stepper>
       -->
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
          >
            <v-container style="padding: 20px 3%">
              <v-row justify="center" v-intersect="onIntersect">
                <v-card-title class="text-h4 title" id="introduction">
                  Team introduction
                </v-card-title>
              </v-row>
              <v-card-text class="body-1">
                ShanghaiTech_China is an excellent team, focusing on changing
                the world with synthetic biology. Most of our members have
                interdisciplinary background or willingness, just like our
                project MIBOM. The design of MIBOM is delicate and difficult,
                combining the proteins, cells and materials. To finish the
                MIBOM, we need to learn about many areas, familiar or not, and
                combined them jointly. It is a hard work, but fortunately, we
                make it! Now they are trying to promote the implementation of
                products and grow into a new entrepreneurial team. There will be
                many difficulties in the future, but they firmly believe that
                they can overcome them and move towards a better future.
              </v-card-text>
            </v-container>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none; margin-top: 35px"
            id="students"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <div
              v-for="(person, index) in infor"
              :key="index"
              style="padding: 0; margin: 0"
            >
              <v-row align="center" dense justify="start" no-gutters>
                <v-col style="max-width: 182px" cols="2">
                  <!-- 150 + 2 * 16 -->
                  <v-list-item-avatar
                    :size="width >= 300 ? '150px' : '80px'"
                    style="margin: 16px"
                  >
                    <v-img :src="person.photo"></v-img>
                  </v-list-item-avatar>
                </v-col>
                <!-- Abandon dividers -->
                <v-col cols="12" sm="6" md="8" lg="8" xl="10">
                  <v-container>
                    <v-card-title class="body-1" style="font-weight: 400">{{
                      person.name
                    }}</v-card-title>
                    <v-card-subtitle>{{ person.role }}</v-card-subtitle>
                    <v-card-text class="body-2">{{
                      person.discription
                    }}</v-card-text>
                  </v-container>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-divider></v-divider>
            </div>
          </v-card>
        </template>
      </v-hover>
      <!-- Used to present Professors -->
      <v-skeleton-loader
        v-show="firstload"
        type="list-item-avatar-three-line@3"
      ></v-skeleton-loader>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="margin-top: 35px"
            v-show="!firstload"
            id="professors"
          >
            <v-card-text class="body-1"
              >And here're our creative professors and advisors.</v-card-text
            >
            <div
              v-for="(person, index) in prof"
              :key="index"
              style="padding: 0; margin: 0"
            >
              <v-row align="center" dense justify="start" no-gutters>
                <v-col style="max-width: 182px" cols="2">
                  <!-- 150 + 2 * 16 -->
                  <v-list-item-avatar
                    :size="width >= 300 ? '150px' : '80px'"
                    style="margin: 16px"
                  >
                    <v-img :src="person.photo"></v-img>
                  </v-list-item-avatar>
                </v-col>
                <v-col cols="12" sm="6" md="8" lg="8" xl="10">
                  <v-container>
                    <v-card-title>{{ person.name }}</v-card-title>
                    <v-card-subtitle>{{ person.role }}</v-card-subtitle>
                    <v-card-text class="body-2">{{
                      person.discription
                    }}</v-card-text>
                  </v-container>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
              <v-divider></v-divider>
            </div>
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
    infor: [
      {
        name: "Rui Su",
        photo:
          "https://2021.igem.org/wiki/images/b/b4/T--ShanghaiTech_China--mem--sr.jpg",
        discription:
          "As the student leader, he did all kinds of things. He must had a big heart and good mood.\
           He is a believer and lead the team.",
        role: "Team Leader",
      },
      {
        name: "Chenghao Zhu",
        photo:
          "https://2021.igem.org/wiki/images/a/a8/T--ShanghaiTech_China--mem--zch.jpg",
        discription:
          "He is the finance chief and the leader of molecular experiment team. He was used to starting \
          the experiment in the afternoon and keeping on doing it until midnight. NO ONE can force him to \
          get up early but E.coli.",
        role: "lab",
      },
      {
        name: "Shiyue Ding",
        photo:
          "https://2021.igem.org/wiki/images/f/fb/T--ShanghaiTech_China--team--dsy.jpg",
        discription:
          "She is a student of biology who should have chosen a liberal arts \
        major is now studying business herself. Currently, she is jointly responsible for the team's Human \
        Practice section, committed to making the project more realistic from the perspective of business \
        and creating more value for people.",
        role: "Human Practice",
      },
      {
        name: "Huayu Wang",
        photo:
          "https://2021.igem.org/wiki/images/b/b6/T--ShanghaiTech_China--mem--why.jpg",
        discription:
          "If you want bewildering, provoking, saddening maddening, rapturing, crumbling, rumbling, \
        tumbling, excruciatingly baffling babbling, he is your guy.",
        role: "lab",
      },
      {
        name: "Han Ding",
        photo:
          "https://2021.igem.org/wiki/images/0/00/T--ShanghaiTech_China--mem--dh.jpg",
        discription:
          "She is in charge of education part. She fit in extremely quickly with her students and did \
        surprisingly well as an educator, which may be an alternative after she loses her job in biology in the \
        future.",
        role: "Human Practice",
      },
      {
        name: "Zixuan Li",
        photo:
          "https://2021.igem.org/wiki/images/a/ac/T--ShanghaiTech_China--mem--lzx.jpg",
        discription:
          "She was mainly responsible for the experimental part, hope you enjoy her design in the project.",
        role: "lab",
      },
      {
        name: "Ziao Ling",
        photo:
          "https://2021.igem.org/wiki/images/b/b8/T--ShanghaiTech_China--mem--lza.jpg",
        discription:
          "Confirmedly willing to work on artificial organs to cure patients and develop the efficiency of \
        medical field. Geography enthusiast, architecture lover and amateur runner.",
        role: "lab",
      },
      {
        name: "Jieni Hu",
        photo:
          "https://2021.igem.org/wiki/images/2/2d/T--ShanghaiTech_China--mem--hjn.jpg",
        discription:
          "She participated in wet lab, art designing and collaboration part. She didn’t know anything \
        at first and groped her way like an explorer. But she could always be passionate and motivated to meet new \
        things and new people.",
        role: "art lab",
      },
      {
        name: "Zhiwen Huang",
        photo:
          "https://2021.igem.org/wiki/images/4/48/T--ShanghaiTech_China--mem--hzw.jpg",
        discription:
          "Majoring in life science, he mainly took part in the experiment of our team. he also \
        participated in the design of wiki, poster and videos out of his interest.",
        role: "art lab",
      },
      {
        name: "Zhuoya Li",
        photo:
          "https://2021.igem.org/wiki/images/9/9b/T--ShanghaiTech_China--mem--lzy.jpg",
        discription:
          "She was responsible for the work of the art design part of the team because she loves \
        painting, design, and photography. She is also enjoying doing her favorite biology experiments in the \
        lab in a white coat.Becoming a scientist who makes beneficial contributions is her dream.",
        role: "art lab",
      },
      {
        name: "Ruixuan Xue",
        photo:
          "https://2021.igem.org/wiki/images/a/a9/T--ShanghaiTech_China--mem--xrx.jpg",
        discription:
          "He is a creative, amiable and healthy sophomore with a little bit flair for doing \
        experiments and interest in modelling. Glad to have him in ShanghaiTech_China.",
        role: "model lab",
      },
      {
        name: "Jing Sun",
        photo:
          "https://2021.igem.org/wiki/images/0/03/T--ShanghaiTech_China--mem--sj.jpg",
        discription:
          "She’s interested in biology! She’s interested in mathematical modeling! \
        She’s interested in experiment!…",
        role: "model lab",
      },
      {
        name: "Yiyao Zhu",
        photo:
          "https://2021.igem.org/wiki/images/1/1d/T--ShanghaiTech_China--mem--zyy.jpg",
        discription:
          "He is good at embedded system and tries to combine this system with \
        biology to simplify the experiments.",
        role: "hardware lab",
      },
      {
        name: "Zhiyi Wang",
        photo:
          "https://2021.igem.org/wiki/images/e/e6/T--ShanghaiTech_China--mem--wzy.jpg",
        discription:
          "Majoring in computer science, this guy loves coding and turns his computer \
        into his friend. He uses Arch btw.",
        role: "wiki",
      },
      {
        name: "Kaijun Wang",
        photo:
          "https://2021.igem.org/wiki/images/9/9e/T--ShanghaiTech_China--mem--wkj.jpg",
        discription:
          "She is a beginner in wet lab, but she has great passion in biology. She \
        takes delight in finding explanations for unexpected results in experiments.",
        role: "lab",
      },
      {
        name: "Handi Jia",
        photo:
          "https://2021.igem.org/wiki/images/6/6e/T--ShanghaiTech_China--mem--jhd.jpg",
        discription:
          "He a life science student at ShanghaiTech University who focus on the \
        experiment and video parts in this project. Immersing himself in the experiment and \
        video production is always an attractive thing. ",
        role: "lab",
      },
      {
        name: "Shuyao Su",
        photo:
          "https://2021.igem.org/wiki/images/9/9d/T--ShanghaiTech_China--mem--ssy.jpg",
        discription:
          "She is a science biology undergraduate student from ShanghaiTech \
        university. She adept at playing tennis，consistently innovating to create value \
        and most importantly, loving biology!",
        role: "lab",
      },
      {
        name: "Qi Xin",
        photo:
          "https://2021.igem.org/wiki/images/e/ed/T--ShanghaiTech_China--mem--xq.jpg",
        discription:
          "Responsible for the experimental part, often messed up the experiment \
        but never give up. Have given several lectures about his iGEM teamwork, but unfortunately \
        there was almost no audience. Never lose his love for life sciences.",
        role: "lab",
      },
      {
        name: "Ziding Zhou",
        photo:
          "https://2021.igem.org/wiki/images/0/04/T--ShanghaiTech_China--mem--zzd.jpg",
        discription:
          "Zhouziding is a senior student majoring life and science technology. Although \
        she didn‘t quite know about life and science when she was a freshman, but during learning \
        about it, it shows its unique charm and opens a completely new world to her . Now she is \
        interested in experiment design -- how to find simple and efficient ways to solve problems \
        about the world.",
        role: "lab",
      },
      {
        name: "Yujie Wen",
        photo:
          "https://2021.igem.org/wiki/images/c/c2/T--ShanghaiTech_China--mem--wyj.jpg",
        discription:
          "As a veteran of the last iGEM competition, he loved experimentation and video \
          production, and this year he continues to storm!",
        role: "lab",
      },
    ],
    prof: [
      {
        name: "Kaida Zhang",
        photo:
          "https://2021.igem.org/wiki/images/b/bd/T--ShanghaiTech_China--mem--zkd.jpg",
        discription: "Affiliation: School of Life Science and Technology",
        role: "Undergraduate",
      },
      {
        name: "Mingzhe Chen",
        photo:
          "https://2021.igem.org/wiki/images/1/11/T--ShanghaiTech_China--team--cmz.jpg",
        discription: "full-stack bio-developer; 2017 ShanghaiTech igem leader",
        role: "master student at ETH Zurich",
      },
      {
        name: "Dr. Haitao Yang",
        photo:
          "https://2021.igem.org/wiki/images/0/00/T--ShanghaiTech_China--team--yht.jpg",
        discription:
          "Affiliation:School of Life Science and Technology, Shanghai Institute for Advanced Immunochemical Institute",
        role: "PhD, Associate Professor",
      },
      {
        name: "Dr. Wei Shen",
        photo:
          "https://2021.igem.org/wiki/images/6/61/T--ShanghaiTech_China--team--sw.jpg",
        discription: "Affiliation:School of Life Science and Technology",
        role: "PhD, Associate Professor",
      },
      {
        name: "Dr. Yan Gao",
        photo:
          "https://2021.igem.org/wiki/images/d/d1/T--ShanghaiTech_China--team--gy.jpg",
        discription:
          "Affiliation:School of Life Science and Technology, Shanghai Institute for Advanced Immunochemical Institute",
        role: "PhD, Associate Professor",
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
    this.step[0] = document.getElementById("students");
    this.step[1] = document.getElementById("professors");
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