<template>
  <v-app>
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

    <navbar></navbar>
    <v-main>
      <v-container style="height: 1500px">
        <main_team></main_team>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import main_team from "./components/main_team";
import navbar from "./components/navbar";

export default {
  name: "App",

  components: {
    main_team,
    navbar,
  },

  data: () => ({
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
};
</script>
