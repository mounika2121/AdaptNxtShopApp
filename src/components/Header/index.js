import {IoBagHandle, IoMoonOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const Header = () => (
  <div className="header">
    <div>
      <IoBagHandle size={22} className="nav-icons" />
      <GiHamburgerMenu size={22} className="nav-ham-icons" />
    </div>
    <div>
      <IoMoonOutline size={22} className="nav-icons" />
      <IoMdNotificationsOutline size={22} className="nav-icons" />
      <CgProfile size={22} className="nav-icons" />
    </div>
  </div>
)

export default Header
