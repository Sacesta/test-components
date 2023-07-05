import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "16px",
    borderRadius: "12px",
    position: "relative",
    padding: "24px",
  },

  bottomBorder: {
    margin: "21.9px 0 20.1px",
    borderBottom: "solid 0.3px #808080;",
  },
  textlabel: {
    fontFamily: "Verdana",
    FontSize: "17px",
    fontWeight: "bolder",
    fontSretch: "normal",
    fontStyle: "normal",
    lineeHight: "normal",
    letterSpacing: "normal",
    color: "#000",
  },
  textcolor: {
    color: "#005487",
  },
});

export default function ContectCard() {
  const classes = useStyles();

  return (
    <Grid item xs={8} style={{ margin: "auto" }}>
      <Card className={`${classes.root}`}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"}>
            <Typography
              className={`Heading3 BoldFont  TextCapitalize ${classes.textcolor}`}
              gutterBottom
              variant="body2"
              component="p"
            >
              Contact Information
            </Typography>
          </Box>

          <Box>icon</Box>
        </Box>

        <Box pt="33px">
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box>icon</Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                Phone Number
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                00-00-00000000
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box>icon</Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                E-mail ID
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Community1mail.com
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box>icon</Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                Website
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className={`Heading5   ${classes.textcolor}`}
                style={{ marginTop: "9PX" }}
              >
                Community1@123
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
