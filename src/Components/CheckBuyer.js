import { useEffect, useState } from "react";

const CheckBuyer = (email) => {
  const [buyerState, setBuyerState] = useState(null);
  useEffect(() => {
    fetch(
      `https://assignment-12-backend-rejwan-ahamed.vercel.app/buyerState/${email}`
    )
      .then((res) => res.json())
      .then((result) => setBuyerState(result));
  }, [email]);
  return [buyerState];
};

export default CheckBuyer;
