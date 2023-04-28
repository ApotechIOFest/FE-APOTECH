import React, { useState } from 'react'
import { DialogueCard } from './module-elements/DialogueCard'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { ALink } from '@elements'
import { ILoginData } from './interface';
import { EMPTY_LOGIN_DATA } from './constant'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAuthContext } from 'src/components/contexts/AuthContext';
import secureLocalStorage from 'react-secure-storage';
// import toast from 'react-hot-toast'

export const LoginModule: React.FC = () => {
  const [data, setData] = useState<ILoginData>(EMPTY_LOGIN_DATA)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const { setJwt, setUser } = useAuthContext()

  function onFormChange(target: any) {
    setData(() => ({ ...data, [target.id]: target.value }))
  }

  function onFormSubmit() {
    setIsLoading(true)

    const formData = new FormData()
    formData.set("email", data.email)
    formData.set("password", data.password)
    console.log(data, formData.entries())

    // const promise = 
      axios
      .post('/login', formData)
      .then((res) => {
        setJwt(res.data.data)
        secureLocalStorage.setItem('user', res.data.data)
        setUser(res.data.token)
        secureLocalStorage.setItem('token', res.data.token)

        alert("success") // TEMP

        setInterval(() => {
          router.push('/')
        }, 2000)
      })
      .catch((err) => {
        console.log('ERROR:', err)

        alert("err") // TEMP
      })
      .finally(() => setIsLoading(false))

    // toast.promise(promise, {
    //   error: "error",
    //   loading: "loading...",
    //   success: "success!"
    // })
  }

  return (
    <>
      <div className=" bg-blue-light relative w-full min-h-[100vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <h1 className="text-3xl text-center">Login</h1>
        <br/>
        <DialogueCard>
          <form id="login" name="login">
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
          </form>
        </DialogueCard>
      </div>
    </>
  )
}
