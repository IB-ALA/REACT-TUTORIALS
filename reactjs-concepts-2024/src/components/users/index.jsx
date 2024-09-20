//

import { useEffect } from "react";
import { useState } from "react";

export default function Users(params) {
  const [usersList, setUserList] = useState([]);

  async function fetchAllUsers(params) {
    try {
      const apiResponse = await fetch("http://localhost:5000/dea/products");
      const result = await apiResponse.json();

      // console.log(result);

      if (result?.Success) {
        setUserList(result?.data);
      } else {
        setUserList([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(usersList);

  return (
    <div>
      <h1>All Users List</h1>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((user) => (
            <li key={user?.product_id}>
              <p>
                Name: {user?.name} &nbsp; -&gt; &nbsp; Price: ₵
                {(user?.price_in_pesewas / 100).toFixed(2)}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found! Please try again.</h1>
        )}

        <p>hmm</p>
      </ul>
    </div>
  );
}
