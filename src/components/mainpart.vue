
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
              Activation of PIEZO1 through mechanical force
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
              Gene expression with Ca^2+ signaling
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#enzyme', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Enzyme diffusion and drug release
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#backup', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Backup plan against over-expression
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
                  showing how force applied from the ends of the gel activate
                  PIEZO1 of inward cells. It provides basis for our design that
                  transmembrane protein <strong><u>PIEZO1</u></strong> inside
                  the hydrogel can be activated by the mechanical force during
                  the healing process of bones. Our second model describes the
                  hydrogel-degrading enzyme expression triggered by $Ca^{2+}$
                  signaling. This can exhibit how the change of $Ca^{2+}$,
                  resulting from the activated PIEZO1 channel, influences the
                  expression of our target gene quantitatively. Another model
                  shows the diffusion of enzyme inside the hydrogel and the
                  subsequent events including the degradation of hydrogel and
                  the release of target medicine which has been encapsulated by
                  hydrogel. This part supports our idea of controlled release of
                  medicine. Finally, the last model is created as a backup plan
                  in case of the unexpected over-expression of the target gene.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="activation">
                  Activation of PIEZO1 through mechanical force</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">【西南交大collaboration尚未完成】</p>
                <p class="body-1"></p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="gene">
                  Gene expression with $Ca^{2+}$ signaling</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  $Ca^{2+}$ signalling activates nuclear factor of activated T
                  cells (<strong><u>NFAT</u></strong>
                  ) , a family of four transcription factors (NFAT1-4, also
                  known as NFATc1-c4). The protein phosphatase
                  <strong><u>calcineurin</u></strong> plays a significant role
                  in this process. $Ca^{2+}$ activates calcineurin in two ways:
                  binding calcineurin directly and activating the $Ca^{2+}$
                  binding regulatory protein,
                  <strong><u>calcineurin</u></strong>
                  , which subsequently interacts with calcineurin. When
                  calcineurin is activated, it can then catalyze the
                  dephosphorylation of NFAT. Dephosphorylation of NFATs exposes
                  a nuclear localization signal which causes NFATs to be
                  imported into the nucleus, regulated by the action of a
                  specific phosphatase and a number of kinases.
                  <sup>[1]</sup>
                  Finally, NFATs in the nuleus can induce the target gene
                  expression.
                </p>
                <v-img
                  src="https://tva1.sinaimg.cn/large/008i3skNgy1gt52jekpsoj30w30kwwge.jpg"
                  alt="图先意思意思，之后或许能让美工画？"
                />
                <v-row justify="center" style="margin-top: 16px">
                  <p>
                    fig.1 Schematic view of $\ce{Ca^{2+}}$ regulating gene
                    expression.
                  </p>
                </v-row>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                Intracellular $\ce{Ca^{2+}}$</v-card-title
              >
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">【待定】</p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                Binding of $Ca^{2+}$ to calmodulin</v-card-title
              >
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">【待定】</p>
                <p class="body-1">
                  $$ {d[CN_{off}]\over dt}= -k_{CN,a}\cdot [Ca^{2+}]^3 \cdot
                  [CN_{off}]+k_{CN,da} \cdot [CN] \tag{2.1} $$ $$ {d[CN]\over
                  dt}= k_{CN,a} \cdot [Ca^{2+}]^3 \cdot [CN_{off}]-k_{CN,da}
                  \cdot [CN] \tag{2.2} $$
                </p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                2.3 (De)phosphorylation of pNFAT
              </v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  Calcineurin acts as a catalyst in the dephosphorylation of
                  $\text{pNFAT}$ (the phosphorylated form of NFAT in cytoplasm),
                  which is simultaneously phosphorylated with the help of
                  kinases. The reaction is
                </p>
                <p class="body-1">
                  $$ [\text{pNFAT}]
                  \underset{E_{NK}}{\overset{E_{CN}}\rightleftarrows}
                  [pi]+[\text{NFAT}], $$
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  and let $[pi]$ and $[\text{NFAT}]$ be the concentration of
                  phosphate and NFAT respectively. $E_{CN}$ represents the
                  calcineurin and $E_{NK}$ represents NFAT kinases as catalyst
                  here. We use Michaelis-Menten equation $(2.3)$ to describe
                  these enzymatic reactions.
                </p>
                <p class="body-1">In a typical enzymatic reaction</p>
                <p class="body-1">
                  $$
                  X+E\underset{k_{-1}}{\overset{k_1}\rightleftarrows}C\overset{k_2}\rightarrow
                  E+P, $$
                </p>
                <p class="body-1">
                  a substrate $X$ binds to an enzyme $E$ to form a
                  substrate-enzyme complex $C$, then forming the product $P$
                  irreversibly. Applying the Michaelis-Menten equation, one of
                  the important ODEs is as follows:
                </p>
                <p class="body-1">
                  $$ {d[P]\over dt}=V_m{[X]\over [X]+K_m} \tag{2.3} $$
                </p>
                <p class="body-1">
                  where $V_m$ is the maximum reaction rate of enzyme $E$, and
                  $K_m$ is Michaelis-Menten constant of the enzyme.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  In our case, considering the two reactions we can get the
                  ODEs:
                </p>
                <p class="body-1">
                  $$ {d[\text{NFAT}]\over dt}= {[CN]\over[CN]+[CN_{off}]} \cdot
                  {V_{mCN}[\text{pNFAT}]\over K_{mCN}+[\text{pNFAT}]}
                  -{V_{mNK}[\text{NFAT}]\over K_{mNK}+[\text{NFAT}]} \tag{2.4}
                  $$
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  $$ {d[\text{pNFAT}]\over dt}= -{[CN]\over[CN]+[CN_{off}]}
                  \cdot {V_{mCN}[\text{pNFAT}]\over K_{mCN}+[\text{pNFAT}]}
                  +{V_{mNK}[\text{NFAT}]\over K_{mNK}+[\text{NFAT}]} \tag{2.5}
                  $$
                </p>
                <p class="body-1">【未完：入核的说明/参数/数据图】</p>
                <p class="body-1"></p>
              </v-card-text>
              <v-card-title class="text-h5">
                2.4 Nuclear regulation of NFAT
              </v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  In the nucleus, NFAT binds to a non-palindromic composite
                  <strong>NFAT-response element</strong> (RE), derived from
                  IL2/8 promoter. Our design involves the target enzyme gene
                  driven by 3 repeats of IL2 promoter ($3\times$ IL2 NFAT-RE).
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  <v-img
                    src="https://tva1.sinaimg.cn/large/008i3skNly1gtk6nt7532j60uw0tmwhd02.jpg"
                  />
                </p>
                <p class="body-1"></p>
                <v-row justify="center">
                  <p class="body-2">fig.2 Gene regulation of NFAT.</p>
                </v-row>
                <p class="body-1"></p>
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
                <p class="body-1"></p>
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
                  $$ {d[E]\over dt}=k_{r}[r]-\lambda_{E}[E] \tag{2.7} $$
                </p>
                <p class="body-1">
                  where $[E]$ is the concentration of the target enzyme, and
                  $k_r$, $\lambda_E$ represents transcription rate of mRNA of
                  the target enzyme and degradation rate of the target enzyme
                  respectively.
                </p>
                <p class="body-1">【未完：参数/数据图】</p>
                <p class="body-1">
                  [^1]:
                  https://bmcimmunol.biomedcentral.com/articles/10.1186/1471-2172-1-1
                </p>
                <p class="body-1">[^2]: https://doi.org/10.1021/bi00557a009</p>
                <p class="body-1">
                  [^3]:https://doi.org/10.1007/978-1-4939-9030-6_7
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="enzyme">
                  Enzyme diffusion and drug release
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5"> 3.1 Diffusion</v-card-title>
              <v-card-text>
                <p class="body-1"></p>
                <p class="body-1">
                  Given the complexity of the composition and structure of GELMA
                  hydrogels, we decided to simplify the model of enzyme
                  diffusion in the hydrogels and use a basic model to predict
                  it.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  For larger spherical solutes immersed in a fluid, the relation
                  between solute diffusivity and fluid viscosity was reasoned by
                  Einstein using the kinetic theory of Brownian motion coupled
                  with results from continuum mechanics. The solute was assumed
                  to be large enough that diffusion would involve
                </p>
                <p class="body-1">
                  collisions with many smaller solvent (e.g. water) molecules
                  and, thus, an effective fluid drag would oppose solute motion.
                  From fluid mechanics, the frictional drag force f exerted by a
                  fluid of viscosity μ on a spherical particle of radius a
                  moving at steady velocity U through the fluid was already well
                  known:
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
                <p class="body-1">(1) the pressure gradient</p>
                <p class="body-1">$$ \partial P^{os}/\partial x $$</p>
                <p class="body-1">
                  (which has the units of a force density (Nm−3) and is
                  proportional to RT ∂ci/∂x from Van’t Hoff’s law) and
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  (2) the force density associated with the frictional drag on
                  the total number of solutes per unit fluid volume , in which
                  each solute molecule is subjected to the drag force 6πaμU.
                  Referring to Figure 1.3, the “driving force” for diffusive
                  flux in the +x direction is
                </p>
                <p class="body-1">$$ -\partial c_i/\partial x $$</p>
                <p class="body-1">
                  and, with zero net flux in equilibrium, the balance gives
                </p>
                <p class="body-1">
                  $$ \frac{-\partial P^{os}}{\partial x}=\frac{-RT\partial
                  c_i}{\partial x}=(6\pi a\eta U) (c_iN_{AV}) $$
                </p>
                <p class="body-1">
                  Besides, within an electrolyte medium, empirical evidence has
                  shown that the diffusive flux Ni of solute species i with
                  respect to the solvent is often linearly related to the local
                  gradient in the concentration of that species ci by
                </p>
                <p class="body-1">$$ N_i =-D_i\nabla c_i $$</p>
                <p class="body-1">
                  Combining these two relations and noting that the product ci*U
                  has the units of flux Ni , we arrive at the Stokes–Einstein
                  relation for the diffusivity:
                </p>
                <p class="body-1">$$ D_i=\frac{k_BT}{6\pi a\eta} $$</p>
                <p class="body-1">where the Boltzmann constant</p>
                <p class="body-1">$$ k_B = \frac{RT}{N_{AV}} $$</p>
                <p class="body-1">
                  R is the universal gas constant, and N is Avogadro’s number.
                  We also note that for a spherical particle, the radius a can
                  be approximated by (molecular weight)1/3. Thus, the
                  diffusivity is weakly dependent on the molecular weight.
                </p>
                <p class="body-1">
                  So the diffusion equation will be written as:
                </p>
                <p class="body-1">$$ \frac{∂c_i}{∂t}=D_i*\nabla^2c_i+R_i $$</p>
                <p class="body-1">
                  there is a simpler model, whose diffusion equation could be
                  like this:
                </p>
                <p class="body-1">$$ Dt=r^2 $$</p>
                <p class="body-1">
                  It is the model of Brownian motion and the major feature of
                  Brownian motion that we will use is that the average of the
                  distance squared covered by a diffusing particle grows
                  linearly with time, where D is also the diffusion constant
                  given by the Stokes–Einstein relation mentioned above.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="backup">
                  Backup plan against over-expression
                </v-card-title>
              </v-row>
              <p class="body-1"></p>
              <p class="body-1">【未完成】</p>
              <p class="body-1"></p>
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
                <v-card-title class="title">References</v-card-title>
              </v-row>
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
    this.step[3] = document.getElementById("enzyme");
    this.step[4] = document.getElementById("backup");
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
