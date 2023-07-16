import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Typography, Box, Grid, Card, CardContent } from "@material-ui/core";
import FollowerModal from "./Modal/FollowerModal";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "16px",
    borderRadius: "12px",
    position: "relative",
  },
  textColor: {
    color: "#005487",
  },
  cradBody: {
    padding: "15px",
  },
  cardUserImage: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  cardText: {
    fontFamily: "Verdana",
    fontSize: " 17px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.29",
    letterSpacing: "-0.41px",
    color: "#000",
    marginLeft: "12px",
  },
  showallbtn: {
    color: "#005487",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: " 17px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.29",
    letterSpacing: "-0.41px",
    marginTop: "23px",
  },
});

export default function FollowerList() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={`${classes.root}`}>
        <Box padding={"24px"}>
          <Typography
            className={`Heading3 BoldFont   TextCapitalize ${classes.textColor}`}
            variant="body2"
            component="p"
          >
            Followers List
          </Typography>
        </Box>
        <hr />
        <Box className={classes.cradBody}>
          <Box padding={"8px"} bgcolor={"#f4f4f4"}>
            <Box padding={"15px"} bgcolor={"white"}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  className={`Heading3 BoldFont   TextCapitalize ${classes.textColor} `}
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Followers
                </Typography>
                <span>&#128269;</span>
              </Box>
              <Box>
                {/*  */}
                <Box
                  mt={"20px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Typography className={classes.cardText}>
                      UserName
                    </Typography>
                  </Box>
                  <Box style={{ cursor: "pointer" }}>
                    <FollowerModal />
                  </Box>
                </Box>
                <Box
                  mt={"20px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Typography className={classes.cardText}>
                      UserName
                    </Typography>
                  </Box>
                  <Box style={{ cursor: "pointer" }}>
                    <FollowerModal />
                  </Box>
                </Box>
                <Box
                  mt={"20px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Typography className={classes.cardText}>
                      UserName
                    </Typography>
                  </Box>
                  <Box style={{ cursor: "pointer" }}>
                    <FollowerModal />
                  </Box>
                </Box>
                <Box
                  mt={"20px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Typography className={classes.cardText}>
                      UserName
                    </Typography>
                  </Box>
                  <Box style={{ cursor: "pointer" }}>
                    <FollowerModal />
                  </Box>
                </Box>
              </Box>
              <Typography className={classes.showallbtn}>Show all</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
