'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useCart } from '@/app/components/Navbar/CartContext';

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, cartCount, removeFromCart, updateQuantity }: any = useCart();

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  const totalAmount = cartItems.reduce(
    (sum: number, item: any) => sum + calculateSubtotal(item.price, item.quantity),
    0
  );

  return (
    <>
      <div className="relative">
        <button
          className="text-black hover:scale-110 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </button>

        {isOpen && (
          <div
            className="fixed left-1/2 transform -translate-x-1/2 mt-4 w-[90vw] md:w-[90vw] lg:w-[1000px] xl:w-[1200px] 
              bg-white shadow-lg rounded-md z-50 p-4 md:p-6 max-h-[90vh] overflow-y-auto"
            style={{ top: '4rem' }} // Adjust this value based on your navbar height
          >
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4 md:mb-8 p-2 md:p-11">Home / Cart</div>

            {/* Check if Cart is Empty */}
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center h-full">
                <h2 className="text-lg font-semibold text-gray-700">Your Cart is Empty</h2>
                <Link
                  href="/shop"
                  className="mt-4 px-6 py-3 bg-[#DB4444] text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Return to Shop
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Headers */}
                <div className="hidden md:grid grid-cols-4 gap-4 mb-6 md:mb-11 border-[1px] border-black/10 p-4 font-medium">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:grid md:grid-cols-4 gap-4 py-4 md:py-7 items-center mb-4 border-b md:border-b-0"
                  >
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm md:text-base">{item.name}</span>
                    </div>

                    <div className="flex justify-between w-full md:w-auto md:block">
                      <span className="md:hidden">Price:</span>
                      <span>${item.price}</span>
                    </div>

                    <div className="flex justify-between w-full md:w-auto md:block">
                      <span className="md:hidden">Quantity:</span>
                      <div className="flex items-center border rounded w-fit">
                        <span className="px-3 py-2">{item.quantity}</span>
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, Math.min(item.quantity + 1, 100))
                            }
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            <FiChevronUp size={16} />
                          </button>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                            }
                            className="px-2 py-1 hover:bg-gray-100"
                          >
                            <FiChevronDown size={16} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between w-full md:w-auto md:block">
                      <span className="md:hidden">Subtotal:</span>
                      <span>${calculateSubtotal(item.price, item.quantity)}</span>
                    </div>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4 md:justify-between mt-8">
                  <Link
                    href="/"
                    className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors text-center"
                  >
                    Return to Shop
                  </Link>
                  <button className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition-colors">
                    Update Cart
                  </button>
                </div>

                {/* Cart Summary Section */}
                <div className="flex flex-col lg:flex-row gap-8 mt-12 w-full md:w-[90%] md:ml-11">
                  {/* Coupon Section */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-4 mt-11 mr-7">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className="flex-1 border p-3 border-t-black border-r-black rounded"
                      />
                      <button className="px-6 py-3 bg-[#DB4444] text-white rounded hover:bg-opacity-90 transition-colors">
                        Apply Coupon
                      </button>
                    </div>
                  </div>

                  {/* Cart Totals */}
                  <div className="flex-1">
                    <div className="border rounded p-4 md:p-6">
                      <h3 className="text-xl font-bold mb-6">Cart Total</h3>

                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${totalAmount}</span>
                        </div>

                        <div className="h-[1px] bg-black w-full" />

                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>Free</span>
                        </div>

                        <div className="h-[1px] bg-black w-full" />

                        <div className="flex justify-between">
                          <span>Total</span>
                          <span>${totalAmount}</span>
                        </div>
                      </div>

                      <button className="w-full py-4 bg-[#DB4444] text-white rounded hover:bg-opacity-90 transition-colors mt-7">
                        Process to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartIcon;
