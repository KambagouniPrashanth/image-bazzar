
import './App.css';

import ImageSearch from './Components/ImageSearch';
import ImageList from './Components/ImageList';
import React,{useState} from 'react';
//we need to add env in git ingnore file to keep you key as safe
function App() {
  const[images,setImages]=useState([])
  //here we passing the setImages as a object to the imageserch then it will store list of data from imageserch urls
  //after that the images is have a object of specified serchTerm in the ImagesSearch

  return (
   <div>
   <ImageSearch setImages={setImages}/>
   <ImageList images={images}/>
   </div>
  );
}

export default App;
