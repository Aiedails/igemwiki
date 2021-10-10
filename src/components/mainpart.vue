
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
              @click="$vuetify.goTo('#adhesion', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Adhesion system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#hydrogel', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Hydrogel system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#stress', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Stress-sensitive regulation system
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#drug', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Drug release system
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
                <v-card-title class="text-h4 title" v-intersect="onIntersect">
                  Our Design Parts
                </v-card-title>
              </v-row>
              <v-row justify="center">
                <v-col cols="1" lg="2" xl="2"></v-col>
                <v-col cols="2" @click="$vuetify.goTo('#adhesion', options)">
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
                <v-col cols="2" @click="$vuetify.goTo('#stress', options)">
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
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="adhesion">
                  Adhesion system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The first system of MIBOM is the adhesion system. We got
                  inspiration from a magical molecule, mussel foot protein 5,
                  which plays a major role in the adhesion of MIBOM. However,
                  the productivity of extracting natural mfp5 from mussels is so
                  low that only 1 milligram of mfp5 can be extracted from 10000
                  mussels. Therefore, we designed several steps below to achieve
                  high-yield and effective mfp5 manufacture based on the
                  principles of synthetic biology.
                </p>
                <p class="body-1">
                  <strong>1. construction of mfp5 vector</strong>
                </p>
                <p class="body-1">
                  <strong>
                    2. purification and in vitro modification of mfp5
                  </strong>
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Construction </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The designed gene named mfp5-2 has three important parts.
                  First, the AKTK expression tag is on the 5' end of the gene,
                  which may facilitate the expression of Mfp5. Secondly, 6*His
                  tag is used to purify mfp5 by affinity chromatography.
                  Finally, two repeats of the natural mfp5 gene follow the
                  His-tag. The previous study has proved that the amino acid
                  length and tyrosine concentration in the mussel foot proteins
                  affect its adhesive capacity.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/b/bb/T--ShanghaiTech_China--design--fig1.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  Our goal is to make the yield of mfp5-2 as high as possible,
                  so we choose the BL21(DE3) strain to be our expression chasis
                  because the RNA polymerase of T7 phage is integrated into the
                  genome of BL21(DE3), adapting to pET 28a vector. The T7
                  promoter in this vector is a strong promoter, which can
                  efficiently express mfp5-2. Therefore, we cloned the mfp5-2
                  gene into pET 28a to make a recombinant vector.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                Purification and modification
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  With the aim to get mfp5-2 with high-yield and high-purity
                  effectively, we need to explore the proper inducing
                  conditions, proper buffers and proper protocols of
                  purification.
                </p>
                <p class="body-1">
                  Mfp5-2 is a special protein that has obviously distinct
                  properties compared with other soluble proteins. First, since
                  the length of Mfp5-2 is quite short and its natural form
                  contains irregular structures, the induced BL21(DE3)need to be
                  cultured at 37° for 8-10 hours to get the highest expression.
                  Moreover, most Mfp5-2 exist as the form of inclusion body in
                  BL21(DE3), which means denaturation is required to dissolve
                  all the insoluble mfp5-2.
                </p>
                <p class="body-1">
                  The modification of mfp5-2 employs tyrosinase, whose function
                  is to catalyze the oxidate of tyrosine residues into DOPA
                  groups, The two hydroxyl groups on the benzene ring of DOPA
                  can form non-covalent bonds on the surface of other materials
                  in the aqueous environment. However, the optimal pH of
                  tyrosinase, which is around 6.0, indicates that we need to
                  pick a proper salt to make the buffer system.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/b/b7/T--ShanghaiTech_China--design--fig2.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h6">
                Preparation of buffers
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We prepare many kinds of buffers for different processes.
                </p>
                <p class="body-1">
                  Lysis Buffer: 6 M guanidine hydrochloride, 50 mM potassium
                  phosphates, 300 sodium chloride, pH 7.4
                </p>
                <p class="body-1">
                  Wash Buffer: 6 M guanidine hydrochloride, 50 mM potassium
                  phosphates, 300 sodium chloride, 50 mM imidazole pH 7.4
                </p>
                <p class="body-1">
                  Elution Buffer: 6 M guanidine hydrochloride, 50 mM potassium
                  phosphates, 300 sodium chloride, 250 mM imidazole pH 7.4
                </p>
                <p class="body-1">
                  Dialysis Buffer: 100 mM sodium acetate, 100 mM scorbic acid,
                  pH 5.5
                </p>
              </v-card-text>
              <v-card-title class="text-h"> Induction </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The BL21(DE3) is cultured in a 1L system. We use IPTG to
                  initiate the expression of Mfp5-2 when the OD is 0.8-1.0, and
                  the final concentration of IPTG is 1 mM. Then, BL21(DE3) is
                  kept at 37℃, 220 rpm for 8-10 hours.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/f/f7/T--ShanghaiTech_China--design--fig3.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h"> purification </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The harvested BL21 is resuspended by lysis buffer and lysed by
                  ultrasound to make mfp5-2 have full contact with lysis buffer.
                  Insoluble mfp5-2 will then quickly dissolve in the buffer.
                  Then centrifugation is needed to separate the supernatant,
                  containing mfp5-2, from sediment. The supernatant is then
                  loaded into the nickel affinity chromatography column, The his
                  tag of mfp5-2 from a strong connection with the nickel column
                  while other proteins just flow through. Then wash buffer is
                  used to clear other proteins and elution buffer is used to
                  elute mfp5-2.
                </p>
              </v-card-text>
              <v-card-title class="text-h"> Modification </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The pH of the eluted mfp5-2 solution is 7.4, which may greatly
                  affect the activity of tyrosinase. So mfp5-2 needs to be
                  dialyzed in dialysis buffer to replace its dissolvant. Then,
                  add proper tyrosinase is added to the mfp5-2 solution to
                  modify tyrosine.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="hydrogel">
                  Hydrogel system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  For a complete system, the adhesion system only provides
                  adhesive ability but does not have cohesion, so the Mfp-5
                  itself can not adjoin objects together. In other words, the
                  Mfp-5 itself is just a kind of slightly viscous liquid, if you
                  want it to adjoin objects, you need to wait for a very long
                  time(about 24h) until it is completely dry(See our results on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page ). The principle is simple: Mfp itself is more like a
                  kind of glue that is hard to cure unless it is dried. However,
                  in clinical scenarios, dry conditions are impossible, and even
                  it is completely dry, it performs less adhesion ability than
                  common glue. That is also the reason why mussel protein's
                  applications are more about wound repair. To overcome the
                  cohesion and structural strength problem, we designed a
                  hydrogel system to be the second system of MIBOM. This system
                  makes it possible for Mfp to be a "real" glue and makes it
                  friendly for clinicians to operate.
                </p>
                <p class="body-1">
                  However, the way to solidify the gel is important. Setting
                  times of an orthopedic adhesive are of great importance in
                  practical application.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-1]</sup
                  >
                  Reversible adhesiveness is essential to provide ample working
                  window for surgeons to splice fragments which need repeated
                  adjustments for full reduction.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-2]</sup
                  >
                  This is consistent with our interview results. After many
                  iterations, we decided on a dual-crosslinking system,
                  consisting of a photo-crosslinking system and an
                  ionic-crosslinking system
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                Photo-crosslinking system
              </v-card-title>
              <v-card-title class="text-h6"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Some papers have developed some flexible osteogenic glue based
                  on the mixing of several reagents<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-1]</sup
                  >. But actually, the extended setting process could take up
                  extensive time during operation which is obviously unfavored,
                  and too fast setting of the adhesive could also leave surgeon
                  insufficient time to prepare and fully mixing adhesive
                  components which are also not desired<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-3]</sup
                  >. So we decide to change the strategy and introduce a
                  photo-crosslinking network to make the curing completely
                  controllable.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Preparation of GelMA
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Gelatin-methacryloyl(GelMA) with a moderate degree of
                  methacryloyl modification was proved to have good
                  biocompatibility and suitable for photo-crosslinking<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-4]</sup
                  >. And it provides a broad spectrum of tunable parameters,
                  which lead to the creation of hydrogel networks with different
                  stiffness and pore architectures<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-5][2-6][2-7][2-8]</sup
                  >. Based on these advantages, we chose GelMA as our ideal
                  monomer. At first, we want to purchase GelMA from the company,
                  but due to financial constraints, we had to make the
                  preparation of GelMA by ourselves. We prepared the GelMA with
                  different degrees of methacryloyl modification by adding a
                  different portion of acrylic anhydride to the gelatin
                  solution. We used Nuclear Magnetic Resonance
                  Spectroscopy-1H(NMR-1H) to test our product and a relatively
                  pure GelMA was obtained.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/9/93/T--ShanghaiTech_China--design--fig4.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h6">
                Selection of photoinitiators
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We chose the LAP(lithium
                  phenyl-2,4,6-trimethyl-benzoyl-phosphinate) as our ideal
                  photoinitiators. LAP has the advantage of fast initiation and
                  longer excitation wavelength which is good for the internal
                  environment. LAP enables GelMA to polymerize rapidly in a few
                  seconds. The 405nm wavelength excitation light makes the
                  tissues and cells less affected. We have done some experiments
                  to prove its least harm to the cells.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/e/ee/T--ShanghaiTech_China--design--fig5.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h6"> Phototoxicity test </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We had concerned that 405nm excitation light will kill the
                  cells during the solidification. So we designed a
                  phototoxicity test to see the influence of light. We tested
                  phototoxicity by directly irradiating cells for 10s, 30s and
                  60s. This irradiation time is much longer than the need for
                  curing.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/4/47/T--ShanghaiTech_China--design--fig6.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h6">
                Live/dead staining with FDA and PI
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Live/dead staining can be performed with Fluorescein
                  diacetate(FDA) and Propidium Iodide(PI). FDA is taken up by
                  cells that convert the non-fluorescent FDA into the green
                  fluorescent metabolite fluorescein. The measured signal serves
                  as the indicator for viable cells, as the conversion is
                  esterase-dependent. In contrast, the nuclei staining dye PI
                  cannot pass through a viable cell membrane. It reaches the
                  nucleus by passing through disordered areas of dead cell
                  membranes and intercalates with the DNA double helix of the
                  cell.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/d/dd/T--ShanghaiTech_China--design--fig7.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5">
                Ionic-crosslinking system
              </v-card-title>
              <v-card-title class="text-h6"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The first layer network is designed to fastly cure the gel and
                  the second layer of the network is designed to improve the
                  structural strength after all fixations are finished. Alginate
                  is widely used among iGEM teams, it can form an
                  ionic-crosslinking network by calcium. We also used alginate
                  to test the viability of cells in the hydrogel.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/0/09/T--ShanghaiTech_China--design--fig8.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h6">
                Viability of cells in hydrogel
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In our design, the transformed force-sensitive cells are
                  needed to be encapsulated into the hydrogel. Although a number
                  of papers have shown cells' viability in hydrogels such as
                  GelMA and Alginate<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2-4][2-5][2-6][2-7]</sup
                  >, We need to make sure that the cells survive until callus
                  formation. However, due to the epidemic, we were unable to
                  obtain GelMA at first, so we choose the alginate to test
                  cells' viability in the hydrogel. The cells are encapsulated
                  into the hydrogel and we do this 3D culture for 21 days.
                  Live/dead staining was done with FDA/PI to get a survival
                  curve. The same as the ways mentioned above.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/6/6e/T--ShanghaiTech_China--design--fig9.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5">
                Rheological properties
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Rheological properties are important to prove if our material
                  is qualified for bone repair. We contacted the professor of
                  the school of materials and borrowed the rheometer to test the
                  rheological properties. All rheological properties are
                  measured by the TA Discovery HR-2 hybrid rheometer. We also
                  test the change of Rheological properties during
                  photo-crosslinking and compare other new osteogenic glue with
                  our MIBOM.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/8/8b/T--ShanghaiTech_China--design--fig10.jpg"
                contain
                max-height="600px"
              />
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="stress">
                  Stress-sensitive regulation system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The degradation of the biomaterial is important. Although the
                  GelMA and Alginate are all degradable materials, the rate of
                  degradation is important during bone recovery. We also
                  consider a problem that is often ignored: the recovery time of
                  people of different ages is different. We tried to find a
                  relatively "smart" regulation system to control the
                  degradation of materials with bone growth. We found that with
                  the growth of bone, the gel would be squeezed. The force
                  exerted on the gel can be the signal for material degradation.
                  But stress-induced pathways in the eukaryotic cell have never
                  been designed or used before among all iGEM teams, which is a
                  creative and challenging work. Our designs are as follows:
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                Mechanical sensor Piezo1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Mechanical stimuli drive many physiological processes,
                  including touch and pain sensation, hearing, and blood
                  pressure regulation. Piezo1 is one of the mechanosensitive
                  cation-selective channels found in higher eukaryotic
                  cells.<sup @click="$vuetify.goTo('#references', options)"
                    >[3-1]</sup
                  >
                  Its broad role in mechanotransduction caught our attention.
                  When researchers applied pressure to cells with Piezo1
                  proteins, a significant current change could be observed<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3-2]</sup
                  >, because Piezo1 channels were mechanically activated and
                  induce the permeation of calcium ions.
                </p>
                <p class="body-1">
                  In our design, we made use of the sensitivity to the
                  mechanical force of Piezo1 by expressing the channels in our
                  engineering cells. In this way, the cells in the hydrogel are
                  able to respond to the outer force, which obviously exists
                  during the healing process of fractured bones, and regulate
                  the subsequent pathway.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/4/49/T--ShanghaiTech_China--design--fig11.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  Based on a proposed "plug-and-latch" mechanism for gating
                  Piezo1, the structure of Piezo1 has been improved (and termed
                  Piezo1.1) to optimize its single-channel conductance and
                  sensitized mechanosensitivity.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3-3]</sup
                  >
                  We are grateful to get the plasmid with gene of Piezo1.1 from
                  the professor in charge of the original work. Piezo1.1 and a
                  red fluorescent protein mRuby2 after it is placed on one
                  plasmid.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/0/03/T--ShanghaiTech_China--design--fig12.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5">
                Calcium ion detection
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We used a genetically encoded calcium indicator, GCaMP6m, to
                  test whether calcium entered cells after mechanical
                  stimulations as we expected. GCaMP6m consists of a circularly
                  permuted GFP (cpGFP), calmodulin (CaM), and a
                  calmodulin-binding peptide(CBP). Without calcium, GCaMP6m only
                  has very low emitted light. When four calciums attach to CaM,
                  the conformation of cpGFP will be changed, which lead to an
                  obvious increase of emitted light at 510nm. We inserted it
                  after CMV promoter using pEGFP as the backbone, to make sure
                  GCaMP6m can be expressed in our cells.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/9/95/T--ShanghaiTech_China--design--fig13.jpg"
                contain
                max-height="600px"
              />
              <v-img
                src="https://2021.igem.org/wiki/images/5/5f/T--ShanghaiTech_China--design--fig14.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5">
                Downstream pathway induced by calcium ion
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The great change in calcium ion concentration finally
                  increases the expression of the enzyme through a long pathway.
                </p>
                <p class="body-1">
                  Calmodulin, also vividly called a calcium-binding messenger
                  protein by some, is a ubiquitous protein found in all tissues
                  examined thus far.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3-4]</sup
                  >
                  With the binding of three calcium ions, the calmodulin
                  molecule can then activate one calcineurin molecule.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3-5]</sup
                  >
                  Calcineurin is a serine/threonine phosphatase. Upon activation
                  by calmodulin, calcineurin dephosphorylates the cytoplasmic
                  nuclear factor of activated T cells (NFAT).
                </p>
                <p class="body-1">
                  NFAT is usually phosphorylated by kinases such as DYRK, CK1,
                  and GSK3 in the cytoplasm, whereas dephosphorylation of NFATs
                  exposes a nuclear localization signal which causes NFATs to be
                  imported into the nucleus.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3-6]</sup
                  >
                  Then NFATs in the nucleus recognize specific DNA
                  sequences——the NFAT-response elements (REs), derived from
                  IL2/8 promoter——in the promoter region of the target genes,
                  and bind to the sequence by cooperating with partner
                  transcription factors such as AP-1.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3-7]</sup
                  >
                  In our design, we use plasmid pGL4.30, where our target genes
                  are driven by 3 repeats of IL2 promoter (
                  <strong>IL2 NFAT-RE</strong>). The binding of nuclear NFATs
                  and NFAT-REs promote the expression of the downstream enzyme
                  gene and also the number of enzymes.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/f/f6/T--ShanghaiTech_China--design--fig15.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5">
                Pathway verification
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We construct a downstream plasmid contains NFAT-RE and a
                  report gene after it. In our design, the reporter gene is the
                  alginate enzyme. When Piezo1 is activated, alginate enzymes
                  are secreted out of the cells and degrade the surrounding
                  hydrogel. To verify the pathway, we change the report gene to
                  a green fluorescent protein EGFP. The colocalization of two
                  fluorescent proteins can help us to verify the downstream
                  pathway. See our results on our
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  page.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/3/33/T--ShanghaiTech_China--design--fig16.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5"> Alginate enzyme </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Alginate enzyme can degrade alginate, and its product is
                  alginate Disaccharide, trisaccharide, and tetrasaccharide.
                  Through literature reading, we found an article applying
                  alginate enzyme to sodium alginate degradation, but the
                  article is alginate enzyme expressed in <i>E. coli</i
                  ><sup @click="$vuetify.goTo('#references', options)"
                    >[3-8]</sup
                  >. Because we need to express and secrete alginate enzyme
                  after eukaryotic cells are stimulated by stress in the process
                  of bone repair, we replaced the secretory peptide of
                  prokaryotes with the secretory signal of interleukin-2
                  commonly used by mammalian cells at the N- end of alginate
                  enzyme, hoping to guide mammalian cells to secrete alginate
                  enzyme through signal peptide. In the process of gene design,
                  in addition to adding signal peptide at the N end of the
                  alginate enzyme, we also added GFP at the C end to
                  characterize the normal expression of the alginate enzyme.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/7/78/T--ShanghaiTech_China--design--fig17.jpg"
                contain
                max-height="600px"
              />
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="drug">
                  Drug release system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Overview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Drugs can be encapsulated into the hydrogel by mixing the
                  drugs and monomers before curing. When it is solidified, the
                  drugs can be released and play a role in bone repair. In this
                  part, we do a drug release experiment to identify the drug
                  release process and assisted our math modeling. We aim to
                  build a releasing model to help clinicians to identify the
                  kinds and amount of the drugs. In practice, clinicians can
                  simply mix the drugs with the monomers before curing, the
                  drugs are encapsulated into the hydrogel and release as the
                  material degrades.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Drug choices </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We interviewed some experts and looked through papers to
                  identify some drugs that are beneficial to bone repair, we
                  collected these data and compiled them into the following
                  table:
                </p>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">Drug</th>
                        <th class="text-center">Function</th>
                        <th class="text-center">Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center">β-glycerophosphate</th>
                        <th class="text-center">Phosphate provision</th>
                        <th class="text-center">
                          Gerstenfeld, L. C., Chipman, S. D., Glowacki, J., &
                          Lian, J. B. (1987). Expression of differentiated
                          function by mineralizing cultures of chicken
                          osteoblasts. Developmental biology, 122(1), 49–60.
                          <a href="https://doi.org/10.1016/0012-1606(87)90331-9"
                            >https://doi.org/10.1016/0012-1606(87)90331-9</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th class="text-center">L-ascorbic acid</th>
                        <th class="text-center">Collagen biosynthesis</th>
                        <th class="text-center">
                          Jeffrey, J. J., & Martin, G. R. (1966). The role of
                          ascorbic acid in the biosynthesis of collagen. I.
                          Ascorbic acid requirement by embryonic chick tibia in
                          tissue culture. Biochimica et biophysica acta, 121(2),
                          269–280.
                          <a href="https://doi.org/10.1016/0304-4165(66)90116-4"
                            >https://doi.org/10.1016/0304-4165(66)90116-4</a
                          >
                        </th>
                      </tr>
                      <tr>
                        <th class="text-center">Dexamethasone</th>
                        <th class="text-center">
                          Disputablely believed as RUNX2 activation
                        </th>
                        <th class="text-center">
                          Langenbach, F., & Handschel, J. (2013). Effects of
                          dexamethasone, ascorbic acid and β-glycerophosphate on
                          the osteogenic differentiation of stem cells in vitro.
                          Stem cell research & therapy, 4(5), 117.
                          <a href="https://doi.org/10.1186/scrt328"
                            >https://doi.org/10.1186/scrt328</a
                          >
                        </th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-title class="text-h5">
                Drug release experiment
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In this part, we cooperate with CSU_China to do a drug release
                  experiment(See details on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Collaborations"
                    >Collaborations</a
                  >
                  page). We encapsulated insulin into alginate hydrogel and
                  measured its release rate. The insulin-releasing experiment is
                  measured by Enzyme-Linked Immunosorbent Assay(ELISA). The data
                  collected from the experiment helped us to correct the
                  releasing math model. (See our drug-releasing model on
                  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Model"
                    >Model</a
                  >
                  page)
                </p>
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
                  [2-1]: Tang, J., Xi, K., Chen, H., Wang, L., Li, D., Xu, Y.,
                  Xin, T., Wu, L., Zhou, Y., Bian, J., Cai, Z., Yang, H., Deng,
                  L., Gu, Y., Cui, W., Chen, L., 2021. Flexible Osteogenic Glue
                  as an All‐In‐One Solution to Assist Fracture Fixation and
                  Healing. Advanced Functional Materials 2102465..
                  doi:10.1002/adfm.202102465
                </p>
                <p class="body-2">
                  [2-2]: a) C. Shao, L. Meng, M. Wang, C. Cui, B. Wang, C. R.
                  Han, F. Xu, J. Yang, ACS Appl. Mater. Interfaces 2019, 11,
                  5885; b) L. Han, L. W. Yan, K. F. Wang, L. M. Fang, H. P.
                  Zhang, Y. H. Tang, Y. H. Ding, L. T. Weng, J. L. Xu, J. Weng,
                  Y. J. Liu, F. Z. Ren, X. Lu, NPG Asia Mater. 2017, 9, 12.
                </p>
                <p class="body-2">
                  [2-3]:D. F. Farrar, Int. J. Adhes. Adhes. 2012, 33, 89.
                </p>
                <p class="body-2">
                  [2-4]: J.W. Nichol, S.T. Koshy, H. Bae, C.M. Hwang, S.
                  Yamanlar, A. Khademhosseini, Cell-laden microengineered
                  gelatin methacrylate hydrogels,Biomaterials 31(2010)
                  5536e5544.
                </p>
                <p class="body-2">
                  [2-5]: Pepelanova, I.; Kruppa, K.; Scheper, T.; Lavrentieva,
                  A. Gelatin-Methacryloyl (GelMA) hydrogels with defined degree
                  of functionalization as a versatile toolkit for 3D cell
                  culture and extrusion bioprinting. Bioengineering 2018, 5, 55.
                </p>
                <p class="body-2">
                  [2-6]: Loessner, D.; Meinert, C.; Kaemmerer, E.; Martine,
                  L.C.; Yue, K.; A Levett, P.; Klein, T.J.; Melchels, F.P.W.;
                  Khademhosseini, A.; Hutmacher, D.W. Functionalization,
                  preparation and use of cell-laden gelatin methacryloyl–based
                  hydrogels as modular tissue culture platforms. Nat. Protoc.
                  2016, 11, 727–746.
                </p>
                <p class="body-2">
                  [2-7]: Nichol, J.W.; Koshy, S.T.; Bae, H.; Hwang, C.M.;
                  Yamanlar, S.; Khademhosseini, A. Cell-laden microengineered
                  gelatin methacrylate hydrogels. Biomaterials 2010, 31,
                  5536–5544.
                </p>
                <p class="body-2">
                  [2-8]: Bulcke, A.I.V.D.; Bogdanov, B.; De Rooze, N.; Schacht,
                  E.H.; Cornelissen, M.; Berghmans, H. Structural and
                  rheological properties of methacrylamide modified gelatin
                  hydrogels. Biomacromolecules 2000, 1, 31–38.
                </p>
                <p class="body-2">
                  [3-1]: Coste, B., Mathur, J., Schmidt, M., Earley, T. J.,
                  Ranade, S., Petrus, M. J., . . . Patapoutian, A. (2010).
                  Piezo1 and Piezo2 Are Essential Components of Distinct
                  Mechanically Activated Cation Channels. Science, 330(6000),
                  55-60. doi:doi:10.1126/science.1193270
                </p>
                <p class="body-2">
                  [3-2]: Moroni, M., Servin-Vences, M.R., Fleischer, R.,
                  Sánchez-Carranza, O., Lewin, G.R., 2018. Voltage gating of
                  mechanosensitive PIEZO channels. Nature Communications 9..
                  doi:10.1038/s41467-018-03502-7
                </p>
                <p class="body-2">
                  [3-3]: Jie Geng, Wenhao Liu, Heng Zhou, Tingxin Zhang, Li
                  Wang, Mingmin Zhang, Yiran Li, Bo Shen, Xueming Li, Bailong
                  Xiao, A Plug-and-Latch Mechanism for Gating the
                  Mechanosensitive Piezo Channel, Neuron,Volume 106, Issue
                  3,2020, Pages 438-451.e6,ISSN 0896-6273
                </p>
                <p class="body-2">
                  [3-4]: Thomas H. Crouch and Claude B. Klee Biochemistry 1980
                  19 (16), 3692-3698, DOI: 10.1021/bi00557a009
                </p>
                <p class="body-2">[3-5]: doi: 10.4149/gpb_2017022</p>
                <p class="body-2">
                  [3-6]: Yousang Gwack, Stefan Feske, Sonal Srikanth, Patrick G.
                  Hogan, Anjana Rao, Signalling to transcription: Store-operated
                  Ca2+ entry and NFAT activation in lymphocytes, Cell Calcium,
                  Volume 42, Issue 2, 2007, Pages 145-156, ISSN 0143-4160,
                </p>
                <p class="body-2">
                  [3-7]: Zhang, W., Takahara, T., Achiha, T., Shibata, H., Maki,
                  M., 2019. Cellular Ca2+-Responding Nanoluciferase Reporter
                  Gene System Directed by Tandemly Repeated Pseudo-palindromic
                  NFAT-Response Elements, in: Methods in Molecular Biology.
                  Methods in Molecular Biology, pp. 95–109..
                  doi:10.1007/978-1-4939-9030-6_7
                </p>
                <p class="body-2">
                  [3-8]: Yan, J., Chen, P., Zeng, Y., Men, Y., Mu, S., Zhu, Y.,
                  Chen, Y., Sun, Y., 2019. The Characterization and Modification
                  of a Novel Bifunctional and Robust Alginate Lyase Derived from
                  Marinimicrobium sp. H1. Marine Drugs 17, 545..
                  doi:10.3390/md17100545
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
    this.step[0] = document.getElementById("adhesion");
    this.step[1] = document.getElementById("hydrogel");
    this.step[2] = document.getElementById("stress");
    this.step[3] = document.getElementById("drug");
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
