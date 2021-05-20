<template>
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
    <!-- cards -->
    <v-card
      class="temp"
      hover
      v-for="(person, index) in infor"
      :key="index"
      style="margin: 35px"
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
  </v-container>
</template>

<script>
//import { gsap } from "gsap"
//uncomment this line to use gsap in this components
//I recommend just to use gsap saperately, not gloably.
//So use VueMotion in simple animate and gsap for more complex one.

export default {
  name: "main_team",

  data: () => ({
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
};
</script>
