import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "6vh",
  },

  logo: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: '"Roboto", sans-serif',
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
      backgroundColor: "#394bad",
      outline: "none",
      border: "2px solid #394bad",
      boxShadow: "none",
      height: "13px",
      width: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  level: {
    [sizes.down("xs")]: {
      marginLeft: 10,
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
