import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        light: true,
        themes: {
            light: {
                primary: colors.blue.lighten3,
                secondary: colors.indigo.darken4,
                accent: colors.brown.darken1,
                error: colors.red.lighten3,
            }
        }
    },
})

export default vuetify