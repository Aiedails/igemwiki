
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
        
<v-row justify="center"> <v-card-title class="text-h4 title">
Requirements for a Bronze Medal
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
1. Competition Deliverables:
</p>
<p class = "body-1">
   ​	Wiki
</p>
<p class = "body-1">
   ​    Presentation Video
</p>
<p class = "body-1">
   ​    Judging Form
</p>
<p class = "body-1">
2.  Attributions   <strong><u>*<a href=" https://2021.igem.org/Team:ShanghaiTech_China/Attributions">Attributions page</a>*</u></strong>
</p>
<p class = "body-1">
3.  Project Description  <a href=" https://2021.igem.org/Team:ShanghaiTech_China/Description"><strong>*<u>Description page</u></strong>*</a>
</p>
<p class = "body-1">
4.  Contribution  <strong>*<u><a href="https://2021.igem.org/Team:ShanghaiTech_China/Contribution">Contribution page</a></u></strong>*
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Additional Requirements for a Silver Medal
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
1. Engineering Success  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Engineering"><strong>*<u>Engineering Success page</u></strong>*</a>
</p>
<p class = "body-1">
2. Collaboration  <strong>*<u><a href=" https://2021.igem.org/Team:ShanghaiTech_China/Collaborations">Collaboration page</a></u></strong>*
</p>
<p class = "body-1">
3.  Human Practices  <a href=" https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"><strong>*<u>Human Practices page</u></strong>*</a>
</p>
<p class = "body-1">
4.  Proposed Implementation  <strong>*<u><a href="https://2021.igem.org/Team:ShanghaiTech_China/Implementation">Implementation page</a></u></strong>*
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Additional Requirements for a Gold Medal
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
1.  Integrated Human Practices  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"><strong>*<u>Human Practices page</u></strong>*</a>
</p>
<p class = "body-1">
2.  Improvement of an Existing Part  <strong>*<u><a href="https://2021.igem.org/Team:ShanghaiTech_China/Improvement">Improvement page</a></u></strong>*
</p>
<p class = "body-1">
3.  Project Modeling  <strong>*<a href="https://2021.igem.org/Team:ShanghaiTech_China/Model"><u>Modeling page</u></a></strong>*
</p>
<p class = "body-1">
4.  Proof of Concept  *<u><strong><a href="https://2021.igem.org/Team:ShanghaiTech_China/Proof_Of_Concept">Proof of Concept page</a></strong></u>*
</p>
<p class = "body-1">
5.  Partnership  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Partnership"><strong>*<u>Partnership page</u></strong>*</a>
</p>
<p class = "body-1">
6.  Education and Communication  <strong>*<u><a href="https://2021.igem.org/Team:ShanghaiTech_China/Communication">Education and Communication page</a></u></strong>*
</p>
<p class = "body-1">
7.  Excellence in Another Area  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Excellence_in_Another_Area"><strong>*<u>Excellence in Another Area page</u></strong>*</a>
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Special Prizes
  </v-card-title>
</v-row>
<v-card-title class="text-h5">
Best Education
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href="https://2021.igem.org/Team:ShanghaiTech_China/Education">Best Education</a>
</p>
<p class = "body-1">
The offline education of ShanghaiTech_China reflects the differences between poor areas and urban areas, between domestic and foreign students, and between students of different ages. For such a wide group of students, we provide personalized class content according to their characteristics, so that students in each category can get the most out of the limited time. We also keep all the textbooks and teaching materials and put them on the Internet so that students can access them at any time with great convenience. In publicity, we saw more and more people talking about synthetic biology and iGEM, so we were more motivated to continue. The part of Education and Communication is a very meaningful thing, as a simple lecture can help a student better understand the world, and may even change his life. and ShanghaiTech_China will continue our volunteer teaching and online publicity to bring more scientific knowledge to students.
</p>
</v-card-text>
<v-card-title class="text-h5">
Best Hardware
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href="https://2021.igem.org/Team:ShanghaiTech_China/Hardware">Best Hardware</a>
</p>
<p class = "body-1">
 The hardware of our project can accurately and automatically bond the bone fractures part. The machine can move freely on the x, y, and z axes manually or automatically. After moving to the place that needs to be bonded, the drug delivery tube can be rotated to an angle under the operation of the computer to administer the drug, and the ultraviolet light can also be rotated by an angle. It can emit UV light for the given time to solidify the drug and achieve a bonding effect. In this hardware, we design from scratch, and finally complete the hardware after a series of 3D modeling, mechanical assembly, and embedded programming. It can be applied in many operations and easily be operated. Each part of it can also be replaced by some other different functional parts.
</p>
</v-card-text>
<v-card-title class="text-h5">
Best Integrated Human Practices
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices">Best Integrated Human Practices</a>
</p>
<p class = "body-1">
In the Integrated Human Practice section, we use the PDCA cycle to execute our R&D process. Through the four steps of Plan, Do, Check and Act to improve the iteration of each cycle, so as to start a new cycle. We have carried out 4 cycles in total, and our project has received more than 1200 attentions from all over the world, and got the support of more than 20 experts or stakeholders from the fields of science and technology, industry, innovation and entrepreneurship, quality management and so on. We also improved MIBOM into a sustainable development research project. We first iterated on the design of the project, then the feasibility and entrepreneurial ability of the project, and finally the practical application of the project. We hope that the concept of MIBOM can be translated into real technological achievements to provide services for human society
</p>
</v-card-text>
<v-card-title class="text-h5">
Best Modeling
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href="https://2021.igem.org/Team:ShanghaiTech_China/Model">Best Modeling</a>
</p>
<p class = "body-1">
We have modeled several procedures to verify and improve the feasibility of the design. The first model is a physical one showing how forces applied from the ends of the gel activate Piezo1 of inward cells. It provides a basis for our design that transmembrane protein Piezo1 inside the hydrogel can be activated by the mechanical force during the healing process of bones. Our second model describes the hydrogel-degrading enzyme expression triggered by Ca2+ signaling. This can exhibit how the change of Ca2+, resulting from the activated Piezo1 channel, influences the expression of our target gene quantitatively. Another model shows the diffusion of the enzyme inside the hydrogel and the subsequent events including the degradation of hydrogel and the release of target medicine which has been encapsulated by the hydrogel. This part supports our idea of the controlled release of medicine. 
</p>
</v-card-text>
<v-card-title class="text-h5">
Best Safety and Security
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href=" https://2021.igem.org/Team:ShanghaiTech_China/Safety">Best Safety and Security</a>
</p>
<p class = "body-1">
 Throughout the experiment, the members of the ShanghaiTech_China iGEM team put safety first. Before starting the experiment, each member must receive training and pass the examination before entering the laboratory, after which our experimenters can perform various operations with great care and proficiency. In our experiment, experts provide supervision and help to manage the risks we identified. We will be able to successfully complete all the experiments in our project on the premise of ensuring our own safety, environmental safety, and microbial safety using the suicide system we designed ourselves as insurance. This year, as we carry out cell experiments, we also have new requirements and challenges for laboratory safety. We follow extremely strict experimental safety regulations and conduct all experiments with the participation of our instructors. All of our experimental contents are under the guidance of PI and they confirmed that our experimental procedures don’t have any biosafety concerns.
</p>
</v-card-text>
<v-card-title class="text-h5">
Best supporting Entrepreneurship
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href="https://2021.igem.org/Team:ShanghaiTech_China/Entrepreneurship">Best supporting Entrepreneurship</a>
</p>
<p class = "body-1">
In the entrepreneurial sector, we reasonably investigated and analyzed the customer groups and market pain points of MIBOM, and analyzed the market share and market size. In order to show that MIBOM has great commercial potential, we illustrate the strength of MIBOM from the perspective of feasibility, scalability, sustainability and market capacity. We are in the process of applying for a patent and have received a prize grant from events such as the Synbiopunk Challenge to start our pre-financing project. In terms of strategic management of the project, we conducted SWOT analysis, risk assessment and strategic planning. Stakeholder analysis proves that our relationship with stakeholders has good development potential. We also consider the long-term impact of MIBOM. We hope that MIBOM is a truly innovative product that will revolutionize traditional fracture treatment and be able to be distributed in the future to benefit more people.
</p>
</v-card-text>
<v-card-title class="text-h5">
Best Sustainable Development Impact
</v-card-title>
<v-card-text>
  <p class = "body-1">
<a href="https://2021.igem.org/Team:ShanghaiTech_China/Sustainable">Best Sustainable Development Impact</a>
</p>
<p class = "body-1">
In Sustainable, we are committed to solving many problems such as Marine life, human health, poverty, education imbalance and so on. We're at Life Below Water, Good Health and Well-Being, Industry, Innovation and Infrastructure, Nopoverty, Quality Education and other five SDG sections have made certain contributions. We also participated in two major competitions for sustainability and biodiversity conservation and achieved good results. We hope that MIBOM can continue to contribute to the sustainable development of human beings and shoulder the social responsibility of products and teams.
</p>
</v-card-text>
<v-card-title class="text-h5">
Best New Basic Part 
</v-card-title>
<v-card-title class="text-h6">
Best New Basic Part
</v-card-title>
<v-card-text>
  <p class = "body-1">
Part Number: <a href="http://parts.igem.org/Part:BBa_K3755007">BBa_K3755007</a>
</p>
</v-card-text>
<v-card-title class="text-h6">
Best Part Collection
</v-card-title>
<v-card-text>
  <p class = "body-1">
Part Number: <a href="http://parts.igem.org/Part:BBa_K3755041">BBa_K3755041</a>
</p>
</v-card-text>
<v-card-title class="text-h6">
Best Part collection
</v-card-title>
<v-card-text>
  <p class = "body-1">
<strong>*<u>Part Numbers:</u></strong>* 
</p>
<p class = "body-1">
<a href="http://parts.igem.org/Part:BBa_K3755006">BBa_K3755006</a>
</p>
<p class = "body-1">
<a href="http://parts.igem.org/Part:BBa_K3755007">BBa_K3755007</a>
</p>
<p class = "body-1">
<a href="http://parts.igem.org/Part:BBa_K3755010">BBa_K3755010</a>
</p>
<p class = "body-1">
<a href="http://parts.igem.org/Part:BBa_K3755041">BBa_K3755041</a>
</p>
<p class = "body-1">
<a href="http://parts.igem.org/Part:BBa_K3755014">BBa_K3755014</a>
</p>
<p class = "body-1">
<a href="http://parts.igem.org/Part:BBa_K3755017">BBa_K3755017</a>
</p>
<p class = "body-1">
<strong>*<u>Description:</u></strong>*
</p>
<p class = "body-1">
 We build a part collection to achieve mechanical stimulus-activated gene expression, which is the key of our regulation system. A mechanosensitive ion channel, Piezo1 or Piezo1.1 is the initiator of this system. It can cause a mechanosensitive intracellular calcium signal. GCaMP6m is an indicator of calcium signal. The NFAT response element is a cis-acting element. The minP is a minimum TATA-box promoter with low basal activity. The reporter of this pathway consists of NFAT-RE, minP, and EGFP. While the intracellular calcium concentration improves, NFAT-RE can be combined with a transcriptional activator, minP will be more active, and more EGFP will be produced leading to a higher brightness under a fluorescence microscope. All of the parts included in this part collection are shown below.  The range of Part numbers: BBa_K3755006 BBa_K3755007 BBa_K3755010 BBa_K3755041 BBa_K3755014 BBa_K3755017
</p>
<p class = "body-1">
</p>
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
    step: [],>
    position: 1, //used for v-stepper
    isIntersecting: false,
    istop: true,
    firstload: true, //used for skeleton loader.
    options: {
      //used for the $vuetify.goto("></a"></a>) func.
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
