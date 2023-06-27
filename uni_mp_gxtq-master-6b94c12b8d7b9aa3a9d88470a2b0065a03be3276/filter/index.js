import * as filters from './filter.js'

const install = Vue => {
	Object.keys(filters).forEach(e => {
    Vue.filter(e, filters[e])
  })
}

export default {
  install
}