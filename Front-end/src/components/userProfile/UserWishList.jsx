import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const UserWishList = () => {
  const [wishList, setWishList] = useState([]);
  const { user } = useContext(UserContext);
  // console.log(user.wishList.perfumeId.perfume_name);
  const id = user._id;
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:3000/wishList/${id}`)
      .then((response) => {
        setWishList(response.data);
        console.log(response.data.wishList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user._id]);

  return (
    <>
      <div>sslkfsdlkfj</div>
    </>
  );
};
