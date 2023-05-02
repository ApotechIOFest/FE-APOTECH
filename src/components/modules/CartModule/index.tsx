import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { Cart, Medicine } from 'src/components/modules/MedicineModule/interface'
import Image from 'next/image'
import { Breadcrumb, Button, TextInput } from 'flowbite-react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { ICheckoutResponse } from './interface'

export const CartModule: React.FC = () => {
  const [carts, setCarts] = useState<Cart[] | null>()
  const [refreshCart, setRefreshCart] = useState<boolean>(false)
  const { jwt, user }: IAuthContext = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    async function fetchCart(): Promise<Cart[]> {
      const config = {
        headers: { Authorization: `Bearer ${jwt?.access}` },
      }

      const cartResponse = await axios.get('/cart/carts/user/', config)
      const cartData = cartResponse.data.data

      const medicineDetailsPromises = cartData.map((cartItem: Cart) => {
        const medicineId = cartItem.medicine
        return axios
          .get(`/medicines/items/${medicineId}/`, config)
          .then((res) => res.data)
      })

      const medicineDetails = await Promise.all(medicineDetailsPromises)

      return cartData.map((cartItem: Cart, index: number) => {
        return {
          ...cartItem,
          medicineDetails: medicineDetails[index],
        }
      })
    }

    if (jwt) {
      fetchCart()
        .then((data) => setCarts(data))
        .catch((err) => setCarts([]))
    }
    setRefreshCart(false)
  }, [jwt, refreshCart])

  function updateCartQuantity(medicine: Medicine, quantity: number): any {
    const config = {
      headers: { Authorization: `Bearer ${jwt?.access}` },
    }
    const body = {
      medicine: medicine.id,
      quantity,
    }
    return axios
      .post('/cart/carts/', body, config)
      .then((res) => {
        setRefreshCart(true)
        return res.data
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  function incrementCart(medicine: Medicine): any {
    return updateCartQuantity(medicine, 1)
  }

  function decrementCart(medicine: Medicine): any {
    return updateCartQuantity(medicine, -1)
  }

  function triggerCheckout() {
    const config = {
      headers: { Authorization: `Bearer ${jwt?.access}` },
    }
    const body = {}
    axios
      .post('/payment/checkout/', body, config)
      .then((res) => res.data)
      .then((data: ICheckoutResponse) => {
        router.push(`/checkout/pending/${data.order_id}`)
        window.open(data.payment_url, "_blank")
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-32 md:py-28 py-24 lg:px-32 md:px-16 px-3 text-sm bg-slate-50">
        <Breadcrumb className="lg:mb-12 mb-4">
          <Breadcrumb.Item href="/medicine">Medicine</Breadcrumb.Item>
          <Breadcrumb.Item>Your Cart</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex lg:flex-row md:flex-col flex-col lg:space-x-10 lg:space-y-0 md:space-y-10 space-y-10">
          <div className="lg:w-3/4 md:w-full w-full text-title-medium">
            <table className="w-full border-collapse border-spacing-y-2 table-auto">
              <thead>
                <tr className="text-left font-semibold text-gray-600">
                  <th className="py-3">Name</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3 lg:block md:block hidden">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map(
                  (cart) =>
                    cart.quantity > 0 && (
                      <tr
                        key={cart.id}
                        className="border-b border-gray-700 py-2"
                      >
                        <td className="py-7">
                          <div className="flex flex-row items-center space-x-4">
                            <Image
                              src={cart.medicineDetails?.foto_obat ?? ''}
                              alt="foto obat"
                              width={50}
                              height={50}
                              className="object-cover w-[50px] h-[50px] rounded-full"
                            ></Image>
                            <div>
                              <h1 className="font-medium">
                                {cart.medicineDetails?.nama_obat}
                              </h1>
                              <p className="text-sm text-gray-500">
                                Per {cart.medicineDetails?.dosage_unit}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex flex-row space-x-3 items-center">
                            <div
                              className="p-1 bg-blue-normal hover:bg-blue-dark hover:duration-300 hover:ease-in-out cursor-pointer"
                              onClick={() =>
                                cart.medicineDetails &&
                                cart.quantity > 0 &&
                                decrementCart(cart.medicineDetails)
                              }
                            >
                              <MinusIcon
                                width={15}
                                className="[&>path]:stroke-[2]"
                              />
                            </div>
                            <div>{cart.quantity}</div>

                            <div
                              className="p-1 bg-blue-normal hover:bg-blue-dark hover:duration-300 hover:ease-in-out cursor-pointer"
                              onClick={() =>
                                cart.medicineDetails &&
                                !(cart.medicineDetails?.stock == 0) &&
                                incrementCart(cart.medicineDetails)
                              }
                            >
                              <PlusIcon
                                width={15}
                                className="[&>path]:stroke-[2]"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="lg:block md:block hidden py-10">
                          Rp.{cart.totalPrice}
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
          <div className="lg:w-1/2 md:w-full w-full text-title-medium space-y-8">
            <h1 className="text-headline-large text-blue-darkest">
              Daftar Pesanan
            </h1>
            {carts && carts.length > 0 ? (
              <div>
                <h1>Ringkasan Pembayaran</h1>
                <div className="flex w-full justify-between">
                  <div>
                    Keranjang (
                    {carts.reduce(
                      (acc: number, cart: Cart) => acc + cart.quantity,
                      0
                    )}{' '}
                    items)
                  </div>
                  <div>
                    Rp.{' '}
                    {carts.reduce(
                      (acc: number, cart: Cart) =>
                        acc + parseFloat(cart.totalPrice),
                      0
                    )}
                    .00
                  </div>
                </div>
                <div className='flex w-full justify-between'>
                  <div>
                    Biaya Pengiriman
                  </div>
                  <div>
                    Rp. 0.00
                  </div>
                </div>
              </div>
            ) : (
              <div>Your cart is empty</div>
            )}

            <div>
              <h1>Alamat Pengiriman</h1>
              <p>{user?.address}</p>
            </div>

            <div>
              <TextInput height={60} placeholder='Masukan catatan...' className='w-full'/>
            </div>

            <Button className="w-full flex" onClick={(e) => triggerCheckout()}>
              Lanjut Pembayaran
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
