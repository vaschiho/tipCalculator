import React, { useReducer, useState } from 'react'

import { BiDollar } from "react-icons/bi"
import { BsFillPersonFill } from 'react-icons/bs'



const reducer = (state,action) =>{

}
const Tip = () => {
  const [tip, setTip] = useState(0)
  const [amount, setAmount] = useState("")
  const [custom, setCustom] = useState(0)
  const [person, setPerson] = useState("")
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [payPerPerson, setPayPerPerson] = useState(0)
  const [amountError, setamountError] = useState(false)
  const [customError, setcustomError] = useState(false)
  const [personError, setPersonError] = useState(false)



  const inputAmountHandler = (e) => {
    setAmount(+e.target.value)

    if (e.key === "Enter") {
      onSunbitHandler(e);
    }

    if (amount > 0) {
      setamountError(false)
      return;
    }
  }

  const inputCustomHandler = (e) => {
    const customTip = +e.target.value
    setCustom(customTip)
    setTip(customTip / 100)


    if (e.key === "Enter") {
      onSunbitHandler(e);
    }

    if (tip > 0 || custom > 0) {
      setcustomError(false)
      return;
    }
  }

  const inputPersonHandler = (e) => {
    setPerson(e.target.value)

    if (e.key === "Enter") {
      onSunbitHandler(e);
    }

    if (person > 0) {
      setPersonError(false)
      return;
    }
  }

  const onSunbitHandler = (e) => {
    e.preventDefault()

    // if (amount <= 0 || person <= 0) {
    //   alert("Please enter valid values for amount and number of people");
    //   return;
    // }
    if (amount <= 0) {
      setamountError(true)
      return;
    }

    if (tip === 0 && custom === 0) {
      alert("Please select a tip percentage or enter a custom tip");
      setcustomError(true)
      return;
    }

    if (person <= 0) {
      setPersonError(true)
      return;
    }
    let bill = amount * (custom !== 0 ? custom / 100 : tip);
    let tipPerPerson = person !== 0 ? bill / person : 0;
    let totalTip = amount + bill;
    let payPerPerson = totalTip / person;

    setTipPerPerson(tipPerPerson)
    setPayPerPerson(payPerPerson)

  }

  const resetHandler = () => {
    setTip("")
    setPerson("")
    setAmount("")
  
    setTipPerPerson(0)
    setPayPerPerson(0)
    setcustomError(false)
    setamountError(false)
    setPersonError(false)
    setCustom("")
  }

  const handleFixedTipClick = (option) => {
    setTip(option);
    setCustom(0);
    setcustomError(false)
    if (e.key === "Enter") {
      onSunbitHandler(e);
    } 
  }


  return (
    <div>
      <form action="" onSubmit={onSunbitHandler} className="flex flex-col items-center h-screen justify-center  bg-[#c5e4e7] mx-auto">
        <h1 className='pb-12 text-2xl font-normal text-[#00494d] tracking-widest'>SPLT <br /> TTER</h1>
        <div className='bg-white rounded-md p-6 flex  flex-col md:flex-row shadow-md md:justify-evenly max-w-[100%] sm:max-w-2xl w-4/5 justify-center  mx-auto'>
          <div className="">
            <div className='py-4'>
              <label className='font-sans text-sm py-2'>Bill</label>
              <div className="relative">
                <input
                  type="number" 
                  class="appearance-none w-full max-w-[18rem] text-right py-2 px-3 leading-tight bg-white border border-gray-200 font-bold text-base text-[#00494d] rounded-md outline-none hover:outline-none hover:border-[#26c0ab]  hover:bg-[#f5fafa] transition duration-75 "
                  onKeyDown={inputAmountHandler}
                  onChange={inputAmountHandler}
                  min="1"
                  value={amount}
                  required
                  name=""
                  id=""
                  placeholder='0'
                />
                <BiDollar className='absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 flex items-center text-[#7f9c9f] text-sm' />
              </div>
              {amountError && <p className='text-xs py-2 text-red-500'>please enter a valid amount</p>}
            </div>

            <div className='py-3 w-full max-w-[18rem] '>
              <label className='font-sans text-sm my-5'>Select tip %</label>
              <div className="grid grid-cols-2 sm:grid-cols-3  gap-3">
                <button type='button' className='bg-[#00494d] text-white py-1 rounded-sm hover:text-[#00494d] hover:bg-[#26c0ab] font-bold' onClick={() => handleFixedTipClick(0.05)}>5%</button>
                <button type='button' className='bg-[#00494d] text-white py-1 rounded-sm hover:text-[#00494d] hover:bg-[#26c0ab] font-bold' onClick={() => handleFixedTipClick(0.10)}>10%</button>
                <button type='button' className='bg-[#00494d] text-white py-1 rounded-sm hover:text-[#00494d] hover:bg-[#26c0ab] font-bold' onClick={() => handleFixedTipClick(0.15)}>15%</button>
                <button type='button' className='bg-[#00494d] text-white py-1 rounded-sm hover:text-[#00494d] hover:bg-[#26c0ab] font-bold' onClick={() => handleFixedTipClick(0.25)}>25%</button>
                <button type='button' className='bg-[#00494d] text-white py-1 rounded-sm hover:text-[#00494d] hover:bg-[#c7caca] font-bold' onClick={() => handleFixedTipClick(0.50)}>50%</button>
                <input type="number" class="appearance-none w-full py-2 px-3 leading-tight bg-white border border-gray-200 rounded-md outline-none font-bold text-right  text-base text-[#00494d] hover:outline-none hover:border-[#26c0ab]  hover:bg-[#f5fafa] "
                  onKeyDown={inputCustomHandler}
                  onChange={inputCustomHandler}
                  value={custom}
                  name=""
                  id=""
                  placeholder='custom'
                  min="1"
                  max="100" />
              </div>
              {customError && <p className='text-xs py-2 text-red-500'>Please select a tip percentage or enter a custom tip</p>}
            </div>

            <div className="py-3">
              <label className="font-sans text-sm py-5">Number of People</label>
              <div className="relative">
                <input type="number" class="appearance-none w-full max-w-[18rem]  text-right py-2 px-3 leading-tight bg-white border border-gray-200 font-bold text-base text-[#00494d] rounded-md outline-none hover:outline-none hover:border-[#26c0ab]   hover:bg-[#f5fafa] transition duration-75" onKeyDown={inputPersonHandler}
                  onChange={inputPersonHandler}
                  value={person}
                  required
                  name=""
                  min="1"
                  placeholder='0'
                  id="" />
                <BsFillPersonFill className='absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 flex items-center text-[#7f9c9f] text-sm' />
              </div>
              {personError && <p className='text-xs py-2 text-red-500'> please enter a valid amount</p>}
            </div>
          </div>

          <div className='rounded-md w-full flex flex-col justify-between max-w-xs py-7 px-4 bg-[#00494d]'>


            <div>
              <div className="flex justify-between py-2"> <h6 className='text-white'>Tip per person: <br></br> <span className='text-xs text-[#7f9c9f]'>/ person</span></h6>  <h1 className='text-3xl text-[#26c0ab] font-bold'>${tipPerPerson.toFixed(2)}</h1>  </div>
              <div className="flex justify-between py-2"> <h6 className='text-white'>Tip per person: <br></br> <span className='text-xs text-[#7f9c9f]'>/ person</span></h6>  <h1 className='text-3xl text-[#26c0ab] font-bold'>${payPerPerson.toFixed(2)}</h1>  </div>

            </div>
            <div className='flex items-center justify-center'>
              <button type="reset" className='bg-[#26c0ab] w-full py-1 rounded-md font-bold text-[#00494d] font-sans' onClick={resetHandler}>Reset</button>
            </div>


          </div>
        </div>
      </form>
    </div>
  )
}

export default Tip;
