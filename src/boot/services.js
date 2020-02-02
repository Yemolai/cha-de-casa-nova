import services from '@/services'

export default async ({ Vue }) => {
  Vue.prototype.$services = services
}
