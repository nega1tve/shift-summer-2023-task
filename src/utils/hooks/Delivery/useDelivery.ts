import { useState } from "react";

const [deliveryType, setDeliveryType] = useState<string>("standard");

const handleDeliveryTypeChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setDeliveryType(event.target.value);
};
