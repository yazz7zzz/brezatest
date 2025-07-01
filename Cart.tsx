import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-900 shadow-2xl border-l border-zinc-700">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h2 className="text-lg font-semibold text-stone-200 flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shopping Cart ({state.items.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-stone-400" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-zinc-600 mx-auto mb-4" />
                <p className="text-stone-400 text-lg mb-2">Your cart is empty</p>
                <p className="text-zinc-500">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 bg-zinc-800 p-4 rounded-lg border border-zinc-700">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-stone-200 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-stone-400">${item.product.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-zinc-700 rounded transition-colors"
                      >
                        <Minus className="h-4 w-4 text-stone-400" />
                      </button>
                      
                      <span className="w-8 text-center text-sm font-medium text-stone-200">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-zinc-700 rounded transition-colors"
                      >
                        <Plus className="h-4 w-4 text-stone-400" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-zinc-700 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-stone-200">Total:</span>
                <span className="text-2xl font-bold text-amber-400">
                  ${state.total.toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={onCheckout}
                className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={onClose}
                className="w-full mt-2 text-stone-400 hover:text-stone-300 py-2 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};