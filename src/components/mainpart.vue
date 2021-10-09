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
              Drug system
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
                  id="adhesion"
                  v-intersect="onIntersect"
                >
                  Adhesion system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Construction of plasmid
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We constructed a pET28a-cfaC-mfp5-1(<a
                    href="http://parts.igem.org/Part:BBa_K3755011"
                    >BBa_K3755011</a
                  >) plasmid and a pET28a-mfp5-2-cfaN(<a
                    href="http://parts.igem.org/Part:BBa_K3755012"
                    >BBa_K3755012</a
                  >) plasmid(Fig.1a, Fig.1b) , expressing in <i>E.coli</i>. We
                  linearized the pET28a backbone and gene segment to do the
                  homologous recombination. The agarose gel electrophoresis of
                  Mfp5-2-CfaN and CfaC-Mfp5-1 are shown in Fig.1c, linearized
                  pET28a is shown in Fig.1d.
                </p>
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
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/f/f6/T--ShanghaiTech_China--res--C1%262N.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.1c: Linearized segments of Mfp5-2-CfaN and
                        CfaC-Mfp5-1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/d/d5/T--ShanghaiTech_China--res--pet28.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.1d: Linearized plasmid backbone pET28a
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.1: Construction of two mussel-expressing
                        plasmids.</strong
                      >
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5">
                Extraction of mussel protein
              </v-card-title>
              <v-card-title class="text-h6">
                Explore the induction conditions of mfp5-1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Before protein purification, we decided to explore the proper
                  induction conditions. So we made two control groups and four
                  experimental groups. In Fig.2, we could find that mfp5-1 was
                  successfully expressed in four groups since there was an
                  obvious band between 15-20 kDa compared with blank
                  control(Blank BL21(DE3)) and negative control(Before
                  induction).
                </p>
                <p class="body-1">
                  Notably, there was a slight band in the negative
                  control(Before induction). We inferred that leaked expression
                  of mfp5-1 might happen in the negative control.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/3/39/T--ShanghaiTech_China--pro--explore.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-1">
                    Fig.2: SDS-PAGE of mfp5-1 expression in different induction
                    conditions
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Purification of mfp5-1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We ran SDS-PAGE after each mfp5-1 purification. Fig.3a is the
                  results of our first purification. It was obvious that a great
                  amount of mfp5-1 was expressed in BL21 (compared samples
                  before induction and after induction), and it totally
                  dissolved in the lysis buffer. After elution, we got purified
                  mfp5-1, but some mfp5-1 still remained on nickel medium. Since
                  Fig.3a lacked flow through and washing samples, we did another
                  purification, which was Fig.3b.
                </p>
                <p class="body-1">
                  Fig.3a almost shows the same results as Fig.3a. We could find
                  the band of mfp5-1 in flow-through, indicating that the amount
                  of mfp5-1 had saturated nickel medium. Moreover, low
                  concentration imidazole could elute some mfp5-1 as well.
                </p>
                <p class="body-1">
                  We found there was an unexpected band between 20-25 kDa in
                  washing and elution samples(Fig.3b), which is not shown in
                  Fig.3a. It may be caused by the nickel medium since we used it
                  to purify mfp5-2 before purification of mfp5-1 and did not
                  clear it totally. The band of mfp5-2 is actually between 20-25
                  kDa.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/9/98/T--ShanghaiTech_China--imp--mfp5-1_first.png" />
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
                    <v-img src="https://2021.igem.org/wiki/images/0/09/T--ShanghaiTech_China--res--mfp5-1_second.jpg" />
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
              <v-card-title class="text-h6">
                Purification of mfp5-2
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The protocol of mfp5-2 purification is the same as mfp5-1
                  purification since they share almost the same features except
                  for molecular weight. We can find the band of mfp5-2(Fig.4)
                  between 20-25 kDa, suggesting the successful expression of
                  mfp5-2. However, an unexpected band between 15-20 kDa shows in
                  many samples, including after induction, supernatant, washing
                  and elution. It did not result from nickel medium since the
                  band also occurred after induction and supernatant samples. So
                  we inferred that mfp5-2 might break in half during expression
                  since it is a fusion protein made up of two repeats of mfp5-1.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/6/6f/T--ShanghaiTech_China--imp--mfp5-2_first.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-1">
                    Fig.4: SDS-PAGE of first purification of mfp5-2
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5">
                Improvement of mussel protein
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To characterize as much as possible the adhesion of tyrosine
                  enzyme-modified mefp5-1 and mefp5-2, take 20ul of the
                  concentrated protein solution(concentration:
                  mefp5-1=50mg/ml,mefp5-2=40mg/ml) to attach the PCR tube and
                  the tube cover （Fig.5a,5b)(The PCR tube cover is trimmed and
                  polished to a round face with a diameter of 7mm)to the center
                  of the petri dish and perform a viscidity test after 48 hours
                  of drying in a 37-degree oven.
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/d/d2/T--ShanghaiTech_China--res--5-1.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.5a Add 20ul of protein solution to the center of the
                        petri dish.
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/f/fa/T--ShanghaiTech_China--res--5-11.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.5b Attach PCR tube to the center of the petri dish
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                  </v-row>
                </v-row>
                <p class="body-1">
                  Lift the petri dish at a certain height through the PCR tube
                  and add the glass beads one by one to the petri dish until the
                  last glass bead is added to cause the petri dish to fall off
                  with the PCR tube. The adhesion of the added protein can be
                  calculated by weighing the total weight of the Petri dish and
                  glass beads.（Fig.6a,6b)
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/0/0b/T--ShanghaiTech_China--pro--9something.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.6a Fill the petri dish one by one with glass beads.
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/e/e0/T--ShanghaiTech_China--res--5-22.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.6b Record the weight of glass beads when separating
                        petri dish from PCR tube.
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                  </v-row>
                </v-row>
                <p class="body-1">
                  Each experiment was recorded with a video camera, and every
                  moment of falling off was recorded.(Video.1)
                </p>
                <v-container>
                  <video controls width="100%" style="object-fit: contain">
                    <source src="https://2021.igem.org/wiki/images/5/57/T--ShanghaiTech_China--res--paste.mp4" type="video/mp4" />
                  </video>
                </v-container>
                <p class="body-1">
                  We calculated the results by the following steps:
                </p>
                <p class="body-1">
                  <strong>mefp5-1:</strong>
                </p>
                <p class="body-1">PCR tube cover area:</p>
                <p class="body-1">$$ S=π×r^2=π×(0.35cm)^2=0.38cm^2 $$</p>

                <p class="body-1">
                  The total weight of the petri dish and glass beads, i.e. the
                  maximum pull that mefp5-1 can withstand in the experiment：
                </p>
                <p class="body-1">
                  $$ F=43.24g×9.8kg/N=(43.24/1000)kg×9.8kg/N=0.42N $$
                </p>
                <p class="body-1">The viscosity produced by mefp5-1:</p>
                <p class="body-1">
                  $$ P=F/S=0.42N/0.38cm^2=1.105N/cm^2=11.05KPa $$
                </p>
                <p class="body-1">
                  <strong
                    >The viscosity produced per milligram of protein:</strong
                  >
                </p>
                <p class="body-1">
                  $$ P'=P/m=11.05KPa/(50mg/ml×0.02ml)=11.05KPa/m $$
                </p>
              </v-card-text>
              <p class="body-1"><strong>mefp5-2</strong></p>
              <v-card-text>
                <p class="body-1">PCR tube cover area:</p>
                <p class="body-1">$$ S=π×r^2=π×(0.35cm)^2=0.38cm^2 $$</p>
                <p class="body-1">
                  The total weight of the petri dish and glass beads, i.e. the
                  maximum pull that mefp5- can withstand in the experiment:
                </p>
                <p class="body-1">
                  $$ F=39.46g×9.8kg/N=(39.46/1000)kg×9.8kg/N=0.39N $$
                </p>
                <p class="body-1">The viscosity produced by mefp5-2:</p>
                <p class="body-1">
                  $$ P=F/S=0.39N/0.38cm^2=1.026N/cm^2=10.26KPa $$
                </p>
                <p class="body-1">
                  <strong
                    >The viscosity produced per milligram of protein:</strong
                  >
                </p>
                <p class="body-1">
                  $$ P'=P/m=10.26KPa/(40mg/ml×0.02ml)=12.83KPa/mg $$
                </p>
                <p class="body-1">
                  Compared with the viscosity of
                  <strong>mefp5-1</strong> (11.05KPa/mg), the viscosity of
                  <strong>mefp5-2</strong> was improved to 12.83KPa/mg, which
                  was 16.11% higher than that of MEFP5-1.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="hydrogel">
                  Hydrogel system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Preparation of GelMA
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Gelatin-methacryloyl(GelMA) is prepared by adding acrylic
                  anhydride to the gelatin solution. GelMA with different
                  degrees of methacryloyl modification is tested by Nuclear
                  Magnetic Resonance Spectroscopy-1H(NMR-1H). We can identify
                  the functional group by the chemical shift(Fig.7a) and judge
                  the degrees of methacryloyl modification in terms of the
                  relative integral of characteristic peak(Fig.7b)
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/5/55/T--ShanghaiTech_China--res--gelma1-1.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.7a: Identifying the functional group by the chemical
                        shift(ppm)
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/0/01/T--ShanghaiTech_China--res--gelma2-2.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.7b: Identifying the degrees of methacryloyl
                        modification in terms of relative integral of
                        characteristic peak
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
              <v-card-title class="text-h5">
                Rheological properties
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Our ideal osteogenic glue should have a moderate modulus and
                  rapid polymerization. A moderate modulus(10^3-10^4)is to have
                  good biocompatibility and rapid polymerization for a shorter
                  surgery time. To test the rheological properties of our
                  material, we used the TA Discovery HR-2 hybrid rheometer to
                  test our material and we found the appropriate ratio of the
                  three components(12.5% GelMA +1.25% Alginate + 4mg/ml Mussel
                  protein)(Fig.8a). We used UV curing accessories to test the
                  change of modulus during the solidification. We found that the
                  UV curing time is around 2-8s, which is very rapid
                  polymerization(Fig.8b). Moreover, we did the oscillation sweep
                  to test its other rheological properties(Fig.8c, Fig.8d), the
                  oscillation test showed our material can keep the modulus
                  under 75% oscillation strain, bearing the biggest 300%
                  oscillation strain, which is qualified to be an osteogenic
                  glue.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/b/be/T--ShanghaiTech_China--pro--flow1.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.8a: A moderate modulus by changing the ratio of the
                        three components
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--pro--flow2.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.8b: A rapid UV polymerization, costing only 2-8s
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/b/b6/T--ShanghaiTech_China--res--2.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.8c: Modulus / Angular frequency curve of MIBOM
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/3/34/T--ShanghaiTech_China--res--3.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.8d: Modulus / Oscillation strain curve of MIBOM
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong>
                        Fig.8: Rheological properties of the MIBOM
                      </strong>
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5">
                Mechanical Test of hydrogel + Mfp
              </v-card-title>
              <v-card-title class="text-h6">
                Determinate the adhesion of hydrogel and hydrogel-mussel mucin
                mixture system
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To compare the adhesion and mechanical strength of the
                  Hydrogel system and Hydrogel-Mussel mucin system, the same way
                  as in the last experiment was used to measure the adhesion.
                </p>
                <p class="body-1">
                  We measured the adhesion of the hydrogel alone. 50ul hydrogel
                  (GelMA or Hydrogel-Mussel mucin: GelMA+Mussel
                  mucin(mefp5-2))was used to glue the PCR tube cap with a
                  diameter of 7mm along with the tube body to the center of the
                  petri dish. (Fig. 9a)The adhesion of GelMA was measured after
                  curing with UV lamp for 15 seconds. (Fig. 9b)
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/5/54/T--ShanghaiTech_China--res--1-4.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig. 9a: Glue the PCR tube to the petri dish with GelMA
                        or GelMA+Mussel mucin
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/a/aa/T--ShanghaiTech_China--res--1-5.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.9b: Use UV light to cure GelMA or GelMA+Mussel mucin
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong>
                        Fig.9: Mechanical test of GelMA+mussel protein
                      </strong>
                    </p>
                  </v-row>
                </v-row>
                <p class="body-1">
                  To prevent the sliding of the added glass beads from changing
                  the overall center of gravity, which results in uneven forces
                  on the contact surface between the PCR tube and the petri
                  dish, double-sided adhesive was affixed to the bottom of the
                  petri dish to fix the position of the glass beads and
                  stabilize the center of gravity(Fig.10a). Glass beads and
                  weights were added to the petri dish one by one until the PCR
                  tube separated from the petri dish(Fig.10b).
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/1/1a/T--ShanghaiTech_China--res--1-6.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.10a: Fill the petri dish one by one with glass beads
                        and weights.
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/d/d6/T--ShanghaiTech_China--res--1-1.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.10b: Record the weight of glass beads when separated
                        petri dish from PCR tube
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
              <v-card-title class="text-h6"> Calculating results </v-card-title>
              <v-card-text>
                <p class="body-1"><strong>Hydrogel system</strong>:</p>
                <p class="body-1">PCR tube cover area:</p>
                <p class="body-1">$$S=π×r^2=π×(0.35cm)^2=0.38cm^2 $$</p>
                <p class="body-1">
                  The total weight of the petri dish, glass beads and weights,
                  i.e. the maximum pull that GelMA can withstand in the
                  experiment：
                </p>
                <p class="body-1">
                  $$ F=105.47g×9.8kg/N=(105.47/1000)kg×9.8kg/N=1.033N $$
                </p>
                <p class="body-1">The adhesion produced by GelMA:</p>
                <p class="body-1">
                  $$P=F/S=1.033N/0.38cm^2=2.718N/cm^2=27.18KPa$$
                </p>
                <p class="body-1">
                  <strong>Hydrogel-Mussel Mucin</strong>(GelMA+Mussel
                  mucin(mefp5-2))
                </p>
                <p class="body-1">PCR tube cover area:</p>
                <p class="body-1">$$S=π×r^2=π×(0.35cm)^2=0.38cm^2$$</p>
                <p class="body-1">
                  The total weight of the petri dish, glass beads and weights,
                  i.e. the maximum pull that GelMA+ Mussel mucin can withstand
                  in the experiment:
                </p>
                <p class="body-1">
                  $$ F'=143.54g×9.8kg/N=(143.54/1000)kg×9.8kg/N=1.407N $$
                </p>
                <p class="body-1">
                  The adhesion produced by GelMA + Mussel mucin:
                </p>
                <p class="body-1">
                  $$ P'=F'/S=1.407N/0.38cm^2=3.702N/cm^2=37.02KPa $$
                </p>
                <p class="body-1">The adhesion compared to GelMA alone</p>
                <p class="body-1">
                  $$ \frac {(P'-P)} {P}\% =(37.02KPa-27.18KPa)/27.18KPa×100\%
                  =36.2\% $$
                </p>
                <p class="body-1">
                  The adhesion compared to mussel mucin(mefp5-2) alone
                </p>
                <p class="body-1">
                  $$ \frac {(P'-P)} {P}\% =(37.02KPa-10.26KPa)/10.26KPa×100\%
                  =260.8\% $$
                </p>
                <p class="body-1">
                  The mussel mucin +GELMA system produced a stronger adhesion
                  than GELMA hydrogel alone,which is increased by 36.2% compared
                  with GelMA alone and increased by about 260.8% compared to
                  mussel mucin alone.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Cell survival test </v-card-title>
              <v-card-title class="text-h6">
                Live/dead staining with FDA and PI
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We used FDA( Fluorescein diacetate)/PI(Propidium Iodide) to
                  count the living and dead data of cells and identify the death
                  rate of cells. Under the fluorescence microscope, living cells
                  are dyed green(Fig.11a) and dead cells are dyed red(Fig.11b),
                  and the FDA/PI can enter the hydrogel and dye the cells.
                  (Fig.11a, Fig.11b) Some haloes appear in fluorescent
                  pictures(Fig.11c) because the hydrogel itself has a certain
                  thickness, and the cells are not located on the same plane. We
                  can see different layers of cells by fine adjustment.
                  (Video.2)
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/e/e4/T--ShanghaiTech_China--res--0816-20-07.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.11a: Living cells are dyed green by FDA, the cells
                        are encapsulated into the hydrogel, 20X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/5/51/T--ShanghaiTech_China--res--0816-20-06.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.11b: Dead cells are dyed red by PI, the cells are
                        encapsulated into the hydrogel, 20X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/3/38/T--ShanghaiTech_China--res--0816-04-04.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.11c: Cells encapsulated into the hydrogel, 4X
                        objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-container>
                      <video controls width="100%" style="object-fit: contain">
                        <source src="https://2021.igem.org/wiki/images/a/ad/T--ShanghaiTech_China--res--video_4.mp4" type="video/mp4" />
                      </video>
                    </v-container>
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Video.2: We can see different layers of cells by fine
                        adjustment
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center" align="baseline"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong>Fig.11: FDA/PI staining in hydrogel</strong>
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6"> Phototoxicity test </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We had concerned that 405nm excitation light will kill the
                  cells during the solidification. So we designed a
                  phototoxicity test to see the influence of light. We tested
                  phototoxicity by directly irradiating cells for 10s, 30s and
                  60s. This irradiation time is much longer than the need for
                  curing. And the death rate of cells is very low, indicating
                  very little harm of excitation light to the cells(Fig.12) The
                  surviving rate is calculated by the following equation:
                </p>
                <p class="body-1">
                  $$ R_{Death}=\frac{N_{death}}{N_{live}+N_{death}} $$
                </p>
                <v-img src="https://2021.igem.org/wiki/images/e/e4/T--ShanghaiTech_China--pro--purple.png" contain max-height="600px"/>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.12: Death rate of cells under different UV light
                    exposure time
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Viability of cells in hydrogel
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We first test the short-term viability of cells in the
                  hydrogel, encapsulating the cells into the hydrogel, and do
                  Live/Dead staining every day for a 7-day test. Therefore, we
                  can get scientific survival data of cells living in the
                  hydrogel. (Fig.13)
                </p>
                <v-img src="https://2021.igem.org/wiki/images/6/6e/T--ShanghaiTech_China--res--7_day.png" contain max-height="600px" />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.13: Short-term viability of cells in hydrogel
                  </p>
                </v-row>
                <p class="body-1">
                  To test the Long-term viability of cells in the hydrogel, we
                  encapsulated the cells into the hydrogel and do Live/Dead
                  staining every 3 days for a 21-day test. The survival rate
                  data showed that the cells' survival rate remains 60%, which
                  means the cell can adjust to the hydrogel environment and
                  remain its bioactive abilities. (Fig.14)
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/8/81/T--ShanghaiTech_China--pro--long_term.jpg"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.14: Long-term viability of cells in hydrogel
                  </p>
                </v-row>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="stress">
                  Stress-sensitive regulation system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Overexpressing Piezo1.1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Although some papers have successfully overexpressed Piezo1 or
                  Piezo1.1 in human cell lines, we need to test its transfection
                  productivity and observe its effect on cell
                  morphology(Transfection may influence the cell morphology a
                  lot). Moreover, the Piezo1.1 plasmid is longer than the normal
                  plasmid(13720bp)(Fig.15b), which makes it relatively hard to
                  enter the cells. Piezo1.1 is connected with a red fluorescent
                  protein mRuby2 after it(<a
                    href="http://parts.igem.org/Part:BBa_K3755017"
                    >BBa_K3755017</a
                  >)(Fig.15a). So we firstly transfected the Piezo1.1 plasmid
                  into HEK293 cells to test its expression productivity by red
                  fluorescence and examined cells' morphology. (Fig.15c,
                  Fig.15d)
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/6/66/T--ShanghaiTech_China--res--Piezo1.1.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.15a: Gene circuit of Piezo1.1 overexpression system
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://2021.igem.org/wiki/images/f/fa/T--ShanghaiTech_China--res--mPiezo1.1-mRuby2.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.15b: Plasmid
                        mPiezo1.1-isoform-mRuby2-flag-pcdna3.1(13720bp)
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/a/a8/T--ShanghaiTech_China--imp--0823-04-01.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.15c: Transfected HEK293 cells in a 96 well, the red
                        fluorescence is the mRuby2 after the Piezo1.1, the
                        transfection reagent is lipofectamine2000 from Thermo
                        Fisher Scientific. 4X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/f/fe/T--ShanghaiTech_China--imp--0823-40-01.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.15d: Transfected HEK293 cells, showing normal
                        morphology. The transfection reagent is
                        lipofectamine2000 from Thermo Fisher Scientific. 40X
                        objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.15: Gene circuit of Piezo1.1 and its expression in
                        cells</strong
                      >
                    </p>
                  </v-row>
                </v-row>
                <p class="body-1">
                  Fig.15c shows an obvious red fluorescence, indicating
                  relatively good transfection productivity. And Fig.15d shows a
                  normal cell morphology. These outcomes indicate that the
                  overexpression of Piezo1.1 in HEK293 cells is successful. This
                  is the first step to make a stress-sensitive pathway.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                Activating the Piezo1.1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  After successfully transfecting Piezo1.1 into cells, we tried
                  to activate the Piezo1.1. To indicate the influx of calcium
                  ions, we used a genetically encoded calcium indicator,
                  GCaMP6m, to test whether calcium entered cells after
                  stimulations. Without calcium, GCaMP6m only has very low
                  emitted light. When four calcium ions attach to CaM, the
                  conformation of cpGFP will be changed, which lead to an
                  obvious increase of emitted light at 510nm.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Construction of pEGFP-GCaMP
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We get a GCaMP plasmid from our secondary PI's lab, but it is
                  designed into a cre-loxp system which is impossible to express
                  in HEK293 cells. So we decided to linearize a plasmid backbone
                  from pEGFP-EGFP(<a
                    href="http://parts.igem.org/Part:BBa_K3755023"
                    >BBa_K3755023</a
                  >) which has a CMV promotor and enhancer and get GCaMP6m from
                  pAAV.Syn.Flex.GCaMP6m.WPRE.SV40(<a
                    href="http://parts.igem.org/Part:BBa_K3755032"
                    >BBa_K3755032</a
                  >). Then, we get a pEGFP-GCaMP plasmid which can express in
                  HEK293 cells theoretically.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/0/07/T--ShanghaiTech_China--res--gcamp_vector.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.16a: Gene circuit of GCaMP composite part
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/6/61/T--ShanghaiTech_China--res--pEFP_GCaMP.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.16b: Construction of pEGFP-GCaMP, which is able to
                        express in HEK293 cells
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/7/75/T--ShanghaiTech_China--res--pEGFP-GFP.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.16c: Agarose gel electrophoresis of pEGFP and GFP,
                        getting a plasmid backbone
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/d/df/T--ShanghaiTech_China--res--gcamp.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.16d: Agarose gel electrophoresis of GCaMP6 and
                        Linearized pEGFP
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.16: Construction of a GCaMP plasmid that can
                        express in HEK293 cells</strong
                      >
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Cotransfection of pEGFP-GCaMP and Piezo1.1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  After getting a proper GCaMP plasmid, we firstly test the
                  productivity of GCaMP and Piezo1.1. We tried different
                  cotransfection conditions and found the best concentration of
                  Lipofectamine 2000 reagent and plasmid. (See more details on
                  Protocol pages) Importantly, the cotransfection productivity
                  is largely dependent on the cell state. A bad cell state will
                  cause very low productivity of cotransfection, which is the
                  reason why we fail to see the activation of GCaMP at first.
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/e/e9/T--ShanghaiTech_China--pro--force_4times.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.17a: Green fluorescence of GCaMP after the
                        activation of Piezo1.1 by force, 20X objective,
                        indicating the transfection of pEGFP-GCaMP
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/e/ec/T--ShanghaiTech_China--pro--0930_red.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.17b: Red fluorescence of Piezo1.1-mRuby2, indicating
                        the transfection of Piezo1.1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/4/44/T--ShanghaiTech_China--imp--composite_force.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.17c: Merge of the green channel and red channel,
                        indicating the cotransfection of GCaMP and Piezo1.1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/7/7f/T--ShanghaiTech_China--pro--bright.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.17d: Bright field of the corresponding cells
                        cotransfected with two plasmids
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.17: Cotransfection of pEGFP-GCaMP and
                        Piezo1.1</strong
                      >
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Calcium influx detection
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Small molecule agonist Yoda1 has been proved to be effective
                  in activating Piezo1.11 So we used Yoda1 as a positive control
                  to test the Activation of Piezo1.1 and to see the change of
                  green fluorescence to indicate the calcium influx. The
                  experimental group and positive control group are all cells
                  transfected with Piezo1.1 and GCaMP, the control group is
                  cells transfected with GCaMP and an unrelated plasmid. The
                  positive control group is activated by Yoda1, with a
                  concentration of 50uM(Fig.18). An obvious change of
                  fluorescence is observed after the Yoda1 is added to the
                  well(Video.3). The experimental group is activated by
                  force(Fig.18), which is shear stress to the cells applied by
                  sucking out the culture medium. A faster change of
                  fluorescence is observed after shear stress is given.
                  (Video.4) No obvious change of fluorescence is observed in the
                  control group under the condition of Yoda1 and shear stress.
                  (Video.5)
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/5/54/T--ShanghaiTech_China--res--gcamp_trans.jpg"
                  contain
                  max-height="500px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.18: Experiment procedure to test the calcium influx
                  </p>
                </v-row>
                <v-row justify="center" align="baseline">
                  <v-col cols="4">
                    <v-container>
                      <video controls width="100%" style="object-fit: contain">
                        <source
                          src="https://2021.igem.org/wiki/images/9/96/T--ShanghaiTech_China--imp--fyoda1_8times.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </v-container>
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Video.3: Fluorescence change of cells under the
                        stimulation of 50uM Yoda, exposure time: 90ms, 20X
                        objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
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
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Video.4: Faster fluorescence change of cells under the
                        stimulation of shear stress, exposure time: 90ms, 20X
                        objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-container>
                      <video controls width="100%" style="object-fit: contain">
                        <source src="https://2021.igem.org/wiki/images/1/1f/T--ShanghaiTech_China--imp--control_1.mp4" type="video/mp4" />
                      </video>
                    </v-container>
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Video.5: Faster fluorescence change of cells under the
                        stimulation of shear stress, exposure time: 90ms, 20X
                        objective
                      </p>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Quantitative analysis of fluorescence changes
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To quantitatively analyze the change of fluorescence, we
                  develop a program based on MATLAB(See details on
                  <a href="https://2021.igem.org/Team:ShanghaiTech_China/Model"
                    >Model</a
                  >
                  page) to test the change of fluorescent signal. We also hoped
                  this program will help other teams in the future when using
                  the GCaMP part(BBa_K3755007). We used this program to get the
                  quantitative analysis of fluorescence changes. The curve
                  showed the characteristics of rising first and then falling
                  under the condition of force and Yoda1. (Fig.19b, Fig.19a)
                  This is important to show a decreased fluorescence intensity,
                  which is consistent with the features of Piezo1.1. The control
                  group showed no obvious fluorescence change. (Fig.19c)
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/8/8c/T--ShanghaiTech_China--res--force.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.19a: Relative fluorescence of cells under the
                        stimulation of Yoda1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/a/ab/T--ShanghaiTech_China--res--Yoda1.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.19b: Relative fluorescence of cells under the
                        stimulation of Yoda1
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/e/e9/T--ShanghaiTech_China--res--control.jpg" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.19c: Control group with no obvious fluorescence
                        change
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.19: Relative fluorescence curve obtained by program
                        based on MATLAB</strong
                      >
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5">
                Downstream pathway verification
              </v-card-title>
              <v-card-title class="text-h6">
                Construction of pGL4.30-GFP
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In our application scenario, the activation of Piezo1.1 will
                  cause the influx of calcium ions, then the influx of calcium
                  ion should be able to activate another plasmid, on which an
                  NFAT-RE and Pmin (<a
                    href="http://parts.igem.org/Part:BBa_K3755014"
                    >BBa_K3755014</a
                  >)are placed. We can simply change the gene module after the
                  Pmin to get a different function. In this part, we inserted an
                  EGFP gene after the Pmin(Fig.20a), and use two kinds of
                  fluorescence to colocalize the cells. Similarly, we got the
                  pGL4.30 by linearizing the backbone pGL4.30 and EGFP.
                  (Fig.20c)
                </p>
                <v-row justify="center" align="center">
                  <v-col cols="5">
                    <v-row justify="center">
                      <v-col cols="12">
                        <v-img src="https://2021.igem.org/wiki/images/0/07/T--ShanghaiTech_China--res--PGL4.30.jpg" />
                        <v-row
                          justify="center"
                          style="margin-top: 10px; margin-bottom: 10px"
                        >
                          <p class="body-2 fig">
                            Fig.20a: Gene circuit of pGL4.30-GFP
                          </p>
                        </v-row>
                      </v-col>
                      <v-col cols="12">
                        <v-img src="https://2021.igem.org/wiki/images/1/11/T--ShanghaiTech_China--res--pGL-GFP_Map.png" />
                        <v-row
                          justify="center"
                          style="margin-top: 10px; margin-bottom: 10px"
                        >
                          <p class="body-2 fig">Fig.20b: Map of pGL4.30-EGFP</p>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/b/b2/T--ShanghaiTech_China--res--pGL4.30.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.20c: Agarose gel electrophoresis of EGFP and
                        Linearized pGL4.30
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong>Fig.20: Construction of pGL4.30-GFP</strong>
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Fluorescence colocalization
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  After we successfully get the plasmid pGL4.30-GFP, we tried to
                  use two fluorescent proteins to colocalize the cells. 24 hours
                  after cotransfecting cells with pGL4.30-GFP and Piezo1.1, we
                  apply mechanical stimulation to cells in two ways, sucking out
                  the culture medium or placing it on a horizontal shaker for
                  10min, 200rpm. (Fig.21a) They are both effective ways to
                  stimulate the cells and activate the Piezo1.1. In practice, we
                  observed a green fluorescence in the shaking group under the
                  excitation light of 388nm(Fig.21b) and the colocalization of
                  two fluorescence(Fig.21c, Fig.21d) shows a good cotransfection
                  of the cells.
                </p>
                <v-img src="https://2021.igem.org/wiki/images/0/07/T--ShanghaiTech_China--res--gcamp_vector.jpg" contain max-height="500px"/>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.21a: Experiment procedure of testing the downstream
                    pathway
                  </p>
                </v-row>
                <v-row justify="center" align="baseline">
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/4/40/T--ShanghaiTech_China--res--0928-40-03-green_green.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.21b: Green channel of the cells 24h after shaking,
                        identifying the expression of EGFP, 40X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/a/a6/T--ShanghaiTech_China--res--0928-40-03-green_red.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.21c: Red channel of the cells to identify the
                        Piezo1.1, 40X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/3/36/T--ShanghaiTech_China--res--composite.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.21d: Merge green and red channel to colocalize the
                        cells
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.21: Expression of pGL4.30-GFP and Piezo1.1 after
                        the stimulation of shaking</strong
                      >
                    </p>
                  </v-row>
                </v-row>
                <p class="body-1">
                  The group with stimulation of replacing the culture medium was
                  also observed a fluorescent signal under the green
                  channel.(Fig.22a) and the colocalization is obvious(Fig.22b,
                  Fig.22c). The control group with no stimulation showed no
                  fluorescent signal under the green channel. (Fig.22d)
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/6/6a/T--ShanghaiTech_China--imp--green.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.22a: Green channel of the cells 24h after the
                        stimulation of replacing the culture medium, identifying
                        the expression of EGFP, 40X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/a/a2/T--ShanghaiTech_China--imp--green_red.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.22b: Red channel of the cells to identify the
                        Piezo1.1, 40X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/7/78/T--ShanghaiTech_China--res--composite1.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.22c: Merge green and red channel to colocalize the
                        cells
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://2021.igem.org/wiki/images/1/1c/T--ShanghaiTech_China--res--0902-20-2.73-green.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.22d: Cells with no stimulation and no fluorescent
                        signal is detected by microscope.
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.22: Expression of pGL4.30-GFP and Piezo1.1 after
                        the stimulation of replacing medium and control
                        group.</strong
                      >
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                Activating the pathway in the hydrogel
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To further prove the Piezo1.1-based stress-sensitive
                  regulation system is also useful in our application scenario,
                  we encapsulated cells into hydrogels and applied force to the
                  hydrogel. We want to prove the hydrogel can be a medium for
                  mechanical conduction. Finally, we observe the fluorescent
                  signal of the green channel(Fig.23a) and a good colocalization
                  of two kinds of fluorescent signals(Fig.23b, Fig.23c).
                </p>
                <v-row justify="center" align="baseline">
                  <v-col cols="4">
                    <v-img
                      src="https://2021.igem.org/wiki/images/4/47/T--ShanghaiTech_China--pro--green_hydrogel_green.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.23a: Green channel of the cells 24h after the
                        stimulation of mechanical conduction of hydrogel,
                        identifying the expression of EGFP, 20X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img
                      src="https://2021.igem.org/wiki/images/c/c9/T--ShanghaiTech_China--pro--green_hydrogel_red.png"
                    />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.23b: Red channel of the cells to identify the
                        Piezo1.1, 20X objective
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="4">
                    <v-img src="https://2021.igem.org/wiki/images/4/4c/T--ShanghaiTech_China--pro--composite_something.png" />
                    <v-row
                      justify="center"
                      style="margin-top: 10px; margin-bottom: 10px"
                    >
                      <p class="body-2 fig">
                        Fig.23c: Merge green and red channel to colocalize the
                        cells
                      </p>
                    </v-row>
                  </v-col>
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-1">
                      <strong
                        >Fig.23: Expression of pGL4.30-GFP and Piezo1.1 after
                        mechanical conduction of hydrogel and control
                        group.</strong
                      >
                    </p>
                  </v-row>
                </v-row>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="drug">
                  Drug system
                </v-card-title>
              </v-row>
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
                <!--
                <p class="body-1">| Drug | Function | Reference |</p>
                <p class="body-1">
                  | :----------------: |
                  :---------------------------------------: |
                  :----------------------------------------------------------: |
                </p>
                <p class="body-1">
                  | β-glycerophosphate | Phosphate provision | Gerstenfeld, L.
                  C., Chipman, S. D., Glowacki, J., & Lian, J. B. (1987).
                  Expression of differentiated function by mineralizing cultures
                  of chicken osteoblasts. Developmental biology, 122(1), 49–60.
                  https://doi.org/10.1016/0012-1606(87)90331-9 |
                </p>
                <p class="body-1">
                  | L-ascorbic acid | Collagen biosynthesis | Jeffrey, J. J., &
                  Martin, G. R. (1966). The role of ascorbic acid in the
                  biosynthesis of collagen. I. Ascorbic acid requirement by
                  embryonic chick tibia in tissue culture. Biochimica et
                  biophysica acta, 121(2), 269–280.
                  https://doi.org/10.1016/0304-4165(66)90116-4 |
                </p>
                <p class="body-1">
                  | Dexamethasone | Disputablely believed as RUNX2 activation |
                  Langenbach, F., & Handschel, J. (2013). Effects of
                  dexamethasone, ascorbic acid and β-glycerophosphate on the
                  osteogenic differentiation of stem cells in vitro. Stem cell
                  research & therapy, 4(5), 117. https://doi.org/10.1186/scrt328
                  |
                </p>
                -->
              </v-card-text>
              <v-card-title class="text-h5">
                Drug release experiment
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In this part, we cooperate with CSU_China to do a drug release
                  experiment(See details on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Partnership"
                    >Partnership</a
                  > page). We encapsulated insulin into alginate hydrogel and
                  measured its release rate. The insulin-releasing experiment is
                  measured by Enzyme-Linked Immunosorbent Assay(ELISA). The data
                  collected from the experiment helped us to correct the
                  releasing math model. (See our drug-releasing model on XXX
                  page) . We made a solution of alginate and insulin in a DMEM
                  culture medium, with an insulin concentration of 80ng/ml.
                  After crosslinking, the hydrogel was merged into the DMEM
                  culture medium and we test the insulin concentration in the
                  medium in the following five days. The data is plotted as
                  Fig.24 and this data helped us to correct our modeling(See
                  more on
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Modeling"
                    >Model</a
                  >
                  page)
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/6/63/T--ShanghaiTech_China--pro--insulin.png"
                  contain
                  max-height="400px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Fig.24: The drug release simulation model, based on the
                    insulin encapsulated in the hydrogel
                  </p>
                </v-row>
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
                  [1]: Jie Geng, Wenhao Liu, Heng Zhou, Tingxin Zhang, Li Wang,
                  Mingmin Zhang, Yiran Li, Bo Shen, Xueming Li, Bailong Xiao, A
                  Plug-and-Latch Mechanism for Gating the Mechanosensitive Piezo
                  Channel, Neuron,Volume 106, Issue 3,2020, Pages
                  438-451.e6,ISSN 0896-6273
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
