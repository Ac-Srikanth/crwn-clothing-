export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCardItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCardItem) {
        return cartItems.map((cartItem)=>{
           return cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity+ 1}
            : cartItem
        })
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
       cartItem.id === cartItemToRemove.id ? 
       {...cartItem, quantity: cartItem.quantity - 1}
       : cartItem 
    )
}