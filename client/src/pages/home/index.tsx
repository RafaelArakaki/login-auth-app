import { useNavigate } from "react-router";

const HomePage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Auth:token");
    localStorage.removeItem("Auth:user");

    navigate("/login");
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-80 bg-gray-800 p-6 rounded-md">
        <h2 className="font-bold text-gray-200 text-2xl mt-4 mb-12 text-center">Home</h2>        
        <p></p>
        <button
          type="button"
          className="bg-violet-700 hover:bg-violet-600 text-white w-full py-2 rounded-md mb-5"
          onClick={handleLogout}
        >
          Sair
        </button>
      </div>
    </div>
  )
}

export default HomePage;