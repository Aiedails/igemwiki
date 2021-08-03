<template>
  <!-- disabled href="#..." in this components, because of bad experience. -->
  <!-- The final solution is to use v-col to manage the page. which may be better -->
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <v-col
      cols="2"
      style="position: fixed; left: 35px; margin-top: 35px"
      v-show="width >= 1264"
    >
      <v-skeleton-loader
        v-show="firstload"
        type="list-item-two-line@2"
      ></v-skeleton-loader>
    </v-col>
    <!-- cards -->
    <!-- ####################################################################### -->
    <!-- Below is really MAIN PART -->
    <v-col cols="12" xs="12" sm="12" md="12" lg="8" style="margin-top: 35px">
      <!-- this is used to make sure the col won't move when screen reach xl.
             by the test, the col will move "a col" left, so we use offset to eliminate it.
             but notice that the col will still get wider on the right.
        -->
      <!-- This is a card for text. -->
      <v-skeleton-loader
        v-show="firstload"
        type="image, article@3"
      ></v-skeleton-loader>

      <v-skeleton-loader
        v-show="firstload"
        type="list-item-avatar-three-line@7"
      ></v-skeleton-loader>

      <!-- Used to present Professors -->

      <v-skeleton-loader
        v-show="firstload"
        type="image, article@5"
      ></v-skeleton-loader>

      <!-- Notes: Don't use `a` on description cards. Cause ugly ripple and grey color after click -->
      <v-skeleton-loader
        v-show="firstload"
        type="list-item-avatar-three-line@3"
      ></v-skeleton-loader>
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
  name: "main_team",
  props: {
    width: Number,
  },
  emits: {
    isseen: Boolean,
  },

  data: () => ({
    pos: 1, //used for v-stepper
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
    /*
    updatepos() {
      var description = document.getElementById("description");
      var professor = document.getElementById("professor");
      var despos = description.getBoundingClientRect().top;
      var propos = professor.getBoundingClientRect().top;
      if (despos >= 200) this.pos = 0;
      else if (despos <= 200 && propos >= 200) this.pos = 1;
      else if (despos <= 200 && propos <= 200) this.pos = 2;
      console.log(despos);
      console.log(propos);
    },
      */
  },
  mounted() {
    //this.updatepos();
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