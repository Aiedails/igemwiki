
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
              @click="$vuetify.goTo('#background', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-2"
            >
              Background
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#principle', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Principles of human practice
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="3"
              step="3"
              @click="$vuetify.goTo('#efforts', options)"
              :complete="position > 3"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Efforts made for fracture treatment
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="4"
              step="4"
              @click="$vuetify.goTo('#overview', options)"
              :complete="position > 4"
              style="transition: all 1s"
              color="primary"
              class="body-2"
            >
              Overview of the practice record
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
            <v-container style="padding: 20px 3%">
              <v-row justify="center">
                <v-card-title
                  class="text-h4 title"
                  id="background"
                  v-intersect="onIntersect"
                >
                  Background</v-card-title
                >
              </v-row>
              <v-card-text>
                <p class="body-1">
                  ShanghaiTech_China team is an organisation focussed on human
                  health maintenance. From medical to ethical, we focus on
                  fracture treatment. We expect to our efforts will assist in
                  the development of therapies based on synthetic biology. We
                  are striving for the most efficient technological progress
                  with the least waste. This is equally the value of
                  ShanghaiTech_China team.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/0/05/T--ShanghaiTech_China--hpo--background2.png"
                  style="margin: 35px auto"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  In the past six months, our team's efforts have received more
                  than 1250 followings, cover an area of 4290733 square
                  kilometers, Over 50 experts on different fields gave us
                  supporting. In order to optimize MIBOM products, we collected
                  about 100 responses through interviews. Our practice spans the
                  entire territory of China and is intended to make a greater
                  contribution to fracture treatment and the global ethics of
                  synthetic biology.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/d/d9/T--ShanghaiTech_China--hpo--1.jpg"
                  style="margin: 35px auto"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  Thanks to professor Yang Haitao, Professor Shen Wei, Professor
                  Gao Yan, Professor Hong Suting and Professor Jin Dai and other
                  more than 10 experts in different fields who helped us to
                  complete this human practice.
                </p>
              </v-card-text>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="principle">
                  Principles of human practice</v-card-title
                >
              </v-row>
              <v-card-title class="text-h5"
                >Principles of R&D process</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  In the process of developing MIBOM, we need to find a feasible
                  management system to help us build it. After consulting Jean
                  Dai, we built a set of R&D processes based on the PDCA cycle.
                </p>
                <v-img
                  src="https://2021.igem.org/File:T--ShanghaiTech_China--hp--principle1.jpg"
                  style="margin: 35px auto"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  This R&D process includes design input, design review, final
                  design approval and design output.Design input consists of
                  continuous research of market demand information and prototype
                  design. Afterwards, design review should be completed by
                  communicating with others and collecting feedback from
                  different groups of people. In the process of a product's R&D,
                  design input and design review will go through a large number
                  of cycles.
                </p>
                <p class="body-1">
                  At the beginning of MIBOM, we were inspired by the experience
                  of people around us, interviews with orthopedic doctors and
                  the current market information of fracture, and completed the
                  design input process. After that, we began to design
                  Prototype, and completed the design review and collected
                  feedback information through the process of meeting and
                  teacher interview. In this process, we went through four
                  cycles of input and review, and finally determined the overall
                  design scheme and commercialization process of MIBOM.
                </p>
              </v-card-text>
              <v-card-text class="text-h6"
                >Objectives and data collection method</v-card-text
              >
              <v-card-text>
                <v-list class="list_number">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          1. In the first cycle, we focused on developments in
                          the orthopaedic market. MIBOM is inspired by the
                          everyday scene of fracture. Therefore, we took desk
                          research as the highest form of initial medical market
                          research to investigate the industry background,
                          existing treatment methods and market data. In order
                          to be more realistic, we also considered interviewing
                          doctors in third class hospitals.
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          2. In the second cycle, we focused on feedbacks from
                          industry experts. Therefore, we collected suggestions
                          and feedback from experts in sports medicine,
                          immunology, orthopedic medicine and precision medicine
                          on our project through interviews.
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          3. In the third cycle, our application scenarios
                          changed in the second cycle, so we focused on
                          collecting pain points in the comminuted fracture
                          market. The primary target of this cycle is the
                          end-user physician to understand the pain encountered
                          in the operation and application of comminuted
                          fractures. In terms of sample selection, we selected
                          representative orthopedic trauma surgeons from third
                          class hospitals for interview.
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          4. In the fourth cycle, we focus on the feedback of
                          various people on the design of MIBOM after the third
                          cycle, mainly targeting field experts, surgeons,
                          rehabilitation doctors, device field managers,
                          patients and so on. In order to cope with timeliness,
                          we designed a brief questionnaire to collect feedback
                          during the road show. For industry experts, we decide
                          to collect feedback through interviews.
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-text class="text-h5"
                >Principles of product investigation</v-card-text
              >
              <v-card-text>
                <p class="body-1">
                  According to the
                  <a
                    href="https://www.aapor.org/Standards-Ethics/Best-Practices.aspx#best10"
                    >Best Practice for Survey Research</a
                  >
                  published by American Association for Public Opinion Research,
                  we conducted the design of Survey and interview based on its
                  Recommendation.
                </p>
              </v-card-text>
              <v-card-text class="text-h6">Qualitative interviews</v-card-text>
              <v-card-text>
                <p class="body-1">
                  During Conducting interviews, we referenced Harvard
                  University's
                  <a
                    href="https://sociology.fas.harvard.edu/files/sociology/files/interview_strategies.pdf"
                    >'Strategies for Qualitative Interviews'</a
                  >
                  to design questions and interview flow.
                </p>
                <p class="body-1">
                  In order to elucidate the purpose of the interview, we
                  designed a simple introduction for all interviewees to have a
                  basic idea of our team. Before the interview, we also prepared
                  some desk research for the interview, to ensure that the
                  interview can avoid the other party to help us analyze the
                  problem.
                </p>
                <p class="body-1">
                  In the setting of questions, we adopt special questions as the
                  main form of questions, to avoid a single answer. We also
                  avoided conceptual problems, such as asking the surgeon to
                  give an attitude on behalf of the whole.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"
                >Ethics and responsible research</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  We have deeply studied the Declaration of Helsinki, and we
                  have tried our best to avoid all ethical issues related to
                  access and data collection, and to ensure the informed rights
                  and privacy of all interviewees. Our classmates and friends
                  who had broken bones had been treated under pseudonyms, and
                  all the experts advising us had asked for their consent.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"
                >Informed consent and privacy protection</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  In terms of informed consent, we have set up an
                  <a
                    href="https://2021.igem.org/wiki/images/7/78/T--ShanghaiTech_China--hpo--consulting_informed_consent.pdf"
                    >informed consent commitment</a
                  >
                  before all interviews and questionnaire collection, and all
                  interviews will be released after the consent is obtained. We
                  will do our best to ensure the interviewees' right to protect
                  their privacy.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"
                >Principles of education and entrepreneurship</v-card-title
              >
              <v-card-title class="text-h6"
                >Education & Publicitation</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  In order to make our popular science education better carried
                  out and understood by students and the society, we need to
                  explain in simple terms so that they can master
                  ShanghaiTech_China's program this year and have a simple
                  understanding of synthetic biology. In this regard, we have
                  developed two plans: 1. In order for the educational
                  experience to continue to be referred to by the team in the
                  future, we must have a record of courseware. 2. In order for
                  ordinary people to understand ShanghaiTech_China's project
                  this year and the story of synthetic biology, we need to
                  design a set of easy to understand introduction.
                </p>
              </v-card-text>
              <v-card-title class="text-h6"
                >Business plan execution strategy</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  In the implementation of the business plan, we must consider
                  the users, feasibility, competition and development planning,
                  future impact and other four aspects. We developed a set of
                  Outlines for the implementation of the business plan:
                </p>
                <v-list class="list_number">
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          1. Potential customers and unmet needs
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          2. MIBOM's feasibility & Inventivity
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">
                          3. Development plans & strategies, funds, and
                          stakeholders
                        </p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <div style="padding-left: 16px" class="body-1">
                        <p class="body-1">4. Long-term impacts</p>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>

              <v-row justify="center">
                <v-card-title class="text-h4 title" id="efforts"
                  >Efforts made for fracture treatment</v-card-title
                >
              </v-row>
              <v-card-text class="body-1">
                Iterations in this section are detailed in
                <a
                  href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"
                  >Integrated Human Practice.</a
                >
              </v-card-text>
              <v-card-title class="text-h5"
                >Background & Painpoints</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  Bone fracture is really common in daily life. Sports, car
                  accidents, falls, and certain medical conditions are all
                  possible causes of bone fracture.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/d/d5/T--ShanghaiTech_China--hpo--3.png"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  Two students from Shanghai University of Science and
                  Technology mentioned that a broken bone might be a good
                  inspiration. They were our close classmates who shared their
                  fracture experiences with us. When applying for their photos
                  and names, we processed aliases and alternative vector images
                  as they requested.
                </p>
                <p class="body-1">
                  In the treatment of fracture, imported steel plate cannot
                  enter the medical insurance, two scars left by the removal
                  operation, and the pain caused by the implant in rainy
                  weather, all make the fracture patients suffer from long-term
                  torture in the process of bone healing. Daneil Huang shares
                  that he still has to wear a brace on his wrist, which makes it
                  difficult for him to move and bathe. The fracture caused him
                  great trouble in his life. Urean Zhou also said she was
                  troubled by the huge medical costs and postoperative scars.
                  Based on the advice of doctors from The Ninth People's
                  Hospital, we further focused on the medical costs and other
                  troubles caused by the secondary removal of the implants, such
                  as scarring. We further investigated the dilemmas of second
                  surgery.
                </p>
                <p class="body-1">
                  Based on existing epidemiological studies and statistics from
                  Frost Sullivan, we have a current estimate of comminuted
                  fractures.
                </p>
                <p class="body-1">
                  In China, it is estimated that at 2021, there will be 295526
                  traumatic fractures<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[1]</sup
                  >, of which 10.21% will be femoral fractures<sup
                    @click="$vuetify.goTo('#references', options)"
                    >[2]</sup
                  >. According to the survery conducted by Wei, Y. P., & Lin, K.
                  C.<sup @click="$vuetify.goTo('#references', options)">[3]</sup
                  >, 95% of femoral shaft fractures are comminuted. Therefore,
                  there will be an average of at least 280,000 comminuted
                  fractures per year in China.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/4/40/T--ShanghaiTech_China--hpo--fracture-b-1.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
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
                  extremely easily to happen
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/c/cc/T--ShanghaiTech_China--hpo--fracture-b-4.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  Therefore, simplifying comminuted fractures will be a very
                  necessary material development direction.
                </p>
              </v-card-text>
              <v-card-title class="text-h5" id="use_of_harmful"
                >How is MIBOM optimized?</v-card-title
              >
              <v-img
                src="https://2021.igem.org/wiki/images/b/b5/T--ShanghaiTech_China--hpo--photo1.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  To cope with the complex treatment of comminuted fractures, we
                  developed the MIBOM project. We followed PDCA principles and
                  contact different stakeholders during the project design and
                  development phase, such as patients, surgeons, rehabilitation
                  doctors, orthopaedic researchers, sports medicine experts,
                  industry materials experts, bone materials medical device
                  management experts, etc. During the six months of practice, we
                  have completed four major tasks through iteration, namely,
                  research and development design of materials and instruments,
                  design of practical treatment process, design of prevention
                  and rehabilitation process, and design of entrepreneurship and
                  commercialization.
                </p>
                <p class="body-1">
                  On the basis of all iterations, Dr. Yang Tang and Dr. Xin Sun
                  emphasized the strength and biocompatibility of materials as
                  the most important point. Our experimental basis also focuses
                  on this.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/2/2c/T--ShanghaiTech_China--hpo--fracture-m-1.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  MIBOM plays an important role in biocompatibility,
                  biodegradability and healing regeneration. After iterative
                  design, MIBOM can become a modular product through gel
                  carrier. On the function of degradation and promoting healing,
                  different therapeutic effects can be given by simply
                  regulating pathways and drug molecules. Therefore, compared
                  with traditional internal fixators, the material advantages of
                  the iterative design are greatly improved.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"
                >Design of pratical treatment process</v-card-title
              >
              <v-img
                src="https://2021.igem.org/wiki/images/b/bd/T--ShanghaiTech_China--hpo--photo2.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  To make MIBOM practical, we went back to our research. We
                  re-introduced the product to doctors and experts and collect
                  doctors' feedback to modify the operation of practical
                  application. According to the doctor's consideration of the
                  operation time of gel curing, we designed the integrated
                  hardware system of "injection + UV curing" to shorten the
                  fixed time. On the other hand, considering the requirement of
                  doctors for reversible operation, the gel curing system we
                  used adopts dual modes of photocuring and ion curing. During
                  the photocure phase, the gel will remain semi-liquid, allowing
                  the doctor to make adjustments; In the ion curing stage, the
                  gel will be fully formed to achieve a high strength structure.
                  Moreover, experts also suggest that we consider the treatment
                  of the wound, so we also take into account the size of the
                  wound opening and cleaning. See
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"
                    >Integrated Human Practice</a
                  >
                  for details.
                </p>
              </v-card-text>
              <v-container>
                <v-img
                  src="https://2021.igem.org/wiki/images/c/cc/T--ShanghaiTech_China--hpo--fracture-p-1.jpg"
                  contain
                  max-height="600px"
                />
              </v-container>
              <v-card-text>
                <p class="body-1">
                  We also designed a set of instructions for using the product
                  according to the surgeon's advice.
                </p>

                <v-list style="padding-left: 16px">
                  <v-list-item>
                    <li class="body-2">
                      The MIBOM needs to be removed and thawed to a fluid 30
                      minutes before use.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      After thawing and before use, it is necessary to carry out
                      mild mixing to evenly distribute the ingredients in the
                      gel and avoid excessive local concentration.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Reset the fractured end face to ensure alignment. The end
                      face should be properly clean to ensure no residual soft
                      tissue.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      Gently shake before opening, and pour into injection
                      device after aseptic opening. Using the device injects
                      MIBOM colloid along the fracture or fracture seams.
                    </li>
                  </v-list-item>
                  <v-list-item>
                    <li class="body-2">
                      After the colloid is injected, the reduction is confirmed
                      again. Then, the UV device should be turned on and the
                      colloid part should be irradiated by UV for 2-8 seconds to
                      fix the colloid and the fracture end.
                    </li>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/2/24/T--ShanghaiTech_China--hpo--fracture-p-2.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  In the application of the project, we will provide instruction
                  manuals, initiate conference explanations in hospitals, and
                  guide the operation through model drills and special personnel
                  training.
                </p>
              </v-card-text>
              <v-card-title class="text-h5"
                >Design of prevention and rehabilitation process</v-card-title
              >
              <v-card-text>
                <p class="body-1">
                  We want MIBOM to be a product that takes into account all
                  aspects of the patient, so whether it is prevention, treatment
                  or rehabilitation. MIBOM is committed to provide the whole
                  process of service. To this end, we consulted experts in the
                  field of patient management, who told us to seek advice from
                  nursing and rehabilitation doctors to understand how to
                  provide better services for patients. Later, we found the
                  rehabilitation doctor in Shanghai Ninth People's Hospital, who
                  explained to us the patient's situation that should be paid
                  attention to during the rehabilitation process. On the other
                  hand, from the perspective of rehabilitation doctors, she also
                  explained past cases in which instrument vendors participated
                  in the rehabilitation process, and suggested that we could
                  provide patients' personal manuals to provide detailed records
                  of the whole treatment process, so that subsequent doctors
                  could understand the situation.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/a/ae/T--ShanghaiTech_China--hpo--fracture-pr-1.jpg"
                contain
                max-height="600px"
              />
              <v-card-title class="text-h5"
                >Design of entrepreneurship</v-card-title
              >
              <v-img
                src="https://2021.igem.org/wiki/images/c/c0/T--ShanghaiTech_China--hpo--photo3.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  MIBOM is not empty plan, so the implementation of MIBOM still
                  needs commercial scheming, strategy and management. In order
                  to carry out Entrepreneurship reasonably, we have consulted
                  experts in Entrepreneurship management and quality management.
                  We learned business plan writing principles and PDCA cycle
                  management. On the other hand, we also consulted experts from
                  China Medical Device Industry Association to understand the
                  strategy of medical device registration. As a class III
                  medical device, registration and clinical trial are long, so
                  we can take the lead in patent application. Therefore, we have
                  entrusted the Technology Transfer Office for patent
                  application and learned that patent materials can be submitted
                  in the name of the school. It is expected that all our
                  materials can be submitted to the application by the end of
                  October.Learn more at
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"
                    >Integrated Human Practice</a
                  >
                  and
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Entrepreneurship"
                    >Entrepreneurship</a
                  >.
                </p>
                <p class="body-1">
                  For a better understanding of MIBOM's value chain, you can
                  look at the following figures.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/7/75/T--ShanghaiTech_China--hpo--fracture-bu-1.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  MIBOM has built its own value chain, and its r&d, clinical and
                  circulation segments will be the most competitive. We are
                  still in basic development, but in the future we will be able
                  to bring MIBOM to market. To this end, we have also formulated
                  a development strategy.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/f/fc/T--ShanghaiTech_China--hpo--fracture-bu-2.jpg"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">
                  In order to have a better understanding of ourselves, we
                  analyzed ourselves through SWOT and gave corresponding
                  strategies.
                </p>
              </v-card-text>
              <v-img
                src="https://2021.igem.org/wiki/images/0/01/T--ShanghaiTech_China--hpo--fracture-bu-3.png"
                contain
                max-height="600px"
              />
              <v-card-text>
                <p class="body-1">Corresponding strategies are as follows:</p>
              </v-card-text>
              <v-list class="list_number">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="body-1">
                      <strong>1. SO Strategy -- Diversified layout:</strong>
                    </v-list-item-title>
                    <div style="padding-left: 16px" class="body-1">
                      <p class="body-1">
                        Accelerating the diversified product layout and further
                        building the product layout across the medical, beauty,
                        daily first aid and other fields will be conducive to
                        the development of MIBOM layout. To develop prevalent
                        products by giving full disyplay to the MIBOM team's
                        product system with mussel mucin as the core is useful
                        to making up for the shortage of cash flow and coping
                        with the huge investment in early research and
                        development. At the same time, MIBOM will release the
                        potential abilities of modular design ideas, speed up
                        the creation of product line broadening, for product
                        diversity to lay the technology. Further improve the
                        market share, brand.
                      </p>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="body-1">
                      <strong
                        >2. WO Strategy -- Industrial Chain Cooperation:</strong
                      >
                    </v-list-item-title>
                    <div style="padding-left: 16px" class="body-1">
                      <p class="body-1">
                        MIBOM is scheming to integrate the industrial chain and
                        broaden the cooperative relationship. For upwarding the
                        integration for contract manufacturers, MIBOMis looking
                        for a mature technology of water gel synthesis company,
                        cooperation with related synthetic biology company.
                        Based on their mature fermentation system or extract
                        protein system constitute the value chain of the product
                        quickly, MIBOM can overcome the problem of the early
                        stage of the start-up inherent costs too much, and the
                        layout of the chain is helpful to giving full play to
                        the advantages of cooperation, further improve product
                        quality, Better capture market share.
                      </p>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="body-1"
                      ><strong
                        >3. WO Strategy -- Industrial Chain Cooperation:</strong
                      ></v-list-item-title
                    >
                    <div style="padding-left: 16px" class="body-1">
                      MIBOM is scheming to integrate the industrial chain and
                      broaden the cooperative relationship. For upwarding the
                      integration for contract manufacturers, MIBOMis looking
                      for a mature technology of water gel synthesis company,
                      cooperation with related synthetic biology company. Based
                      on their mature fermentation system or extract protein
                      system constitute the value chain of the product quickly,
                      MIBOM can overcome the problem of the early stage of the
                      start-up inherent costs too much, and the layout of the
                      chain is helpful to giving full play to the advantages of
                      cooperation, further improve product quality, Better
                      capture market share.
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="body-1"
                      ><strong
                        >4. ST Strategy -- Accelerate the development of
                        multi-line products:</strong
                      ></v-list-item-title
                    >
                    <div style="padding-left: 16px" class="body-1">
                      The modular design advantages of MIBOM can greatly reduce
                      the cost of research and development and develop products
                      for different application scenarios as soon as possible,
                      such as trauma, beauty and other skin care products. Thus,
                      MIBOM should transform the overall product client from
                      hospitals to individual consumers, expand the market, and
                      improve the public's awareness of MIBOM products to meet
                      the needs of cash flow turnover. When conducting mass
                      product marketing, we should emphasize the safety,
                      efficiency and high quality of products and sort out a
                      good brand image, so as to lay a good foundation for the
                      launch of subsequent products in the process of
                      competition with similar products.
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="body-1"
                      ><strong
                        >5. WT Strategy --Build brand awareness:</strong
                      ></v-list-item-title
                    >
                    <div style="padding-left: 16px" class="body-1">
                      After product industrialization, we will improve brand
                      awareness as soon as possible. As our target is not only
                      the high-end medical market, but also the mass market, the
                      reputation and brand effect based on the high-end medical
                      market will greatly increase our market competitive
                      advantage. Meanwhile, our personalized medical plan will
                      help increase user engagement and stabilize relevant
                      markets.
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-row justify="center">
                <v-card-title class="text-h4 title" id="overview"
                  >Overview of the practice record</v-card-title
                >
              </v-row>
              <v-card-title class="text-h5"
                >Integrated Human Practice overview</v-card-title
              >
              <v-card-text>
                <v-img
                  src="https://2021.igem.org/wiki/images/f/f7/T--ShanghaiTech_China--hpo--photo7.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  We conducted 4 cycles in Integrated Human Practice,
                  interviewing students with fracture experience, surgeons,
                  rehabilitation doctors, medical device managers, experts in
                  the field of technology, experts in the field of
                  entrepreneurship, experts in the field of management and
                  technical experts in the bone implant industry. It gives us
                  more perspective on fracture treatment. At the same time, we
                  also made brochures and participated in road shows to promote
                  our products and let more people know about our
                  ShanghaiTech_China and MIBOM products.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/f/fc/T--ShanghaiTech_China--hpo--photo6.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  Click here to learn more about
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices"
                    >Integrated Human Practice</a
                  >
                </p>
              </v-card-text>
              <v-card-title class="text-h5">Education overview</v-card-title>
              <v-card-text>
                <v-img
                  src="https://2021.igem.org/wiki/images/8/82/T--ShanghaiTech_China--hpo--photo4.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  We have done a lot of work on Education in terms of regional
                  differences, age differences, subject differences and
                  population differences. In order to make the educational
                  resources more equal, we carried out synthetic biology popular
                  science education in Shanghai, Chengdu and other areas with
                  abundant educational resources. In counties with relatively
                  poor educational resources, such as Yunlong County in Yunnan
                  Province and Jing County in Anhui Province, we carried out
                  biological curriculum degradation and synthetic biology
                  popular science education for local primary and junior high
                  school students. We have carried out science popularization
                  across academic backgrounds. From primary school to junior
                  high school, then to senior high school, and then to
                  university, we have made different education science
                  popularization work for students at different knowledge
                  stages. In order to give full play to the practical
                  application of synthetic biology, we mainly carried out
                  synthetic biology lectures "Hello iGEM" and "Follow the
                  iGEMers" on university campuses for students from other
                  science schools or engineering disciplines to arouse their
                  interest in the combined application of biology and computer,
                  physics and chemistry. Arouse their desire to devote
                  themselves to synthetic biology in the future. Finally, for
                  different groups of people, we also carried out online
                  popularization activities, such as the official account and
                  Bilibili platform, to publicize MIBOM and explain synthetic
                  biology.
                </p>
                <p class="body-1">
                  Click
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Communication"
                    >Education and Communication</a
                  >
                  page for more information.
                </p></v-card-text
              >
              <v-card-title class="text-h5">Other works</v-card-title>
              <v-card-text>
                <p class="body-1">
                  In addition to Integrated Human Practice and Education, we
                  also carried out planning of
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Entrepreneurship"
                    >Entrepreneurship</a
                  >
                  and
                  <a
                    href="https://2021.igem.org/Team:ShanghaiTech_China/Sustainable"
                    >Sustainable</a
                  >. We hope that these commercialization efforts will turn
                  MIBOM into a real product that can be applied to human reality
                  and contribute to the sustainable development of human beings.
                  Click on the blue for details.
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
    step: [], //use for store position of title
    position: 1, //use for v-stepper to know where we are
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
    this.step[0] = document.getElementById("background");
    this.step[1] = document.getElementById("principle");
    this.step[2] = document.getElementById("efforts");
    this.step[3] = document.getElementById("overview");
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
