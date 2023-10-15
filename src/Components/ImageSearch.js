import React,{useState,useEffect} from 'react';
import axios from 'axios'
import ImageList from './ImageList';

//env implemented idea about env is 
//it keep the data privacy so no one know your access key while github this env file not pushed
//process.env is to get data from env
// console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY)
const ImageSearch=({setImages})=>{
    const[searchTerm,setSearchTerm]=useState('');

    // function implementSearch(){
    //     axios.get("https://api.unsplash.com/search/photos",{
    //         params:{
    //             query:searchTerm

    //         },
    //         headers:{
    //             Authorization:"Client-ID hlZSCJVNkSqB6MOtdO9I6-8b02ZkgIGbTecBVdZdiak"

    //         },
    //     }).then(response=>setImage(response.data.results))
    //     .catch(e=>console.log(e.message))
    // }
    //once the api is fectch the api works for any input so it need run once bcz of that we use useEffect to save time
    useEffect(()=>{
        implementSearch()
    },[])
    
    async function implementSearch(){
        try{
            let response=await axios.get("https://api.unsplash.com/search/photos",{
                params:{
                    query:searchTerm
    
                },
                headers:{
                    Authorization:`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                   //defualt parameter to get data of accessces key process.env
                },
            })
            console.log(response.data.results)
            setImages(response.data.results);

        }
       

       catch(e){
        console.log(e.message)

       }
    }


    return(
        <div>
            <input type='text' placeholder='Enter something' onChange={e=>setSearchTerm(e.target.value)}/>
            <button onClick={implementSearch}>Serach</button>
           

        </div>
        
    )
}

export default ImageSearch