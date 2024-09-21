//

import { useEffect } from "react";
import { useState } from "react";

export default function Users() {
  const [usersList, setUserList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("http://localhost:5000/dea/products");
      const result = await apiResponse.json();

      // console.log(result);

      if (result?.Success) {
        setUserList(result?.data);
        setPending(false);
      } else {
        setUserList([]);
        setPending(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // we can use this or just insert the fetchAllUsers into the onClick
  function handleFetchListOfUsers() {
    setPending(true);
    fetchAllUsers();
  }

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  // console.log(usersList);

  // managing loading state
  if (pending) return <h1>Fetching users! Please wait.</h1>;

  return (
    <div>
      <h1>All Users List</h1>
      <button onClick={handleFetchListOfUsers}>Fetch Users Lists</button>
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
      </ul>
    </div>
  );
}
