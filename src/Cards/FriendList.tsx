import React, { useState } from "react";
import p1 from "../assets/p1.jpg";
import {
  Divider,
  Card,
  Avatar,
  Typography,
  CardContent,
  Box,
  ListItem,
  ListItemText,
  List,
  Link,
  Modal,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
// import { styled } from "@material-ui/styles";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ElasticSearchFriendList from "./ElasticSearchFriendList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardWraper: {
      border: "none",
      boxShadow: "none",
      borderRadius: "12px",
    },
    typographyTitle: {
      color: "#005487",
      fontWeight: "bold",
      fontSize: "20px",
      letterSpacing: "normal",
      fontFamily: "Verdana",
      lineHeight: "22px",
    },
    cardContentWrapper: {
      backgroundColor: "#ffffff",
      padding: "24px",
      borderRadius: "12px",
      "& > div:last-child": {
        marginBottom: 0,
      },
    },
    listItem: {
      padding: 0,
      "& > div": {
        padding: 0,
      },
      "& > .MuiButtonBase-root": {
        paddingLeft: 0,
      },
      "& .MuiListItemText-root": {
        marginTop: 0,
        alignSelf: "baseline",
      },
      "& :not(.MuiAvatar-root):hover": {
        background: "transparent",
      },
      "& .MuiTouchRipple-root": {
        display: "none",
      },
    },
  })
);

const FriendList = () => {
  const [showSearch, setShowSearch] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setShowSearch(false);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",

        // width: "882px",
      }}
    >
      <Modal
        open={showSearch}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disablePortal
      >
        {<ElasticSearchFriendList />}
      </Modal>

      {/* Mutual Connection Card */}
      <Card className={classes.cardWraper}>
        <Box
          style={{
            marginLeft: "24px",
            marginTop: "25px",
            marginRight: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography className={classes.typographyTitle}>
            Friends List
          </Typography>

          <PersonOutlineIcon style={{ width: "22px", height: "22px" }} />
        </Box>
        <Divider
          style={{
            marginBottom: "25px",
            marginTop: "23px",
            borderWidth: "0.3px",
            borderColor: "#DEDEDF",
          }}
        />
        {/* Mutual Friend Card */}
        <Card
          className={classes.cardWraper}
          style={{
            margin: "24px",
            borderRadius: 0,
            padding: "10px",
            paddingBottom: "8px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <CardContent className={classes.cardContentWrapper}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography className={classes.typographyTitle} style={{}}>
                Friends
              </Typography>
              <SearchIcon
                style={{ width: "18.7px", height: "18.7px", cursor: "pointer" }}
                onClick={() => {
                  setShowSearch(true);
                }}
              />
            </Box>
            <List style={{ padding: "0" }}>
              {[
                "Mrs.User567",
                "Mr.User789",
                "Mr. JKL",
                "Mr.ABC",
                "Mrs.GHI",
              ].map((e, i) => {
                return (
                  <ListItem
                    key={i}
                    style={{
                      marginTop: "20px",
                      marginLeft: "3.5px",
                      alignItems: "flex-start",
                    }}
                    className={classes.listItem}
                  >
                    <ListItem button>
                      <Avatar
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                        alt={`${e}`}
                        src={`${p1}`}
                      />

                      <ListItemText
                        primary={`${e}`}
                        primaryTypographyProps={{
                          style: {
                            fontSize: "17px",
                            fontWeight: "bold",
                            letterSpacing: "-0.41px",
                            lineHeight: "22px",
                            color: "#000",
                            marginTop: "2px",
                            marginBottom: "26px",
                            marginLeft: "12px",
                            fontFamily: "Verdana",
                          },
                        }}
                      />
                      <MoreHorizOutlinedIcon
                        style={{ cursor: "pointer", alignSelf: "flex-start" }}
                      />
                    </ListItem>
                  </ListItem>
                );
              })}
            </List>
            <Box
              style={{
                marginTop: "40px",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Link
                style={{
                  color: "#005487",
                  fontSize: "17px",
                  lineHeight: "22px",
                  cursor: "pointer",
                  fontFamily: "verdana",
                  textDecoration: "none",
                }}
              >
                Show All
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Card>
    </Box>
  );
};

export default FriendList;
