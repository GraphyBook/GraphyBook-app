import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../vite.config.js";

import { Axios } from 'axios';
import { useSetRecoilState } from "recoil";


function Signup(){


    const [Email , setEmail] = useState(" ");
    const [Password , setPassword] = useState(" ");
    const Navigate = useNavigate();
    const setUser = useSetRecoilState





    return(
        

        <div style={{
            backgroundColor: "#eeeeee",
            height: "100vh",
            width: "100vw",
            display: "inline-block",
            justifyContent: "center"
        }}>

            
    <div style={{
        display: "flex" ,               
        justifyContent: "center",
        padding: 70


         }}>
        <div style= {{ color: "black"}} >
        <Typography variant="h4"> New User? Signup below</Typography>
        </div>

    </div>

    <div style={{
        display: "flex",
        justifyContent: "center"
    }}>
        <Card variant="outlined" style={{
           width: 500,
           padding: 20,
           height: 300,
           borderBlockWidth: "5px" , 
           borderBlockColor: "lightskyblue",
           
           
                
        }}>
            <TextField
            onChange={(e) =>{
                setEmail(e.target.value);
            }}
            fullWidth = "100"
            label= "Email"
            variant="outlined"
            >
           </TextField>
           <br></br>
           <br></br>
           <br></br>

           <TextField 
           onChange={(e) =>{
            setPassword(e.target.value);
           }}
           label = "password"
           type = "password"
           variant="outlined"
           fullWidth= "100"
          
           >
           </TextField>
           <br></br>
           <br></br>
          

           <Button
           variant="contained"
           size={"large"}

           onClick={ async()=>{
            const response  = await Axios.post(`${BASE_URL}/user/signup` ,{
                username: Email,
                Password: Password
            })
// Returning a response from the server is essential for several reasons, even when storing new data in the backend:
// Status Confirmation: The server response provides the client with confirmation that the data was successfully stored or processed. 
//Returning a response from the server is essential for several reasons, even when storing new data in the backend:
// Status Confirmation: The server response provides the client with confirmation that the data was successfully stored or processed. 
            let data = response.data;   //{ the response message which u will write in the backend }
            localStorage.setItem("token" , data.token) ; //saving the token 
            setUser({userEmail: Email , isLoading : false})
            Navigate("/home")
           }}
           >Submit</Button>

        </Card>


    </div>
 


            

        </div>
        
    )
}



export default Signup;