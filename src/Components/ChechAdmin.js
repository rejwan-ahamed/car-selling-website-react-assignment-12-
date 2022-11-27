import { useEffect, useState } from "react";

const CheckAdmin = (email) => {
  const [adminState, setAdminState] = useState(null);
  useEffect(() => {
    fetch(
      `https://assignment-12-backend-rejwan-ahamed.vercel.app/adminState/${email}`
    )
      .then((res) => res.json())
      .then((result) => setAdminState(result));
  }, [email]);
  return [adminState];
};

export default CheckAdmin;
