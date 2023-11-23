import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const Landing = ()=>{

    const navigate = useNavigate();
 
    return(
       

        <div>
            <div style={{
                backgroundColor: "white",
                 width: "100vw" , 
                 height: "100vh",
                 }}>

                 <Grid container style={{padding: "10vw"}}>

                    <Grid item xs={12} md={6} lg={6}>


                        <div style={{
                            display: "inline-block",
                            justifyContent: "center",
                            color : "black",
                            marginLeft: "350px",
                            marginTop: "-70px"
                            
                           

                         }}>
                            <div style={{display: "inline-block" , marginTop: "10px" ,marginRight: "60px", whiteSpace: "nowrap" // this puts the text in one line
                            }}>
                            <Typography variant="h2"> Welcome to GraphyBook</Typography>
                            </div>
                            <br/>
                            <br/>

                            
                            <div style={{display : "flex" , justifyContent: "center" ,width: "150px" ,
                             height: "140px",
                             marginLeft: "200px"
                             }}>
                               
                            <img src="./graphybook-app logo.jpg"/>
                            </div>
                            <br/>
                            <br/>

                            <div style={{display: "inline-block" , 
                            justifyContent: "center" , 
                            whiteSpace: "nowrap"
                        
                            }}>

                            <Button
                            size = "large"
                            variant = "contained"
                           onClick={(e)=>{
                            navigate('/signup')
                           }}

                           style={{marginRight: "120px", marginLeft: "105px"}} // this will effect both the button and adjust accordingly
                            >Signup</Button>


                            <Button
                            size="large"
                            variant="contained"
                            onClick={(e)=>{
                                navigate('/login')
                            }}

                           
                            > login</Button>
                            </div>

                        </div>
                        

                      



                        
                    </Grid>   

                 </Grid> 
                


                   


            </div>
   
      


        </div>

        
    )

}



