import React from 'react';
import Boy from '../../assets/boy.jpeg';
import Girl from '../../assets/girl.jpg';
import MenuButton from '../../assets/combined-shape@2x.png';
import Logo from '../../assets/Geneologo.png';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Box } from '@material-ui/core'
import { StudentCard } from './StudentCard';
import { StudentsData } from "../../tempData/StudentsData";


const useStyles = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            width: "1686px",
            height: "auto",
            padding: "17px 30px 237px 40px",
            backgroundColor: "#f9f9f9",
        },
        menuButton: {
            width: "24px",
            height: "23px",
            margin: "9px 23px 11px 0",
            objectFit: "contain",
            backgroundColor: "#f9f9f9"
        },
        logo: {
            width: "120px",
            height: '43px',
            marginLeft: '38px',
            objectFit: "contain",
        },
        welcomeContent: {
            width: "427px",
            height: "100px",
            margin: "0px 449px 60px 450px",
            fontFamily: "Raleway",
            fontSize: "24px",
            fontWeight: 500,
            fontStretch: "nornal",
            fontStyle: "normal",
            lineHeight: 1.08,
            letterSpacing: "normal",
            textAlign: "center",
            color: "#2c2c2c"
        },
        offlineBox: {
            width: "854px",
            height: "667px",
            marginRight: "30px",
            padding: '50px 30px',
            borderRadius: "30px",
            backgroundColor: "#6d7278"
        },
        onlineBox: {
            width: "442px",
            height: "667px",
            marginLeft: "30px",
            padding: "50px 30px",
            borderRadius: "30px",
            backgroundColor: "#2d84ed"
        },
        offlineStudents: {
            width: "139px",
            height: "18px",
            
            fontFamily: "Raleway",
            fontSize: "18px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1,
            letterSpacing: "normal",
            color: "#ffffff"
        },
        onlineStudents: {
            width: "139px",
            height: "18px",
            fontFamily: "Raleway",
            fontSize: "18px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1,
            letterSpacing: "normal",
            color: "#ffffff"
        }
    })
)

export function Chatbot( ){
    const classes = useStyles(0);

    return (
        <>
       
        <div className={classes.root}>
            <img src={MenuButton} className={classes.menuButton} /> 
        <img src={Logo} className={ classes.logo} />
        <Typography variant="caption" className={classes.welcomeContent} >
        <p>Welcome Suresh M. </p>
        <p>Here are the students assign to you</p>
        </Typography>
        
       <div style={{ display: "flex" }}>
        <Card className={classes.offlineBox}>
           <div style={{textAlign: 'center', marginBottom: 33}}  >
            <Typography variant="caption" className={classes.offlineStudents} >
                    Offline Students
                </Typography>
                </div>
          
            
              <Grid container >
               <StudentCard mode="offline" />
              </Grid>
               
           
            
        </Card>
        <Card className={classes.onlineBox} >
            <div style={{textAlign: 'center', marginBottom: 33}}>
            <Typography variant="caption" className={ classes.onlineStudents } >
                   Online Students
                </Typography>
            
                </div>
            <StudentCard mode="online" />
            
        </Card>
        </div>
        </div>
        </>
    )
}
