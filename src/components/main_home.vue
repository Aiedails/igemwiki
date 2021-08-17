<template>
  <div>
    <!-- disabled href="#..." in this components, because of bad experience. -->
    <!-- The final solution is to use v-col to manage the page. which may be better -->
    <v-row
      justify="center"
      style="margin: auto 40px"
    >
    <v-card height=10000px
      color = red
    >
    <!-- ####################################################################### -->
    <!-- Below is really MAIN PART -->
    </v-card>
    </v-row>

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