import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Paper,
  Box
} from "@material-ui/core";
import { StudentsData } from "../../tempData/StudentsData";
import Dots from '../../assets/three-dots-vertical.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    chatCardOffline: {
      width: "382px",
      height: "100px",
      margin: "33px, 0px, 4px 30px",
      padding: "20px 10px 15px",
      marginRight: "25px",
      borderRadius: "8px",
      boxShadow: "0 5px 15px 0 rgba(16, 27, 79, 0.15)",
      backgroundColor: "#878B92",
    },
    chatCardOnline: {
        width: "382px",
        height: "100px",
        margin: "4px 0 4px 4px",
        padding: "20px 10px 15px",
        borderRadius: "8px",
        boxShadow: "0 5px 15px 0 rgba(16, 27, 79, 0.15)",
        backgroundColor:"#7EB0EE",
    },
    chatTitle: {
      width: "161px",
      height: "41px",
      margin: "0 60px 0px 12px",
    //   fontFamily: "AvenirNext",
      fontSize: "14px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#ffffff",
    },
    dateTime: {
      width: "89px",
      height: "32px",
      margin: "0 0 17px 0px",
      fontFamily: "AvenirNext",
      fontSize: "12px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "right",
      color: "#ffffff",
    },
    displayName: {
      width: "134px",
      height: "16px",
      margin: "0px 87px 0 12px",
      fontFamily: "AvenirNext",
      fontSize: "12px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#ffffff",
    },
    studentImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      margin: "1px 12px 8px 0",
      boxShadow: "0 6px 8px 0 rgba(16, 27, 79, 0.2)",
    },
    moreOptionIcon: {
        display: 'none'
    },
    dotsStyle: {
        width: "20px",
        height: "25px",
        margin: "2px 11px 0 62px",
        backgroundColor: "#7EB0EE",
        color: "ffffff"
    }
  })
);

interface Mode {
    mode: string
}

export function StudentCard(props: Mode ) {
  const classes = useStyles(0);
  return (
    <>
    
      {StudentsData.filter((data: StudentsData)=> data.mode === props.mode).map((chatContent: StudentsData) => (          
        <Card className={ props.mode === "offline"? classes.chatCardOffline : classes.chatCardOnline} style={{ marginBottom: "4px" }}>
          <div style={{ display: "flex" }}>
            <Grid container>
              <Grid item >
                <img
                  src={chatContent.studentImage}
                  className={classes.studentImage}
                />
              </Grid>
              <div>
                <Grid item xs={12}  >
                  <Typography 
                    variant="subtitle1"
                    
                    className={classes.chatTitle}
                  >
                    {chatContent.title}
                    {chatContent.mode}
                  </Typography>
                </Grid>

                <Grid item >
                  <Typography variant="subtitle1" className={classes.displayName}>
                    {`${chatContent.studentName} | ${chatContent.className}`}
                  </Typography>
                </Grid>
              </div>
              <Grid item>
                <Typography className={classes.dateTime}>
                  {chatContent.time}<br></br>{chatContent.date}
                </Typography>
                <img src={Dots} className={ props.mode === "online"? classes.dotsStyle : classes.moreOptionIcon} />
              </Grid>
            
              
                
             
               
              
            </Grid>
          </div>
        </Card> 
      ))}

    </>
  );
}
