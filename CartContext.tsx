import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        };
      }
      
      const newItems = [...state.items, { product: action.payload, quantity: 1 }];
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      };
    }
    
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.product.id !== action.payload);
      return {
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity === 0) {
        const filteredItems = state.items.filter(item => item.product.id !== action.payload.id);
        return {
          items: filteredItems,
          total: filteredItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        };
      }
      
      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    
    case 'LOAD_CART':
      return {
        items: action.payload,
        total: action.payload.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      };
    
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};