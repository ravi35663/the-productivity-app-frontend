import { Routes,Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import useAuth from "./Hooks/useAuth";
import { useEffect } from "react";
import { verifyUser } from "./Server/Apis/auth.api";
import Navbar from "./pages/Navbar/Navbar";
function App() {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      verifyUserToken();
    }else{
      navigate('/');
    }
  
  },[]);

  const verifyUserToken = async ()=>{
    const response = await verifyUser();
    if(response && response.status === 200 ){
      navigate('/dashboard')
    }else{
      navigate('/')
    }
  }

  console.log("User is ",user);
  return (
  <div>
  <Navbar />
        <Routes>
          {user?<>
            <Route path ="/dashboard" element={<Dashboard />}></Route>
          </>:
          <>
            <Route path="/" element={!user? <Home />:<Navigate to={'/dashboard'} ></Navigate>}> </Route>
            <Route path="/login" element={!user?<Login />:<Navigate to={'/dashboard'}/> }></Route>
            <Route path="/signup" element={user ? <Navigate to={'/dashboard'}></Navigate>:<Signup />} ></Route>
          </>}
        </Routes>
  </div>
  );
}

export default App;
