import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState(0)
    const [tip, setTip] = useState(0)
    const[tipOutput,setTipOut] = useState("")



    const valueIsValid = validateValue(enteredValue)

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)

    }




}