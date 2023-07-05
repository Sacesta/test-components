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
    position: "relative",
    padding: "24px",
    border: "solid 1px #808080",
  },

  createBtn: {
    backgroundColor: "#fff",
    padding: "19px 18px 18px",
    border: "solid 1px #005487",
  },

  bottomBorder: {
    margin: "21.9px 0 20.1px",
    borderBottom: "solid 0.3px #808080;",
  },
});
export default function Activity() {
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
              Activity
            </Typography>
          </Box>

          <Box>
            <Button className={classes.createBtn}>Create Post</Button>
          </Box>
        </Box>
        <Box pt={"10px"}>
          <Box>
            <Box>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ display: "flex" }}
              >
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  className="Heading4 BoldFont FontColor5"
                  style={{ display: "flex", marginRight: "5px" }}
                >
                  Mr.User123
                </Typography>
                posted • this 5 min ago
              </Typography>
              <Typography
                className={`Heading4   FontColor2`}
                variant="body2"
                component="p"
              >
                Post Title
              </Typography>
              <Typography
                className={`Heading4 FontColor2`}
                gutterBottom
                variant="body2"
                component="p"
                style={{ color: "#005487" }}
              >
                #post #title #post #title #post #title #post #title #post
                ...show more
              </Typography>
            </Box>

            <Box pt={"24px"}>
              <Box display="flex" pb={"20px"} className={classes.bottomBorder}>
                <Box>
                  <img
                    width="150px"
                    height="130px"
                    src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="
                    alt=""
                  />
                </Box>
                <Box pl={"16px"}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    className="Heading5 BoldFont FontColor2"
                    style={{ marginBottom: "10px" }}
                  >
                    Title of post
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    className="Heading6 FontColor2"
                  >
                    YOUTUBE.COM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ display: "flex" }}
              >
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  className="Heading4 BoldFont FontColor5"
                  style={{ display: "flex", marginRight: "5px" }}
                >
                  Mr.User123
                </Typography>
                posted • this 5 min ago
              </Typography>
              <Typography
                className={`Heading4   FontColor2`}
                variant="body2"
                component="p"
              >
                Post Title
              </Typography>
              <Typography
                className={`Heading4 FontColor2`}
                gutterBottom
                variant="body2"
                component="p"
                style={{ color: "#005487" }}
              >
                #post #title #post #title #post #title #post #title #post
                ...show more
              </Typography>
            </Box>

            <Box pt={"24px"}>
              <Box display="flex" pb={"20px"} className={classes.bottomBorder}>
                <Box>
                  <img
                    width="150px"
                    height="130px"
                    src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="
                    alt=""
                  />
                </Box>
                <Box pl={"16px"}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    className="Heading5 BoldFont FontColor2"
                    style={{ marginBottom: "10px" }}
                  >
                    Title of post
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    className="Heading6 FontColor2"
                  >
                    YOUTUBE.COM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography
                gutterBottom
                variant="body2"
                component="p"
                className="Heading5 FontColor2"
                style={{ display: "flex" }}
              >
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  className="Heading4 BoldFont FontColor5"
                  style={{ display: "flex", marginRight: "5px" }}
                >
                  Mr.User123
                </Typography>
                posted • this 5 min ago
              </Typography>
              <Typography
                className={`Heading4   FontColor2`}
                variant="body2"
                component="p"
              >
                Post Title
              </Typography>
              <Typography
                className={`Heading4 FontColor2`}
                gutterBottom
                variant="body2"
                component="p"
                style={{ color: "#005487" }}
              >
                #post #title #post #title #post #title #post #title #post
                ...show more
              </Typography>
            </Box>

            <Box pt={"24px"}>
              <Box display="flex" pb={"20px"} className={classes.bottomBorder}>
                <Box>
                  <img
                    width="150px"
                    height="130px"
                    src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="
                    alt=""
                  />
                </Box>
                <Box pl={"16px"}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    className="Heading5 BoldFont FontColor2"
                    style={{ marginBottom: "10px" }}
                  >
                    Title of post
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    className="Heading6 FontColor2"
                  >
                    YOUTUBE.COM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography
            className={`Heading4 FontColor2`}
            gutterBottom
            variant="body2"
            component="p"
            style={{ color: "#005487" }}
            align="center"
          >
            Show All
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}
