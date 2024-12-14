import Paper from '@mui/material/Paper';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import Logo from "../images/logo.png";

const Register = () => {
    const [user, setuser] = useState({ "name": "", "email": "" ,"country": "","phone": "","password": "" });
    console.log(user);     
    const handleChange = (event) => {
        if (event.target.name === "name") {
            setuser({ ...user, name: event.target.value });
        }
        if (event.target.name === "email") {
            setuser({ ...user, email: event.target.value });
        }
        if (event.target.name === "country") {
            setuser({ ...user, country: event.target.value });
        }
        if (event.target.name === "phone") {
            setuser({ ...user, phone: event.target.value });
        }
        if (event.target.name === "password") {
            setuser({ ...user, password: event.target.value });
        }

       
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.checkValidity()) {
          alert("Form is valid! Submitting the form...");
        } else {
          alert("Form is invalid! Please check the fields...");
        }}
    return (
        <div style = {{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#BDD5E7" }}> 
        <Box component="form" onSubmit={handleSubmit} noValidate>
        <Paper sx={{ width: "500px", height: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "25px", padding: "20px", border: "2px solid black",backgroundColor:"#AECCE4" ,borderRadius: "10px" }} elevation={3} >
        <img src={Logo} alt="Logo" style={{width:"150px" ,height:"100px"}} />

        <a href='/login' style={{textDecoration:"none", color:"black"}}>Already have an account? Sign in</a>

           <TextField id="standard-basic" label="Name" variant="standard" name="name"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }}   sx={{
            "& .MuiInput-root": {
              "&:before": {
                borderBottom: "1px solid black", // Default underline color
              },
              "&:hover:before": {
                borderBottom: "1px solid red", // Hover underline color
              },
              "&:after": {
                borderBottom: "1px solid green", // Focus underline color
              },
            },
          }} onChange={(event) => handleChange(event)} fullWidth />


           <TextField id="standard-basic" label=" Email address" variant="standard"  name="email"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }}   sx={{
            "& .MuiInput-root": {
              "&:before": {
                borderBottom: "1px solid black", // Default underline color
              },
              "&:hover:before": {
                borderBottom: "1px solid red", // Hover underline color
              },
              "&:after": {
                borderBottom: "1px solid green", // Focus underline color
              },
            },
          }} onChange={(event) => handleChange(event)} fullWidth />



           <TextField id="standard-basic" label="Country" variant="standard"  name="country"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }}   sx={{
            "& .MuiInput-root": {
              "&:before": {
                borderBottom: "1px solid black", // Default underline color
              },
              "&:hover:before": {
                borderBottom: "1px solid red", // Hover underline color
              },
              "&:after": {
                borderBottom: "1px solid green", // Focus underline color
              },
            },
          }} onChange={(event) => handleChange(event)} fullWidth />



           <TextField id="standard-basic" label=" Phone" variant="standard"  name="phone"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }}   sx={{
            "& .MuiInput-root": {
              "&:before": {
                borderBottom: "1px solid black", // Default underline color
              },
              "&:hover:before": {
                borderBottom: "1px solid red", // Hover underline color
              },
              "&:after": {
                borderBottom: "1px solid green", // Focus underline color
              },
            },
          }} onChange={(event) => handleChange(event)} fullWidth />



           <TextField id="standard-basic" label=" Password" variant="standard"  name="password"  InputLabelProps={{
          style: {
            color: "white", // Label color
          },
        }}   sx={{
            "& .MuiInput-root": {
              "&:before": {
                borderBottom: "1px solid black", // Default underline color
              },
              "&:hover:before": {
                borderBottom: "1px solid red", // Hover underline color
              },
              "&:after": {
                borderBottom: "1px solid green", // Focus underline color
              },
            },
          }} onChange={(event) => handleChange(event)} fullWidth />

<Button variant="contained" type="submit" style={{backgroundColor:"black",border:"black", textDecoration:"none",textTransform:"none",fontWeight:"600",textDecoration:"none",color:"white"}}>Sign up</Button>
           
           
       </Paper>
       </Box>
     </div >
    );
}
export default Register;