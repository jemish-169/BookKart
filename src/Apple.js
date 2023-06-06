import { Avatar, Button, Popover, TextField } from "@mui/material";
import { useState } from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";

export const Apple = () => {
  const [name, setName] = useState("jemish");
  const [email, setEmail] = useState("abc@example.com");
  const [open, setOpen] = useState(false);
  const [anchorEL, setEnchorEL] = useState(null);
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    console.log(name);
    console.log(email);

    navigate("/");
  };
  const handleClick = (event) => {
    setEnchorEL(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setEnchorEL(null);
    setOpen(false);
  };

  return (
    <div style={{ padding: 5 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: 5,
          }}
          onClick={handleClick}
        >
          <Avatar sx={{ bgcolor: "blue" }}>JK</Avatar>
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
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          variant="contained"
          className=""
          onClick={onHomePageButtonClick}
        >
          Submit
        </Button>
      </div>
      <Popover
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        anchorEl={anchorEL}
        onClose={handleClose}
      >
        <div style={{ padding: 5 }}>
          <h5>Jemish Khunt</h5>
          <LogoutOutlinedIcon onClick={onHomePageButtonClick} />
        </div>
      </Popover>
    </div>
  );
};
