import { useEffect, useState } from "react";

const CheckSeller = (email) => {
  const [sellerState, setSellerSatae] = useState(null);
  useEffect(() => {
    fetch(
      `https://assignment-12-backend-rejwan-ahamed.vercel.app/sellerState/${email}`
    )
      .then((res) => res.json())
      .then((result) => setSellerSatae(result));
  }, [email]);
  return [sellerState];
};

export default CheckSeller;
