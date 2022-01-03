import { Colors } from "../colors";

const icon = {
  icon: {
    color: (props) =>
      props.bg === "winter"
        ? Colors.winter
        : props.bg === "navy"
        ? Colors.navy
        : Colors.navy,
    size: "25px",

    "&:hover": {
      color: (props) =>
        props.bgHover === "neon"
          ? Colors.neon
          : props.bgHover === "navy"
          ? Colors.navy
          : Colors.navy,
      size: "25px",
    },
  },
};

export default icon;
