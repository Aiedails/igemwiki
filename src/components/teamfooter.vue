<template>
  <v-footer color="blue lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        text
        rounded
        class="my-2"
        :href="link.href"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="primary py-4 text-center body-1" cols="12">
        {{ new Date().getFullYear() }} - <strong>ShanghaiTech</strong>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
      style="padding: 0px; margin: 0"
      class="primary darken-1"
    >
      <v-col cols="2" class="offset-1">
        <v-img
          src="https://2021.igem.org/wiki/images/f/fc/T--ShanghaiTech_China--home--Logo.svg"
          contain
          max-height="60px"
          min-height="60px"
        />
      </v-col>
      <v-col cols="2">
        <v-img
          src="https://2021.igem.org/wiki/images/3/33/T--ShanghaiTech_China--home--school.svg"
          contain
          max-height="80px"
          min-height="80px"
        />
      </v-col>
      <v-divider vertical />
      <v-col cols="5" style="padding-top: 8px">
        <v-container style="padding: 0; margin: 0">
          <v-card-title
            class="text-h5"
            style="padding-bottom: 0; padding-top: 0"
            >Contact us</v-card-title
          >
          <v-card-text class="body-1" style="padding-bottom: 0"
            >E-Mail: igemshanghaitech@163.com<br />
            Address: 393 Middle Huaxia Road, Pudong New Area.<br />
            Postal Code: 201210</v-card-text
          >
        </v-container>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "temfooter",
  data: () => ({
    links: [
      { name: "Home", href: "https://2021.igem.org/Team:ShanghaiTech_China" },
      {
        name: "Description",
        href: "https://2021.igem.org/Team:ShanghaiTech_China/Description",
      },
      {
        name: "Model",
        href: "https://2021.igem.org/Team:ShanghaiTech_China/Model",
      },
      {
        name: "Human practices",
        href: "https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices",
      },
      {
        name: "Team",
        href: "https://2021.igem.org/Team:ShanghaiTech_China/Team",
      },
      {
        name: "Results",
        href: "https://2021.igem.org/Team:ShanghaiTech_China/Results",
      },
    ],
  }),
};
</script>
