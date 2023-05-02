import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { ForumDiscuss } from './interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

export const ForumModule: React.FC = () => {
  const [forums, setForums] = useState<ForumDiscuss[] | null | undefined>()
  const [content, setContent] = useState<string | undefined>()
  const { jwt, user, loading }: IAuthContext = useAuthContext()
  const [showSection, setShowSection] = useState(false)
  const [forumContent, setForumContent] = useState<string>()
  const [title, setTitle] = useState<string>()
  const [idForum, setIdForum] = useState<number>()

  const config = {
    headers: {
      Authorization: `Bearer ${!loading && jwt?.access}`,
    },
  }

  const handleShowSection = (forumId: number) => {
    setIdForum(forumId)
    setShowSection(!showSection)
  }

  const handleCreateForum = async (e: any) => {
    e.preventDefault()

    await axios
      .post(
        'http://localhost:8000/forum/forums/',
        {
          title: title,
          content: forumContent,
        },
        config
      )
      .then((response) => {
        setForums([...forums, response.data])
        setTitle('')
        setForumContent('')
        console.log(response.data)
      })
  }

  const handleReplyFeatureFunction = async (e: any, id: any) => {
    e.preventDefault()

    await axios
      .post(
        `http://localhost:8000/forum/replies/${id}/create/`,
        {
          author: !loading && user ? user.id : null,
          //   author: 1,
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
        setContent('')
        setShowSection(!showSection)
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
  }, [forums, loading])

  return (
    <>
      <form onSubmit={(e) => handleCreateForum(e)}>
        <div className="pt-20 px-20 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create your own question!
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-10">
              <div className="col-span-full">
                <div className="w-96 mt-10">
                  <div className="relative w-full min-w-[200px]">
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Title
                    </label>
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <div className="w-96 mt-10">
                  <div className="relative w-full min-w-[200px]">
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Content
                    </label>
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      id="content"
                      value={forumContent}
                      onChange={(e) => setForumContent(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6 mb-10">
          <button type="submit">Save</button>
        </div>
      </form>
      <div className="lg:grid lg:grid-cols-4 lg:grid-rows-5 lg:grid-flow-col lg:gap-4 flex-col">
        {forums &&
          forums.map((forum) => (
            <>
              <div
                key={forum.id}
                className="py-10 my-4 w-60 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
              >
                <div className="text-center space-y-2 sm:text-left flex">
                  <div className="space-y-0.5 p-5">
                    <h1>Judul pertanyaan</h1>
                    <p className="text-lg text-black">{forum.title}</p>
                    <h1>Deskripsi</h1>
                    <p className="text-slate-500 font-medium">
                      {forum.content}
                    </p>
                    <p className="text-sm">
                      created at: {forum.created_at.substring(0, 10)}
                    </p>
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
                        onClick={() => handleShowSection(forum.id)}
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

                    {forum.id === idForum && showSection ? (
                      <>
                        <form
                          onSubmit={(e) =>
                            handleReplyFeatureFunction(e, forum.id)
                          }
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
                          <p>{reply.content}</p>
                          <p className="text-[10px]">{reply.created_at}</p>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  )
}
