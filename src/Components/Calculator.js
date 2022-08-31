import React, { useRef } from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [Input, setInput] = useState('');
    const [DarkMode , setDarkMode] = useState(false);
    
    const Dm =useRef();

    //getting btn value and display on Input Box
    const BtnValue = (event)=>{
          setInput(Input.concat(event.target.innerText))
          
    }

    //Erase All Data On display
    const AllClear = () =>{
        setInput("")
    }
    // Remove Charater one by one
    const Remove = () =>{
      setInput(Input.slice( 0 ,Input.length-1))
    }
    //show Result On Display
    const Result = () =>{
        setInput("Ans : " + eval(Input))
    }

            //For Dark Them
        const Dark = ()  =>{
            setDarkMode(true);
            Dm.current.classList.replace("calculater_cantainer" ,"dark")
            
        }
        //For Light Theme
      const Light  = () =>{
        Dm.current.classList.replace("dark" , "calculater_cantainer")
            setDarkMode(false);
      }
    return (
        <>

             {DarkMode  ? <button onClick={()=>{Light()}} className="darkbtn"><i className="fa-solid fa-moon ty"></i></button> : <button onClick={()=>{Dark()}} className="darkbtn"><i className="fa-solid fa-moon tx" /></button >}
            <div className="Wrapper">
                <div className="calculater_cantainer" ref={Dm}>

                    <div className="inputbox">
                        <input type="text"  value ={Input}className='input' autoFocus onChange={(e)=>setInput(e.target.value)}/>
                    </div>

                    <div className="calculaterbtn">
                        <table>
                            <tr>
                                <td onClick={AllClear}>AC</td>
                                <td onClick={()=>{Remove()}}><i class="fa-solid fa-delete-left"></i></td>
                                <td onClick={BtnValue}>%</td>
                                <td onClick={BtnValue}>/</td>
                            </tr>
                            <tr>
                                <td onClick={BtnValue} >7</td>
                                <td onClick={BtnValue}>8</td>
                                <td onClick={BtnValue}>9</td>
                                <td onClick={BtnValue}>*</td>
                            </tr>
                            <tr>
                                <td onClick={BtnValue}>4</td>
                                <td onClick={BtnValue}>5</td>
                                <td onClick={BtnValue}>6</td>
                                <td onClick={BtnValue}>-</td>
                            </tr>
                            <tr>
                                <td onClick={BtnValue}>2</td>
                                <td onClick={BtnValue}>3</td>
                                <td onClick={BtnValue}>1</td>
                                <td onClick={BtnValue}>+</td>
                            </tr>
                            <tr>
                                <td onClick={BtnValue}>0</td>
                                <td onClick={BtnValue}>.</td>
                                <td colSpan="1" className='result' onClick={()=>{Result()}}>=</td>
                                {/* <td></td> */}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
