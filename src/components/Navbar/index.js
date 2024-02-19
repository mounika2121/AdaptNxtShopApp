import {AiOutlineDashboard} from 'react-icons/ai'
import {IoPricetagOutline, IoShareSocialSharp} from 'react-icons/io5'
import {MdOutlineListAlt, MdOutlineLocalShipping} from 'react-icons/md'

import './index.css'

const Navbar = () => (
  <nav className="nav-container">
    <ul className="nav-ul">
      <li className="side-icon-li">
        <AiOutlineDashboard className="side-icons" />
        <p>Dashboard</p>
      </li>
      <li className="side-icon-li">
        <IoPricetagOutline className="side-icons" />
        <p>Inventory</p>
      </li>
      <li className="selected-side-icon-li">
        <MdOutlineListAlt className="side-icons" />
        <p className="selected-orders">Orders</p>
      </li>
      <li className="side-icon-li">
        <MdOutlineLocalShipping className="side-icons" />
        <p>Shipping</p>
      </li>
      <li className="side-icon-li">
        <IoShareSocialSharp className="side-icons" />
        <p>Channel</p>
      </li>
    </ul>
  </nav>
)

export default Navbar
