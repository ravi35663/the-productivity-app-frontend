import { Link } from "react-router-dom";

const Home = ()=>{
    return <div>
        <div>This is home page</div>
        <ul>
            <li><Link to={'/signup'}>Sign up</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </ul>
    </div>
};

export default Home;