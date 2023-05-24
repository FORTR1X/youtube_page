export interface RecommendVideoProps {
  id: number
  duration: string
  thumbnail: string
  title: string
  channelName: string
  isVerifyChannel: boolean
  views: number
  datePublish: string
}

export interface videoUrl {
  url: string
}

export interface userComment {
  userImg: string
  userName: string
  datePublic: string
  text: string
  likes: number
  countReplys: number
}