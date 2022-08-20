import { useRef } from "react";
import './style.css'

export default function Input(props) {
  const colorRef = useRef(null);

  const handleChange = (evt) => {
    evt.preventDefault();

    if (colorRef.current !== null && colorRef.current.value[0] === '#') {
      props.getColorCode(colorRef.current.value)
    } 
  };

  return (
    <form >
      <input name="input" type="text" minLength={7} maxLength={7} ref={colorRef} onChange={handleChange}/>
    </form> 
  )
}
