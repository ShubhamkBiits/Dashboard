import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out Successfully");
    navigate("/");
  };

  return (
    <div className="home-container">

      <p className="home-text">Home</p>

      <div className="employee-card">
        Shubham <br />
        Employee <br />
        IT101
      </div>

      <h1 className="welcome-text">
        Welcome Shubham
      </h1>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
};

export default Home;