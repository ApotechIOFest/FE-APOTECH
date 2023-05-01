import React, { useState } from 'react'
import { Cart } from 'src/components/modules/MedicineModule/interface'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { Button } from 'flowbite-react'
import axios from 'axios'
import { CartFooterProps } from './interface'

export const CartFooter: React.FC<CartFooterProps> = ({ router }) => {
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [isDataFetched, setIsDataFetched] = useState<boolean>(true)
  const { jwt, loading }: IAuthContext = useAuthContext()

  if (!loading && jwt && router && isDataFetched) {
    setIsDataFetched(false)
    fetchCart().then((data) => {
      const cartItems = data.data
      setQuantity(
        cartItems.reduce((acc: number, cart: Cart) => acc + cart.quantity, 0)
      )
      setPrice(
        cartItems.reduce(
          (acc: number, cart: Cart) => acc + parseFloat(cart.totalPrice),
          0
        )
      )
    })
  }

  function fetchCart(): Promise<any> {
    const config = {
      headers: { Authorization: `Bearer ${jwt?.access}` },
    }
    return axios
      .get('/cart/carts/user/', config)
      .then((res) => {
        setIsDataFetched(true)
        return res.data
      })
      .catch((err) => {
        console.log(err)
        throw new Error(err)
      })
  }

  return (
    <>
      {quantity === 0 || !jwt ? (
        <div></div>
      ) : (
        <div className="flex justify-between bg-blue-dark lg:h-14 md:h-14 h-18 w-full fixed bottom-0 z-50 p-2 lg:px-8 md:px-8 px-1">
          <div className="flex flex-row lg:space-x-3 md:space-x-2 space-x-1 items-center justify-center">
            <div className="font-productSansBold">
              {quantity} {quantity === 1 ? 'item' : 'items'}
            </div>
            <div className="border-l-2 border-white h-10 rounded-lg"></div>
            <div className="flex flex-col -space-y-1">
              <div className="text-title-small">Perkiraan Harga</div>
              <div className="font-productSansBold">Rp. {price}.00</div>
            </div>
          </div>
          <Button href="/cart">Lihat Pesanan</Button>
        </div>
      )}
    </>
  )
}
