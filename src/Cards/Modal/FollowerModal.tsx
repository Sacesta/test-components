import * as React from "react";

import { Box, Button, Typography, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  text: {
    fontFamily: "Verdana",
    fontSize: "17px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.29",
    letterSpacing: "-0.41px",
    color: " #808080",
  },
});

export default function FollowerModal() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        &#8230;
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem className="menu" onClick={handleClose}>
          <Box
            padding={"10px"}
            display={"flex"}
            justifyContent={"space-between"}
            marginRight={"3rem"}
          >
            <Box marginRight={"17px"}>X</Box>
            <Typography className={classes.text}>Remove</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
