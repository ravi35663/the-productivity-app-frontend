import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth";

const Navbar = ()=>{
    console.log("Navbar line 5")
    const navigate = useNavigate();
    const user = useAuth();
    const logout  = ()=>{
        localStorage.clear();
        navigate('/');
    }
    // return <div>
    //     <button onClick={logout}>Logout</button>
    // </div>
    return <header>
    <div className="container">
        <Link to={user?'/dashboard':'/'}> <h1> The Productivity app</h1></Link>
    </div>
    <nav>
        {user && (
            <div>
            <span>{user.email}</span>
            <button onClick={logout}>Log out</button>
        </div>)}
        {!user &&
        (
        <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Sign up</Link>
        </div>
        )}
    </nav>
</header>
}

export default Navbar;