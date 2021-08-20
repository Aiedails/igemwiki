
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
              @click="$vuetify.goTo('#destination', options)"
              :complete="position > 1"
              style="transition: all 1s ease 1s"
              color="primary"
              class="body-1"
            >
              Destination
            </v-stepper-step>
            <v-stepper-step
              editable
              edit-icon="2"
              step="2"
              @click="$vuetify.goTo('#solution', options)"
              :complete="position > 2"
              style="transition: all 1s"
              color="primary"
              class="body-1"
            >
              Solution
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
      <v-card
        style="text-decoration: none"
        id="description"
        v-intersect="onIntersect"
        v-scroll="updatepos"
        v-show="!firstload"
      >
        <v-container style="padding: 20px">
          <v-card-title class="text-h4" id="destination">
            Destination
          </v-card-title>
          <p class="body-1">
            In our project, we designed a mechanism to release the drug at a
            specific point on the wound.
          </p>
          <v-card-title class="text-h4" id="solution"> Solution </v-card-title>
          <p class="body-1">
            First of all our mechanical structure took the classic belt and gear
            drive. For the selection of the motor we used a 42 stepper motor,
            configured with a 1.8 degree stepping angle and with 16
            subdivisions.
          </p>
          <p class="body-1">【此处应有图,但是没拍】</p>
          <p class="body-1">
            A 13mm diameter gear is fixed to the motor shaft, and the motor gear
            drive can drive the belt, which moves the fixing frame and allows
            the drug release device to move to the desired position.
          </p>
          <p class="body-1">
            Stepper motor according to external control pulses and direction
            signals, through its internal logic circuit, control the stepper
            motor windings in a certain timing sequence forward or reverse
            energized, so that the motor forward / reverse rotation, or locked.
          </p>
          <p class="body-1">
            Take our 1.8 degree two-phase stepper motor as an example: when both
            phase windings are energized and excited, the motor output shaft
            will be stationary and locked in position. The maximum torque that
            will keep the motor locked at the rated current is the holding
            torque. If the current in one of the phase windings changes
            direction, the motor will rotate one step (1.8 degrees) in a given
            direction. Similarly, if the current in the other winding changes
            direction, the motor will rotate one step (1.8 degrees) in the
            opposite direction of the former. When the currents through the coil
            windings are sequentially redirected to excitation, the motor will
            rotate in a continuous step in the given direction with very high
            accuracy. For a 1.8 degree two-phase stepper motor, it takes 200
            steps to rotate one week.
          </p>
          <p class="body-1">
            At the same time we are equipped with 16 subdivision, subdivision is
            actually an electronic damping technology on the stepper motor,
            whose main purpose is to attenuate or eliminate the low frequency
            vibration of the stepper motor and improve the running accuracy of
            the motor. The actual step angle when the motor is running after
            subdivision is a fraction of the basic step angle. Using our 16
            subdivision as an example, after 16 pulses, the motor turns through
            1.8 degrees.
          </p>
          <p class="body-1">
            A pulse signal is an electrical signal where the voltage changes
            repeatedly between ON and OFF.
          </p>
          <p class="body-1">
            Each ON/OFF cycle is recorded as a pulse. A single pulse signal
            commands one step of rotation of the motor output shaft.
          </p>
          <p class="body-1">
            The signal levels corresponding to the voltage ON and OFF cases are
            called "H" and "L", respectively.
          </p>
          <v-img src="@/assets/pulse_signal.jpg"></v-img>
          <p class="body-1">
            The rotation distance of a stepper motor is proportional to the
            number of pulse signals (number of pulses) applied to the drive.
          </p>
          <p class="body-1">
            $\theta$ is the motor rotation angle, $\theta_0$ is the motor
            stepping angle, $A$ is the number of pulses, and $A_0$ is the
            fraction of the fine.
          </p>
          <p class="body-1">
            Meanwhile, according to the principle of mechanical transmission.
          </p>
          <p class="body-1">
            From this, the number of pulses required to move a certain distance
            can be calculated.
          </p>
          <p class="body-1">
            Control the movement of the motor by operating the number and
            direction of pulses from the Arduino via software.
          </p>
          <pre class="code">
void step(boolean dir, byte dirPin, byte stepperPin, int steps)
{
  digitalWrite(dirPin, dir);
  delay(50);
  for (int i = 0; i &lt; steps; i++) {
    digitalWrite(stepperPin, HIGH);
    delayMicroseconds(1000); 
    digitalWrite(stepperPin, LOW);
    delayMicroseconds(1000); 
  }
} </pre>
          <p class="body-1">
            Also interact with Arduino on PC to determine the position of drug
            release, input the x,y position on PC, read the relevant data on
            Arduino and control the motor movement.
          </p>
        </v-container>
      </v-card>
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
    this.step[0] = document.getElementById("destination");
    this.step[1] = document.getElementById("solution");
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
