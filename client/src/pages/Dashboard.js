import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    navigate("/");
    toast.success("LogOut Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />

        <h2 className="text-xl font-semibold mb-2">
          {username}
        </h2>


        <p className="text-gray-500 mb-4">
          Password: ****** 
        </p>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;