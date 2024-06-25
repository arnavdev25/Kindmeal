import React from 'react'

const Logout = () => {
    const handleButton=()=>{
        navigate("/home");
        // 
    }
  return (
      <>
    <div className='container'>
        <div className='img'>
         <img  id="img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0nKEK40namXNiFFQOTlJezwDjHJ6nYTN9XLMsYx03EWaT8NRTBbJH6pAN-suujpQweE&usqp=CAU" alt="" /></div>
         <div className='text'>
             <p>
                 <h1>See You Again,Food Lover!</h1>
             </p>
         </div>   
    </div>
    <div id='text'>
    <p>You have successfully Logged out of KindMeal my</p>

    </div>
    <div id='text1'>
     <p>Whenever you hunger for absolutely delicious and irresistible vegterian food,we're here to satisfy your deeprest creavings. So,do visit us again!</p>
    </div>
    <br />
     <div className='btn'>
    <button id='btn' onClick={handleButton()}>Return to Main page</button>
    </div>
    </>
  )
}

export default Logout