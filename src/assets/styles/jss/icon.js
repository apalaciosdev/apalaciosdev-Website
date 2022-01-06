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
        : props.bg === "black"
        ? Colors.black
        : props.bg === "blueLinked"
        ? Colors.blueLinked
        : props.bg === "html"
        ? Colors.html
        : props.bg === "css"
        ? Colors.css
        : props.bg === "photoshop"
        ? Colors.photoshop
        : 'none',
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
      : props.bgHover === "black"
      ? Colors.black
      : props.bgHover === "blueLinked"
      ? Colors.blueLinked
      : props.bg === "html"
      ? Colors.html
      : props.bg === "css"
      ? Colors.css
      : props.bg === "photoshop"
      ? Colors.photoshop
      : 'none',
    },

    
  },
};

export default icon;
