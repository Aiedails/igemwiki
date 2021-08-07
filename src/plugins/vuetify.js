import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        light: true,
        themes: {
            light: {
                primary: colors.teal.lighten4,
                secondary: colors.blue.darken4,
                accent: colors.cyan.lighten3,
                error: colors.red.lighten3,
            }
        }
    },
})

export default vuetify