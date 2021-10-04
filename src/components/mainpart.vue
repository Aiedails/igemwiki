
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
              <v-row justify="center">
                <v-card-title class="text-h4 title"> 1. Overview </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  At present, the annual incidence of fractures is increasing
                  due to the aging of the population and the soaring demand for
                  exercise. MIBOM is an organization dedicated to solving human
                  health problems. Whether in orthopedic medicine, or in the
                  development of synthetic biology technology, MIBOM wants to
                  contribute its own strength.
                </p>
                <p class="body-1">
                  MIBOM's vision has always been to make fracture treatment less
                  traditional and cumbersome. In the next five years of research
                  and development, we will adopt the strategy of "limited
                  development of supplementary internal fixation materials for
                  comminuted fractures" to develop a new medical device for
                  fracture treatment. We hope that in the future, we can develop
                  an internal fixation material for conventional fractures,
                  achieve the ability to truly replace the plate, and develop a
                  new set of fracture treatment plan.
                </p>
                <p class="body-1">
                  This year, we have made good progress in the development of
                  fracture treatment protocols. MIBOM received over 1200
                  submissions, received advice and support from 30 experts, and
                  received over 50 stakeholder feedback. We hope that MIBOM can
                  develop better with the support of all kinds of people.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  2. General principles of product design and transformation
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                2.1 The logic of Integrated Human Practice
              </v-card-title>
              <v-card-title class="text-h6"> R&D process </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <v-img src="@/assets/1.png" />
                </p>
                <p class="body-1">
                  It is not easy for the team manager to make the Integrated
                  Human Practice advance in an orderly way and give reasonable
                  feedback to the team so that the team can carry out effective
                  iteration. While collecting information and feedback
                  information, our team needs to make adjustments
                  simultaneously. At the same time, we also need a reasonable
                  inspection mechanism to ensure that our adjustments are
                  effective. In order to make the ShanghaiTech_China team more
                  streamlined, we spoke to Jean Dai, a professor specializing in
                  management research, about how to implement effective
                  iterations. Professor Jean Dai provided us with a list of
                  questions for enterprise R&D management, and let us constantly
                  ask ourselves whether we have met the requirements on the
                  list. At the same time, she also provides us with the logic of
                  the R&D process, arguing that we should keep records at each
                  stage to ensure that the R&D cycle is sustainable. According
                  to the suggestion of Professor Jean Dai, we established the
                  overall R&D process logic ( Figure 1), and established a set
                  of Integrated Human Practice execution logic by referring to
                  the PDCA cycle.(Figure 2)<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >
                </p>
                <p class="body-1">
                  <v-img src="@/assets/principle1.png" />
                </p>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">Figure 1. R&D process of MIBOM</p>
                </v-row>
              </v-card-text>
              <v-card-title class="text-h6">
                PDCA cycle of Integrated Human Practice
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Further, we developed PDCA cycle of Integrated Human Practice.
                </p>
                <p class="body-1">
                  P( Plan ): Identify the problems to be solved at this stage
                  and formulate corresponding solutions, such as interviews,
                  experiments and other means. Specify '5W1H' : Why, What,
                  Where, Who(or When), How.
                </p>
                <p class="body-1">
                  D( Do ): Execute according to the plan developed in phase P,
                  such as perform 'interview', 'experiment' or 'design'. In
                  phase D, work needs to be ensured that it is effectively
                  implemented on schedule.
                </p>
                <p class="body-1">
                  C( Check ): Verify that the implementation has been completed
                  according to the plan in phase P and that the implementation
                  is up to standard. If the expected results are not achieved,
                  new problems need to be resolved. In stage C, the tasks that
                  have reached the standard and those that have not reached the
                  standard need to be calculated reasonably.
                </p>
                <p class="body-1">
                  A( Act ): A needs to summarize the problems listed in phase C
                  and deal with the remaining problems. Phase A may also be
                  phase P and D of the next cycle, where problems need to be
                  identified, plans made, and implementation
                </p>
                <p class="body-1">
                  <v-img src="@/assets/2.png" />
                </p>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Figure 2. PDCA cycle of Integrated Human Practice
                  </p>
                </v-row>
                <p class="body-1">
                  The A phase of the PDCA may be the P and D phases of the next
                  cycle. The PDCA cycles are connected, and each time the team
                  solves a portion of the effort. In this cycle, the C and A
                  phases are used to carry out the verification and summary of
                  the cycle, so this needs to be completed by the team. We
                  complete phases C and A of each cycle in weekly group
                  meetings. At the end of the first loop, a new problem and a
                  second loop are immediately followed, and so on
                </p>
                <p class="body-1">
                  In the PROCESS of R&D, the cycle is progressive, but also long
                  and huge. We've done four cycles until October 2021, but for a
                  rising tech star, MIBOM, we need to do a lot more than that.
                  We still face multiple PDCA cycles to refine the project and
                  the subsequent technology transformation logic.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                2.2 Principles of investigation
              </v-card-title>
              <v-card-title class="text-h6">
                Informed consent and privacy protection
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In terms of informed consent, we have set up an informed
                  <a
                    href="https://2021.igem.org/wiki/images/7/7e/T--ShanghaiTech_China--hp--Consulting_informed_constent.pdf"
                    >consent commitment</a
                  >
                  before all interviews and questionnaire collection; and all
                  interviews will be released after the consent is obtained. We
                  will do our best to ensure the interviewees' right to protect
                  their privacy
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Qualitative interviews
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  During Conducting interviews, we referenced Harvard
                  University's
                  <a
                    href="https://sociology.fas.harvard.edu/files/sociology/files/interview_strategies.pdf"
                    >'Strategies for Qualitative'</a
                  >
                  Interviews' to design questions and interview flow
                </p>
                <p class="body-1">
                  In order to elucidate the purpose of the interview, we
                  designed a
                  <a
                    href="https://2021.igem.org/wiki/images/1/1f/T--ShanghaiTech_China--hp--Brief_introduction.pdf"
                    >simple introduction</a
                  >
                  for all interviewees to have a basic idea of our team. Before
                  the interview, we also prepared some desk research for the
                  interview, to ensure that the interview can avoid the other
                  party to help us analyze the problem
                </p>
                <p class="body-1">
                  In the setting of questions, we adopt special questions as the
                  main form of questions, to avoid a single answer. We also
                  avoided conceptual problems, such as asking the surgeon to
                  give an attitude on behalf of the whole
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Ethics and responsible research
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We have deeply studied the
                  <a
                    href="https://2021.igem.org/wiki/images/f/f8/T--ShanghaiTech_China--hp--%E8%B5%AB%E5%B0%94%E8%BE%9B%E5%9F%BA%E5%AE%A3%E8%A8%80.pdf"
                    >WMA DECLARATION OF HELSINKI – ETHICAL PRINCIPLES FORMEDICAL
                    RESEARCH INVOLVING HUMAN SUBJECTS</a
                  >, and we have tried our best to avoid all ethical issues
                  related to access and data collection, and to ensure the
                  informed rights and privacy of all interviewees. Our
                  classmates and friends who had broken bones had been treated
                  under pseudonyms, and all the experts advising us had asked
                  for their consent
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  3. Cycle 1: Identifying the problem
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                3.1 P: What problem are we trying to solve?
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  At the very beginning, we were faced with identifying a topic.
                  we held brainstorming sessions every week to share our ideas
                  and concepts. But this leads to the first problem. A lot of
                  assumptions and designs require context, and if you can't be
                  sure that the question is really necessary, you can't take the
                  design any further. We need to look for the problem, and look
                  for the pain point of the problem, at the same time, in the
                  end, abandon the problem we want to solve a problem? Is this
                  question really necessary
                </p>
                <p class="body-1">
                  According to the group meeting, our team proposed three
                  general directions: 1. To solve the formaldehyde problem. 2.
                  To solve the problem of secondary surgery for fracture. But
                  how do you know if they're really necessary?
                </p>
                <p class="body-1">
                  We plan to solve the problem in two ways: 1. To ensure that
                  our ideas are novel and competitive, we will understand the
                  current market development trend and existing competitors
                  through desk research. 2. Interview users to understand
                  whether there is a real demand for formaldehyde and fracture.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                3.2 D: Investigate the dilemmas in our lives
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Our initial background study of the problem was based on
                  existing industry research reports and the general public.
                </p>
                <p class="body-1">
                  For formaldehyde, we gave priority to the industry report, and
                  preliminarily evaluated whether we have the demand for
                  formaldehyde treatment. We found that the current development
                  direction of formaldehyde industry is air purifier or fresh
                  air system, these two kinds of air purification or circulation
                  machine for formaldehyde removal efficiency. Of course, there
                  are also biological enzymes or adsorption products to remove
                  formaldehyde. However, we also found that in fact there are a
                  lot of harmful substances in the air, in new houses, new cars
                  or furniture decoration, formaldehyde and other harmful
                  substances, such as toluene, are common. In terms of design,
                  we adopt a single biological method to remove formaldehyde.
                  Compared with the air purifier, it obviously lacks the
                  function of removing other substances and has a relatively
                  large disadvantage, which requires further improvement in our
                  technical development.
                </p>
                <p class="body-1">
                  As for fracture treatment, we first conducted a desk survey,
                  and found that research reports in the bone material industry
                  mainly focused on 3D printed joint and sports medicine. For
                  traumatic fractures, desk studies don't give us enough
                  exciting information. Because implants for traumatic fractures
                  are well developed, we realized that we needed to interview
                  patients and doctors to learn more.
                </p>
                <p class="body-1">
                  Therefore, we first interviewed two volunteers who knew us.
                  With their consent, we are now putting their views on fracture
                  surgery on a website. At their request, we did not provide the
                  actual photos, and we helped them with alias processing. The
                  two patients reflected different conditions. The first patient
                  experienced clavicle fracture during her senior year of high
                  school, and she was deeply impressed by the expensive cost
                  that could not be reimbursed by the medical insurance. She
                  paid 40,000 RMB for the steel plate, and she also paid about
                  1,000 RMB for the subsequent scar repair drugs. At the same
                  time, she believes, the plate fixation of the fracture left
                  her with a lot of scarring. In addition, the bone meal filling
                  also made her bone surface uneven, which was very obvious to
                  her thin. Another patient suffered a wrist fracture in
                  college. He was also troubled by the expensive medical
                  expenses, and the bone implant always made him feel dull pain
                  on rainy days, which greatly affected his classes and
                  homework.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/3.png" />
                </p>
                <p class="body-1">
                  Based on their feedback, we learned that perhaps the biggest
                  burden of fracture is cost, but there are also scarring,
                  aesthetic and implant rejection issues. We further interviewed
                  Yong Ding, an orthopedic surgeon from Baoshan Branch of
                  Huashan Hospital. In fact, Dr. Yong Ding tells us, we can
                  focus more on the cost of removing implants. Most patients
                  choose to have implants removed because they do not accept the
                  presence of foreign body residue and because the plate may
                  damage the bone. Dr. Jie Ma from Shanghai Ninth People's
                  Hospital also reported to us that 30% of traumatic fracture
                  surgeries each year are implants removal.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/4.png" />
                </p>
                <p class="body-1">
                  Combined with our research, we found that there will be
                  2,956,626 trauma fractures in China in 2021(Figure3)<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2]</sup
                  >, of which 815,246 will be secondary surgical removal.
                  Currently, the average cost of surgical removal of implants in
                  the market is 6000 RMB, so the removal cost of the second
                  operation will reach $4.89 \times 10^9$RMB. These are huge
                  numbers, and whether they are borne by patients themselves or
                  through medical insurance, they are undoubtedly huge costs.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/3.a.png" />
                </p>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Figure 3. China 2012-2021 Estimated orthopedic surgery
                    volume(Source from:Frost Sullivan )
                  </p>
                </v-row>
                <p class="body-1">
                  Finally, we had the background of formaldehyde and fractures,
                  and we needed to check and plan our next steps.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                3.3 C: Which option to choose?
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We have learned about the current market situation of
                  formaldehyde and fracture content. We plan to make the final
                  decision through group meeting to verify which one we really
                  should do. Our tutor, Professor Haitao Yang, pointed out to us
                  that formaldehyde is not a good solution because fewer and
                  fewer people are troubled by it now. On the one hand, there
                  are many formaldehyde removal tools or paint, or
                  formaldehyde-free furniture products on the market; On the
                  other hand, in developed countries, the residential land has
                  been fixed, most of the houses are older, less formaldehyde
                  problems. Therefore, removing formaldehyde is not a good idea.
                  As for the fracture treatment plan, Teacher Haitao Yang
                  affirmed the background of the plan and thought it was a very
                  valuable idea. But he also suggests that we take biosecurity
                  seriously.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/5.png" />
                </p>
                <p class="body-1">
                  To sum up, the problem of fracture is relatively obvious, and
                  there is a lot of room for improvement whether it is price
                  burden or scar and other problems.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                3.4 A: Summarize the research experience and plan what to do
                next
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Finally, we decided to choose fracture treatment as the theme
                  of our project this year, and our follow-up plan was carried
                  out with the theme determined. In the first cycle, our
                  investigation was actually controversial. For example, for
                  formaldehyde, we did not consult air purifiers and other
                  formaldehyde treatment experts or manufacturers, so we could
                  not know whether formaldehyde was really necessary. In
                  contrast, for fractures, our research is more comprehensive.
                  That was one of the factors that led to our final decision on
                  fracture management.
                </p>
                <p class="body-1">
                  But even so, the fracture was the best choice for this year's
                  project. In terms of the existing research resources, we have
                  more contacts in fracture treatment and orthopedics to help us
                  double-check and confirm whether our plan is feasible.
                  Interpersonal relationship and personnel capacity are the
                  basis for a plan to be carried on. However, in the topic of
                  formaldehyde treatment, we really lack friends or professors
                  who understand relevant industries. Therefore, we finally
                  decided to redesign the fracture treatment, with the intention
                  of designing a new and subversive treatment plan.
                </p>
                <p class="body-1">
                  In the next stage, our main task is to design a feasible
                  solution, which is our technical iteration.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                4. Cycle 2: Birth and iteration of MIBOM
              </v-card-title>
              <v-card-title class="text-h5">
                4.1 P: The introduction of MIBOM
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  After we decided to go with the fracture, our group shifted to
                  thinking about how to repair the fracture. In the following
                  first group meeting, we proposed that mussel mucin has very
                  high viscous strength, which is one of the ways to consider,
                  such as direct adhesion or coating. Next, we were divided into
                  two groups and presented different solutions, hoping to
                  achieve both fixed fracture end and biodegradable properties.
                  The first group's plan is inspired by hydrogel, which uses the
                  repair technology of hydrogel and mussel mucin to directly
                  produce bone glue to achieve the repair effect. The second
                  team's plan is to use magnesium, a stress similar to that in
                  human bones, to fix fractures. The former is a form of bone
                  glue, while the latter uses the traditional nail and plate
                  form, but we want both solutions to be biodegradable.
                </p>
                <p class="body-1">
                  After a week of design and brainstorming, we finally decided
                  to adopt the mussel mucin + hydrogel design scheme as the
                  preliminary final draft of our project. We intend to achieve a
                  double cross-linking system through mussel mucin + hydrogel,
                  so that the high viscosity of mussel mucin can be supported by
                  the high strength of hydrogel and become a stable and solid
                  bone glue. At the same time, in order to achieve
                  biodegradability, we designed a cell regulation system. By
                  virtue of the fact that cells can grow in hydrogel, we can
                  make cells secrete degradation factors in hydrogel to achieve
                  biodegradation.
                </p>
                <p class="body-1">
                  So there are a couple of things that are troubling us now. 1.
                  How should we teach cells to sense force and then regulate it?
                  2. What do experts think of our plan and how to update it and
                  make it more reliable?
                </p>
                <p class="body-1">
                  Therefore, based on these questions, we plan to interview
                  experts in the next step to get their suggestions or thoughts.
                  We have listed a set of question topics, which mainly include
                  the following:
                </p>
                <v-list class="list_number">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div class="body-1">
                        1. What is the process of fracture treatment and
                        cicatrization? Clinical development of fracture
                        treatment?
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div class="body-1">
                        2. How do you make cells feel stressed to release gel
                        degradation factors?
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div class="body-1">
                        3. How to be more in line with cutting-edge research?
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div class="body-1">4. Another suggestions.</div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-title class="text-h5">
                4.2 D: Interviews, suggestions & responses
              </v-card-title>
              <v-card-title class="text-h6">
                (1) The background of Orhopedic treatment
              </v-card-title>
              <v-card-title class="text-h6"> Interview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to understand the process of fracture treatment and
                  healing, the clinical needs of fracture treatment and the
                  suggested development direction of materials, we interviewed
                  Dr. Sun Xin, an orthopaedic doctor from Shanghai Ninth
                  People's Hospital.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Suggestion </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <v-img src="@/assets/6.png" />
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Response </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to Dr. Xin Sun's suggestion, we understand the
                  specific principle of fracture healing and think it is
                  reasonable to develop this biodegradable material. According
                  to the interpretation given to us by Dr. Xin Sun, we also
                  found that making a material with high biocompatibility and
                  biodegradation ability is relatively rare in the treatment of
                  traumatic fractures. Therefore, we can confirm that the idea
                  of mussel mucin + hydrogel + cell engineering is highly
                  feasible
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                （2）How to make the design biodegradable?
              </v-card-title>
              <v-card-title class="text-h6"> Interview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  To make the idea more innovative and biodegradable, we asked
                  one of our advisors, Professor Wei Shen, for advice on the
                  idea of "bone glue".
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Suggestion </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <v-img src="@/assets/7.png" />
                </p>
                <p class="body-1">
                  We did not claim the right of Bailong Xiao's image, so we used
                  stick figures instead.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Response </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Based on Professor Wei Shen's suggestion, Piezo1 protein was
                  introduced to design the cell regulation module and the
                  cell-material interaction system was developed. Here, with the
                  help of Professor Xiao Bailong from Tsinghua University, we
                  provided Piezo1 protein plasmids, which enabled us to
                  successfully verify the cellular material
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                (3) How to be more in line with cutting-edge research?
              </v-card-title>
              <v-card-title class="text-h6"> Interview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to make such an inspiration more feasible and in line
                  with current research development, we asked professor Zhang
                  Yifeng, an expert in sports medicine, for his opinion on
                  developing such a material for orthopedic treatment.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Suggestion </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <v-img src="@/assets/8.png" />
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Response </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to the suggestion of Professor Yifeng Zhang, we
                  added a new drug module in our idea. According to the
                  characteristics of hydrogels, we considered using
                  nanoparticles wrapped into the gel for targeted delivery.
                  Regeneration gives us a broader perspective on how we can
                  improve fracture management to reduce nonunion or
                  osteonecrosis
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                (4) The change! Another application scenarios.<br />
                --viewpoints from R&D experts in orthopedic device industry
              </v-card-title>
              <v-card-title class="text-h6"> Interview </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In the real application, we want to know the opinion of the
                  orthopedic device development experts in the industry on our
                  fracture treatment plan of mussel mucin + gel + cell, so we
                  interview Dr. Yanhong Jiang, r&d technical Director of
                  minimally invasive Medicine.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Suggestion </v-card-title>
              <v-card-text>
                <p class="body-1">
                  <v-img src="@/assets/9.png" />
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Response </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to the suggestion of Dr. Hongyan Jiang, we
                  reconsidered the application scenario of the design, narrowed
                  the scope to comminuted fractures, and reconsidered the design
                  of our idea as an auxiliary fixator for comminuted fractures,
                  including auxiliary steel plates, intramedullary nails and
                  other materials. In order to confirm the pain points, we
                  returned to the orthopedic trauma treatment group of Shanghai
                  Ninth People's Hospital to re-understand the current treatment
                  plan and development potential of comminuted fractures.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                4.3 C&A: The adjustment of MIBOM
              </v-card-title>
              <v-card-title class="text-h6"> Results </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Based on these comments, we began to reconsider how to design
                  MIBOM. We conducted group discussions and discussed that MIBOM
                  should be composed of four modules: Adhesive System, Hydrogel
                  system, Regulation System and Drug System. Meanwhile, due to
                  the lack of experimental data, we believe that we should adopt
                  Dr. Hongyan Jiang's advice to redesign the application
                  scenario of MIBOM as comminuted fracture, so as to optimize
                  the feasibility of MIBOM.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Next step </v-card-title>
              <v-card-text>
                <p class="body-1">
                  However, we still have a lot of undefined goals: 1. Whether
                  the proof of concept of MIBOM can succeed remains to be
                  verified. 2. Whether the demand for comminuted fractures is
                  really great also needs to be verified.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  5. Cycle 3: The concept of MIBOM is becoming practical.
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                5.1 P:Two aspects that make MIBOM more realistic
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In the third phase, we aim to make MIBOM practical over time.
                  In order to achieve this goal, our main tasks are as follows:
                  1. Prove that MIBOM is feasible through experiments. 2. Make
                  MIBOM gradually become a real product that can be applied to
                  human society by means of technological transformation.
                </p>
                <p class="body-1">
                  In the first part, we need to get in touch with the teachers
                  in the school and get their experimental support. In the
                  second part, we need to reinvestigate the current situation of
                  comminuted fractures with the doctor and understand the
                  confusion caused by them. At the same time, we also need to
                  treat MIBOM as a commercial project and raise funds through
                  business plan and competition, so as to lay a foundation for
                  subsequent experimental research and development of MIBOM.
                </p>
                <p class="body-1">
                  So, in phase P of the third cycle, our plan is to split up. In
                  one group, understanding and cooperation with the experimental
                  teacher were achieved, and the teacher supported the
                  experimental verification. The other interviewed doctors to
                  learn about pain points and wrote a business plan to get the
                  project off the ground.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                5.2 D: Coordination, investigations and start-up
              </v-card-title>
              <v-card-title class="text-h6"> (1) Coordination: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We need to rent the lab, get the cell line, get the funding
                  for the experiment to validate it. In this respect, teachers
                  Haitao Yang, Wei Shen and Yan Gao provided us with technical
                  guidance. Teachers Jing Yang and Xuesong Chen provided us with
                  laboratory and financial support. Teacher Ying Xi and Teacher
                  Yanfen Liu provided 293T cell line for us. Many teachers from
                  Shanghai University of Science and Technology provided
                  experimental conditions for us to carry out further
                  experiments. The Results of our Experiments can be seen from
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Experiments"
                    >Experiments</a
                  >
                  and
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Results"
                    >Results</a
                  >.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> (2) Investigations: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to clarify the pain point of comminuted fracture, we
                  went to Shanghai Ninth People's Hospital (South Hospital)
                  again and interviewed doctors in the orthopedic trauma
                  treatment group. Meanwhile, we also re-interviewed Dr. Yong
                  Ding from Baoshan Branch of Huashan Hospital. The purpose of
                  this interview is to confirm the current situation and
                  problems of comminuted fractures. We need to make sure that
                  comminuted fractures are really causing a lot of trouble for
                  doctors and patients.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/10.png" />
                </p>
                <p class="body-1">
                  In the interview with the doctor, we learned that the duration
                  of comminuted fracture is 30% longer than that of conventional
                  fracture, mainly because the reduction and fixation of the
                  broken bone greatly increases the complexity of the operation
                  and consumes most of the time. Comminuted fractures also have
                  a higher incidence of nonunion than conventional fractures.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> (3) Start-up: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  When we think about technology transformation and
                  commercialization, we think entrepreneurship is the best
                  option, but it also means we have to pay more. We investigated
                  the market and market size. Meanwhile, we also analyzed our
                  current competitive environment, our strengths and weaknesses,
                  our development plan and our risk response. We put it all
                  together in our
                  <a
                    href="https://2021.igem.org/wiki/images/7/77/T--ShanghaiTech_China--hp--BP.pdf"
                    >business plan</a
                  >. To this end, we can have a better understanding of
                  themselves, reflect on their own shortcomings, and what can be
                  expanded.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/bp.jpg" />
                </p>
                <p class="body-1">
                  In order to confirm that our business plan really illustrates
                  MIBOM and its development potential, we consulted professor
                  Suting Hong, an expert in entrepreneurship management. She
                  showed us an example of a real business plan and gave us
                  detailed requirements for improvement. We are very grateful to
                  our teachers for their support.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/11.png" />
                </p>
                <p class="body-1">
                  We adjusted our business plan according to teacher Suting
                  Hong's suggestion, and no longer repeated the meaning in
                  pictures and words. The business plan presented above is our
                  final version, but in fact our business plan has gone through
                  three rounds of iterations. We will continue to improve our
                  business plan through roadshows.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                5.3 C: Check the status at that stage
              </v-card-title>
              <v-card-title class="text-h6">
                (1) Pain point survey:
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  For the technical transformation part, based on the above
                  investigation, we concluded the current pain points of
                  comminuted fracture:
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                High medical resource occupancy rat
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Combining our online survey, we found that 10.21% of the
                  traumatic fractures performed were femoral fractures.
                  <sup @click="$vuetify.goTo('#references', options)">[3]</sup
                  >Of these femoral fractures, 95% are comminuted.
                  <sup @click="$vuetify.goTo('#references', options)">[4]</sup
                  >Thus, there are at least 280,000 more comminuted femoral
                  fractures in China in 2021（ with the traumatic fracutre
                  number:295,6626 ) , and the total number of comminuted
                  fractures is much higher. we have preliminary epidemiological
                  data showing that there will be at least 280,000 comminuted
                  fractures in China each year. In a grade-A hospital, about
                  nine hours of surgery a week are taken up by complex bone
                  repair. From the point of view of national health resources,
                  about 7,986 operations a week will be taken up, which could
                  cure an additional 7,982 people. (Figure.4)
                </p>
                <p class="body-1">
                  <v-img src="@/assets/fracture-b-1.png" />
                </p>
                <v-row
                  justify="center"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <p class="body-2 fig">
                    Figure 4. Estimated annual number of comminuted fractures in
                    China
                  </p>
                </v-row>

                <p class="body-1"></p>
                <p class="body-1">
                  This huge amount of comminuted fractures in China brings about
                  the occupation of medical resources, as well as the cost
                  burden on patients.
                </p>
                <p class="body-1">
                  We don't have a cost estimate, but the medical resources for
                  comminuted fractures alone are huge: According to our
                  interviews with doctors in the hospital’s orthopedic trauma
                  team, the surgical time for comminuted fractures is twice as
                  long as that for conventional fractures, which is mainly
                  because of the cumbersome fixation of bone fragments. In a
                  grade-A hospital in china, about nine hours of surgery a week
                  are taken up by complex bone repair. From the point of view of
                  national health resources, about 7,986 operations a week will
                  be taken up, which could cure an additional 7,986 people.
                  Therefore, simplifying comminuted fractures will be a very
                  necessary material development direction. On the other hand,
                  comminuted sex fracture also brings about the circumstance
                  such as bone is not connected extremely easily to happen
                </p>
                <p class="body-1">
                  <v-img src="@/assets/fracture-b-5.png" />
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> Complex Operation </v-card-title>
              <v-card-text>
                <p class="body-1">
                  The removal of bone fragments from comminuted fractures is a
                  problem for doctors. Because of the high difficulty of
                  processing, the technical level of doctors is also high, most
                  young doctors can not start. Such tedious, on the one hand,
                  occupy the current medical resources, on the other hand,
                  doctors operation has brought obstacles.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> (2)Business plan: </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We conducted three iterations of the business plan according
                  to teacher Suting Hong's suggestions. During this period, we
                  modified many complicated charts, improved our financial
                  analysis, and improved the elaboration of pain points and
                  market analysis.
                </p>
                <p class="body-1">
                  Through our business plan, we applied for Synbiopunk
                  Challenge, Bio+ Technology Entrepreneurship Competition,
                  Innovation entrepreneurship Competition and other
                  competitions. We have received the notification from
                  Synbiopunk Challenge and expect to be in good shape to
                  participate in Bio+ Technology Entrepreneurship Competition,
                  Innovation Entrepreneurship Competition. Our business plan has
                  received preliminary approval from the outside world.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> (3)Experiment </v-card-title>
              <v-card-text>
                <p class="body-1">
                  We reported the progress of the experiment in the form of
                  weekly group meeting to determine the difficulties we met and
                  decide what we need to do in the next stage. The
                  proof-of-concept experiment is to verify the feasibility of
                  the material in vitro for the time being, but when we enter
                  into the in vivo experiment, the experimental status will be
                  closely related to human practice.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                5.4 A:Goals for next stage
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In the research and entrepreneurship cycle, we made clear the
                  pain points of the application scenario of comminuted
                  fracture, and then set up a reasonable business plan and plan
                  for the entrepreneurship plan. However, medical
                  entrepreneurship is a long process, we need to consider the
                  practical application and circulation of MIBOM as soon as
                  possible, to help MIBOM complete a better design.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  6. Cycle 4: Practical implementation & Tech Transfer
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                6.1 P:How to know the application scenarios and distribution
                channels of MIBOM
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  At this stage, we need to start thinking about what we need to
                  pay attention to when MIBOM is actually used in a real
                  scenario. At the same time, we also need to know what
                  procedures a medical device project needs to go through before
                  it really goes on the market, and what countermeasures we can
                  take first.We decided to understand the above two aspects
                  through the form of interview.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/13.png" />
                </p>
                <p class="body-1">
                  When determining the interviewees, Professor Jean Dai suggests
                  that there are actually many stakeholders to look for. We can
                  not only look for orthopedic surgeons, nurses, rehabilitation
                  doctors are also things to consider. Secondly, as for our
                  business plan, she thinks that we can study the relevant laws
                  and regulations on medical devices to determine which medical
                  devices we will apply for.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                6.2 D: Implementation and medical device management
              </v-card-title>
              <v-card-title class="text-h6"> (1)Implementation </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to understand how bone glue should be operated and
                  what problems should be paid attention to in actual surgical
                  operations, we interviewed Chouwen Zhu, president of the
                  Center for the Future of Medicine, to get his opinion. At the
                  same time, we also interviewed doctors in the orthopedic
                  trauma team of the Ninth People's Hospital to learn what kind
                  of methods doctors would adopt in the actual operation of
                  comminuted fractures.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/12.png" />
                </p>
                <p class="body-1">
                  The advice given to us by Professor Chouwen Zhu was very
                  helpful. Before this, we did not imagine the relationship
                  between the wound opening surface and the surgical operation.
                  This led us to rethink the design of the hardware system,
                  which we will discuss in group meetings later to optimize.
                </p>
                <p class="body-1">
                  According to The advice of Professor Chouwen Zhu, we should
                  further consult the doctor to learn how the doctor separates
                  the tissue from the broken bone during comminuted fracture
                  operation. In addition, we also want to know what other issues
                  need to be considered in the actual operation of bone glue as
                  an implant.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/14.png" />
                </p>
                <p class="body-1">
                  Both doctors gave us a lot of advice, which made us rethink
                  what should be optimized for this MIBOM. Before the interview,
                  MIBOM was a double-crosslinked system, which could be
                  completely cured by UV light. However, there was no
                  reversibility after curing, so doctors could not make mistakes
                  in surgical operations. This reduces MIBOM's fault tolerance
                  and ease of operation. Second, if you use glue but still stick
                  to the bone piece by piece, the treatment may be regressive.
                  These two issues are the main content of subsequent iterations
                  and reflections.
                </p>
                <p class="body-1">
                  What can we do for rehabilitation doctors outside of surgery
                </p>
                <p class="body-1">
                  The rehabilitation stage is the later stage of fracture
                  treatment and healing. As a product to deal with comminuted
                  fractures, we hope to provide all-round services for patients.
                  Therefore, we sought out Haixia Yang, a rehabilitation doctor
                  from Shanghai Ninth People's Hospital (North Hospital), to
                  explain the most important details in the rehabilitation
                  process and give us some advice on what to pay attention to
                  during the rehabilitation phase.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/15.png" />
                </p>
                <p class="body-1">
                  According to Dr. Haixia Yang's suggestion, we think it is
                  really necessary to have a patient manual. Dictation is often
                  missing or biased. For patients, a more comprehensive way can
                  be adopted, such as discharge summary or "manual" to record
                  the patient's physical state, so that rehabilitation doctors
                  can better understand the patient
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> (2)Register </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to learn more about the registration strategy, we
                  read the regulations issued by China National Medical Products
                  Administration and learned that we need to submit various
                  documents to provide complete safety and effectiveness of
                  drugs. We are class III medical devices, so we need to go
                  through clinical trials before registration. At this stage, we
                  prepare the experiment and register simultaneously. In order
                  to learn more about technology transformation strategies, we
                  have found Teacher Yunfeng Qiu, an expert in medical device
                  management, and hope he can give us advice.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/16.png" />
                </p>
                <p class="body-1">
                  According to the advice of Teacher Yunfeng Qiu and the
                  practices of other entrepreneurial teams, we plan to protect
                  and apply for patents through the school Office of Tech
                  Transfer. And we will further study the approval and
                  accelerated approval channel scheme for three types of medical
                  devices.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                (3)Development strategy
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  During the interview with Professor Chouwen Zhu, he also
                  suggested that our MIBOM concept could not only be used in
                  fracture treatment. It is a modular, multifaceted concept, and
                  in fact, the MIBOM gel concept is a good choice when
                  considering wound treatment, dressings or sutures.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/17.png" />
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                6.3 A&C: Reflection & Iteration
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In response to the feedback from all the experts, we
                  reconsidered how to optimize the practical application,
                  registration and future development of MIBOM. The following is
                  divided into three major sections for illustration.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                (1) Implementation optimization
              </v-card-title>
              <v-card-title class="text-h6"> Hardware </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order for the machine to perform fine work on smaller
                  surgical wounds, we need to combine the uv curing device with
                  the injection device. At the same time, we need long control
                  arms to avoid complicated operation. For tissues outside the
                  bone, a conventional stripper can be used, but for the bone
                  glue itself, an injection machine can be more accurate than
                  manual operation.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/fracture-p-1.png" />
                </p>
                <p class="body-1">
                  To that end, this year's Hardware designed this feature to
                  allow the arm to distance between uv fixation and injection.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Operational reversibility of MIBOM:Semi-fluidity of the gel
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  In order to make the gel not completely solidified during the
                  operation, so that doctors can have room for operation and
                  adjustment, we set MIBOM as three solidified systems. We
                  discussed that UV curing could not completely cure the gel,
                  but made the gel into a semi-fluid state, and the real curing
                  needs to be achieved by calcium ion excitation ion curing.
                  Therefore, we set up the ion curing scheme, so that UV curing
                  is only a temporary semi-flow curing, to meet the doctor's
                  requirements for reversible operation.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                Patient portable manual
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  On the advice of Dr. Haixia Yang, we set up a Patient Portable
                  Manual. This manual consists of three parts: 1. MIBOM and
                  fracture popularization for patients. 2. Comparison of MIBOM
                  usage instructions and parameters for doctors. 3. Check column
                  of patient records for doctors. The manual will be carried by
                  patients to ensure that other doctors will also be able to
                  understand the details of patients when they come into contact
                  with them and give them more appropriate medical advice.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/fracture-pr-1.png" />
                </p>
              </v-card-text>
              <v-card-title class="text-h6"> (2) Patenting </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to teacher Yunfeng Qiu's suggestion, we will give
                  priority to applying for invention patent and new utility
                  patent. Due to different approval cycles, simultaneous
                  applications can be protected in the fastest way through the
                  most secure way. Since we had no funds at the early stage, we
                  could not invest in patent application, so we consulted the
                  Office of Tech Transfer of ShanghaiTech, and they were very
                  willing to give us such help.
                </p>
                <p class="body-1">
                  <v-img src="@/assets/19.png" />
                </p>
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
                <p class="body-1">
                  Office of Tech Transfer on behalf of the university is helping
                  us prepare the national patent application, which will be
                  filed on November 7, 2021.
                </p>
              </v-card-text>
              <v-card-title class="text-h6">
                (3) Development Strategy
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  According to teacher Chouwen Zhu's suggestion, we have
                  developed a series of development strategies.
                </p>
                <p class="body-1">· <strong>The current business</strong></p>
                <p class="body-1">
                  At present, MIBOM mainly focuses on the research and
                  development, registration, clinical and production of bone
                  implants, and intends to develop auxiliary bone implants and
                  conventional bone implants successively. Due to the long study
                  period, the development of viscous strength of mussel mucin
                  requires a long trial period. Therefore, MIBOM will first
                  develop an auxiliary bone fixation for the treatment of highly
                  comminuted fractures. After the technology stabilizes, MIBOM
                  will develop a conventional version of the bone implant to
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
                <p class="body-1">· <strong>Growth strategy</strong></p>
                <p class="body-1">
                  In the future, the modular research and development products
                  of "mussel mucin + hydrogel + cell regulation system" will be
                  used in nerve repair, wound repair, beauty and other fields.
                  MIBOM will take advantage of existing resources and technology
                  advantages to rapidly develop innovative materials for wound
                  repair and beauty, and develop basic products with low price
                  and mass popularity. At the same time, MIBOM will broaden its
                  customer base and expand the hospital customer base to
                  individual consumers to meet their needs in wound, beauty and
                  other fields, providing personalized skin protection products
                  or wound repair products that are adjusted according to the
                  body state. We will also accelerate product development for
                  individual consumers, achieve industrial production and
                  broaden the narrow application scenarios of MIBOM. This will
                  benefit MIBOM's capital flow and provide financial protection
                  for r&d risks. In addition, we will popularize basic products
                  so that MIBOM can establish its brand as soon as possible and
                  gain recognition among the medical field and the public.
                </p>
                <p class="body-1">· <strong>Ultimate goal</strong></p>
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
                  treatment and medication regiments, and ultimately solve
                  difficult diseases such as cancer and spinal cord nerve injury
                  through precision therapy.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title">
                  7. Conclusion: Evaluate our project value
                </v-card-title>
              </v-row>
              <v-card-title class="text-h5">
                7.1 Focus on real pain points:
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Finding pain points is not an easy task to implement. It's not
                  through self-speculation, it's through interviews, gathering
                  the opinions of different people. In medical projects, the
                  user relationship is very complex. In this case, who to find
                  to understand the pain point is a big problem for us. Patient
                  or doctor? Whose view is more comprehensive? We talked to an
                  entrepreneur in the testing industry, and he suggested to us
                  that doctors, they have a more professional and meaningful
                  view. If you want to understand what's wrong with the market,
                  ask your doctor. Therefore, we in this human practice, most of
                  the doctors to understand the development of fracture
                  treatment, solutions and dilemmas.
                </p>

                <p class="body-1">
                  Looking back at these studies six months later, we need to
                  acknowledge that our sample size is still limited. Unlike
                  questionnaires, which can be collected quickly, interviews are
                  relatively slow, and they require more coordination energy. We
                  need to acknowledge the need to learn as much as possible to
                  reach people in the industry. We tried, but it wasn't enough.
                  We hope that MIBOM's PDCA cycle will not stop after iGEM2021,
                  so that we will have more time to prepare for visiting objects
                  and find contact channels.
                </p>
              </v-card-text>
              <v-card-title class="text-h5">
                7.2 Focus on technology transformation
              </v-card-title>
              <v-card-text>
                <p class="body-1">
                  Technological transformation is a very complex process, and
                  the ways and difficulties of technological transformation are
                  different in different fields. To achieve good
                  entrepreneurship and technology transformation, we must always
                  think about whether our ideas really solve people's pain
                  points? How feasible are we? How many competitors do we have?
                  What strategies should we adopt? Are we financially viable?
                </p>
                <p class="body-1">
                  Only when the above content is satisfied can the whole R&D
                  cycle be closed. Apparently, not right now. MIBOM is a class
                  III medical device, so it needs to go through a long clinical
                  registration to get an IND, and then it needs to cooperate
                  with hospitals to get more resources for clinical trials. At
                  the same time, we also need to improve the existing products,
                  so that they can reach the technological level. The cycle is
                  about four years. In the coming year, clinical registration
                  will be a major event and dealing with the management of
                  clinical registration will be essential. MIBOM can only be
                  approved after all these procedures have passed. At present,
                  MIBOM is only in the POC phase and has not even entered the in
                  vivo phase. At this level, our R&D cycle will continue for a
                  long time to come, so we won't close our cycle again for a
                  while.
                </p>
                <p class="body-1">
                  We will continue to engage with the stakeholders involved in
                  all of the processes mentioned earlier. We are also working
                  with venture capitalists to get more investment and financial
                  support from them.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"> 7.3 Conclusion </v-card-title>
              <v-card-text>
                <p class="body-1">
                  This year, we believe Integrated Human Practice has carried
                  out good technology transformation Practice. We hope that
                  MIBOM is not a satellite on paper, but a meteorite that can
                  really fall on the ground of human society. We all hope MIBOM
                  will be the latest product to revolutionize fracture
                  treatment, but only if MIBOM is available in five years.
                  Therefore, we will continue to strive to make MIBOM a
                  practical and feasible fracture treatment implant, so that it
                  opens up a new way and ideas for helth.
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
                <p class="body-1">[1]:ISO9001:2015(E) ; GB/T19000-2016</p>
                <p class="body-1">
                  [2]:Innovations in Neuromodulation, Connected Health,
                  Microneedles, Telemedicine, and Advanced Orthopedic Implants.
                  [Internet] Frost Sullivan. 2018 [cited 1 October 2021].
                  Available from:<a href="http://www.frostchina.com/?p=8494"
                    >http://www.frostchina.com/?p=8494</a
                  >
                </p>
                <p class="body-1">
                  [3]:Zeying Zhang. 2018. Sources of power: Clinical
                  Epidemiology of Orhopedic Trauma. China: People’s Medical
                  Publishing House.
                </p>
                <p class="body-1">
                  [4]:Wei, Y. P., & Lin, K. C. (2021). Dual-construct fixation
                  is recommended in ipsilateral femoral neck fractures with
                  infra-isthmus shaft fracture: A STROBE compliant study.
                  Medicine, 100(17), e25708.
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
