/* The navigation bar of every page of the wiki.
 * This component in every page should be exactly the same.
 * DO NOT FORMAT THIS DOCUMENT! The formatter is stupid.
 */

<template>
  <v-container style="padding: 0; margin: 0">
    <!-- normal nav -->
    <!-- mobile nav -->
    <v-btn
      @click.stop="drawer = !drawer"
      fixed
      fab
      left
      top
      class="primary"
      style="top: 25px"
    >
      <v-icon> mdi-menu </v-icon>
    </v-btn>
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
        <v-list-item href="https://2021.igem.org/Team:ShanghaiTech_China">
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
            <v-list-item
              class="body-1"
              href="https://2021.igem.org/Team:ShanghaiTech_China/Description"
            >
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Description</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="body-1"
              href="https://2021.igem.org/Team:ShanghaiTech_China/Contribution"
            >
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Contribution</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="body-1"
              href="https://2021.igem.org/Team:ShanghaiTech_China/Proof_Of_Concept"
            >
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Proof Of Concept</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="body-1"
              href="https://2021.igem.org/Team:ShanghaiTech_China/Implementation"
            >
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Implementation</v-list-item-title>
            </v-list-item>
            <v-list-item
              class="body-1"
              href="https://2021.igem.org/Team:ShanghaiTech_China/Excellence_in_Another_Area"
            >
              <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
              <v-list-item-title>Excellence in Another Area</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-beaker-plus">
          <template v-slot:activator>
            <v-list-item-title>Wet lab</v-list-item-title>
          </template>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Design"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Design </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Engineering"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Engineering </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Experiments"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Experiments </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Results </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Safety"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Safety </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-cube-send">
          <template v-slot:activator>
            <v-list-item-title> Dry lab </v-list-item-title>
          </template>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Model"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Model </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Hardware"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Hardware </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="false"
          prepend-icon="mdi-shape-square-rounded-plus"
        >
          <template v-slot:activator>
            <v-list-item-title>Parts</v-list-item-title>
          </template>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Parts"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title>Parts</v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Improvement"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Improvement </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-account-switch">
          <template v-slot:activator>
            <v-list-item-title>Human Practices</v-list-item-title>
          </template>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Hp_overview"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Overview </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Integrated Human Practices </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Communication"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Communication & Education </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Entrepreneurship"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Entrepreneurship </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Sustainable"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Sustainable </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-account-multiple-check">
          <template v-slot:activator>
            <v-list-item-title>Team</v-list-item-title>
          </template>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Team"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Team </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Attributions"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Attributions </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Collaborations"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Collaborations </v-list-item-title>
          </v-list-item>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Partnership"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Partnership </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="false" prepend-icon="mdi-license">
          <template v-slot:activator>
            <v-list-item-title>Awards</v-list-item-title>
          </template>
          <v-list-item
            class="body-1"
            href="https://2021.igem.org/Team:ShanghaiTech_China/Judging"
          >
            <v-list-item-icon> <v-icon></v-icon> </v-list-item-icon>
            <v-list-item-title> Judging </v-list-item-title>
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