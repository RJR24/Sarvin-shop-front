import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const data = localStorage.getItem("Sarvin_shop_cart_items");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (cartItems !== undefined)
      localStorage.setItem("Sarvin_shop_cart_items", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === itemId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === itemId)
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        else return item;
      })
    );
  };
  const clearShoppingCart = () => {
    setCartItems();
    localStorage.removeItem("Sarvin_shop_cart_items");
  };
  return { cartItems, removeFromCart, addToCart, clearShoppingCart };
};
