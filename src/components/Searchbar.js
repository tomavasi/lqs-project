import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useRef } from 'react'
import { ShopContext } from '../context/shop-context'


const Searchbar = () => {
  const { products, setSearchResults} = useContext(ShopContext);
  const inputRef= useRef ();
  const inputFocus = (e) =>{
    e.preventDefault();
    inputRef.current.focus();
  }
  const handleSearchChange = (e) =>{
    if (!e.target.value) return setSearchResults(products)

    const resultsArray = products.filter(product=> product.name.toLowerCase().includes(e.target.value.toLowerCase()))
 
    setSearchResults(resultsArray)
  }
  return (
    <div>
        <form className='searchbarform' >
            <input className="searchinput" ref={inputRef} type= "text" placeholder="Search" onChange={handleSearchChange}/>
            <button onClick={inputFocus}><FontAwesomeIcon icon={faSearch}/></button>
        </form>
    </div>
  )
}

export default Searchbar