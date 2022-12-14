import { useEffect, useState } from "react";

const CheckSeller = (email) => {
  const [sellerState, setSellerSatae] = useState(null);
  const [sellerLoading, setSellerLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://assignment-12-backend-rejwan-ahamed.vercel.app/sellerState/${email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setSellerSatae(result);
        setSellerLoader(false);
      });
  }, [email]);
  return [sellerState,sellerLoading];
};

export default CheckSeller;
