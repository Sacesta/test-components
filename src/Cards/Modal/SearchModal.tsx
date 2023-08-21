import * as React from "react";
import { Box, Typography, Modal, TextField } from "@material-ui/core";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  boxShadow: 24,
  borderRadius: "10px",
  width: "700px",
};

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
        style={{
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        &#128269;
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box mb={"16px"}>
            <TextField
              fullWidth
              style={{
                background: "#f4f4f4",
                borderRadius: "10px",
                padding: "5px",
                paddingLeft: "10px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Search"
            />
          </Box>

          <Box
            style={{
              background: "#f4f4f4",
              borderRadius: "10px",
              padding: "24px",
            }}
          >
            <Typography>Recent</Typography>

            <Box pt={"16px"}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    width={"50px"}
                    height={"50px"}
                    style={{
                      borderRadius: "50%",
                    }}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                  <Typography
                    className={`Heading4 BoldFont FontColor6`}
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={{ marginLeft: "12px" }}
                  >
                    Mrs.PQR
                  </Typography>
                </Box>
                <Box>X</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
