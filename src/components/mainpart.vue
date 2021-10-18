
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
              @click="$vuetify.goTo('#background', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-2"
            >
              Background
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#overview', options)"
              :complete="position > 2"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-2"
            >
              Overview
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#identify', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Identify the problems
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#adhesive', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Adhesion system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#hydrogel', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Hydrogel system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="6"
              step="6"
              @click="$vuetify.goTo('#regulation', options)"
              :complete="position > 6"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Stress-sensitive regulation system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="7"
              step="7"
              @click="$vuetify.goTo('#drug', options)"
              :complete="position > 7"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Drug release system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="8"
              step="8"
              @click="$vuetify.goTo('#function', options)"
              :complete="position > 8"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Function summary
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="9"
              step="9"
              @click="$vuetify.goTo('#engineering', options)"
              :complete="position > 9"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Engineering and modularization
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
            <v-container style="padding: 20px 3%">
              <v-card-title
                class="text-h5"
                id="background"
                v-intersect="onIntersect"
                >Background</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  We live in a world with many accidents, such as sports, car
                  accidents, falls, and certain medical conditions. Our bones,
                  the hardest part of our body, are often broken or fractured
                  during these accidents. The most severe bone injuries are the
                  comminuted fracture, in which bones are broken into many
                  fragments. Among all femoral fracture cases, 95% of them are
                  comminuted fractures. In 2021, it is estimated that there will
                  be more than 290000 people suffering the comminuted fractures
                  in China.<sup @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >
                  Compared with simple fractures, comminuted fractures take
                  twice the operation time on average due to the time taken in
                  the cumbersome fixation of bone fragments. To make it worse,
                  sometimes, there is no good way to fix some small fragments.
                  Therefore, a biocompatible magic glue with sufficient
                  mechanical strength and controlled degradation feature is
                  urgently wanted to help the fixation of bone fragments.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/e/e3/T--ShanghaiTech_China--des--pic1.jpg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="overview"
                >Overview</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  This year, ShanghaiTech_China developed a new osteogenic glue
                  with a mechanosensitive regulation system. To prove the
                  concept and get a reliable product, we performed a series of
                  experiments to show that the system could be feasible.
                  Eventually, our results have established the concept of a
                  robust osteogenic glue with high mechanical strength,
                  regulated degradation feature, and drug-release capability.
                  See more experiment designs on our
                  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Design"
                    >Design</a
                  >
                  page, and more results on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page.
                </p>
                <v-row justify="center">
                  <v-col cols="1" lg="2" xl="2"></v-col>
                  <v-col cols="2" @click="$vuetify.goTo('#adhesive', options)">
                    <v-hover v-slot="{ hover }">
                      <v-img
                        src="https://2021.igem.org/wiki/images/5/5e/T--ShanghaiTech_China--des--a_pic.svg"
                      >
                        <v-expand-transition>
                          <v-img
                            src="https://2021.igem.org/wiki/images/c/c8/T--ShanghaiTech_China--des--a_tex.jpg"
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out"
                            style="height: 100%; width: 100%"
                          />
                        </v-expand-transition>
                      </v-img>
                    </v-hover>
                  </v-col>
                  <v-col cols="2" @click="$vuetify.goTo('#hydrogel', options)">
                    <v-hover v-slot="{ hover }">
                      <v-img
                        src="https://2021.igem.org/wiki/images/6/6e/T--ShanghaiTech_China--des--h_pic.svg"
                      >
                        <v-expand-transition>
                          <v-img
                            src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--des--h_tex.jpg"
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out"
                            style="height: 100%"
                          />
                        </v-expand-transition>
                      </v-img>
                    </v-hover>
                  </v-col>
                  <v-col
                    cols="2"
                    @click="$vuetify.goTo('#regulation', options)"
                  >
                    <v-hover v-slot="{ hover }">
                      <v-img
                        src="https://2021.igem.org/wiki/images/b/b3/T--ShanghaiTech_China--des--r_pic.svg"
                      >
                        <v-expand-transition>
                          <v-img
                            src="https://2021.igem.org/wiki/images/b/b6/T--ShanghaiTech_China--des--r_tex.jpg"
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out"
                            style="height: 100%; width: 100%"
                          />
                        </v-expand-transition>
                      </v-img>
                    </v-hover>
                  </v-col>
                  <v-col cols="2" @click="$vuetify.goTo('#drug', options)">
                    <v-hover v-slot="{ hover }">
                      <v-img
                        src="https://2021.igem.org/wiki/images/4/47/T--ShanghaiTech_China--des--d_pic.svg"
                      >
                        <v-expand-transition>
                          <v-img
                            src="https://2021.igem.org/wiki/images/2/21/T--ShanghaiTech_China--des--d_tex.jpg"
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out"
                            style="height: 100%; width: 100%"
                          />
                        </v-expand-transition>
                      </v-img>
                    </v-hover>
                  </v-col>
                  <v-col cols="1" lg="2" xl="2"></v-col>
                </v-row>
                <v-row justify="center" class="text-h5"
                  >Four systems of our project</v-row
                >
              </v-card-text>
              <v-card-title class="text-h5" id="identify"
                >Identify the problems</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  To address the comminuted fracture, we need to overcome four
                  obstacles. First, we need to find a substance that can adjoin
                  the bone fragments in the humoral environment. Second, to keep
                  the shape of the injured bone, a relatively high structural
                  strength support is needed. Moreover, the material should
                  degrade as the bone grows. Lastly, the material should be
                  efficient to deliver the drugs or growth factors with the
                  degradation of MIBOM. To reach the above four goals, we
                  designed adhesion, hydrogel, regulation, and drug release four
                  systems to solve the problems correspondingly.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/9/97/T--ShanghaiTech_China--des--rep.jpg"
                  contain
                  max-height="900px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="adhesive"
                >Adhesion system</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  The first part of MIBOM is the adhesion system. We got
                  inspiration from a magical molecule, mussel foot protein 5
                  (mfp5), which enables mussels to stick to rocks or other
                  basements. Among all mussel proteins, Mfp-5 palys a major role
                  in adhesion
                  <sup @click="$vuetify.goTo('#references', options)"
                    >[2][3][4]</sup
                  >. On top of the adhesive properties of mussel proteins,
                  research has identified MFP's as biocompatible, showing
                  minimal immune reactions in the body<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[5]</sup
                  >.
                </p>
                <v-img
                  :aspect-ratio="1034 / 861"
                  src="https://2021.igem.org/wiki/images/e/e6/T--ShanghaiTech_China--des--pic_2.svg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  However, the yield for extracting natural mfp5 from mussels is
                  exceptionally low, where extraction from 10000 mussels only
                  produces 1 milligram of mfp5 proteins. Therefore, we
                  engineered bacteria to express this protein and boosted the
                  yield with several designs based on the principles of
                  synthetic biology.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/f/fc/T--ShanghaiTech_China--des--pic_3.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="hydrogel"
                >Hydrogel system</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  Mfp-5 solution after purification is a type of viscous liquid.
                  It requires a very long time (about 48h) to solidify and
                  adjoin objects until it is completely dry (See our results on

                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >, which prevents its potential medical usage. Also, the
                  original glue strength needs to be increased to guarantee the
                  force requirement in bone fragments adjoining. To overcome
                  these cohesion and strength problems, we designed a hydrogel
                  system to be the second part of MIBOM. It consisted of a
                  dual-crosslinking system, including a photo-crosslinking
                  system and an ionic-crosslinking system, which increases the
                  mechanical strength due to crosslinking and allows a fast and
                  operable solidifying process by UV light illumination. These
                  features make it possible for Mfp to be a "real" glue used
                  during the operation where clinicians could have time to align
                  bone fragments and glue them with UV lights.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/2/27/T--ShanghaiTech_China--des--pic_4.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="regulation"
                >Stress-sensitive regulation system</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  The degradation of the implanted biomaterial is important, and
                  it would be ideal that the timing of glue degradation tunes
                  with the bone recovery process. Although the GelMA and
                  Alginate we used are all bio-degradable materials, the
                  degradation rate is not controllable. Thus, the degradation
                  timing often could not match the bone recovery timing since it
                  varies in patients due to fracture levels, ages, and other
                  unknown factors. Here, we tried to find a relatively "smart"
                  regulation system to control the degradation process according
                  to the stress force generated during bone recovery. We found
                  that with the growth of bone, the glue gel would be squeezed.
                  The force exerted on the gel can be the signal for gel
                  degradation.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/8/84/T--ShanghaiTech_China--des--pic_5.svg"
                  contain
                  max-height="600px"
                  style="margin-bottom: 16px"
                />
                <p class="body-1">
                  However, stress-sensing pathways in the eukaryotic cells could
                  be challenging, and no iGEM teams had successfully applied it
                  before. In the end, we accomplished using the Piezo1-mediated
                  stretch-sensing system to express a target protein that could
                  be easily extended for expressing a gel degradation enzyme.
                  Therefore, we established the stretch-sensing system for
                  controlled protein expression. Our designs are as follows on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Design</a
                  >
                  page.
                </p>
                <v-img
                  :aspect-ratio="1029 / 728"
                  src="https://2021.igem.org/wiki/images/e/e5/T--ShanghaiTech_China--des--pic_6.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="drug"
                >Drug release system</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  Hydrogel is often used as a drug release system. We wondered
                  whether we could encapsulate drugs into the hydrogel to
                  locally release drugs to help bone recovery. Thus, we did a
                  drug release experiment by encapsulating a test protein into
                  the hydrogel, which helped identify key factors affecting the
                  release process. Then, we built a math model to predict the
                  releasing dynamics. Thus, our hydrogel system serves as an
                  integrated platform for bone recovery, which not only provides
                  mechanical support for fractured bones, but also releases
                  therapeutical molecules as needed.
                </p>
                <v-img
                  :aspect-ratio="1029 / 728"
                  src="https://2021.igem.org/wiki/images/d/de/T--ShanghaiTech_China--des--pic_7.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="function"
                >Function summary</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  When MIBOM is injected into the fracture, the mussel protein
                  will play the role of adhesion. GelMA will form the first
                  crosslinking network under condition. When the fixation is
                  determined, alginate will form the second crosslinking network
                  induced by calcium Ions. During the bone growth, the stress
                  will be sensed by cells inside the hydrogel and activate the
                  Piezo-based pathway. Cells will degrade the material and drugs
                  are released. All these functions make MIBOM a new generation
                  of bone repair material.
                </p>
                <v-img
                  :aspect-ratio="1029 / 728"
                  src="https://2021.igem.org/wiki/images/a/ae/T--ShanghaiTech_China--des--pic_8.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="engineering"
                >Engineering and modularization</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  ShanghaiTech_China has always adhered to the concept of
                  sustainability. All engineerings are designed to be
                  sustainable and safe. Our method of extracting mussel protein
                  is more efficient than that from natural mussels with
                  thousands of times lower cost. The hydrogels we made are very
                  safe and cheap. Modularization is also a highlight of the
                  MIBOM. Developed in a blocking method, MIBOM's system can be
                  changed easily according to the application. For example, the
                  hydrogel can be changed or modified to satisfy different
                  applications and you can just change the downstream
                  corresponding enzymes, the system still works. Four systems of
                  MIBOM are independent of others but have connections. We
                  believe this modularization design will expand the application
                  of MIBOM.
                </p>
                <v-img
                  :aspect-ratio="1029 / 728"
                  src="https://2021.igem.org/wiki/images/8/81/T--ShanghaiTech_China--des--pic_9.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5"> More </v-card-title>
              <v-card-text>
                <p class="body-1">
                  During the design of MIBOM, our Integrated Human Practice
                  benefits a lot. We interviewed many clinicians and patients to
                  identify the problem. We communicated with professors to
                  determine the drugs and feasibilities of the project. We also
                  did a lot about entreprenuership. See more details on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page! We have thought a lot about the communication and ethics
                  of synthetic biology. We attached great importance to the
                  impact of synthetic biology on the public and practitioners.
                  We have made many new attempts in the dissemination and
                  education of synthetic biology. See more details on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page!
                </p>
                <p class="body-1"></p>
              </v-card-text>
            </v-container>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none; margin-top: 35px"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-container style="padding: 20px">
              <v-row>
                <v-card-title
                  class="title"
                  style="margin-left: 16px"
                  id="references"
                  >References</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-2">
                  [1]:Wei, Y. P., & Lin, K. C. (2021). Dual-construct fixation
                  is recommended in ipsilateral femoral neck fractures with
                  infra-isthmus shaft fracture: A STROBE compliant study.
                  Medicine, 100(17), e25708.
                </p>
                <p class="body-2">
                  [2]: Danner EW, Kan Y, Hammer MU, Israelachvili JN, Waite JH.
                  Adhesion of mussel foot protein Mefp-5 to mica: an underwater
                  superglue. Biochemistry. 2012 Aug 21;51(33):6511-8. doi:
                  10.1021/bi3002538. Epub 2012 Aug 8. PMID: 22873939; PMCID:
                  PMC3428132.
                </p>
                <p class="body-2">
                  [3]: Kord Forooshani P, Lee BP. Recent approaches in designing
                  bioadhesive materials inspired by mussel adhesive protein. J
                  Polym Sci A Polym Chem. 2017 Jan 1;55(1):9-33. doi:
                  10.1002/pola.28368. Epub 2016 Oct 11. PMID: 27917020; PMCID:
                  PMC5132118.
                </p>
                <p class="body-2">
                  [4]: Lee BP, Messersmith PB, Israelachvili JN, Waite JH.
                  Mussel-Inspired Adhesives and Coatings. Annu Rev Mater Res.
                  2011 Aug 1;41:99-132. doi:
                  10.1146/annurev-matsci-062910-100429. PMID: 22058660; PMCID:
                  PMC3207216.
                </p>
                <p class="body-2">
                  [5]: Huang J, Li H, Wang Q. [Development of double-component
                  rapid curing bioadhesive]. Sheng Wu Yi Xue Gong Cheng Xue Za
                  Zhi. 2018 Dec 25;35(6):921-927. Chinese. doi:
                  10.7507/1001-5515.201805045. PMID: 30583318.
                </p></v-card-text
              >
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
    step: [], //use for store position of title
    position: 1, //use for v-stepper to know where we are
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
    this.step[0] = document.getElementById("background");
    this.step[1] = document.getElementById("overview");
    this.step[2] = document.getElementById("identify");
    this.step[3] = document.getElementById("adhesive");
    this.step[4] = document.getElementById("hydrogel");
    this.step[5] = document.getElementById("regulation");
    this.step[6] = document.getElementById("drug");
    this.step[7] = document.getElementById("function");
    this.step[8] = document.getElementById("engineering");
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
