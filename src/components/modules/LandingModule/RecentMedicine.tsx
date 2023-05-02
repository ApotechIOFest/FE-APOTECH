import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Medicine } from '../MedicineModule/interface'
import { MedicineCard } from '../MedicineModule/module-elements/MedicineCard'
import { ALink } from '@elements'

export default function RecentMedicine() {
  const [medicines, setMedicines] = useState<Medicine[] | null>()
  const router = useRouter()

  function fetchMedicines(): Promise<any> {
    return axios
      .get('/medicines/items/')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !medicines) {
    fetchMedicines()
      .then((data) => setMedicines(data))
      .catch((err) => setMedicines([]))
  }

  return (
    <>
      <div className="relative mb-10 min-h-[42vw]">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h1 className="lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
            Medicines
          </h1>
          <ALink uppercase={true} href={'/medicine'}>
            Find More Medicine
          </ALink>
        </div>
        <div className="max-w-screen-xl mx-auto my-5 sm:my-10 p-5 sm:p-0">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
            {medicines?.slice(0, 3).map((medicine: Medicine, key: number) => (
              <MedicineCard key={key} medicine={medicine} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
