import { Medicine } from '../interface'

export interface Props {
  className?: string
  medicine: Medicine
  addToCartHandler: (medicine: Medicine) => any
}
