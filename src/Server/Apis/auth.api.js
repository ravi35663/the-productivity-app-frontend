import { POST } from "../Methods"
export const login = async (data)=>{
    try {
        const url = 'user/login'
        const response = await POST(url,data);
        console.log("Response is :",response);
        if(response && response.status === 200){
            localStorage.setItem('user-auth-token',JSON.stringify(response.data));
        }

        return response;
    } catch (error) {
        console.log("Error is ",error);
    }
}

export const verifyUser = async ()=>{
    try {
        const url = 'user/verify-token';
        const response = await POST(url);
        if(response && response.status === 200){
            localStorage.setItem('user-auth-token',JSON.stringify(response.data));
        }
        return response;
    } catch (error) {
        return;
    }
}

export const signup = async (data)=>{
    try {
        const url = 'user/signup';
        const response = await POST(url,data);
        if(response && response.data){
            localStorage.setItem('user-auth-token',JSON.stringify(response.data));
        }
        return response;
    } catch (error) {
        return;
    }
}