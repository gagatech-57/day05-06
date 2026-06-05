import { useState,useEffect } from "react";

function Welcome() {
  const [name, setName] = useState("");
  const[age,setAge] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" && age <= 0) {
      alert("Please enter your name and a valid age.");
      return;
    }
    if (age <= 0) {
      alert("Please enter a valid age.");
      return;
    }
  if (age < 18) {
  alert(`Sorry, ${name}! You are a minor age is ${age} so,You must be at least 18 years old to submit.`);
  return;
} else {
  alert(`Welcome, ${name}! You are not a minor. Thank you for submitting your information.`);
}
  };
const welcomestyle = {

  textAlign: "center",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center",
  fontFamily: "poppins, sans-serif",
  fontSize: "25px",
  fontWeight: "bold",
  boder: "1px solid #e72525",
  borderRadius:"20px "
};
const titleStyle = {
  color: "#000000",
  marginBottom: "10px",
};
const inputStyle = {
  padding: "10px",
  margin: "10px",
  borderRadius: "5px",
  border: "1px solid #0d2450",
  fontSize: "16px",
};
const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#007bff",
  color: "#0e1749",
  cursor: "pointer",
  fontSize: "16px",
};
const buttonHoverStyle = {
  backgroundColor: "#0056b3",
};

const containerStyle = {
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
height: "100%",
};
  return (
    <div style={welcomestyle} >
      <h1 style={titleStyle}>Welcome, {name}!</h1>
      <p style={titleStyle}> Your age is: {age}.</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle} onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)} onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}>
        Submit
      </button>
      
     <p style={containerStyle}>Please enter your name and age to see the welcome message.</p>
     <p style={containerStyle}>Thank you for visiting !</p>
    </div>
  );
}

export default Welcome;