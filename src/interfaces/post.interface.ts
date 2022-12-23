export interface IPost {
    id: string,
    title: string,
    images: string[],
    date: string,
    description: string,
    likes: number
}
export type Post = IPost;