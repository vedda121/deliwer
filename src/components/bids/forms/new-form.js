import React, { useState } from 'react';
import Button from '../../resusable-controls/button';
import DropdownInput from '../../resusable-controls/dropdown-input';
import TextInput from '../../resusable-controls/text-input';
import ToggleInput from '../../resusable-controls/toggle-input';
import toast from 'react-hot-toast';

const NewForm = ({ addNewBid }) => {
  const [bid, setBid] = useState({
    bidType: '',
    bidAmount: '',
    bidActiveDuration: '',
    location: '',
    sendToFavorites: false,
  });
  const bidTypeOptions = ['Single Order', 'Hire Out'];
  const bidActiveDurationOptions = ['10 min', '15 min', '20 min', '25 min', '30 min'];
  const { bidType, bidAmount, bidActiveDuration, location, sendToFavorites } = bid;

  const onSubmitHandler = (e, order) => {
    e.preventDefault();
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();
    addNewBid({
      ...order,
      orderId: orderId,
      estimatedTime: 'Bid unaccepted',
      status: 'bid-unaccepted',
      contact: '',
    });
    setBid({
      bidType: '',
      bidAmount: '',
      bidActiveDuration: '',
      location: '',
      sendToFavorites: false,
    });
    toast.success(`Bid placed with order id: ${orderId}`);
  };

  return (
    <>
      <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => onSubmitHandler(e, bid)}>
        <div>
          <DropdownInput
            label="Bid Type"
            value={bidType}
            setValue={(value) => setBid({ ...bid, bidType: value })}
            options={bidTypeOptions}
            required
          />
        </div>
        <div>
          <TextInput label="Bid Amount" value={bidAmount} onChangeHandler={(e) => setBid({ ...bid, bidAmount: e.target.value })} required />
        </div>
        <div>
          <DropdownInput
            label="Bid Active Duration"
            value={bidActiveDuration}
            setValue={(value) => setBid({ ...bid, bidActiveDuration: value })}
            options={bidActiveDurationOptions}
            required
          />
        </div>
        <div>
          <TextInput label="Location" value={location} onChangeHandler={(e) => setBid({ ...bid, location: e.target.value })} required />
        </div>
        <div>
          <ToggleInput
            label="Send to Favorite Drivers"
            active={sendToFavorites}
            onChangeHandler={() => setBid({ ...bid, sendToFavorites: !sendToFavorites })}
            required
          />
        </div>
        <div className="text-center mt-3">
          <Button label="Place Bid" />
        </div>
      </form>
    </>
  );
};

export default NewForm;
