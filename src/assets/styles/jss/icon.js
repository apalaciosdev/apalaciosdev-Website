import { Colors } from "../colors";

const icon = {
  icon: {
    color: (props) =>
      props.bg === "darkAbsolute"
        ? Colors.darkAbsolute
        : props.bg === "deadGrey"
        ? Colors.deadGrey
        : props.bg === "navy"
        ? Colors.navy
        : props.bg === "darkOcean"
        ? Colors.darkOcean
        : props.bg === "winter"
        ? Colors.winter
        : props.bg === "cold"
        ? Colors.cold
        : props.bg === "neon"
        ? Colors.neon
        : props.bg === "lightGrey"
        ? Colors.lightGrey
        : props.bg === "white"
        ? Colors.white
        : props.bg === "white",
    size: "25px",
    marginTop: 4,
    marginRight: 4,

    "&:hover": {
      color: (props) =>
      props.bgHover === "darkAbsolute"
      ? Colors.darkAbsolute
      : props.bgHover === "deadGrey"
      ? Colors.deadGrey
      : props.bgHover === "navy"
      ? Colors.navy
      : props.bgHover === "darkOcean"
      ? Colors.darkOcean
      : props.bgHover === "winter"
      ? Colors.winter
      : props.bgHover === "cold"
      ? Colors.cold
      : props.bgHover === "neon"
      ? Colors.neon
      : props.bgHover === "lightGrey"
      ? Colors.lightGrey
      : props.bgHover === "white"
      ? Colors.white
      : props.bgHover === "white",
      size: "25px",
    },
  },
};

export default icon;
