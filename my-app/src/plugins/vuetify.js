import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    primary: '#058fa678',
    secondary: '##002C40',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
