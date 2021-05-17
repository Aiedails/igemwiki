<template>
  <v-container>
    <v-card
      hover
      v-for="(person, index) in infor"
      :key="index"
      style="margin: 16px"
    >
      <v-row align="center" dense justify="start" no-gutters>
        <v-col style="max-width: 182px"> <!-- 150 + 2 * 16 -->
          <v-list-item-avatar size="150px" style="margin: 16px">
            <v-img :src="person.photo"></v-img>
          </v-list-item-avatar>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col col=2>
          <v-container>
            <v-card-title>{{ person.name }}</v-card-title>
            <v-card-subtitle>{{ person.role }}</v-card-subtitle>
            <v-card-text>{{ person.discription }}</v-card-text>
          </v-container>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "main_team",

  data: () => ({
    infor: [
      {
        name: "sr",
        photo: require("@/assets/1.png"),
        discription: "very good people",
        role: "Team Leader",
      },
      {
        name: "zyy",
        photo: require("@/assets/2.png"),
        discription: "Very good people",
        role: "Modeling Wiki Hardware",
      },
      {
        name: "sj",
        photo: require("@/assets/3.png"),
        discription: "Very good people",
        role: "Modeling Wiki lab",
      },
    ],
  }),
};
</script>
