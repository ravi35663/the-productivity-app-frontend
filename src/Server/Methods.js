var user = localStorage.getItem('user-auth-token')
if(user){
    user = JSON.parse(user);
}
const base_url = process.env.REACT_APP_BASE_URL;

export const GET = async (url,queryParams={})=>{
    const token = user && user.token;
    const searchParams = new URLSearchParams(queryParams);
    url = base_url + searchParams;
    const res = await fetch(url,{
        method:"GET",
        // credentials:'same-origin', // include, *same-origin, omit
        headers:{
            'Authorization':token,
            'Content-Type':'application/json'
        },
    })
    return await res.json();
}
export const POST = async(url,body={})=>{
    url = base_url + url
    const token = user && user.token;
    const res = await fetch(url,{
        method:"POST",
        body:JSON.stringify(body),
        // credentials:"same-origin",
        headers:{
            'Authorization':token,
            'Content-Type':'application/json'
        },
    });
    return await res.json();
};

export const DELETE = async (url)=> {
    url = base_url + url;
    const token = user && user.token;
    const res = await fetch(url,{
        method:"DELETE",
        headers:{
            'Authorization':token,
            'Content-Type':'application/json'
        }
    });
    return await res.json();
};
export const PUT = async (url,body={},queryParams={})=>{
    url = base_url+url;
    const token = user && user.token;
    const res = await fetch(url,{
        method:"PUT",
        // credentials:'same-origin',
        headers:{
            'Authorization':token,
            'Content-Type':'application/json'

        }
    })
    return await res.json();
};
