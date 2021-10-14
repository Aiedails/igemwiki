
<template>
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <v-col
      cols="2"
      style="position: fixed; left: 35px;"
      v-show="width >= 1264"
    >
      <v-skeleton-loader
        v-show="firstload"
        type="list-item-two-line@2"
      ></v-skeleton-loader>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-stepper
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            v-show="!firstload"
            v-model="position"
            vertical
            non-linear
            style="transition: all 1s ease 1s; padding-bottom: 8px"
          >
            <v-stepper-step
              editable
              edit-icon="1"
              step="1"
              @click="$vuetify.goTo('#prologue', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Prologue
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#lab_safety', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Lab Safety
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#general_information', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              General microorganism information & general project design
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#specific_design', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Specific project design
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#use_of_harmful', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Use of harmful reagents and procedures
            </v-stepper-step>
          </v-stepper>
        </template>
      </v-hover>
    </v-col>
    <!-- ####################################################################### -->
    <v-col cols="12" xs="12" sm="12" md="12" lg="8">
      <!-- This is a card for text. -->
      <v-skeleton-loader
        v-show="firstload"
        type="image, article@3"
      ></v-skeleton-loader>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none"
            id="description"
            v-intersect="onIntersect"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-container style="padding: 20px">
<v-row justify="center"> <v-card-title class="text-h4 title">
Collaboration with three high-school teams   </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
</p>
<p class = "body-1">
We were invited by three high-school teams to collaborate on modeling.  As high-school teams, they lack the experience and knowledge of formulating mathematical models. We are thrilled to provide some help to apart the fundamental principles, formulas,  and paradigms for them. </p>
<p class = "body-1">
</p>
<v-img src="https://2021.igem.org/wiki/images/1/16/T--ShanghaiTech_China--col--pic1.png" contain max-height="600px"/>
<p class = "body-1">
> Fig.1a: We had an online meeting by Tencent Meeting</p>
<p class = "body-1">
</p>
<p class = "body-1">
![图片2](图片2.png)</p>
<p class = "body-1">
</p>
<p class = "body-1">
> Fig.1b: Teaching the basic modelling principles to three high-school teams</p>
<p class = "body-1">
</p>
<p class = "body-1">
And we are invited to attend an offline meeting to discuss the projects and exchange experience. During this meeting, we additionally provided some help on the upload of the Promotion Video. We discussed a lot about the design of the project and kept in touch with each other until now.</p>
<p class = "body-1">
</p>
<p class = "body-1">
![图片4](图片4.png)</p>
<p class = "body-1">
</p>
<p class = "body-1">
Fig.2: Offline meet up with three high-school teams.</p>
<p class = "body-1">
</p>
<p class = "body-1">
Three high-school teams are <a href="https://2021.igem.org/Team:LZU-HS-CHINA">LZU-HS-CHINA</a>, <a href="https://2021.igem.org/Team:Think_Edu_China">Think_Edu_China</a> and <a href="https://2021.igem.org/Team:XHD-Wuhan-Pro-China">XHD-Wuhan-pro-China</a>.</p>
<p class = "body-1">
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Collaboration with LZU_China  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
</p>
<p class = "body-1">
In the 2020 iGEM competition, we built a math model about the CRISPR-Cas12a based on molecular dynamics simulation. The principle is very similar to the system established by <a href="https://2021.igem.org/Team:LZU-CHINA">LZU-CHINA</a>. At an iGEM online conference, we discussed the modeling of the CRISPR system. We found that the model we built last year is suitable for LZU-CHINA too, so we provided the document and details of the model to the LZU-CHINA. We are glad that this previous work can help them deal with their model problems.</p>
<p class = "body-1">
</p>
<p class = "body-1">
See more details on our previous model work on [this](https://2020.igem.org/Team:ShanghaiTech_China/Model) page.</p>
<p class = "body-1">
</p>
<p class = "body-1">
See more details on LZU-CHINA model work on [this](https://2021.igem.org/Team:LZU-CHINA/Model) page.</p>
<p class = "body-1">
</p>
<p class = "body-1">
See our details on collaboration, see [this](https://2021.igem.org/Team:LZU-CHINA/Collaborations) page.</p>
<p class = "body-1">
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Collaboration with TJUSLS_China  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
</p>
<p class = "body-1">
At the end of May 2021, we came to Tianjin University and exchanged project plans with the TJUSLS_China team. We introduced the team organization and conducted in-depth exchanges on team building, project ideas, experimental experience, and other aspects. We talked about our related experimental progress and HP work. We also listened to their project of rational design mutation to improve the stability of PETase, and we affirmed the importance of their project. We also discussed the current problems of the two teams together, exchanged opinions in the early stages of the project, and provided new ideas for the team's follow-up work.</p>
<p class = "body-1">
</p>
<p class = "body-1">
![QQ图片20211013003652](QQ图片20211013003652.jpg)</p>
<p class = "body-1">
</p>
<p class = "body-1">
> Fig.3: Exchange the ideas about the project.</p>
<p class = "body-1">
</p>
            </v-container>
          </v-card>
        </template>
      </v-hover>
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
export default {
  name: "mainpart",
  props: {
    width: Number,
  },

  data: () => ({
    step: [],
    position: 1, //used for v-stepper
    isIntersecting: false,
    istop: true,
    firstload: true, //used for skeleton loader.
    options: {
      //used for the $vuetify.goto() func.
      duration: 400,
      offset: 0,
      easing: "easeInQuad",
    },
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
      /*
      var pos = [];
      var posnow = 0;
      for (var i = 0; i < this.step.length; i++) {
        pos[i] = this.step[i].getBoundingClientRect().top;
        if (pos[i] <= 300) posnow = i;
      }
      this.position = posnow + 1;
      */
    },
  },
  mounted() {
    this.step[0] = document.getElementById("prologue");
    this.step[1] = document.getElementById("lab_safety");
    this.step[2] = document.getElementById("general_information");
    this.step[3] = document.getElementById("specific_design");
    this.step[4] = document.getElementById("use_of_harmful");
    this.updatepos();
    setTimeout(() => {
      this.firstload = false;
      console.log("loaded");
    }, 1000);
  },
};
</script>

  }<style lang="scss">
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>    
