
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
              class="body-1"
            >
              Overview
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#part', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Part collection
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
                  v-intersect="onIntersect"
                  id="overview"
                >
                  Overview
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  Since MIBOM comes from a multi-system design, the parts we've
                  built to support the project are quite diverse and
                  fascinating. Our parts are mainly concentrated in the adhesive
                  system and the regulatory system. We carefully submitted the
                  components we developed to perform one specific function into
                  <u><strong>Basic Part</strong></u> in
                  <strong><u>Registry</u></strong
                  >, then each basic part is meaningfully combined with others
                  to compose functional <strong><u>Composite Parts</u></strong
                  >, and finally submitted in <strong><u>Registry</u></strong
                  >.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Basic Parts </v-card-title>
              <v-card-test>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Short Description</th>
                        <th>Long Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755006"
                            >BBa_K3755006</a
                          >
                        </th>
                        <th>mouse Piezo1.1</th>
                        <th>
                          A splicing variant of mPiezo1 which is more sensitive
                          to mechanical stimulation.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755007"
                            >BBa_K3755007</a
                          >
                        </th>
                        <th>GCaMP6m</th>
                        <th>A genetically encoded calcium indicator</th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755010"
                            >BBa_K3755010</a
                          >
                        </th>
                        <th>NFAT response element</th>
                        <th>
                          NFAT can bind to this part to activate downstream gene
                          transicription.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755013"
                            >BBa K3755013</a
                          >
                        </th>
                        <th>Alginate lyase with human IL-2 signal sequence</th>
                        <th>
                          Alginate lyase can degrade alginate. With human IL-2
                          signal sequence, secretion of the alginate lyase in
                          mammalian cells can be achieved.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755018"
                            >BBa_K3755018</a
                          >
                        </th>
                        <th>IL2-algH-EGFP</th>
                        <th>
                          This is a fusion protein that consist of an alginate
                          lyase with human IL-2 signal sequence and EGFP.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755015"
                            >BBa_K3755015</a
                          >
                        </th>
                        <th>mRuby2 red fluorescent protein</th>
                        <th>
                          monomeric red fluorescent protein derived from mRuby,
                          with improved photophysical properties
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755002"
                            >BBa_K3755002</a
                          >
                        </th>
                        <th>Mfp5 CDS</th>
                        <th>
                          Recombinant mussel foot protein coding sequence,
                          isolated from Mytilus galloprovincialis, expressed in
                          <i>E.coli</i> BL21.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755003"
                            >BBa_K3755003</a
                          >
                        </th>
                        <th>2*Mfp5 CDS</th>
                        <th>
                          Two consecutive recombinant mussel foot protein type-5
                          coding sequences, isolated from Mytilus
                          galloprovincialis, expressed in <i>E.coli</i> BL21.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755021"
                            >BBa_K3755021</a
                          >
                        </th>
                        <th>linker for Mfp5 CDS&His tag</th>
                        <th>
                          The linker connecting His tag to Mfps CDS, containing
                          BioBrick cut sites
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755004"
                            >BBa_K3755004</a
                          >
                        </th>
                        <th>cfa-N</th>
                        <th>
                          Codon optimized N-terminal spontaneous
                          splicing−ligation peptide sequnece for 3*Mfp5 CDS
                          assembly, connected downstream of the 2*Mfp5 CDS
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755005"
                            >BBa_K3755005</a
                          >
                        </th>
                        <th>cfa-C</th>
                        <th>
                          Codon optimized C-terminal spontaneous
                          splicing−ligation peptide sequnece for 3*Mfp5 CDS
                          assembly, connected downstream of the Mfp5 CDS
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755009"
                            >BBa_K3755009</a
                          >
                        </th>
                        <th>AKTK expression tag</th>
                        <th>
                          To increase translation initiation rates for protein
                          expression
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755022"
                            >BBa_K3755022</a
                          >
                        </th>
                        <th>hSyn promoter</th>
                        <th>
                          Human synapsin I promoter，confers neuron-specific
                          expression
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755025"
                            >BBa_K3755025</a
                          >
                        </th>
                        <th>loxP site-1</th>
                        <th>
                          A sequence containing a Lox2272 site and a LoxP site,
                          which can be recognized by Cyclization Recombinatation
                          Enzyme(CRE), upstream of GCaMP6m in
                          pAAV.Syn.Flex.GCaMP6m.WPRE.SV40
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755026"
                            >BBa_K3755026</a
                          >
                        </th>
                        <th>loxP site-2</th>
                        <th>
                          A sequence containing a Lox2272 site and a LoxP site,
                          which can be recognized by Cyclization Recombinatation
                          Enzyme(CRE), downstream of GCaMP6m in
                          pAAV.Syn.Flex.GCaMP6m.WPRE.SV40
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755027"
                            >BBa_K3755027</a
                          >
                        </th>
                        <th>WPRE</th>
                        <th>
                          Woodchuck hepatitis virus posttranscriptional
                          regulatory element
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755020"
                            >BBa_K3755020</a
                          >
                        </th>
                        <th>6*His tag</th>
                        <th>
                          Attached to the upstream or downstream of the protein,
                          used to bind the protein to the medium in nickel ion
                          affinity chromatography during the protein
                          purification
                        </th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-test>
              <v-card-title class="text-h5"> Composite Parts </v-card-title>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Short Description</th>
                        <th>Long Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755014"
                            >BBa_K3755014</a
                          >
                        </th>
                        <th>NFAT-RE+minP+EGFP</th>
                        <th>
                          To prove that the calcium signal activates downstream
                          gene expression.
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755016"
                            >BBa_K3755016</a
                          >
                        </th>
                        <th>
                          CMV enhancer+CMV promoter+mPiezo1+mRuby2+bGH PolyA
                          signal
                        </th>
                        <th>To express mPiezo1 in mammalian cells.</th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755017"
                            >BBa_K3755017</a
                          >
                        </th>
                        <th>
                          CMV enhancer+CMV promoter+mPiezo1.1+mRuby2+bGH PolyA
                          signal
                        </th>
                        <th>To express mPiezo1.1 in mammalian cells.</th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755023"
                            >BBa_K3755023</a
                          >
                        </th>
                        <th>
                          CMV enhancer+CMV promoter+IL2-AlgH-EGFP+SV40 PolyA
                          signal
                        </th>
                        <th>To express IL2-AlgH-EGFP.</th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755041"
                            >BBa_K3755041</a
                          >
                        </th>
                        <th>
                          CMV enhancer+CMV promoter+GCaMP6m+SV40 PolyA signal
                        </th>
                        <th>To express GCaMP6m in mammalian cells.</th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755011"
                            >BBa_K3755011</a
                          >
                        </th>
                        <th>ATKT-His tag-linker-Mfp5 CDS(Mfp5-1)</th>
                        <th>
                          Composite CDS to be put in protein expression
                          plasmid(for example: pET28) to express Mfp5 protein in
                          <i>E.coli</i> BL21
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755012"
                            >BBa_K3755012</a
                          >
                        </th>
                        <th>ATKT-His tag-linker-2*Mfp5 CDS(Mfp5-2)</th>
                        <th>
                          Composite CDS to be put in protein expression
                          plasmid(for example: pET28) to express 2*Mfp5 protein
                          in <i>E.coli</i> BL21
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755030"
                            >BBa_K3755030</a
                          >
                        </th>
                        <th>AKTK tag-2*Mfp CDS-cfa-n</th>
                        <th>
                          Produce 3*Mfp5 CDS by splicing−ligation with
                          <a href="http://parts.igem.org/Part:BBa_K3755029"
                            >BBa_K3755029</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755029"
                            >BBa_K3755029</a
                          >
                        </th>
                        <th>cfa-C-Mfp5 CDS-his tag</th>
                        <th>
                          Produce 3*Mfp5 CDS by splicing−ligation with
                          <a href="http://parts.igem.org/Part:BBa_K3755030"
                            >BBa_K3755030</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755031"
                            >BBa_K3755031</a
                          >
                        </th>
                        <th>backbone of pAAV.Syn.Flex.GCaMP6m.WPRE.SV40</th>
                        <th>
                          Contain ori(high-copy-number ColE1/pMB1/pBR322/pUC
                          origin of replication), AmpR promoter,
                          AmpR(β-lactamase) and f1 ori(f1 bacteriophage origin
                          of replication)
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755032"
                            >BBa_K3755042</a
                          >
                        </th>
                        <th>mouse Piezo1.1</th>
                        <th>
                          Mechanosensory calcium channel protein isolated from
                          mouse which is RCF10 assembly compatibe after codon
                          modification.
                        </th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="part">
                  Part Collection
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Mfp5 Part Collction </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To satisfy our adhesive system, we have created a complete
                  part collection containing all kinds of CDSs and functional
                  tags. All these CDSs and functional tags have been arranged in
                  several specific forms as several composite CDSs, which can
                  simply be put into the multiple cloning site of a protein
                  expression plasmid of <i>E.coli</i> and produce our
                  recombinant Mfp5 proteins in different multiples. To make it
                  more convenient for future teams to use our collection, we
                  have made a detailed description of all parts on pages in
                  <strong><u>Registry</u></strong
                  >.
                </p>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>CDSs</th>
                        <th>Tag</th>
                        <th>Composite CDSs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755002"
                            >BBa_K3755002</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755009"
                            >BBa_K3755009</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755011"
                            >BBa_K3755011</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755003"
                            >BBa_K3755003</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755020"
                            >BBa_K3755020</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755012"
                            >BBa_K3755012</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755021"
                            >BBa_K3755021</a
                          >
                        </th>
                        <th></th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755030"
                            >BBa_K3755030</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755004"
                            >BBa_K3755004</a
                          >
                        </th>
                        <th></th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755029"
                            >BBa_K3755029</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755005"
                            >BBa_K3755005</a
                          >
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-title class="text-h5">
                Regulation System Part Collction
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We build a part collection to achieve mechanical
                  stimulus-activated gene expression, which is the key of our
                  regulation system. A mechanosensitive ion channel, Piezo1 or
                  Piezo1.1 is the initiator of this system. It can cause a
                  mechanosensitive intracellular calcium signal. GCaMP6m is an
                  indicator of calcium signal. The NFAT response element is a
                  cis-acting element. The minP is a minimum TATA-box promoter
                  with low basal activity. The reporter of this pathway consists
                  of NFAT-RE, minP, and EGFP. While the intracellular calcium
                  concentration improves, NFAT-RE can be combined with a
                  transcriptional activator, minP will be more active, and more
                  EGFP will be produced leading to a higher brightness under a
                  fluorescence microscope. All of the parts included in this
                  part collection are shown below.
                </p>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Initiator</th>
                        <th>Indicator</th>
                        <th>Reporter</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755006"
                            >BBa_K3755006</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755007"
                            >BBa_K3755007</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755010"
                            >BBa_K3755010</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755016"
                            >BBa_K3755016</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755041"
                            >BBa_K3755041</a
                          >
                        </th>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755014"
                            >BBa_K3755014</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <a href="http://parts.igem.org/Part:BBa_K3755017"
                            >BBa_K3755017</a
                          >
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
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
    this.step[0] = document.getElementById("overview");
    this.step[1] = document.getElementById("part");
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
