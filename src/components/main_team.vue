<template>
  <!-- disabled href="#..." in this components, because of bad experience. -->
  <!-- The final solution is to use v-col to manage the page. which may be better -->
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <v-col
      cols="2"
      style="position: fixed; left: 35px; margin-top: 35px"
      v-show="width >= 1264"
    >
      <!-- 1264px is the width between md(960~1264) & lg(1264~1904) -->
      <!-- steppers! Put here as reference.
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Select an app
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card class="mb-12" outlined>
            <v-list style="padding: 0">
              <v-list-item link>aaa</v-list-item>
              <v-list-item link>aaa</v-list-item>
            </v-list>
          </v-card>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Configure analytics for this app
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Select an ad format and name ad unit
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>

        <v-stepper-step step="4"> View setup instructions </v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        </v-stepper-content>
      </v-stepper>
       -->
      <v-stepper v-model="pos" vertical style="transition: all 1s ease 1s">
        <v-stepper-step
          :complete="pos > 1"
          step="1"
          style="transition: all 1s ease 1s"
        >
          <v-container v-ripple @click="$vuetify.goTo('#description', options)">
            Team members
          </v-container>
          <small>Some thing here...</small>
        </v-stepper-step>
        <v-stepper-step :complete="pos > 2" step="2" style="transition: all 1s">
          <v-container v-ripple @click="$vuetify.goTo('#professor', options)">
            Professors
          </v-container>
        </v-stepper-step>
      </v-stepper>
    </v-col>
    <!-- cards -->
    <!-- ####################################################################### -->
    <!-- Below is really MAIN PART -->
    <v-col cols="12" xs="12" sm="12" md="12" lg="8">
      <!-- this is used to make sure the col won't move when screen reach xl.
             by the test, the col will move "a col" left, so we use offset to eliminate it.
             but notice that the col will still get wider on the right.
        -->
      <!-- This is a card for text. -->
      <v-card
        v-ripple="{ class: `info--text` }"
        style="margin: 35px auto; text-decoration: none"
        hover
        id="description"
        v-intersect="onIntersect"
        v-scroll="updatepos"
      >
        <!-- This `v-intersect` is used to emit the signal "You can see me!" -->
        <v-img src="@/assets/temp_sht.jpg"></v-img>
        <v-container style="padding: 20px">
          <v-card-title class="text-h4"> Shanghaitech-China </v-card-title>
          <v-card-text class="body-1">
            <p>
              Vue (pronounced /vjuː/, like view) is a progressive framework for
              building user interfaces. Unlike other monolithic frameworks, Vue
              is designed from the ground up to be incrementally adoptable. The
              core library is focused on the view layer only, and is easy to
              pick up and integrate with other libraries or existing projects.
              On the other hand, Vue is also perfectly capable of powering
              sophisticated Single-Page Applications when used in combination
              with modern tooling and supporting libraries.
            </p>
            <p>
              We are a friendly, kind family, always willing to help each other.
            </p>
          </v-card-text>
        </v-container>
      </v-card>
      <v-card
        hover
        style="margin: 35px auto"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
      >
        <div
          v-for="(person, index) in infor"
          :key="index"
          style="padding: 0; margin: 0"
        >
          <v-row align="center" dense justify="start" no-gutters>
            <v-col style="max-width: 182px" cols="2">
              <!-- 150 + 2 * 16 -->
              <v-list-item-avatar
                :size="width >= 300 ? '150px' : '80px'"
                style="margin: 16px"
              >
                <v-img :src="person.photo"></v-img>
              </v-list-item-avatar>
            </v-col>
            <!-- Abandon dividers -->
            <v-col cols="12" sm="6" md="8" lg="8" xl="10">
              <v-container>
                <v-card-title>{{ person.name }}</v-card-title>
                <v-card-subtitle>{{ person.role }}</v-card-subtitle>
                <v-card-text>{{ person.discription }}</v-card-text>
              </v-container>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
      <!-- Used to present Professors -->

      <v-card
        v-ripple="{ class: `info--text` }"
        style="margin: 35px auto; text-decoration: none"
        class="white"
        hover
        id="professor"
        v-scroll="updatepos"
      >
        <v-img src="@/assets/temp_prof.jpg"></v-img>
        <v-container style="padding: 20px">
          <v-card-title class="text-h4"> Creative Professor </v-card-title>
          <v-card-text class="body-1">
            <v-card-title>Simplicity</v-card-title>
            <p>
              Arch Linux defines simplicity as without unnecessary additions or
              modifications. It ships software as released by the original
              developers (upstream) with minimal distribution-specific
              (downstream) changes: patches not accepted by upstream are
              avoided, and Arch's downstream patches consist almost entirely of
              backported bug fixes that are obsoleted by the project's next
              release.
            </p>
            <p>
              In a similar fashion, Arch ships the configuration files provided
              by upstream with changes limited to distribution-specific issues
              like adjusting the system file paths. It does not add automation
              features such as enabling a service simply because the package was
              installed. Packages are only split when compelling advantages
              exist, such as to save disk space in particularly bad cases of
              waste. GUI configuration utilities are not officially provided,
              encouraging users to perform most system configuration from the
              shell and a text editor.
            </p>
            <v-card-title>Modernity</v-card-title>
            <p>
              Arch Linux strives to maintain the latest stable release versions
              of its software as long as systemic package breakage can be
              reasonably avoided. It is based on a rolling-release system, which
              allows a one-time installation with continuous upgrades.
            </p>
            <p>
              Arch incorporates many of the newer features available to
              GNU/Linux users, including the systemd init system, modern file
              systems, LVM2, software RAID, udev support and initcpio (with
              mkinitcpio), as well as the latest available kernels.
            </p>
            <v-card-title>Pragmatism</v-card-title>
            <p>
              Arch is a pragmatic distribution rather than an ideological one.
              The principles here are only useful guidelines. Ultimately, design
              decisions are made on a case-by-case basis through developer
              consensus. Evidence-based technical analysis and debate are what
              matter, not politics or popular opinion.
            </p>
            <p>
              The large number of packages and build scripts in the various Arch
              Linux repositories offer free and open source software for those
              who prefer it, as well as proprietary software packages for those
              who embrace functionality over ideology.
            </p>
            <p>This is a not rather long paragraph.</p>
            <p>We can even add a second line.</p>
          </v-card-text>
        </v-container>
      </v-card>
      <!-- Notes: Don't use `a` on description cards. Cause ugly ripple and grey color after click -->
      <v-card
        hover
        style="margin: 35px auto"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
      >
        <div
          v-for="(person, index) in prof"
          :key="index"
          style="padding: 0; margin: 0"
        >
          <v-row align="center" dense justify="start" no-gutters>
            <v-col style="max-width: 182px" cols="2">
              <!-- 150 + 2 * 16 -->
              <v-list-item-avatar
                :size="width >= 300 ? '150px' : '80px'"
                style="margin: 16px"
              >
                <v-img :src="person.photo"></v-img>
              </v-list-item-avatar>
            </v-col>
            <v-col cols="12" sm="6" md="8" lg="8" xl="10">
              <v-container>
                <v-card-title>{{ person.name }}</v-card-title>
                <v-card-subtitle>{{ person.role }}</v-card-subtitle>
                <v-card-text>{{ person.discription }}</v-card-text>
              </v-container>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
    </v-col>
    <v-col cols="2" v-if="width >= 1264"></v-col>
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
  </v-row>
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
    col_width: 0,
    pos: 1,
    isIntersecting: false,
    istop: true,
    options: {
      //used for the $vuetify.goto() func.
      duration: 400,
      offset: 0,
      easing: "easeInQuad",
    },
    infor: [
      {
        name: "sr",
        photo: require("@/assets/1.png"),
        discription: "very good people",
        role: "Team Leader",
      },
      {
        name: "zyy",
        photo: require("@/assets/2.png"),
        discription: "Very good people",
        role: "Modeling Wiki Hardware",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
    ],
    prof: [
      {
        name: "Yang Haitao",
        photo: require("@/assets/3.png"),
        discription: "very good professor",
        role: "Some thing here...",
      },
      {
        name: "Gao Yan",
        photo: require("@/assets/3.png"),
        discription: "Very good professor",
        role: "Some thing here...",
      },
    ],
  }),
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
      console.log(this.isIntersecting);
      this.istop = this.isIntersecting;
    },
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
  },
  mounted() {
    this.updatepos();
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