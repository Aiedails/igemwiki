/* The navigation bar of every page of the wiki.
 * This component in every page should be exactly the same.
 * DO NOT FORMAT THIS DOCUMENT! The formatter is stupid.
 */

<template>
  <v-container>
    <!-- normal nav -->
    <v-app-bar
      style="left: 9px; top: 25px; right: 9px"
      app
      class="primary"
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
          gradient="to top right, rgba(129,212,250,.7), #80DEEA"
          @load="loading=true"
        ></v-img> <!-- blue lighten-3 #90CAF6 -->
      </template>
      <!-- The nav-drawer icon -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="width <= 1264"
      ></v-app-bar-nav-icon>
      <!-- Home btn -->
      <v-btn icon v-show="width <= 1264" href="https://2021.igem.org/Team:ShanghaiTech_China" style="text-decoration: none; padding: 0;">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title style="padding-left: 16px; padding-bottom: 0;">
        Safety
      </v-toolbar-title >
      <!-- use <v-toolbar-title> instead of <v-app-bar-title> to prevent displaying "Ti..." -->
      <template v-slot:extension>
        <v-btn 
          plain 
          href="https://2021.igem.org/Team:ShanghaiTech_China/"
        >
          HOME
        </v-btn>
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
            <v-btn plain v-bind="attrs" v-on="on">Project</v-btn>
          </template>
          <v-list>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Description">Description</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Contribution">Contribution</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Proof_Of_Concept">Proof Of Concept</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Implementation">Implementation</v-list-item>
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
            <v-btn plain v-bind="attrs" v-on="on">Wet lab</v-btn>
          </template>

          <v-list>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Design">Design</v-list-item>
            <v-list-item class="body-1">Parts</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Engineering">Engineering</v-list-item>
            <v-list-item class="body-1" >Protocols</v-list-item>
            <v-list-item class="body-1">Experiments</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</v-list-item>
            <v-list-item class="body-1">Safty</v-list-item>
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
            <v-btn plain v-bind="attrs" v-on="on">Dry lab</v-btn>
          </template>

          <v-list>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Model">Modeling</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Hardware">Hardware</v-list-item>
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
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices">Integrated HP</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Education">Education</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Entrepreneurship">Entrepreneurship</v-list-item>
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
            <v-btn plain v-bind="attrs" v-on="on">Team</v-btn>
          </template>

          <v-list>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Team">Members</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Attributions">Attributions</v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Collaborations">Collaborations</v-list-item>
          </v-list>
        </v-menu>
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
        <v-list-item href="https://2021.igem.org/Team:ShanghaiTech_China" active-class="blue--text">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>

        <v-list-group :value="false" prepend-icon="mdi-book-open">
          <template v-slot:activator>
            <v-list-item-title>Project</v-list-item-title>
          </template>
          <v-list>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Description">
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Description</v-list-item-title>
            </v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Contribution">
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Contribution</v-list-item-title>
            </v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Proof_Of_Concept">
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Proof Of Concept</v-list-item-title>
            </v-list-item>
            <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Implementation">
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Implementation</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-beaker-plus">
          <template v-slot:activator>
            <v-list-item-title>Wet lab</v-list-item-title>
          </template>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Design">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Design </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Parts </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Engineering">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Engineering </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Protocols </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Experiments </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Results">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Results </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Safty </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-cube-send">
          <template v-slot:activator>
            <v-list-item-title> Dry lab </v-list-item-title>
          </template>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Model">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Modeling </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Hardware">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Hardware </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-account-switch">
          <template v-slot:activator>
            <v-list-item-title>Human Practices</v-list-item-title>
          </template>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Human Practices </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Education">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Education </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Entrepreneurship">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Entrepreneurship </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true" prepend-icon="mdi-account-multiple-check">
          <template v-slot:activator>
            <v-list-item-title>Team</v-list-item-title>
          </template>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Team">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Team </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Attributions">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Attributions </v-list-item-title>
          </v-list-item>
          <v-list-item class="body-1" href="https://2021.igem.org/Team:ShanghaiTech_China/Collaborations">
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Collaborations </v-list-item-title>
          </v-list-item>
        </v-list-group>
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