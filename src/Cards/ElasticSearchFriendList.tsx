import {
  Box,
  Card,
  Theme,
  createStyles,
  makeStyles,
  InputBase,
  ListItemText,
  ListItem,
  List,
  Avatar,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import p1 from "../assets/p1.jpg";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      top: 0,
      width: "100%",
      maxWidth: "762px",
      backgroundColor: "transparent",
      //   border: "2px solid #000",
      padding: theme.spacing(2, 4, 3),
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    input: {
      //   flex: 1,
      backgroundColor: "#F4F4F4",
      width: "100%",
      height: "40px",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingTop: "9px",
      paddingBottom: "9px",
      borderRadius: "10px",
      color: "#808080",
      fontSize: "17px",
      fontFamily: "Verdana",
      lineHeight: "22px",
      letterSpacing: "-0.41px",
    },
    listItem: {
      padding: 0,
      marginBottom: "24px",
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
    card: {
      padding: "24px",
      borderRadius: "12px",
    },
    title: {
      fontFamily: "Verdana",
      fontSize: "17px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "22px",
      letterSpacing: "-0.41px",
      color: "#005487",
      marginRight: "3px",
      marginBottom: "16px",
    },
  })
);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const ElasticSearchFriendList = () => {
  const classes = useStyles();
  return (
    <Box style={getModalStyle()} className={classes.paper}>
      <InputBase
        className={classes.input}
        inputProps={{ "aria-label": "Search Friends" }}
      />
      <Card className={classes.card}>
        <Typography className={classes.title}>Recent</Typography>
        <List style={{ padding: "0" }}>
          {["Mrs.User567", "Mr.User789"].map((e, i) => {
            return (
              <ListItem
                key={i}
                style={{
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
                        marginLeft: "12px",
                        fontFamily: "Verdana",
                      },
                    }}
                  />
                  <CancelPresentationOutlinedIcon
                    style={{
                      cursor: "pointer",
                      alignSelf: "flex-start",
                      color: "#A9A8A9",
                    }}
                  />
                </ListItem>
              </ListItem>
            );
          })}
        </List>
        <Box
          style={{
            marginTop: "40px",
            marginBottom: "56px",
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
      </Card>
    </Box>
  );
};

export default ElasticSearchFriendList;
