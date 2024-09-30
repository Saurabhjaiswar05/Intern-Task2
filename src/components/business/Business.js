import React from 'react'
import "../business/Business.css"
import { Link } from 'react-router-dom'

const Business = () => {
  return (
    <>
    <div className='businessMain'>
      <div className='businessSub'>
      <p>Step 2</p>
            <h1>Business Infromation</h1>
            <p>please, enter information about your company.</p>
      </div>
      <form  style={{marginBottom:"50px"}}>
        <h3 style={{color:"blue",marginLeft:"180px"}}>GENERAL INFORMATION</h3>
      <div className='subForm'>
                <div>
                <label >Brand Name<sup>*</sup></label><br />
                <input type="text" placeholder='Enter Your First Name'/>
                </div>

                <div>
                <label >Brand Type<sup>*</sup></label><br />
                <input type="text" placeholder='Enter Your First Name'/>
                </div>

            </div>

            <div className='subForm'>
                <div>
                <label >Street Address<sup>*</sup></label><br />
                <input type="text" placeholder='Enter Your First Name'/>
                </div>

                <div>
                <label >city<sup>*</sup></label><br />
                <input type="text" placeholder='Enter Your First Name'/>
                </div>

            </div>

            <div className='subForm'>
                <div>
                <label >Zip code<sup>*</sup></label><br />
                <input type="text" placeholder='Enter Your First Name'/>
                </div>

                <div>
                <label >Tax ID Number<sup>*</sup></label><br />
                <input type="text" placeholder='Enter Your First Name'/>
                </div>

            </div>

            <h3 style={{color:"blue",marginLeft:"180px"}}>DOCUMENTATION</h3>

            <div style={{marginLeft:"180px"}}>
              <label> Once the following documents are signed, you'll be ready to get started</label><br />
              <input className='make' type="text" placeholder='Electronically sign the agreement' /><br />
              <input className='make' type="text" placeholder='Non adult beverage Kroger supplier waiver and release' />
            </div>

            <h3 style={{color:"blue",marginLeft:"180px"}}>COI PDF UPLOAD</h3>
            <div style={{marginLeft:"180px"}}>
            <label > Once the following documents are signed, you'll be ready to get started</label><br />
            <input className='make' type="text" placeholder='Electronically sign the agreement' />
            </div>
      </form>
      
    </div>
    <div className='businessBtn'>
    <button className='btnn'><Link className='link1' to={"/"}>Previous Step</Link></button>
    <button className='btn'> Next Step</button>
  </div>
  </>
  )
}

export default Business
