
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
              @click="$vuetify.goTo('#prologue', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-2"
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
              class="body-2"
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
              class="body-2"
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
              class="body-2"
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
              class="body-2"
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
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-container style="padding: 20px 3%">
              <v-row justify="center">
                <v-card-title
                  class="text-h4 title"
                  id="prologue"
                  v-intersect="onIntersect"
                >
                  Prologue</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  Throughout the experiment, the members of Shanghaitech_China
                  iGEM team put safety the first. During our experiment, experts
                  who provide supervision and help to manage the risks we
                  identified. After receiving strict experimental training, our
                  experimenters can perform various operations with great care
                  and proficiency. We will be able to successfully complete all
                  the experiments in our project on the premise of ensuring our
                  own safety, environmental safety, and microbial safety. All of
                  our experimental plans and contents are under the guidance of
                  PI and they confirmed that our experimental procedure does not
                  have any biosafety concerns in the laboratory.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="lab_safety">
                  Lab Safety</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  This time, our experiments were done in the molecular
                  laboratory and the cell laboratory, whose laboratory levels
                  were level1 and level2 respectively. In order to prevent
                  cross-contamination, we arranged two different teams of
                  students to complete these experiments respectively. In the
                  process of the experiment, we strictly follow the university
                  of Science and Technology laboratory safety inspection
                  management method. In the laboratory, we have done including
                  but not limited to:
                </p>
                <v-list style="padding-left: 16px">
                  <v-list-item>
                    <li class="body-2">
                      The laboratory has a record of safety education and
                      training, and all personnel must pass the laboratory
                      safety examination.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      The instruction of safety information board must be clear,
                      with safety inspection and health duty management system.
                      The ventilation system of the experimental site is in
                      normal operation, the fume hood and bio-safety cabinet can
                      be used normally, and the cabinet door is opened at an
                      appropriate height. Put the goods neatly, do not pile up
                      debris. When entering the laboratory, you should wear
                      personal protective equipment as required. You should not
                      leave the laboratory wearing PPE such as contaminated lab
                      clothes and gloves. There is no food or drink in the
                      laboratory. No accommodations are allowed in the
                      laboratory.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      The laboratory has an emergency evacuation route map, and
                      the fire escape is unobstructed. The laboratory is
                      equipped with suitable fire-fighting equipment, emergency
                      spray, eye wash and first aid kit, which are regularly
                      maintained.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      The laboratory shall be insulated from electricity and
                      shall not use electrical appliances in a dangerous manner.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      The hazardous chemicals comply with the relevant
                      regulations of the state and the school. Laboratory
                      personnel should understand the hazardous characteristics
                      of the chemicals used, safety protection knowledge,
                      storage methods, waste treatment, emergency treatment
                      methods, etc.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Do the corresponding experiments in the corresponding
                      biological laboratory.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Hazardous waste and general waste shall be stored
                      separately, and hazardous waste labels shall be posted.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Lab coats, gloves, glasses and masks must be worn when
                      entering the lab.
                    </li>
                  </v-list-item>
                </v-list>
                <p class="body-1"></p>
                <p class="body-1">Especially in cell lab:</p>
                <v-list style="padding-left: 16px">
                  <v-list-item>
                    <li class="body-2">
                      The cell lab is equipped with two transition rooms and is
                      sterilized with ultraviolet lamps when no one is around.
                      The laboratory is specially disinfected once every half a
                      month, and the ultraviolet lamp is used when there is no
                      person.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      When entering the cell room, one should wear a head cover,
                      a mask, special glasses and gloves, and wear a cell lab
                      coat and sterilized slippers to ensure that the exposed
                      skin is minimized. People with open wounds should not
                      enter the cell room. This not only protects ourselves, but
                      also protects the cell.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      All experiments were performed in a biosafety cabinet.
                    </li>
                  </v-list-item>
                </v-list>
                <p class="body-1">
                  For some other important details, we also did a good job.
                  Before entering the laboratory, we first received the most
                  general laboratory training, through which we were allowed to
                  enter the laboratory. Next, we will familiarize ourselves with
                  each experiment with our instructor before doing the
                  experiment ourselves. In addition, we also need special
                  training before using each instrument.
                </p>
                <p class="body-1">
                  In the molecular laboratory, we use the ultra-clean table, PCR
                  instrument, electrophoresis instrument, double steam machine,
                  centrifuge, metal bath, water bath, bacteria shaking machine
                  and nanodrop. In the cell lab, we use biosafety cabinets, cell
                  incubators and microscopes. Before operating the equipment, we
                  must read the operation guide and accept the teacher's
                  instruction. When operating the equipment, we must strictly
                  follow the instructions, stay next to the equipment all the
                  time during use, and close it in time after use.
                </p>
                <p class="body-1">
                  As mentioned before, our laboratories are regularly
                  disinfected with 75% ethanol, well laid out, and the items are
                  in good order and not crowded.
                </p>
                <p class="body-1">
                  In terms of waste recycling, we will use disinfectant to kill
                  the remaining bacteria after the experiment, and then pour it
                  down the drain to make sure it is sterile. For the waste of
                  molecular laboratory, we put it into the garbage bag of
                  hazardous waste and give it to the professional company to
                  deal with regularly. For cell lab waste, we put it in a closed
                  container and give it to a professional company to deal with.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="project_design">
                  Project Design</v-card-title
                >
              </v-row>
              <v-card-title class="text-h5" id="general_information">
                General microorganism information and general project
                design</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  For all E. coli, which belongs to risk group 1, we get
                  commercial versions from companies, including Top10, Dh5α,
                  Bl21 and stbl3. They are used to expand the number of plasmids
                  and express our proteins of interest.
                </p>
                <p class="body-1">
                  According to our project, in addition to the more secure E.
                  coli, we need two homo sapiens belonging to the risk group 2,
                  which are HUVECs and HEK293T. And we cultivate them in cells
                  lab. We get these cells from some labs of our school, which
                  means we have lots of experience to cultivate them and protect
                  ourselves.
                </p>

                <p class="body-1">
                  Our final constructed HEK-293T cell line is meant to live in
                  the hydrogel and it can sense the mechanical force from the
                  hydrogel to regulate the calcium signal cascade, which will
                  result in the expression of related enzyme to degrade hydro
                  gel.
                </p>
                <p class="body-1">
                  So our experiments are divided into three parts:
                </p>
                <v-list class="list_number">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title class="body-2">
                        1. build the calcium signal pathway.
                      </v-list-item-title>
                      <div style="padding-left: 16px" class="body-2">
                        Overexpress piezo1 to improve the sensitivity for
                        mechanical force: We get the constructed piezo1 plasmid
                        from other lab and infect 293T cell lines by liposome;
                        detect the influx of calcium: to make sure the piezo1
                        can be activated by mechanical force from hydrogel, we
                        use a commercial calcium probe to indicate the cytosol
                        calcium concentration; the expression of downstream
                        proteins of interest: we will construct a plasmid that
                        can be regulated by calcium signal pathway.
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-2">
                        2. test the living state of HEK-293T in hydrogel.
                      </v-list-item-title>
                      <div style="padding-left: 16px" class="body-2">
                        We put cells such as HUVECs line into hydrogel to
                        observe the cell state and how long can it live in the
                        gel; Improve the hydrogel formulation to improve the
                        living state of 293T.
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="body-2">
                        3. connect HEK-293T to hydrogel.
                      </v-list-item-title>
                      <div style="padding-left: 16px" class="body-2">
                        We want to achieve high quality and high intensity in
                        hydrogel, so we want to add mussel mucin(mefp5) to
                        improve the intensity. We will obtain mefp5 by protein
                        purification (use BL21 expression system).
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-title class="text-h5" id="specific_design">
                Specific project design</v-card-title
              >
              <v-card-title class="text-h6">Detection</v-card-title>
              <v-card-text>
                <p class="body-1">
                  There exist some risks. In molecular experiments, we engineer
                  E. coli. If E. coli enters the environment, resistance genes
                  may be lost, affecting other microbes in the environment. In
                  addition, E. coli may proliferate somewhere and upset the
                  biological balance. But it hardly affects people.
                </p>
                <p class="body-1">
                  In cell experiments, if our modified cells enter the body
                  through an open wound, it may have a bad effect on the body.
                  But if it gets into the environment, which is almost
                  impossible, fragile cells can't survive in the environment, so
                  it doesn't have an impact on the environment.
                </p>
                <p class="body-1">
                  Therefore, we need to take effective measures to avoid these
                  problems.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">Prevention</v-card-title>
              <v-card-text>
                <p class="body-1">
                  We will use disinfectant to kill the remaining bacteria after
                  the experiment, and then pour it down the drain to make sure
                  it is sterile. When entering the cell room, one should wear a
                  head cover, a mask, special glasses, and gloves, and wear a
                  cell lab coat and sterilized slippers to ensure that the
                  exposed skin is minimized.
                </p>
              </v-card-text>
              <v-card-title class="text-h5" id="use_of_harmful">
                Use of harmful reagents and procedures</v-card-title
              >
              <v-card-title class="text-h6">Detection</v-card-title>
              <v-card-text>
                <v-list style="padding-left: 16px">
                  <v-list-item>
                    <li class="body-2">
                      Being exposed to ultraviolet for a long time, which may
                      cause danger to both skin and eyes, which may occur when
                      you are taking photo of gel or forget to turn off the
                      ultraviolet light in clean bench
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Being hurt by edge of knife or broken glass, which may
                      happen when you are cutting an agarose gel
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Getting burnt by splashing hot drops, which may occur when
                      you are heating boiled liquid
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Infection may occur in the wound if you touch the cell
                      without any protection.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Getting burnt by utensils of high temperature, which may
                      happen when you are making agarose gel or using alcohol
                      lamp
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Physical discomfort caused by the exposure to or smell of
                      hazardous chemicals
                    </li>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-title class="text-h6">Prevention</v-card-title>
              <v-card-text>
                <p class="body-1">
                  Lab coats, gloves, glasses and masks must be worn when
                  entering the lab.
                </p>
                <p class="body-1">
                  Before entering the laboratory, we first received the most
                  general laboratory training, through which we were allowed to
                  enter the laboratory. Next, we will familiarize ourselves with
                  each experiment with our instructor before doing the
                  experiment ourselves. In addition, we also need special
                  training before using each instrument.
                </p>
                <p class="body-1">
                  Before operating the equipment, we must read the operation
                  guide and accept the teacher's instruction. When operating the
                  equipment, we must strictly follow the instructions, stay next
                  to the equipment all the time during use, and close it in time
                  after use.
                </p>
                <p class="body-1">
                  The above actions greatly avoid the detection outlined above.
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

<style lang="scss">
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>    
