
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
                <p class="body-1"></p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title"> Overview </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  The engineering of the MIBOM system is the central goal of our
                  project. But more creatively, our engineering isn't limited to
                  the engineering of a bacterial organism as many iGEM teams
                  did. Our engineering contains bacterial organisms,
                  biocompatible polymeric materials and eukaryotic organisms.
                  The introduction of four systems of MIBOM is a 'Design → Build
                  → Test → Learn' cycle. After identifying the problem, we want
                  to find biocompatible mucin that can glue the bone fragments.
                  We then found mussel protein a good choice, and this is the
                  introduction of the <strong>adhesion system</strong>. In the
                  adhesion system, we also do several engineering design cycles
                  to get it better. (See on the following adhesion system part)
                  But when we finished building the adhesion system, we found
                  the Mfp itself can not satisfy our requirement. Mfp solution
                  does not have adhesive ability unless it is dried completely,
                  which usually costs about 48 hours. This makes it hard for us
                  to put it into the application.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  During building the adhesion system, we have tried to improve
                  the engineering design of the bacterial organism, but we
                  noticed that it is hard to solve the problem by only improving
                  the engineering of bacterial organisms. Therefore, we
                  introduced biocompatible polymeric materials to our project,
                  which is the <strong>hydrogel system</strong>. The
                  introduction of a hydrogel system makes it possible for us to
                  design a rapid solidification of osteogenic glue for 2-8s
                  under a UV lamp.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Although the hydrogel system provided structural strength, the
                  degradation of the material is a problem. So we engineered a
                  <strong>stress-sensitive regulation system</strong> based on
                  Piezo in eukaryotic cells. The
                  <strong>stress-sensitive regulation system</strong> makes
                  cells have the ability to feel the bone growth and degrades
                  the hydrogel. Notably, the <strong>hydrogel system</strong>
                  provides the living environment for engineered cells and the
                  <strong>adhesion system</strong> provides better adhesion of
                  cells in the hydrogel.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  After finishing the three systems above, we introduced the
                  fourth <strong>drug-releasing system</strong> to satisfy the
                  new demand mentioned in our interview with patients and
                  clinicians. The hydrogel system makes it possible for the
                  sustained release of the drug.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  In a word, the introduction of four systems is the outcome of
                  several engineering design circles. Below are some engineering
                  design circles in each system.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  Adhesion system
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                Parts:
                <a href="http://parts.igem.org/Part:BBa_K3755011"
                  >BBa_K3755011</a
                >
                and
                <a href="http://parts.igem.org/Part:BBa_K3755012"
                  >BBa_K3755012</a
                ></v-card-title
              >
              <v-card-text>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6"> Design</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  ATKT-His tag-linker-Mfp5 CDS(Mfp5-1)(<a
                    href="http://parts.igem.org/Part:BBa_K3755011"
                    >BBa_K3755011</a
                  >) and ATKT-His tag-linker-2*Mfp5 CDS(Mfp5-2)(<a
                    href="http://parts.igem.org/Part:BBa_K3755012"
                    >BBa_K3755012</a
                  >) are two important part we used in adhesion system. They are
                  both designed to get a high yield of mussel protein in
                  <strong><i>E.coli</i></strong
                  >. The Mfp5-2 is the improvement of Mfp5-1. The designed gene
                  named mfp5-2 has three important parts. First, the AKTK
                  expression tag is on the 5' end of the gene, which may
                  facilitate the expression of Mfp5. Secondly, 6*His tag is used
                  to purify mfp5 by affinity chromatography. Finally, two
                  repeats of the natural mfp5 gene follow the His-tag.
                </p>
                <p class="body-1"></p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/e/e3/T--ShanghaiTech_China--res--pet28a_mefp5.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.1a: Construction of pET28a-cfaC-mfp5-1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/c/cd/T--ShanghaiTech_China--res--pet28a_cfaC.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.1b: Construction of pET28a-mfp5-2-cfaN
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6"> Build</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  Before protein purification, we decided to explore the proper
                  induction conditions. We do a series of experiments to find
                  the best induction conditions.(Fig.2a)
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/3/39/T--ShanghaiTech_China--pro--explore.png"
                    contain
                    max-height="600px"
                  />
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Fig.2: SDS-PAGE of mfp5-1 expression in different
                      induction conditions
                    </p>
                  </v-row>
                </p>
                <p class="body-1">
                  We then ran SDS-PAGE of our purification of mfp5-1 and mfp5-2
                  to test the expression of mussel protein. The results showed
                  that the expression of mfp5-1 and mfp5-2 is successful.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/9/98/T--ShanghaiTech_China--imp--mfp5-1_first.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.3a: SDS-PAGE of first purification of mfp5-1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/0/09/T--ShanghaiTech_China--res--mfp5-1_second.jpg"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.3b: SDS-PAGE of second purification of mfp5-1
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong>Fig.3: Purification of mfp5-1</strong>
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">Test</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  After purifying the mussel protein, we then test its
                  mechanical properties. We used the mussel protein to adjoin a
                  PCR tube and a tube cover(Fig.4a, Fig.4b, Fig.4c). We had to
                  dry the mussel protein in a 37-degree oven for 48 hours, for
                  the mussel protein solution had no adhesive ability. We also
                  tested the adhesion difference of Mfp5-1 and Mfp5-2. The
                  adhesion of Mfp5-1 is measured as 11.05KPa/mg and Mfp5-1 as
                  12.83KPa/mg. See more details on our
                  [Results](https://2021.igem.org/Team:ShanghaiTech_China/Results)
                  page.
                </p>
                <v-row justify="center">
                  <v-col cols="4">
                    <v-img
                      src="https://2021.igem.org/wiki/images/d/d2/T--ShanghaiTech_China--res--5-1.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.4a Add 20ul of protein solution to the center of the
                        petri dish.
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img
                      src="https://2021.igem.org/wiki/images/f/fa/T--ShanghaiTech_China--res--5-11.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.4b Attach PCR tube to the center of the petri dish
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img
                      src="https://2021.igem.org/wiki/images/b/bc/T--ShanghaiTech_China--res--5-2.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.4c: Test the mechanical properties of Mfp5-1 and
                        Mfp5-2 after 48h drying
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6"> Learn</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We learn from the test above that the mussel protein solution
                  has no adhesion. Only when it is completely dried, it can have
                  a slight adhesion. The dry condition is also impossible in a
                  humoral environment. So the mussel protein itself is not
                  qualified for bone repair.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  Hydrogel system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Photo-crosslinking system</v-card-title
              >
              <v-card-title class="text-h6"> Design</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We believed that light-induced polymerization is a good
                  strategy in clinical. Considering the biocompatibility and
                  operation time, we chose the LAP (lithium
                  phenyl-2,4,6-trimethyl-benzoyl-phosphinate) as the
                  photoinitiator and GelMA (Gelatin-methacryloyl) as the monomer
                  to build a photo-crosslinking system.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6"> Build</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We used the Nuclear Magnetic Resonance Spectroscopy-1H(NMR-1H)
                  to test our preparation of GelMA.(Fig.5a) The functional
                  groups are identified by chemical shift (ppm).
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/5/55/T--ShanghaiTech_China--res--gelma1-1.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.5: Identifying the functional group by the chemical
                    shift(ppm)
                  </p>
                </v-row>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6">Test</v-card-title>
              <v-card-text>
                <p class="body-1">
                  After getting the GelMA, we mixed the GelMA and mussel protein
                  and used a rheometer to test the rheological
                  properties(Fig.6a, Fig.6b). Moreover, we applied the same
                  method testing the mussel protein to the test of the hydrogel
                  system and found a great improvement of mechanical
                  properties(Fig.6b, Fig.6c). See more details on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--pro--flow2.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.6a: A rapid UV polymerization, costing only 2-8s
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/3/34/T--ShanghaiTech_China--res--3.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.6b: Modulus / Oscillation strain curve of MIBOM
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--res--1-5.jpg"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.6c: Use UV light to cure GelMA or GelMA+Mussel mucin
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/d/d6/T--ShanghaiTech_China--res--1-1.jpg"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.6d: Mechanical properties of hydrogel + mussel
                        protein
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6"> learn</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  The Photo-crosslinking system is qualified for bone repair, so
                  we need to think more about the biocompatibility and the
                  degradation of the hydrogel. We found GelMA may degrade very
                  fast in the body, so we need to think more about the system
                  design.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"
                >Ionic-crosslinking system</v-card-title
              >
              <v-card-title class="text-h6">Design</v-card-title>
              <v-card-text>
                <p class="body-1">
                  The Photo-crosslinking system may degrade very fast, so we
                  introduced an ionic-crosslinking system to the hydrogel
                  system. Alginate has a relatively slow degradation rate. After
                  solving the material problems, we started to test the survival
                  of cells in the hydrogel.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6">Build</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We used the high concentration alginate to test the viability
                  of cells in the hydrogel. We did a short-term and long-term
                  survival experiment, with a 7-day test and a 21-day test.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6">Test</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We used the FDA/PI staining to statistic the survival of
                  cells. The short-erm test and long-term test both showed
                  relatively good viability of cells. (Fig.7a, Fig.7b) See more
                  details on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/6/6e/T--ShanghaiTech_China--res--7_day.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.7a: Short-term viability of cells in hydrogel
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/8/81/T--ShanghaiTech_China--pro--long_term.jpg"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.7b: Long-term viability of cells in hydrogel
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6"> Learn</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  Although the hydrogel can naturally degrade in a humoral
                  environment, we do not think this is a good way for different
                  groups of people, to the different recovery abilities. So we
                  introduced the following stress-sensitive regulation system.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  Stress-sensitive regulation system
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                Parts:
                <a href="http://parts.igem.org/Part:BBa_K3755017"
                  >BBa_K3755017</a
                >
                and
                <a href="http://parts.igem.org/Part:BBa_K3755041"
                  >BBa_K3755041</a
                ></v-card-title
              >
              <v-card-text>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6">Design</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We aimed to build a stress-sensitive cell line, so we firstly
                  designed a Piezo1.1 overexpressing plasmid(Fig.8a, Fig.8b). A
                  red fluorescent protein gene mRuby2 is placed after the
                  Piezo1.1. The red fluorescence indicates the expression of
                  Piezo1.1.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  And to test the calcium influx, we build another testing
                  plasmid
                  [BBa_K3755041](http://parts.igem.org/Part:BBa_K3755041). A
                  genetically encoded calcium indicator, GCaMP6m, is designed to
                  test the influx of calcium ions.(Fig.8c, Fig.8d) Once the
                  calcium ion influx happens, the fluorescent intensity will
                  increase greatly.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/0/07/T--ShanghaiTech_China--res--gcamp_vector.jpg"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.8a: Gene circuit of GCaMP composite part
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/6/61/T--ShanghaiTech_China--res--pEFP_GCaMP.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.8b: Construction of pEGFP-GCaMP, which is able to
                        express in HEK293 cells
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6"> Build</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We cotransfected tow plasmids to the HEK293 cells to test our
                  design. After 24h expression, the fluorescent picture showed
                  good transfection productivity(Fig.9a, Fig.9b, Fig.9c, Fig.9d)
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/e/e9/T--ShanghaiTech_China--pro--force_4times.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.9a: Green fluorescence of GCaMP after the activation
                        of Piezo1.1 by force, 20X objective, indicating the
                        transfection of pEGFP-GCaMP
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/e/ec/T--ShanghaiTech_China--pro--0930_red.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.9b: Red fluorescence of Piezo1.1-mRuby2, indicating
                        the transfection of Piezo1.1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/4/44/T--ShanghaiTech_China--imp--composite_force.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.9c: Merge of the green channel and red channel,
                        indicating the cotransfection of GCaMP and Piezo1.1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/7/7f/T--ShanghaiTech_China--pro--bright.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.9d: Bright field of the corresponding cells
                        cotransfected with two plasmids
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">Test</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  To test the function of Piezo1.1, we then designed a series of
                  stimulation to activate the Piezo1.1(Fig.10a). We recorded the
                  fluorescence change when the stimulation was given.(Video.1)
                  See more details on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/Gcamp共转实验.png" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">
                  > Fig.10a: Experiment procedure to test the calcium influx
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <video id="video" controls="" preload="none">
                    <source id="mp4" src="force 4times.mp4" type="video/mp4" />
                  </video>
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  > Video1: Faster fluorescence change of cells under the
                  stimulation of shear stress, exposure time: 90ms, 20X
                  objective
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6"> Learn </v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  The results showed that the Piezo1.1 had a stress-sensitivity.
                  So we can start to build the downstream pathway.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                Parts:
                [BBa_K3755014](http://parts.igem.org/Part:BBa_K3755014)</v-card-title
              >
              <v-card-text>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6"> Design</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We designed a downstream pathway and placed it on a plasmid.
                  The reporter gene is EGFP. This is the part
                  [BBa_K3755014](http://parts.igem.org/Part:BBa_K3755014). In
                  this part, we inserted an EGFP gene after the Pmin(Fig.11a),
                  and use two kinds of fluorescence to colocalize the cells.
                  Similarly, we got the pGL4.30 by linearizing the backbone
                  pGL4.30 and EGFP. (Fig.11b)
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/PGL4.30.jpg" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">> Fig.11a: Gene circuit of pGL4.30-GFP</p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/pGL-GFP Map.png" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">> Fig.11b: Map of pGL4.30-EGFP</p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h6"> Build and test</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  After we successfully get the plasmid pGL4.30-GFP, we tried to
                  use two fluorescent proteins to colocalize the cells. 24 hours
                  after cotransfecting cells with pGL4.30-GFP and Piezo1.1, we
                  apply mechanical stimulation to cells in two ways, sucking out
                  the culture medium or placing it on a horizontal shaker for
                  10min, 200rpm. (Fig.12a) They are both effective ways to
                  stimulate the cells and activate the Piezo1.1. In practice, we
                  observed a green fluorescence in the shaking group under the
                  excitation light of 388nm(Fig.12b) and the colocalization of
                  two fluorescence(Fig.12c, Fig.12d) shows a good cotransfection
                  of the cells.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/下游测试.png" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">
                  > Fig.12a: Experiment procedure of testing the downstream
                  pathway
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/0928-40-03-green.png (green).png" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">
                  > Fig.12b: Green channel of the cells 24h after shaking,
                  identifying the expression of EGFP, 40X objective
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/0928-40-03-green.png (red).png" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">
                  > Fig.12c: Red channel of the cells to identify the Piezo1.1,
                  40X objective
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img src="@/assets/Composite.png" />
                </p>

                <p class="body-1"></p>
                <p class="body-1">
                  > Fig.12d: Merge green and red channel to colocalize the cells
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title"> Summary </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  We engineered a series of parts and tests their functions. The
                  whole project is a process of engineering. We will hold the
                  engineering belief and try best to do better!
                </p>
                <p class="body-1"></p>
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
