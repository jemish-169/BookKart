import { Avatar, Button, Popover, TextField } from "@mui/material";
import { useState, useEffect } from "react";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
// import { fontSize } from "@mui/system";

export const Apple = () => {
  // const [name, setName] = useState("jemish");
  // const [email, setEmail] = useState("abc@example.com");
  const [open, setOpen] = useState(false);
  const [anchorEL, setEnchorEL] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    // console.log("new value of name : ", name);
    // return () => {
    //   console.log("old value of name : ", name);
    // };
  }, []);

  const initialValues = {
    name: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Please make sure you have entered full name.")
      .required("Please enter a name."),
    email: Yup.string()
      .email("Please enter the valid email address.")
      .required("Please emter Email address."),
  });
  const onFormSubmit = (values) => {
    console.log("On form submitted...", values);
    alert("Form submitted");
    // navigate("/");
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

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({
          value,
          isSubmitting,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                marginBottom: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                variant="outlined"
                label="Name"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <span
                  style={{
                    padding: 5,
                    color: "red",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>
            <div
              style={{
                marginBottom: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                variant="outlined"
                type="email"
                label="Email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <span
                  style={{
                    padding: 5,
                    color: "red",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {errors.email}
                </span>
              )}
            </div>
            <Button
              disabled={isSubmitting}
              variant="contained"
              className=""
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
      <Popover
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        anchorEl={anchorEL}
        onClose={handleClose}
      >
        <div style={{ padding: 5 }}>
          <h5>Jemish Khunt</h5>
          {/* <LogoutOutlinedIcon onClick={onHomePageButtonClick} /> */}
        </div>
      </Popover>
    </div>
  );
};
