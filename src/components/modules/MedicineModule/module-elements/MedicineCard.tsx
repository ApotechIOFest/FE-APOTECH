import React from 'react'
import { Props } from './interface'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { ALink } from '@elements'

export const MedicineCard: React.FC<Props> = ({ medicine, className }) => {
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
            className='object-cover w-[250px] h-[200px] rounded-t-2xl'
        />
        <div className='flex flex-col gap-x-6 px-6 pt-6'>
            <h1 className='text-title-large'>{medicine.nama_obat}</h1>
            <p>Per {medicine.dosage_unit}</p>
            <p className='mt-3 mb-6'>Rp. {medicine.price}</p>
        </div>
        <div className='flex justify-center gap-x-6 px-6 pb-6'>
            <ALink uppercase={false} href={`/medicine/${medicine.id}`}>
                View more
            </ALink>
            <Button className='bg-indigo-500'>
                Add to Cart
            </Button>
        </div>
      </div>
    </>
  )
}