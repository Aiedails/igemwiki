
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
              @click="$vuetify.goTo('#adhesive', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Adhesive system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#hydrogel', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Hydrogel system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#regulation', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Regulation system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#drug', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Drug system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="6"
              step="6"
              @click="$vuetify.goTo('#engineering', options)"
              :complete="position > 6"
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
                  We are living in a world with many accidents, among which The
                  hardest part of our body - bones can be broken. Sports, car
                  accidents, falls, and certain medical conditions are all
                  possible causes of bone fracture. The most serious of all bone
                  injuries is the comminuted fracture, in which your bones break
                  into many fragments. Among all femoral fracture cases, 95% of
                  them are comminuted fractures. In 2021, it is estimated that
                  there will be more than 290000 people suffering the comminuted
                  fractures in China.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >
                  Compared with simple fractures, comminuted fractures take
                  twice the operation time on average. The main reason is the
                  cumbersome fixation of bone fragments. Moreover, There is no
                  good to fix some small fragments.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/e/e4/T--ShanghaiTech_China--des--pic_1.svg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  In this year, Team ShanghaiTech_China developed a completely
                  new strategy to the comminuted fracture. A new mussel inspired
                  biologically operational materail, the MIBOM is coming.
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
                            src="https://2021.igem.org/wiki/images/c/cc/T--ShanghaiTech_China--des--a_tex.svg"
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
                            src="https://2021.igem.org/wiki/images/d/d9/T--ShanghaiTech_China--des--h_tex.svg"
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
                            src="https://2021.igem.org/wiki/images/8/89/T--ShanghaiTech_China--des--r_tex.svg"
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
                            src="https://2021.igem.org/wiki/images/2/2d/T--ShanghaiTech_China--des--d_tex.svg"
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
              <v-card-title class="text-h5" id="adhesive"
                >Adhesive system</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  To achieve our goal, we firstly think about how to adjoin bone
                  fragments in the humoral environment(aqueous environment). A
                  magical creature, mussel, inspired us. Mussels can adhere
                  tightly to reefs through mussel proteins in aqueous
                  environment. Among all mussel proteins, mfp-5 plays a major
                  role in adhesion. On top of the adhesive properties of mussel
                  proteins, research has identified MFP's as biocompatible,
                  showing minimal immune reactions in the body.
                </p>
                <v-img
                  :aspect-ratio="1034 / 861"
                  src="https://2021.igem.org/wiki/images/e/e6/T--ShanghaiTech_China--des--pic_2.svg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  For the above two reasons, we choose mussel protein mfp-5 to
                  provide the adhesive properties. Using the method of synthetic
                  biology, we successfully constructed the protein expression
                  system in E. coli and extracted the viscous mussel protein.
                  This method makes it possible for us to get large amount of
                  mussel protein. This method is more effective and sustainable
                  than the traditional method of extracting mussel proteins from
                  mussels, which can get 1mg mussel protein from 10000 mussels.
                  Moreover, we do some modifications to the proteins to make it
                  more viscous. See more details on XXX page.
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
                  Mussel protein itself can not provide enough structural
                  strength to adjoin the fragments. So we designed a functional
                  hydrogel system to provide structural strength. We tried
                  Methacrylate Gelatin(GelMA), sodium alginate, and their double
                  crosslinking system. Doctors only need to irradiate with a
                  portable UV lamp for a few seconds(or our integrated
                  hardware), the monomer polymerizes and the material
                  solidifies. The introduction of hydrogels can provide
                  structural strength. To achieve better strength, we introduced
                  a double crosslinking system on the basis of the original
                  GelMA system. Sodium alginate crosslinked and formed a second
                  layer of crosslinking network to provide better strength. We
                  also plan to try more crosslinking system to mach the
                  application, see more details on XXXX page. Moreover, during
                  surgery, doctors can simply fix and reset the bones through
                  the first layer of optical crosslinking, in which the material
                  has a relatively low structural strength. When no more
                  operation is needed, the material is solidified into high
                  strength gel through second layers of ionic crosslinking to
                  meet the structural strength requirement of bone recovery. The
                  design is based on interviews with clinicians' needs.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/2/27/T--ShanghaiTech_China--des--pic_4.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="regulation"
                >Regulation system</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  After solving the structural strength problem, another problem
                  follows. Although the materials we used are all biocompatible,
                  as the structral strength increases, the degradation of the
                  material is important. More terribly, the recovery time
                  depends on the damage and age, which makes it hard to design
                  the material degradation.Fortunately, hydrogel is a good
                  living environment for cells inside it. To solve the
                  degradation problem, we developed a regulation system in the
                  material. We take the stress in fracture repair as a signal.
                  During the bone growth, the hydrogel is squeezed.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/8/84/T--ShanghaiTech_China--des--pic_5.svg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  We created a mechanics sensitive cell. They can sense the
                  mechanical force conducted from the hydrogel to cells and
                  secrete enzymes(such as alginate enzyme) to accelerate
                  material degradation. When the surroundings are degraded, the
                  cells lose their scaffold and can not sense the force. In this
                  way, we do not need to care about material degradation, we
                  establish a mechanics-degradation system. During the recovery,
                  the degradation speed depends on the recovery ability. The
                  cell mechanics-sensitive pathway is based on a membrane
                  protein called Piezo1. To get it more sensitive, we also do
                  some modifications to Piezo1 and get a better one, Piezo1.1.
                  See more details on XXX page
                </p>
                <v-img
                  :aspect-ratio="1029 / 728"
                  src="https://2021.igem.org/wiki/images/e/e5/T--ShanghaiTech_China--des--pic_6.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h5" id="drug">Drug system</v-card-title>
              <v-card-text>
                <p class="body-1">
                  Although existing orthopaedic surgical instruments have no
                  medical effect (a steel plate can not accelerate the recovery,
                  for it is just a mechanical supporting), our MIBOM provide
                  chances to bring some medical effects. Hydrogel system make it
                  possible for us to load mutiple drugs in MIBOM. Before the
                  polymerization, doctors can just mix the drugs with the
                  material, and drugs are kept after polymerization. We targetd
                  tens of drugs that can promote the recovery such as vitamin D.
                  Although these drugs are identified as effective in some
                  articles, We have no conditions for animal experiments to test
                  these drugs function. But we establish a model to simulate the
                  process, which can help us to determine how the drug molecules
                  are released. We also cooperate with other teams such as
                  CSU_China to test durg release parameters.We hope this can
                  help doctors to determine the amount of drugs loaded in the
                  hydrogel.
                </p>
                <v-img
                  :aspect-ratio="1029 / 728"
                  src="https://2021.igem.org/wiki/images/d/de/T--ShanghaiTech_China--des--pic_7.svg"
                  contain
                  max-height="600px"
                />
              </v-card-text>
              <v-card-title class="text-h6">Fuctions summary</v-card-title>
              <v-card-text>
                <p class="body-1">
                  When MIBOM is injected into the fracture, the mussel protein
                  will play the role of adhesion. GelMA will form the first
                  crosslinking network under UV condition. When the fixation is
                  determined, alginate will form the second crosslinking network
                  induced by calcium ion. During the bone growth, the stress
                  will be sensed by cells inside the hydrogel and activate the
                  Piezo based pathway. Cells will degrade the material and drugs
                  are released. All these functions make MIBOM be a new
                  generation of bone repair material.
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
                  sustainability. All engineerings are design to be sustainable
                  and safe. Our method of extracting mussel protein is more
                  efficient than that from natural mussels with thounds of times
                  lower cost. The hydrogels we made are very safe and cheap.
                  Modularization is also a highlight of the MIBOM. Developed in
                  a blocking method, MIBOM's system can be changed easily
                  according to the application. For example, the hydrogel can be
                  changed or modified to satisfy different applications and you
                  can just change the downstream corresponding enzymes, the
                  system still works. Four systems of MIBOM are independent of
                  others but have connections. We believe this modeularization
                  design will expand the application of MIBOM.
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
                  do a lot about the entreprenuership. See more details on
                  XXXpage! We have thought a lot about the communication and
                  ethics of synthetic biology. We attached great importance to
                  the impact of synthetic biology on the public and
                  practitioners. We have made many new attempts in the
                  dissemination and education of synthetic biology. See more
                  details on XXXpage!
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
    this.step[1] = document.getElementById("adhesive");
    this.step[2] = document.getElementById("hydrogel");
    this.step[3] = document.getElementById("regulation");
    this.step[4] = document.getElementById("drug");
    this.step[5] = document.getElementById("engineering");
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
