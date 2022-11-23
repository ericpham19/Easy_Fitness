import {NavLink} from "react-router-dom"
import React from 'react'

const FrontPage = () => {
  return (
    <div class= "flex flex-col justify-center items-center  ">
      <div class= "  ">
      <img  class= "relative"alt= "logo" src= "https://t4.ftcdn.net/jpg/04/22/12/95/360_F_422129557_tBylYldzJ5KjVTEdRLMkQIaYizThV1PE.jpg"/>
      <h1 class= "text-4xl mb-5">Welcome to Easy Fitness</h1>
       <span class= "text-xl">Please proceed to sign in or sign up below</span>
       <div class="space-x-4">
       <NavLink  class="text-xl " to="/login">Log In</NavLink>
       <span>|</span>
       <NavLink  class="text-xl"to="/signup">Sign Up</NavLink>
     </div>
      
      </div>
      

    
      
    </div>
  )
}
export default FrontPage;
