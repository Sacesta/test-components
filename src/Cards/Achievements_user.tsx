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
    border: "solid 1px #808080",
  },
  bottomBorder: {
    margin: "21.9px 0 20.1px",
    borderBottom: "solid 1px #808080;",
  },
  textlabel: {
    fontFamily: "Verdana",
    FontSize: "17px",
    fontWeight: "bolder",
    fontSretch: "normal",
    fontStyle: "normal",
    lineHight: "normal",
    letterSpacing: "normal",
  },
  btn: {
    background: "transparent",
    fontFamily: "Verdana",
    fontSize: "17 px",
    fontWight: "normal",
    fontSretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#005487",
    margin: "auto",
  },
  tabImage: {
    border: "1px solid #005487",
    height: "fit-content",
    borderRadius: "5px",
    "& img": {
      borderRadius: "4px",
      padding: "18px",
    },
  },
});

export default function AchievementsUser() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={`${classes.root} `}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
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
        </Box>

        <Box pt="4px">
          {/* Tabs */}
          <Box display={"flex"} className={classes.bottomBorder}>
            <Box className={classes.tabImage}>
              <img
                src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
                alt="..."
                width="44px"
                height="44px"
              />
            </Box>
            <Box pl="16px" pb="20px">
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
                className="Heading5 BoldFont FontColor2"
              >
                Certification Platform
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading  FontColor2"
              >
                Issued Date - Oct 2020 • No Expiration Date
              </Typography>
            </Box>
          </Box>

          {/* Tabs */}

          <Box display="flex">
            <Button className={classes.btn}>Show all</Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
