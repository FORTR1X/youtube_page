import Image from "next/image"
import Button from "../Button"
import { RecommendVideoProps } from "../../interfaces/interfaces"

const THUMNAILS_PATH = '/recommend_thumbnails/'

let recommendVideos = new Array<RecommendVideoProps>()
recommendVideos.push({
  id: 1,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "1.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: true,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 2,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "2.jpg",
  title: "Piano Cafe Music - Relaxing Coffee Shop, Soft Piano for Study and Work",
  channelName: "Chill Music Lab",
  isVerifyChannel: false,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 3,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "3.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: false,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 4,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "4.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: true,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 5,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "5.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: false,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 6,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "6.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: true,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 7,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "7.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: true,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 8,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "8.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: false,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 9,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "9.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: false,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 10,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "10.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: false,
  views: 776000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 11,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "11.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: true,
  views: 1000,
  datePublish: "1 год назад"
})
recommendVideos.push({
  id: 12,
  duration: "1:06:32",
  thumbnail: THUMNAILS_PATH + "12.jpg",
  title: "Темная музыка для хакеров - Мистер Робот Плейлист",
  channelName: "Chill Music Lab",
  isVerifyChannel: true,
  views: 126,
  datePublish: "1 год назад"
})

const Recommendation: React.FC = () => {
  return (
    <div className="recommend__wrapper">
      <div className="recommend__tags">
        <Button color="light" active title="All" borderRadius={8}/>
        <Button color="dark" active title="From your search" borderRadius={8}/>
        <Button color="dark" active title="From chill music lab" borderRadius={8}/>
        <button className="recommend__next">
          <Image src="/arrow_right.svg" alt="next" width={16} height={16}/>
        </button>
      </div>

      <div className="recommend__videos">
        {recommendVideos !== null &&
          recommendVideos.map((video) => {
            const VIDEO_TITLE = video.title.length > 55 ? video.title.substring(0, 55) + "..." : video.title
            const VIEWS = video.views > 999 ? video.views / 1000 + " тыс. просмотров" : video.views + " просмотров"

            return (
              <div className="recommend__video">
                <div className="recommend__video_thumbnail">
                  <Image src={video.thumbnail} alt={VIDEO_TITLE} width={168} height={94}/>
                  <span className="recommend__video_duration">{video.duration}</span>
                </div>

                <div className="recommend__video_description">
                  <p className="recommend__video_title">{VIDEO_TITLE}</p>
                  <p className="recommend__video_channel">
                    {video.channelName} 
                    {video.isVerifyChannel &&
                      <Image src="/confirmed.svg" alt="Confirmed channel" width={14} height={14}/>
                    }
                  </p>
                  <div className="recommend__video_views_publish">
                    <span className="recommend__video_views">{VIEWS}</span>
                    <div className="recommend__video_dot_separator"/>
                    <span>{video.datePublish}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommendation