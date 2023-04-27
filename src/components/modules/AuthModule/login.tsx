import React, { useState } from 'react'
import { DialogueCard } from './module-elements/DialogueCard'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { ALink } from '@elements'
import { ILoginData } from './interface'
import { EMPTY_LOGIN_DATA } from './constant'
import { useRouter } from 'next/router'
import axios from 'axios'
import toast from 'react-hot-toast'

export const LoginModule: React.FC = () => {
  const [data, setData] = useState<ILoginData>(EMPTY_LOGIN_DATA)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  function onFormChange(target: any) {
    setData(() => ({ ...data, [target.id]: target.value }))
  }

  function onFormSubmit() {
    setIsLoading(true)
    axios
      .post('/login', data)
      .then((res) => {
        // GABISA JALAN
        toast.success('Successfully logged in!')
        setInterval(() => {
          router.push('/')
        }, 2000)
      })
      .catch((err) => {
        console.log('ERR', err)
        // GABISA JALAN
        toast.error('Error logging in.')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <div className=" bg-blue-light relative w-full min-h-[100vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <h1 className="text-3xl text-center">Login</h1>
        <DialogueCard>
          <h2>E-mail</h2>
          <TextInput
            id="email"
            type="email"
            placeholder="your@email.com"
            onChange={(e) => onFormChange(e.target)}
            value={data.email}
            required={true}
          />
          <br />
          <h2>Password</h2>
          <TextInput
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => onFormChange(e.target)}
            value={data.password}
            required={true}
          />
          <br />
          <div className="flex flex-row gap-x-8 justify-end">
            <ALink
              uppercase={false}
              href={'/auth/register'}
              className="text-sm"
            >
              No account? Sign up
            </ALink>
            <Button onClick={onFormSubmit} className="bg-indigo-500">
              {isLoading ? <Spinner /> : 'Submit'}
            </Button>
          </div>
        </DialogueCard>
      </div>
    </>
  )
}
