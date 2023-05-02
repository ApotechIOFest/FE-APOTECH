import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { DialogueCard } from '../../AuthModule/module-elements/DialogueCard';
import Link from 'next/link';

export const CheckoutPendingModule: React.FC = () => {
  const router = useRouter()
  const { id } = router.query;

  function fetchStatus() {
    return axios
      .get(`/payment/${id}/`)
      .then(res => res.data.is_success)
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (id) {
        fetchStatus()
        .then((isSuccess: boolean) => {
          if (isSuccess === true) {
            router.push('/checkout/success/');
          } else if (isSuccess === false) {
            router.push('/checkout/fail/')
          }
        })
        .catch(err => { 
          console.log("payment not found / in progress") 
        })
      } else {
        console.log("no id supplied")
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <>
      <div className=" bg-blue-light relative w-full min-h-[100vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <DialogueCard className="flex flex-col min-h-[50vh] justify-center text-center">
          <Link 
            className="text-3xl hover:text-blue-800" 
            href={`https://app.midtrans.com/payment-links/${id}`}
          >
            Silahkan menyelesaikan pembayaran.
          </Link>
          <p>Halaman ini akan ter-update secara otomatis.</p>
        </DialogueCard>
      </div>
    </>
  )
}