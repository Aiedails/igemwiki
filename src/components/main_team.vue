<template>
  <!-- NOTICE! This layout is **vulnerable**.
       It can perform well when the steps in nav-drawer less than 7.
       When more than 7, the footer well shield the nav-drawer.
       Please be awared of this!!
  -->
  <!-- Always set the margin of card in the main body to **35px** -->
  <v-container>
    <!-- steps. Stop use becuase of bad experience.
    <v-navigation-drawer absolute >
      <v-stepper vertical>
        <v-stepper-step
          v-for="(step, index) in infor"
          :key="index"
          :step="index + 1"
        >
          {{ step.name }}
        </v-stepper-step>
      </v-stepper>
    </v-navigation-drawer>
    -->
    <!-- another way is to use v-col to manage the page. which may be better -->
    <!-- the numbers below are got by test. Valid when cols are 3 & 9. -->
    <v-row justify="center">
      <v-col cols="2" v-if="width >= 960"></v-col>
      <v-col
        cols="2"
        style="position: fixed; width: 25%; left: 3%; margin-top: 35px"
        v-show="width >= 960"
      >
        <!-- 960px is the width between sm(600~960) & md(960~1264) -->
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Select an app
            <small>Summarize if needed</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <!-- card if needed -->
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
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
          </v-stepper-content>

          <v-stepper-step step="4"> View setup instructions </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
          </v-stepper-content>
        </v-stepper>
      </v-col>
      <!-- cards -->
      <!-- ####################################################################### -->
      <v-col cols="12" xs="12" sm="12" md="10" lg="9" xl="9" offset-xl="1">
        <!-- this is used to make sure the col won't move when screen reach xl.
             by the test, the col will move "a col" left, so we use offset to eliminate it.
             but notice that the col will still get wider on the right.
        -->
        <!-- This is a card for text. -->
        <v-card
          v-ripple="{ class: `info--text` }"
          style="margin: 35px auto; text-decoration:none"
          hover
          href="#description"
        >
          <v-img src="@/assets/temp_sht.jpg"></v-img>
          <v-container style="padding: 20px">
            <v-card-title class="text-h4"> Shanghaitech-China </v-card-title>
            <v-card-text>
              <p>
                Vue (pronounced /vjuː/, like view) is a progressive framework
                for building user interfaces. Unlike other monolithic
                frameworks, Vue is designed from the ground up to be
                incrementally adoptable. The core library is focused on the view
                layer only, and is easy to pick up and integrate with other
                libraries or existing projects. On the other hand, Vue is also
                perfectly capable of powering sophisticated Single-Page
                Applications when used in combination with modern tooling and
                supporting libraries.
              </p>
              <p>
                We are a friendly, kind family, always willing to help each
                other.
              </p>
            </v-card-text>
          </v-container>
        </v-card>
        <v-card
          hover
          v-for="(person, index) in infor"
          :key="index"
          style="margin: 35px auto"
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
          <v-row align="center" dense justify="start" no-gutters>
            <v-col style="max-width: 182px">
              <!-- 150 + 2 * 16 -->
              <v-list-item-avatar size="150px" style="margin: 16px">
                <v-img :src="person.photo"></v-img>
              </v-list-item-avatar>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col col="2">
              <v-container>
                <v-card-title>{{ person.name }}</v-card-title>
                <v-card-subtitle>{{ person.role }}</v-card-subtitle>
                <v-card-text>{{ person.discription }}</v-card-text>
              </v-container>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { gsap } from "gsap"
//uncomment this line to use gsap in this components
//I recommend just to use gsap saperately, not gloably.
//So use VueMotion in simple animate and gsap for more complex one.

export default {
  name: "main_team",
  props: {
    width: Number,
  },

  data: () => ({
    col_width: 0,
    e6: 1,
    infor: [
      {
        name: "sr",
        photo: require("@/assets/1.png"),
        discription: "very good people",
        role: "Team Leader",
      },
      {
        name: "zyy",
        photo: require("@/assets/2.png"),
        discription: "Very good people",
        role: "Modeling Wiki Hardware",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="sass">
</style>