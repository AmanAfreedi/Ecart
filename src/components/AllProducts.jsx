import React, { useContext, useEffect, memo, useState } from 'react'
import ProductList from "./ProductList"
import getProducts from "./Api"
import { Link, Navigate } from 'react-router'
import { FiArrowRight } from "react-icons/fi";
import Loading from './Loading';
import { UserContext } from '../App';
import withUser from './withUser';

const AllProducts = ({user}) => {
 
  console.log(user)
  const [query , setQuery] = useState('');
  const [sort , setSort] = useState('default');
  const [Alldata , setdata ]=useState([])
  const token = localStorage.getItem("token");
 
  function handleQueryChange(event){
    let newQuery = event.target.value;
    setQuery(newQuery);
  }
  function handleSortChange(event){
    setSort(event.target.value);
  }
  useEffect(function(){
    getProducts().then((data) => {
      setdata([...data]);
    })
  },[])
  if(Alldata.length===0){
    return <div><Loading/></div>
  }
  const data =Alldata.filter(function (items){
    if(items.title.toLowerCase().indexOf(query.toLowerCase())!=-1){
      return true;
    }else{
      return false;
    }
  })
  if(sort=="title"){
    data.sort(function(x,y){
      return (x.title < y.title) ? -1 : 1;
    })
  }else if(sort =="l2h"){
    data.sort(function(x,y){
      return parseInt(x.price)-parseInt(y.price);
    })
  }else if(sort =="h2l"){
    data.sort(function(x,y){
      return parseInt(y.price)-parseInt(x.price);
    })
  }
   if(!user && !token){
    return <Navigate to="/login" />
  }
  return (
    <div className='flex flex-col max-w-6xl mx-auto flex-wrap px-5'>
    
    <div className='flex flex-col grow bg-white self-center max-w-6xl mt-10 mb-10 '>
      <div className='font-semibold text-2xl text-gray-400 p-3 self-end'>Welcome</div>
      <div className='flex justify-between'>
      <input onChange={handleQueryChange} type="text" placeholder='Search' className=' bg-blue-50 w-[100px] ml-10 md:ml-3 pl-4 border-1 md:w-[280px] h-10 mt-20'/>
      <select onChange={handleSortChange} className='border  md: bg-blue-50 p-1 md:pl-3 md:w-[280px] mr-10 md:pr-10  mt-20  w-[100px] md:mr-3'>
          <option value="default">Default Sort</option>
          <option value="title">Sort by title</option>
          <option value="l2h">Sort by price: low to high</option>
          <option value="h2l">Sort by price: high to low </option>
        </select>
      </div>
   <ProductList products={data}/>
   <div className='flex gap-1 ml-15 mb-5 mt-5'>
    <Link to={`/`} className='border p-2 pl-3 pr-3 border-orange-700 bg-orange-600 hover:bg-white'>1</Link>
    <Link to={`/`} className='border p-2 pl-3 pr-3 border-orange-700 bg-orange-600 hover:bg-white'>2</Link>
    <Link to={`/`} className='border p-2 pl-3 pr-3 border-orange-700 bg-orange-600 hover:bg-white'><FiArrowRight className='mt-1' /></Link>
    
   </div>
    </div>
    
   </div>

  )
}

export default withUser(memo(AllProducts))