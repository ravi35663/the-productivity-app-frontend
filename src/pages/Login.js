import { useState } from "react";
import { login } from "../Server/Apis/auth.api";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const navigate = useNavigate();
    const [data,setData] = useState({email:'',password:''});
    const handleChange = (key,value)=>{
        setData({...data,[key]:value});
    }
    const handleSubmit = ()=>{
        login(data).then(res=>{
            if(res && res.status === 200){
                navigate('/dashboard');
            }
            console.log("Login data");
        });
    }
    return (
        <div>
            <input name="email" value={data.email} onChange={(e)=>handleChange('email',e.target.value)} placeholder="Email"/>
            <input name="password" value={data.password} onChange={(e)=>handleChange('password',e.target.value)} placeholder="Password" />
            <button type="submit" onClick={handleSubmit}> Submit</button>
        </div>
    )
};

export default Login;