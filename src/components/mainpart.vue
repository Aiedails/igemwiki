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
              @click="$vuetify.goTo('#inter', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Interdisciplinary design
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#chinese', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Chinese traditional design on Homepage
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
                  id="inter"
                  v-intersect="onIntersect"
                >
                  Interdisciplinary design
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We are really proud of our interdisciplinary design. When we
                  identified comminuted fractures as a problem that needed to
                  address, we were not limited to synthetic biology to solve the
                  problems. We first list all the problems we need to solve to
                  make a qualified osteogenic glue, the following table shows
                  the problems and solutions:
                </p>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Problems in comminuted fractures</th>
                        <th>Solutions(Design)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          Finding a substance that can adjoin the fragments
                        </th>
                        <th>Adhesion system(Mussel protein)</th>
                      </tr>
                      <tr>
                        <th>
                          Finding a way provide the material structural strength
                        </th>
                        <th>Hydrogel system</th>
                      </tr>
                      <tr>
                        <th>
                          Constructing a stress-sensitive pathway to degrade the
                          material
                        </th>
                        <th>Stress-sensitive regulation system</th>
                      </tr>
                      <tr>
                        <th>Drug delivery of the bone repair</th>
                        <th>Drug release system</th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-title class="text-h5">
                Combination of synthetic biology and material
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To really develop a product, the synthetic biology is
                  important but we should not be limited to the scope of
                  synthetic biology. For example, after producing the mussel
                  protein in <strong><i>E.coli</i></strong> successfully, we
                  found that the mussel protein solution can not adjoin the bone
                  fragments until it is completely dried, which usually costed
                  48 hours in the oven. Although our modification on protein
                  showed a adhesive promotion of Mfp5-2, but it is still not
                  enough for our goal of bone repair. Our thinking was not
                  limited, we then tried a hydrogel system to increase the
                  material cohesion and the results are amazing. Combination of
                  Synthetic biology and polymer chemistry helped us build a
                  incredible osteogenic glue. We believed that the
                  Interdisciplinary design is the core of MIBOM.
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--res--1-5.jpg"
                      contain
                      max-height="600px"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/d/d6/T--ShanghaiTech_China--res--1-1.jpg"
                      contain
                      max-height="600px"
                    />
                  </v-col>
                  <v-row
                    justify="center"
                    style="
                      margin-top: 10px;
                      margin-bottom: 10px;
                      margin-right: 16px;
                      margin-left: 16px;
                    "
                  >
                    <p class="body-1">
                      <strong>
                        Fig.1: Incredible adhesive and cohesive ability of MIBOM
                      </strong>
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5">
                Pathway construction of Eukaryotic cells
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We are proud of our braveness that we tried to build a
                  stress-sensitive pathway in Eukaryotic cells. Members of our
                  team mostly had never known any knowledge of culturing
                  eukaryotic cells.(This is mainly because members of our team
                  are so young that they are mostly under 20). Most iGEM teams
                  were not willing to do a project about eukaryotic cells
                  because of the difficulty of eukaryotic cell experiments. This
                  year, we successfully overexpressed a stress-sensitve protein,
                  Piezo1.1, in HEK293 cells, and we built a fluorescent system
                  to detect the influx of calcium, which represents the
                  activation of Piezo1.1. We captured an obvious fluorescent
                  change of cells cotransfected with
                  Piezo1.1([BBa_K3755006](http://parts.igem.org/Part:BBa_K3755006))
                  and
                  GCaMP([BBa_K3755007](http://parts.igem.org/Part:BBa_K3755007)),
                  which proved our detection system is promising. We also proved
                  that the downstream pathway of Piezo1.1 we constructed was
                  effective. This year, we did lot of work on eukaryotic cells
                  and built a series of system about detecting and expressing.
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-container>
                      <video controls width="100%" style="object-fit: contain">
                        <source
                          src="https://2021.igem.org/wiki/images/c/ca/T--ShanghaiTech_China--imp--force_4times.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </v-container>
                    <v-row
                      justify="center"
                      style="
                        margin-top: 10px;
                        margin-bottom: 10px;
                        margin-left: 16px;
                        margin-right: 16px;
                      "
                    >
                      <p class="body-2 fig">
                        Video.1: Fast fluorescent change of HEK293 cells
                        overexpressing Piezo1.1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/e/ec/T--ShanghaiTech_China--pro--0930_red.png"
                      contain
                      max-height="600px"
                    />
                    <v-row
                      justify="center"
                      style="
                        margin-top: 10px;
                        margin-bottom: 10px;
                        margin-left: 16px;
                        margin-right: 16px;
                      "
                    >
                      <p class="body-2 fig">
                        Fig.2: Cells overexpressing Piezo1.1, marked by mRuby2
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
                <p class="body-1">
                  See more details on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="chinese">
                  Chinese traditional design on Homepage
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  The inspiration of our homepage style comes from traditional
                  Chinese ink wash painting—an East Asian type of
                  expressionistic brush painting, whose goal is not simply to
                  reproduce the appearance of a subject but to capture its soul.
                  That's to say, there's a lot of blank and symbolization in
                  Chinese ink wash painting in order to express those unseen
                  things.
                </p>
                <p class="body-1">
                  The direct style origin of our homepage is one of the most
                  famous ink wash paintings in ancient Chinese:
                  <i>A Thousand Miles of Rivers and Mountains</i
                  >(《千里江山圖》). The style is called the "blue-and-green
                  landscape" style, where mineral pigments such as turquoise and
                  lapis lazuli are used to create bright blue and green
                  landscapes.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/4/49/T--ShanghaiTech_China--exc--ql.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="
                    margin-top: 10px;
                    margin-bottom: 10px;
                    margin-left: 16px;
                    margin-right: 16px;
                  "
                >
                  <p class="body-2 fig">
                    Picture.1: A selection of
                    <i>A Thousand Miles of Rivers and Mountains</i
                    >(《千里江山圖》)
                  </p>
                </v-row>
                <v-img
                  src="https://2021.igem.org/wiki/images/0/04/T--ShanghaiTech_China--exc--mibom1.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Picture.2: Our Design on Homepage</p>
                </v-row>
                <p class="body-1">
                  We also referred to an ancient Chinese painting book about
                  marine creatures: <i>Hai Cuo Tu</i>(《海錯圖》) for the image
                  of mussels.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/1/1e/T--ShanghaiTech_China--exc--hc.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Picture.3: The picture of mussels in
                    <i>Hai Cuo Tu</i>(《海錯圖》)
                  </p>
                </v-row>
                <v-img
                  src="https://2021.igem.org/wiki/images/4/46/T--ShanghaiTech_China--exc--adhesion.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Picture.4: Our design on Homepage</p>
                </v-row>
                <p class="body-1">
                  We hope our design of homepage can be impressing with the help
                  of traditional Chinese painting elements, making our homepage
                  both internationalized and indigenized, serving as a window
                  for the world to know more about China.
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
    this.step[0] = document.getElementById("inter");
    this.step[1] = document.getElementById("chinese");
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
