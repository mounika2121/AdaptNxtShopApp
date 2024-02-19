import {IoSettingsOutline} from 'react-icons/io5'
import {IoMdClose, IoMdArrowDroprightCircle} from 'react-icons/io'
import {MdOutlineInput, MdOutlinePrint} from 'react-icons/md'
import {FiRefreshCcw} from 'react-icons/fi'

import './index.css'

const Orders = () => (
  <div className="orders-container">
    <div className="settings-container">
      <div className="orders-btn-container">
        <button type="button" className="orders-btn">
          Orders
        </button>
        <IoMdClose />
      </div>
      <IoSettingsOutline />
    </div>
    <div className="buttons-container">
      <button type="button" className="selected-list-of-buttons">
        Pending
      </button>
      <button type="button" className="list-of-buttons">
        Accepted
      </button>
      <button type="button" className="list-of-buttons">
        AWB Created
      </button>
      <button type="button" className="list-of-buttons">
        Ready to Ship
      </button>
      <button type="button" className="list-of-buttons">
        Shipped
      </button>
      <button type="button" className="list-of-buttons">
        Completed
      </button>
      <button type="button" className="list-of-buttons">
        Cancelled
      </button>
    </div>
    <div className="list-of-orders-container">
      <div className="order-options">
        <div className="order-input">
          <MdOutlineInput />
          <button type="button" className="Input-orders-btn">
            Input Orders
          </button>
        </div>
        <div className="order-input not-selected">
          <IoMdArrowDroprightCircle />
          <button type="button" className="Input-orders-btn not-selected">
            Accept
          </button>
        </div>
        <div className="order-input not-selected">
          <MdOutlinePrint />
          <button type="button" className="Input-orders-btn not-selected">
            Accept
          </button>
        </div>
        <div className="order-input refresh">
          <FiRefreshCcw />
          <button type="button" className="Input-orders-btn">
            Refresh
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Orders
