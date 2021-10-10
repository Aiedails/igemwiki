
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
<v-card-text>
  <p class = "body-1">
Our team has made breakthroughs in the improvement of new functional proteins, optimization of hydrogel materials, culture and transformation of eukaryotic cells, and design of hardware Settings. We have put a lot of effort into providing new design ideas and broadening the application of iGEM projects, so we hope that our contribution will help iGEM teams in the future.
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
1. Complete method of mussel foot protein type-5 production
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
We successfully constructed the Mfp5 protein expression plasmid, which can help us to produce and purify the protein conveniently. Recombinant Mfp5 sequences and components used in protein expression and purification have been all registered in Registry. Moreover, for the convenience of the future teams who would like to put Mfp5 in their designs, we've built an Mfp5 Part Collection on our [**Parts**](https://2021.igem.org/Team:ShanghaiTech_China/Parts) page. If you want to produce recombinant Mfp5 proteins in different multiples(1-3), just simply put the Composite CDSs into the multiple cloning site of a protein expression plasmid of *E.coli* (for example pET28). If future teams want to make it more fascinating for Mfp5, feel free to take any basic component from this collection. 
</p>
<p class = "body-1">
| CDSs                                                    | Tag                                                     | Composite CDSs                                          |
</p>
<p class = "body-1">
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755002">BBa_K3755002</a> | <a href="http://parts.igem.org/Part:BBa_K3755009">BBa_K3755009</a> | <a href="http://parts.igem.org/Part:BBa_K3755011">BBa_K3755011</a> |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755003">BBa_K3755003</a> | <a href="http://parts.igem.org/Part:BBa_K3755020">BBa_K3755020</a> | <a href="http://parts.igem.org/Part:BBa_K3755012">BBa_K3755012</a> |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755021">BBa_K3755021</a> |                                                         | [BBa_K3755030](http://parts.igem.org/Part:BBa_K3755030) |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755004">BBa_K3755004</a> |                                                         | [BBa_K3755029](http://parts.igem.org/Part:BBa_K3755029) |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755005">BBa_K3755005</a> |                                                         |                                                         |
</p>
<p class = "body-1">
Although many teams(list below) had imported Mfp5 into their project before, we are the first team to design the  expression system of 2 and 3 repeats of Mfp5 and successfully purify and modify the Mfp5 and 2 repeats of Mfp5 protein in a high yield(Mfp5-1: 8mg/1L bacteria solution, Mfp5-2: 11mg/1L bacteria solution). Thanks to the literature of Eugene Kim's team from Washington University in St. Louis, which provides us with a set of references for the production of functional Mfp5 recombinant protein, from the construction of expression vectors to protein expression, purification, and modification<sup>[1]</sup>.
</p>
<p class = "body-1">
|                     Teams who used Mfp5                      |
</p>
<p class = "body-1">
| :----------------------------------------------------------: |
</p>
<p class = "body-1">
| <a href="http://2009.igem.org/Team:Berkeley_Wetlab">Berkeley_Wetlab 2009</a> |
</p>
<p class = "body-1">
|     <a href="http://2011.igem.org/Team:TU-Delft">Tu-Delft 2011</a>      |
</p>
<p class = "body-1">
|         <a href="http://2014.igem.org/Team:Yale">Yale 2014</a>          |
</p>
<p class = "body-1">
|     <a href="http://2015.igem.org/Team:TU_Delft">Tu_Delft 2015</a>      |
</p>
<p class = "body-1">
|         <a href="http://2015.igem.org/Team:UCSF">UCSF 2015</a>          |
</p>
<p class = "body-1">
| <a href="http://2018.igem.org/Team:Stanford-Brown-RISD">Stanford-Brown-RISD 2018</a> |
</p>
<p class = "body-1">
| <a href="https://2019.igem.org/Team:Greatbay_SCIE">Greatbay_SCIE 2019</a> |
</p>
<p class = "body-1">
| <a href="https://2019.igem.org/Team:Shenzhen_SFLS">Shenzhen SFLS 2019</a> |
</p>
<p class = "body-1">
| <a href="https://2020.igem.org/Team:Beijing_4ELEVEN">Being_4ELEVEN 2020</a> |
</p>
<p class = "body-1">
|       <a href="https://2020.igem.org/Team:KCL_UK">KCL_UK 2020</a>       |
</p>
<p class = "body-1">
| <a href="https://2020.igem.org/Team:PuiChing_Macau">PuiChing_Macau 2020</a> |
</p>
<p class = "body-1">
Referring to the literature and through trial and error, our team members finally obtained a complete protocol (seen in [**Protocols**](https://2021.igem.org/Team:ShanghaiTech_China/Protocols) page and Part Registry) suitable for the Mfp5 expression system constructed. After obtaining the modified Mfp5 protein, we tested the adhesion of proteins and got excellent data(seen in [**Results**](https://2021.igem.org/Team:ShanghaiTech_China/Results)), which can provide parameters for future teams' modeling work.
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
2. Construction of the mechanosensory pathway in eukaryotic cells
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
The 2021 Nobel Prize was awarded to the discovery of Piezo1, which is important for both animals and human beings to feel the world. We have a foreboding that many iGEM teams will be curious about the Piezo1 protein and its pathways. We construct a composite part([BBa_K3755016](http://parts.igem.org/Part:BBa_K3755016)) of Piezo1 with a red fluorescent protein mRuby2 after it. This will help future teams to express Piezo1 in eukaryotic cells. We also provided a transformed Piezo1.1([BBa_K3755017](http://parts.igem.org/Part:BBa_K3755017))with a shorter length and better sensitivity. Moreover, we construct a GCaMP6m composite part([BBa_K3755041](http://parts.igem.org/Part:BBa_K3755041)) which can be used to detect the influx of calcium ions. We have developed a mature experiment protocol and done many experiments, future iGEM teams or others can just read details on [Results](https://2021.igem.org/Team:ShanghaiTech_China/Results) and [**Protocols**](https://2021.igem.org/Team:ShanghaiTech_China/Protocols). We have presented very detailed experimental results on these pages.	
</p>
<p class = "body-1">
For the downstream pathways of Piezo1, we also developed a downstream pathway composite part([BBa_K3755014](http://parts.igem.org/Part:BBa_K3755014)) with an EGFP marker, this is a mature part which we have proved its function. Future teams can simply change the target gene to get their expected plasmid regulated by Piezo1 and Piezo1.1.
</p>
<p class = "body-1">
We've built a Part Collection for them to use on our [**Parts**](https://2021.igem.org/Team:ShanghaiTech_China/Parts) page.
</p>
<p class = "body-1">
What's more, we have developed a set of methods(seen in [**Protocols**](https://2021.igem.org/Team:ShanghaiTech_China/Protocols) ) for eukaryotic cells culture and transfection and our methods and experience will allow future iGEM teams to quickly start their eukaryotic cell experiments if they are willing to design in eukaryotic cells.
</p>
<p class = "body-1">
Part collection of stress-sensitive pathway in eukaryotic cells are shown below:
</p>
<p class = "body-1">
| Initiator                                               | Indicator                                               | Reporter                                                |
</p>
<p class = "body-1">
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755006">BBa_K3755006</a> | <a href="http://parts.igem.org/Part:BBa_K3755007">BBa_K3755007</a> | <a href="http://parts.igem.org/Part:BBa_K3755010">BBa_K3755010</a> |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755016">BBa_K3755016</a> | <a href="http://parts.igem.org/Part:BBa_K3755041">BBa_K3755041</a> | <a href="http://parts.igem.org/Part:BBa_K3755014">BBa_K3755014</a> |
</p>
<p class = "body-1">
| <a href="http://parts.igem.org/Part:BBa_K3755017">BBa_K3755017</a> | <a href="http://parts.igem.org/Part:BBa_K3755032">BBa_K3755032</a> |                                                         |
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
3. 3D printing on hardware
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
We designed a mechanism that can release hydrogels at a fixed point and emit UV light to cure the hydrogel(the GelMA gel is photocurable), in which we used 3D printing technology to manufacture many mechanical parts. The mechanism contains an injection tube to inject our hydrogel when it is uncured, and the solvent in the tube can be easily replaced so it can be adjusted for different application scenarios. Therefore, such a hardware design can be applied not only in our project but also in other iGEM projects afterward. For example, our hardware can be used to automate different projects, such as fixed-point drug release and multiple test-tube reactions, and reduce the workload. Anyone who take interest in our hardware device can learn more on the [Hardware](https://2021.igem.org/Team:ShanghaiTech_China/Hardware) page.
</p>
<p class = "body-1">
| Type              | Number | Detail                                                       |
</p>
<p class = "body-1">
| ----------------- | ------ | ------------------------------------------------------------ |
</p>
<p class = "body-1">
| Motor             | 6      | 3 Stepper Motors and 3 Servo Motors                          |
</p>
<p class = "body-1">
| Aluminum rods     | 3      | For X,Y,Z axis, each is 50 cm long                           |
</p>
<p class = "body-1">
| Wheels            | 6      | Move on X,Y,Z axis                                           |
</p>
<p class = "body-1">
| Micro Controllers | 2      | Arduino Uno and Arduino Micro                                |
</p>
<p class = "body-1">
| Base Board        | 1      | 50cm * 50cm                                                  |
</p>
<p class = "body-1">
| Belts             | 3      | 2 are 1m long(x,y axis) and 1 is 40 cm long(z axis), to move syringe |
</p>
<p class = "body-1">
| Syringe           | 1      | Make bone bound                                              |
</p>
<p class = "body-1">
| UV LED            | 1      | Solidify drug                                                |
</p>
<p class = "body-1">
| Linker            | Serval | Combine Servo Motors on board, fix wheel on aluminum rods and other linking tasks |
</p>
<p class = "body-1">
| Wires             | Serval | Connect I/O ports and power                                  |
</p>
<p class = "body-1">
| Support materials | Serval | Nuts, screws                                                 |
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
4. Cell culture in hydrogel and hydrogel synthesis
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
Using hydrogel as a medium for cell culture is a groundbreaking idea, and we have developed a GelMA gel and calcium alginate gel cross-linked system with excellent biocompatibility. The hydrogel can not only be used as the carrier of sustained drug release, but also as the embedding medium of in vivo site-specific cell therapy, which provides a new idea for the treatment of trauma and disease. On the [**Results**](https://2021.igem.org/Team:ShanghaiTech_China/Results) page, we show the standard NMR and rheological diagram of GelMA gel, as well as the survival data of cells in the hydrogel to prove our hydrogel is standard and biocompatible. Meanwhile, the synthesis method for GelMA and the test method for cell survival data are provided on the [**Protocols**](https://2021.igem.org/Team:ShanghaiTech_China/Protocols) page.
</p>
<p class = "body-1">
Moreover, we have done a series of mechanical and biological tests of the hydrogel. We tested the hydrogel's mechanical properties and cells' viability in the hydrogel. We even did the activation of Piezo1 in the hydrogel. We believed these experiments results and protocols will help future iGEM teams to have a better view of the combination of biomaterial and cells.
</p>
</v-card-text>
<v-card-title class="text-h3">
Reference
</v-card-title>
<v-card-text>
  <p class = "body-1">
[1]Kim E, Dai B, Qiao JB, Li W, Fortner JD, Zhang F. Microbially Synthesized Repeats of Mussel Foot Protein Display Enhanced Underwater Adhesion. ACS Appl Mater Interfaces. 2018 Dec 12;10(49):43003-43012. doi: 10.1021/acsami.8b14890. Epub 2018 Nov 27. PMID: 30480422.
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
