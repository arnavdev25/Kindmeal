import React from 'react';
import { useState } from 'react';

const SignUp = () => {
  const [firstname, setFirstName]=useState('');
  const [lastname, setLastName] =useState('');
  const [email , setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [username , setUsername] =useState('');
  const  [date , setDate] =useState('');
  // const [file , setFile] = useState('');
  const [male ,setMale] =useState('');
  const [female , setFemale]= useState('');
  const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
// Handling the name change
const handleFirstname = (e) => {
  setFirstName(e.target.value);
  setSubmitted(false);
  };
  const handleLastname =(e)=>{
    setLastName(e.target.value);
    setSubmitted(false);
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value);
    setSubmitted(false);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setSubmitted(false);
  }
  const handleUsername=(e)=>{
    setUsername(e.target.value);
    setSubmitted(false);
  }
  const handleDate=(e)=>{
    setDate(e.target.value);
    setSubmitted(false);
  }
  const handleMale=(e)=>{
    setMale(e.target.value);
    setSubmitted(false);

  }
  const handleFemale=(e)=>{
    setFemale(e.target.value);
    setSubmitted(false);
  }
  // const handleFile=(e)=>{
  //   setFemale(e.target.value);
  //   setSubmitted(false);
  // }
    const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === '' ||  lastname==='' || email === '' || password === '' || username==='' || date===''  || male==='' || female==='') {
    setError(true);
    
    } else {
    setSubmitted(true);
    setError(false);
    }
    };
    // Showing success message
const successMessage = () => {
  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  }}>
  <h1>User {firstname} {lastname} successfully registered!!</h1>
  </div>
  );
  };
  
  // Showing error message if error is true
  const errorMessage = () => {
  return (
  <div
  className="error"
  style={{
  display: error ? '' : 'none',
  }}>
  <h1>Please enter all the fields</h1>
  </div>
  );
  };
  
  return (
  
    <div id='container'>
    {/* left..................     */}
       <div id='left'>
           <div id='button1'>
               <button >
                   <img src='https://www.kindmeal.my/images/join_normal.png'></img>
                   <a href='https://www.kindmeal.my/join.htm'></a>
                   <p>Food Lover SignUP</p>
               </button>
               
           </div>
           <div id='button2'>
               <button><img src='https://www.kindmeal.my/images/join_shop.png'></img>
               <a href='https://www.kindmeal.my/join.htm'></a>
                   <p>Resturant SignUP</p></button>
           </div>
           <div id='d3'>
               <ul>
                   <li>Exclusive meat-free deals</li>
                     <li>  Share yummy food moments</li>
                     <li>  Meet friendly food lovers</li>
                      <li>     Discover cool restaurants</li>
                     <li>  Email updates on tasty deals</li>
                     <li>      Instant coupons & dining</li>
                    <li>   No upfront payment, booking or printing</li>
                    <a href='https://www.kindmeal.my/about.htm'>More about details </a>
               </ul>
           </div>
       </div>


       {/* Right.......................................   */}
       <div id='right'>
            <div id='head1'>
                <h1>Food Lover? Sign Up Now or <a href="/">Login With Facebook</a></h1>
            </div>
            
            <div id='paragraph'>
                <p>Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</p>
            </div>
            <div id='p2'>
                <p>KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</p>
            </div>
            <form>
                  <div className='ekline'>
                      <div id='fme' ><p >firstname</p></div>
                       <div id='lme'> <p>lastname</p></div>
                    </div> 
                      
           <div> ENTER YOUR NAME:<input id="fn" onChange={handleFirstname}type="text" value={firstname} placeholder="enter your firstname"/>
                              <input id="ln"type="text" onChange={handleLastname} value={lastname} placeholder="enter your lastName"/></div>
                <div><p>Your email must be correct to receive activation email</p></div>
                 <div>  Enter your Email:<input id="email"onChange={handleEmail} type="email"value={email} placeholder='enter your email'></input></div>
               <div>  Re-Enter Email:	<input id='Remail'onChange={handleEmail}  type="email" value={email} placeholder='enter your email'></input></div>  
                <div>   Password <input id='pwd'onChange={handlePassword} type="password" value={password} placeholder='enter your password'></input></div>
                <div><p>	
             Choose a cool username for your Personal Profile page, comments & reviews</p></div>
           <a href='/'> http://KindMeal.my/Username</a> 
        <div>  Username:<input id="username" onChange={handleUsername}type="test" value={username} placeholder='enter your username'></input></div> 
        <div><p>Only your age will be publicly visible</p></div>
        <div>Birth Date: <input id='dob'onChange={handleDate}value={date} type="date"></input></div>
      <div>  Country: 
      <select id='country'>
        <option>country</option>
        <option>INDIA</option>
        <option>CHINA</option>
        <option>BANGALADESH</option>
        <option>SRILANKA</option>
        <option>ENGLAND</option>
        <option>NEWZEALAND</option>
        <option>AUSTRALIA</option>
        <option>PAKISTAN</option>
        <option>FRANCE</option>
        <option>RUSSIA</option>
        <option>AMERICA</option>
        <option>BRAZIL</option>
        <option>CANANDA</option>
        <option>UKRAINE</option>
        <option>GERMANY</option>
        <option>AUSTRIA</option>
        <option>ARGENTINA</option>
        <option>COLOMBIA</option>
        
      </select>
       </div>
       <div>State:
         <select id='state' >
           <option>state</option>
           <option>PATNA</option>
           <option>BANGALORE</option>
           <option>KOLKATA</option>
           <option>GANDHINAGAR</option>
           <option>LUCKNOW</option>
           <option>ITNANAGAR</option>
           <option>MUMBAI</option>
           <option>DEHRADUN</option>
         </select>
         </div> 
           <div id='gender'>
            GENDER:
            
              <input id='male'onChange={handleMale}value={male} type="checkbox"/>male
              <input id='female' onChange={handleFemale}value={female} type="checkbox"/>female

            
         
           </div>                   
           <div id='file'>Profile Photo: <input  id="file1" type= "file"/></div> 
           <div id='agree'><input  type="checkbox"/>I agree to KindMeal.my's <a href="https://www.kindmeal.my/terms.htm">Terms & Conditions</a></div>
           <br />
           <br />
          <div ><button id='jn'onClick={handleSubmit} type="submit">Join Now</button></div>
       </form>
            
       </div>
       <div className="messages">
{errorMessage()}
{successMessage()}
</div>
    </div>
  )
}

export default SignUp