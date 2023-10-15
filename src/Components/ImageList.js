import React from "react";

const ImageList=({images})=>{

    return(
    <div>
        {
            images.map((img,index)=>(
                
                <img src={img.urls.thumb} id={index} alt={img.alt_description}/>
                
            ))
        }



    </div>
    )

}


export default ImageList;

