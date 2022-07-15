import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/cartmain.css'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from  'react-icons/ai';
import Button from "react-bootstrap/Button"

const cartmain = () => {
  return (
    <div>
    <div className="titleheads">
      <ul className='titles'>
        <li classname='pro'>PRODUCT</li>
        <li></li>
        <li></li>
        <li>PRICE</li>
        <li>QUANTITY</li>
        <li>AMOUNT</li>
      </ul>
     </div>
     <div className="billingitems">
        <div className="billitem">
            <div className="itemName">
                <p>Vandelay 4 Ply Disposable Surgical Face Mask </p>
            </div>
            <div className="itemprice">
                <p>₹ 759</p>
            </div>
            <div className="itemquantity">
                <AiOutlinePlusCircle className='icon'/>
                <span>01</span>
                <AiOutlineMinusCircle className='icon'/>
            </div>
            <div className="itemamount">
            <p>₹ 759</p>
            </div>
        </div>
        <div className="billitem">
            <div className="itemName">
                <p>Vicks VapoRub (Value Pack 6 Action) </p>
            </div>
            <div className="itemprice">
                <p>₹ 132</p>
            </div>
            <div className="itemquantity">
                <AiOutlinePlusCircle className='icon'/>
                <span>01</span>
                <AiOutlineMinusCircle className='icon'/>
            </div>
            <div className="itemamount">
            <p>₹ 132</p>
            </div>
        </div>
        <div className="billitem">
            <div className="itemName">
                <p>Disprin 325mg Effervescent Tablet </p>
            </div>
            <div className="itemprice">
                <p>₹ 11</p>
            </div>
            <div className="itemquantity">
                <AiOutlinePlusCircle className='icon'/>
                <span>01</span>
                <AiOutlineMinusCircle className='icon'/>
            </div>
            <div className="itemamount">
            <p>₹ 11</p>
            </div>
        </div>
        <div className="billitem">
            <div className="itemName">
                <p>Cipla Cipcal D3 Cholecalciferol Granules</p>
            </div>
            <div className="itemprice">
                <p>₹ 34</p>
            </div>
            <div className="itemquantity">
                <AiOutlinePlusCircle className='icon'/>
                <span>01</span>
                <AiOutlineMinusCircle className='icon'/>
            </div>
            <div className="itemamount">
            <p>₹ 34</p>
            </div>
        </div>
        <div className="billitem">
            <div className="itemName">
                <p>25 DEHYDROXY VITAMIN D TEST</p>
            </div>
            <div className="itemprice">
                <p>₹ 900</p>
            </div>
            <div className="itemquantity">
                <AiOutlinePlusCircle className='icon'/>
                <span>01</span>
                <AiOutlineMinusCircle className='icon'/>
            </div>
            <div className="itemamount">
            <p>₹ 900</p>
            </div>
        </div>
        <div className="billitem">
            <div className="itemName">
                <p>VITAMIN B COMPLEX TEST</p>
            </div>
            <div className="itemprice">
                <p>₹ 1600</p>
            </div>
            <div className="itemquantity">
                <AiOutlinePlusCircle className='icon'/>
                <span>01</span>
                <AiOutlineMinusCircle className='icon'/>
            </div>
            <div className="itemamount">
            <p>₹ 1600</p>
            </div>
        </div>
     </div>
     <div className="paymentamount">
        <h5>Net Amount:</h5>
        <Link  to="/placeorder">
        <Button className='amountButton'><span>₹ 3436</span></Button>
        </Link>
     </div>
    </div>
  )
}

export default cartmain
