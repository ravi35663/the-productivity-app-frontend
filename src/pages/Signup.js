import { useState } from "react";
import { signup } from "../Server/Apis/auth.api";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    const [data,setData] = useState({email:'',password:'',name:''});
    const [openModal,setOpenModal] = useState(false);
    // const navigate = useNavigate();
    const handleSubmit = async ()=>{
        const res = await signup(data);
        if(res && res.data){
            setOpenModal(true);
        }
    }
    const handleChange = (key,value)=>{
        setData({...data,[key]:value});
    }
    return (
        <div>
            <div>
                <input name="name" value={data.name} onChange={(e)=>handleChange('name',e.target.value)} placeholder="Full Name" />
                <input name="email" value={data.email} onChange={(e)=>handleChange('email',e.target.value)} placeholder="Email"/>
                <input name="password" value={data.password} onChange={(e)=>handleChange('password',e.target.value)} placeholder="Password" />
                <button type="submit" onClick={handleSubmit}> Submit</button>
            </div>
            
        </div>
    )
}

export default Signup;