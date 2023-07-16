import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";

import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "16px",
    borderRadius: "12px",
    border: "solid 1px #808080",
  },
  media: {
    height: 180,
    position: "relative",
  },
  cardContent: {
    position: "relative",
  },
  boxLogo: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
  },
  contecttext: {
    "& a": {
      color: "#005487",
      textDecoration: "underline",
    },
  },
  logoCircle: {
    background: "#ffffff",
    borderRadius: "50%",
    padding: "5px",
  },
  editIcon: {
    background: "white",
    width: "32px",
    height: "32px",
    padding: "4.3px 6px 4px",
    borderRadius: "50%",
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: "10px 37px",
    border: "solid 1px #005487",
    fontFamily: "Verdana",
    fontsize: "14px",
    fontweight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "norma",
    letterSpacing: "normal",
    textSlign: "center",
    color: "#005487",
  },
  btn1: {
    background: "#005487",
    marginRight: "20px",
    color: "white",
    "&:hover": {
      color: "#005487",
    },
  },
});

export default function UserProfile() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={`${classes.root}`}>
        <CardMedia
          className={classes.media}
          image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          title="Contemplative Reptile"
        >
          <Box className={classes.editIcon}>Test</Box>

          <Box position={"absolute"} top={"40%"} left={"2%"}>
            <Box className={classes.logoCircle}>
              <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt=""
                className={classes.boxLogo}
              />
            </Box>
          </Box>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Box className={classes.editIcon}>Test</Box>

          <Box pt="65px" pl="24px">
            <Typography
              className={`Heading3 BoldFont FontColor6 TextCapitalize `}
              gutterBottom
              variant="body2"
              component="p"
            >
              Mr.User123
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              className="Heading5 FontColor2"
            >
              Worker at SDF Company
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              className="Heading5 FontColor2"
            >
              ABC State • BC City
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              className={`Heading4 BoldFont FontColor6 TextCapitalize ${classes.contecttext} `}
            >
              <a href="">Contect Info</a>
            </Typography>
          </Box>
          <Box pt="17px" pl="24px">
            <Button className={`${classes.btn} ${classes.btn1}`}>
              Add Friend
            </Button>
            <Button className={`${classes.btn}`}>Message</Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
