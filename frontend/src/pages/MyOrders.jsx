import React, { useContext, useState, useEffect } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const MyOrders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
      if (response.data.success) {
        const groupedOrders = response.data.orders.map((order) => ({
          status: order.status,
          payment: order.payment,
          paymentMethod: order.paymentMethod,
          date: order.date,
          amount: order.amount,
          items: order.items,
        }));
        setOrders(groupedOrders.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl flex items-center justify-between">
        <Title text1="MY" text2="ORDERS" />
        <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
      </div>

      <div>
        {orders.map((order, index) => (
          <div key={index} className="border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-gray-700 text-sm">
            <div className="flex justify-between items-start">

              <img className="w-16 sm:w-20" src={assets.parcel_icon} alt="Order Icon" />
              <div >
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div>
                      <p >{item.name} x {item.quantity}<span>{item.size}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p>Date: <span className="text-gray-500">{new Date(order.date).toDateString()}</span></p>
                <p>Payment Method: <span className="text-gray-500">{order.paymentMethod}</span></p>
                <p>Payment Status: <span className="text-gray-500">{order.payment ? 'Completed' : 'Pending'}</span></p>
              </div>
              
              <p>Total Amount: <span className="text-gray-500">{currency}{order.amount}</span></p>
              <p><span className="text-gray-500">&#x25cf; </span><b>{order.status}</b></p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
