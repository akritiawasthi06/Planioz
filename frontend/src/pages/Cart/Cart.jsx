import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';





// const Cart = () => {

//   const {cartItems, food_list, removeFromCart, getTotalCartAmount, url,currency, deliveryCharge} = useContext(StoreContext);

//   const navigate = useNavigate();
//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Itmes</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item,index)=>{
//           if(cartItems[item._id]>0){
//             return <div>
//               <div className="cart-items-title cart-items-item">
//               <img src={url+'/images/'+item.image} alt="" />
//               <p>{item.name}</p>
//               <p>₹{item.price}</p>
//               <p>{cartItems[item._id]}</p>
//               <p>₹{item.price*cartItems[item._id]}</p>
//               <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
//             </div>
//             <hr />
//             </div>
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-detail">
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-detail">
//               <p>Delivery Fee</p>
//               <p>₹{getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-detail">
//               <b>Total</b>
//               <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//             </div> 
//           </div>
//           <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, enter it here</p>
//             <div className='cart-promocode-input'>
//               <input type="text" placeholder='Promo Code'/>
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url,currency, deliveryCharge} = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        
        {Array.isArray(food_list) && food_list.length > 0 &&  Object.keys(cartItems).some(id => cartItems[id] > 0) ? (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                    {/* <img src={url/images/item.image} alt={item.name} /> */}
                    <img src={`${url}/images/${item.image}`} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{currency}{item.price}</p>
                    <div>{cartItems[item._id]}</div>
                    <p>{currency}{(item.price * cartItems[item._id]).toFixed(2)}</p>
                    <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div> 
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo Code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart