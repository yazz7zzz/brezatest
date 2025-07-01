import React, { useState } from 'react';
import { X, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setOrderPlaced(true);
      dispatch({ type: 'CLEAR_CART' });
    }, 2000);
  };

  const handleInputChange = (section: 'shipping' | 'payment', field: string, value: string) => {
    if (section === 'shipping') {
      setShippingInfo({ ...shippingInfo, [field]: value });
    } else {
      setPaymentInfo({ ...paymentInfo, [field]: value });
    }
  };

  if (!isOpen) return null;

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-zinc-900 rounded-xl shadow-2xl max-w-md w-full p-8 text-center border border-zinc-700">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-stone-200 mb-2">Order Confirmed!</h2>
            <p className="text-stone-400 mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            
            <button
              onClick={onClose}
              className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-zinc-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700">
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <h2 className="text-2xl font-bold text-stone-200">Checkout</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-stone-400" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              {/* Step Indicator */}
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 1 ? 'bg-amber-500 text-zinc-900' : 'bg-zinc-700 text-stone-400'
                }`}>
                  1
                </div>
                <div className={`flex-1 h-1 ${step >= 2 ? 'bg-amber-500' : 'bg-zinc-700'}`} />
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 2 ? 'bg-amber-500 text-zinc-900' : 'bg-zinc-700 text-stone-400'
                }`}>
                  2
                </div>
              </div>

              {step === 1 ? (
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-stone-200 flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Shipping Information
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.fullName}
                        onChange={(e) => handleInputChange('shipping', 'fullName', e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.address}
                      onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.zipCode}
                        onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-stone-200 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Information
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={paymentInfo.cardholderName}
                      onChange={(e) => handleInputChange('payment', 'cardholderName', e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-700 rounded-lg bg-zinc-800 text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-zinc-600 text-stone-300 py-3 px-4 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-zinc-900 py-3 px-4 rounded-lg font-medium transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold text-stone-200 mb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-stone-200">{item.product.name}</h4>
                      <p className="text-stone-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-stone-200">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-700 pt-4 space-y-2">
                <div className="flex justify-between text-stone-300">
                  <span>Subtotal:</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Shipping:</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Tax:</span>
                  <span>${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-zinc-700 pt-2 flex justify-between text-lg font-semibold text-stone-200">
                  <span>Total:</span>
                  <span className="text-amber-400">${(state.total + 9.99 + state.total * 0.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};