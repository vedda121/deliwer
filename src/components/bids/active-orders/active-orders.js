import React, { useState } from 'react';
import SearchBox from '../../resusable-controls/search-box';
import OrderItem from './order-item';

const ActiveOrders = ({ activeOrders, onEditBidClickHandler, onDeleteOrderClickHandler }) => {
  const [searchOrderID, setSearchOrderID] = useState('');

  const onSearchBoxChangeHandler = (e) => {
    setSearchOrderID(e.target.value);
  };

  return (
    <div className="w-full">
      <SearchBox placeholder="Search Active Orders" onChangeHandler={onSearchBoxChangeHandler} />
      <div className="py-3 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center justify-center w-full">
        {activeOrders &&
          activeOrders
            .filter((order) => order.status === 'bid-unaccepted')
            .filter((order) => order.orderId.indexOf(searchOrderID) > -1)
            .map((order) => (
              <OrderItem
                key={order.orderId}
                order={order}
                onEditOrderClickHandler={onEditBidClickHandler}
                onDeleteOrderClickHandler={onDeleteOrderClickHandler}
              />
            ))}
      </div>
    </div>
  );
};

export default ActiveOrders;
