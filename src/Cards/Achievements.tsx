import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "16px",
    borderRadius: "12px",
    padding: "24px",
    position: "relative",
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
  btn: {
    background: "transparent",
    fontFamily: "Verdana",
    fontSize: "20px",
    fontWight: "normal",
    fontSretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#005487",
  },
});

export default function Achievements() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={`${classes.root} `}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"}>
            <Typography
              className={`Heading3 BoldFont FontColor6 TextCapitalize `}
              gutterBottom
              variant="body2"
              component="p"
              style={{ color: "#005487" }}
            >
              Achievements
            </Typography>
          </Box>

          <Box>icon</Box>
        </Box>

        <Box pt="33px">
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box>
              <img
                src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg"
                alt="..."
                width="80px"
                height="80px"
              />
            </Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                Certificate 1
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading4 BoldFont FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Certification Platform
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading  FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Issued Date - Oct 2020 • No Expiration Date
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box>
              <img
                src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg"
                alt="..."
                width="80px"
                height="80px"
              />
            </Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                Certificate 2
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading4 BoldFont FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Certification Platform
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading  FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Issued Date - Oct 2020 • No Expiration Date
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box>
              <img
                src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg"
                alt="..."
                width="80px"
                height="80px"
              />
            </Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                Certificate 3
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading4 BoldFont FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Certification Platform
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading  FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Issued Date - Oct 2020 • No Expiration Date
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box>
              <img
                src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg"
                alt="..."
                width="80px"
                height="80px"
              />
            </Box>
            <Box pl="17px" pb="20px">
              <Typography
                className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                gutterBottom
                variant="body2"
                component="p"
              >
                Certificate 4
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading4 BoldFont FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Certification Platform
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading  FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Issued Date - Oct 2020 • No Expiration Date
              </Typography>
            </Box>
          </Box>

          <Box>
            <span style={{ paddingRight: "16px" }}>Icon</span>
            <Button className={classes.btn}>Add Achievements</Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
