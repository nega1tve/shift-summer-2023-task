import { useState } from "react";

export const useDelivery = () => {
  const [recipientData, setRecipientData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    phone: "",
  });

  const [senderAddress, setSenderAddress] = useState({
    street: "",
    house: "",
    apartment: "",
    notes: "",
  });

  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    house: "",
    apartment: "",
    notes: "",
  });

  const handleRecipientDataChange = (data) => {
    setRecipientData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSenderAddressChange = (address) => {
    setSenderAddress((prevAddress) => ({
      ...prevAddress,
      ...address,
    }));
  };

  const handleDeliveryAddressChange = (address) => {
    setDeliveryAddress((prevAddress) => ({
      ...prevAddress,
      ...address,
    }));
  };

  const [deliveryType, setDeliveryType] = useState<string>("standard");

  const handleDeliveryTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryType(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Данные получателя:", recipientData);
    console.log("Адрес отправителя:", senderAddress);
    console.log("Адрес доставки:", deliveryAddress);
  };

  return {
    deliveryType,
    recipientData,
    senderAddress,
    deliveryAddress,
    handleRecipientDataChange,
    handleSenderAddressChange,
    handleDeliveryAddressChange,
    handleDeliveryTypeChange,
    handleSubmit,
  };
};
