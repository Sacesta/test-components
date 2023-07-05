import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Typography, Box, Grid, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "16px",
    borderRadius: "12px",
    position: "relative",
    padding: "24px",
    border: "solid 1px #808080",
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
});

export default function UserInfo() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={`${classes.root}  `}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"}>
            <Typography
              className={`Heading3 BoldFont FontColor6 TextCapitalize `}
              gutterBottom
              variant="body2"
              component="p"
              style={{ color: "#005487" }}
            >
              Organization Info
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="Heading5 FontColor2"
              style={{
                marginLeft: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              • Private
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
                Name
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                SDF Company
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
                Address
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                XYZ Tower, ABC street, ABC City, ABC State.
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
                Website
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                www.SDFCompany@123
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
                E-mail
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                SDF1232mail.com
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
                Primary Contact Info
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
        </Box>
      </Card>
    </Grid>
  );
}
