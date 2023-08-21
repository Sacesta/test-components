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
import FollowerModal from "./Modal/FollowerModal";
import SearchModal from "./Modal/SearchModal";

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
    marginTop: "1.7rem",
  },
  btn: {
    padding: "1px 10px",
    border: "solid 1px #005487",
    fontFamily: "Verdana",
    fontsize: "5px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "norma",
    letterSpacing: "normal",
    textSlign: "center",
    color: "#005487",
    borderRadius: "0px",
  },
  btn1: {
    background: "#005487",
    marginRight: "10px",
    color: "white",
    "&:hover": {
      color: "#005487",
    },
  },
  text: {
    fontDamily: "Verdana",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.83",
    letterSpacing: "-0.41px",
    color: "#808080",
  },
  mutualImage: {
    height: "16px",
    width: "16px",
    borderRadius: "50%",
  },
  mutualImage1: {
    position: "absolute",
  },
  mutualImage2: {
    position: "absolute",
    top: "12%",
    left: "29%",
  },
  mt36: {
    marginTop: "34px",
  },
});

export default function RequesManagement() {
  const classes = useStyles();
  const link =
    "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1090";

  let mutual = 2;
  return (
    <Grid item xs={12}>
      <Card className={`${classes.root}`}>
        <Box padding={"24px"}>
          <Typography
            className={`Heading3 BoldFont   TextCapitalize ${classes.textColor}`}
            variant="body2"
            component="p"
          >
            Request Management
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
                mb={"30px"}
              >
                <Typography
                  className={`Heading3 BoldFont   TextCapitalize ${classes.textColor} `}
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  Friend Request
                </Typography>
                <span>
                  <SearchModal />
                </span>
              </Box>
              <Box>
                {/*  */}
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box width={"100%"} display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Box
                      ml="16px"
                      display={"flex"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Box>
                        <Typography className={classes.cardText}>
                          UserName
                        </Typography>
                        <Box>
                          <Box display={"flex"} position="relative">
                            <Box
                              display={"flex"}
                              alignItems={mutual === 1 && "center"}
                              justifyContent={"center"}
                            >
                              {mutual === 1 && (
                                <img
                                  className={classes.mutualImage}
                                  src={link}
                                  alt="..."
                                />
                              )}
                              {mutual >= 2 && (
                                <Box
                                  paddingRight={"10px"}
                                  width={"2rem"}
                                  position={"relative"}
                                  display={"flex"}
                                  alignItems={"center"}
                                >
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage1}`}
                                    src={link}
                                    alt="..."
                                  />
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage2}`}
                                    src={link}
                                    alt="..."
                                  />
                                </Box>
                              )}
                            </Box>
                            <Box ml="12px">
                              <Typography className={classes.text}>
                                Mutal Friends
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box pt="7px">
                          <Button className={`${classes.btn} ${classes.btn1}`}>
                            Accept
                          </Button>
                          <Button className={`${classes.btn}`}>Delete</Button>
                        </Box>
                      </Box>
                      <Typography className={classes.text}>
                        Yesterday
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/*  */}
                <Box
                  className={classes.mt36}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box width={"100%"} display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Box
                      ml="16px"
                      display={"flex"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Box>
                        <Typography className={classes.cardText}>
                          UserName
                        </Typography>
                        <Box>
                          <Box display={"flex"} position="relative">
                            <Box
                              display={"flex"}
                              alignItems={mutual === 1 && "center"}
                              justifyContent={"center"}
                            >
                              {mutual === 1 && (
                                <img
                                  className={classes.mutualImage}
                                  src={link}
                                  alt="..."
                                />
                              )}
                              {mutual >= 2 && (
                                <Box
                                  paddingRight={"10px"}
                                  width={"2rem"}
                                  position={"relative"}
                                  display={"flex"}
                                  alignItems={"center"}
                                >
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage1}`}
                                    src={link}
                                    alt="..."
                                  />
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage2}`}
                                    src={link}
                                    alt="..."
                                  />
                                </Box>
                              )}
                            </Box>
                            <Box ml="12px">
                              <Typography className={classes.text}>
                                Mutal Friends
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box pt="7px">
                          <Button className={`${classes.btn} ${classes.btn1}`}>
                            Accept
                          </Button>
                          <Button className={`${classes.btn}`}>Delete</Button>
                        </Box>
                      </Box>
                      <Typography className={classes.text}>
                        Yesterday
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className={classes.mt36}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box width={"100%"} display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Box
                      ml="16px"
                      display={"flex"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Box>
                        <Typography className={classes.cardText}>
                          UserName
                        </Typography>
                        <Box>
                          <Box display={"flex"} position="relative">
                            <Box
                              display={"flex"}
                              alignItems={mutual === 1 && "center"}
                              justifyContent={"center"}
                            >
                              {mutual === 1 && (
                                <img
                                  className={classes.mutualImage}
                                  src={link}
                                  alt="..."
                                />
                              )}
                              {mutual >= 2 && (
                                <Box
                                  paddingRight={"10px"}
                                  width={"2rem"}
                                  position={"relative"}
                                  display={"flex"}
                                  alignItems={"center"}
                                >
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage1}`}
                                    src={link}
                                    alt="..."
                                  />
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage2}`}
                                    src={link}
                                    alt="..."
                                  />
                                </Box>
                              )}
                            </Box>
                            <Box ml="12px">
                              <Typography className={classes.text}>
                                Mutal Friends
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box pt="7px">
                          <Button className={`${classes.btn} ${classes.btn1}`}>
                            Accept
                          </Button>
                          <Button className={`${classes.btn}`}>Delete</Button>
                        </Box>
                      </Box>
                      <Typography className={classes.text}>
                        Yesterday
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className={classes.mt36}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box width={"100%"} display={"flex"}>
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
                      alt="..."
                      className={classes.cardUserImage}
                    />
                    <Box
                      ml="16px"
                      display={"flex"}
                      justifyContent={"space-between"}
                      width={"100%"}
                    >
                      <Box>
                        <Typography className={classes.cardText}>
                          UserName
                        </Typography>
                        <Box>
                          <Box display={"flex"} position="relative">
                            <Box
                              display={"flex"}
                              alignItems={mutual === 1 && "center"}
                              justifyContent={"center"}
                            >
                              {mutual === 1 && (
                                <img
                                  className={classes.mutualImage}
                                  src={link}
                                  alt="..."
                                />
                              )}
                              {mutual >= 2 && (
                                <Box
                                  paddingRight={"10px"}
                                  width={"2rem"}
                                  position={"relative"}
                                  display={"flex"}
                                  alignItems={"center"}
                                >
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage1}`}
                                    src={link}
                                    alt="..."
                                  />
                                  <img
                                    className={`${classes.mutualImage} ${classes.mutualImage2}`}
                                    src={link}
                                    alt="..."
                                  />
                                </Box>
                              )}
                            </Box>
                            <Box ml="12px">
                              <Typography className={classes.text}>
                                Mutal Friends
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box pt="7px">
                          <Button className={`${classes.btn} ${classes.btn1}`}>
                            Accept
                          </Button>
                          <Button className={`${classes.btn}`}>Delete</Button>
                        </Box>
                      </Box>
                      <Typography className={classes.text}>
                        Yesterday
                      </Typography>
                    </Box>
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
