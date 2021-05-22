<template>
  <v-container>

    <!-- normal nav -->
    <v-app-bar
      style="left: 9px; top: 25px; right: 9px;"
      app
      dark
      color="#6A76AB"
      :collapse="width < 960"
      :class="width < 960 ? 'small' : ''"
      overflow-hidden
      shrink-on-scroll
      dense short
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      elevation=8
      elevate-on-scroll
      rounded="lg"
      >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <template v-slot:extension>
        <v-menu
          offset-y
          open-on-hover
          transition="slide-y-transition"
          rounded="t-0"
          z-index=0
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain class="rounded-0" v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          offset-y
          open-on-hover
          transition="slide-y-transition"
          rounded="t-0"
          z-index=0
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain class="rounded-0" v-bind="attrs" v-on="on"> Dropdown</v-btn>
          </template>

          <v-list>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
            <v-list-item>aaa</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          offset-y
          open-on-hover
          transition="slide-y-transition"
          rounded="t-0"
          z-index=0
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain class="rounded-0" v-bind="attrs" v-on="on"> Dropdown</v-btn>
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
      <v-container style="height: 25px; padding: 0;"></v-container>
      <!-- used to take place of the igem bar -->
      <v-list-item link @click.stop="drawer = false">
          <v-icon>mdi-chevron-left</v-icon>
        <!-- back icon -->
      </v-list-item>
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
  props: {
    width: Number
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
<style lang="scss">
.small {
  padding: 0;
  max-height: 48px;
  border-radius: 0;
  left: 0;

}
</style>