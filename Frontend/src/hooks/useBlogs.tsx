import axios from 'axios';

export default async function useBlogs(){
    try{
        const token = window.localStorage.getItem('token');

        const response = await  axios.get('http://localhost:3000/api/blog',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data;
    }
    catch(err){
        console.log(err)
    }
}