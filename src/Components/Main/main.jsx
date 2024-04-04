import React from 'react'
import "./main.css"
export const Main = () => {
  return (
    <div className='main'>
        <div className='Intro'>
        <div className='content'>
            <h1 className='heading'>Explore your <span className='hobby'>hobby</span> or <span className='passion'>passion</span></h1>
            <p className=' text1'>Sign-in to interact with a community
             of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, 
            cooking, indoor or outdoor activities…</p>
            <br/>
            <p className='text2'>If you are an expert or a seller,
             you can Add your Listing and promote yourself,
              your students, products,  services or events.  
              Hop on your hobbyhorse and enjoy the ride</p>
              <img 
              alt='people'
             className='people-img'
              src='./people.png'></img>
        </div>
        </div>
        <div className='Signup'>
            <div className='Signup-container'>
            <div className='heading-signup'>
               <span className=' signup-tab'>Signup</span>
               <span className=' signup-tab'>Join In</span>
            </div>
            <div class="d-grid gap-2">
            
            <button class=" button" type="button">
            <div className='btn-position'>
            <img
            alt='google'
             src='./google.png' className='google'></img>
            <span className='span-google'>Contineu With Google</span>
            </div> 
            </button>

            <button class=" button" type="button">
            <div className='btn-position'>
            <img
            alt='google'
             src='./logo-facebook.svg' className='google'></img>
            <span className='span-google'>Contineu With facebook</span>
            </div> 
            </button>
            <div className=' horizontal'>
              <hr className='horizontal-line'></hr> Or connect with <hr className='horizontal-line'></hr>
              </div>
            </div>
            <div className=' input-section'>
              <input 
              placeholder='Email'
              className='Email-input'/>
              <div>
              <input 
              placeholder='Password'
              className='Email-input'/>
              </div>
            </div>
            <div className='options'>
              <div>
              <input
          type="checkbox"
             />
             Remember me
              </div>
              <div>
              <span><></></span>
                forget password
              </div>
              
            </div>
            <button class=" button" type="button">
            <span className='span-google'>Contineu</span>
            </button>
            </div>
        </div>
    </div>
  )
}
