
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
Sustainable
</v-card-title>
<v-card-title class="text-h5">
1.Summary
</v-card-title>
<v-card-text>
  <p class = "body-1">
In Sustainable, we are committed to solving many problems such as Marine life, human health, poverty, education imbalance and so on. We get a lot of information from the XMU-China.(See our partnership on [Partnership](https://2021.igem.org/Team:ShanghaiTech_China/Partnership) page) We're at Life Below Water, Good Health and Well-Being, Industry, Innovation and Infrastructure, Nopoverty, Quality Education and other five SDG sections have made certain contributions. We also participated in two major competitions for sustainability and biodiversity conservation and achieved good results. We hope that MIBOM can continue to contribute to the sustainable development of human beings and shoulder the social responsibility of products and teams.  
</p>
</v-card-text>
<v-card-title class="text-h5">
2. Contributions according to SDG
</v-card-title>
<v-card-text>
<v-img src="https://2021.igem.org/wiki/images/d/d2/T--ShanghaiTech_China--sus--1.jpg" contain max-height="600px" />
<p class = "body-1">
Figure 1. Sustainable Development Goals(Data sources: Gestamp[^1])
</p>
</v-card-text>
<v-card-title class="text-h6">
SDG 14: Life below water
</v-card-title>
<v-card-text>
  <p class = "body-1">
We have made great efforts for the extraction of mussel and its protein, which is an underwater organism. By optimizing the current industrial extraction technology, we can effectively save the waste of mussel resources.  
</p>
<p class = "body-1">
We have modified existing mussel mucins through synthetic biology. We hope that expression of mussel mucin in EScherichia coli can improve the viscosity of mussel mucin and reduce the cost of artificial purchase of mussel mucin.  
</p>
<p class = "body-1">
Mussel mucin was originally produced and extracted from mussel byssus, which was prepared by crushing, extraction, chromatographic purification and concentration. Mussel mucin is a potential resource in biomedical field because of its high viscosity, flexibility, water resistance and biodegradability. Because of its special structure, mussel mucin has strong waterproof properties and promoting healing ability, which makes it can be developed as a medical adhesive, medical coating or wound repair product. However, its biggest feature of stickiness still has potential development in other fields. So mussel mucin has become a popular biomaterial.  
</p>
<p class = "body-1">
At present, the mainstream method of industrial extraction of mussel mucin still adopts mass purification of mussel foot gland, but due to the low secretion of mussel mucin, the amount of mussel mucin can be extracted from 10,000 mussels is about 1mg. As a result, the extraction process and cost significantly increased the price of mussel mucin-related products. For example, Biopolymers, a Swedish company, sells an adhesive called "Cell-tak" for $115 per mg in the United States. A 10mg dose can cost around 7,500 yuan. On the other hand, the product obtained from mass purification of mussel foot gland could not obtain higher strength viscosity due to the limitation of extraction process. This limits the scope of application of mussel mucin. Currently, adhesive products are mostly used for adhesion between non-adherent cells and petri dishes in cell culture. Therefore, the current mussel mucin extraction process has high consumption, low yield and low adhesion, which will lead to very large mussel loss and waste.  
</p>
<p class = "body-1">
In order to reduce the waste of mussel raw material and reduce the cost of mussel mucin, we choose to independently develop mussel mucin production.  
</p>
<p class = "body-1">
We designed a microbial expression and purification system for mussel mucin meFP5 to reduce the extraction cost and prepare mussel mucin of higher quality. The experimental scheme was designed to construct two and three repeated MEFP5 genes while expressing mussel mucin. We have now tested the properties of mussel mucin after this modification. In the future, we will try to use in vitro tyrosinase expression and purification system.  
</p>
<p class = "body-1">
We plan to test the feasibility of mussel mucin through EScherichia coli in the stage of increased viscosity, and in the production stage, we will use yeast system to express mussel mucin, which simplifies the protein extraction process, reduces the cost and increases the yield.  
</p>
<p class = "body-1">
In short, by increasing the strength and yield of mussel mucin from the perspective of synthetic biology, instead of traditional mass extraction methods, this solution will greatly reduce the waste of natural mussels and reduce the cost of extraction. It is also more in line with sustainable development and can protect limited Marine resources. Meanwhile, artificial mussel mucins developed through synthetic biology will be stickier and more stable than natural mussel mucins. This is more conducive to expanding the application scenarios of mussel mucin and developing the potential of mussel mucin as a real medical material. 
</p>
</v-card-text>
<v-card-title class="text-h6">
SDG 3: Good Health and Well-Being
</v-card-title>
<v-card-text>
  <p class = "body-1">
MIBOM is dedicated to solving human health problems. At present, MIBOM is solving the dilemma caused by fracture, starting from comminuted fracture, to solve the dilemma of difficult operation, long time and poor repair. In the future, MIBOM also hopes to replace plate consumables as a new bone implant to overturn the traditional fracture treatment method and become a new biodegradable implant.  
</p>
<p class = "body-1">
MIBOM designed a more flexible glue for internal fixation, focusing on the difficulty of comminuted fractures and the poor healing effect of comminuted fractures.  MIBOM has also designed drug systems to promote bone regeneration.  In addition, MIBOM also incorporates a control system to facilitate the degradation of implants, increasing the ease of implant removal.  In all these aspects, MIBOM has the outstanding ability to become a new fracture treatment method, opening a new way for the future fracture treatment.
</p>
<p class = "body-1">
At the same time, we also consulted the attending doctors from the Rehabilitation Department of Shanghai Ninth People's Hospital and other practitioners. They point out that we could add manuals, similar to the discharge summary, to help doctors better understand patients during the handover. The feedback from doctors is that they pay more attention to the patient's physical condition, so as to set the operation time and recovery plan, so the patient's physical condition is crucial. To this end, we also designed a 'patient manual' to record the daily situation of patients. At the same time, the product description section should be set up in the manual to give doctors a clear description of rehabilitation indicators.  
</p>
</v-card-text>
<v-card-title class="text-h6">
SDG 9: Industry, innovation and infrastructure
</v-card-title>
<v-card-text>
  <p class = "body-1">
Due to MIBOM's modular design and 4 systems (Adhensive, Hydrogel, Regulation, and drug delivery), MIBOM can be adapted to various requirements such as drug redesign when later modified. At the same time, the modular system like MIBOM is also conducive to the development of products in other areas, such as beauty, trauma repair and so on. 
</p>
<p class = "body-1">
For the needs of different areas, MIBOM only needs to adjust each module to design new products. This can significantly reduce the cost and time of the concept design and validation phase. Due to the flexibility of design, MIBOM can also be adjusted according to the needs of users, so that the product can better adapt to the needs of users. The cost of overall adjustment of MIBOM is far less than that of a product with only one idea from beginning to end. 
</p>
<p class = "body-1">
From a developmental perspective, modular MIBOM will facilitate the development of materials adapted to different fields and environments. By simply replacing one module, cellular regulatory systems and materials that adapt to different environments and feel different conditions can be obtained. Thus, MIBOM can make more creative creations in the transformation of functional materials.
</p>
<p class = "body-1">
We use social media platforms to educate people of all ages about medicine and biology. We use Bilibili's platform to carry out popular science on medical treatment, fracture and other contents. The main users of this platform are young people. We also use an official account to carry out popular science and reprint articles related to medical knowledge. Users of this platform can be people of all ages. So far, our popular science account and Bilibili popular science video have received more than 3,000 followers. We believe that the rich popular science courses will enable our audience to understand the medical knowledge and basic.  
</p>
</v-card-text>
<v-card-title class="text-h6">
SDG 1: No poverty
</v-card-title>
<v-card-text>
  <p class = "body-1">
MIBOM plans to adopt two product routes in the future: 1. Primary products : 'mussel + gel' treatment products; 2. High quality products : 'mussel + gel + cell regulation' treatment products.
</p>
<p class = "body-1">
Grassroots products will be promoted to the general public, especially hospitals in small cities. Low costs and low prices will help grassroots. In areas of extreme poverty or unrest, MIBOM's base products are useful for emergency fracture repair. As mass production of mussel mucin can be achieved by yeast modification to meet industrial production requirements, the cost of mussel mucin will be extremely low. This helps MIBOM provide low-cost products for groups that do not want to pay too much for treatment. On the other hand, as adhesions and other functions make surgery more convenient and flexible, the threshold of surgery will be relatively lower, which is more conducive to the operation of doctors in areas with insufficient medical resources. The low price and ease of operation also make MIBOM useful in disaster first aid to provide scalable, cost-effective treatment.
</p>
<p class = "body-1">
MIBOM team always pursues the value concept of "Least waste, Best Technology", and wants to reduce waste through excellent technical transformation and provide low-cost and effective labor solutions. In the future development planning, we plan to cooperate with the government after the official launch of MIBOM to promote the product to grassroots hospitals, reduce the threshold of surgical operation, and help more areas lacking medical resources.
</p>
</v-card-text>
<v-card-title class="text-h6">
SDG 4：Quality Education
</v-card-title>
<v-card-text>
  <p class = "body-1">
In July 2021, we went to a village that had just been lifted out of poverty for volunteer teaching. Our team went to Jingxian County in Anhui province and Yunlong County in Yunnan province for volunteer teaching. Basic education resources in primary and junior high schools there are weak, and the high school enrollment rate is only about 20%. We hope that volunteer teaching can help them see the outside world and develop their love for biology. We also hope that such volunteer teaching activities can give them a systematic understanding of biology for the first time and give them confidence to explore the natural ecology. Finally, we also hope that such persistence in supporting education can make education resources no longer a big difference between urban and rural areas.  
</p>
<p class = "body-1">
<v-img src="https://2021.igem.org/wiki/images/8/8a/T--ShanghaiTech_China--sus--2.jpg" contain max-height="600px" />
</p>
</v-card-text>
<v-card-title class="text-h5">
3. Actions for sustainable development
</v-card-title>
<v-card-title class="text-h6">
Synbiopunk Challenge
</v-card-title>
<v-card-text>
  <p class = "body-1">
<font sizw=2>Hosted by Ailurus Biotech, Synbiopunk 2021 launched the Synbiopunk Challenge and we participated in the offline roadshow of Synbiopunk Challenge on October 09, 2019. Synbiopunk Challenge aims to integrate resources to deliver sustainable synthetic biology solutions to the sustainable Development Goals.  
</p>
<p class = "body-1">
<v-img src="https://2021.igem.org/wiki/images/7/72/T--ShanghaiTech_China--sus--4.jpg" contain max-height="600px" />
</p>
<p class = "body-1">
We featured SDG14: Life Below Water from the Sustainable Development Goals, highlighting our transformation of mussel mucin. At the same time, with SDG3: Good Health and Well-being as the main goal of MIBOM, we emphasize MIBOM's long-standing vision of contributing to the treatment of human Health. We hope MIBOM can truly optimize the existing mussel mucin extraction resources and become a truly clean and sustainable scientific innovation product to change the traditional way of fracture treatment and usher in a new era of fracture treatment.  
</p>
<p class = "body-1">
We have placed third in the Synbiopunk Challenge and won 10,000 RMB as our start-up fund. We hope MIBOM can become a real development product to help meet people's health needs.  
</p>
</v-card-text>
<v-card-title class="text-h6">
COP15 
</v-card-title>
<v-card-title class="text-h">
“ Youth Biodiversity Science Exploration Series：Synthetic Biology special session ”
</v-card-title>
<v-card-text>
  <p class = "body-1">
COP15 Youth Biodiversity Science Exploration activity is co-sponsored by the Publicity and Education Center of the Ministry of Ecology and Environment and Polar Future. It is a scientific exploration activity to learn and practice biodiversity conservation and rethink the relationship between man and nature.  
</p>
<p class = "body-1">
Synthetic biology is a budding revolution in the life sciences, and this new field is about to embrace its youth. As one of the important issues concerned by the Convention on Biological Diversity (CBD), synthetic biology has been attracting much attention for biodiversity conservation and sustainable use.  
</p>
<p class = "body-1">
COP15 has a special session on synthetic biology, bringing together young teams of biodiversity explorers to share their practices in biodiversity conservation. We are fortunate to participate in this activity to share.  
</p>
<p class = "body-1">
<v-img src="https://2021.igem.org/wiki/images/0/03/T--ShanghaiTech_China--par--cop15.png" contain max-height="600px" />
</p>
<p class = "body-1">
We shared MIBOM's efforts in biodiversity conservation, especially the extraction, purification and modification of mussel mucin. We optimized the existing extraction process and applied the biological preparation method to extract mussel. This is a good way to reduce mussel waste. At the meeting, our sharing was recognized by many experts, and after that, we kept in close contact with several of them to help us develop further.  
</p>
</v-card-text>
<v-card-title class="text-h6">
Science popularization
</v-card-title>
<v-card-text>
  <p class = "body-1">
 We uploaded our PV video on Bilibili, a video platform in China, which has a lot of young fans. It can deliver our projects to strangers thousands of miles away. With Chinese subtitles and cute animated illustrations, it is easy for children to understand.
</p>
<p class = "body-1">
<v-img src="https://2021.igem.org/wiki/images/d/d4/T--ShanghaiTech_China--sus--6.png" contain max-height="600px" />
</p>
<p class = "body-1">
To make our materials accessible to a wider audience, we publish all the contents of the campus lectures to the public account, which not only enables students to understand and review the contents more systematically but also enables more students who are not in class to accept popular science in their spare time. At the same time, considering that many children in poor areas are not able to use the electronic products around them, we also leave the courseware and our contact information when teaching offline, so as to teach them how to use the existing resources to learn better.
</p>
<p class = "body-1">
In addition, we have also reached cooperation with GA_State_SW_Jiaotong. Every two weeks, we will forward each other's popular science content, so that more and better content can be spread to a wider range of places.
</p>
</v-card-text>
<v-card-title class="text-h6">
Support education
</v-card-title>
<v-card-title class="text-h">
· In Yunlong County, Yunnan Province
</v-card-title>
<v-card-text>
  <p class = "body-1">
This year, we went to Yunlong county in Yunnan. As a village which is 4 hours mountain road by car from the city, it's hard for a villager to communicate with the outside world, leading to mold and poor educational resources. Even though their classrooms are equipped with advanced facilities, the elderly teachers rarely use them, so we teach them through electronic presentations and the use of these devices. When we meet the principal over there, he said passionately, 'When I saw students of ShanghaiTech University, I saw the hope of our education.'. Our visit represents a big chance for students there.
</p>
<p class = "body-1">
   Thinking about how little experience they have in learning biology, We chose to introduce basic concepts in biology such as internal environment, cells, DNA, and so on. We brought the children along to draw cells, organelles, DNA, and so on, which was a great way to focus the children's attention. It turned out that they can easily accept the knowledge through the analogy of cells in the internal environment and the swimmer. So we tried to explain the central dogma of inheritance. Although it was relatively difficult for them, they listened with great interest and did well in the Q&A section in the end. When we show the PV video of our team and GA_State_SW_Jiaotong, it seemed that we opened up new worlds for them. A few brief introductory lessons kindled their interest in biology.
</p>
<p class = "body-1">
After class, we offered online courses and popular science videos for them so that even when we leave, they can continue to study biology and even use these learning methods to learn new content. Also, we left their contact information and public account, to answer their future study and life in the new questions.
</p>
<p class = "body-1">
What moved us a lot was that some students quickly accepted knowledge and excitedly told us that they want to become scientists in the field of biology, which was undoubtedly the biggest affirmation for us. Some of the students were able to slowly say their answers together, even though they were ashamed to stand up to answer the questions. We were overjoyed by the progress of the students.
</p>
<p class = "body-1">
<v-img src="https://2021.igem.org/wiki/images/7/78/T--ShanghaiTech_China--sus--eduacation-yunlong.png" contain max-height="600px" />
</p>
</v-card-text>
<v-card-title class="text-h">
· In Jingxian County, Anhui Province
</v-card-title>
<v-card-text>
  <p class = "body-1">
In Anhui, we expanded the students' knowledge of botany. We try to get out of the textbook and show them what common plants are in their daily lives and how to make herbarium specimens. Let them use living things. We also brought a variety of leaves and flowers so that students could listen to the class and see the plants up close or play with them. The students are having fun and learning.
</p>
<p class = "body-1">
<v-img src="https://2021.igem.org/wiki/images/4/43/T--ShanghaiTech_China--sus--eduacation-jingxian.jpg" contain max-height="600px" />
</p>
<p class = "body-1">
[1]:Sustainable development goals, Available from <a href="https://www.gestamp.com/cn/%E5%8F%AF%E6%8C%81%E7%BB%AD%E6%80%A7/%E5%8F%AF%E6%8C%81%E7%BB%AD%E5%8F%91%E5%B1%95%E7%9B%AE%E6%A0%87-(SDG)">here</a>
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
