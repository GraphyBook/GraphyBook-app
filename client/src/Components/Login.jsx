import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login(){

    const[Email , setEmail] = useState("");
    const [Password , setPassword] = useState(" ");
    const Navigate = useNavigate()



    return(
        <div style={{backgroundColor : "#eeeeee", height: "100vh" , width: "100vw"}}>
            <div style={{       
            display:"flex",  
            justifyContent: "center",
            padding: 70,

        }}>
            
            <div style={{color : "black"}}>
            <Typography variant="h4">  Signin  below  </Typography></div> 
        
        </div>
    
    <div style={{
            display: "flex",
            justifyContent: "center"
        }}>

            <Card variant={"outlined"} style={{
                width:500 , padding:20 , height : 300 ,
                borderBlockWidth: "5px" , 
                borderBlockColor: "lightskyblue",
                
            }}>
                <TextField autoComplete="off"
                onChange={(e) =>{
                    setEmail(e.target.value);
                }}
                label = "Email"
                variant="outlined"
                fullWidth = "100" // it should named "full" width
                > 
                </TextField>
              <br></br>
              <br></br>
              <br></br>

                <TextField  autoComplete="off" style={{outline: "none" , backgroundColor: "white"}}
                onChange={(e) =>{
                    setPassword(e.target.value);
                }}
                label = "password"
                variant="outlined"
                type = "password"
                fullWidth = "100"
                >
                </TextField>
                <br></br>
                <br></br>

               <Button style={{display: "flex" , justifyContent: "center"}}
               size="large"
               variant="contained"
              
               
               onClick={(e) =>{
                navigate("/home")

               }}
               >Login</Button>


            </Card>




    </div>

        </div>      


    )
}



export default Login;