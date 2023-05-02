export interface ForumDiscuss {
    id: number
    title: string
    content: string
    created_at: string
    likes_count: number
    replies: ReplyForum[]
}

interface ReplyForum {
    id: number
    author: number
    post: number
    content: string
    created_at: string
}