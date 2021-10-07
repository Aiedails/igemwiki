
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
Proof of concept
</v-card-title>
<v-row justify="center"> <v-card-title class="text-h4 title">
Overview
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
This year, ShanghaiTech_China developed a new osteogenic glue with a mechanical sensory regulation system. To prove the concept and get a reliable product, we a series of experiments to prove the system is practicable. The results have almost fully convinced our concept.  See more experiment designs on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Design">Design</a> page, and more results on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a> page.
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Adhesion system
  </v-card-title>
</v-row>
<v-card-title class="text-h5">
Expressing Mfp in *E.coli*
</v-card-title>
<v-card-text>
  <p class = "body-1">
For the adhesion system, we firstly proved that *E.coli* can be a high-yield expression chasis for Mfp. We construct two kinds of mfp5 expression systems to prove the improvement of mfp5(See details on <a href="https://2021.igem.org/Team:ShanghaiTech_China/Improvement">Improvement</a> page). We have explored the induction conditions of the Mfp-expression system(Fig.1a) and successfully purified the mfp5-1 and Mfp5-2(Fig.1b, Fig.1c). These results show that *E.coli* can be a high-yield expression chasis for Mfp.
</p>
<p class = "body-1">
<v-img src="@/assets/探索诱导条件.png" />
</p>
<p class = "body-1">
> Fig.1a: SDS-PAGE of mfp5-1 expression in different induction conditions
</p>
<p class = "body-1">
<v-img src="@/assets/mfp5-1 第一次纯化.png" />
</p>
<p class = "body-1">
> Fig.1b: SDS-PAGE of first purification of mfp5-1
</p>
<p class = "body-1">
<v-img src="@/assets/mfp5-2 第一次纯化.png" />
</p>
<p class = "body-1">
> Fig.1c: SDS-PAGE of first purification of mfp5-2
</p>
<p class = "body-1">
**Fig.1: The expression of mfp5-1 and mfp5-2 in *E.coli*** 
</p>
<p class = "body-1">
***<u>(a,b,c放在同一行)</u>***
</p>
</v-card-text>
<v-card-title class="text-h5">
Mechanical test of Mfp
</v-card-title>
<v-card-text>
  <p class = "body-1">
After extracting the Mfp, we then tested its mechanical properties in our application scenario. We used the common PCR tube and the tube cover and attached them by Mfp after drying in a 37-degree oven for 48 hours(The mussel protein solution does not have the adhesive ability, that is why we introduce a hydrogel system below).  The adhesion of mfp5-1 is measured as 11.05KPa/mg and mfp5-2 is measured as 12.83KPa/mg, which proved the improvement of mfp5-2 compared to mfp5-1. See more details on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a> page.
</p>
<p class = "body-1">
<v-img src="@/assets/5-1.png" />
</p>
<p class = "body-1">
> Fig.2a: Add 20ul of protein solution to the center of the petri dish.
</p>
<p class = "body-1">
<v-img src="@/assets/5-11-16334099544521.png" />
</p>
<p class = "body-1">
> Fig.2b: Attach PCR tube to the center of the petri dish
</p>
<p class = "body-1">
<v-img src="@/assets/9{SIIXS9UH`V9G9CNQ84$0P.png" />
</p>
<p class = "body-1">
> Fig.2c: Fill the petri dish one by one with glass beads.
</p>
<p class = "body-1">
<v-img src="@/assets/5-22.png" />
</p>
<p class = "body-1">
> Fig.2d: Record the weight of glass beads when separating petri dish from PCR tube.
</p>
<p class = "body-1">
**Fig.2: Testing the mechanical properties of Mfp in application scenario**
</p>
<p class = "body-1">
***<u>(a,b放在同一行，c,d放在同一行)</u>***
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Hydrogel system
  </v-card-title>
</v-row>
<v-card-title class="text-h5">
Preparation of GelMA
</v-card-title>
<v-card-text>
  <p class = "body-1">
Gelatin-methacryloyl(GelMA) is prepared by adding acrylic anhydride to the gelatin solution. Functional groups and degrees of methacryloyl modification are measured by Nuclear Magnetic Resonance Spectroscopy-1H(NMR-1H). 
</p>
<p class = "body-1">
<v-img src="@/assets/GelMA1-1.png" />
</p>
<p class = "body-1">
> Fig.3a: Identifying the functional group by the chemical shift(ppm)
</p>
<p class = "body-1">
<v-img src="@/assets/GelMA2-2.png" />
</p>
<p class = "body-1">
> Fig.3b: Identifying the degrees of methacryloyl modification in terms of relative integral of characteristic peak
</p>
<p class = "body-1">
Fig.3 Preparation of Gelatin-methacryloyl(GelMA)
</p>
</v-card-text>
<v-card-title class="text-h5">
Rheological properties
</v-card-title>
<v-card-text>
  <p class = "body-1">
Our ideal osteogenic glue should have a moderate modulus and rapid polymerization. A moderate modulus(10^3-10^4)is to have good biocompatibility and rapid polymerization for a shorter surgery time. To test the rheological properties of our material, we used the TA Discovery HR-2 hybrid rheometer to test our material and we found the appropriate ratio of the three components(12.5% GelMA +1.25% Alginate + 4mg/ml Mussel protein)(Fig.4a). We used UV curing accessories to test the change of modulus during the solidification. We found that the UV curing time is around 2-8s, which is very rapid polymerization(Fig.4b). Moreover, we did the oscillation sweep to test its other rheological properties(Fig.4c, Fig.4d), the oscillation test showed our material can keep the modulus under 75% oscillation strain, bearing the biggest 300% oscillation strain, which is qualified to be an osteogenic glue. 
</p>
<p class = "body-1">
<v-img src="@/assets/流变1.png" />
</p>
<p class = "body-1">
> Fig.4a: A moderate modulus by changing the ratio of the three components
</p>
<p class = "body-1">
<v-img src="@/assets/流变2.png" />
</p>
<p class = "body-1">
> Fig.4b: A rapid UV polymerization, costing only 2-8s
</p>
<p class = "body-1">
<v-img src="@/assets/2.png" />
</p>
<p class = "body-1">
> Fig.4c: Modulus / Angular frequency curve of MIBOM
</p>
<p class = "body-1">
<v-img src="@/assets/3.png" />
</p>
<p class = "body-1">
> Fig.4d: Modulus / Oscillation strain curve of MIBOM
</p>
<p class = "body-1">
**Fig.8: Rheological properties of the MIBOM**
</p>
</v-card-text>
<v-card-title class="text-h5">
Mechanical Test of hydrogel + Mfp
</v-card-title>
<v-card-text>
  <p class = "body-1">
To make a UV-crosslinking osteogenic glue, we combined the hydrogel system and adhesion system. We then used the same method to test the mechanical properties of hydrogel + Mfp in the application scenario. The adhesion of the GelMA+ Mfp system is measure as 37.02 *KPa* and the adhesion of GelMA only is measure as 27.18 *KPa*. The mussel mucin +GELMA system produced a stronger adhesion than GELMA hydrogel alone, which is increased by 36.2% compared with GelMA alone and increased by about 260.8% compared with mussel mucin alone. See more details on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a> page.
</p>
<p class = "body-1">
<v-img src="@/assets/1-4.png" />
</p>
<p class = "body-1">
> Fig.5a: Glue the PCR tube to the petri dish with GelMA or GelMA+Mussel mucin
</p>
<p class = "body-1">
<v-img src="@/assets/1-5.png" />
</p>
<p class = "body-1">
> Fig.5b: Use UV light to cure GelMA or GelMA+Mussel mucin
</p>
<p class = "body-1">
<v-img src="@/assets/1-6.png" />
</p>
<p class = "body-1">
> Fig.5c: Fill the petri dish one by one with glass beads and weights.
</p>
<p class = "body-1">
<v-img src="@/assets/1-1.png" />
</p>
<p class = "body-1">
> Fig.5d: Record the weight of glass beads when separated petri dish from PCR tube
</p>
<p class = "body-1">
**Fig.5: Mechanical Test of GelMA + Mfp system** 
</p>
<p class = "body-1">
***<u>(a,b 放在同一行，c,d放在同一行)</u>***
</p>
</v-card-text>
<v-card-title class="text-h5">
Cell survival test
</v-card-title>
<v-card-title class="text-h6">
Phototoxicity test
</v-card-title>
<v-card-text>
  <p class = "body-1">
We had concerned that 405nm excitation light will kill the cells during the solidification. So we designed a phototoxicity test to see the influence of light. The death rate calculated showed a very small influence on cells(Fig.6a).
</p>
<p class = "body-1">
<v-img src="@/assets/紫外-16334114370682.png" />
</p>
<p class = "body-1">
> Fig.6: Death rate  of cells under different UV light exposure time
</p>
</v-card-text>
<v-card-title class="text-h6">
Viability of cells in hydrogel
</v-card-title>
<v-card-text>
  <p class = "body-1">
In our design, cells need to be encapsulated into the hydrogel and keep bioactive for a long time. So we do 7-day and 21-day viability of cells in hydrogel to indicate the short-term and long-term viability of cells in the hydrogel. (Fig.7a, Fig.7b)
</p>
<p class = "body-1">
<v-img src="@/assets/7 day.png" />
</p>
<p class = "body-1">
> Fig.7a: Short-term viability of cells in hydrogel
</p>
<p class = "body-1">
<v-img src="@/assets/Long term.jpg" />
</p>
<p class = "body-1">
> Fig.7b: Long-term viability of cells in hydrogel
</p>
<p class = "body-1">
***<u>(a,b放在同一行)</u>***
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Stress-sensitive regulation system 
  </v-card-title>
</v-row>
<v-card-title class="text-h5">
Overexpressing Piezo1.1 in HEK293 cells 
</v-card-title>
<v-card-text>
  <p class = "body-1">
Piezo1.1 is a kind of stress-sensitive membrane protein, we aim to build a Piezo1.1 overexpression cell line to feel the stress and then degrade the hydrogel. We firstly overexpressed the Piezo1.1 in HEK293 cells and find good transfection productivity and relatively good cell morphology. (Fig.8a, Fig.8b)
</p>
<p class = "body-1">
<v-img src="@/assets/0823-04-01.png" />
</p>
<p class = "body-1">
> Fig.8a: Transfected HEK293 cells in a 96 well, the red fluorescence is the mRuby2 after the Piezo1.1, the transfection reagent is lipofectamine2000 from Thermo Fisher Scientific. 4X objective
</p>
<p class = "body-1">
<v-img src="@/assets/0823-40-01.png" />
</p>
<p class = "body-1">
> Fig.8b: Transfected HEK293 cells, showing normal morphology. The transfection reagent is lipofectamine2000 from Thermo Fisher Scientific. 40X objective
</p>
</v-card-text>
<v-card-title class="text-h5">
Activating the Piezo1.1
</v-card-title>
<v-card-title class="text-h6">
Cotransfection of Piezo1.1 and GCaMP
</v-card-title>
<v-card-text>
  <p class = "body-1">
After overexpressing the Piezo1.1 in HEK293 cells, we then test the bioactivity of Piezo1.1. To indicate the influx of calcium ions, we used a genetically encoded calcium indicator, GCaMP6m, to test whether calcium entered cells after stimulations. Without calcium, GCaMP6m only has very low emitted light. When four calcium ions attach to CaM, the conformation of cpGFP will be changed, which lead to an obvious increase of emitted light at 510nm. The merge of the green and red channels showed good cotransfection productivity.
</p>
<p class = "body-1">
<v-img src="@/assets/force 4times.png" />
</p>
<p class = "body-1">
> Fig.9a: Green fluorescence of GCaMP after the activation of Piezo1.1 by force, 20X objective, indicating the transfection of pEGFP-GCaMP
</p>
<p class = "body-1">
<v-img src="@/assets/0930 red 20 02.png" />
</p>
<p class = "body-1">
> Fig.9b: Red fluorescence of Piezo1.1-mRuby2, indicating the transfection of Piezo1.1
</p>
<p class = "body-1">
<v-img src="@/assets/Composite force.png" />
</p>
<p class = "body-1">
> Fig.9c: Merge of the green channel and red channel, indicating the cotransfection of GCaMP and Piezo1.1
</p>
<p class = "body-1">
<v-img src="@/assets/0930 bright 20 02.png" />
</p>
<p class = "body-1">
> Fig.9d: Bright field of the corresponding cells cotransfected with two plasmids
</p>
<p class = "body-1">
**Fig.17: Cotransfection of pEGFP-GCaMP and Piezo1.1**
</p>
</v-card-text>
<v-card-title class="text-h6">
Calcium influx detection
</v-card-title>
<v-card-text>
  <p class = "body-1">
We then gave shear stress to the cells by sucking out the culture medium, and we record an obvious fluorescence change during the process. (Video.1) And control group showed no obvious change in fluorescence(Video.2)
</p>
<p class = "body-1">
 <video id="video" controls="" preload="none"> <source id="mp4" src="force 4times.mp4" type="video/mp4"> </video>
</p>
<p class = "body-1">
> Video.1: Faster fluorescence change of cells under the stimulation of shear stress, exposure time: 90ms, 20X objective
</p>
<p class = "body-1">
<video id="video" controls="" preload="none"> <source id="mp4" src="control_1.mp4" type="video/mp4"> </video>
</p>
<p class = "body-1">
> Video.2: Faster fluorescence change of cells under the stimulation of shear stress, exposure time: 90ms, 20X objective
</p>
<p class = "body-1">
We also did the positive control group and developed a fluorescence quantitative analysis method to prove our concept. See more details on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Results">Results</a> page.
</p>
</v-card-text>
<v-card-title class="text-h5">
Downstream pathway verification
</v-card-title>
<v-card-title class="text-h6">
Fluorescence colocalization
</v-card-title>
<v-card-text>
  <p class = "body-1">
We added a GFP gene in the downstream plasmid pGL4.30-GFP. The downstream plasmid pGL4.30-GFP will be activated by calcium influx, which is the outcome of the activation of Piezo1.1. In this part, we are convinced that the downstream pathway is feasible. Once the pGL4.30-GFP is activated, the EGFP is expressed and the colocalization of two kinds of fluorescent protein will prove the feasibility of the downstream pathway.
</p>
<p class = "body-1">
<v-img src="@/assets/下游测试.png" />
</p>
<p class = "body-1">
> Fig.10a: Experiment procedure of testing the downstream pathway
</p>
<p class = "body-1">
<v-img src="@/assets/0928-40-03-green.png (green).png" />
</p>
<p class = "body-1">
> Fig.10b: Green channel of the cells 24h after shaking, identifying the expression of EGFP, 40X objective
</p>
<p class = "body-1">
<v-img src="@/assets/0928-40-03-green.png (red).png" />
</p>
<p class = "body-1">
> Fig.10c: Red channel of the cells to identify the Piezo1.1, 40X objective
</p>
<p class = "body-1">
<v-img src="@/assets/Composite.png" />
</p>
<p class = "body-1">
> Fig.10d: Merge green and red channel to colocalize the cells 
</p>
<p class = "body-1">
**Fig.10: Expression of pGL4.30-GFP and Piezo1.1 after the stimulation of shaking**
</p>
<p class = "body-1">
We tried different ways to stimulate the cells and the results showed good fluorescence colocalization. See more details on our [Results](https://2021.igem.org/Team:ShanghaiTech_China/Results) page.
</p>
</v-card-text>
<v-card-title class="text-h6">
Activating the pathway in the hydrogel
</v-card-title>
<v-card-text>
  <p class = "body-1">
To further prove the Piezo1.1-based stress-sensitive regulation system is also useful in our application scenario, we encapsulated cells into hydrogels and applied force to the hydrogel. We want to prove the hydrogel can be a medium for mechanical conduction. Finally, we observe the fluorescent signal of the green channel(Fig.11a) and a good colocalization of two kinds of fluorescent signal(Fig.11b, Fig.11c)
</p>
<p class = "body-1">
<v-img src="@/assets/0903-40-green-hydrogel-7.5s.png (green).png" />
</p>
<p class = "body-1">
> Fig.11a: Green channel of the cells 24h after the stimulation of mechanical conduction of hydrogel, identifying the expression of EGFP, 20X objective
</p>
<p class = "body-1">
<v-img src="@/assets/0903-40-green-hydrogel-7.5s.png (red).png" />
</p>
<p class = "body-1">
> Fig.11b: Red channel of the cells to identify the Piezo1.1, 20X objective
</p>
<p class = "body-1">
<v-img src="@/assets/Composite-16331936792826.png" />
</p>
<p class = "body-1">
> Fig.11c: Merge green and red channel to colocalize the cells 
</p>
<p class = "body-1">
**Fig.11: Expression of pGL4.30-GFP and Piezo1.1 after mechanical conduction of hydrogel and control group.**
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Drug system
  </v-card-title>
</v-row>
<v-card-title class="text-h6">
Drug choices
</v-card-title>
<v-card-text>
  <p class = "body-1">
We interviewed some experts and looked through papers to identify some drugs that are beneficial to the bone repair, we collected these data and compiled them into the following table:
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
                    <th class="text-center">Gerstenfeld, L. C., Chipman, S. D., Glowacki, J., & Lian, J. B. (1987). Expression of differentiated function by mineralizing cultures of chicken osteoblasts. Developmental biology, 122(1), 49–60. <a href="https://doi.org/10.1016/0012-1606(87)90331-9">https://doi.org/10.1016/0012-1606(87)90331-9</a></th>
                  </tr>
                  <tr>
                    <th class="text-center">L-ascorbic acid</th>
                    <th class="text-center">Collagen biosynthesis</th>
                    <th class="text-center">Jeffrey, J. J., & Martin, G. R. (1966). The role of ascorbic acid in the biosynthesis of collagen. I. Ascorbic acid requirement by embryonic chick tibia in tissue culture. Biochimica et biophysica acta, 121(2), 269–280. <a href="https://doi.org/10.1016/0304-4165(66)90116-4">https://doi.org/10.1016/0304-4165(66)90116-4</a></th>
                  </tr>
                  <tr>
                    <th class="text-center">Dexamethasone</th>
                    <th class="text-center">Disputablely believed as RUNX2 activation</th>
                    <th class="text-center">Langenbach, F., & Handschel, J. (2013). Effects of dexamethasone, ascorbic acid and β-glycerophosphate on the osteogenic differentiation of stem cells in vitro. Stem cell research & therapy, 4(5), 117. <a href="https://doi.org/10.1186/scrt328">https://doi.org/10.1186/scrt328</a></th>
                  </tr>
                </tbody>
              </template>
</v-simple-table>
<!--
<p class = "body-1">
|        Drug        |                 Function                  |                          Reference                           |
</p>
<p class = "body-1">
| :----------------: | :---------------------------------------: | :----------------------------------------------------------: |
</p>
<p class = "body-1">
| β-glycerophosphate |            Phosphate provision            | Gerstenfeld, L. C., Chipman, S. D., Glowacki, J., & Lian, J. B. (1987). Expression of differentiated function by mineralizing cultures of chicken osteoblasts. Developmental biology, 122(1), 49–60. <a href="https://doi.org/10.1016/0012-1606(87)90331-9">https://doi.org/10.1016/0012-1606(87)90331-9</a> |
</p>
<p class = "body-1">
|  L-ascorbic acid   |           Collagen biosynthesis           | Jeffrey, J. J., & Martin, G. R. (1966). The role of ascorbic acid in the biosynthesis of collagen. I. Ascorbic acid requirement by embryonic chick tibia in tissue culture. Biochimica et biophysica acta, 121(2), 269–280. <a href="https://doi.org/10.1016/0304-4165(66)90116-4">https://doi.org/10.1016/0304-4165(66)90116-4</a> |
</p>
<p class = "body-1">
|   Dexamethasone    | Disputablely believed as RUNX2 activation | Langenbach, F., & Handschel, J. (2013). Effects of dexamethasone, ascorbic acid and β-glycerophosphate on the osteogenic differentiation of stem cells in vitro. Stem cell research & therapy, 4(5), 117. <a href="https://doi.org/10.1186/scrt328">https://doi.org/10.1186/scrt328</a> |
</p>
-->
</v-card-text>
<v-card-title class="text-h6">
Drug release experiment
</v-card-title>
<v-card-text>
  <p class = "body-1">
In this part, we cooperate with CSU_China to do a drug release experiment(See details on <a href="https://2021.igem.org/Team:ShanghaiTech_China/Partnership">Partnership</a> page). We encapsulated insulin into alginate hydrogel and measured its release rate. The insulin-releasing experiment is measured by Enzyme-Linked Immunosorbent Assay(ELISA). The data collected from the experiment helped us to correct the releasing math model. (See our drug-releasing model on <a href="https://2021.igem.org/Team:ShanghaiTech_China/Modeling">Modeling</a> page) . We made a solution of alginate and insulin in a DMEM culture medium, with an insulin concentration of 80ng/ml. After crosslinking, the hydrogel was merged into the DMEM culture medium and we test the insulin concentration in the medium in the following five days. The data is plotted as Fig.12 and this data helped us to correct our modeling(See more on <a href="https://2021.igem.org/Team:ShanghaiTech_China/Modeling">Modeling</a> page)
</p>
<p class = "body-1">
<v-img src="@/assets/insulin.png" />
</p>
<p class = "body-1">
> Fig.12: The drug release simulation model, based on the insulin encapsulated in the hydrogel
</p>
</v-card-text>
<v-row justify="center"> <v-card-title class="text-h4 title">
Hardware
  </v-card-title>
</v-row>
<v-card-text>
  <p class = "body-1">
Our hardware part is also part of our proof of concept. We aim to build an intelligent machine that is combined with our material. We built a series of parts including the 3D printing design to help the future iGEM teams or others to use our hardware and reduced the use threshold of our materials. See more details on our <a href="https://2021.igem.org/Team:ShanghaiTech_China/Hardware">Hardware</a> page.
</p>
<v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Type</th>
                    <th class="text-center">Number</th>
                    <th class="text-center">Detail</th>
                  </tr>
                </thead>
                <tbody>
<tr>
  <th class="text-center"> Motor             </th>
  <th class="text-center"> 6      </th>
  <th class="text-center"> 3 Stepper Motors and 3 Servo Motors                         </th>
  </tr>
<tr>
  <th class="text-center"> Aluminum rods     </th>
  <th class="text-center"> 3      </th>
  <th class="text-center"> For X,Y,Z axis, each is 50 cm long                          </th>
  </tr>
<tr>
  <th class="text-center"> Wheels            </th>
  <th class="text-center"> 6      </th>
  <th class="text-center"> Move on X,Y,Z axis                                          </th>
  </tr>
<tr>
  <th class="text-center"> Micro Controllers </th>
  <th class="text-center"> 2      </th>
  <th class="text-center"> Arduino Uno and Arduino Micro                               </th>
  </tr>
<tr>
  <th class="text-center"> Base Board        </th>
  <th class="text-center"> 1      </th>
  <th class="text-center"> 50cm * 50cm                                                 </th>
  </tr>
<tr>
  <th class="text-center"> Belts             </th>
  <th class="text-center"> 3      </th>
  <th class="text-center"> 2 are 1m long(x,y axis) and 1 is 40 cm long(z axis), to move syringe</th>
  </tr>
<tr>
  <th class="text-center"> Syringe           </th>
  <th class="text-center"> 1      </th>
  <th class="text-center"> Make bone bound                                             </th>
  </tr>
<tr>
  <th class="text-center"> UV LED            </th>
  <th class="text-center"> 1      </th>
  <th class="text-center"> Solidify drug                                               </th>
  </tr>
<tr>
  <th class="text-center"> Linker            </th>
  <th class="text-center"> Serval </th>
  <th class="text-center"> Combine Servo Motors on board, fix wheel on aluminum rods and other linking tasks</th>
  </tr>
<tr>
  <th class="text-center"> Wires             </th>
  <th class="text-center"> Serval </th>
  <th class="text-center"> Connect I/O ports and power                                 </th>
  </tr>
<tr>
  <th class="text-center"> Support materials </th>
  <th class="text-center"> Serval </th>
  <th class="text-center"> Nuts, screws                                                </th>
  </tr>
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
