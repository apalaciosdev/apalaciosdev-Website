import { Colors } from "../colors";

const about = {
  div: {
    backgroundColor: Colors.darkBg,
    color: 'white',
    paddingTop: 30
  },

  ul: {
    display: "inline-block",
    listStyle: "none",
    "&:hover": {
      cursor: "auto",
    },
  },

  li: {
    float: "left",
    paddingLeft: 20,
    paddingRight: 20,
  },

  link: {
    "&:hover": {
      cursor: "pointer",
    },
  },
};

export default about;
