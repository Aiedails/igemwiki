
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
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#conference', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Conference of China iGEMer Community(CCiC)
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="6"
              step="6"
              @click="$vuetify.goTo('#synbiopunk', options)"
              :complete="position > 6"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Synbiopunk Challenge
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="7"
              step="7"
              @click="$vuetify.goTo('#public', options)"
              :complete="position > 7"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Public lecture about the protection of marine animals with
              GreatBay_United
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="8"
              step="8"
              @click="$vuetify.goTo('#cop15', options)"
              :complete="position > 8"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              COP15 Youth Biodiversity Science Exploration Series: Synthetic
              Biology special session
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
          <!--
          <v-row>
            <v-card-title class="text-h3 title" v-intersect="onIntersect"
              >Education</v-card-title
            >
          </v-row>
          -->
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="introduction"
              >Introduction</v-card-title
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
          <v-img
            src="https://2021.igem.org/wiki/images/6/63/T--ShanghaiTech_China--edu--bilibili.jpg"
          />
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
          <v-img
            src="https://2021.igem.org/wiki/images/3/3d/T--ShanghaiTech_China--edu--gongzhonghao2.png"
            contain
            max-height="600px"
          />
          <v-img
            src="https://2021.igem.org/wiki/images/a/a1/T--ShanghaiTech_China--edu--gongzhonghao.jpg"
            contain
            max-height="600px"
          />
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
                  <p class="body-1">
                    iGEM is a multi-disciplinary competition, so our educational
                    content is very broad. In this class, we focus more on
                    information science. Our team chose a robot theme.
                    Information for junior high school students is complicated
                    and unknown, but when the short theory class ended, we took
                    out a real humanoid robot from the bag, the students were
                    obviously excited.
                  </p>
                  <p class="body-1">
                    The students were more receptive than we could have
                    imagined, and they started to design their own robots,
                    really stepping into the door of science. Click
                    <a
                      href="https://2021.igem.org/wiki/images/a/a7/T--ShanghaiTech_China--edu--here1.pptx"
                      >here</a
                    >
                    to learn together!
                  </p>
                  <v-img
                    src="https://2021.igem.org/wiki/images/5/5d/T--ShanghaiTech_China--edu--sjj.jpg"
                    contain
                    max-height="600px"
                  />
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
                    to talk about, such as the double-regulated suicide system.
                    Interesting subjects make even students in other majors can
                    listen to with interest.
                  </p>
                  <p class="body-1">
                    Although the format is similar to a lecture, the instructor
                    uses more analogies and a light-hearted story format to make
                    the content easier to understand. Each speech has been
                    carefully revised over a considerable amount of time. For a
                    one-hour lecture, the narrator will usually prepare at least
                    double the time, which enables the narrator to further
                    discuss in the face of the students' unexhausted desire.
                  </p>
                  <p class="body-1">
                    Said some electrical engineering students, 'Through this
                    form of popular science, interdisciplinary communication can
                    help them have a more complete understanding of science and
                    a deeper understanding of their major.'
                  </p>
                  <v-img
                    src="https://2021.igem.org/wiki/images/b/be/T--ShanghaiTech_China--edu--xq_ssy.jpg"
                  />
                  <p class="body-1">
                    In the beginning, we taught in the classroom. Later, when we
                    had attracted a lot of fans, we would use the lecture hall
                    at the academy. We are delighted by the love and support of
                    our students and are even more enthusiastic about longer,
                    richer, and more narrated lectures.
                  </p>
                  <p class="body-1">
                    We will even put up posters, distribute brochures and
                    determine the overall process plan and schedule before the
                    lecture. We even arranged for the two hosts and their
                    cameos. Click
                    <a
                      href="https://2021.igem.org/wiki/images/f/f6/T--ShanghaiTech_China--edu--here5.pptx"
                      >here</a
                    >
                    to learn together!
                  </p>
                  <v-img
                    src="https://2021.igem.org/wiki/images/0/08/T--ShanghaiTech_China--edu--igem1.png"
                    contain
                    max-height="600px"
                  />
                  <v-img
                    style="margin-top: 16px"
                    src="https://2021.igem.org/wiki/images/5/51/T--ShanghaiTech_China--edu--igem2.png"
                    contain
                    max-height="600px"
                  />
                  <p class="body-1">
                    And our friends made a presentation about the iGEM projects
                    of GA_State_SW_Jiaotong and ShanghaiTech_China to students
                    and faculty from different majors in Southwest Jiaotong
                    University. In this presentation, members of the
                    GA_State_SW_Jiaotong team firstly gave an introduction to
                    the project background and experimental design. Secondly,
                    GA_State_SW_Jiaotong team members presented
                    ShanghaiTech_China’s project for bone damage repair. This
                    presentation expanded the popularity and influence of both
                    projects.
                  </p>
                  <p class="body-1">
                    Students from different grades and majors of SWJTU actively
                    feedback to the presentation. Later, they participated in a
                    Q&A section, demonstrating a strong interest in our project
                    and the iGEM competition.
                  </p>
                  <v-img
                    src="https://2021.igem.org/wiki/images/f/f0/T--ShanghaiTech_China--edu--university.jpg"
                    contain
                    max-height="600px"
                  />
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
                <p class="body-1">
                  Thinking about how little experience they have in learning
                  biology, We chose to introduce basic concepts in biology such
                  as internal environment, cells, DNA, and so on. We brought the
                  children along to draw cells, organelles, DNA, and so on,
                  which was a great way to focus the children's attention. It
                  turned out that they can easily accept the knowledge through
                  the analogy of cells in the internal environment and the
                  swimmer. So we tried to explain the central dogma of
                  inheritance. Although it was relatively difficult for them,
                  they listened with great interest and did well in the Q&A
                  section in the end. When we show the PV video of our team and
                  GA_State_SW_Jiaotong, it seemed that we opened up new worlds
                  for them. A few brief introductory lessons kindled their
                  interest in biology.
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
                  by the progress of the students. Click
                  <a
                    href="https://2021.igem.org/wiki/images/e/ee/T--ShanghaiTech_China--edu--here2.pptx"
                    >here</a
                  >
                  to learn together!
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/8/8b/T--ShanghaiTech_China--edu--dh_1.jpg"
                />
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
                  understand more thoroughly but also aroused their interest
                  more than boring words. It is also in this way that we show
                  how to use resources to find learning materials. I think this
                  will help students more than biology. At the same time, they
                  were very interested in hearing about what we were doing in
                  the iGEM competition, and the application aspect of it was
                  very novel to them.
                </p>
                <p class="body-1">
                  More students were willing to communicate with us than the
                  elementary school group. They were more grateful for the
                  invisible things we brought to them than just talking about
                  their feelings in biology class. 'I understand a lot, have
                  more motivation, good study confidence is also more firm.',
                  they said. Click
                  <a
                    href="https://2021.igem.org/wiki/images/a/ac/T--ShanghaiTech_China--edu--here3.pptx"
                    >here</a
                  >
                  to learn together!
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/3/31/T--ShanghaiTech_China--edu--dh_4.jpg"
                />
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
                  fun and learning. Click
                  <a
                    href="https://2021.igem.org/wiki/images/2/23/T--ShanghaiTech_China--edu--here4.pdf"
                    >here</a
                  >
                  to learn together!
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/9/93/T--ShanghaiTech_China--edu--zch_1.jpg"
                />
              </v-card-text>
            </v-list-item>
          </v-list>
          <v-card-title class="text-h5"> Education abroad </v-card-title>
          <v-card-text>
            <p class="body-1">
              At the same time, we have partnered with our friends,
              GA_State_SW_Jiaotong, to teach synthetic biology in offline
              classrooms. This mutual assistance has allowed us to go further
              with our lesson plans and projects.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/e/e9/T--ShanghaiTech_China--edu--edudu.jpg"
              contain
              max-height="600px"
            />
          </v-card-text>
          <v-card-title class="text-h5"> Community </v-card-title>
          <v-card-text>
            <p class="body-1">
              In addition, we have designed various promotional materials for
              the project and synthetic biology, such as brochures, badges,
              posters, etc. Most of our audiences are students in ShanghaiTech
              University. After distributing the pamphlets many times, almost
              all the students have some impression and understanding of iGEM.
              The feedback we received went from "I'm not a biology student" to
              "I know this competition", which made us very proud. After the
              first publicity, students came to know the situation in an endless
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
            <v-img
              src="https://2021.igem.org/wiki/images/0/0b/T--ShanghaiTech_China--edu--pub.jpg"
              contain
              max-height="600px"
            />
            <p class="body-1">
              Together with Synthetic Biology Club members, our friends,
              GA_State_SW_Jiaotong, set up a stand with our posters to introduce
              the hair loss project and MIBOM program to the GSU students. Many
              students showed great interest in synthetic biology and signed up
              for the club. They also distributed flyers with a QR code for our
              survey on alopecia-related problems. Overall, the promotion was a
              great success. With the collaboration with them, we spread our
              project to other countries.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/8/8b/T--ShanghaiTech_China--edu--student.jpg"
              contain
              max-height="600px"
            />
            <p class="body-1">
              Also, they came to downtown Atlanta to promote our project in the
              community. They put up our posters and distributed flyers on the
              streets, introduced synthetic biology and the project "MIBOM" from
              ShanghaiTech_China, which promoted the promotion of the two
              parties' projects.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/2/25/T--ShanghaiTech_China--edu--us.jpg"
              contain
              max-height="600px"
            />
          </v-card-text>
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="conclusion">
              Conclusion
            </v-card-title>
          </v-row>
          <v-card-text class="body-1">
            <p class="body-1">
              In general, the offline education of ShanghaiTech_China reflects
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
          <!--
          <v-card-title class="text-h3">Communication</v-card-title>
          -->
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="conference"
              >Conference of China iGEMer Community(CCiC)</v-card-title
            >
          </v-row>
          <v-card-text>
            <p class="body-1">
              ShanghaiTech_China attached great importance to communication with
              other teams and iGEM community. We attended the 8th Conference of
              China iGEMer Community(8th CCiC) offline and were listed in the
              Finalist of best presentation. We got a lot of chances to
              communicate with other teams and most of our partnerships are
              achieved in the conference. The CCiC is important for
              ShanghaiTech_China to communicate others. As a previous CCiC
              sponsor, the communication between ShanghaiTch_China and CCiC is
              sustainable.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/c/cf/T--ShanghaiTech_China--edu--ccic.jpg"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">Fig.1a: Attendance of 8th CCiC</p>
            </v-row>
            <v-img
              src="https://2021.igem.org/wiki/images/3/37/T--ShanghaiTech_China--edu--ccic2.jpg"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">Fig.1b: Presentation of MIBOM at CCiC</p>
            </v-row>
          </v-card-text>
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="synbiopunk"
              >Synbiopunk Challenge</v-card-title
            >
          </v-row>
          <v-card-text>
            <p class="body-1">
              Hosted by Ailurus Biotech, Synbiopunk 2021 launched the Synbiopunk
              Challenge and we participated in the offline roadshow of
              Synbiopunk Challenge on October 09, 2019. Synbiopunk Challenge
              aims to integrate resources to deliver sustainable synthetic
              biology solutions to the sustainable Development Goals.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/5/58/T--ShanghaiTech_China--edu--synbiopunk.jpg"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">
                Fig.2: We did a 5-min presentation at Synbiopunk challenge
              </p>
            </v-row>
            <p class="body-1">
              In Synbiopunk challenge, we emphasized MIBOM's long-standing
              vision of contributing to the treatment of human Health. We hope
              MIBOM can truly optimize the existing mussel mucin extraction
              resources and become a truly clean and sustainable scientific
              innovation product to change the traditional way of fracture
              treatment and usher in a new era of fracture treatment.
            </p>
            <p class="body-1">
              We have placed third in the Synbiopunk Challenge and won 10,000
              RMB as our start-up fund. We hope MIBOM can become a real
              development product to help meet people's health needs.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/e/ec/T--ShanghaiTech_China--edu--synbiopunk2.jpg"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">
                Fig.3: We won a 10000 RMB prize as our start-up fund
              </p>
            </v-row>
          </v-card-text>
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="public"
              >Public lecture about the protection of marine animals with
              GreatBay_United</v-card-title
            >
          </v-row>
          <v-card-text>
            <p class="body-1">
              In order to understand the public's awareness of Marine animal
              protection, we made a questionnaire survey and found that most
              people know little about turtles and mussels. Therefore,
              GreatBay_United and ShanghaiTech_China hope to let more people
              know about the situation of these two Marine creatures through
              lectures. Therefore, through communication and negotiation, we
              were invited to have a lecture at Guangzhou Ulink College on
              October 14. However, due to the epidemic situation, we could not
              arrive at the scene, so we made a video to introduce
              ShanghaiTech_China's project this year and mussel-related
              knowledge to the audience. The seminar organized by
              GreatBay_United and ShanghaiTech_China was well received by the
              teachers and students who participated in the seminar, which
              enabled Ulink College students to understand the importance of
              protecting marine animals.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/e/e3/T--ShanghaiTech_China--edu--8150.jpg"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">
                Fig.4: Online MIBOM presentation in GreatBay_United
              </p>
            </v-row>
            <p class="body-1">
              See more details on our
              <a
                href="https://2021.igem.org/Team:ShanghaiTech_China/Partnership"
                >Partnership</a
              >
              page.
            </p>
          </v-card-text>
          <v-row justify="center">
            <v-card-title class="text-h4 title" id="cop15"
              >COP15 Youth Biodiversity Science Exploration Series: Synthetic
              Biology special session</v-card-title
            >
          </v-row>
          <v-card-text>
            <p class="body-1">
              COP15 Youth Biodiversity Science Exploration activity is
              co-sponsored by the Publicity and Education Center of the Ministry
              of Ecology and Environment and Polar Future. It is a scientific
              exploration activity to learn and practice biodiversity
              conservation and rethink the relationship between man and nature.
            </p>
            <p class="body-1">
              Synthetic biology is a budding revolution in the life sciences,
              and this new field is about to embrace its youth. As one of the
              important issues concerned by the Convention on Biological
              Diversity (CBD), synthetic biology has been attracting much
              attention for biodiversity conservation and sustainable use.
            </p>
            <p class="body-1">
              COP15 has a special session on synthetic biology, bringing
              together young teams of biodiversity explorers to share their
              practices in biodiversity conservation. We are fortunate to
              participate in this activity to share.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/0/03/T--ShanghaiTech_China--par--cop15.png"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">Fig.5: Brochure for COP15</p>
            </v-row>
            <p class="body-1">
              We shared MIBOM's efforts in biodiversity conservation, especially
              the extraction, purification and modification of mussel mucin. We
              optimized the existing extraction process and applied the
              biological preparation method to extract mussel. This is a good
              way to reduce mussel waste. At the meeting, our sharing was
              recognized by many experts, and after that, we kept in close
              contact with several of them to help us develop further.
            </p>
            <v-img
              src="https://2021.igem.org/wiki/images/d/dc/T--ShanghaiTech_China--edu--qqsomething.png"
              contain
              max-height="600px"
            />
            <v-row
              justify="center"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              <p class="body-2 fig">
                Fig.6: MIBOM presentation at COP15 online conference
              </p>
            </v-row>
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
    this.step[4] = document.getElementById("conference");
    this.step[5] = document.getElementById("synbiopunk");
    this.step[6] = document.getElementById("public");
    this.step[7] = document.getElementById("cop15");
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
