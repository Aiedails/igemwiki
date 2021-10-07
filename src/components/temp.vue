
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
        
<v-card-title class="text-h3">
Adhesion system
</v-card-title>
<v-card-text>
 <p class = "body-1">
<strong>Improved Part: <a href="http://parts.igem.org/Part:BBa_K1583002">BBa_K1583002</a></strong>
</p>
<p class = "body-1">
We have done codon optimization on the original Mfp5 sequence and obtain the Basic Part <a href="http://parts.igem.org/Part:BBa_K3755002">BBa_K3755002</a> to increase the translation efficiency of recombinant protein in *E.coli*. To further improve protein production, we also introduced the AKTK expression tag and obtained the Composite Part <a href="http://parts.igem.org/Part:BBa_K3755011">BBa_K3755011</a>(AKTK-his tag-linker-Mfp5 CDS, Mfp 5-1). But unfortunately, the team(<a href="https://2015.igem.org/Team:TU_Delft">TU_Delft 2015) that registered the part <a href="http://parts.igem.org/Part:BBa_K1583002">BBa_K1583002</a> did not successfully purify Mfp5 (no target bands were obtained in SDS-Page) and didn't get the yield data. And due to time reasons, we only characterized the protein yield of our optimized sequence, and there was no time to characterize the original sequence. So the optimization verification for improving protein yield could not be completed according to the requirements in the Medal Criteria Sheet.
</p>
<p class = "body-1">
<v-img src="@/assets/mfp5-1 第一次纯化.png" />
</p>
<p class = "body-1">
> Fig.1a: SDS-PAGE of purificaton of Mfp5-1. We can clearly find the band of Mfp5-1 between 15-20 kDa, which means we have successfully purified the Mfp5-1 protein. After nickel ion affinity chromatograohy, we analyed the OD value of purified protein solution at 280 nm and calculated that the aveerage yield of Mfp5-1 was 24 mg per liter of bacteria solution. But due to the lack of yield data of the original sequence, this yield data could not be used as evidence of our improvement.
</p>
<p class = "body-1">
However, in addition to yield, we have made another improvement. In the literature, we learned that repeating the sequence of Mfp5 can lead to higher adhesion. So we constructed the expression system of double repetition(Mfp5-2,[BBa_K3755012](http://parts.igem.org/Part:BBa_K3755012)) and triple repetition(cfa-n-Mfp5-2,<a href="http://parts.igem.org/Part:BBa_K3755030">BBa_K3755030</a> & cfa-c-Mfp5-1,<a href="http://parts.igem.org/Part:BBa_K3755029">BBa_K3755029</a>), and then obtained the purified and modified Mfp5-1 and Mfp5-2 proteins（Fig.1a&1b）. 
</p>
<p class = "body-1">
<v-img src="@/assets/mfp5-2 第一次纯化.png" />
</p>
<p class = "body-1">
> Fig.1b: SDS-PAGE of purificaton of Mfp5-2. We can clearly find the band of Mfp5-2 between 20-25 kDa, which means we have successfully purified the Mfp5-2 protein. However, an unexpected band between 15-20 kDa show in many samples, including after induction, supernatant, washing and elution. It did not result from nickel medium since the band also occurred in after induction and supernatant samples. So we inferred that mfp5-2 might break in half during expression since it is a fusion protein made up with two repeats of mfp5-1.
</p>
<p class = "body-1">
We independently designed the protein adhesion test experiment(seen in <a href="https://2021.igem.org/Team:ShanghaiTech_China/Experiments">Experiments</a>), and finally obtained surprising experimental results(seen in <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a>).
</p>
<p class = "body-1">
<v-img src="@/assets/粘性测试实验.jpg" />
</p>
<p class = "body-1">
> Fig.2: Adhesion test experiment of Mfp5-1&Mfp5-2. To characterize as much as possible the viscosity of tyrosine enzyme-modified mefp5-1 and mefp5-2, take 20ul of the concentrated protein solution(concentration: mefp5-1=50mg/ml,mefp5-2=40mg/ml) to attach the PCR tube and the tube cover(top left and top right) (The PCR tube cover is trimmed and polished to a round face with a diameter of 7mm)to the center of the petri dish and perform a viscidity test after 48 hours of drying in a 37-degree oven. Lift the petri dish at a certain height through the PCR tube and add the glass beads one by one to the petri dish until the last glass bead is added to cause the petri dish to fall off with the PCR tube(bottom left and bottom right). The viscosity of the added protein can be calculated by weighing the total weight of the Petri dish and glass beads.
</p>
<p class = "body-1">
We calculated the results by the following steps:
</p>
<p class = "body-1">
Mfp5-1：
</p>
<p class = "body-1">
- PCR tube cover area：
</p>
<p class = "body-1">
- The total weight of the petri dish and glass beads, i.e. the maximum pull that Mfp5-1 can withstand in the experiment：
</p>
<p class = "body-1">
  $$
  F=43.24g×9.8kg/N=(43.24/1000)kg×9.8kg/N=0.42N
  $$
</p>
<p class = "body-1">
- The viscosity produced by Mfp5-1：
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
  P=F/S=0.42N/0.38cm^2=1.105N/cm^2=11.05KPa
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
- **The viscosity produced per milligram of protein:** 
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
  P'=P/m=11.05KPa/(50mg/ml×0.02ml)=11.05KPa/m
</p>
<p class = "body-1">
  $$
</p>
</v-card-text>
<v-card-title class="text-h">
Mfp5-2
</v-card-title>
<v-card-text>
  <p class = "body-1">
- PCR tube cover area：
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
  S=π×r^2=π×(0.35cm)^2=0.38cm^2
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
- The total weight of the petri dish and glass beads, i.e. the maximum pull that Mfp5- can withstand in the experiment：
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
  F=39.46g×9.8kg/N=(39.46/1000)kg×9.8kg/N=0.39N
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
- The viscosity produced by Mfp5-2：
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
  P=F/S=0.39N/0.38cm^2=1.026N/cm^2=10.26KPa
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
- **The viscosity produced per milligram of protein:** 
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
  P'=P/m=10.26KPa/(40mg/ml×0.02ml)=12.83KPa/mg
</p>
<p class = "body-1">
  $$
</p>
<p class = "body-1">
- Compared with the viscosity of **Mfp5-1** (11.05KPa/mg), the viscosity of **Mfp5-2** was improved to 12.83KPa/mg, which was 16.11% higher than that of Mfp5-1.
</p>
<p class = "body-1">
Therefore, we demonstrated, through comparative experiments, that the adhesion of the 2 repeats of Mfp5(Mfp5-2) was higher than that of the original Mfp5(Mfp5-1). The result shows that our improvement on the original part(<a href="http://parts.igem.org/Part:BBa_K1583002">BBa_K1583002</a>) is effective from the point of adhesion.
</p>
</v-card-text>
<v-card-title class="text-h3">
Regulation system
</v-card-title>
<v-card-text>
  <p class = "body-1">
**Improved Part:** <a href="http://parts.igem.org/Part:BBa_K3281005">BBa_K3281005</a>
</p>
<p class = "body-1">
We constructed a mechanosensory pathway in eukaryotic cells, which starts with the mechanosensory protein Piezo. The iGEM team <a href="https://2019.igem.org/Team:Harvard">Harvard 2019</a> had registered the **Mouse Piezo1 (mPiezo1)** into the registry but without any characterization data, and the **Assembly Compatibility** meets neither BioBrick <a href="http://parts.igem.org/Help:Standards/Assembly/RFC10">RFC[10]</a> nor <a href="http://parts.igem.org/Help:Standards/Assembly/Type_IIS">Type Type IIS</a>.
</p>
<p class = "body-1">
We obtained plasmid pCDNA3.1 given by Dr. BaiLong Xiao containing **mPiezo1.1** and transfected it into HEK293 cells for characterization. The mPiezo1.1 is a splicing variant of mPiezo1 which lacks the deadbolt construction so gets the greater mechanical sensitivity. Even although our work on Piezo may not meet the standard of 'Improvement of an Existing Part' in the Medal Criteria Sheet, our efforts do contribute to the registry by supplementing the relevant data. 
</p>
<p class = "body-1">
We supplemented a series of data about the characterization of Piezo1 and its pathways.
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Overexpressing the Piezo1.1
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
We firstly overexpressed the Piezo1.1 in HEK293 cells and test its expression by the red fluorescent protein mRuby2. The fluorescent photograph showed relatively good transfection productivity and cells' morphology.
</p>
<p class = "body-1">
<v-img src="@/assets/0823-04-01.png" />
</p>
<p class = "body-1">
> Fig.1a: Transfected HEK293 cells in a 96 well, the red fluorescence is the mRuby2 after the Piezo1.1, the transfection reagent is lipofectamine2000 from Thermo Fisher Scientific. 4X objective
</p>
<p class = "body-1">
<v-img src="@/assets/0823-40-01.png" />
</p>
<p class = "body-1">
> Fig.1b:  Transfected HEK293 cells, showing normal morphology. The transfection reagent is lipofectamine2000 from Thermo Fisher Scientific, 40X objective
</p>
<p class = "body-1">
Fig.1: Overexpressing the Piezo1.1 in HEK293 cells
</p>
<p class = "body-1">
***<u>Fig.1a, Fig.1b放在同一行</u>***
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Activating the Piezo1.1
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
Using our pEGFP-GCaMP plasmid, we can test the activation of Piezo1 by cotransfecting the pEGFP-GCaMP plasmid and Piezo1.1 plasmid. Our data showed good cotransfection productivity and we recorded the activation of Piezo1.1. See more details on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a> page.
</p>
<p class = "body-1">
<v-img src="@/assets/Composite force.png" />
</p>
<p class = "body-1">
> Fig.2: Merge of the green channel and red channel, indicating the cotransfection of GCaMP and Piezo1.1
</p>
<p class = "body-1">
<video id="video" controls="" preload="none"> <source id="mp4" src="Yoda1 8times.mp4" type="video/mp4"> </video>
</p>
<p class = "body-1">
> Video.1: Fluorescence change of cells under the stimulation of 50uM Yoda, exposure time: 90ms, 20X objective
</p>
<p class = "body-1">
<video id="video" controls="" preload="none"> <source id="mp4" src="force 4times.mp4" type="video/mp4"> </video>
</p>
<p class = "body-1">
> Video.2: Faster fluorescence change of cells under the stimulation of shear stress, exposure time: 90ms, 20X objective
</p>
<p class = "body-1">
<video id="video" controls="" preload="none"> <source id="mp4" src="control_1.mp4" type="video/mp4"> </video>
</p>
<p class = "body-1">
> Video.3: Fluorescence change of cells in control group, exposure time: 90ms, 20X objective
</p>
<p class = "body-1">
***<u>以上四个放在同一行</u>***
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Downstream Pathway verification
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
We designed a downstream pathway plasmid(<a href="http://parts.igem.org/Part:BBa_K3755014">BBa_K3755014</a>) pGL4.30-GFP to respond to the activation of Piezo1.1. The composite part (<a href="http://parts.igem.org/Part:BBa_K3755014">BBa_K3755014</a>) includes an NFAT-RE, Pmin and EGFP. Once Piezo1.1 is activated, cells with pGL4.30-GFP will express the EGFP. The data below showed the pathway is valid. See more details on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a> page.
</p>
<p class = "body-1">
<v-img src="@/assets/0928-40-03-green.png (green).png" />
</p>
<p class = "body-1">
> Fig.3a: Green channel of the cells 24h after shaking, identifying the expression of EGFP, 40X objective
</p>
<p class = "body-1">
<v-img src="@/assets/0928-40-03-green.png (red).png" />
</p>
<p class = "body-1">
> Fig.3b: Red channel of the cells to identify the Piezo1.1, 40X objective
</p>
<p class = "body-1">
<v-img src="@/assets/Composite.png" />
</p>
<p class = "body-1">
> Fig.3c: Merge green and red channel to colocalize the cells 
</p>
<p class = "body-1">
**Fig.3: Downstream pathway verification of pGL4.30-GFP**
</p>
<p class = "body-1">
***<u>上面三张图片放在一行</u>***
</p>
<p class = "body-1">
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
