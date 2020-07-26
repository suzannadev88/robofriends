import React from 'react';

const SearchBox = ({searchfields, searchChange}) =>{
    return(
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={searchChange}/>
        </div>
    )
}
//searchChange is prop is onsearchChange that is defined in the App file, parent file. That is how we trigger events.
//every time searchChage happens, parent knows to run the func and with value of search event it can be passed
//to robots which is also a child of App
export default SearchBox;