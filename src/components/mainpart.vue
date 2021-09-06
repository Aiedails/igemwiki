
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
              @click="$vuetify.goTo('#overview', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-2"
            >
              Overview
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#target', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Target Users
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#operation', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Operation procedure
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#user', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              User Experence Improvement
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#safety', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Safety
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="6"
              step="6"
              @click="$vuetify.goTo('#develop', options)"
              :complete="position > 6"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Development Plan
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
              <v-row justify="center">
                <v-card-title
                  class="text-h4 title"
                  id="overview"
                  v-intersect="onIntersect"
                  >Overview</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  According to the epidemiological survey conducted by Jordan KM
                  et al., at the beginning of the 21st century, the number of
                  brittle bone fractures worldwide reached 9 million per year.
                  The incidence and cost of brittle bone fractures in the United
                  States are expected to increase by 50% by 2025. Orthopedic
                  diseases are highly correlated with age. Taking osteoporosis
                  as an example, the incidence of this disease is significantly
                  positively correlated with age, and the incidence of this
                  disease is extremely high in women. Today, in the aging
                  society with increasing life expectancy, fractures will
                  continue to increase. At present, in response to traumatic
                  fractures, bone plates made of titanium alloy and other
                  materials are usually used. On the one hand, there is stress
                  shield for bone healing, which leads to injury. On the other
                  hand, patients need a second operation to remove the plate,
                  which will bring multiple costs, occupation of medical
                  resources, and intraoperative injury risks during the second
                  operation. From the point of patients' view, the second
                  operation also increases the time and economic cost of their
                  return visit. Based on the number of known hospitals and
                  surgeries, it is estimated that the average cost of orthopedic
                  trauma implant removal in China is about $923, and the annual
                  cost of secondary trauma surgery will be $616 million within a
                  year. In order to break through the traditional fracture
                  treatment plan and solve the problem of the pain point of the
                  second operation, we designed MIBOM product.
                </p>
                <p class="body-1">
                  MIBOM uses a modular design of "mussel mucin + hydrogel + cell
                  engineering". On the one hand, MIBOM uses the adhesion
                  strength of mussel mucin and hydrogel to fix the fracture,
                  replacing the existing bone plate solution. On the other hand,
                  MIBOM introduces Piezo regulation system to solve the problem
                  of implant removal by regulating material degradation through
                  cells. In terms of experiments, we have completed the
                  purification of mussel mucin, the expression and testing of
                  Piezo pathway, and the testing of cells under uv toxicity.
                </p>
                <p class="body-1">
                  In purposed implement, we have developed corresponding
                  strategies in the aspects of positioning users, improving user
                  experience, ensuring project security, and making the project
                  more perfect in the real world.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="target"
                  >Target Users</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  In the short-term six-year plan, MIBOM focuses on developing
                  bone materials for treatment. In this regard, we target
                  patients with traumatic fractures. Initially, our product will
                  be used as an auxiliary degradable internal fixation for
                  comminuted fracture patients, helping doctors to solve complex
                  surgical problems in comminuted fracture treatment by
                  assisting in the bonding of bone fragments. After the
                  technology is developed, the final target of MIBOM will be
                  patients with conventional traumatic fractures.
                </p>
                <p class="body-1">
                  During the six-year plan, the target users of MIBOM are
                  patients and the main application scenarios are routine
                  traumatic fractures. But the main customers, who will
                  influence the use of MIBOM, are still doctors and hospital
                  decision makers. MIBOM plans to build strong partnerships with
                  hospitals and their orthopaedic departments to strengthen
                  customer relationships.
                </p>
                <p class="body-1">
                  In the long-term planning, MIBOM will develop into beauty,
                  trauma and repair products. In the long-term planning, MIBOM's
                  target users are individual consumers. In the development
                  plan, MIBOM develops two different product lines:
                  popularization and precision, and the corresponding users are
                  also divided into basic users and patients with complicated
                  diseases with economic basis.
                </p>
                <p class="body-1">（用户的图片）</p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="operation"
                  >Operation procedure</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  In order to clarify the operation standard, we developed a use
                  process for MIBOM.
                </p>
                <v-list class="list_number">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-1">
                        1. Remove the MIBOM 30 minutes before use and thaw it
                        until it becomes liquid.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-1">
                        2. After thawing and before use, it is necessary to mix
                        slightly to make the components in the gel evenly
                        distributed and avoid excessive local concentration.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-1">
                        3. The fracture should be reduced, and the fracture end
                        should be properly cleaned to ensure no soft tissue
                        residue.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-1">
                        4. Shake slightly before opening, and fill into the
                        injection device after sterile opening. The injection
                        device injects MIBOM gel along the fracture/fracture
                        suture.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-1">
                        5. After the injection of the colloid, the reduction
                        should be confirmed again. Then, open the UV device and
                        irradiated the colloid part for 2-8 seconds to fix the
                        material. If second crosslinking is needed, add some
                        crosslinking agents to make the double crosslinking.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-text>
                <v-img src="@/assets/temp.png" />
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="user"
                  >User Experience Improvement</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  To make the material easier to operate, we added a hardware
                  system for treatment. The operation of MIBOM is reduction,
                  followed by injection of gel for adjustment. And finally UV
                  light (2-8s) is turned on to help solidify the material and
                  bond the fracture end to high strength. By setting up the gel
                  injection hardware as well as the UV hardware, we integrate
                  the two steps of "injection" and "curing" into one operating
                  hardware. This simplifies the operation, reduces the
                  complexity of product use guidance, and at the same time
                  lowers the operation threshold of traumatic orthopedic
                  surgery, which is conducive to doctors in areas with low
                  qualifications or lack of medical resources.
                </p>
                <p class="body-1">（hardware的图片）</p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="safety"
                  >Safety</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  The materials used in MIBOM, such as GelMA and mussel mucin,
                  have high medical safety. At present, mussel mucin is widely
                  used in cosmetic and wound repair applications, and GelMA has
                  been approved by the FDA. To ensure the overall safety of the
                  material, after the proof of concept, we will apply for a
                  patent and perform in vitro validation. After in vitro
                  validation, we will conduct in vivo validation to ensure that
                  the material has no immune prototype problems and to ensure
                  the safety of the material. At the end of these phases, we
                  will proceed to clinical trials.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="develop"
                  >Development Plan</v-card-title
                >
              </v-row>
              <v-card-title class="text-h5">
                MIBOM Current Business</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  At present, MIBOM will focus on the development, registration,
                  clinical and manufacturing of bone internal fixators, with the
                  intention to develop auxiliary and conventional bone internal
                  fixators. In view of long R&D cycle, for example, the
                  development of the viscosity strength of mussel mucin will
                  take a long time, MIBOM will first develop an auxiliary bone
                  internal fixator for the treatment of highly comminuted
                  fractures. After the technology is stabilized, MIBOM will
                  develop the conventional product of bone internal fixation,
                  test its feasibility, and take it as the main product of MIBOM
                  team for multi-dimensional development, such as R&D, data
                  modeling, marketing, etc. At the same time, in order to expand
                  the product line and timely develop low-cost mass products
                  with big selling points, MIBOM will develop modular products
                  with "mussel mucin" as the core, and finally determine a
                  variety of high compatibility "protein + cell + gel" products.
                  This will help the team to reduce the total cost of
                  development in other areas, faster and more effective
                  development of new wound or beauty products.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                MIBOM Development Strategies</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  MIBOM plans that in the future, the modular R&D products of
                  "mussel mucin + hydrogel + cell regulation system" will be
                  used in nerve repair, wound repair, beauty and other fields.
                  MIBOM will take advantage of the existing resources and
                  technology advantages to rapidly develop innovative materials
                  for wound repair, beauty and other track, and develop basic
                  products with low price and popularity. At the same time,
                  MIBOM will extending the customer base by broadening hospital
                  customers to individual consumers, which will meet their needs
                  in the field of wound, beauty and other fields, providing
                  personalized skin protection products or wound repair products
                  that are adjusted according to the state of the body.
                  Accelerating product development for individual consumers,
                  realizing industrial production and broadening the narrow
                  application scenarios of MIBOM will be conducive to the
                  capital turnover of MIBOM and provide financial guarantee for
                  R&D risks. In addition, by popularizing basic products, MIBOM
                  can establish its brand as soon as possible, so that the
                  recognition of MIBOM in the medical field and the public can
                  be improved.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> MIBOM Ultimate Goal</v-card-title>
              <v-card-text>
                <p class="body-1">
                  MIBOM ultimately hopes to provide solutions to the imbalance
                  of medical resources on the one hand, and provide customized
                  personalized services on the other. After getting effective
                  cash flow by multi-line products, MIBOM hopes to make the
                  products go to the grass-roots level and solve the problem of
                  medical resources. In this section, MIBOM plans to produce
                  basic products in the product model of "mussel mucin +
                  hydrogel", through which the gel degrades independently,
                  removing the cellular regulatory system. Thus, the products
                  can be oriented to patients and doctors at the grass-roots
                  level, greatly reducing the production cost, product pricing
                  and operation difficulty, and enabling MIBOM to alleviate the
                  imbalance of medical resources and other problems from the
                  perspective of materials. MIBOM, on the other hand, will
                  provide personalized therapy, introducing regulatory systems
                  into the patient's own cells, creating personalized treatment
                  and drug delivery, and ultimately enabling precision therapy
                  to solve difficult diseases such as cancer and spinal cord
                  nerve injury.
                </p>
                <p class="body-1">
                  In the former section, MIBOM plans to work with the government
                  in the future to provide effective biodegradable bone implants
                  to less developed areas. In the latter section, MIBOM plans to
                  stabilize and expand the cooperation with hospitals, expand
                  its own treatment team, data team and RESEARCH and development
                  team, expand the team size, and expand and control personnel
                  for personalized product development.
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
    this.step[0] = document.getElementById("overview");
    this.step[1] = document.getElementById("target");
    this.step[2] = document.getElementById("operation");
    this.step[3] = document.getElementById("user");
    this.step[4] = document.getElementById("safety");
    this.step[5] = document.getElementById("develop");
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
