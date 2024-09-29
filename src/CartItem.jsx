import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './CartSlice'; // Import actions

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from the Redux store

    // Handle item removal from the cart
    const handleRemoveItem = (itemName) => {
        dispatch(removeItem(itemName)); // Dispatch removeItem action
    };

    // Handle quantity update of an item in the cart
    const handleUpdateQuantity = (itemName, newQuantity) => {
        if (newQuantity < 1) return; // Prevent updating quantity to less than 1
        dispatch(updateQuantity({ name: itemName, quantity: parseInt(newQuantity, 10) })); // Dispatch updateQuantity action
    };

    // Handle adding an item again (increase quantity by 1)
    const handleAddItem = (item) => {
        dispatch(addItem(item)); // Dispatch addItem action to add one more of the same item
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.name} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Cost: {item.cost}</p>
                            <input 
                                type="number" 
                                value={item.quantity}
                                min="1"
                                onChange={(e) => handleUpdateQuantity(item.name, e.target.value)}
                            />
                            <button onClick={() => handleAddItem(item)}>Add More</button>
                            <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    );
}

export default CartItem;
