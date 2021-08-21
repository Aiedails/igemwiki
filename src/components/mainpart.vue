
<template>
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <v-col cols="2" style="position: fixed; left: 35px" v-show="width >= 1264">
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
              @click="$vuetify.goTo('#abstract', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Abstract
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#urban', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Education in urban district
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#poverty', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Education in poverty-stricken area
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#communication', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Xinan, abroad -- Communication
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#online_popularization', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Online popularization of synthetic biology
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
        type="image, article@6"
      ></v-skeleton-loader>
      <v-card
        style="text-decoration: none"
        v-intersect="onIntersect"
        v-scroll="updatepos"
        v-show="!firstload"
      >
        <v-container style="padding: 20px">
          <v-card-title class="text-h3"> Education </v-card-title>
          <v-card-title class="text-h4" id="abstract" v-intersect="onIntersect">
            Abstract
          </v-card-title>
          <v-card-text>
            <p class="body-1">一段文字</p>
          </v-card-text>
          <v-card-title class="text-h4" id="offline_lectures">
            Offline Lectures
          </v-card-title>
          <v-card-title class="text-h5" id="urban">
            Education in urban district
          </v-card-title>
          <v-card-title class="text-h6">
            Junior high school -- Activity of 'Scientists in campus'
          </v-card-title>
          <v-card-text>
            <p class="body-1">一段文字+图</p>
          </v-card-text>
          <v-card-title class="text-h6">
            Senior high school -- As summer volunteers
          </v-card-title>
          <v-card-text>
            <p class="body-1">一段文字+图</p>
          </v-card-text>
          <v-card-title class="text-h6">
            College - To arouse interests
          </v-card-title>
          <v-card-text>
            <p class="body-1">
              We also often give lectures in the field of synthetic biology on
              campus. Considering college students' strong acceptance ability,
              we will choose more interesting topics to talk about, such as
              double-regulated suicide system. Interesting subjects make even
              students in other majors can listen to with interest.
            </p>
            <p class="body-1"></p>
            <p class="body-1">
              Said some electrical engineering students, 'Through this form of
              popular science, interdisciplinary communication can help them
              have a more complete understanding of science and a deeper
              understanding of their major.'
            </p>
            <v-img src="@/assets/ssy.jpg" />
            <p class="body-1"></p>
            <v-img src="@/assets/xq_ssy.jpg" />
          </v-card-text>
          <v-card-title class="text-h5" id="poverty">
            Education in poverty-stricken area
          </v-card-title>
          <v-card-title class="text-h6">
            Primary school in Yunnan - As volunteer teachers
          </v-card-title>
          <v-card-text>
            <p class="body-1">
              This year, we went to Yunlong county in Yunnan. As a village which
              is 4 hours mountain road by car from city, it's hard for villager
              to communicate with the outside world, leading to old and poor
              education resources. Even though their classrooms are equipped
              with advanced facilities, the elderly teachers rarely use them, so
              we teach them through electronic presentations and the use of
              these devices. When we meet the principle over there, he said
              passionately, 'When I saw students of Shanghaitech, I saw hope of
              our education.'. Our visit represent a big chance for students
              there.
            </p>
            <v-img src="@/assets/dh_1.jpg" />
            <p class="body-1"></p>
            <v-img src="@/assets/dh_2.jpg" />
            <p class="body-1">
              Thinking about how little experience they have in learning
              biology, We chose to introduce basic concepts in biology such as
            </p>
            <p class="body-1">
              internal environment, cells, DNA and so on. We brought the
              children along to draw cells, organelles, DNA and so on, which was
              a great way to focus the children's attention. It turned out that
              they can easily accept the knowledge through the analogy of cells
              in the internal environment and the swimmer. So we tried to
              explain the central dogma of inheritance. Although it was
              relatively difficult for them, they listened with great interest
              and did well in the Q&A section in the end. When we show the PV
              video of our team and Xinan team, it seemed that we opened up new
              worlds for them. A few brief introductory lessons kindled their
              interest in biology.
            </p>
            <p class="body-1">
              After class, we offered online courses and popular science videos
              for them so that even when we leave, they can continue to study
              biology and even use these learning methods to learn new content.
              Also, we left their contact information and public account, to
              answer their future study and life in the new questions.
            </p>
            <p class="body-1">
              What moved us a lot was that some students quickly accepted
              knowledge and excitedly told us that they want to become
              scientists in the field of biology, which was undoubtedly the
              biggest affirmation for us. Some of the students were able to
              slowly say their answers together, even though they were ashamed
              to stand up to answer the questions. We were overjoyed by the
              progress of the students.
            </p>
          </v-card-text>
          <v-card-title class="text-h6">
            Junior high school in Yunnan - As volunteer teachers
          </v-card-title>
          <v-card-text>
            <p class="body-1">
              After talking to the students briefly, we realized that although
              they had been exposed to a small amount of biological knowledge
              about plants and animals, they still had no idea about biology. In
              that case, rather than instilling a lot of knowledge, we want to
              cultivate their interest in biology and tell them what biology,
              especially synthetic biology, which I'm working on, is for, and
              why should we study biology.
            </p>
            <p class="body-1">
              For fun, I introduced junior high school students to the
              structural colors of animals. I told them why chicken feathers
              running around the village glow blue, why butterfly wings change
              color, and, most intriguingly, how chameleons change color. In
              this class, I found many videos from Bilibili, a video website, as
              examples, which not only made students understand more thoroughly,
              but also aroused their interest more than boring words. It is also
              in this way that we show how to use resources to find learning
              materials. I think this will help students more than biology. At
              the same time, they were very interested in hearing about what we
              were doing in the iGEM competition, and the application aspect of
              it was very novel to them.
            </p>
            <v-img src="@/assets/dh_3.jpg" />
            <p class="body-1">
              More students were willing to communicate with us than the
              elementary school group. They were more grateful for the invisible
              things we brought to them than just talking about their feelings
              in biology class. 'I understand a lot, have more motivation, good
              study confidence is also more firm.', they said.
            </p>
            <v-img src="@/assets/dh_4.jpg" />
          </v-card-text>
          <v-card-title class="text-h6">
            Junior high school in Anhui - As volunteer teachers
          </v-card-title>
          <v-card-text>
            <p class="body-1">
              In Anhui, we expanded the students' knowledge of botany. We try to
              get out of the textbook and show them what common plants are in
              their daily lives and how to make herbarium specimens. Let them
              use living things. The students are having fun and learning.
            </p>
            <v-img src="@/assets/zch_1.jpg" />
            <p class="body-1"></p>
            <v-img src="@/assets/zch_2.jpg" />
          </v-card-text>
          <v-card-title class="text-h5" id="communication">
            Xinan, abroad - Communicaton
          </v-card-title>
          <v-card-title class="text-h5">
            Junior high school -- Road show
          </v-card-title>
          <v-card-text class="body-1">
            <p class="body-1">一段文字</p>
          </v-card-text>
          <v-card-title class="text-h5">
            Senior high school -- The living theatre
          </v-card-title>
          <v-card-text class="body-1">
            <p class="body-1">一段文字</p>
            <u>Specific format</u>
          </v-card-text>
          <v-card-title class="text-h5"> Conclusion </v-card-title>
          <v-card-text>
            <p class="body-1">一段文字+图</p>
          </v-card-text>
          <v-card-title class="text-h5" id="online_popularization">
            Online popularization of synthetic biology
          </v-card-title>
          <v-card-title class="text-h6">
            PV video publicity on Bilibili
          </v-card-title>
          <v-card-text>
            <p class="body-1">一段文字+图</p>
          </v-card-text>
          <v-card-text>
            <p class="body-1">
              * Continuous popular science on our Wechat official accounts -
              Also collaborate with Xinan
            </p>
            <p class="body-1">
              To make your materials accessible to a wider audience, we publish
              all the contents of the campus lectures to the public account,
              which not only enables students to understand and review the
              contents more systematically, but also enables more students who
              are not in class to accept popular science in their spare time. At
              the same time, considering that many children in poor areas are
              not able to use the electronic products around them, we also leave
              the courseware and our contact information when teaching offline,
              so as to teach them how to use the existing resources to learn
              better.
            </p>
            <p class="body-1"></p>
            <p class="body-1">一段文字+图</p>
          </v-card-text>
        </v-container>
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
      var pos = [];
      var posnow = 0;
      for (var i = 0; i < this.step.length; i++) {
        pos[i] = this.step[i].getBoundingClientRect().top;
        if (pos[i] <= 300) posnow = i;
      }
      this.position = posnow + 1;
    },
  },
  mounted() {
    this.step[0] = document.getElementById("abstract");
    this.step[1] = document.getElementById("urban");
    this.step[2] = document.getElementById("poverty");
    this.step[3] = document.getElementById("communication");
    this.step[4] = document.getElementById("online_popularization");
    this.updatepos();
    setTimeout(() => {
      this.firstload = false;
      console.log("loaded");
    }, 1000);
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
