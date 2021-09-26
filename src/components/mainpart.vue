
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
              @click="$vuetify.goTo('#introduction', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Introduction
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#online', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Online popularization of synthetic boilogy
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#offline', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Offline Lectures
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#conclusion', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Conclusion
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
          <v-row justify="center">
            <v-card-title
              class="text-h4 title"
              id="introduction"
              v-intersect="onIntersect"
            >
              Introduction</v-card-title
            >
          </v-row>
          <v-card-text>
            <p class="body-1">
              Hello! Here is our Education section, which records our various
              educational activities! As we continue to educate students about
              biology and synthetic biology, we are making progress. Take a look
              at our activity log!
            </p>
          </v-card-text>
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="online">
              Online popularization of synthetic biology</v-card-title
            >
          </v-row>
          <v-card-title class="text-h5"
            >PV video publicity on Bilibili</v-card-title
          >
          <v-card-text>
            <p class="body-1">
              We uploaded our PV video on bilibili, a video platform in China,
              which has a lot of young fans. It can deliver our projects to
              strangers thousands of miles away. With Chinese subtitles and cute
              animated illustrations, it is easy for children to understand.
            </p>
            <p class="body-1">
              From the comments on the video, we got a lot of good comments and
              encouragement, and a lot of people were interested in our project
              and even the iGEM competition, which is exactly what we wanted to
              do.
            </p>
          </v-card-text>
          <v-img src="https://2021.igem.org/wiki/images/6/63/T--ShanghaiTech_China--edu--bilibili.jpg" />
          <v-card-title class="text-h5">
            Continuous popular science on our Wechat official accounts - Also
            collaborate with GA_State_SW_Jiaotong
          </v-card-title>
          <v-card-text>
            <p class="body-1">
              To make our materials accessible to a wider audience, we publish
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
            <p class="body-1">
              In addition, we have also reached a cooperation with
              GA_State_SW_Jiaotong. Every two weeks, we will forward each
              other's popular science content, so that more and better content
              can be spread to a wider range of places.
            </p>
          </v-card-text>
          <v-img src="https://2021.igem.org/wiki/images/a/a1/T--ShanghaiTech_China--edu--gongzhonghao.jpg" />
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="offline">
              Offline Lectures</v-card-title
            >
          </v-row>
          <v-card-title class="text-h5">
            Education in urban district</v-card-title
          >
          <v-card-text>
            <v-list style="padding-left: 16px">
              <v-list-item>
                <li class="body-1">
                  Junior high school - Activity of 'Scientists in campus'
                </li>
              </v-list-item>
              <v-list-item>
                <v-card-text>
                  <p class="body-1">Something here</p>
                  <p class="body-1">Something here</p>
                </v-card-text>
              </v-list-item>
              <v-list-item>
                <li class="body-1">College - To arouse interests</li>
              </v-list-item>
              <v-list-item>
                <v-card-text>
                  <p class="body-1">
                    We also often give lectures in the field of synthetic
                    biology on campus. Considering college students' strong
                    acceptance ability, we will choose more interesting topics
                    to talk about, such as double-regulated suicide system.
                    Interesting subjects make even students in other majors can
                    listen to with interest.
                  </p>
                  <p class="body-1">
                    Said some electrical engineering students, 'Through this
                    form of popular science, interdisciplinary communication can
                    help them have a more complete understanding of science and
                    a deeper understanding of their major.'
                  </p>
                  <v-img src="https://2021.igem.org/wiki/images/b/be/T--ShanghaiTech_China--edu--xq_ssy.jpg" />
                </v-card-text>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-title class="text-h5" id="poverty">
            Education in poverty-stricken area
          </v-card-title>
          <v-list style="padding-left: 16px">
            <v-list-item>
              <li class="body-1">
                Primary school in Yunnan - As volunteer teachers
              </li>
            </v-list-item>
            <v-list-item>
              <v-card-text>
                <p class="body-1">
                  This year, we went to Yunlong county in Yunnan. As a village
                  which is 4 hours mountain road by car from city, it's hard for
                  villager to communicate with the outside world, leading to old
                  and poor education resources. Even though their classrooms are
                  equipped with advanced facilities, the elderly teachers rarely
                  use them, so we teach them through electronic presentations
                  and the use of these devices. When we meet the principle over
                  there, he said passionately, 'When I saw students of
                  Shanghaitech, I saw hope of our education.'. Our visit
                  represent a big chance for students there.
                </p>
                <v-img src="https://2021.igem.org/wiki/images/8/8b/T--ShanghaiTech_China--edu--dh_1.jpg" />
                <p class="body-1"></p>
                <v-img src="https://2021.igem.org/wiki/images/0/0c/T--ShanghaiTech_China--edu--dh_2.jpg" />
                <p class="body-1">
                  Thinking about how little experience they have in learning
                  biology, We chose to introduce basic concepts in biology such
                  as
                </p>
                <p class="body-1">
                  internal environment, cells, DNA and so on. We brought the
                  children along to draw cells, organelles, DNA and so on, which
                  was a great way to focus the children's attention. It turned
                  out that they can easily accept the knowledge through the
                  analogy of cells in the internal environment and the swimmer.
                  So we tried to explain the central dogma of inheritance.
                  Although it was relatively difficult for them, they listened
                  with great interest and did well in the Q&A section in the
                  end. When we show the PV video of our team and Xinan team, it
                  seemed that we opened up new worlds for them. A few brief
                  introductory lessons kindled their interest in biology.
                </p>
                <p class="body-1">
                  After class, we offered online courses and popular science
                  videos for them so that even when we leave, they can continue
                  to study biology and even use these learning methods to learn
                  new content. Also, we left their contact information and
                  public account, to answer their future study and life in the
                  new questions.
                </p>
                <p class="body-1">
                  What moved us a lot was that some students quickly accepted
                  knowledge and excitedly told us that they want to become
                  scientists in the field of biology, which was undoubtedly the
                  biggest affirmation for us. Some of the students were able to
                  slowly say their answers together, even though they were
                  ashamed to stand up to answer the questions. We were overjoyed
                  by the progress of the students.
                </p>
              </v-card-text>
            </v-list-item>
            <v-list-item>
              <li class="body-1">
                Junior high school in Yunnan - As volunteer teachers
              </li>
            </v-list-item>
            <v-list-item>
              <v-card-text>
                <p class="body-1">
                  After talking to the students briefly, we realized that
                  although they had been exposed to a small amount of biological
                  knowledge about plants and animals, they still had no idea
                  about biology. In that case, rather than instilling a lot of
                  knowledge, we want to cultivate their interest in biology and
                  tell them what biology, especially synthetic biology, which
                  I'm working on, is for, and why should we study biology.
                </p>
                <p class="body-1">
                  For fun, I introduced junior high school students to the
                  structural colors of animals. I told them why chicken feathers
                  running around the village glow blue, why butterfly wings
                  change color, and, most intriguingly, how chameleons change
                  color. In this class, I found many videos from Bilibili, a
                  video website, as examples, which not only made students
                  understand more thoroughly, but also aroused their interest
                  more than boring words. It is also in this way that we show
                  how to use resources to find learning materials. I think this
                  will help students more than biology. At the same time, they
                  were very interested in hearing about what we were doing in
                  the iGEM competition, and the application aspect of it was
                  very novel to them.
                </p>
                <v-img src="https://2021.igem.org/wiki/images/8/80/T--ShanghaiTech_China--edu--dh_3.jpg" />
                <p class="body-1">
                  More students were willing to communicate with us than the
                  elementary school group. They were more grateful for the
                  invisible things we brought to them than just talking about
                  their feelings in biology class. 'I understand a lot, have
                  more motivation, good study confidence is also more firm.',
                  they said.
                </p>
                <v-img src="https://2021.igem.org/wiki/images/3/31/T--ShanghaiTech_China--edu--dh_4.jpg" />
              </v-card-text>
            </v-list-item>
            <v-list-item>
              <li class="body-1">
                Junior high school in Anhui - As volunteer teachers
              </li>
            </v-list-item>
            <v-list-item>
              <v-card-text>
                <p class="body-1">
                  In Anhui, we expanded the students' knowledge of botany. We
                  try to get out of the textbook and show them what common
                  plants are in their daily lives and how to make herbarium
                  specimens. Let them use living things. The students are having
                  fun and learning.
                </p>
                <v-img src="https://2021.igem.org/wiki/images/9/93/T--ShanghaiTech_China--edu--zch_1.jpg" />
              </v-card-text>
            </v-list-item>
          </v-list>
          <v-card-title class="text-h5" id="communication">
            GA_State_SW_Jiaotong - Communicaton
          </v-card-title>
          <v-card-text>
            <p class="body-1">Something here</p>
          </v-card-text>
          <v-card-title class="text-h5"> Community </v-card-title>
          <v-card-text class="body-1">
            <p class="body-1">
              In addition, we have designed various promotional materials for
              the project and synthetic biology, such as brochures, badges,
              posters, etc. Most of our audiences are students in Shanghaitech.
              After distributing the pamphlets for many times, almost all the
              students have some impression and understanding of iGEM. The
              feedback we received went from "I'm not a biology student" to "I
              know this competition", which made us very proud. After the first
              publicity, students came to know the situation in an endless
              stream, and some even took the initiative to ask. The iGEM group
              alone accounts for a quarter of all new students, a significant
              number.
            </p>
            <p class="body-1">
              We have also designed an Additional Brochure in English. We gave
              it to GA_State_SW_Jiaotong members in the United States, and with
              their help, our project spread among foreign students. This
              partnership enables us to extend our outreach abroad.
            </p>
            <v-img src="https://2021.igem.org/wiki/images/0/0b/T--ShanghaiTech_China--edu--pub.jpg" />
          </v-card-text>
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="conclusion"> Conclusion </v-card-title>
          </v-row>
          <v-card-text class="body-1">
            <p class="body-1">
              In general, the offline education of Shanghaitech_China reflects
              the differences between poor areas and urban areas, between
              domestic and foreign students, and between students of different
              ages. For such a wide group of students, we provide personalized
              class content according to their characteristics, so that students
              in each category can get the most out of the limited time.
            </p>
            <p class="body-1">
              In the beginning, we were motivated only by our own novelty and
              joy in spreading knowledge. But after experiencing these different
              classes, we also feel the heavy responsibility. A simple science
              lesson can help a student become interested in science, better
              understand the world, and may even change a student's life. In the
              process of publicity, we saw more and more people talking with us
              about synthetic biology and iGEM, and we were more motivated to
              continue the publicity.
            </p>
            <p class="body-1">
              The part of Education and Communication is a very meaningful
              thing, and ShanghaiTech_China will continue our volunteer teaching
              and online publicity after the competition to bring more
              scientific knowledge to students.
            </p>
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
    this.step[0] = document.getElementById("introduction");
    this.step[1] = document.getElementById("online");
    this.step[2] = document.getElementById("offline");
    this.step[3] = document.getElementById("conclusion");
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
