import React, { useEffect, useState } from 'react'
import ProductList from "./ProductList"
import getProducts from "./Api"
import { Link } from 'react-router'
import { FiArrowRight } from "react-icons/fi";
import Loading from './Loading';

const AllProducts = () => {
  const [query , setQuery] = useState('');
  const [sort , setSort] = useState('default');
  const [Alldata , setdata ]=useState([])
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
  console.log(data)
  return (
    <div className='flex flex-col max-w-6xl mx-auto flex-wrap'>
    
    <div className='flex flex-col grow bg-white self-center max-w-6xl mt-10 mb-10 '>
      <div className='flex justify-between'>
      <input onChange={handleQueryChange} type="text" placeholder='Search' className=' bg-blue-50 w-[150px] ml-10 md:ml-15 pl-4 border-1 md:w-[280px] h-10 mt-20'/>
      <select onChange={handleSortChange} className='border  md: bg-blue-50 p-1 md:pl-3 w-[150px] mr-10 md:pr-10 md:w-1 mt-20  md:w-auto md:mr-15'>
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

export default AllProducts