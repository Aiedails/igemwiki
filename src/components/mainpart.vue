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
              @click="$vuetify.goTo('#ga', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              GA_State_SW_Jiaotong
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#xmu', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              XMU-China
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#great', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              GreatBay_United
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#csu', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              CSU_China
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#jiangnan', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Jiangnan_China
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
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-container style="padding: 20px">
              <v-row justify="center">
                <v-card-title
                  class="text-h4 title"
                  id="ga"
                  v-intersect="onIntersect"
                >
                  GA_State_SW_Jiaotong
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Experiment & Modeling
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Shanghai University of Science and Technology and
                  GA_State_SW_Jiaotong reached cooperation in experimental
                  design and modeling through online and In-person meetings in
                  June and July. In the online meeting in June, the two teams
                  communicated and exchanged views on modeling design and
                  experimental design. In terms of modeling design, we solicited
                  relevant design ideas from the modeling team of
                  GA_State_SW_Jiaotong to predict the viscosity of mussel mucin.
                  GA_State_SW_Jiaotong suggested that, with less data, the
                  viscosity prediction of proteins could be achieved by
                  establishing equations based on biological properties such as
                  hydrophobicity, molecular weight, and ion charge. As for the
                  experimental aspect, we shared the design idea of the E.coli
                  toxin-antitoxin (TA) system for GA_State_SW_Jiaotong. Unlike
                  GA_State_SW_Jiaotong's previous design, which used temperature
                  conditions to induce bacillus subtilis suicide, the TA system
                  is a dual-modulated suicide system that uses tryptophan and
                  lactose to induce bacterial suicide. As soon as the bacteria
                  leave the scalp environment and fall into an external
                  environment free of tryptophan and lactose, they will commit
                  suicide. In the In-person meeting in July, the two teams had
                  in-depth discussions on the design of the suicide switch and
                  the design of the protein viscosity prediction model. We
                  provided a more detailed design plan for GA_State_SW_Jiaotong
                  and answered the specific questions on plasmid copy number and
                  vector construction. GA_State_SW_Jiaotong also answered the
                  questions we had on model design. After that, we found some
                  experts in stem cells, antibody drugs, and hair loss treatment
                  for GA_State_SW_Jiaotong to provide them with more information
                  channels.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/2/2d/T--ShanghaiTech_China--par--5453.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.1: In-person meet up with GA_State_SW_Jiaotong
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5"> Human Practice </v-card-title>
              <v-card-text>
                <p class="body-1">
                  GA_State_SW_Jiaotong and ShanghaiTech_China not only
                  cooperated in experiment and modeling but also carried out
                  in-depth communication and cooperation in Human Practice.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Public education </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The two teams have set up their own Wechat official accounts,
                  and take turns to write articles to introduce the basic
                  principles and the latest progress of synthetic biology to the
                  public, as well as the iGEM competition and popularization of
                  scientific knowledge. In summer vacation, to enhance the
                  educational influence of both programs, we introduced this
                  year's iGEM program into the rural volunteer teaching program
                  for social practice and introduced the relevant knowledge of
                  synthetic biology to the rural students, as well as the iGEM
                  program of the two teams this year, which broadened the
                  horizon for the local students. To increase the interest of
                  rural students in scientific exploration, our iGEM team
                  members also customized the field taxidermy course for local
                  children. This way of popularizing science through fun and
                  learning has been loved by local students and teachers. On
                  September 19, GA_State_SW_Jiaotong held a community exhibition
                  in Furong Community, Chengdu, to introduce the basic knowledge
                  of stress alopecia, treatment after fracture, and related
                  nursing methods to the residents. GA_State_SW_Jiaotong
                  prepared promotional materials and gifts for the participants
                  and distributed brochures of the two teams to the passing
                  residents. The residents read our leaflets, scanned the QR
                  code, followed the Wechat official accounts of the two teams,
                  and filled in the questionnaires related to the projects after
                  hearing and learning about our projects. During the game
                  session, residents participated in mini-games such as memory
                  cards and flip cards. These games combine science with common
                  sense, allowing residents to have fun while learning about
                  synthetic biology. Through community outreach, we have
                  successfully delivered the most advanced research results to
                  the public, giving them a taste of the real-world applications
                  of synthetic biology. By working together, we hope to expand
                  the impact and educational significance of our programs in all
                  fields.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Campus propaganda </v-card-title>
              <v-card-text>
                <p class="body-1">
                  On September 17th,ShanghaiTech_China held a program
                  introduction and popular science lecture for the freshmen of
                  ShanghaiTech University who will enter this fall semester,
                  introducing ShanghaiTech_China and GA_State_SW_Jiaotong
                  project for the new students.
                </p>
                <p class="body-1">
                  In the lecture, we introduced the development history of iGEM
                  competition, and also introduced the mechanism and process of
                  iGEM competition for students by taking the excellent projects
                  of iGEM competition over the years as an example.
                </p>
                <p class="body-1">
                  We also invited the former iGEM players to introduce their
                  achievements and experiences in the iGEM competition.During
                  the lecture, students were very interested in the two teams'
                  participating projects this year and asked many interesting
                  questions. We also gained many new ideas from students.
                </p>
                <p class="body-1">
                  On September 24, THE GA_State_SW_Jiaotong team introduced
                  their iGEM project and ShanghaiTech_China's iGEM project to
                  teachers and students from different majors in Southwest
                  Jiaotong University.In the exchange activities, the
                  GA_State_SW_Jiaotong team introduced the design idea and
                  experimental design method of this project. Secondly, the
                  GA_State_SW_Jiaotong team members introduced
                  ShanghaiTech_China bone injury repair project. students from
                  different grades and majors participated in the Q&A session
                  and showed their keen interest in our project and iGEM
                  competition.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/7/7d/T--ShanghaiTech_China--par--fig1.jpg"
                      contain
                      max-height="600px"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/0/04/T--ShanghaiTech_China--par--fig2.jpg"
                      contain
                      max-height="600px"
                    />
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Fig.2: Campus propaganda in ShanghaiTech University
                    </p>
                  </v-row>
                </v-row>
                <p class="body-1">
                  See the other side view of our partnership, see
                  <a
                    href="https://2021.igem.org/Team:GA_State_SW_Jiaotong/Partnership"
                    >this</a
                  >
                  page
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="xmu"
                  >XMU-China</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  In this year's Partnership project, ShanghaiTech_China and
                  XMU-China have maintained good communication and positive
                  cooperation.
                </p>
                <p class="body-1">
                  Thanks to the CCIC meet-up in April, we found a partner iGEM
                  team on mussel research. We kept in touch and did a lot of
                  research on mussel protein. We both found the mussel protein
                  was too expensive to buy and extraction of mussel protein from
                  <strong><i>E.coli</i></strong> was a good way. From that
                  moment on, we exchanged a lot of experience about the mussel
                  protein.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/a/ab/T--ShanghaiTech_China--par--4411.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Fig.3: Online meet up with XMU-China</p>
                </v-row>
                <p class="body-1">
                  Because the project design of the two teams involved the
                  application and expansion of mussel mucin, the two teams had
                  in-depth communication and cooperation in the expression and
                  purification of mussel mucin, as well as protein modification,
                  viscosity determination, and tension determination.
                  ShanghaiTech_China provided plasmids and strains of mussel
                  mucin MEFP5-1 for XMU-China and provided suggestions on
                  protein purification. At the same time, XMU-CHINA also
                  provided technical guidance for our mussel mucin viscosity
                  measurement experiment. With their help, we successfully
                  measured the viscosity data of mussel mucin. The communication
                  and cooperation between the two sides played a key role in
                  promoting our project, and we also gained a lot of knowledge
                  in communication.
                </p>
                <p class="body-1">
                  Moreover, we had a collaboration on Human Practice and
                  Sustainable development. For ShanghaiTech_China, the Human
                  Practice focused on the medical cycle about patients,
                  clinicians, and hospitals. XMU-China's Human Practice was
                  mainly about the mussel problem. We got a lot of information
                  from XMU-China's Human Practice work and this is really
                  beneficial for our Sustainable development work. See more
                  details on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Sustainable"
                    >Sustainable</a
                  >
                  page.
                </p>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">Time</th>
                        <th>Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center">April</th>
                        <th>
                          We attended a CCiC meet up and got to know the
                          projects of XMU-China, exchanging the experience of
                          getting mussel protein. We suggested that the
                          extraction of Mfp from ***E.coli*** is good way.
                        </th>
                      </tr>
                      <tr>
                        <th class="text-center">July</th>
                        <th>
                          The plasmid constructed by them has always had the
                          problem of mutation. At the same time, our strain was
                          constructed. We provided the constructed strain and
                          exchanged our experience in protein purification and
                          modification. In the same communication, they provided
                          us with a scheme to measure the mechanical properties
                          of mussel mucin, which provided inspiration for our
                          later experimental design.
                        </th>
                      </tr>
                      <tr>
                        <th class="text-center">October</th>
                        <th>
                          We want to do more work on sustainable development,
                          but our Human Practice was mainly about the medical
                          cycle. We got a lot information from XMU-China's Human
                          Practice. At the same time, XMU-China got the data of
                          mechanical properties of mussel protein, we discussed
                          about the data and got a better understanding of the
                          mussel protein.
                        </th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <p class="body-1">
                  See the other side view of our partnership, see
                  <a href="https://2021.igem.org/Team:XMU-China/Partnership"
                    >this page</a
                  >.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="great">
                  GreatBay_United
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  ShanghaiTech_China is very concerned about current
                  environmental protection issues, especially Marine environment
                  and biodiversity protection. Therefore, in the design process
                  of the project, we used the technology of synthetic biology to
                  rely on escherichia coli to express mussel mucin instead of
                  extracting proteins directly from mussels in the traditional
                  industry. We also hope to raise public awareness of the
                  protection of Marine life through public publicity. The
                  project of GreatBay_United has attracted the attention of
                  ShanghaiTech_China team. GreatBay_United hopes to develop a
                  new set of efficient and accurate bacterial endotoxin
                  detection solutions through the method of synthetic biology to
                  replace the traditional turtle blood reagent. To try to save
                  the future of an endangered species. After communication and
                  exchange, we found that both teams took the protection of the
                  Marine environment as one of the priorities of the project, so
                  we decided to have deeper cooperation in project design and
                  Human Practice.
                </p>
                <p class="body-1">
                  In order to understand the public's awareness of Marine animal
                  protection, we made a questionnaire survey and found that most
                  people know little about turtles and mussels. Therefore,
                  GreatBay_United and ShanghaiTech_China hope to let more people
                  know about the situation of these two Marine creatures through
                  lectures. Therefore, through communication and negotiation, we
                  were invited to have a lecture at Guangzhou Ulink College on
                  October 14. However, due to the epidemic situation, we could
                  not arrive at the scene, so we made a video to introduce
                  ShanghaiTech_China's project this year and mussel-related
                  knowledge to the audience. The seminar organized by
                  GreatBay_United and ShanghaiTech_China was well received by
                  the teachers and students who participated in the seminar,
                  which enabled Ulink College students to understand the
                  importance of protecting marine animals.
                </p>
                <v-img src="" contain max-height="600px" />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Fig.4</p>
                </v-row>
                <p class="body-1">
                  At the same time, GreatBay_United and ShanghaiTech_China also
                  participated in the COP15 Youth Biodiversity Science
                  Exploration activity. This activity was jointly initiated by
                  the Publicity and Education Center of the Ministry of Ecology
                  and Environment and POLARHUB to learn and practice
                  biodiversity conservation through scientific exploration and
                  rethink the relationship between man and nature.
                  ShanghaiTech_China reported this year's iGEM project and also
                  had a heated and friendly discussion with the participating
                  teams and scientists on the topic of "How to use synthetic
                  biology to protect biodiversity?". The conference broadened
                  our understanding of the range of ideas and applications of
                  synthetic biology and gave us a deeper insight into our
                  projects.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/0/04/T--ShanghaiTech_China--par--gbu.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.5: GBU sharing in COP15 online conference
                  </p>
                </v-row>
                <p class="body-1">
                  See more details about our work about sustainable development
                  on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Sustainable"
                    >Sustainable</a
                  >
                  page.
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
                  <p class="body-2 fig">
                    Fig.6 COP15 conference, ShanghaiTech_China, GreatBay_United
                    and Jiangnan_China are invited to share the projects.
                  </p>
                </v-row>
                <p class="body-1">
                  See the other side view of our partnership, see
                  <a
                    href="https://2021.igem.org/Team:GreatBay_United/Partnership"
                    >this page</a
                  >.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="csu"
                  >CSU_China</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  Since our project involves the survival rate of cells in the
                  hydrogel, and we hope to add drugs to promote bone recovery in
                  the hydrogel system in the further project design, we must
                  have a deeper understanding of the diffusion model and
                  diffusion rate of drug molecules in the hydrogel, to optimize
                  the design. ShanghaiTech_China team members have excellent
                  cell culture ability, but we have little difficulty in the
                  experimental design of drug diffusion detection. Therefore,
                  finding a team with complementary advantages for cooperation
                  is a choice for better development of the project. CSU_China
                  and ShanghaiTech_China hit it off! CSU_China's 2021 project
                  focuses on finding a new method of treating type 1 diabetes
                  with the help of synthetic biology. CSU_China came up with the
                  idea of using hydrogel as a carrier for cell growth to make
                  cells play a role in the humoral environment. This is also
                  what ShanghaiTech_China has done! Therefore, in subsequent
                  communication, the two teams discussed with each other the
                  feasibility of immobilizing cells in hydrogel culture and what
                  kind of hydrogel culture cells should be used. Our team tested
                  the viability of CSU_China cells in hydrogel to verify the
                  feasibility of using hydrogel to immobilize cells. CSU_China
                  also provided key guidance for the design of our drug release
                  experiment and completed the drug release experiment in the
                  hydrogel. In the process of cooperation between the two teams,
                  we communicated with each other and learned from each other,
                  so that our project moved forward quickly and well.
                </p>
                <p class="body-1">
                  Thanks to the CCiC, we have an offline meet-up with CSU_China,
                  and we are glad that we have a close friend and make a
                  contribution together in exploring the boundary of synthetic
                  biology.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/0/0a/T--ShanghaiTech_China--par--3549.jpg"
                      contain
                      max-height="600px"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.7a: CSU_China presentation in CCiC
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/1/14/T--ShanghaiTech_China--par--3559.jpg"
                      contain
                      max-height="600px"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.7b: ShanghaiTech_China presentation in CCiC
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="jiangnan">
                  Jiangnan_China
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  We started working with Jiangnan_China in April to introduce
                  the Gadusol synthetic pathway in zebrafish into yeast to
                  produce a biosunscreen that is not harmful to coral or the
                  ocean. In July, the two teams had in-depth and detailed
                  communication and discussion on the experimental design of the
                  project. In August, the two teams participated in the 8th
                  China Regional iGEMer Exchange (CCiC conference). The two
                  teams also carried out further communication on project design
                  and finalized the cooperation of the team in the experiment.
                </p>
                <p class="body-1">
                  After that, we helped Jiangnan_China test the cytotoxicity of
                  its biological sunscreen, which proved its biosafety and
                  environmental friendliness.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/b/b5/T--ShanghaiTech_China--par--2313.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.8: Offline meet up with Jiangnan_China
                  </p>
                </v-row>
                <p class="body-1"></p>
                <p class="body-1">
                  On October 9th, the two teams participated in the sustainable
                  Development competition of Synbiopunk Challenge sponsored by
                  Ailurus Biotech and won good prize in the junior college.
                  Jiangnan_China and ShanghaiTech_China participated in the
                  COP15 Youth Biodiversity Science Exploration Activity on
                  October 14. During the activity, the two teams put forward
                  many constructive suggestions on Marine biodiversity
                  protection and feasible plans based on our respective
                  professional directions. In the future, ShanghaiTech_China and
                  Jiangnan_China will continue to devote their efforts to
                  promoting biodiversity conservation and applying their
                  expertise to environmental protection.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/8/8a/T--ShanghaiTech_China--par--fig1_something.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.9: ShanghaiTech_China presentation at Synbiopunk
                    challenge
                  </p>
                </v-row>
                <p class="body-1">
                  We appreciated that the communication with Jiangnan_China is
                  really beneficial and we are glad that we made such a good
                  friend in iGEM competition!
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/f/f7/T--ShanghaiTech_China--par--jiangnan.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.10: Sharing of project in COP15 online conference
                  </p>
                </v-row>
              </v-card-text>
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
    this.step[0] = document.getElementById("ga");
    this.step[1] = document.getElementById("xmu");
    this.step[2] = document.getElementById("great");
    this.step[3] = document.getElementById("csu");
    this.step[4] = document.getElementById("jiangnan");
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
