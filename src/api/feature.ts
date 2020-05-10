import axios from 'axios'
import Feature from '@/modules/feature'
export function getFeatures () {
  return axios.get<Feature[]>('/api/list')
}
