import { isNumber } from 'lodash'

import Axios from 'axios'

const servicoDadosIBGEURL = 'https://servicodados.ibge.gov.br/api/v1/'

const UFsURI = () => 'localidades/estados'

const municipiosIn = (ufId) => `localidades/estados/${ufId}/municipios`

const servicoDadosIBGE = Axios.create({ baseURL: servicoDadosIBGEURL })

export const locations = {
  async getUFs () {
    const { data: UFsList } = await servicoDadosIBGE.get(UFsURI())
      .catch(err => { throw err })
    const UFs = UFsList.map(({ id, sigla, nome }) => ({ id, sigla, nome }))
      .sort(({ sigla: a }, { sigla: b }) => a < b ? -1 : a > b ? 1 : 0)
    return UFs
  },
  async getMunicipios (UFId) {
    if (!isNumber(UFId) || UFId < 1 || UFId > 53) {
      throw new Error(`invalid UF id: ${UFId}`)
    }
    const validUF = await this.getUFs()
      .then(ufs => ufs
        .map(({ id }) => id)
        .indexOf(UFId) > -1
      )
    if (!validUF) {
      throw new Error(`unknown UF: ${UFId}`)
    }
    const { data: municipiosList } = await servicoDadosIBGE.get(municipiosIn(UFId))
      .catch(err => { throw err })
    const municipios = municipiosList.map(({ id, nome }) => ({ id, nome }))
      .sort(({ nome: a }, { nome: b }) => a < b ? -1 : a > b ? 1 : 0)
    return municipios
  }
}
