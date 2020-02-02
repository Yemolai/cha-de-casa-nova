import * as services from 'src/services'

export default async ({ Vue }) => {
  Vue.prototype.$services = services
}
