
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
              <v-card-title class="text-h3"> Result </v-card-title>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  Adhesion system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Construction of plasmid
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We constructed a pET28a-cfaC-mfp5-1 plasmid and a
                  pET28a-mfp5-2-cfaN plasmid(Fig.1a, Fig.1b) , expressing in
                  <i>E.coli</i>. We linearized the pET28a backbone and gene
                  segment to do the homologous recombination. The agarose gel
                  electrophoresis of Mfp5-2-CfaN and CfaC-Mfp5-1 are shown in
                  Fig.1c, linearized pET28a is shown in Fig.1d.
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img
                      src="@/assets/PET28a_cfaC_mfp5_1 Map-16333125300861.png"
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
                      src="@/assets/pet28a_mefp5_2_cfaN Map-16333125424992.png"
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
                    <v-img src="@/assets/C1和2N.png" />
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
                    <v-img src="@/assets/pet28.png" />
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
                Purification of mfp5-1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Before protein purification, we decided to explore the proper
                  induction conditions. So we made two control groups and four
                  experimental groups. In Figure 1, we could find that mfp5-1
                  was successfully expressed in four groups since there was an
                  obvious band between 15-20 kDa compared with blank
                  control(Blank BL21(DE3)) and negative control(Before
                  induction).
                </p>
                <p class="body-1">
                  Notably, there was a slight band in negative control(Before
                  induction). We inferred that leaked expression of mfp5-1 might
                  happen in negative control.
                </p>
                <p class="body-1">
                  <v-img
                    src="@/assets/探索诱导条件.png"
                    contain
                    max-height="600px"
                  />
                </p>
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
                Purification of mfp5-2
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We ran SDS-PAGE after each mfp5-1 purification. Figure 2 A is
                  the results of our first purification. It was obvious that a
                  great amount of mfp5-1 was expressed in BL21 (compared samples
                  of before induction and after induction), and it totally
                  dissolved in the lysis buffer. After elution, we got purified
                  mfp5-1, but some mfp5-1 still remained on nickel medium. Since
                  Figure 2 A lacked flow through and washing samples, we did
                  another purification, which was Figure 2 B.
                </p>
                <p class="body-1">
                  Figure 2 B almost show the same results as Figure 2 A. We
                  could find the band of mfp5-1 in flow through, indicating that
                  the amount of mfp5-1 had saturated nickel medium. Moreover,
                  low concentration imidazole could elute some mfp5-1 as well.
                </p>
                <p class="body-1">
                  We found there was an unexpected band between 20-25 kDa in
                  washing and elution samples(Figure 2 B), which is not shown in
                  Figure 2 A. It may caused by the nickel medium since we used
                  it to purify mfp5-2 before purification of mfp5-1 and did not
                  clear it totally. The band of mfp5-2 is actually between 20-25
                  kDa.
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="@/assets/mfp5-1 第一次纯化.png" />
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
                    <v-img src="@/assets/mfp5-1 第二次纯化.png" />
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
                  purification since they share almost same features except
                  molecular weight. We can find the band of mfp5-2(Figure 3)
                  between 20-25 kDa, suggesting the successful expression of
                  mfp5-2. However, an unexpected band between 15-20 kDa show in
                  many samples, including after induction, supernatant, washing
                  and elution. It did not result from nickel medium since the
                  band also occurred in after induction and supernatant samples.
                  So we inferred that mfp5-2 might break in half during
                  expression since it is a fusion protein made up with two
                  repeats of mfp5-1.
                </p>
                <p class="body-1">
                  <v-img
                    src="@/assets/mfp5-2 第一次纯化.png"
                    contain
                    max-height="600px"
                  />
                </p>
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
                  To characterize as much as possible the viscosity of tyrosine
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
                    <v-img src="@/assets/5-1.png" />
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
                    <v-img src="@/assets/5-11.png" />
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
                  with the PCR tube. The viscosity of the added protein can be
                  calculated by weighing the total weight of the Petri dish and
                  glass beads.（Fig.6a,6b)
                </p>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-img src="@/assets/9{SIIXS9UH`V9G9CNQ84$0P.png" />
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
                    <v-img src="@/assets/5-22.png" />
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
                    <source src="@/assets/粘性测定.mp4" type="video/mp4" />
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
                  <strong>mefp5-2</strong> was improved to 12.83KPa/mg, which was 16.11%
                  higher than that of MEFP5-1.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
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
                  Magnetic Resonance Spectroscopy-1H(NMR-1H), . We can identify
                  the functional group by the chemical shift(Fig.7a) and judge
                  the degrees of methacryloyl modification in terms of relative
                  integral of characteristic peak(Fig.7b)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/GelMA1-1.png" />
                </p>
                <p class="body-1">
                  > Fig.7a: Identifying the functional group by the chemical
                  shift(ppm)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/GelMA2-2.png" />
                </p>
                <p class="body-1">
                  > Fig.7b: Identifying the degrees of methacryloyl modification
                  in terms of relative integral of characteristic peak
                </p>
                <p class="body-1">***<u>Fig.7a, Fig.7b放在一行</u>***</p>
              </v-card-text>
              <v-card-title class="text-h5">
                Rheological properties
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Our ideal osteogenic glue should have a moderate modulus and a
                  rapid polymerization. A moderate modulus(10^3-10^4)is to have
                  a good biocompatibility and a rapid polymerization for a
                  shorter surgery time. To test the rheological properties of
                  our material, we used TA Discovery HR-2 hybrid rheometer to
                  test our material and we found the appropriate ratio of the
                  three components(12.5% GelMA +1.25% Alginate + 4mg/ml Mussel
                  protein)(Fig.8a). We used the UV curing accessories to test
                  the change of modulus during the solidification. We found that
                  the UV curing time is round 2-8s, which is very rapid
                  polymerization(Fig.8b).Moreover, we did the oscillation sweep
                  to test its other rheological properties(Fig.8c, Fig.8d), the
                  oscillation test showed our material can keep the modulus
                  under 75% oscillation strain , bearing the biggest 300%
                  oscillation strain, which is qualified to be an osteogenic
                  glue.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/流变1.png" />
                </p>
                <p class="body-1">
                  > Fig.8a: A moderate modulus by changing the ratio of the
                  three components
                </p>
                <p class="body-1">
                  <v-img src="@/assets/流变2.png" />
                </p>
                <p class="body-1">
                  > Fig.8b: A rapid UV polymerization, costing only 2-8s
                </p>
                <p class="body-1">
                  <v-img src="@/assets/2.png" />
                </p>
                <p class="body-1">
                  > Fig.8c: Modulus / Angular frequency curve of MIBOM
                </p>
                <p class="body-1">
                  <v-img src="@/assets/3.png" />
                </p>
                <p class="body-1">
                  > Fig.8d: Modulus / Oscillation strain curve of MIBOM
                </p>
                <p class="body-1">
                  **Fig.8: Rheological properties of the MIBOM**
                </p>
                <p class="body-1">
                  ***<u>Fig.8a, Fig.8b放在一行，Fig.8c, Fig.8d放在一行</u>***
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                Mechanical Test of hydrogel + Mfp
              </v-card-title>
              <v-card-title class="text-h6">
                **Determinate the viscosity of hydrogel and hydrogel-mussel
                mucin mixture system**
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to compare the viscosity and mechanical strength of
                  Hydrogel system and Hydrogel-Mussel mucin system , the same
                  way as in the last experiment was used to measure the
                  viscosity.
                </p>
                <p class="body-1">
                  We measured the viscosity of the hydrogel alone. 50ul hydrogel
                  (GelMA or Hydrogel-Mussel mucin: GelMA+Mussel
                  mucin(mefp5-2))was used to glue the PCR tube cap with a
                  diameter of 7mm along with the tube body to the center of the
                  petri dish. (Fig. 9a)The viscosity of GelMA was measured after
                  curing with UV lamp for 15 seconds. (Fig. 9b)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/1-4.png" />
                </p>
                <p class="body-1">
                  > Fig. 9a: Glue the PCR tube to the petri dish with GelMA or
                  GelMA+Mussel mucin
                </p>
                <p class="body-1">
                  <v-img src="@/assets/1-5.png" />
                </p>
                <p class="body-1">
                  > Fig.9b: Use UV light to cure GelMA or GelMA+Mussel mucin
                </p>
                <p class="body-1">
                  **Fig.9: Mechanical test of GelMA+mussel protein**
                </p>
                <p class="body-1">***<u>9a和9b以及描述文字并排排列</u>***</p>
                <p class="body-1">
                  In order to prevent the sliding of the added glass beads from
                  changing the overall center of gravity, which results in
                  uneven forces on the contact surface between the PCR tube and
                  the petri dish, double-sided adhesive was affixed to the
                  bottom of the petri dish to fix the position of the glass
                  beads and stabilize the center of gravity(Fig.10a). Glass
                  beads and weights were added to the petri dish one by one
                  until the PCR tube separated from the petri dish(Fig.10b).
                </p>
                <p class="body-1">
                  <v-img src="@/assets/1-6.png" />
                </p>
                <p class="body-1">
                  > Fig.10a: Fill the petri dish one by one with glass beads and
                  weights.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/1-1.png" />
                </p>
                <p class="body-1">
                  > Fig.10b: Record the weight of glass beads when separated
                  petri dish from PCR tube
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Calculating results </v-card-title>
              <v-card-text>
                <p class="body-1">**Hydrogel system**:</p>
                <p class="body-1">- PCR tube cover area：</p>
                <p class="body-1">$$</p>
                <p class="body-1">S=π×r^2=π×(0.35cm)^2=0.38cm^2</p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  - The total weight of the petri dish, glass beads and weights,
                  i.e. the maximum pull that GelMA can withstand in the
                  experiment：
                </p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  F=105.47g×9.8kg/N=(105.47/1000)kg×9.8kg/N=1.033N
                </p>
                <p class="body-1">$$</p>
                <p class="body-1">- The viscosity produced by GelMA：</p>
                <p class="body-1">$$</p>
                <p class="body-1">P=F/S=1.033N/0.38cm^2=2.718N/cm^2=27.18KPa</p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  **Hydrogel-Mussel Mucin**( GelMA+Mussel mucin(mefp5-2))
                </p>
                <p class="body-1">- PCR tube cover area：</p>
                <p class="body-1">$$</p>
                <p class="body-1">S=π×r^2=π×(0.35cm)^2=0.38cm^2</p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  - The total weight of the petri dish, glass beads and weights,
                  i.e. the maximum pull that GelMA+ Mussel mucin can withstand
                  in the experiment：
                </p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  F=143.54g×9.8kg/N=(143.54/1000)kg×9.8kg/N=1.407N
                </p>
                <p class="body-1">$$</p>
                <p class="body-1">- The viscosity produced by GelMA：</p>
                <p class="body-1">$$</p>
                <p class="body-1">P=F/S=1.407N/0.38cm^2=3.702N/cm^2=37.02KPa</p>
                <p class="body-1">$$</p>
                <p class="body-1">- The viscosity compared to GelMA alone</p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  \frac {(P'-P)} {P}\% =(37.02KPa-27.18KPa)/27.18KPa×100\%
                  =36.2\%
                </p>
                <p class="body-1">$$</p>
                <p class="body-1">
                  - The viscosity compared to mussel mucin(mefp5-2) alone
                </p>
                <p class="body-1">
                  $$ \frac {(P'-P)} {P}\% =(37.02KPa-10.26KPa)/10.26KPa×100\%
                  =260.8\% $$
                </p>
                <p class="body-1">
                  The mussel mucin +GELMA system produced a stronger viscosity
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
                  and the FDA/PI can enter the hydrogel and dye the
                  cells.(Fig.11a, Fig.11b) Some haloes appear in fluorescent
                  pictures(Fig.11c), because the hydrogel itself has a certain
                  thickness, and the cells are not located on the same plane. We
                  can see different layers of cells by fine adjustment.(Video.3)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0816-20-07.png" />
                </p>
                <p class="body-1">
                  > Fig.11a: Living cells are dyed green by FDA, the cells are
                  encapsulated into the hydrogel, 20X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0816-20-06.png" />
                </p>
                <p class="body-1">
                  > Fig.11b: Dead cells are dyed red by PI, the cells are
                  encapsulated into the hydrogel, 20X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0816-04-04.png" />
                </p>
                <p class="body-1">
                  > Fig.11c: Cells encapsulated into the hydrogel, 4X objective
                </p>
                <p class="body-1">
                  <video id="video" controls="" preload="none">
                    <source id="mp4" src="录像_4.mp4" type="video/mp4" />
                  </video>
                </p>
                <p class="body-1">
                  > Video.2: We can see different layers of cells by fine
                  adjustment
                </p>
                <p class="body-1">**Fig.11: FDA/PI staining in hydrogel**</p>
                <p class="body-1">
                  ***<u>Fig.3a, Fig.3b放一行，剩下一个图片和视频放一行</u>***
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Phototoxicity test </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We had concerned that 405nm excitation light will kill the
                  cells during the solidification. So we designed a
                  phototoxicity test to see the influence of light. We tested
                  phototoxicity by directly irradiating cells for 10s, 30s and
                  60s. This irradiation time is much longer than the need of
                  curing. And the death rate of cells is very low, indicating
                  very little harm of excitation light to the cells(Fig.12) The
                  surviving rate is calculated by the following equation:
                </p>
                <p class="body-1">
                  $$ R_{surviving}=\frac{N_{live}}{N_{live}+N_{death}} $$
                </p>
                <p class="body-1">
                  <v-img src="@/assets/紫外.png" />
                </p>
                <p class="body-1">
                  > Fig.12: Death rate of cells under different UV light
                  exposure time
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Viability of cells in hydrogel
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We first test the short-term viability of cells in hydroge, we
                  encapsulated the cells into the hydrogel and do Live/Dead
                  staining every day for 7-day test. Therefore, we can get a
                  scientific survival data of cells living in the
                  hydrogel.(Fig.13)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/7 day.png" />
                </p>
                <p class="body-1">
                  > Fig.13: Short-term viability of cells in hydrogel
                </p>
                <p class="body-1">
                  To test the Long-term viability of cells in hydrogel, we
                  encapsulated the cells into the hydrogel and do Live/Dead
                  staining every 3 days for 21-day test. The survival rate data
                  showed that the cells' survival rate remains 60%, which means
                  the cell can adjust to the hydrogel environment and remain its
                  bioactive abilities.(Fig.14)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Long term.jpg" />
                </p>
                <p class="body-1">
                  > Fig.14: Long-term viability of cells in hydrogel
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  Stress-sensitive regulation system
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                Overexpressing Piezo1.1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Although some papers have successfully overexpress Piezo1 or
                  Piezo1.1 in human cell lines, we need to test its transfection
                  productivity and observe its effect on cell
                  morphology(Transfection may influence the cell morphology a
                  lot). Moreover, Piezo1.1 plasmid is longer than normal
                  plasmid(13720bp)(Fig.15b), which makes it relatively hard to
                  enter the cells. Piezo1.1 is connected with a red fluorescent
                  protein mRuby2 after it(Composite parts: CMV
                  promoter+mPiezo1.1+mRuby2+bGH PolyA signal)(Fig.15a). So we
                  firstly transfected the Piezo1.1 plasmid into HEK293 cells to
                  test its expression productivity by red fluorescence and
                  examined cells' morphology.(Fig.15c, Fig.15d)
                  <v-img src="@/assets/Piezo1.1.jpg" />
                </p>
                <p class="body-1">
                  > Fig.15a: Gene circuit of Piezo1.1 overexpression system
                </p>
                <p class="body-1">
                  <v-img
                    src="@/assets/mPiezo1.1-isoform-mRuby2-flag-pcdna3.1 Map.png"
                  />
                </p>
                <p class="body-1">
                  > Fig.15b: Plasmid
                  mPiezo1.1-isoform-mRuby2-flag-pcdna3.1(13720bp)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0823-04-01.png" />
                </p>
                <p class="body-1">
                  > Fig.15c: 4X transfected HEK293 cells in a 96 well, the red
                  fluorescence is the mRuby2 after the Piezo1.1, the
                  transfection reagent is lipofectamine2000 from Thermo Fisher
                  Scientific.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0823-40-01.png" />
                </p>
                <p class="body-1">
                  > Fig.15d: 40X transfected HEK293 cells, showing normal
                  morphology. The transfection reagent is lipofectamine2000 from
                  Thermo Fisher Scientific
                </p>
                <p class="body-1">
                  ***<u>Fig.15a, Fig.15b放在一行，Fig.15c 和 Fig. 15d放在一行</u
                  >***
                </p>
                <p class="body-1">
                  **Fig.15: Gene circuit of Piezo1.1 and its expression in
                  cells**
                </p>
                <p class="body-1">
                  Fig.15c shows an obvious red fluorescence, indicating a
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
                  ion, we used a genetically encoded calcium indicator, GCaMP6m,
                  to test whether calcium entered cells after stimulations.
                  Without calcium, GCaMP6m only has very low emitted light. When
                  four calcium ions attach to CaM, the conformation of cpGFP
                  will be changed, which lead to an obvious increase of emitted
                  light at 510nm.
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
                  from pEGFP-EGFP(BBa_K3755023) which has a CMV promotor and
                  enhancer and get GCaMP6m from
                  pAAV.Syn.Flex.GCaMP6m.WPRE.SV40(BBa_K3755032). Then, we get a
                  pEGFP-GCaMP plasmid which can express in HEK293 cells
                  theoretically.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/GCaMP vector.png" />
                </p>
                <p class="body-1">
                  > Fig.16a: Gene circuit of GCaMP composite part
                </p>
                <p class="body-1">
                  <v-img src="@/assets/pEGFP_GCaMP Map.png" />
                </p>
                <p class="body-1">
                  > Fig.16b: Construction of pEGFP-GCaMP, which is able to
                  express in HEK293 cells
                </p>
                <p class="body-1">
                  <v-img src="@/assets/pEGFP-GFP-16331357931311.png" />
                </p>
                <p class="body-1">
                  > Fig.16c: Agarose gel electrophoresis of pEGFP and GFP,
                  getting a plasmid backbone
                </p>
                <p class="body-1">
                  <v-img src="@/assets/GcaMP.png" />
                </p>
                <p class="body-1">
                  > Fig.16d: Agarose gel electrophoresis of GCaMP6 and
                  Linearized pEGFP
                </p>
                <p class="body-1">
                  ***<u>Fig.16a, Fig.16b放在一行, Fig.16c, Fig.16d放在同一行</u
                  >***
                </p>
                <p class="body-1">
                  **Fig.16: Construction of a GCaMP plasmid that can express in
                  HEK293 cells**
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Cotransfection of pEGFP-GCaMP and Piezo1.1
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  After getting a proper GCaMP plasmid, we firstly test the
                  productivity of GCaMP and Piezo1.1. We tried different
                  cotransfection conditions and found the best concentration of
                  Lipofectamine 2000 reagent and plasmid.(See more details on
                  Protocol pages) Importantly, the cotransfection productivity
                  is largely depend on cell state. Bad cell state will cause a
                  very low productivity of cotransfection, which is the reason
                  why we fail to see the activation of GCaMP at first.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/force 4times.png" />
                </p>
                <p class="body-1">
                  > Fig.17a: Green fluorescence of GCaMP after the activation of
                  Piezo1.1 by force, 20X objective, indicating the transfection
                  of pEGFP-GCaMP
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0930 red 20 02.png" />
                </p>
                <p class="body-1">
                  > Fig.17b: Red fluorescence of Piezo1.1-mRuby2, indicating the
                  transfection of Piezo1.1
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Composite force.png" />
                </p>
                <p class="body-1">
                  > Fig.17c: Merge of the green channel and red channel,
                  indicating the cotransfection of GCaMP and Piezo1.1
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0930 bright 20 02.png" />
                </p>
                <p class="body-1">
                  > Fig.17d: Bright field of the corresponding cells
                  cotransfected with two plasmids
                </p>
                <p class="body-1">
                  **Fig.17: Cotransfection of pEGFP-GCaMP and Piezo1.1**
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Calcium influx detection
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Small molecule agonist Yoda1 has been proved to be effective
                  in activating Piezo1.1[^1] So we used Yoda1 as a positive
                  control to test the Activation of Piezo1.1 and to see the
                  change of green fluorescence to indicate the calcium influx.
                  The experimental group and positive control group are all
                  cells transfected with Piezo1.1 and GCaMP, the control group
                  is cells transfected with GCaMP and an unrelated plasmid. The
                  positive control group is activated by Yoda1, with a
                  concentration of 50uM(Fig.18). An obvious change of
                  fluorescence is observed after the Yoda1 is added into the
                  well(Video.3). The experimental group is activated by
                  force(Fig.18), which is a shear stress to the cells applied by
                  sucking out the culture medium. A faster change of
                  fluorescence is observed after shear stress is given.(Video.4)
                  No obvious change of fluorescence is observed in control group
                  under the condition of Yoda1 and shear stress.(Video.5)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Gcamp共转实验-16331481926033.png" />
                </p>
                <p class="body-1">
                  > Fig.18: Experiment procedure to test the calcium influxa
                </p>
                <p class="body-1">
                  <video id="video" controls="" preload="none">
                    <source id="mp4" src="Yoda1 8times.mp4" type="video/mp4" />
                  </video>
                </p>
                <p class="body-1">
                  > Video.3: Fluorescence change of cells under the stimulation
                  of 50uM Yoda, exposure time: 90ms, 20X objective
                </p>
                <p class="body-1">
                  <video id="video" controls="" preload="none">
                    <source id="mp4" src="force 4times.mp4" type="video/mp4" />
                  </video>
                </p>
                <p class="body-1">
                  > Video.4: Faster fluorescence change of cells under the
                  stimulation of shear stress, exposure time: 90ms, 20X
                  objective
                </p>
                <p class="body-1">
                  <video id="video" controls="" preload="none">
                    <source id="mp4" src="control_1.mp4" type="video/mp4" />
                  </video>
                </p>
                <p class="body-1">
                  > Video.5: Fluorescence change of cells in control group,
                  exposure time: 90ms, 20X objective
                </p>
                <p class="body-1">
                  ***<u>Fig.18放在第一行，剩下三个Video放在同一行</u>***
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Quantitative analysis of fluorescence changes
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To quantitatively analyse the change of fluorescence, we
                  develop a program based on MATLAB(See details on XXX page) to
                  test the change of fluorescent signal. We also hoped this
                  program will help other teams in the future when using GCaMP
                  part(BBa_K3755007). We used this program to get the
                  quantitative analysis of fluorescence changes. The curve
                  showed the characteristics of rising first and then falling
                  under the condition of Yoda1.(Fig.19a) This is important to
                  show a decreased fluorescence intensity, which is consistent
                  with the features of Piezo1.1. The control group showed no
                  obvious fluorescence change.(Fig.19b)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Yoda1.jpg" />
                </p>
                <p class="body-1">
                  > Fig.19a: Relative fluorescence of cells under the
                  stimulation of Yoda1
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Control.jpg" />
                </p>
                <p class="body-1">
                  > Fig.19b: Control group with no obvious fluorescence change
                </p>
                <p class="body-1">***<u>Fig.19a, Fig.19b 放在同一行</u>***</p>
                <p class="body-1">
                  **Fig.19: Relative fluorescence curve obtained by program
                  based on MATLAB**
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                Pathway verification
              </v-card-title>
              <v-card-title class="text-h6">
                Construction of pGL4.30-GFP
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In our application scenario, the activation of Piezo1.1 will
                  cause the influx of calcium ion, then the influx of calcium
                  ion should be able to activate another plasmid, on which a
                  NFAT-RE and Pmin is placed. We can simply change the gene
                  module after the Pmin to get a different function. In this
                  part, we inserted a EGFP gene after the Pmin(Fig.20a), and use
                  two kinds of fluorescence to colocalize the cells. Similarly,
                  we got the pGL4.30 by linearizing the backbone pGL4.30 and
                  EGFP.(Fig.20c)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/PGL4.30.jpg" />
                </p>
                <p class="body-1">> Fig.20a: Gene circuit of pGL4.30-GFP</p>
                <p class="body-1">
                  <v-img src="@/assets/pGL-GFP Map.png" />
                </p>
                <p class="body-1">> Fig.20b: Map of pGL4.30-EGFP</p>
                <p class="body-1">
                  <v-img src="@/assets/pGL4.30.png" />
                </p>
                <p class="body-1">
                  > Fig.20c: Agarose gel electrophoresis of EGFP and Linearized
                  pGL4.30
                </p>
                <p class="body-1">
                  ***<u>Fig.20a and Fig.20b放在一列，然后右边放Fig.20c</u>***
                </p>
                <p class="body-1">**Fig.20: Construction of pGL4.30-GFP**</p>
              </v-card-text>
              <v-card-title class="text-h6">
                Fluorescence colocalization
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  After we successfully get the plasmid pGL4.30-GFP, we tried to
                  use two fluorescent protein to colocalize the cells. 24 hours
                  after cotransfecting cells with pGL4.30-GFP and Piezo1.1, we
                  apply mechanical stimulation to cells in two ways, sucking out
                  the culture medium or placing it on a horizontal shaker for
                  10min, 200rpm.(Fig.21a) They are both effective ways to
                  stimulate the cells and activate the Piezo1.1. In practical,
                  we observed a green fluorescence in shaking group under the
                  excitation light of 388nm(Fig.21b) and the colocalization of
                  two fluorescence(Fig.21c, Fig.21d) shows a good cotransfection
                  of the cells.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/下游测试.png" />
                </p>
                <p class="body-1">
                  > Fig.21a: Experiment procedure of testing the downstream
                  pathway
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0928-40-03-green.png (green).png" />
                </p>
                <p class="body-1">
                  > Fig.21b: Green channel of the cells 24h after shaking,
                  identifying the expression of EGFP, 40X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0928-40-03-green.png (red).png" />
                </p>
                <p class="body-1">
                  > Fig.21c: Red channel of the cells to identify the Piezo1.1,
                  40X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Composite.png" />
                </p>
                <p class="body-1">
                  > Fig.21d: Merge green and red channel to colocalize the cells
                </p>
                <p class="body-1">
                  **Fig.21: Expression of pGL4.30-GFP and Piezo1.1 after the
                  stimulation of shaking**
                </p>
                <p class="body-1">
                  ***<u>Fig.5a 单独一行，Fig.5b, Fig.5c, Fig.5d三个放在一行</u
                  >***
                </p>
                <p class="body-1">
                  Group with a stimulation of replacing the culture medium was
                  also observed a fluorescent signal under green
                  channel.(Fig.22a) and the colocalization is obvious(Fig.22b,
                  Fig.22c). The control group with no stimulation showed no
                  fluorescent signal under green channel.(Fig.22d)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0903-40-5s-green.png (green).png" />
                </p>
                <p class="body-1">
                  > Fig.22a: Green channel of the cells 24h after the
                  stimulation of replacing the culture medium, identifying the
                  expression of EGFP, 40X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0903-40-5s-green.png (red).png" />
                </p>
                <p class="body-1">
                  > Fig.22b: Red channel of the cells to identify the Piezo1.1,
                  40X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Composite1.png" />
                </p>
                <p class="body-1">
                  > Fig.22c: Merge green and red channel to colocalize the cells
                </p>
                <p class="body-1">
                  <v-img src="@/assets/0902-20-2.73-green.png" />
                </p>
                <p class="body-1">
                  > Fig.22d: Cells with no stimulation and no fluorescent signal
                  is detected by microscope.
                </p>
                <p class="body-1">
                  **Fig.22: Expression of pGL4.30-GFP and Piezo1.1 after the
                  stimulation of replacing medium and control group.**
                </p>
                <p class="body-1">
                  ***<u>上面四张图片放在一行，或者前两个一行，后两张一行</u>***
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Activating the pathway in the hydrogel
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To further prove the Piezo1.1-based stress sensitive
                  regulation system is also useful in our application scenario,
                  we encapsulated cells into hydrogels and applied force to the
                  hydrogel. We want to prove the hydrogel can be a medium for
                  mechanical conduction. Finally, we observe the fluorescent
                  signal of green channel(Fig.23a) and a good colocalization of
                  two kinds of fluorescent signal(Fig.23b, Fig.23c).
                </p>
                <p class="body-1">
                  <v-img
                    src="@/assets/0903-40-green-hydrogel-7.5s.png (green).png"
                  />
                </p>
                <p class="body-1">
                  > Fig.23a: Green channel of the cells 24h after the
                  stimulation of mechanical conduction of hydrogel, identifying
                  the expression of EGFP, 20X objective
                </p>
                <p class="body-1">
                  <v-img
                    src="@/assets/0903-40-green-hydrogel-7.5s.png (red).png"
                  />
                </p>
                <p class="body-1">
                  > Fig.23b: Red channel of the cells to identify the Piezo1.1,
                  20X objective
                </p>
                <p class="body-1">
                  <v-img src="@/assets/Composite-16331936792826.png" />
                </p>
                <p class="body-1">
                  > Fig.23c: Merge green and red channel to colocalize the cells
                </p>
                <p class="body-1">
                  Fig.23: Expression of pGL4.30-GFP and Piezo1.1 after
                  mechanical conduction of hydrogel and control group.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title"> Drug system </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> Drug choices </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We interviewed some experts and looked through papers to
                  identify some drugs that are beneficial to the bone repair, we
                  collected these data and compiled them into the following
                  table:
                </p>
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
              </v-card-text>
              <v-card-title class="text-h5">
                Drug release experiment
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  This part we cooperate with CSU_China to do a drug release
                  experiment(See details on XXXX page). We encapsulated insulin
                  into alginate hydrogel and measured its release rate. Insulin
                  releasing experiment is measured by Enzyme Linked
                  Immunosorbent Assay(ELISA). The data collected from the
                  experiment helped us to correct the releasing math model.(See
                  our drug releasing model on XXX page) . We made a solution of
                  alginate and insulin in DMEM culture medium, with a insulin
                  concentration of 80ng/ml. After crosslinking, the hydrogel was
                  merged into the DMEM culture medium and we test the insulin
                  concentration in the medium in the following five days. The
                  data is ploted as Fig.24 and this data helped us to correct
                  our modelng(See more on Modeling page)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/insulin.png" />
                </p>
                <p class="body-1">
                  > Fig.24: The drug release simulation model, based on the
                  insulin encapsulated in the hydrogel
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title"> Reference </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  [^1]: Jie Geng, Wenhao Liu, Heng Zhou, Tingxin Zhang, Li Wang,
                  Mingmin Zhang, Yiran Li, Bo Shen, Xueming Li, Bailong Xiao, A
                  Plug-and-Latch Mechanism for Gating the Mechanosensitive Piezo
                  Channel, Neuron,Volume 106, Issue 3,2020, Pages
                  438-451.e6,ISSN 0896-6273
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
