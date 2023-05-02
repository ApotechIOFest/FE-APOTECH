import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useAuthContext } from 'src/components/contexts/AuthContext'
// import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { ForumDiscuss } from './interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

export const ForumModule: React.FC = () => {
  const [forums, setForums] = useState<ForumDiscuss[] | null>()
  const [content, setContent] = useState<string | undefined>()
  //   const { jwt, user }: IAuthContext = useAuthContext()
  const [showSection, setShowSection] = useState(false)

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMDkwNTQxLCJpYXQiOjE2ODMwMDQxNDEsImp0aSI6IjVkNjdhYjkwZTEzZTRlNDA4Mjg5NGMzODBiMThlNDRhIiwidXNlcl9pZCI6MX0.7Ty_6WbXBgeYBHVSjdwveHhkjB8heylTaoDIO7Cezn8`,
    },
  }

  const handleReplyFeatureFunction = async (e: any, id: any) => {
    e.preventDefault()

    await axios
      .post(
        `http://localhost:8000/forum/replies/${id}/create/`,
        {
          author: 1,
          post: id,
          content: content,
        },
        config
      )
      .then((response) => {
        const updatedForums = (forums || []).map((forum) => {
          if (forum.id === id) {
            return {
              ...forum,
              replies: [...forum.replies, response.data.content],
            }
          } else {
            return forum
          }
        })
        setForums(updatedForums)
        console.log(response.data)
      })
  }

  const handleLikeFeatureFunction = async (id: any) => {
    await axios
      .post(`http://localhost:8000/forum/forums/${id}/like/`, null, config)
      .then((response) => {
        const updatedForums = forums?.map((forum) => {
          if (forum.id === id) {
            return { ...forum, likes_count: response.data.like }
          } else {
            return forum
          }
        })
        setForums(updatedForums)
        console.log(response.data)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/forum/forums/', config)
      .then((response) => {
        console.log(response.data)
        setForums(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [forums])

  return (
    <>
      <form>
        <div className="pt-20 px-20 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create your own question!
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6 mb-10">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-[#45B3CB] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Save
          </button>
        </div>
      </form>

      {forums?.map((forum) => (
        <>
          <div
            key={forum.id}
            className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
          >
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5 p-5">
                <p className="text-lg text-black font-semibold">
                  {forum.title}
                </p>
                <p className="text-slate-500 font-medium">{forum.content}</p>
                <p>{forum.created_at}</p>
                <div className="flex">
                  <p>{forum.likes_count}</p>
                  <button
                    onClick={() => handleLikeFeatureFunction(forum.id)}
                    className={`flex items-center justify-end space-x-2 transition-all duration-300 ease-in-out`}
                  >
                    <span className="stroke-current">
                      <HeartIcon
                        fill="none"
                        stroke="primary"
                        className="h-5 w-5 mr-2"
                      />
                    </span>
                    Like
                  </button>
                </div>
                <div className="flex">
                  <button
                    // onClick={() => handleReplyFeatureFunction(forum.id)}
                    onClick={() => setShowSection(!showSection)}
                    className={`flex items-center justify-end space-x-2 transition-all duration-300 ease-in-out`}
                  >
                    <span className="stroke-current">
                      <ChatBubbleBottomCenterTextIcon
                        fill="none"
                        stroke="primary"
                        className="h-5 w-5 mr-2"
                      />
                    </span>
                    Reply
                  </button>
                </div>

                {showSection ? (
                  <>
                    <form
                      onSubmit={(e) => handleReplyFeatureFunction(e, forum.id)}
                    >
                      <div>
                        <label htmlFor="content">Content:</label>
                        <textarea
                          id="content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <button type="submit">Submit</button>
                    </form>
                  </>
                ) : (
                  <></>
                )}

                {forum?.replies &&
                  forum?.replies?.map((reply) => (
                    <>
                      <h1>{reply.created_at}</h1>
                      <p>{reply.content}</p>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}
