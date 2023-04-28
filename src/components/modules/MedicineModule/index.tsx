import axios from 'axios';
import { Button, Spinner, TextInput } from 'flowbite-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Medicine } from './interface';
import { MedicineCard } from './module-elements/MedicineCard';
import Image from 'next/image';

export const MedicineModule: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [medicines, setMedicines] = useState<Medicine[] | null>();
  const router = useRouter();

  function fetchMedicines(): Promise<any> {
    return axios
      .get('/medicines/items/')
      .then(res => res.data)
      .catch(err => {
        console.log(err)
        throw new Error()
      })
  }

  if (router.isReady && !medicines) {
    fetchMedicines()
      .then(data => setMedicines(data))
      .catch(err => setMedicines([]))
  }

  return (
    <>
      <main className="relative w-full min-h-screen lg:py-32 md:py-28 py-24 lg:px-32 md:px-16 px-3 text-sm">
        <h1 className='py-12 text-display-small text-center'>Katalog Obat</h1>
        <div className='flex py-6 w-full justify-around gap-x-2'>
          <TextInput
            id="searchQuery"
            type="text"
            placeholder="Contoh: sirup batuk, vitamin C, obat bahagia"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className='w-full'
          />
          <Button>
            <Image src="/assets/images/icons/search.svg" width={24} height={24} alt="search"/>
          </Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8'>
          {
            medicines
            ?
            medicines?.map((medicine: Medicine, key: number) => (
              <MedicineCard key={key} medicine={medicine} />
            ))
            :
            <Spinner/>
          }
        </div>
      </main>
    </>
  )
}
