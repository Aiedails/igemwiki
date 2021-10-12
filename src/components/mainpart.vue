
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
              @click="$vuetify.goTo('#introduction', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-2"
            >
              Introduction
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#activation', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              PIEZO activation
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#diffusion', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Diffusion
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#gene', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Gene regulation
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#appendix', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Appendix
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
        type="image, article@6"
      ></v-skeleton-loader>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :class="`elevation-${hover ? 8 : 2}`"
            class="transition-swing"
            style="text-decoration: none"
            v-scroll="updatepos"
            v-show="!firstload"
          >
            <v-container style="padding: 20px">
              <v-row justify="center" v-intersect="onIntersect">
                <v-card-title class="text-h4 title" id="introduction">
                  Introduction</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  In 2021, the team from ShanghaiTech has come up with a novel
                  method to help people suffering from bone fractures. Our
                  modeling group aims to gain insight into the project.
                </p>
                <p class="body-1">
                  We've modeled several procedures to verify and improve the
                  feasibility of the design. The first model is a physical one
                  showing how forces applied from the ends of the gel activate
                  Piezo1 of inward cells. It provides a basis for our design
                  that transmembrane protein Piezo1 inside the hydrogel can be
                  activated by the mechanical force during the healing process
                  of bones. Our second model describes the hydrogel-degrading
                  enzyme expression triggered by $\text{Ca}^{2+}$ signaling.
                  This can exhibit how the change of $\text{Ca}^{2+}$, resulting
                  from the activated Piezo1 channel, influences the expression
                  of our target gene quantitatively. Another model shows the
                  diffusion of the enzyme inside the hydrogel and the subsequent
                  events including the degradation of hydrogel and the release
                  of target medicine which has been encapsulated by the
                  hydrogel. This part supports our idea of the controlled
                  release of medicine.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="activation"
                  >PIEZO activation</v-card-title
                >
              </v-row>
              <v-row justify="center" style="margin-top: -20px">
                <v-card-title class="text-h6">
                  --Activation of piezo1 through mechanical force</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  This model is developed to prove the activation of PIEZO
                  inside hydrogel through mechanical force applied from the ends
                  of the gel as bones recover.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> Modeling hydrogel</v-card-title>
              <v-card-text>
                <p class="body-1">
                  We regard the hydrogel filled between broken bones as a
                  combination of many tightly distributed small square units as
                  shown in $\text{fig.1}$.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/2/20/T--ShanghaiTech_China--mod--fig1.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.1}$ Sketch of hydrogel model
                  </p>
                </v-row>
                <p class="body-1">
                  To analyze the inner force of hydrogel, we are going to focus
                  on the single square unit. When the hydrogel is squeezed, the
                  force applied to it is shown in $\text{fig.2}$, where $F_1$
                  and $F_2$, whose direction is along the edge of the square,
                  are the component forces of the direct force and also the
                  actual force on the unit. Let the angle between $F$ and $F_1$
                  (or $F$ and $F_2$) be $\theta$. Thus,
                </p>
                <p class="body-1">$$ F_1={F\over2\cos\theta} \tag{1.1} $$</p>
                <v-img
                  src="
                  https://2021.igem.org/wiki/images/5/53/T--ShanghaiTech_China--mod--fig2.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.2} Single hydrogel unit analysis
                  </p>
                </v-row>
                <p class="body-1">
                  During the compression, elastic deformation of the gel appears
                  and $\theta$ increases in the meantime. We assume that
                  $\theta$ changes consistently with strain ratio $S\%$, $i.e.$
                </p>
                <p class="body-1">
                  $$ \theta={\pi\over4}+{\pi\over4}\cdot S \% \tag{1.2} $$
                </p>
                <p class="body-1">
                  With equations $(1.1)$ and $(1.2)$, we can conclude that:
                </p>
                <p class="body-1">
                  $$ F_1={F\over2\cos({\pi\over4}+{\pi\over4}\cdot S \%)}
                  \tag{1.3} $$
                </p>
              </v-card-text>
              <v-card-title class="text-h5"
                >Stress-strain relation</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  As the bones grow, a hydrogel with high elasticity gets
                  compressed and stressed. It has been shown that the
                  compression stress grows exponentially with increasing strain
                  ratio $S\%$.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >
                </p>
                <p class="body-1">
                  We took points on the curve in the literature up in *fig.3*
                  evenly to get an appropriate arithmetic expression of it,
                  using Spline interpolation to fit the curve. With the help of
                  MATLAB, we got the well-fit ($R^2=0.997$) result shown in
                  <strong>fig.3</strong>.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/e/e6/T--ShanghaiTech_China--mod--fig3.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.3}$ Simulated compressive stress-strain curves of
                    hydrogel<sup @click="$vuetify.goTo('#references', options)"
                      >[1]</sup
                    >
                  </p>
                </v-row>
                <p class="body-1">
                  Considering equation $(1.3)$, the actual compression
                  stress-strain curve can be drawn ($\text{fig.5}$).
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/7/79/T--ShanghaiTech_China--mod--fig4.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.4}$ Actual inner stress-strain curve of hydrogel
                  </p>
                </v-row>
                <p class="body-1">
                  Given the relationship of normalized response of PIEZO1
                  protein versus pressure ($\text{fig.5}$),
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/1/1e/T--ShanghaiTech_China--mod--fig5.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.5}$ Normalized response of PIEZO1 protein versus
                    pressure<sup @click="$vuetify.goTo('#references', options)"
                      >[2]</sup
                    >
                  </p>
                </v-row>
                <p class="body-1">
                  it can be seen that when the compressive strain is $35\%$, the
                  compressive pressure is $10.77\text{kPa}$ or $80\text{mmHg}$,
                  and the normalized response of Piezo is nearly $100\%$. Also,
                  when the compressive strain is as low as $22\%$, the
                  normalized Piezo response can still reach $50\%$. Therefore,
                  we've ascertained that Piezo can be activated inside the
                  hydrogel.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="gene"
                  >Gene regulation</v-card-title
                >
              </v-row>
              <v-row justify="center">
                <v-card-title class="text-h6">
                  --Gene expression with $\text{Ca}^{2+}$
                  signaling</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  $\text{Ca}^{2+}$ signaling activates the nuclear factor of
                  activated T cells (<strong><u>NFAT</u></strong
                  >), a family of transcription factors. The phosphatase
                  <strong><u>calcineurin</u></strong> plays a significant role
                  in this process. $\text{Ca}^{2+}$ activates calcineurin in two
                  ways: binding calcineurin directly and activating the
                  $\text{Ca}^{2+}$ binding regulatory protein, calmodulin, which
                  subsequently interacts with calcineurin. When calcineurin is
                  activated, it can then catalyze the dephosphorylation of NFAT.
                  Dephosphorylation of NFATs exposes a nuclear localization
                  signal which causes NFATs to be imported into the nucleus,
                  regulated by the action of a specific phosphatase and several
                  kinases. Finally, NFATs in the nucleus can induce the target
                  gene expression.
                </p>
                <v-img
                  src="
                  https://2021.igem.org/wiki/images/2/2c/T--ShanghaiTech_China--mod--fig6.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.6}$ Schematic view of $\text{Ca}^{2+}$ regulating
                    gene expression.
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5"
                >Intracellular $\text{Ca}^{2+}$</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  The change of $\text{Ca}^{2+}$ concentration after stimulation
                  of cells has been measured in previous literature.
                  <sup @click="$vuetify.goTo('#references', options)">[3]</sup>
                  We use curve fitting tools in MATLAB to get the mathematical
                  function of calcium.
                </p>
                <v-img
                  src="
                  https://2021.igem.org/wiki/images/0/09/T--ShanghaiTech_China--mod--fig7.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.7}$ PIEZO mediated $\text{Ca}^{2+}$
                    concentration<br />
                    (left: experimental data from literature<sup
                      @click="$vuetify.goTo('#references', options)"
                      >[3]</sup
                    >; right: fitted curve in MATLAB)
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5"
                >Activation of calcineurin</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  The activation of a calcineurin molecule requires binding of
                  $\text{Ca}^{2+}$ ions to a calmodulin molecule and
                  subsequently to one calcineurin molecule. Here we simplify the
                  model by considering only the binding between $\text{Ca}^{2+}$
                  and calcineurin. The deactivation of calcineurin is also
                  thought about.
                </p>
                <p class="body-1">
                  $$ \text{CN}_{off}+3\text{Ca}^{2+} \underset{k_{\text{CN},da}}
                  { \overset{k_{\text{CN},a}} \rightleftarrows } \text{CN} $$
                </p>
                <p class="body-1">
                  Let $\text{CN}$ and $\text{CN}_{off}$ be the activated and
                  inactivated form of calcineurin respectively, then their
                  ordinary differential equations (ODEs) $(2.1)$ and $(2.2)$
                  that describe their rates can be written:
                </p>
                <p class="body-1">
                  $$ {d[\text{CN}_{off}]\over dt}= -k_{\text{CN},a}\cdot
                  [\text{Ca}^{2+}]^3 \cdot [\text{CN}_{off}]+k_{\text{CN},da}
                  \cdot [\text{CN}] \tag{2.1} $$
                </p>
                <p class="body-1">
                  $$ {d[\text{CN}]\over dt}= k_{\text{CN},a} \cdot
                  [\text{Ca}^{2+}]^3 \cdot [\text{CN}_{off}]-k_{\text{CN},da}
                  \cdot [\text{CN}] \tag{2.2} $$
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                (De)phosphorylation of (p)NFAT</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  Calcineurin acts as a catalyst in the dephosphorylation of
                  $\text{pNFAT}$ (a phosphorylated form of NFAT in the
                  cytoplasm), which is simultaneously phosphorylated with the
                  help of kinases such as protein kinase A (PKA) and glycogen
                  synthase kinase 3 beta (GSK3Î˛). These reactions are
                </p>
                <p class="body-1">
                  $$ [\text{pNFAT}]
                  \underset{E_{\text{NK}}}{\overset{E_{\text{CN}}}\rightleftarrows}
                  [\text{pi}]+[\text{NFAT}], $$
                </p>
                <p class="body-1">
                  and let $[\text{pi}]$ and $[\text{NFAT}]$ be the concentration
                  of phosphate and NFAT respectively. $E_\text {CN}$ represents
                  the calcineurin and $E_\text {NK}$ represents NFAT kinases as
                  catalyst here. We use Michaelis-Menten equation $(2.3)$ to
                  describe these enzymatic reactions.
                </p>
                <p class="body-1">In a typical enzymatic reaction:</p>
                <p class="body-1">
                  $$ \text X+\text
                  E\underset{k_r}{\overset{k_f}\rightleftarrows}\text
                  C\overset{k_{cat}}\rightarrow \text E+\text P, $$
                </p>
                <p class="body-1">
                  a substrate $\text X$ binds to an enzyme $\text E$ to form a
                  substrate-enzyme complex $\text C$, then forming the product
                  $\text P$ irreversibly. Applying the Michaelis-Menten
                  equation, one of the important ODEs is as follows:
                </p>
                <p class="body-1">
                  $$ {d[\text P]\over dt} ={V_m[\text X]\over [\text X]+K_m}
                  ={k_{cat}[\text E]_0[\text X]\over [\text X]+K_m} \tag{2.3} $$
                </p>
                <p class="body-1">
                  where $V_m$ is the maximum rate of the enzymatic reaction,
                  $[\text E]_0$ is the initial concentration of enzyme $\text
                  E$, $k_{cat}$ is the catalytic rate constant and $K_m$ is
                  Michaelis-Menten constant of the enzyme.
                </p>
                <p class="body-1">
                  In our case, considering the two reactions, we can write ODEs
                  describing the concentration of $\text{NFAT}$ and
                  $\text{pNFAT}$:
                </p>
                <p class="body-1">
                  $$ {d[\text{NFAT}]\over dt} ={k_{c\text {CN}} [\text {CN}]
                  [\text{pNFAT}]\over K_{m\text {CN}}+[\text{pNFAT}]}
                  -{V_{m\text {NK}}[\text{NFAT}]\over K_{m\text
                  {NK}}+[\text{NFAT}]} \tag{2.4} $$
                </p>
                <p class="body-1">
                  $$ {d[\text{pNFAT}]\over dt}= -{k_{c\text {CN}} [\text {CN}]
                  [\text{pNFAT}]\over K_{m\text {CN}}+[\text{pNFAT}]}
                  +{V_{m\text {NK}}[\text{NFAT}]\over K_{m\text
                  {NK}}+[\text{NFAT}]} \tag{2.5} $$
                </p>
              </v-card-text>
              <v-card-title class="text-h5"
                >Nuclear regulation of NFAT</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  In the nucleus, NFAT binds to a non-palindromic composite
                  <strong>NFAT-response element</strong> (RE), derived from
                  IL2/8 promoter. Our design involves the target enzyme gene
                  driven by 3 repeats of IL2 promoter ($3\times$ IL2 NFAT-RE).
                </p>
                <p class="body-1">
                  We use Hill kinetics to describe this process which contains
                  more than one binding site to take the influence of
                  cooperation into account, and also consider the degradation of
                  mRNA:
                </p>
                <p class="body-1">
                  $$ {d[r]\over dt}=V_{mT}{[\text{NFAT}]^n\over
                  [\text{NFAT}]^n+\kappa_N}-\gamma_r\cdot [r] \tag{2.6} $$
                </p>
                <p class="body-1">
                  Let $[r]$ be the concentration of mRNA. $V_{mT}$, $\kappa_N$,
                  $n$, $\gamma_r$ represents the maximum rate of the
                  transcription, hill constant, hill coefficient and the
                  degradation rate of mRNA respectively.
                </p>
                <p class="body-1">
                  Then we can get the ODE of the target enzyme:
                </p>
                <p class="body-1">
                  $$ {d[\text E]\over dt}=k_{r}[r]-\gamma_{\text E}[\text E]
                  \tag{2.7} $$
                </p>
                <p class="body-1">
                  where $[\text E]$ is the concentration of our target enzyme
                  trypsin, and $k_r$, $\gamma_\text E$ represents translation
                  and degradation rate of trypsin respectively.
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">Results</v-card-title>
              <v-card-text>
                <p class="body-1">
                  With the ODEs and related parameters, we can use MATLAB to
                  know the concentration of the substances versus time.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/e/e1/T--ShanghaiTech_China--mod--fig8.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.8}$ Concentration of $\text{Ca}^{2+}$,
                    $\text{CN}_{on}$ and $\text{NFAT}$ versus time in the first
                    300 seconds
                  </p>
                </v-row>
                <p class="body-1">
                  The result shows that after PIEZO channels get activated and
                  $\text{Ca}^{2+}$ concentration rises significantly, the
                  concentration of activated calcineurin and dephosphorylated
                  NFAT increases and reach the maximum within 150 seconds.
                  Activation of calcineurin and dephosphorylation are quite
                  sensitive to the burst of $\text{Ca}^{2+}$.
                </p>
                <p class="body-1">
                  In contrast, mRNA and trypsin increase at a much lower speed.
                  It costs several days for them to get fairly close to their
                  steady state, especially for trypsin. This property might be
                  advantageous to our design of controlled drug release.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/a/ad/T--ShanghaiTech_China--mod--fig9.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.9}$ Concentration of $\text{mRNA}$ and $\text{E}$
                    (trypsin) versus time in the first 1.4e6 seconds
                  </p>
                </v-row>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="diffusion"
                  >Diffusion</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  Cells are distributed inside the hydrogel. The diffusion of
                  the enzymes they produce from the cell membrane to far should
                  be considered. We use MATHEMATICA to visualize this process:
                </p>
                <v-container>
                  <video controls width="100%" style="object-fit: contain">
                    <source
                      src="https://2021.igem.org/wiki/images/2/25/T--ShanghaiTech_China--mod--diff.mp4"
                      type="video/mp4"
                    />
                  </video>
                </v-container>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.9}$ Concentration of $\text{mRNA}$ and $\text{E}$
                    (trypsin) versus time in the first 1.4e6 seconds
                  </p>
                </v-row>
                <p class="body-1">
                  The white circle in the center represents a cell in a plane.
                  The color of points on the plane describes the concentration:
                  blue is the lowest, followed by white and yellow, and red is
                  the highest. This simulation is based on the diffusion
                  equation, which is discussed in detail below. With this, the
                  process in three-dimensional space can be easily imagined due
                  to the symmetry.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">Diffusion coefficient</v-card-title>
              <v-card-text>
                <p class="body-1">
                  Given the complexity of the composition and structure of GELMA
                  hydrogels, we decided to simplify the model of enzyme
                  diffusion in the hydrogels and use a basic model to predict
                  it.
                </p>
                <p class="body-1">
                  For larger spherical solutes immersed in a fluid, the relation
                  between solute diffusivity and fluid viscosity was reasoned by
                  Einstein using the kinetic theory of Brownian motion coupled
                  with results from continuum mechanics. The solute was assumed
                  to be large enough that diffusion would involve collisions
                  with many smaller solvent (<i>e.g.</i> water) molecules and,
                  thus, an effective fluid drag would oppose the solute motion.
                  From fluid mechanics, the frictional drag force $f$ exerted by
                  a fluid of viscosity $μ$ on a spherical particle of radius a
                  moving at a steady velocity $U$ through the fluid was already
                  well known:
                </p>
                <p class="body-1">$$ f = 6πaμU $$</p>
                <p class="body-1">
                  At the same time, the kinetic theory and the law of Van’t Hoff
                  (1852–1911) were known, the latter
                </p>
                <p class="body-1">
                  relating the concentration of solutes to the osmotic pressure
                  associated with solute collisions with container walls. The
                  resulting thought model involved a balance between
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  (1) the pressure gradient $ \frac{\partial P^{os}}{\partial
                  x}$ (which has the units of a force density ($\text{N}\
                  \text{m}^{−3}$) and is proportional to $ RT\frac{\partial
                  c_i}{\partial x}$ from Van’t Hoff’s law) and (2) the force
                  density associated with the frictional drag on the total
                  number of solutes per unit fluid volume, in which each solute
                  molecule is subjected to the drag force 6πaμU. The “driving
                  force” for diffusive flux in the $+x$ direction is $
                  \frac{-\partial c_i}{\partial x} $ and, with zero net flux in
                  equilibrium, the balance gives $\frac{-\partial
                  P^{os}}{\partial x}=\frac{-RT\partial c_i}{\partial x}=(6\pi
                  a\mu U) (c_iN_{AV})$. Besides, within an electrolyte medium,
                  empirical evidence has shown that the diffusive flux $ N_i $
                  of solute species $i$ with respect to the solvent is often
                  linearly related to the local gradient in the concentration of
                  that species $ c_i $ by $N_i =-D_i\nabla c_i$. Combining these
                  two relations and noting that the product $ c_i U$ has the
                  units of flux $ N_i $ , we arrive at the Stokes–Einstein
                  relation for the diffusivity:
                </p>
                <p class="body-1">$$ D_0=\frac{k_BT}{6\pi a\mu} $$</p>
                <p class="body-1">
                  where the Boltzmann constant $k_B = \frac{RT}{N_{AV}}$. $R$ is
                  the universal gas constant, and $N$ is Avogadro’s number. We
                  also note that for a spherical particle, the radius a can be
                  approximated by $(\text{molecular weight})^{1/3}$. Thus, the
                  diffusivity is weakly dependent on the molecular weight.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The $D$ mentioned above is the diffusion coefficient of the
                  solute in the pure solvent. When it comes to the diffusion
                  coefficient in gels, we can assume that the diffusivity in a
                  gel can be written as a product of factors $F$ and $S$, where
                  $F$ accounts for hydrodynamic effects and $S$ for steric or
                  tortuosity effects. The resulting expression is
                  $\frac{D}{D_0}=FS(f)$<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[9]</sup
                  >, where $ \frac{D}{D_0}$ is the ratio of the diffusivity in
                  the gel to that in solution at infinitely dilute solute
                  concentrations and the parameter $f$ is an adjusted volume
                  fraction given by $f=(1+\frac{r_s}{r_f})^2 \phi$, where $\phi$
                  is the actual polymer volume fraction and $r_s$ and $r_f$ are
                  the radius of the solute and polymer, respectively. Besides,
                  $F$ could be given in a stretched exponential form
                  $F(\lambda,\phi)=e^{-a\phi^b}$, where $\lambda$ is the ratio
                  of polymer radius to solute radius ($ \lambda = {r_f\over r_s}
                  $), and one can calculate $a$ and $b$ using the expressions $a
                  = 3.727-2.640\lambda + 0.822\lambda^2$ and $b = 0.358 +
                  0.366\lambda -0.0939\lambda^2$ . The steric factor $S(f)$ can
                  also be calculated as follows: $S(f) = e^{-0.84f^{1.09}}$
                </p>
                <p class="body-1"></p>
                <p class="body-1">so the ratio could be given as</p>
                <p class="body-1">
                  $$ \frac{D}{D_0}=e^{-0.84{((1+\frac{r_s}{r_f})^2
                  \phi)}^{1.09}-{(3.727-2.640\frac{r_s}{r_f} +
                  0.822(\frac{r_s}{r_f})^2)}\phi^{0.358 + 0.366\frac{r_s}{r_f}
                  -0.0939(\frac{r_s}{r_f})^2}} $$
                </p>
                <p class="body-1">
                  so the diffusion coefficient in the hydrogels is
                </p>
                <p class="body-1">
                  $$ D=\frac{k_BT}{6\pi a\eta}e^{-0.84{((1+\frac{r_s}{r_f})^2
                  \phi)}^{1.09}-{(3.727-2.640\frac{r_s}{r_f} +
                  0.822(\frac{r_s}{r_f})^2)}\phi^{0.358 + 0.366\frac{r_s}{r_f}
                  -0.0939(\frac{r_s}{r_f})^2}} $$
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5"> Diffusion equation</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  After we have got the diffusion coefficient, we could turn to
                  the diffusion equation. As we know, within an electrolyte
                  medium, empirical evidence has shown that the diffusive flux $
                  N_i $ of solute species $i$ with respect to the solvent is
                  often linearly related to the local gradient in the
                  concentration of that species $c_i$ by:<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[10]</sup
                  >
                </p>
                <p class="body-1">$$ N_i =-D_i\nabla c_i \tag{3.1} $$</p>
                <p class="body-1">
                  Having established the basic point-by-point constitutive
                  relation between the solute flux and the local solute
                  concentration gradient, we now use the integral form of
                  continuity (conservation) to describe the global relation
                  between solute accumulation in a region of space, the net flux
                  of solute entering the region, and the rate at which solutes
                  are generated or lost by chemical reactions within that
                  region. The continuity law then takes the form:
                </p>
                <p class="body-1">
                  $$ \frac{\text{d}}{\text{d}t}\int_V c_i\text{d}V =- \oint_S
                  N_i*n \text{d}a + \int_VR_i\text{d}V \tag{3.2} $$
                </p>
                <p class="body-1">
                  where the left-hand term is the net accumulation of solute in
                  $V$, and the minus sign in front of the surface integral on
                  the right corresponds to net flux crossing into the control
                  volume. $ R_i$ ($\text{mol} \ \text m^{−3} \text{s}^{−1}$) is
                  the net volume rate of formation of species $ i$ by chemical
                  reaction. The volume $V$ and surface $S$ are assumed to be
                  fixed in space.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  After that, we can then derive the point-by-point differential
                  form of continuity by using Gauss’ theorem:
                </p>
                <p class="body-1">
                  $$ \oint_S N_in\text{d}a=\int_V \nabla N_i \text{d}V \tag{3.3}
                  $$
                </p>
                <p class="body-1">
                  and noting that the time derivative of the left hand term of
                  $(3.2)$ can be brought inside the volume integral since $V$
                  and $S$ are stationary:
                </p>
                <p class="body-1">
                  $$ \int_V(\frac{\partial c_i}{\partial t}+\nabla N_i -
                  R_i)\text{d}V =0 \tag{3.4} $$
                </p>
                <p class="body-1">
                  Since the volume element $\text{d}V$ is arbitrary, we can set
                  the sum of the integrands in $(3.4)$ to be zero, giving the
                  differential form of continuity in the absence of convective
                  or electrical forces:
                </p>
                <p class="body-1">
                  $$ \frac{\partial c_i}{\partial t}+\nabla N_i - R_i =0
                  \tag{3.5} $$
                </p>
                <p class="body-1">
                  Combining the flux constitutive law $(3.1)$ with the
                  continuity law $(3.5)$ in the absence of chemical reactions
                  gives:
                </p>
                <p class="body-1">
                  $$ \frac{\partial c_i}{\partial t} =\nabla (D_0\nabla c_i)
                  \tag{3.6} $$
                </p>
                <p class="body-1">
                  For cases in which $D_i$ is a constant independent of
                  position, $(3.6)$ gives the classic form of the diffusion
                  equation (Fick’s second law):
                </p>
                <p class="body-1">
                  $$ \frac{\partial c_i}{\partial t} =D_0\nabla^2 c_i \tag{3.7}
                  $$
                </p>
                <p class="body-1">
                  Considering the chemical reactions, the equation could be
                  rewritten as:
                </p>
                <p class="body-1">
                  $$ \frac{∂c_i}{∂t}=D_i*\nabla^2c_i+R_i \tag{3.8} $$
                </p>
                <p class="body-1">
                  Plugging in the data to solve this partial differential
                  equation, we can get the concentration as a function of time
                  and displacement:
                </p>
                <p class="body-1">$$ c =f(x,t) $$</p>
                <p class="body-1">
                  For equation $(3.7)$ and $(3.8)$, we have solutions as
                  follows:
                </p>
                <p class="body-1">
                  $$ \frac{∂c_i}{∂t}=D_i*\nabla^2c_i+R_i \tag{3.8} $$
                </p>
                <p class="body-1"></p>
                <p class="body-1">$$ u_{t=0} = \varphi(x) \tag{I.C.} $$</p>
                <p class="body-1"></p>
                <p class="body-1">
                  The solution of the equation has the following form:
                </p>
                <p class="body-1">
                  $$ u(x,t)=\frac{1}{(2\sqrt{D\pi
                  t})^n}\int_{R^n}e^{-\frac{(x-\xi)^2}{4Dt}}\varphi(\xi)\text{d}\xi+\int_0^t
                  \int_{R^n}\frac{1}{(2\sqrt{D\pi
                  (t-\tau)})^n}e^{-\frac{(x-\xi)^2}{4D(t-\tau)}}f(\xi,r)\text{d}\xi
                  \text{d}r $$
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Because of the computational constraint, we can not give a
                  general solution to the equation under all conditions. But we
                  can still estimate the distribution of the enzyme based on the
                  elementary solution of this equation: $c(x,t)=c_0(t)
                  \frac{1}{\sqrt{4\pi Dt}}e^{-\frac{x^2}{4Dt}}$ where
                  $D=1.62449\times 10^{-4}\ \text s^{-1} $. For example, the
                  concentration of the enzyme at $1\ \text{cm}$ from the cell
                  after $30\ \text{days}$ would be $1280.1\ \text{pM}$. The
                  result could be shown by the following figure:
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/a/ad/T--ShanghaiTech_China--mod--fig9.jpg"
                  contain max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.10}$ Enzyme concentration versus time and
                    distance
                  </p>
                </v-row>
                <p class="body-1"></p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">Something else</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">A possible attempt for modeling:</p>
                <p class="body-1"></p>
                <p class="body-1">
                  Assuming that the enzyme is a particle which is confined to a
                  straight line and can only move in two directions: move
                  forward & move backwards. Besides that, the possibility that
                  the particle move in each direction is equal. The distance the
                  enzyme move forward or backwards in $\Delta t$ is $\Delta x$
                  ,which could be calculated through the equation $\Delta x
                  =(\frac{D\Delta t}{\pi})^\frac{1}{2}$ . Based on the
                  assumption mentioned above, the probability of the case "the
                  particle is $m\Delta x$ away from the origin at $n\Delta t$"
                  can be given as:
                </p>
                <p class="body-1">
                  $$
                  P(m,n)=\frac{(n!)(\frac{1}{2})^n}{(\frac{1}{2}(m+n)!)(\frac{1}{2}(m-n)!)}
                  $$
                </p>
                <p class="body-1">
                  where $m=\frac{x}{\Delta x}$ and $n=\frac{t}{\Delta t}$ .
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  When $n$ is large (it should be large when we observe this
                  model), we can approximate the equation above using the
                  Stirling formula $n! \approx \sqrt{2\pi}
                  e^{-n}n^{n+\frac{1}{2}} $ and it could be written like this:
                </p>
                <p class="body-1">
                  $$ P(m,n)=\sqrt{\frac{2}{\pi
                  n}}(1-(\frac{m}{n})^2)^{-\frac{1}{2}(n+1)}(1+\frac{m}{n})^{-\frac{1}{2}m}(1-\frac{m}{n})^{\frac{1}{2}m}
                  $$
                </p>
                <p class="body-1">
                  If we set $\Delta t$ same as the amount of time t takes to
                  produce an enzyme, then we can calculate the total possibility
                  that the particle appear at $x=m\Delta x$ and $t=k\Delta t$ by
                  just summing them up:
                </p>
                <p class="body-1">$$ P=(\Sigma)_{i=0}^{k} P(m,n-i) $$</p>
              </v-card-text>

              <v-row justify="center">
                <v-card-title class="text-h4 title" id="appendix"
                  >Appendix</v-card-title
                >
              </v-row>
              <v-card-title class="text-h5">Reaction parameters</v-card-title>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Unit</th>
                        <th>Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="body-2">$k_{\text{CN},a}$</th>
                        <th class="body-2">
                          <strong>Activation rate of calcineurin</strong>
                        </th>
                        <th class="body-2">$1.0e9$</th>
                        <th>$\text{mM}^{-3}\text s^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          [4]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$k_{\text{CN},da}$</th>
                        <th class="body-2">
                          <strong>Deactivation rate of calcineurin</strong>
                        </th>
                        <th class="body-2">$2.6e-2$</th>
                        <th class="body-2">$\text{s}^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [5]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$k_{c\text{CN}}$</th>
                        <th class="body-2">
                          <strong
                            >Catalytic rate constant of calcineurin</strong
                          >
                        </th>
                        <th class="body-2">$2.0e-2$</th>
                        <th class="body-2">$\text{s}^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          [6]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$K_{m\text{CN}}$</th>
                        <th class="body-2">
                          <strong
                            >Michaelis-Menten constant of calcineurin</strong
                          >
                        </th>
                        <th class="body-2">$1.27e-3$</th>
                        <th class="body-2">$\text{mM}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          [6]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$V_{m\text {NK}}$</th>
                        <th class="body-2">
                          <strong>Maximum reaction rate of NFAT kinase</strong>
                        </th>
                        <th class="body-2">$1.9547e-5$</th>
                        <th class="body-2">$\text{mM} s^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [5]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$K_{m\text {NK}}$</th>
                        <th class="body-2">
                          <strong
                            >Michaelis-Menten constant of NFAT kinase</strong
                          >
                        </th>
                        <th class="body-2">$1.0e-3$</th>
                        <th class="body-2">$\text{mM}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [5]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$\gamma_r$</th>
                        <th class="body-2">
                          <strong>Degradation rate of trypsin mRNA</strong>
                        </th>
                        <th class="body-2">$9.259e-6$</th>
                        <th class="body-2">$\text{s}^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [7]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$V_{mT}$</th>
                        <th class="body-2">
                          <strong
                            >Maximum transcription rate of trypsin mRNA</strong
                          >
                        </th>
                        <th class="body-2">$4.0e-4$</th>
                        <th class="body-2">$\text{mM} \text s^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [7]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$\kappa_N$</th>
                        <th class="body-2">
                          <strong
                            >Hill constant of NFAT regulating reaction</strong
                          >
                        </th>
                        <th class="body-2">$1.0e-5$</th>
                        <th class="body-2">$\text{mM}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [8]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$k_r$</th>
                        <th class="body-2">
                          <strong>Translation rate of trypsin</strong>
                        </th>
                        <th class="body-2">$5.848e-3$</th>
                        <th class="body-2">$\text{s}^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [7]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$\gamma_E$</th>
                        <th class="body-2">
                          <strong>Degradation rate of trypsin</strong>
                        </th>
                        <th class="body-2">$5.910e-6$</th>
                        <th class="body-2">$\text{s}^{-1}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          Estimated from [7]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$n$</th>
                        <th class="body-2">
                          <strong
                            >Hill coefficient of NFAT regulating
                            reaction</strong
                          >
                        </th>
                        <th class="body-2">$3$</th>
                        <th class="body-2">3</th>
                        <th class="body-2">
                          Number of binding sequence repeats
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$\text{NFAT}_{tot}$</th>
                        <th class="body-2">
                          <strong>
                            Concentration of dephosphorylated and phosphorylated
                            NFAT
                          </strong>
                        </th>
                        <th class="body-2">$1.7e-5$</th>
                        <th class="body-2">$\text{mM}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          [5]
                        </th>
                      </tr>
                      <tr>
                        <th class="body-2">$\text{CN}_{tot}$</th>
                        <th class="body-2">
                          <strong>
                            Concentration of activated and inactivated
                            calcineurin
                          </strong>
                        </th>
                        <th class="body-2">$1.1628e-3$</th>
                        <th class="body-2">$\text{mM}$</th>
                        <th
                          class="body-2"
                          @click="$vuetify.goTo('#references', options)"
                        >
                          [4]
                        </th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-title class="text-h5"> Initial conditions</v-card-title>
              <v-card-text>
                <p class="body-1">
                  Initial conditions presented below allow the system to reach a
                  steady state according to the ODEs.
                </p>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="body-2">Parameter</th>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="body-2">${\text{CN}_{on}}_0$</th>
                        <th class="body-2">
                          <strong
                            >Initial activated calcineurin concentration</strong
                          >
                        </th>
                        <th class="body-2">$4.30667e-5$</th>
                        <th class="body-2">$\text{mM}$</th>
                      </tr>
                      <tr>
                        <th class="body-2">$\text{NFAT}_0$</th>
                        <th class="body-2">
                          <strong
                            >Initial dephosphorylated NFAT concentration</strong
                          >
                        </th>
                        <th class="body-2">$5.63328e-7$</th>
                        <th class="body-2">$\text{mM}$</th>
                      </tr>
                      <tr>
                        <th class="body-2">$r_0$</th>
                        <th class="body-2">
                          <strong>Initial trypsin mRNA concentration</strong>
                        </th>
                        <th class="body-2">$7.722e-13$</th>
                        <th class="body-2">$\text{mM}$</th>
                      </tr>
                      <tr>
                        <th class="body-2">$\text E_0$</th>
                        <th class="body-2">
                          <strong>Initial trypsin concentration</strong>
                        </th>
                        <th class="body-2">$7.6409e-10$</th>
                        <th class="body-2">$\text{mM}$</th>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
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
                  <a href="https://dx.doi.org/10.1021/acs.macromol.0c02716">
                    [1]: https://dx.doi.org/10.1021/acs.macromol.0c02716
                  </a>
                </p>
                <p class="body-2">
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5854696/"
                  >
                    [2]: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5854696/
                  </a>
                </p>
                <p class="body-2">
                  <a href="https://dx.doi.org/10.1074%2Fjbc.M116.766196">
                    [3]: https://dx.doi.org/10.1074%2Fjbc.M116.766196
                  </a>
                </p>
                <p class="body-2">
                  <a href="https://doi.org/10.1371/journal.pcbi.1002879">
                    [4]: https://doi.org/10.1371/journal.pcbi.1002879
                  </a>
                </p>
                <p class="body-2">
                  <a href="https://doi.org/10.4149/gpb_2017022">
                    [5]: https://doi.org/10.4149/gpb_2017022
                  </a>
                </p>
                <p class="body-2">
                  <a href="https://doi.org/10.1021/bi8019355">
                    [6]: https://doi.org/10.1021/bi8019355
                  </a>
                </p>
                <p class="body-2">
                  <a href="http://dx.doi.org/10.1016/j.molcel.2016.02.030">
                    [7]: http://dx.doi.org/10.1016/j.molcel.2016.02.030
                  </a>
                </p>
                <p class="body-2">
                  <a href="https://doi.org/10.1016/j.biochi.2020.01.015">
                    [8]: https://doi.org/10.1016/j.biochi.2020.01.015
                  </a>
                </p>
                <p class="body-2">
                  <a href="https://doi.org/10.1016/S0006-3495(00)76566-0">
                    [9]: https://doi.org/10.1016/S0006-3495(00)76566-0
                  </a>
                </p>
                <p class="body-2">
                  [10]: Fields, Forces, and Flows in Biological Systems. By Alan
                  J. Grodzinsky; with the technical and editorial assistance of,
                  Eliot H. Frank. London and New York: Garland Science (Taylor &
                  Francis Group). ISBN:978-0-8153-4212-0
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
    this.step[0] = document.getElementById("introduction");
    this.step[1] = document.getElementById("activation");
    this.step[2] = document.getElementById("diffusion");
    this.step[3] = document.getElementById("gene");
    this.step[4] = document.getElementById("appendix");
    this.updatepos();
    setTimeout(() => {
      this.firstload = false;
      console.log("loaded");
    }, 1000);
  },
};
</script>

<style lang="scss">
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>    
                  