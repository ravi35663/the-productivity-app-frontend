const useAuth = ()=>{
    const userData = localStorage.getItem('user-auth-token');
    if(userData){
        return(JSON.parse(userData));
    }
    return null;
}

export default useAuth