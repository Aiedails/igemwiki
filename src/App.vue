<template>
  <v-app
    dark
    style="
      background-repeat: repeat-y;
      background-position: center top;
      background-size: contain;
    "
    id="app"
  >
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

    <navbar
      v-resize="onResize"
      :width="this.width"
    ></navbar>
    <v-main id="main">
      <mainpart :width="this.width"></mainpart>
    </v-main>
    <temfooter></temfooter>
  </v-app>
</template>

<script>
import mainpart from "./components/mainpart";
import navbar from "./components/navbar";
import temfooter from "./components/teamfooter";
export default {
  name: "App",
  components: {
    mainpart,
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

<style lang="scss">
$primary: #1388e5;
$secondary: #4fc3f7;
::selection {
  background: $secondary;
  color: white;
}
#app {
  background: url("https://2021.igem.org/wiki/images/7/70/T--ShanghaiTech_China--bg.svg");
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
#globalwrapper {
  padding: 0;
}
p {
  margin: 0;
  font-size: 1rem;
}
a,
a:hover {
  text-decoration: none !important;
}
.list_number {
  border-width: 0 0 0 4px;
  border-color: $secondary !important;
  border-style: solid;
  padding: 0;
}
li::marker {
  color: $secondary;
}
/*use to change the size of v-stepper-step's sign.*/
.v-stepper__step__step {
  height: 16px;
  min-width: 16px;
  width: 16px;
}
.v-stepper__step__step .v-icon.v-icon {
  font-size: 0.75rem;
}
.code {
  padding: 16px;
  border-width: 0 0 0 4px;
  border-color: grey;
  border-style: solid;
  background-color: #eeeeee;
}
.code::selection {
  color: white;
  background: #838383 !important;
}
.title {
  box-shadow: inset 0px -12px $secondary !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-bottom: 16px !important;
}
</style>