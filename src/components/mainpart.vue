
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
              @click="$vuetify.goTo('#gene', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Gene regulation
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#appendix', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Appendix
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#references', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              References
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
                  method to help people suffering from bone fracture. Our
                  modeling group aims to gain insight into the project.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  We've modeled several procedures to verify and improve the
                  feasibility of the design. The first model is a physical one
                  showing how forces applied from the ends of the gel activate
                  PIEZO1 of inward cells. It provides basis for our design that
                  transmembrane protein PIEZO1 inside the hydrogel can be
                  activated by the mechanical force during the healing process
                  of bones. Our second model describes the hydrogel-degrading
                  enzyme expression triggered by $\ce{Ca^{2+}}$ signaling. This
                  can exhibit how the change of $\ce{Ca^{2+}}$, resulting from
                  the activated PIEZO1 channel, influences the expression of our
                  target gene quantitatively. Another model shows the diffusion
                  of enzyme inside the hydrogel and the subsequent events
                  including the degradation of hydrogel and the release of
                  target medicine which has been encapsulated by hydrogel. This
                  part supports our idea of controlled release of medicine.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="activation"
                  >PIEZO activation</v-card-title
                >
              </v-row>
              <v-row justify="center" style="margin-top: -20px">
                <v-card-title class="text-h6">
                  --Activation of PIEZO1 through mechanical force</v-card-title
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
                  src="https://tva1.sinaimg.cn/large/008i3skNgy1gud72d30tpj62040rg41a02.jpg"
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
                  https://tva1.sinaimg.cn/large/008i3skNgy1gud8f6rhb8j60y60u0t9l02.jpg"
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
                  As the bones grow, hydrogel with high elasticity gets
                  compressed and stressed. It has been shown that the
                  compression stress grows exponentially with increasing strain
                  ratio $S\%$.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >
                </p>
                <v-img
                  src="https://tva1.sinaimg.cn/large/008i3skNgy1gud7ps3npuj61hp0u0dio02.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.3}$ Compressive stress-strain curves of hydrogel
                    PAAm<sup @click="$vuetify.goTo('#references', options)"
                      >[1]</sup
                    >
                  </p>
                </v-row>
                <p class="body-1">
                  There isn't any appropriate arithmetic expression of this
                  function. Thus we take points on the curve in $\text{fig.3}$
                  evenly, using Spline interpolation to fit the curve. With the
                  help of MATLAB, we can get the well-fit ($R^2=0.997$) result
                  shown in $\text{fig.4}$.
                </p>
                <v-img
                  src="
                  https://tva1.sinaimg.cn/large/008i3skNgy1gudach9okmj60n20b4dg702.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.4}$ Result curve of Spline interpolation
                  </p>
                </v-row>
                <p class="body-1">
                  Considering equation $(1.3)$, the actual compression
                  stress-strain curve can be drawn ($\text{fig.5}$).
                </p>
                <v-img
                  src="https://tva1.sinaimg.cn/large/008i3skNgy1gudamto3uzj60n20cct8x02.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.5}$ Actual inner stress-strain curve of hydrogel
                  </p>
                </v-row>
                <p class="body-1">
                  Given the relationship of normalized response of PIEZO1
                  protein versus pressure ($\text{fig.6}$),
                </p>
                <v-img
                  src="https://tva1.sinaimg.cn/large/008i3skNgy1gudarchezwj60k60iu0tt02.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.6}$ Normalized response of PIEZO1 protein versus
                    pressure<sup @click="$vuetify.goTo('#references', options)"
                      >[2]</sup
                    >
                  </p>
                </v-row>
                <p class="body-1">
                  it can be seen that when the compressive strain is $35\%$, the
                  compressive pressure is $10.77\text{kPa}$ or $80\text{mmHg}$,
                  and the normalized response of PIEZO is nearly $100\%$. Also,
                  when the compressive strain is as low as $22\%$, the
                  normalized PIEZO response can still reach $50\%$. Therefore,
                  we've ascertained that PIEZO can be activated inside the
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
                  $\text{Ca}^{2+}$ signalling activates nuclear factor of
                  activated T cells (<strong><u>NFAT</u></strong
                  >), a family of transcription factors . The protein
                  phosphatase <strong><u>calcineurin</u></strong> plays a
                  significant role in this process. $\text{Ca}^{2+}$ activates
                  calcineurin in two ways: binding calcineurin directly and
                  activating the $\text{Ca}^{2+}$ binding regulatory protein,
                  calmodulin, which subsequently interacts with calcineurin.
                  When calcineurin is activated, it can then catalyze the
                  dephosphorylation of NFAT. Dephosphorylation of NFATs exposes
                  a nuclear localization signal which causes NFATs to be
                  imported into the nucleus, regulated by the action of a
                  specific phosphatase and a number of kinases. Finally, NFATs
                  in the nuleus can induce the target gene expression.
                </p>
                <v-img
                  src="
                  https://tva1.sinaimg.cn/large/008i3skNgy1gudcfuenu4j616f0u0n3g02.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.7}$ Schematic view of $\text{Ca}^{2+}$ regulating
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
                  https://tva1.sinaimg.cn/large/008i3skNly1gudd93tnlgj60uq0ej0tj02.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.8}$ PIEZO mediated $\text{Ca}^{2+}$
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
                  thought about. Let $\text{CN}$ and $\text{CN}_{off}$ be
                  activated and inactivated form of calcineurin respectively,
                  then ODEs $(2.1)$ and $(2.2)$ that describe their rates can be
                  written:
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
                  $\text{pNFAT}$ (phosphorylated form of NFAT in cytoplasm),
                  which is simultaneously phosphorylated with the help of
                  kinases such as protein kinase A (PKA) and glycogen synthase
                  kinase 3 beta (GSK3β). These reactions are
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
                  src="https://tva1.sinaimg.cn/large/008i3skNly1gudgj3wfvmj60u011nq4c02.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.9}$ Concentration of $\text{Ca}^{2+}$,
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
                  src="https://tva1.sinaimg.cn/large/008i3skNly1gudgztz27zj60t00ykmy602.jpg"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    $\text{fig.10}$ Concentration of $\text{mRNA}$ and
                    $\text{E}$ (trypsin) versus time in the first 1.4e6 seconds
                  </p>
                </v-row>
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
                        <th class="body-2">$\text{NAN}$</th>
                        <th class="body-2">NONE</th>
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
    this.step[2] = document.getElementById("gene");
    this.step[3] = document.getElementById("appendix");
    this.step[4] = document.getElementById("references");
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
                  