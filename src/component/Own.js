


import {useState,useEffect} from 'react'
import React from 'react'

export default function Own() {
    const [data , setData] = useState("")
 const [datagit , setDatagit] = useState([])
 const [apidata , setApidata] = useState([])
  
 const handleChange = (e)=>{
    setData(e.target.value)
    //console.log(data)
 }
 const handleClick = ()=>{
  console.log(datagit)
  
 setDatagit([data, ...datagit])
 console.log( apidata)

 
 }

console.log( datagit)
 
 useEffect(() => {
   if (datagit[0]){
    
    fetch(`https://api.github.com/users/${datagit[0]}`)
     
  .then((response) => response.json())

  .then((json) => {

    setApidata([...apidata,json]);
   
  });

}

 }, [datagit]);
 



   
    

  return (
    <div className="App">
      <input type="text" value ={data} className='input' onChange={handleChange}/>
      <input type ="submit"  className='search' onClick={handleClick}/>

      { apidata.length? 
      apidata.map((item,i)=>{
           
      return(
        <div  className='card '>
            <div className='img-container'>
         <img src={ item.avatar_url} ></img>
         </div>
         <div className="details">
        
          <p className="name"><span className="title">Name:</span>{item.name}</p>
          <p className='company'><span className="title">company:</span>{item.company}</p>
          <p className='reops'><span className="title">repos:</span>{item.public_repos}</p>
          </div>
        </div>
      )
    }) : null  }
    </div>
  );

  
}

