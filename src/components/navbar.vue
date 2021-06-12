<template>
  <v-container>
    <!-- normal nav -->
    <v-app-bar
      style="left: 9px; top: 25px; right: 9px"
      app
      dark
      color="#6A76AB"
      :collapse="width < 1264"
      :class="width < 1264 ? 'small' : ''"
      overflow-hidden
      shrink-on-scroll
      dense
      short
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      elevation="8"
      elevate-on-scroll
      rounded="lg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          @load="loading=true"
        ></v-img>
      </template>
      <!-- The nav-drawer icon -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="width <= 1264"
      ></v-app-bar-nav-icon>
      <!-- Home btn -->
      <v-btn icon v-show="width <= 1264">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title style="padding-left: 16px; padding-bottom: 0"
        >Title</v-toolbar-title
      >
      <!-- use <v-toolbar-title> instead of <v-app-bar-title> to prevent displaying "Ti..." -->
      <template v-slot:extension>
        <v-btn plain>HOME</v-btn>
        <v-spacer></v-spacer>

        <v-menu
          offset-y
          open-on-hover
          close-delay="100"
          transition="slide-y-transition"
          rounded="t-0"
          z-index="0"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on">Team</v-btn>
          </template>

          <v-list>
            <v-list-item link class="text-subtitle-1">Team</v-list-item>
            <v-list-item link class="text-subtitle-1">Attributions</v-list-item>
            <v-list-item link class="text-subtitle-1">Collaborations</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          offset-y
          open-on-hover
          close-delay="100"
          transition="slide-y-transition"
          rounded="t-0"
          z-index="0"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on">Project</v-btn>
          </template>
          <v-list>
            <v-list-item link class="text-subtitle-1">Description</v-list-item>
            <v-list-item link class="text-subtitle-1">Design</v-list-item>
            <v-list-item link class="text-subtitle-1">Proof Of Concept</v-list-item>
            <v-list-item link class="text-subtitle-1">Engineering</v-list-item>
            <v-list-item link class="text-subtitle-1">Implementation</v-list-item>
            <v-list-item link class="text-subtitle-1">Modeling</v-list-item>
            <v-list-item link class="text-subtitle-1">Protocols</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          offset-y
          open-on-hover
          close-delay="100"
          transition="slide-y-transition"
          rounded="t-0"
          z-index="0"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on">Contribution</v-btn>
          </template>

          <v-list>
            <v-list-item link class="text-subtitle-1">Contribution</v-list-item>
            <v-list-item link class="text-subtitle-1">Part Collection</v-list-item>
            <v-list-item link class="text-subtitle-1">Improvement</v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          offset-y
          open-on-hover
          close-delay="100"
          transition="slide-y-transition"
          rounded="t-0"
          z-index="0"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain v-bind="attrs" v-on="on">Human Practices</v-btn>
          </template>
          <v-list>
            <v-list-item link class="text-subtitle-1">Human Practices</v-list-item>
            <v-list-item link class="text-subtitle-1">Education</v-list-item>
          </v-list>
        </v-menu>
        <v-btn plain>Safety</v-btn>
      </template>
    </v-app-bar>
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-container style="height: 25px; padding: 0"></v-container>
      <!-- used to take place of the igem bar -->
      <v-list-item link @click.stop="drawer = false">
        <v-icon>mdi-chevron-left</v-icon>
        <!-- back icon -->
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="@/assets/temp_logo.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>ShanghaiTech</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <!-- normal mobile nav-drawer. on-use now. -->
      <v-list dense>
        <v-list-item link active-class="blue--text">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>

        <v-list-group :value="true" prepend-icon="mdi-account-multiple-check">
          <template v-slot:activator>
            <v-list-item-title>Team</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Team </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Attributions </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Collaborations </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-book-open">
          <template v-slot:activator>
            <v-list-item-title>Project</v-list-item-title>
          </template>
          <v-list>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Description</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Design</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Proof Of Concept</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Engineering</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Implementation</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Modeling</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Protocols</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-chevron-triple-up">
          <template v-slot:activator>
            <v-list-item-title>Contribution</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Contribution </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Part Collection </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Improvement </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-account-switch">
          <template v-slot:activator>
            <v-list-item-title>Human Practices</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Human Practices </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Education </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item link>
          <v-list-item-icon> <v-icon>mdi-alpha-s-circle-outline</v-icon> </v-list-item-icon>
          <v-list-item-title> Safety </v-list-item-title>
        </v-list-item>
      </v-list>
      <!-- the treeview mobile nav-bar. -->
      <!-- DON'T USE v-treeview ! IT CAN'T HAVE GOOD LINK UI!! 
      <v-treeview
        :open="initiallyOpen"
        :items="items"
        item-key="name"
        open-on-click
        transition
      >
        <template v-slot:label="{ item }">
          <v-btn plain :href="item.href">{{item.name}}</v-btn>
        </template>
      </v-treeview>
      -->
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  name: "navbar",
  props: {
    width: Number,
  },

  data: () => ({
    loading: false,
    drawer: null,
    /* for the v-treeview. Now abandon.
    initiallyOpen: ["Team"],
    nowact: ["Team"],
    items: [
      { name: "HOME" },
      {
        name: "Team",
        href: "#",
        children: [
          { name: "Team", href: "#" },
          { name: "Attributions", href: "#" },
          { name: "Collaborations", href: "#" },
        ],
      },
      {
        name: "Project",
        children: [
          { name: "Communication", href: "#" },
          { name: "Contribution", href: "#" },
          { name: "Description", href: "#" },
          { name: "Engineering", href: "#" },
          { name: "Implementation", href: "#" },
          { name: "Results" },
        ],
      },
      {
        name: "Parts",
        children: [{ name: "Parts" }, { name: "Improve" }],
      },
      { name: "Safety" },
      { name: "Human Practices" },
    ],
    */
  }),
};
</script>
<style lang="scss">
.small {
  padding-left: 4px;
  max-height: 48px;
  border-radius: 0;
  left: 0;
}
</style>