import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Medicine } from '../interface'
import { Breadcrumb, Button } from 'flowbite-react'
import Image from 'next/image'

export const MedicineDetailModule: React.FC = () => {
  const [medicine, setMedicine] = useState<Medicine | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(true)

  const router = useRouter()
  const { id } = router.query

  function handleAddToCart(e: any) {
    // TODO
    // 1. Check if stock is enough (ingat, user bisa add to cart more than sekali)
    // 2. Add to CartContext, nanti CartContext nya ngehit backend buat ngesave/nge update cart nya
    // 3. show updated Cart
    // btw you should do ALL the above in CartContext i think (reusable code)
  }

  function fetchMedicine(medicineId: string): Promise<Medicine> {
    return axios
      .get(`/medicines/items/${medicineId}/`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !medicine && isLoading) {
    fetchMedicine(id as string)
      .then((data) => {
        setMedicine(data)
      })
      .catch((err) => {
        alert(err)
        setMedicine(null)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <main className="relative w-full min-h-screen lg:py-32 md:py-28 py-24 lg:px-32 md:px-16 px-3 bg-slate-50">
        <Breadcrumb className="lg:mb-12 mb-8">
          <Breadcrumb.Item href="/medicine">Katalog Obat</Breadcrumb.Item>
          <Breadcrumb.Item>{medicine?.nama_obat || '...'}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="md:flex md:flex-row lg:gap-x-12 md:gap-x-8">
          {/* Left Hand Side */}
          <div>
            <div className="w-[90vw] h-[90vw] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
              <Image
                src={medicine ? medicine.foto_obat : ''}
                width={350}
                height={350}
                alt="foto obat"
                className={`${
                  isZoomedIn ? `rounded-2xl object-cover w-full h-full` : ''
                }`}
              />
            </div>
            <div className="mx-auto w-fit mt-4">
              <Button.Group>
                <Button
                  onClick={(e) => setIsZoomedIn(false)}
                  outline
                  color={'gray'}
                  disabled={!isZoomedIn}
                >
                  <Image
                    src="/assets/images/icons/zoomout.png"
                    width={20}
                    height={20}
                    alt="zoom out"
                  />
                </Button>
                <Button
                  onClick={(e) => setIsZoomedIn(true)}
                  outline
                  color={'gray'}
                  disabled={isZoomedIn}
                >
                  <Image
                    src="/assets/images/icons/zoomin.png"
                    width={20}
                    height={20}
                    alt="zoom in"
                  />
                </Button>
              </Button.Group>
            </div>
          </div>

          {/* Right Hand Side */}
          <div className="max-w-[90vw] md:max-w-[60%]">
            <p className="text-sm font-bold bg-blue-100 border border-neutral-200 w-fit px-10 py-1 rounded-xl">
              {medicine?.kategori.toUpperCase()}
            </p>
            <h1 className="text-headline-medium md:text-display-medium">
              Obat {medicine?.nama_obat || ''}
            </h1>
            <p className="mb-8">
              <span className="text-title-large md:text-headline-small mr-[0.5rem]">
                Rp. {medicine?.price}
              </span>
              <span>per {medicine?.dosage_unit}</span>
            </p>
            <p>{medicine?.description}</p>
            <div className="mt-8"></div>
            <Button className="px-4 bg-indigo-500" onClick={handleAddToCart}>
              Add to Cart
              <Image
                src="/assets/images/icons/cart.svg"
                width={24}
                height={24}
                alt="cart"
                className="ml-2"
              />
            </Button>
            <p className="text-sm">
              Tanggal kadaluwarsa stok: {medicine?.expiration_date}
            </p>
            <p className="text-sm">Sisa stok sekarang: {medicine?.stock}</p>
          </div>
        </div>
      </main>
    </>
  )
}
