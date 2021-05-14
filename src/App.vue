<template>
  <v-app>
    <!-- normal nav -->
    <v-app-bar
      style="top: 16px"
      app
      v-resize="onResize"
      color="#6A76AB"
      dark
      :collapse="width < 1000"
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      ><!-- the resize used to resize :) -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension >
        <v-menu
          nudge-bottom="6px"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          nudge-bottom="6px"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          nudge-bottom="6px"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <v-container style="height: 224px"></v-container>
    <!-- mobile nav -->

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-content>aaa</v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>aaa</v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>aaa</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- the carousal -->
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

    <HelloWorld></HelloWorld>
    <v-main>
      <v-container style="height: 1500px"></v-container>
      <v-container>{{ width }}</v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    width: 0,
    drawer: null,
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1",
    ],
    cycle: false,
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>
