<template>
<!-- !!!!!!!!!!!!!Notice! This components is abandon because of hard-to-use $emit. -->
<!-- Now we compliment this in the main body. -->
  <!-- This components display a back-to-top button 
       which aimed to go back to the top of the page.
       This button will hide when the page is at the top.
       We need to add a event listener to the main part
       which will get the message "the page is at the top",
       in this example we judge it by "we can see the very first element"
       And then this message will be send in to this components
       through property.
       Really complex. Think about merge two components together.
  -->
  <v-container>
    <v-fab-transition>
    <v-btn
      v-show="!istop"
      dark
      fab
      fixed
      right
      bottom
    >
      <v-icon>
        mdi-plus  
      </v-icon>
    </v-btn>
    </v-fab-transition>
  </v-container>
</template>
<script lang="ts">
export default ({
  name: "back_to",
  props: {
    istop: Boolean
  },
  data: () => ({
    hidden: true,
    options: {
      duration: 1000,
      offset: 1500,
      easing: 'easeInOutCubic',
    }
  }),
})
</script>