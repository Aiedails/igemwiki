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
              @click="$vuetify.goTo('#summary', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              1. Summary
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#potential', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
                  2. Potential Customers & Unmet needs
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#mibom', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
                  3. MIBOM's feasibility & inventivity
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#development', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
                  4. Development plans and required capabilities, funds, and
                  stakeholders
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="5"
              step="5"
              @click="$vuetify.goTo('#long', options)"
              :complete="position > 5"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
                  5. Long-term Impacts
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
                  id="summary"
                  v-intersect="onIntersect"
                >
                  1. Summary
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  In the past six months, we have initiated the technology
                  transfer and commercialization process for the MIBOM project.
                  MIBOM is a new bone glue based on the mussel mucin + hydrogel
                  + cell engineering module for the treatment of
                  non-load-bearing bone fractures. It has 'high viscous
                  strength', 'self-regulation and degradation ability', 'promote
                  bone regeneration','fast curing', 'flexible operation' and
                  other functions. Compared with the steel plate on the market,
                  its degradability has a huge advantage. Compared to similar
                  biodegradable products, MIBOM's high viscous strength and
                  load-bearing capacity also give it a powerful capability. At
                  present, to accelerate the speed of technology transformation
                  and reduce the patent application cycle, we will submit a
                  class 2 patent application in October to speed up the process
                  of patent protection.
                </p>
                <p class="body-1">
                  We have identified our key customer base and their real needs.
                  From purchase decision makers to purchase payers, we deeply
                  investigated the obstacles encountered by doctors and patients
                  in existing treatment methods, hoping to enable them to
                  benefit from MIBOM, which including government medical sponsor
                  institutions, clinicians and ordinary consumers. According to
                  our POC design, we have received feedback from the trauma
                  orthopedic medical team in well-known hospitals, as well as
                  from ordinary consumer 'patients', who put forward higher
                  requirements for our strength and price.
                </p>
                <p class="body-1">
                  For long-term sustainability, our current treatment scenario
                  will focus on comminuted fractures and continue to develop
                  conventional fractures as the technology matures in the
                  future. We have received feedback from MicroPort. We took a
                  conservative approach, focused on comminution, and then
                  started to address non-load-bearing fractures. At present,
                  most degradable bone implants are limited by their
                  load-bearing strength and cannot be made a breakthrough in
                  form. Therefore, we choose to focus on comminuted fractures
                  and non-load-bearing bones and propose revolutionary
                  solutions. MIBOM will have a wider range of applications.
                </p>
                <p class="body-1">
                  We went through the peer [competitor analysis] and found that
                  the current consumables are often optimized in the material.
                  The existing bone nail, bone plate and other forms are
                  constantly updated to improve the strength, biocompatibility
                  and biodegradability of the material. This greatly increases
                  the cost of material modification, and MIBOM's bone glue can
                  have a strong cost advantage. Through the development of
                  synthetic biology, mussel mucin + hydrogels can form a double
                  cross-linked system with the ability to rival the strength of
                  existing biodegradable materials, and the cost of consumables
                  can be greatly reduced through biological extraction. MIBOM
                  has greatly improved the flexibility of operation because of
                  the subversion of fracture treatment.
                </p>
                <p class="body-1">
                  We developed a marketing Gantt chart for MIBOM technology
                  transformation and business practices. This planning diagram
                  includes research and development planning, patent application
                  planning, clinical registration planning, medical device
                  planning, enterprise cooperation and data platform planning
                  and construction. It will take about five years to develop,
                  promote and enter the market.
                </p>
                <p class="body-1">
                  Based on our stakeholders, we analyzed their behavior. In
                  order to get more support or feedback from them, we wrote
                  different versions of profiles, business plans and other
                  contents. Our important work is to build stronger partnerships
                  with our stakeholders, especially our suppliers or
                  distributors, whose support will greatly optimize our
                  production costs.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  To get more financial support, we launched roadshows in all
                  directions. We analyzed the events that we could participate
                  in with an 80% certainty and estimated that we could earn
                  $76,000 (500,000 RMB). At present, we have received 10000RMB
                  from Synbiopunk Challenge for the development and approval of
                  our project, and we expect to receive 100,000 RMB in early
                  October. At the same time, our school also provides us with
                  effective research funds, so in the early stage of research
                  and development, we will not face too much tightening of the
                  funding chain.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Our long-term impact is to bring new solutions to fracture
                  treatment. We will influence the application and development
                  of implant consumables across bone materials. Bone glue will
                  become a more flexible, convenient and cheap option. This
                  could not only upend existing treatments but also bring
                  benefits to under-resourced areas. The low cost would allow
                  more patients to afford it and would give local hospitals more
                  opportunities to treat patients instead of diverting them to
                  central provincial hospitals. It could also increase medical
                  resources across China.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Of course, there could be a downside to MIBOM. Due to the
                  existence of MIBOM cellular system, it is necessary to take
                  extra care in the waste treatment of MIBOM to prevent spillage
                  and contamination. At the same time, MIBOM also has the
                  pressure of treatment safety, any kind of medical error for
                  the patient is unbearable, this is also unbearable for MIBOM.
                  We want to address potential safety risks with experimental
                  integrity and rigor.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Please refer to our
                  <a
                    href="https://2021.igem.org/wiki/images/7/77/T--ShanghaiTech_China--hp--BP.pdf"
                    >business plan</a
                  >
                  for more information about MIBOM products.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="potential">
                  2. Potential Customers & Unmet needs
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  Doctors, patients and healthcare organizations can benefit
                  from MIBOM in different ways. Not only does MIBOM optimize
                  surgical procedures for surgeons, but it also reduces the risk
                  of nonunion in patients and costs for medical organizations.
                  MIBOM is a revolutionary treatment solution because its
                  biodegradability and ease of handling make it irreplaceable
                  among conventional biodegradable materials. We will analyze it
                  from the perspectives of core competitiveness, user analysis,
                  scene positioning and demand satisfaction.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                2.1 Unmet needs & Pain points
              </v-card-title>
              <v-card-title class="text-h6">
                Problems with implant removal surgery
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to the research results of ShanghaiTech_China team,
                  the removal of implants will occupy a large number of medical
                  costs and resources. The team investigated the market
                  situation of bone implants in China and the current actual
                  situation. Also, ShanghaiTech_China team has interviewed the
                  orthopedic trauma surgery team of Shanghai Ninth People's
                  Hospital (North Hospital) to obtain the main plans and
                  problems in the treatment of traumatic fractures. According to
                  the feedback, our team found that due to the safety issues
                  such as stress shield injury, friction and wear, toxicity and
                  other issues caused by orthopedic implant treatment, and the
                  limited acceptance capacity of bone-implant in domestic public
                  psychology, most traumatic fracture surgeries in China are
                  performed twice.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Depending on the field survey, taking Shanghai Ninth People's
                  Hospital as an example, there were about 2,040 fracture
                  operations annually, of which 29.25% were implant-removal
                  operations.
                </p>
                <p class="body-1">
                  <strong>（1）Huge medical expences</strong>
                </p>
                <p class="body-1">
                  In China, the cost of a lower limb internal fixation removal
                  is about 7000-8000 yuan, and the cost of upper limb internal
                  fixation removal is about 6000-7000 yuan. According to
                  statistics from the Health Bureau in 2017, there were 1,331
                  grade-A, three-level hospitals in China. According to the
                  sampling statistics of five grade A hospitals (Zhongda
                  Hospital affiliated to Southeast University, The First
                  Affiliated Hospital of Shantou University, Nanjing Gulou
                  Hospital, Shanghai Sixth People's Hospital and Beijing Third
                  People's Hospital), each hospital had an average of 1730
                  orthopedic trauma surgeries in a year. According to
                  preliminary modeling analysis, for 1331 grade A hospitals in
                  China, secondary trauma surgeries will generate an average
                  annual medical cost of 4.06 billion yuan. (1331(Grade A
                  hospitals)*1730(orthopedic trauma)* 29.25%(ratio of secondary
                  surgery)*6000(removal cost) = 4.06 billion RMB/year)
                </p>
                <p class="body-1">
                  <strong>(2）Occupation of medical resources</strong>
                </p>
                <p class="body-1">
                  Taking Shanghai Ninth People's Hospital as an example, the
                  department of orthopedics has 200 beds, about 40% of which are
                  orthopedic trauma groups. In one trauma group, there were
                  about 150 patients undergoing implant removal annually, and
                  one bed was occupied for a second operation every 2.5 days,
                  while implant removal patients occupied the bed for 3-4 days
                  on average. According to the data, a single orthopedic trauma
                  group admitted an average of 2-3 patients with implant removal
                  per week, accounting for 32.82 % of the number of beds.
                  Therefore, it is estimated by modeling that Shanghai Ninth
                  People's Hospital will undertake more than 1200 cases of
                  implant removal surgery every year, and about 25 beds will be
                  occupied by the second operation every week. The national
                  scale of orthopedic implant removal operations will affect the
                  use of more than 33,275 beds per week. (1331(Grade A
                  hospitals) *25 (orthopedic secondary surgery beds/weekly/per
                  hospital) = 33,275 beds)
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                The damage from the alloy implants
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  At present, most conventional fractures are fixed with
                  titanium implants. However, titanium alloy, stainless steel
                  and other implants will produce gap corrosion, friction
                  corrosion and fatigue corrosion fracture, and will cause
                  prosthesis loosening due to friction and wear problems, and
                  ultimately lead to implant failure, the main reason is stress
                  shielding. For titanium alloy bone plate and bone nail, the
                  mismatch between heavy limbs and bone elastic wood will make
                  the load cannot be well transferred from the implant to the
                  adjacent bone tissue, resulting in stress shielding
                  phenomenon, resulting in bone absorption around the heavy
                  limbs, and ultimately causing implant loosening or fracture,
                  resulting in implant failure. There are also tumors associated
                  with implant loosening, which are easy to form near the
                  implant, indicating that allogenic reaction is the main
                  mechanism of carcinogenesis. Therefore, titanium alloy and
                  other implants still have great defects in biocompatibility
                  and other fields, requiring secondary surgical removal to
                  eliminate their potential safety risks.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Operational dilemmas in the treatment of comminuted fractures
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In China, it is estimated that in 2021, there will be 295526
                  traumatic fractures, of which 10.21% will be femoral
                  fractures. 95% of femoral shaft fractures are comminuted.
                  Therefore, there will be an average of at least 280,000
                  comminuted fractures per year in China.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  According to our interviews with doctors in the hospital’s
                  orthopedic trauma team, the surgical time for comminuted
                  fractures is twice as long as that for conventional fractures,
                  which is mainly because of the cumbersome fixation of bone
                  fragments. In a grade-A hospital in china, about nine hours of
                  surgery a week are taken up by complex bone repair. From the
                  point of view of national health resources, about 7,986
                  operations a week will be taken up, which could cure an
                  additional 7,986 people. Therefore, simplifying comminuted
                  fractures will be a very necessary material development
                  direction. On the other hand, comminuted sex fracture also
                  brings about the circumstance such as bone is not connected
                  extremely easily to happen.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                2.2 Potential customers & Application scenarios
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  MIBOM is a bone glue product developed for comminuted or
                  non-load-bearing fractures for the internal fixation of bones.
                  MIBOM hopes to solve the problem of bone-implant degradation,
                  and at the same time simplify surgical procedures and shorten
                  the surgical time. Especially in comminuted fractures, the
                  implantation of fixation materials takes up most of the time,
                  which consumes a lot of surgical resources. Second surgeries,
                  on the other hand, impose high costs, huge resources and
                  scarring burdens on medical institutions and patients. We want
                  to solve these problems. Because bearing fractures is a
                  procedure that needs to be validated in long-term clinical
                  studies, resolving these fractures is not a feasible plan.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Potential Customers </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <v-img src="https://2021.igem.org/wiki/images/5/5c/T--ShanghaiTech_China--ent--1.jpg" contain max-height="600px" />
                </p>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Table 1. Identified customer groups & their value
                    propositions
                  </p>
                </v-row>
                <p class="body-1">
                  <strong>MIBOM’s first potential customers: Hospitals</strong>
                </p>
                <p class="body-1">
                  MIBOM will inevitably carry out clinical trials first, and our
                  first partnership is reached through the hospital. In human
                  practice, we also show that the doctors of Shanghai Ninth
                  People's Hospital have a certain recognition of our practice.
                  With strength and convenience, they also say they can move
                  forward with clinical applications after in vivo testing. As
                  an immobilized consumable that upends traditional therapeutic
                  models, the use of MIBOM is new to doctors, so they need more
                  proof of effective strength to convince them. Still, they say,
                  it's something that can be done.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Application scenarios
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <strong
                    >(1) Non-stress fracture internal fixation materials</strong
                  >
                </p>
                <p class="body-1">
                  Non-load-bearing fracture and comminuted fracture will be the
                  main application scenarios of MIBOM.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The consumables, costs and time of the second operation have
                  caused huge occupation and loss of patients and medical
                  resources. Patients need to bear the cost of titanium alloy
                  plate consumables, the cost of removal and the impact of
                  hospital stay on daily life. Medical resources need to carry
                  patients undergoing removal of internal fixation, so more
                  medical resources are occupied. On the other hand, the
                  treatment of more serious comminuted fractures takes a long
                  time because of its complex operation process, which increases
                  the burden of doctors' energy and operation level. Therefore,
                  MIBOM was developed to be a new generation of fracture
                  treatment options for non-load-bearing trauma and comminuted
                  fractures.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  MIBOM has the load-bearing strength required for
                  non-load-bearing bones and can handle comminuted fractures
                  with flexible handling capabilities. Therefore, in comminuted
                  fractures, cumbersome bone block treatment, bone nail repair
                  will be replaced by MIBOM bone glue. For conventional
                  fractures, MIBOM can directly treat non-load-bearing fractures
                  by cementing the fracture ends with bone glue and reducing
                  plate removal and injury to the bone.
                </p>
                <p class="body-1">
                  <strong
                    >(2)Future application scenario -- trauma dressing</strong
                  >
                </p>
                <p class="body-1">
                  Mussel mucin has a hydrophobic force, which can effectively
                  form a nano-level protective film at the local microscopic
                  level and effectively protect the wound surface or skin
                  mucosa. The special structure of mussel mucin can also provide
                  extended support for normal tissue cells around the wound,
                  which is beneficial for cells to crawl and grow from the
                  middle or from the bottom up and promote wound healing.
                  Therefore, mussel mucin can not only facilitate the exudation
                  of a wound and mucosal environment with fluid but also provide
                  a strong environment for wound healing.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Hydrogel modules, such as hyaluronic acid or hydrogel, help to
                  block the outer structure and prevent microbes from entering,
                  achieving an antibacterial effect. At the same time, the gel
                  can absorb exudate and toxic substances, providing an
                  effective environment for wound healing. At present, there are
                  many repair gels in circulation, which is one of the current
                  treatment schemes for wound repair.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Therefore, using the MIBOM module, the gel can be loaded with
                  mussel mucin, providing antibacterial, adhesion, absorption of
                  exudate, and providing a wound healing environment, helping
                  wound healing once. According to the module development, skin
                  or cell growth factor can be added into the gel, and a certain
                  regulatory system can be added to achieve steady control.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The wound dressing has a variety of application directions,
                  and corresponding products can be developed for different
                  types of trauma. The use of flexible MIBOM modules will enable
                  faster development and save r&d costs for concept exploration.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                2.3 Competitive analysis
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Internal fixation of bone material properties of biodegradable
                  is the orthopedic medical research and development of tuyere,
                  and there is no completely absorbable internal fixation
                  materials are widely used in the traumatic fracture, so most
                  bone material equipment companies will be main direction
                  positioning on the biodegradable material, to fill the blank
                  of the technology of the fractures of the clinical and break
                  through the traditional treatment.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Core competitiveness & Inventivity
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <strong
                    >(1) Unique biological autonomic regulatory system</strong
                  >
                </p>
                <p class="body-1">
                  MIBOM uses cells integrated into the hydrogel to autonomously
                  regulate the gel, and can autonomously respond according to
                  the state of bone healing. Compared with biodegradable
                  inorganic implants such as PLGA/PLLA, MIBOM can be adjusted
                  according to the patient's own condition and is more
                  patient-friendly. At the same time, MIBOM can release drugs
                  through bioregulation, allowing better-targeted treatment at
                  the fracture site. In the case of cytotoxicity, osteoblast
                  stem cells or the patient's own cells are used in the cell
                  regulation system, resulting in a smaller immune prototype and
                  less harm to the human body. The biological autonomic
                  regulation system enables MIBOM to pay more attention to the
                  feelings and state of patients and provide better solutions
                  for traumatic fractures.
                </p>
                <p class="body-1">
                  <strong>(2) Efficient protein extraction solution</strong>
                </p>
                <p class="body-1">
                  Compared with traditional mussel mucin extraction, using
                  synthetic biology method to modify and extract mussel mucin
                  can greatly reduce the cost and loss of extraction, and
                  improve the efficiency and quality of extraction. The new
                  technology solution provides MIBOM with lower costs and higher
                  quality materials. At the same time, the technical
                  transformation of mussel mucin gives MIBOM a more solid
                  research and development foundation, which is conducive to the
                  development of more products based on mussel mucin in the
                  future.
                </p>
                <p class="body-1">
                  <strong
                    >(3)Modular design, flexible research and
                    development</strong
                  >
                </p>
                <p class="body-1">
                  Compared to traditional r&d methods, MIBOM has a more flexible
                  modular r&d approach. The four modules of adhesive system,
                  regulation system, drug delivery system and gel system have
                  high compatibility and can be replaced and transformed. This
                  allows the team to quickly remove or develop a new feature in
                  one of these modules and verify its feasibility, rather than
                  considering the overall development plan and feasibility. The
                  modular research and development system is conducive to the
                  verification of different modules, making small modules more
                  efficient trial and error, iteration, and the development of
                  better preclinical concepts. Such a new way is beneficial to
                  personnel allocation, reducing the cost of r&d coordination,
                  reducing the cost of trial and error of large programs, and
                  achieving a more lean research and development.
                </p>
                <p class="body-1">
                  <strong
                    >(4) Raw materials have reliable certification, low safety
                    risk</strong
                  >
                </p>
                <p class="body-1">
                  GelMA has been approved by FDA and has a high safety factor.
                  Mussel mucin is widely used in the medical cosmetology
                  industry with high acceptance and product safety. Security and
                  reliability make the proof of concept of MIBOM more guaranteed
                  and help reduce the security risks caused by MIBOM
                  implantation.
                </p>
                <p class="body-1">
                  <strong
                    >(5)No complex technology transformation, fast product
                    iteration</strong
                  >
                </p>
                <p class="body-1">
                  MIBOM initially develops products with the market as its
                  demand and target. Compared with transforming existing
                  research achievements into reliable technologies, MIBOM will
                  save a lot of transformation costs and coordination costs. In
                  addition, as a start-up company, MIBOM is more sensitive to
                  the market. Meanwhile, all MIBOM technologies are the team's
                  independent property rights. Therefore, MIBOM can efficiently
                  respond to the market feedback and new demand for product
                  improvement, through modular research and development in a
                  short period of time to iterate better products, in a timely
                  line with the market dynamics.
                </p>
                <p class="body-1">
                  <strong
                    >(6)Diversified professional team and excellent R&D
                    atmosphere</strong
                  >
                </p>
                <p class="body-1">
                  Diversified team building enables MIBOM team to become an
                  excellent start-up team. First of all,MIBOM has an
                  experimental team of more than ten people, which enables MIBOM
                  team to complete the basic idea of the experiment in the three
                  fields of molecular and genetic, cell and genetic, and
                  biological materials. At the same time, MIBOM team has
                  excellent modeling talents, management talents, hardware
                  development, front-end production and a series of talent
                  reserves, which can fully meet the product design, R & D
                  testing, hardware development, front-end publicity, company
                  management and other processes, and can quickly span the
                  process from start-up team to start-up company. 84.2% of all
                  talents come from biology-related majors. The team has strong
                  expertise in biotechnology development and strong teamwork
                  ability. The team has a separate molecular and cell
                  laboratory. Every week, the team will put forward 2-3 new
                  schemes or iterative schemes, and the overall scientific
                  research atmosphere is strong.
                </p>
                <p class="body-1">
                  <strong
                    >(7)Rich academic resources and strong technical
                    support</strong
                  >
                </p>
                <p class="body-1">
                  The academic support from Shanghai University of Science and
                  Technology is one of our great strengths. ShanghaiTech
                  University (HEREINAFTER referred to as ShanghaiTech
                  University) is a full-time institution of higher learning
                  jointly established and built by Shanghai Municipal People's
                  Government and Chinese Academy of Sciences. The official
                  establishment was approved by the Ministry of Education on
                  September 30, 2013. The university is committed to serving the
                  national economic and social development strategy, cultivating
                  talents for scientific and technological innovation and
                  entrepreneurship, providing scientific and technological
                  solutions, and playing the role of a think tank. The
                  university is actively engaged in the reform of higher
                  education, participating in the construction of Shanghai
                  Science and Innovation Center, and striving to build itself
                  into a small-scale, high-level, international,
                  research-oriented and innovative university. The MIBOM project
                  is strongly supported by ShanghaiTech University with
                  long-term guidance from Yang Haitao, Executive Director of
                  Institute of ImmunoChemistry, ShanghaiTech University,
                  Professor Shen Wei, School of Life Sciences and Technology,
                  ShanghaiTech University, and Gao Yan, associate researcher of
                  ShanghaiTech University. Received the guidance of Professor
                  Zhang Yifeng from the school of Life and Technology, Professor
                  Hong Suting from School of Entrepreneurship and Management,
                  ShanghaiTech University, Professor Xiao Bailong from Tsinghua
                  University, Office of Tech Transfer, ShanghaiTech University
                  and Shanghai Ninth Institute.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Competitor Profile </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <strong
                    >(1) Chengdu Dikang Zhongke Biomedical Materials Co., LTD.
                    (dikang Zhongke)</strong
                  >
                </p>
                <p class="body-1">
                  <strong>Main products:</strong> absorbable fracture internal
                  fixation screws, absorbable medical anti-adhesion film. font>
                </p>
                <p class="body-1">
                  <strong>Indications:</strong>all kinds of non - bearing parts
                  of fracture internal fixation, osteotomy, joint fusion
                </p>
                <p class="body-1">
                  <strong>Scientific research Foundation:</strong> Scientific
                  research achievement of "Ultra-high molecular weight
                  poly-DL-lactic acid fracture internal fixation system", which
                  was undertaken by Chengdu Institute of Organic Chemistry,
                  Chinese Academy of Sciences.
                </p>
                <p class="body-1">
                  <strong>Basic Status:</strong> Chengdu Dikang Zhongke
                  Biomedical Materials Co., Ltd. successfully applied for the
                  2002 National Special appropriation of new materials for
                  high-tech industrialization of 4 million yuan on the basis of
                  "ultra-high molecular weight poly-DL-lactic acid and its
                  fracture internal fixation system". The construction scale of
                  the project is 200 kg of PLA per year, which can absorb
                  300,000 pieces of bone fixers, 1 million pieces of medical
                  anti-adhesion film and 5 million sutures. The annual output
                  value of the whole project reaches 1 billion yuan. At present,
                  the company is the largest poly-DL-lactic acid production base
                  in China.
                </p>
                <p class="body-1">
                  <strong>(2) Syntellix AG</strong>
                </p>
                <p class="body-1">
                  <strong>Main products:</strong> First-generation magnesium
                  alloy orthopedic trauma compression internal fixation screw
                  MAGNEZIX MgYREZr
                </p>
                <p class="body-1">
                  <strong>Indications:</strong> hand, foot small fracture, and
                  fracture nonunion
                </p>
                <p class="body-1">
                  <strong>Scientific research Foundation:</strong> Berlin
                  University School of Medicine
                </p>
                <p class="body-1">
                  <strong>Basic Status：</strong> In 2008, Syntellix AG was
                  founded based on the scientific research and technology
                  foundation of the Medical School of The University of Berlin.
                  In 2013, the MAGNEZIX MgYREZr (WE43) degradable magnesium
                  alloy compression screw developed by Germany's Sytellix AG
                  became the world's first Ce-certified orthopedic product for
                  small and fragment fixation. In December 2018, MAGNEZIX(WE43)
                  degradable magnesium alloy compression screw was registered as
                  an NMPA Innovative medical device in China. In 2019, MAGNEXZIX
                  screw will begin a multi-center clinical trial in China.
                </p>
                <p class="body-1">
                  <strong>(3)Dongguan Eontec Co., Ltd.</strong>
                </p>
                <p class="body-1">
                  <strong>Main products:</strong> ‘99.99 % high purity
                  magnesium’ orthopaedic internal fixation screws
                </p>
                <p class="body-1">
                  <strong>Indications:</strong> femoral head necrosis bone flap
                  transplantation operation fixation.
                </p>
                <p class="body-1">
                  <strong>Scientific research Foundation:</strong>Professor Qin
                  Ling, Faculty of Medicine, CuHK
                </p>
                <p class="body-1">
                  <strong>Basic Status:</strong> In 2013, Eontec led the "China
                  Medical Magnesium Alloy Innovation Alliance" and the
                  biological magnesium alloy research team of Germany APP
                  Implantate AG. In 2014, Eontec applied for "degradable
                  magnesium bone internal fixation screws" and passed the
                  special approval application for innovative medical devices.
                  Since 2015, clinical trials of high-purity magnesium
                  orthopedic screws have been carried out in Zhongshan Hospital
                  affiliated to Dalian University, with more than 100 cases.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Competitive Frame<v-img
                  src="https://2021.igem.org/wiki/images/f/ff/T--ShanghaiTech_China--ent--wpsD322.jpg"
                  contain
                  max-height="600px"
                />
              </v-card-title>
              <v-card-text>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Figure 1. The competitive frame of degradable internal
                    fixation material
                  </p>
                </v-row>
                <p class="body-1"></p>
                <p class="body-1">
                  By comparing the technical indicators, clinical application
                  and price of the above enterprises, it can be found that
                  currently, the degradable internal fixators are still in the
                  embryonic stage of trauma bone materials, and most of them are
                  in the process of technological transformation. Most materials
                  advocate the use of ultra-high molecular PLLA/PLGA or
                  magnesium and magnesium alloys, which greatly improves the
                  control of degradation ability and cannot bear excessive
                  weight. Therefore, MIBOM has great advantages in degradation
                  regulation ability, clinical application range, operational
                  flexibility and price setting. Moreover, the internal fixators
                  of ultra-high molecular materials are prone to damage and
                  other problems. Therefore, although Dikang Zhongke is listed,
                  it cannot completely solve all the needs of internal fixation.
                  However, most of the new degradable bone materials are based
                  on the transformation of existing research and development
                  technology, there is a big gap between the middle and the
                  market, and the transfer cost is high. MIBOM transcends the
                  long process of technology transformation and is more
                  sensitive to the market. Therefore, in the design process,
                  MIBOM directly faces the market and continuously iterates,
                  which can feed the market demand back more quickly, adjust
                  timely and obtain effective product solutions.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="mibom">
                  3. MIBOM's feasibility & inventivity
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  MIBOM is a realistic solution. In this part, we will prove the
                  development potential and entrepreneurial feasibility of
                  MIBOM. At the same time, we will also demonstrate the
                  extensibility and creativity of MIBOM to prove that this
                  concept is indeed capable of creating diverse product lines to
                  meet the needs of the market.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                3.1 The development potential of MIBOM
              </v-card-title>
              <v-card-title class="text-h6">
                Market background: aging society is approaching, and the
                incidence of orthopedic diseases is increasing significantly
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to the National Bureau of Statistics of China, the
                  number and proportion of the population aged over 65 continued
                  to increase in 2013, with 176 million people at the end of
                  2019, accounting for 12.57% of the total population, up 2.90
                  percentage points from 2013.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The incidence of orthopedic diseases is highly correlated with
                  age. Taking osteoporosis as an example, the incidence of such
                  diseases is significantly positively correlated with age, and
                  the incidence is extremely high in women. According to the
                  epidemiological survey conducted by K M Jordan, C Cooper et
                  al., there are 9 million brittle bone fractures every year,
                  and women aged 65 and older account for 74% of all fractures
                  in the United States.
                  <sup @click="$vuetify.goTo('#references', options)">[2]</sup
                  >The burden of brittle fractures will increase as the
                  population ages, with the annual incidence and cost of brittle
                  fractures projected to increase by 50 percent in the United
                  States by 2025. In 2018, the National Health Commission
                  released the results of the epidemiological survey on
                  osteoporosis in China for the first time, which showed that
                  the prevalence of osteoporosis in people over 65 years old was
                  as high as 32.0%, 10.7% in men and 51.6% in women. According
                  to the relevant orthopedic epidemiological survey, the
                  proportion of age groups with orthopedic diseases in China is
                  over 60 years old, accounting for 44.1%. With the aging
                  population increasing and average life expectancy increasing,
                  the incidence of fracture diseases will continue to grow.
                  China's orthopedic industry is further concentrated, and the
                  market demand for bone implants is gradually increasing.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> 3.2 Market size </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to the Frost Sullivan database, the market size of
                  Bone implants in China has also increased from 7.2 billion
                  yuan in 2010 to 30.4 billion yuan in 2019, with a compound
                  annual growth rate of 17.36%.<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[3]</sup
                  >
                  It is expected to maintain a steady growth rate of about 15%
                  from 2019 to 2023, and the market size will exceed 53 billion
                  yuan in 2023.
                </p>
                <p class="body-1">
                  <v-img src="https://2021.igem.org/wiki/images/c/c0/T--ShanghaiTech_China--ent--5.png" contain max-height="600px" />
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Figure 2. Market size and forecast of Orthopedic implant
                      in China from 2010 to 2023
                    </p>
                  </v-row>
                </p>
                <p class="body-1">
                  In the orthopedic market segment, according to IQVIA
                  statistics, Trauma products in China accounted for 24% of the
                  market. At present, as of 2013-2018, the sales revenue of the
                  trauma market has increased from 3.8 billion yuan to 7.7
                  billion yuan, and it is expected that the sales of the trauma
                  implantation market will reach 14.3 billion yuan in 2023, with
                  a compound growth rate of 13.3% within five years. It can be
                  concluded that the trauma bone material market is mature and
                  has sufficient market share, while the budding of new
                  technology will have a huge space for development.
                </p>
                <p class="body-1">
                  <v-img src="https://2021.igem.org/wiki/images/4/4e/T--ShanghaiTech_China--ent--4.png" contain max-height="600px" />
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Figure 3. Trauma implant consumables market in China
                    </p>
                  </v-row>
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> 3.3 Market Capacity </v-card-title>
              <v-card-text>
                <p class="body-1">
                  On the basis of the National Bureau of Statistics, the number
                  and proportion of the population aged over 65 continued to
                  increase in 2013, reaching 176 million at the end of 2019,
                  accounting for 12.57% of the total population, up 2.90
                  percentage points from 2013. Meanwhile, the average life
                  expectancy of Chinese residents has increased from 74.83 years
                  in 2010 to 77.3 years in 2020, according to the National
                  Health Commission.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The incidence of orthopedic diseases is highly correlated with
                  age. Taking osteoporosis as an example, the incidence of such
                  diseases is significantly positively correlated with age, and
                  the incidence is extremely high in women. According to the
                  epidemiological survey conducted by K M Jordan, C Cooper et
                  al., the number of brittle bone fractures is 9 million every
                  year, and in the United States, Women aged 65 years and older
                  accounted for 74%. The burden of brittle fractures will
                  increase as the population ages, with the annual incidence and
                  cost of brittle fractures projected to increase by 50 % in the
                  United States by 2025. In 2018, the National Health Commission
                  released the results of the epidemiological survey on
                  osteoporosis in China for the first time, which showed that
                  the prevalence of osteoporosis in people over 65 years old was
                  as high as 32.0%, 10.7% in males and 51.6% in females.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  According to the relevant orthopedic epidemiological survey,
                  the proportion of age group of orthopedic diseases in China is
                  also 44.1% over 60 years old. With the increase of aging and
                  average life expectancy, the incidence of fracture diseases
                  will continue to grow, the development of the orthopedic
                  industry will be further concentrated, and the market demand
                  for bone implants will gradually increase.
                </p>
                <p class="body-1">
                  <v-img src="https://2021.igem.org/wiki/images/1/14/T--ShanghaiTech_China--hp--3.a.png" contain max-height="600px" />
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Figure 4. China 2012-2021 Estimated orthopedic surgery
                      Volume
                    </p>
                  </v-row>
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                3.4 Feasibility Analysis:
              </v-card-title>
              <v-card-title class="text-h6">
                Technical feasibility:
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to verify the feasibility of the overall scheme, we
                  designed the division and arrangement of the preliminary
                  experiment in vitro. The experiment is divided into three
                  parts: the extraction and measurement of mussel mucin, the
                  culture and measurement of cells in the hydrogel, and the
                  activation and measurement of Piezo1 pathway.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  In the case of mussel mucin, we intend to first extract it and
                  then test the viscosity and mechanical strength of "gel +
                  mussel mucin". For the experiment of cell culture in the
                  hydrogel, we plan to prepare hydrogel first, then culture and
                  phototoxicity test at the same time. Finally, in the
                  activation and testing experiment section of Piezo1 pathway,
                  we plan to express Piezo1, then test the flow of CALCIUM ions
                  indicating Piezo1, and finally express the plasmids downstream
                  of Piezo1.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  As for the overall experimental scheme, we plan to complete
                  all the preliminary in vitro experiments before September 30,
                  followed by the next step of mass production of mussel mucin
                  and in vivo experimental verification.
                </p>
                <p class="body-1">
                  <v-img src="https://2021.igem.org/wiki/images/3/30/T--ShanghaiTech_China--ent--6.png" contain max-height="600px" />
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Table 1. MIBOM in VITRO experiment schedule
                    </p>
                  </v-row>
                </p>
                <p class="body-1">
                  So far, MIBOM has completed the proof-of-concept of its design
                  and has tentatively verified the strength of the
                  dual-crosslinked system and the feasibility of Piezo1. You can
                  refer to the
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Experiment"
                    >Experiment</a
                  >
                  and
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >
                  sections.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Safety: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  At present, MIBOM materials have been approved by the FDA or
                  have been widely used in the medical and health field (GelMA
                  has been approved by the FDA, mussel mucin has been widely
                  used in the medical beauty industry). Therefore, MIBOM can
                  maximize patient safety prior to clinical trials.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Economic viability: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <strong>(1) Expectation market share:</strong>
                </p>
                <p class="body-1">
                  In our product development plan, we plan to cover medical
                  devices, medical cosmetology, postoperative rehabilitation and
                  other industries. Such products have a large and steady
                  demand.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  At present, MIBOM is a new biodegradable material, which will
                  be developed in the orthopedic medical industry at the initial
                  stage, and in the beauty and trauma treatment industry at the
                  later stage. The product is in the embryonic stage of
                  development in the above industries. During the implementation
                  period, there are few competitors, and the profitability will
                  be greatly enhanced. According to the earnings forecast, if it
                  is introduced into the market in 2023, the return on equity
                  will reach 7%, and with the growth of the year, the return on
                  equity will reach 24% five years after it is put into the
                  market.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/e/e3/T--ShanghaiTech_China--ent--table3.png"
                    contain
                    max-height="600px"
                  />
                  <v-row
                    justify="center"
                    style="margin-top: 10px; margin-bottom: 10px"
                  >
                    <p class="body-2 fig">
                      Table 2. Estimated yield of MIBOM project
                    </p>
                  </v-row>
                </p>

                <p class="body-1">
                  <strong>(2)Cost input</strong>
                </p>
                <p class="body-1">
                  Our product production is mainly divided into two parts, one
                  is purification and modification of mussel mucin, the other is
                  cell culture and preparation of hydrogel bone nails.
                </p>
                <p class="body-1">
                  In general, the cost of raw materials for the two parts is
                  very low. On average, the cost of materials for preparing 1ml
                  hydrogel is about 5 yuan. Another major cost of the product is
                  hardware facilities. The purchase of high-speed centrifuges,
                  ultra-clean tables, shakers and other equipment will be a
                  considerable expenditure, and the estimated price will be
                  about 1 million yuan. Therefore, considering the cost of
                  facilities, materials and labor, the cost of our product will
                  be 20 yuan /ml. The cost is much lower than the same type of
                  products on the market.
                </p>
                <p class="body-1">
                  <strong>(3）Product Pricing</strong>
                </p>
                <p class="body-1">
                  Given the low cost of the product, we can use pricing that is
                  well below the industry average. At present, the price of a
                  degradable bone nail in the market is about 3000-4000 RMB,
                  while our product is estimated to be priced at 1000-1500 RMB.
                  It is a product worthy of investment and development with high
                  quality and low price and large profit space.
                </p>
                <p class="body-1">
                  <strong>(4)Operation Capacity</strong>
                </p>
                <p class="body-1">
                  Our products cover medical devices, medical cosmetology,
                  postoperative rehabilitation and other industries. These
                  industries have a large and steady demand for products.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Every year, countless patients suffer from fractures, burns
                  and other trauma, and our products such as bone repair gel and
                  burn treatment gel will be favored by a large number of
                  consumers because they can reduce the pain of patients in the
                  treatment process and shorten the time of postoperative
                  rehabilitation while being stable and efficient.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  In recent years, people demand for beauty products show stable
                  growth trend, the mussel mucin microscopic nanoscale
                  protective film can be formed, the physical barrier,
                  antioxidation, and at the same time, under the action of local
                  anti-inflammatory have acne pitting scar, rapid repair wound
                  skin, inhibit itching and melanin and multiple effects,
                  Coupled with the fact that our mussel mucin extract is of low
                  cost and high quality, our beauty products will quickly find a
                  niche in the market.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  To sum up, due to the extremely high market and the fact that
                  as a new and pioneering product, there are almost no
                  competitors in the industry at the initial stage of promotion,
                  it is preliminarily predicted that the project will have
                  strong profitability. After being in the market for a while
                  and building your own brand, profitability will be more
                  substantial.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/6/60/T--ShanghaiTech_China--ent--image-2021-352.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Table 3. Profitability of MIBOM</p>
                </v-row>
              </v-card-text>

              <v-card-title class="text-h5"> 3.5 Scalability </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Due to its modular 4 systems (Adhensive, Hydrogel, Regulation,
                  and drug delivery), MIBOM can be adapted to various
                  requirements such as drug redesign when later modified. At the
                  same time, a modular system like MIBOM is also conducive to
                  the development of products in other areas, such as beauty,
                  trauma repair and so on.
                </p>
                <p class="body-1">
                  <v-img src="https://2021.igem.org/wiki/images/5/51/T--ShanghaiTech_China--ent--7.png" contain max-height="600px" />
                </p>
                <p class="body-1">
                  For the needs of different areas, MIBOM only needs to adjust
                  each module to design new products. This can significantly
                  reduce the cost and time of the concept design and validation
                  phase. Due to the flexibility of design, MIBOM can also be
                  adjusted according to the needs of users, so that the product
                  can better adapt to the needs of users. The cost of the
                  overall adjustment of MIBOM is far less than that of a product
                  with only one idea from beginning to end.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  From a developmental perspective, modular MIBOM will
                  facilitate the development of materials adapted to different
                  fields and environments. By simply replacing one module,
                  cellular regulatory systems and materials that adapt to
                  different environments and feel different conditions can be
                  obtained. Thus, MIBOM can make more creative creations in the
                  transformation of functional materials.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> 3.6 Sustainability: </v-card-title>
              <v-card-title class="text-h6">
                Ecological sustainability
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We have modified existing mussel mucins through synthetic
                  biology. We hope that the expression of mussel mucin in
                  Escherichia coli can improve the viscosity of mussel mucin and
                  reduce the cost of the artificial purchase of mussel mucin.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Mussel mucin was originally produced and extracted from mussel
                  byssus, which was prepared by crushing, extraction,
                  chromatographic purification and concentration. Mussel mucin
                  is a potential resource in the biomedical field because of its
                  high viscosity, flexibility, water resistance and
                  biodegradability. Because of its special structure, mussel
                  mucin has strong waterproof properties and promoting healing
                  ability, which makes it can be developed as a medical
                  adhesive, medical coating or wound repair product. However,
                  its biggest feature of stickiness still has potential
                  development in other fields. So mussel mucin has become a
                  popular biomaterial.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  At present, the mainstream method of industrial extraction of
                  mussel mucin still adopts mass purification of the mussel foot
                  gland, but due to the low secretion of mussel mucin, the
                  amount of mussel mucin can be extracted from 10,000 mussels is
                  about 1mg. As a result, the extraction process and cost
                  significantly increased the price of mussel mucin-related
                  products. For example, Biopolymers, a Swedish company, sells
                  an adhesive called "Cell-tak" for $115 per mg in the United
                  States. A 10mg dose can cost around 7,500 yuan. On the other
                  hand, the product obtained from mass purification of the
                  mussel foot gland could not obtain higher strength viscosity
                  due to the limitation of the extraction process. This limits
                  the scope of application of mussel mucin. Currently, adhesive
                  products are mostly used for adhesion between non-adherent
                  cells and Petri dishes in cell culture. Therefore, the current
                  mussel mucin extraction process has high consumption, low
                  yield and low adhesion, which will lead to very large mussel
                  loss and waste.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  In order to reduce the waste of mussel raw material and reduce
                  the cost of mussel mucin, we choose to independently develop
                  mussel mucin production.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  We designed a microbial expression and purification system for
                  mussel mucin meFP5 to reduce the extraction cost and prepare
                  mussel mucin of higher quality. The experimental scheme was
                  designed to construct two and three repeated MEFP5 genes while
                  expressing mussel mucin. We have now tested the properties of
                  mussel mucin after this modification. In the future, we will
                  try to use in vitro tyrosinase expression and purification
                  system.
                </p>
                <p class="body-1">
                  We plan to test the feasibility of mussel mucin through
                  Escherichia coli in the stage of increased viscosity, and in
                  the production stage, we will use a yeast system to express
                  mussel mucin, which simplifies the protein extraction process,
                  reduces the cost and increases the yield.
                </p>
                <p class="body-1">
                  In short, by increasing the strength and yield of mussel mucin
                  from the perspective of synthetic biology, instead of
                  traditional mass extraction methods, this solution will
                  greatly reduce the waste of natural mussels and reduce the
                  cost of extraction. It is also more in line with sustainable
                  development and can protect limited Marine resources.
                  Meanwhile, artificial mussel mucins developed through
                  synthetic biology will be stickier and more stable than
                  natural mussel mucins. This is more conducive to expanding the
                  application scenarios of mussel mucin and developing the
                  potential of mussel mucin as a real medical material.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Health support for poor areas
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  MIBOM plans to adopt two product routes in the future: 1.
                  Primary products: 'mussel + gel' treatment products; 2.
                  High-quality products : 'mussel + gel + cell regulation'
                  treatment products.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Grassroots products will be promoted to the general public,
                  especially hospitals in small cities, and low costs and low
                  prices will help grassroots. In areas of extreme poverty or
                  unrest, MIBOM's base products are useful for emergency
                  fracture repair. As mass production of mussel mucin can be
                  achieved by yeast modification to meet industrial production
                  requirements, the cost of mussel mucin will be extremely low.
                  This helps MIBOM provide low-cost products for groups that do
                  not want to pay too much for treatment. On the other hand, as
                  adhesions and other functions make surgery more convenient and
                  flexible, the threshold of surgery will be relatively lower,
                  which is more conducive to the operation of doctors in areas
                  with insufficient medical resources. The low price and ease of
                  operation also make MIBOM useful in disaster first aid to
                  provide scalable, cost-effective treatment.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  MIBOM team always pursues the value concept of "Least waste,
                  Best Technology", and wants to reduce waste through excellent
                  technical transformation and provide low-cost and effective
                  labor solutions. In the future development planning, we plan
                  to cooperate with the government after the official launch of
                  MIBOM to promote the product to grassroots hospitals, reduce
                  the threshold of surgical operation, and help more areas
                  lacking medical resources.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> 3.7 Patenting: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  When we want to commercialize, Suting Hong, a professor in the
                  field of entrepreneurial management at Shanghai University of
                  Science and Technology, and Mr. Yunfeng Qiu, an expert in the
                  medical device industry, both proposed that we should take the
                  lead in protecting our concepts and products. Office of Tech
                  Transfer at ShanghaiTech University provides us with support
                  for patent applications. Patent applications require novelty,
                  innovation and industrial utility. The experts who helped us
                  saw that MIBOM had all three qualities and were willing to
                  support us. In addition, according to Mr. Yunfeng Qiu's
                  opinion, we can apply for an invention patent and utility
                  model patent at the same time to shorten the application
                  period and protect our concept in advance.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Before submitting the Patent Cooperation Treaty, we hope to
                  protect MIBOM by applying for a national Patent, which will
                  allow us to continue to have exclusive rights to the
                  technology in the future. We can have the opportunity to
                  develop intellectual property. On the other hand, the patent
                  can also prove the feasibility of MIBOM, increase the
                  competitiveness of MIBOM, attract investors more easily, and
                  persuade them to cooperate with us.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Office of Tech Transfer on behalf of the university is helping
                  us prepare the national patent application, which will be
                  filed on November 7, 202.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="development">
                  4. Development plans and required capabilities, funds, and
                  stakeholders
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                4.1 SWOT analysis & strategies
              </v-card-title>
              <v-card-text>
                <v-img src="https://2021.igem.org/wiki/images/d/dd/T--ShanghaiTech_China--ent--8.png" contain max-height="600px" />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Table 4. SWOT analysis</p>
                </v-row>
              </v-card-text>

              <v-card-title class="text-h5">
                4.2 Risk assessment & Response
              </v-card-title>
              <v-card-text>
                <v-img
                  src="https://2021.igem.org/wiki/images/6/61/T--ShanghaiTech_China--ent--risk.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Table 5. Risk assessment</p>
                </v-row>
              </v-card-text>

              <v-card-title class="text-h5">
                4.3 Development plans
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  ShanghaiTech_China team initially plans to develop a product
                  for comminuted fractures and develop an adrenal product for
                  internal fracture fixation, followed by clinical registration.
                  At the same time of registration, ShanghaiTech_China team
                  plans to further develop the viscosity and strength of the
                  product and upgrade MIBOM into a conventional degradable bone
                  fixation material. It is planned that clinical trials of MIBOM
                  comminuted fracture products will be completed in about 5
                  years and formal product distribution will begin. The
                  following is MIBOM's 5-year development plan:
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/e/ef/T--ShanghaiTech_China--ent--fracture-bu-2.png"
                  contain
                  max-height="600px"
                />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Table 6. Guideline of MIBOM development
                  </p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h5"> 4.4 Stakeholders </v-card-title>
              <v-card-title class="text-h6">
                Upstream Stakeholders
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  MIBOM upstream stakeholders include suppliers, sponsors,
                  investors and so on.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The price of traditional equipment suppliers, such as
                  centrifuges and shakers, is fixed, and there is no intention
                  to develop or cooperate with large equipment companies in the
                  field of medical equipment at present. Therefore, we cannot
                  have too much cooperation with equipment suppliers.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  As for the upstream stakeholders such as investors, we hope to
                  reach cooperation or agreement with them as much as possible,
                  especially the large enterprises of site supply or incubation
                  supply. A good partnership with this type of investor will
                  help us get more capital and incubation resources, as well as
                  the subsequent expansion of MIBOM's R&D and other departments.
                  Therefore, we made contact with Dr. Hongyan Jiang, the
                  business mentor of MicroPort, relying on the resources of the
                  school, and confirmed that we are expected to receive guidance
                  from the official technical evaluation team of MicroPort in
                  the future.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Midstream stakeholders
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  MIBOM will meet multiple midstream stakeholders, the most
                  important of which are the managers of the National Medical
                  Products Administration, the managers of National Healthcare
                  Security Administration and the decision-makers of hospitals.
                  All of the above stakeholders will influence the clinical,
                  registration, approval, health insurance payment and listing
                  issues.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The administrator of the National Medical Products
                  Administration mainly influences the clinical registration of
                  MIBOM and the approval of medical devices. Of all the
                  processes, MIBOM will have the longest contact time with the
                  National Medical Products Administration. Especially in the
                  approval process of medical devices, our team will repeatedly
                  contact and communicate with its managers to improve the
                  approval requirements. The manager's decision will greatly
                  affect the final flow of MIBOM. We hope to learn more about
                  medical device management requirements through the Yangtze
                  River Delta branch of China National Medical Products
                  Administration, so as to save time and avoid the need for us
                  to go to Beijing for understanding.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The administrator of the National Healthcare Security
                  Administration will be the ultimate payer of MIBOM, and
                  medical insurance will bear most of the cost of MIBOM.
                  Therefore, we need to go into the catalog of health insurance
                  and make an agreement with the Healthcare Security
                  Administration to ensure that the product has the ultimate
                  payer. That requires us to negotiate. Of course, it will be
                  relatively easy to cooperate with other commercial insurance
                  companies. MIBOM will try its best to cooperate with
                  commercial insurance companies in the future to provide a
                  better medical experience to patients.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Hospital decision-makers will have the greatest influence on
                  the progress of our clinical trials. At the same time,
                  hospital decision-makers will also influence the final
                  distribution channel of MIBOM downstream. If they have a good
                  clinical cooperation relationship with their decision-makers,
                  MIBOM can also be distributed in the original partner
                  hospitals after being approved and listed. Therefore, we will
                  try our best to find well-known third-class hospitals for
                  cooperation.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Downstream stakeholders
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The downstream stakeholders of MIBOM are very diverse, it can
                  be purchasing decision-makers, doctors; It could be a user, a
                  patient. Of course, rehabilitation doctors, nurses, are also
                  downstream stakeholders of MIBOM.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  For orthopedic surgeons, the primary decision will be whether
                  the patient will use MIBOM, and they will operate directly
                  with MIBOM. Therefore, safety and strength were crucial to
                  their persuasion. On the other hand, the guidance and training
                  of doctors also depend on the needs of doctors. Therefore, we
                  hope that by providing a product use guidance session, doctors
                  can fully understand MIBOM and also enable them to operate
                  fully with MIBOM.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  For patients, it is necessary to explain the product to them
                  because they are the ultimate users and beneficiaries.
                  Patients often learn about the treatment of a fracture from a
                  doctor's dictation. There is some deviation in the way of
                  dictation. In order to enable patients to make better
                  decisions, MIBOM will provide patient-specific product
                  descriptions and information on fractures to increase their
                  recognition of MIBOM.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  For rehabilitation doctors and nurses, they want to know more
                  about patients' physical conditions. This is beneficial for
                  rehabilitation doctors to conduct further rehabilitation
                  guidance. Therefore, in order to avoid the deviation of
                  dictation, MIBOM wants to provide a full range of intensive
                  treatment services. A 'patient manual' will be provided to
                  document the patient's condition. At the same time, the manual
                  also provides rehabilitation guidance, so that rehabilitation
                  doctors can better understand the problems that need to be
                  paid attention to during MIBOM treatment and some
                  rehabilitation data that can be referred to.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> 4.5 Funding </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to further develop our program, we need additional
                  funding for experimental, clinical and operational purposes.
                  Most of our cost structure is made up of R&D, and this part of
                  the cost will determine the final pricing. Fixed lab
                  consumables cost for MIBOM is only $153 / month. But we can't
                  estimate the cost of manpower and time. Due to the high risk
                  of development, it is impossible to estimate the cost of
                  previous concept trials. In order to establish an effective
                  capital chain, we planned our possible capital sources in the
                  early stages.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Entrepreneurship competitions organized by students or the
                  government are the most effective source of initial funding.
                  Compared with fundraising activities or incubator roadshows,
                  such entrepreneurship competitions require a relatively low
                  level of managerial competence and threshold. At the same
                  time, this kind of entrepreneurship competition can also give
                  some financial support to the start-up team in the initial
                  stage of project establishment and r&d. Currently,
                  ShanghaiTech_China has three sources of funding for an
                  entrepreneurship competition. The first is the Synbiopunk
                  Challenge hosted by Ailurusbiotech, for which we have received
                  \$1538 and we expect to receive a total of \$16,922 by October
                  9th. Second, there is funding from the Bio+ competition, which
                  will be held on October 27th and we expect to receive $15,384.
                  Third, TechIES2021, sponsored by Shanghai University of
                  Science and Technology, will give us at least \$1538 in
                  support.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  Furthermore, an innovative medical device r&d competition from
                  the National Medical Products Administration will help us get
                  more funding. On the other hand, in order to get further
                  support, roadshows can effectively get feedback and support
                  from venture capitalists, who will be our first investors and
                  clients. This type of funding can be very effective in the
                  late stages of development. Of course, in this case, we have
                  the full financing plan.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  The first round of funding will be used to develop and
                  manufacture bone repair hydrogels and further improve mussel
                  mucin extraction technology. The remaining funds will be used
                  for market registration, market research and sales promotion.
                  The capital of each part of the preliminary idea is as
                  follows: 60% for scientific research and development, 10% for
                  market registration, 15% for market research and 15% for sales
                  promotion.
                </p>
                <v-img src="https://2021.igem.org/wiki/images/7/7f/T--ShanghaiTech_China--ent--9.png" contain max-height="600px" />
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Figure 5. Financing plan</p>
                </v-row>
              </v-card-text>

              <v-row justify="center">
                <v-card-title class="text-h4 title" id="long">
                  5. Long-term Impacts:
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                5.1 Operational planning
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <strong>(1)The current business</strong>
                </p>
                <p class="body-1">
                  At present, MIBOM mainly focuses on the research and
                  development, registration, clinical and production of bone
                  implants, and intends to develop auxiliary bone implants and
                  conventional bone implants successively. Due to the long study
                  period, the development of viscous strength of mussel mucin
                  requires a long trial period. Therefore, MIBOM will first
                  develop an auxiliary bone fixation for the treatment of highly
                  comminuted fractures. After the technology stabilizes, MIBOM
                  will develop a conventional version of the bone-implant to
                  test its feasibility. This is the main product of the MIBOM
                  team, and we will do research and development, data modeling,
                  marketing and other multi-dimensional development. Further, in
                  order to expand the product line and timely develop low-cost
                  and popular products with high selling points, MIBOM will
                  develop modular products with "mussel mucin" as the core, and
                  finally determine a variety of highly compatible "protein +
                  cell + gel" products. This will help the team to reduce the
                  total cost of other areas of development, faster and more
                  effective development of new wound or beauty products.
                </p>
                <p class="body-1">
                  <strong>(2) Growth strategy</strong>
                </p>
                <p class="body-1">
                  In the future, the modular research and development products
                  of "mussel mucin + hydrogel + cell regulation system" will be
                  used in nerve repair, wound repair, beauty and other fields.
                  MIBOM will take advantage of existing resources and technology
                  advantages to rapidly develop innovative materials for wound
                  repair and beauty, and develop basic products with low price
                  and mass popularity. At the same time, MIBOM will broaden its
                  customer base and expand the hospital customer base to
                  individual consumers to meet their needs in the wound, beauty
                  and other fields, providing personalized skin protection
                  products or wound repair products that are adjusted according
                  to the body state. We will also accelerate product development
                  for individual consumers, achieve industrial production and
                  broaden the narrow application scenarios of MIBOM. This will
                  benefit MIBOM's capital flow and provide financial protection
                  for r&d risks. In addition, we will popularize basic products
                  so that MIBOM can establish its brand as soon as possible and
                  gain recognition among the medical field and the public.
                </p>
                <p class="body-1">
                  <strong>(3) Ultimate goal</strong>
                </p>
                <p class="body-1">
                  Ultimately, MIBOM hopes to provide solutions to uneven medical
                  resources on the one hand, and customized personalized
                  services on the other. After the multi-line products provide
                  effective cash flow, MIBOM hopes to bring the products to the
                  grassroots and solve the problem of medical resources. In this
                  segment, MIBOM plans to produce basic products based on the
                  "mussel mucin + hydrogel" product model, which eliminates
                  cellular regulatory systems through self-degradation of the
                  gel. Therefore, we hope to make the product more accessible to
                  patients and doctors at the grassroots level, greatly reduce
                  the production cost, product pricing and operation difficulty,
                  so that MIBOM can alleviate the imbalance of medical resources
                  from the perspective of materials. MIBOM, on the other hand,
                  will provide personalized therapy by introducing regulatory
                  systems into the patient's own cells to generate personalized
                  treatment and medication regimens, and ultimately solve
                  difficult diseases such as cancer and spinal cord nerve injury
                  through precision therapy.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                5.2 Beneficial influence of the MIBOM
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  MIBOM has the advantages of easy operation, low price,
                  biological regeneration and biodegradation. It will allow
                  patients to avoid secondary surgery and the high cost of
                  equipment, and it will revolutionize the treatment of
                  fractures and provide a new way of treating the medical
                  community. MIBOM is affordable, easy to operate and will
                  benefit patients in areas with inadequate medical resources.
                  Such patients are often unable to afford the high amount of
                  medical equipment, and at the same time cannot enjoy good
                  doctor treatment. As a result, MIBOM will lower the threshold
                  for physicians to operate and provide better benefits to
                  patients through technology.
                </p>
                <p class="body-1"></p>
                <p class="body-1">
                  In the long run, MIBOM will overturn the treatment plan, and
                  on the other hand, it will gradually empty medical resources.
                  In the future, fewer patients will have to be hospitalized to
                  occupy hospital beds because of implant removal, and more beds
                  and time will be reserved for patients undergoing emergency
                  surgery. Doctors will have more time to think about how to
                  provide good care for ordinary patients.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                5.3 Adverse effect of MIBOM
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Due to the storage of cells, MIBOM does not last long.
                  Therefore, MIBOM can easily be disposed of as medical waste.
                  In the process of treatment, there will be a lot of cell
                  overflow, material contamination occurs. At the same time,
                  MIBOM itself has great safety risks in the treatment process.
                  MIBOM may be displaced, infected, inflamed, bone nonunion,
                  secondary fracture and other situations, which are major
                  safety risks for patients. And this is something that we, in
                  human practice, doctors tell us over and over again. We need
                  to ensure the safety and strength of MIBOM, so in vivo
                  experiments need to be carried out as soon as possible.
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
                  [1]: Bulletin of the Seventh National Census (No. 1) .
                  [Internet] National Bureau of Statistics. 2019 [cited 1
                  October 2021]. Available from:<a
                    href="https://data.stats.gov.cn/easyquery.htm?cn=C01"
                    >https://data.stats.gov.cn/easyquery.htm?cn=C01</a
                  >
                </p>
                <p class="body-2">
                  [2]:Jordan KM, Cooper C. Epidemiology of osteoporosis. Best
                  Pract Res Clin Rheumatol. 2002 Dec;16(5):795-806. doi:
                  10.1053/berh.2002.0264. PMID: 12473274.
                </p>
                <p class="body-2">
                  [3]:Innovations in Neuromodulation, Connected Health,
                  Microneedles, Telemedicine, and Advanced Orthopedic Implants.
                  [Internet] Frost Sullivan. 2018 [cited 1 October 2021].
                  Available from:<a href="http://www.frostchina.com/?p=8494"
                    >http://www.frostchina.com/?p=8494</a
                  >
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
    this.step[0] = document.getElementById("summary");
    this.step[1] = document.getElementById("potential");
    this.step[2] = document.getElementById("mibom");
    this.step[3] = document.getElementById("development");
    this.step[4] = document.getElementById("long");
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
