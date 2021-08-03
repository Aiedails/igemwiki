<template>
  <v-app dark style="background-color: #ebecee" id="app">
    <!-- the carousal -->
    <!--
    <v-card elevation="24" width="380" class="mx-auto">
      <v-system-bar lights-out></v-system-bar>
      <v-carousel
        :continuous="false"
        :cycle="cycle"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="300"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    -->

    <navbar v-resize="onResize" :width="this.width"></navbar>
    <v-main id="main">
      <main_home :width="this.width"></main_home>
    </v-main>
    <temfooter></temfooter>
  </v-app>
</template>

<script>
import main_home from "./components/main_home";
import navbar from "./components/navbar";
import temfooter from "./components/teamfooter";

export default {
  name: "App",

  components: {
    main_home,
    navbar,
    temfooter,
  },

  data: () => ({
    width: 1300,
    istop: true,
    /* used for the carousel.
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1",
    ],
    cycle: false,
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    */
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.width = window.innerWidth; //While nav-bar collapses, let the v-main go up.
      if (this.width <= 1264)
        document.getElementById("main").style.top = "-140px";
      else document.getElementById("main").style.top = "0px";
    },
  },
  computed: {
    /* Used for v-motion. Now abandoned.
    goup: function() {
      this.onResize();
      console.log(this.width);
      if(this.width <= 960){
        console.log(-140);
        return -140;
      } 
      else return 0;
    }
    */
  },
};
</script>

<style>
::selection {
  background: #EF9A9A;
  color: white;
}
#main {
  position: relative;
  top: 0px;
}
#content {
  width: auto;
  margin: 0;
  padding: 0;
}
#top_title {
  display: none;
}
#globalWrapper {
  padding: 0;
}
p {
  margin: 0;
}
</style>