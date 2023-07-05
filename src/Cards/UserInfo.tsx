import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  Grid,
  Card,
  CardMedia,
  Avatar,
  CardContent,
  CardHeader,
} from "@material-ui/core";

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

export default function UserInfor() {
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
              User Information
            </Typography>
            <Typography
              gutterBottom
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
                E-mail ID
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Mr.User123@mail.com
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
                Phone Number
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                000000000000
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
                Pronouns
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                He/Him
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
                DOB(Date of Birth)
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                22 jan 1993
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
                Mr.User123@mail.com
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
                Language
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                English
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
              gutterBottom
              variant="body2"
              component="p"
            >
              Demographics
            </Typography>
          </Box>

          <Box
            display={"flex"}
            // justifyContent={"space-around"}
            className={classes.bottomBorder}
          >
            <Box display={"flex"}>
              <Box>icon</Box>
              <Box pl="17px" pb="20px">
                <Typography
                  className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Race
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  className="Heading5 FontColor2"
                  style={{ marginTop: "9PX" }}
                >
                  None
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} pl={"7.688rem"}>
              <Box>icon</Box>
              <Box pl="17px" pb="20px">
                <Typography
                  className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Ethnicity
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  className="Heading5 FontColor2"
                  style={{ marginTop: "9PX" }}
                >
                  None
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} pl={"7.688rem"}>
              <Box>icon</Box>
              <Box pl="17px" pb="20px">
                <Typography
                  className={`Heading3 BoldFont FontColor6 ${classes.textlabel} `}
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Gender
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  className="Heading5 FontColor2"
                  style={{ marginTop: "9PX" }}
                >
                  Male
                </Typography>
              </Box>
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
                Display Times in
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                Eastern
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
                Connect Social Media
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ marginTop: "9PX" }}
              >
                www.facebook.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
