<template>
  <v-footer color="primary" padless>
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
      <v-col class="primary darken-1 py-4 text-center body-1" cols="12">
        {{ new Date().getFullYear() }} - <strong>ShanghaiTech</strong>
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
      { name: "Description", href: "https://2021.igem.org/Team:ShanghaiTech_China/Description" },
      { name: "Model", href: "https://2021.igem.org/Team:ShanghaiTech_China/Model" },
      { name: "Human practices", href: "https://2021.igem.org/Team:ShanghaiTech_China/Human_Practices" },
      { name: "Team", href: "https://2021.igem.org/Team:ShanghaiTech_China/Team" },
      { name: "Results", href: "https://2021.igem.org/Team:ShanghaiTech_China/Results" },
    ],
  }),
};
</script>
