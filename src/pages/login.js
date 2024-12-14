import Paper from '@mui/material/Paper';
import { Typography, TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from "../images/logo.png";


const Login = () => {
 
        const [user, setuser] = useState({ "email": "", "password": ""  });
        const [error, setError] = useState("");
        const[message,setMessage]=useState("");
        const navigate = useNavigate();
        console.log(user);
        const handleChange = (event) => {
         
            if (event.target.name === "email") {
                setuser({ ...user, email: event.target.value });
            }
            if (event.target.name === "password") {
                setuser({ ...user, password: event.target.value });
            }
        }
        const handleLogin = () => {
          
          axios.post("http://localhost:3001/login", user, {
              headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
              if (res.data.success) {
               
                setMessage(res.data.message)
                setTimeout(()=>{
                  setMessage('')
                  navigate("/home")

                },3000)
                // Navigate to home page on success
              } else {
                setError(res.data.message); // Display backend error message
              }
            })
            .catch((err) => {
              if (err.response && err.response.status === 401) {
                setError("Invalid email or password."); // Handle 401 Unauthorized
              } else {
                setError("An error occurred. Please try again.");
              }
            });
        };
        







        return (
        <div style = {{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#BDD5E7" }}> 
         <Paper sx={{ width: "400px", height: "450px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",backgroundColor: "#AECCE4", gap: "15px", padding: "20px", border:"1px solid black", borderRadius: "10px" }} elevation={3} >
         { message!='' ?<Alert severity="success">{message}</Alert>:null }
         <img src={Logo} alt="Logo" style={{width:"250px" ,height:"200px"}} />


            <TextField id="outlined-basic" label="Email" variant="outlined" name="email"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }} sx={{ input: {
            color: "black", // Text color
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "red", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "green", // Focus border color
            },
          },
        }} onChange={(event) => handleChange(event)} fullWidth />



              
            <TextField id="outlined-basic" label="Password" variant="outlined" name="password"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }} sx={{ input: {
            color: "black", // Text color
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "red", // Hover border color
            },
            "&.Mui-focused fieldset": {
              borderColor: "green", // Focus border color
            },
          },
        }} onChange={(event) => handleChange(event)} fullWidth />

            <Button variant="contained" onClick={handleLogin} style={{backgroundColor:"black",border:"black", textDecoration:"none",textTransform:"none",fontWeight:"600",textDecoration:"none",color:"white"}}>Sign in</Button>

            <div>
            <a href='/register' style={{textDecoration:"none", color:"black"}}>Don't have an account? Register now</a>

            </div>
            
        </Paper>
      </div >
    );
    
    }


export default Login ;