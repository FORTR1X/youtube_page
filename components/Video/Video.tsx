import Image from "next/image"
import Button from "../Button"
import { userComment, videoUrl } from "../../interfaces/interfaces"

let userComments = new Array<userComment>()
userComments.push({
  userImg: "null_user", 
  userName: "Shelley Fisher",
  datePublic: "3 года назад",
  text: "I know nothing about coding. But this music gives me the confidence to create new folders on my desktop should it be necessary.",
  likes: 17000,
  countReplys: 484
})
userComments.push({
  userImg: "null_user", 
  userName: "Scarlet Lin",
  datePublic: "1 год назад",
  text: "This music honestly calmed my anxiety and made me focus on being productive. I always come back to this every time I get behind my deadlines and feel the anxiety rush back up preventing me from starting to write. This blocks out all the negative thoughts and I can slowly get back into being productive again. Then i  can listen to other playlists but this is like my in case of emergency music :DD",
  likes: 272,
  countReplys: 8
})
userComments.push({
  userImg: "null_user", 
  userName: "Milos 3D",
  datePublic: "1 год назад",
  text: "I do 3D environment art and have been listening to this set every day while working for the past 2 months. Never gets old… thank you!",
  likes: 209,
  countReplys: 5
})

const VIDEO_FULL_DESCRIPTION = "Может ли музыка повысить качество программирования? \n Монотонные нажатия клавиш могут заставить вас потерять ход мыслей. Наши умы хитрые, и если у нас есть возможность, мы будем блуждать в поисках чего-то более захватывающего. Вы можете использовать музыку, чтобы укротить собственный разум. Исследования показали, что периодические сеансы прослушивания музыки положительно влияют на вашу концентрацию и возвращают ваш разум из страны чудес в реальность. Дополнительным преимуществом музыки является то, что она помогает находить нестандартные решения. В тестах испытуемые, которые слушали музыку, превосходили тех, кто не слушал, когда дело дошло до нестандартных задач кодирования. Этот плейлист, в свою очередь, состоит из чиллстепа, который идеально подходит для концентрации и концентрации. Глубокий бас, красивый вокал и ритмы улучшат ваш рабочий распорядок и дадут вам возможность собраться с мыслями. Кодирование - это ваша область, и вы его хозяин. Независимо от того, на каком языке вы говорите или работаете, все разработчики кода смогут оценить поток этого плейлиста. Очистите свой разум и поместите все в нужное место. Линии плавные, а ваша логика безупречна. Уровни концентрации зашкаливают, и от вашего всевидящего ока не ускользнет ни одна ошибка. Написание кода может оказаться реальной проблемой, но те, кто упорно будет найти решение. Код - это ваше искусство, и не слушайте тех, кто говорит иначе."
const VIDEO_CUT_DESCRIPTION = VIDEO_FULL_DESCRIPTION.substring(0, 380) + "..."

const Video: React.FC<videoUrl> = (props) => {
  return (
    <div className="video__wrapper">
      <iframe src={props.url} width={"100%"} height={557} className="video__player"/>

      <h3 className="video__title">Chillstep Music для программирования / кибернетики / кодирования</h3>
      
      <div className="video__channel_reaction">
        <div className="video__channel">
          <Image src="/null_user.svg" alt="User" width={40} height={40}/>
          
          <div className="video__channel_title_subs">
            <h4 className="video__channel_title">Chillstep Music Lab
              <Image src="/confirmed.svg" alt="Confirmed" width={16} height={16}/>
            </h4>
            <span className="video__channel_subs">904 тыс. подписчиков</span>
          </div>

          <Button title="Подписаться" color="light" active outline={false}/>
        </div>

        <div className="video__reaction">
          <div className="video__reaction_like_dislike_btns">
            <Button title="94 тыс." color="dark" img="/like.svg" active outline={false} borderRadiusSide="left"/>
            <Button color="dark" img="/dislike.svg" active outline={false} borderRadiusSide="right"/>
          </div>

          <Button title="Поделиться" color="dark" img="/share.svg" active outline={false}/>

          <Button title="..." color="dark" active outline={false}/>
        </div>
      </div>

      <div className="video__description_container">
        <div className="video__description_info">
          <span className="video__description_views">9,1 млн. просмотров</span>
          <span className="video__description_recently">3 года назад</span>
          <span className="video__description_author">BROOKLYN</span>
        </div>

        <div className="video__description">
          {VIDEO_CUT_DESCRIPTION}
        </div>
      </div>

      <div className="video__comments_container">
        <div className="video__comments_count_sort">
          <span className="video__comments_count">3 715 комментариев</span>

          <button className="video__comments_sort">
            <Image src="/sort.svg" alt="sort" width={20} height={20}/>
            <span>Упорядочить</span>
          </button>
        </div>

        <div className="video__comments_send">
          <Image src="/null_user.svg" alt="User" width={40} height={40}/>
          <input className="video__comments_text_field" type="text" placeholder="Введите комментарий"/>
        </div>

        <div className="video__comments">
          {userComments !== null &&
            userComments.map((comment) => {
              const LIKE_COUNT = comment.likes > 999 ? comment.likes / 1000 + " тыс." : comment.likes

              return (
                <div className="video__comment_container">
                  <Image src="/null_user.svg" alt="User" width={40} height={40}/>
                
                  <div className="video__comment_info">
                    <div className="video__comment_user_uploads">
                      <span className="video__comment_username">{comment.userName}</span>
                      <span className="video__comment_date_publish">{comment.datePublic}</span>
                    </div>

                    <div className="video__comment_text_container">
                      <span>{comment.text}</span>
                    </div>

                    <div className="video__comment_actions">
                      <button>
                        <Image src="/like.svg" alt="Like" width={24} height={24} />
                        <span>{LIKE_COUNT}</span>
                      </button>

                      <button>
                        <Image src="/dislike.svg" alt="Dislike" width={24} height={24} />
                      </button>

                      <button>Ответить</button>
                    </div>

                    <div className="video__comments_replys">
                      <Image src="/arrow_down.svg" alt="Open replys" width={16} height={16} />
                      <span>{comment.countReplys} ответа(ов)</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Video