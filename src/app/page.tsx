import Navbar from '../../components/Navbar/Navbar'
import Recomendation from '../../components/Recomendation/Recommendation'
import Video from '../../components/Video/Video'

const Home = () => {
  return (
    <div className="home__wrapper">
      <Navbar/>
      <div className="home__main_content">
        <Video url="https://www.youtube.com/embed/M5QY2_8704o" />
        <Recomendation />
      </div>
    </div>
  )
}

export default Home
