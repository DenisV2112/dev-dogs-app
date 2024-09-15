//Dependencies
import React from "react";
//Components
import devDogs_logo from "./assenst/devDog_logo.png"
import devDog_icon2 from "./assenst/devDogs_icon2.png"
import dev_dog_collieTail from "./assenst/dev_dog_collieTail.png"
import dev_dog_collie from "./assenst/dev_dog_collie.png"
import  dev_dog_doberman from "./assenst/dev_dog_doberman.png"
import LandingPage from "./assenst/LandingPage.mp4"

function App() {
  
  return ( 
<div>
 
    <div className="App"> 
      <div className="Spam-contenedor"><div className="SpamBox1"></div>
      <div className="SpamBox2"></div>
      </div>
      
     <div className="App__logo2">
      <img className="App__logo2-img" src={devDog_icon2} />
    </div>
    <div className="App__logo">
      <img className="App__logo-img" src={devDogs_logo} />
      </div>
      <div className="App__dog">
        <div className="App__dog_img">  
          <img className="App__dog_img-collieTail" src={dev_dog_collieTail} />
          <img className="App__dog_img-collie" src={dev_dog_collie} /> 
        </div>
        <div className="App__dog-text"> In process </div>
        <div className="App__dog_img"> <img  className= "App__dog_img-doberman" src={dev_dog_doberman}/>  </div>  
      </div>
      <div className="App__canva-text">  Preview </div>
      <div className="App__video">
  <video  width="320" height="240"  muted autoPlay  loop id="myVideo" >
    <source src={LandingPage} type="video/mp4" />
    </video>  
      </div>
    </div>
</div>
  );
}

export default App;
