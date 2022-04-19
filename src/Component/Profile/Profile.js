import React from 'react'
import './Profil.css'
function Profile() {
  return (
      <section className = 'content'>
            <div >
                <h4>Hi, My name is </h4>
                <h1>LOPEZ <span>DAVID</span> JESUTOBA </h1>
                <h3> A graduate of Quantity surveying, interested in enhancing my intellectual and professional experience. I have good measuring and estimating skills, I can learn fast and the willingness to adapt to situations that will effectively increase my capacity for the achievement of set firm goals. I am highly entrepreneurial and eﬃcient in building and maintaining client relationships.<spam>I am learning webdevolpmnt on sidehustle.. ReactJs </spam></h3>
             </div>
            <div className='nws'> 
                <form>
                    <h2> Contact Me</h2>
                    <label>Enter your name:
                        <input type="text" />
                    </label><br></br>
                    <label>Enter your email:
                        <input type="text" />
                    <br></br>
                    </label><label>Enter your Message:
                        <input type="text" />
                    </label>
                    <br></br>
                    
                    <br></br>
                        <input type = "submit" value = 'send'/>
                  
                </form>
                
            </div>
    </section>
    
  )
}

export default Profile