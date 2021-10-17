
<template>
  <v-row justify="center" style="margin: auto 40px">
    <v-col cols="2"></v-col>
    <!-- Hardware dont need them
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
    -->
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
                  id="overview"
                  v-intersect="onIntersect"
                >
                  Hardware
                </v-card-title>
              </v-row>
              <v-card-text>
                <p class="body-1">
                  In our project, we designed a mechanism to release the drug at
                  a specific point on the wound.
                </p>
                <p class="body-1">
                  First of all our mechanical structure took the classic belt
                  and gear drive. For the selection of the motor we used a 42
                  stepper motor, configured with a 1.8 degree stepping angle and
                  with 16 subdivisions.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/1/1b/T--ShanghaiTech_China--har--42stepper.png"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  The motor shaft is fixed with a 13mm diameter gear, and the
                  drive of the motor gear can drive the belt, thus moving the
                  fixed frame and allowing the drug release device to move to
                  the desired position.
                </p>
                <p class="body-1">
                  Stepper motor according to the external control pulse and
                  direction signal, through its internal logic circuit, control
                  the stepper motor winding in a certain timing sequence forward
                  or reverse energization, so that the motor forward / reverse
                  rotation, or lock.
                </p>
                <p class="body-1">
                  Take our 1.8 degree two-phase stepper motor as an example:
                  when both phase windings are energized and excited, the motor
                  output shaft will be stationary and locked in position. The
                  maximum torque that will keep the motor locked at the rated
                  current is the holding torque. If the current in one of the
                  phase windings changes direction, the motor will rotate one
                  step (1.8 degrees) in a given direction. Similarly, if the
                  current in the other winding changes direction, the motor will
                  rotate one step (1.8 degrees) in the opposite direction of the
                  former. When the currents through the coil windings are
                  sequentially redirected to excitation, the motor will rotate
                  in a continuous step in the given direction with very high
                  accuracy. For 1.8 degrees two-phase stepping motor rotation a
                  week need 200 steps.
                </p>
                <p class="body-1">
                  At the same time we are equipped with 16 subdivision,
                  subdivision is actually a kind of electronic damping
                  technology on the stepper motor, its main purpose is to
                  attenuate or eliminate the low frequency vibration of the
                  stepper motor, improve the running accuracy of the motor. The
                  actual step angle when the motor is running after subdivision
                  is a fraction of the basic step angle. Take our 16 subdivision
                  as an example, after 16 pulses, the motor turns through 1.8
                  degrees.
                </p>
                <p class="body-1">
                  A pulse signal is an electrical signal where the voltage
                  changes repeatedly between ON and OFF.
                </p>
                <p class="body-1">
                  Each ON/OFF cycle is recorded as a pulse. A single pulse
                  signal commands one step of rotation of the motor output
                  shaft.
                </p>
                <p class="body-1">
                  The signal levels corresponding to the voltage ON and OFF
                  cases are called "H" and "L", respectively.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/6/64/T--ShanghaiTech_China--har--pulse_signal.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  The rotation distance of a stepper motor is proportional to
                  the number of pulse signals (number of pulses) applied to the
                  drive.
                </p>
                <p class="body-1">$$ \theta = \theta_s\times A/A_0 $$</p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/b/b3/T--ShanghaiTech_China--har--rotation.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  $\theta$ is the motor rotation angle, $\theta_0$ is the motor
                  stepping angle, $A$ is the number of pulses, and $A_0$ is the
                  fraction of the fine.
                </p>
                <p class="body-1">
                  Meanwhile, according to the principle of mechanical
                  transmission.
                </p>
                <p class="body-1">
                  $$ l = \theta \cdot r =r\cdot\theta_s\cdot A/A_0 $$
                </p>
                <p class="body-1">
                  From this, the number of pulses required to move a certain
                  distance can be calculated.
                </p>
                <p class="body-1">$$ A=3200*(10/(1.25*3.24)) $$</p>
                <p class="body-1">
                  In the main control chip, we choose ATmega328p here, this chip
                  is compatible with Arduino environment, very easy in
                  programming.
                </p>
                <p class="body-1">We also used CNC Shield V3 on top of Uno</p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/4/4e/T--ShanghaiTech_China--har--Arduino.png"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/1/1e/T--ShanghaiTech_China--har--real.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  This expansion board can easily drive 42 stepper motors.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/c/ce/T--ShanghaiTech_China--har--Arduino_Uno.png"
                    contain
                    max-height="600px"
                  />
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
}
</pre
                >
                <p class="body-1">
                  Also interact with Arduino on PC to determine the position of
                  drug release, input x,y position on PC, read the related data
                  on Arduino and control the motor movement. The flowchart is as
                  follows, first read the target position information and the
                  present position information, determine whether the position
                  is reached, if the position is reached then continue to wait
                  for the PC input, anyway move to the target position.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/1/1d/T--ShanghaiTech_China--har--Flow_Chart_1.png"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  The way to interact with the PC is through the Arduino's
                  serial communication, parsing the serial input. The input
                  specified here is
                </p>
                <pre class="code">
-Format: M:&lt;goal_x>,&lt;goal_y>,&lt;goal_z>
-Each input is .02f, similar to x.xx
-0&lt;=goal_x&lt;=25.00 cm
-0&lt;=goal_y&lt;=18.00 cm
-0&lt;=goal_z&lt;=1.00 cm
</pre
                >
                <p class="body-1">
                  After this xyz three axis of freedom design is completed, we
                  also added the x-axis-centered rotation, in order to fit the
                  tricky angle for drug release more.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/e/ed/T--ShanghaiTech_China--har--Model_1.jpg"
                  contain
                  max-height="600px"
                />
                <v-img
                  src="https://2021.igem.org/wiki/images/9/9c/T--ShanghaiTech_China--har--Real_1.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  Considering the torque provided by the servo, and our larger
                  load. Here we choose the MG995 servo.
                </p>
                <v-img
                  src="https://2021.igem.org/wiki/images/4/47/T--ShanghaiTech_China--har--mg995.jpg"
                  contain
                  max-height="600px"
                />
                <p class="body-1">
                  In order to inject the drug in the syringe, an injection
                  method by mechanical drive is designed here.
                </p>
                <p class="body-1">
                  When the rudder is turned through a certain angle, the drive
                  rod will be pushed and the syringe will be squeezed and
                  finally the drug will be injected.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/6/69/T--ShanghaiTech_China--har-Model_2.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/8/8a/T--ShanghaiTech_China--har--Real_2.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  The torque required here is not very large, so the SG90 servo
                  was chosen.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/8/8c/T--ShanghaiTech_China--har-sg90.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  After the release of the drug requires UV curing, here we
                  designed our own LED circuit for the UV lamp.
                </p>
                <p class="body-1">Here the wavelength of the light is 395nm.</p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/c/c0/T--ShanghaiTech_China--har-UV_LED.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  Then again, a rotational degree of freedom is added to make it
                  irradiate at a specific angle for curing.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/d/df/T--ShanghaiTech_China--har--Model_3.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  After that, in order to control the servo angle, we use
                  Arduino Micro for control here.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/0/0a/T--ShanghaiTech_China--har--Arduino_Micro.jpg"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  Micro can control three different servos. The three different
                  servos are named here as
                </p>
                <p class="body-1">
                  S1:Rotary servo for LED <br />
                  S2:Rotary servo for syringe <br />
                  S3:Push servo for syringe <br />
                </p>
                <p class="body-1">
                  The control command is: <code>&lt;servo name>:&lt;angle></code>
                </p>
                <p class="body-1">
                  Angle between 0 and 180, such as let S1 turn to 90 degrees is
                  S1:90
                </p>
                <p class="body-1">
                  The same goes for the control of UV LEDs.<br />
                  Light on: L: On<br />
                  Off: L: Off
                </p>
                <p class="body-1">
                  The connection between Micro and Uno uses a soft serial
                  connection, parsing the commands from the PC to Uno and
                  forwarding them to Micro after judging that they are Micro's
                  commands.
                </p>
                <p class="body-1">
                  All the circuit connections are shown in the following
                  diagram. The connection between Micro and Uno uses a soft
                  serial connection, parsing the commands from the PC to Uno and
                  forwarding them to Micro after judging that they are Micro's
                  commands.
                </p>
                <p class="body-1">
                  All the circuit connections are shown in the following
                  diagram.
                </p>
                <p class="body-1">
                  <v-img
                    src="https://2021.igem.org/wiki/images/5/55/T--ShanghaiTech_China--har--Circuit_Pic.png"
                    contain
                    max-height="600px"
                  />
                </p>
                <p class="body-1">
                  Such a hardware design can be applied not only in our project,
                  but also in other iGem projects afterwards.
                </p>
                <p class="body-1">
                  Our hardware can be used to automate different projects, such
                  as fixed-point drug release and multiple test tube reactions,
                  and reduce the workload.
                </p>
                <p class="body-1">
                  It is also very easy to replace the solvent in the injection
                  tube. It can be adjusted for different application scenarios.
                </p>
                <v-container>
                  <video controls width="100%" style="object-fit: contain">
                    <source
                      src="https://2021.igem.org/wiki/images/3/3a/T--Shanghaitech_China--har--hardware.mp4"
                      type="video/mp4"
                    />
                  </video>
                </v-container>
                <p class="body-1">The Micro controller code is following:</p>
                <pre class="code">
/*
micro
 */
#include &lt;Servo.h>
#include &lt;string.h>
#define LEDRoate 2
#define TubeRoate 3
#define Pusher 4
#define UVLED 6
#include&lt;SoftwareSerial.h>
Servo TubeRoateServo;
Servo LEDRoateServo;
Servo PusherServo; 

SoftwareSerial softSerial(10,11);
int S1angle = 90;
int S2angle = 90;
int S3angle = 180;
 
void setup() {
  Serial.begin(9600);
  softSerial.begin(9600);
  softSerial.listen();
  TubeRoateServo.attach(TubeRoate);
  LEDRoateServo.attach(LEDRoate);
  PusherServo.attach(Pusher);
  pinMode(UVLED, OUTPUT);
  TubeRoateServo.write(90);
  digitalWrite(UVLED, LOW);
  LEDRoateServo.write(90);
  PusherServo.write(180);
}
String Micro_String="";
String Uno_String="";
void loop() {
  if(Serial.available()>0)
  {
    if(Serial.peek()!='\n')
    {
      Micro_String+=(char)Serial.read();
    }
    else
    {
      Serial.read();
      Serial.print("Micro said:");
      Serial.println(Micro_String);
      softSerial.println(Micro_String);
      Micro_String="";
    }
  }
  String comdata = "";
  String Newcomdata = "";
  while (softSerial.available() > 0)  
  {
      comdata += char(softSerial.read());
      delay(2);
  }
  if (comdata.length() > 0)
  {
      for(int i = 0; i &lt; comdata.length() ; i++)
      {
        if(comdata[i] != '\n' && comdata[i] != '\r')
        {
          Newcomdata += comdata[i];
        }
      }
      if(Newcomdata[0] == 'L')
      {
        Serial.println(Newcomdata);
        if(!Newcomdata.compareTo("L:On"))
        {
          
          Serial.println("L:On");
          softSerial.println("L:On");
          digitalWrite(UVLED,HIGH);
          delay(1000);
          digitalWrite(UVLED,HIGH);
        }
        else if(!Newcomdata.compareTo("L:Off"))
        {
          
          Serial.println("L:Off");
          softSerial.println("L:Off");
          digitalWrite(UVLED,LOW);
        }
      }
      else if(Newcomdata[0] == 'S')
      {
        if(Newcomdata.length()>3 && Newcomdata[2] == ':')
        {
          if(Newcomdata[1] == '1')
          {
            if(Newcomdata[3] == '+')
            {
              S1angle += 10;
            }
            else if(Newcomdata[3] == '-')
            {
              S1angle -= 10;
            }            
            else
            {
              S1angle = 0;
              for(int i = 3; i &lt; Newcomdata.length() ; i++)
              {
                S1angle = S1angle * 10 + (Newcomdata[i] - '0');
              }
            }
            if(S1angle>=0 && S1angle&lt;=180)
            {
              TubeRoateServo.write(S1angle);
              softSerial.print("S1:");
              softSerial.println(S1angle);    
            }
          }
          else if(Newcomdata[1] == '2')
          {
            if(Newcomdata[3] == '+')
            {
              S2angle += 10;
            }
            else if(Newcomdata[3] == '-')
            {
              S2angle -= 10;
            }            
            else
            {
              S2angle = 0;
              for(int i = 3; i &lt; Newcomdata.length() ; i++)
              {
                S2angle = S2angle * 10 + (Newcomdata[i] - '0');
              }
            }
            if(S2angle>=0 && S2angle&lt;=180)
            {
              LEDRoateServo.write(S2angle);
              softSerial.print("S2:");
              softSerial.println(S2angle);    
            }                  
          }
          else if(Newcomdata[1] == '3')
          {
            if(Newcomdata[3] == '+')
            {
              S3angle += 10;
            }
            else if(Newcomdata[3] == '-')
            {
              S3angle -= 10;
            }            
            else
            {
              S3angle = 0;
              for(int i = 3; i &lt; Newcomdata.length() ; i++)
              {
                S3angle = S3angle * 10 + (Newcomdata[i] - '0');
              }
            }
            if(S3angle>=0 && S3angle&lt;=180)
            {
              PusherServo.write(S3angle);
              softSerial.print("S3:");
              softSerial.println(S3angle);    
            }  
          }
        }
      }
      comdata = "";
      Newcomdata = "";
  }
}
</pre
                >
                <p class="body-1">And Uno controller code is:</p>
                <pre class="code">

/*
 arduino uno
 serial -----computer
 serial1----- nano softwearserial
 */
#include&lt;SoftwareSerial.h>
SoftwareSerial softSerial(12,11);
#include &lt;string.h>
#include &lt;stdlib.h>

#define demo 1

#define EN 8 
#define X_DIR 6
#define Y_DIR 5 
#define Z_DIR 7 
#define X_STP 3 
#define Y_STP 2 
#define Z_STP 4 
#define Positive false
#define Negitive true


#define YMAX 15 
#define XMAX 25 
#define ZMAX 1
String Uno_String="";
String Mrico_String="";

float now_x = 0;
float now_y = 0;
float now_z = 0;

float goal_x = 0;
float goal_y = 0;
float goal_z = 0;

int error_code = 0;

float dis = 10;
int dis_step = 3200*(dis/(1.3*3.14));
char input[20] = "";

float PWMPin[6] = {3, 5, 6, 9, 10, 11}, mark = 0;

int cal_step(float now,float goal)
{
  return (3200*abs(goal-now)/(1.3*3.14));
}

void step(boolean dir, byte dirPin, byte stepperPin, int steps)
{
 digitalWrite(dirPin, dir);
 delay(50);
 for (int i = 0; i &lt; steps; i++) 
 {
 digitalWrite(stepperPin, HIGH);
 delayMicroseconds(100); 
 digitalWrite(stepperPin, LOW);
 delayMicroseconds(100); 
 }
}

 
void setup() {
    Serial.begin(9600);
    softSerial.begin(9600);
    softSerial.listen();
    pinMode(X_DIR, OUTPUT); pinMode(X_STP, OUTPUT);
    pinMode(Y_DIR, OUTPUT); pinMode(Y_STP, OUTPUT);
    pinMode(Z_DIR, OUTPUT); pinMode(Z_STP, OUTPUT);
    pinMode(EN, OUTPUT);
    digitalWrite(EN, LOW);
    Serial.println("++++++++++++++++++++++++++++ ");
    Serial.println("Ready");
}


void motor_move()
{  
  if(now_x != goal_x)
  {
    step((now_x &lt; goal_x), X_DIR, X_STP, cal_step(now_x,goal_x)); 
    now_x = goal_x;
  }  
  
  if(now_y != goal_y)
  {
    step((now_y > goal_y), Y_DIR, Y_STP, cal_step(now_y,goal_y));
    now_y = goal_y;  
  }
  
  if(now_z != goal_z)
  {
    step((now_z > goal_z), Z_DIR, Z_STP, cal_step(now_z,goal_z));
    now_z = goal_z;
  }

  Serial.println("Arrived!");
}



 
void loop() {
  float numdata[6] = {0};
  while(Serial.available()>0)
  {
    if(Serial.peek()!='\n')
    {
      Uno_String+=(char)Serial.read();
     
    }
    else
    {
      Serial.read();
      if(Uno_String.length()>=1)
      {
        if(Uno_String[0] == 'M')
        {
          Serial.print("Move data:");
          Serial.println(Uno_String);
          int point = 0;
          int j = 0;
          for(int i = 2; i &lt; Uno_String.length() ; i++)
          {
            if(Uno_String[i] == ',')
            {
              j++;
              if(point != 0)
              {
                point = 0;
              }
            }
            else if(Uno_String[i] == '.')
            {
               point = 1;
            }
            else if(Uno_String[i] != '.' && Uno_String[i] != ',')
            {
              if(point == 0)
             {
                numdata[j] = numdata[j] * 10 + (Uno_String[i] - '0');
             }
             else
             {
                numdata[j] = numdata[j] + (float)(Uno_String[i] - '0')/(pow(10,point));
                point++;
             }
            }
          }
          for(int i = 0;i&lt;j+1;i++)
          {
            if(i == 0)
            {
              goal_x = numdata[i];
              Serial.println(goal_x);
            }
            else if(i == 1)
            {
              goal_y = numdata[i];
              Serial.println(goal_y);
            }
            else if(i == 2)
            {
              goal_z = numdata[i];
              Serial.println(goal_z);
            }
          }
        }
        else if(Uno_String[0] == 'L' || Uno_String[0] == 'S')
        {
          Serial.print("Uno said:");
          Serial.println(Uno_String);
          softSerial.println(Uno_String);
        }
        Uno_String="";
      }
    }
  }  
  if(softSerial.available()>0)
  {
    if(softSerial.peek()!='\n')
    {
      Mrico_String+=(char)softSerial.read();
    }
    else
    {
      softSerial.read();
      Serial.print("Mirco said:");
      Serial.println(Mrico_String);
      Mrico_String="";
    }
  }
  delay(1000);
  motor_move();
}
</pre
                >
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
