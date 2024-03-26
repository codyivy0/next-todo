import { useAuth } from "@/app/context/authcontext";

const UserDashboard = () => {
  const { currentUser, login, signup, logout } = useAuth();
  console.log(currentUser)
  return (
    <div>
      <p>logged in as {currentUser.email} </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
