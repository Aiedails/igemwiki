<template>
  <v-container>

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

      <template v-slot:extension>
        <v-menu nudge-bottom="6px" offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
        <v-menu nudge-bottom="6px" offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
        <v-menu nudge-bottom="6px" offset-y transition="slide-y-transition">
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
    <!-- mobile nav -->

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-container style="height: 16px"></v-container>
      <!-- used to take place of the igem bar -->
      <v-container>
        <v-btn icon large @click.stop="drawer = false">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <!-- back icon -->
      </v-container>
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
          <v-menu offset-x transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-content v-bind="attrs" v-on="on">
                right
              </v-list-item-content>
            </template>

            <v-list>
              <v-list-item>aaa</v-list-item>
              <v-list-item>aaa</v-list-item>
              <v-list-item>aaa</v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>aaa</v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>aaa</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  name: "navbar",

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