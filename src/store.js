// Import necessary functions from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer from CartSlice.js (ensure the file is named correctly)
import cartReducer from './CartSlice';

// Configure the Redux store with the cart reducer
const store = configureStore({
    reducer: {
        // Associate the cart reducer with the 'cart' slice of the state
        cart: cartReducer,
    },
});

// Export the configured store as the default export
export default store;
