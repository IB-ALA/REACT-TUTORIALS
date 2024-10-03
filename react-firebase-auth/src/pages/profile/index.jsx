import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <h3>{user?.displayName}</h3>
      <h3>{user?.email}</h3>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
