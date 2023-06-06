import { Avatar, Button, Popover, TextField } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
// import { Input } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const Apple = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  // const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    console.log("button clicked!!!");
    console.log(name);
    console.log(email);

    // navigate("/");
  };
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchor(null);
    setOpen(false);
  };

  return (
    <div style={{ padding: 10 }}>
      {/* <Grid container direction="column" alignItems="center">
        <Grid item>
          <h2 style={{ marginTop: "20px" }}>Apple Page 🍎</h2>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={onHomePageButtonClick}
            style={{ marginTop: "10px" }}
          >
            Button ➡️ 🏠
          </Button>
        </Grid>
      </Grid> */}
      {/* <p>Apple Page🍎🍏</p> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          columnGap: 5,
        }}
      >
        <div onClick={handleClick}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>JK</Avatar>
          <span>Jemish Khunt</span>
        </div>
      </div>
      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          rowGap: 8,
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          placeholder="Name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          placeholder="Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={onHomePageButtonClick}
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </div>
      <Popover
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        Thecontent of the Popover.
      </Popover>
    </div>
  );
};
