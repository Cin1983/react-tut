import React,{ useState }  from "react";
import'./styles/styles.css';

const CountButton = ({incrementBy, buttonColor}) => {

    const [currentCount, setcurrentCount] = useState(0);


  const handleClick = (e) => {
    setcurrentCount(currentCount + incrementBy);
    e.preventDefault();
  };

  const buttonStyles={
    background:buttonColor,
    color:"white",
    width:"10%",
  }

  return (
    <div >
      <button style={buttonStyles} onClick={handleClick}>+{incrementBy}</button>
      <div>{currentCount}</div>
    </div>
  );
};

export default CountButton;
