import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    useEffect(()=>{
        console.log("Home use Effect")
        // history.push('/dashboard');
    },[]);
    return <div>
        <div>Let's make yourself productive</div>
    </div>
};

export default Home;