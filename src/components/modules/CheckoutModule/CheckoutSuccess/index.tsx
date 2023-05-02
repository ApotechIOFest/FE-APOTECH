import React from 'react'
import { DialogueCard } from '../../AuthModule/module-elements/DialogueCard'

export const CheckoutSuccessModule: React.FC = () => {
  return (
    <>
      <div className=" bg-blue-light relative w-full min-h-[100vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <DialogueCard className="flex flex-col min-h-[50vh] justify-center text-center">
          <h1 className="text-3xl">Terima kasih sudah melakukan pembayaran.</h1>
          <p>Kami akan mengirim obat anda secepat mungkin.</p>
        </DialogueCard>
      </div>
    </>
  )
}
