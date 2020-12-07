import React,{ Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//components
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = ()=>{

  // const categories = ['One Punch','Samurai X','Dragon ball'];

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = ()=> {
  //   setCategories([...categories,'HunterxHunter']);

  // }
   
  return(
    <Fragment>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>

      {/* <button onClick={handleAdd}> Agregar </button> */}
      <ul>
        {
          categories.map( category => 
            // <li key={category}>{category}</li>
            <GifGrid category={ category } key={ category }/> 
          )
        }
      </ul>
    </Fragment>
  )
}


ReactDOM.render(
    <GiftExpertApp />,
  document.getElementById('root')
);

