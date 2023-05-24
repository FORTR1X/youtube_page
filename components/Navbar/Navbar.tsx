import Image from "next/image"

const Navbar: React.FC<{}> = () => {
  return (
    <nav className="navbar__wrapper">
      <div className="navbar__container">
        <div id="start" className="navbar__burger_logo_container">
          <button className="navbar__burger">
            <Image src="/burger.svg" alt="Menu" width={20} height={20} />
          </button>

          <Image
            src="/youtube.svg"
            alt="YouTube"
            width={120}
            height={56}
          />
        </div>

        <div id="center" className="navbar__search_container">
          <form className="navbar__search">
            <input className="navbar__search_field" type="text" placeholder="Введите запрос" />

            <a className="navbar__search_tia" href="#">
              <Image src="/tia.png" alt="Keyboard" width={22} height={12}/>
            </a>

          </form>

          <a className="navbar__search_btn" href="#">
            <Image
              src="/search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </a>
          <a className="navbar__search_voice" href="#">
            <Image
              src="microphone.svg"
              alt="Microphone"
              width={18}
              height={18}
            />
          </a>
        </div>

        <div id="end" className="navbar__buttons_container">
          <button className="navbar_buttons_btn">
            <a href="#">
              <Image src="/meet.svg" alt="Upload" width={24} height={24}/>
            </a>
          </button>

          <button className="navbar_buttons_btn">
            <a href="#">
              <Image src="/bell_alert.svg" alt="Alerts" width={20} height={20}/>
            </a>
          </button>

          <button className="navbar_buttons_btn">
            <a href="#">
              <Image src="/null_user.svg" alt="User" width={24} height={24}/>
            </a>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar