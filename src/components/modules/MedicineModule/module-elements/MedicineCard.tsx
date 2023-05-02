import React from 'react'
import { Props } from './interface'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { ALink } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { Medicine } from '../interface'
import axios from 'axios'

export const MedicineCard: React.FC<Props> = ({ medicine, className, handler }) => {
  const { jwt }: IAuthContext = useAuthContext()

  function postCart(medicine: Medicine): any {
    const config = {
      headers: { Authorization: `Bearer ${jwt?.access}` },
    }
    const body = {
      medicine: medicine.id,
      quantity: 1,
    }

    if (!jwt) {
      handler("Login first!")
    }

    return axios
      .post('/cart/carts/', body, config)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  return (
    <>
      <div
        className={`
        ${className}    
        relative bg-white drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
      >
        <Image
          src={medicine.foto_obat}
          alt="foto obat"
          width={500}
          height={500}
          className="object-cover w-[250px] h-[200px] rounded-t-2xl"
        />
        <div className="flex flex-col gap-x-6 px-6 pt-6">
          <h1 className="text-title-large">{medicine.nama_obat}</h1>
          <p>Per {medicine.dosage_unit}</p>
          <p className="mt-3 mb-6">Rp. {medicine.price}</p>
        </div>
        <div className="flex justify-center gap-x-6 px-6 pb-6">
          <ALink uppercase={false} href={`/medicine/${medicine.id}`}>
            View more
          </ALink>
          <Button
            className="bg-indigo-500"
            disabled={!jwt || medicine.stock == 0}
            onClick={(e) => postCart(medicine)}
          >
            { jwt ? "Add to Cart" : "Login dulu!" }
          </Button>
        </div>
      </div>
    </>
  )
}
