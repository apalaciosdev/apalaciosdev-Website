import React from "react"
import { Button, Image, Popup } from "semantic-ui-react"
import Icon from "./Icon"

const PopupIconHover = ({ bg, size, bgHover, info }) => (
  <Popup
    content={info}
    trigger={
      <Button>
        <Icon
          iconType={info}
          bg={bg}
          size={size}
          bgHover={bgHover}
        />
      </Button>
    }
    className="popup"
  />
)

export default PopupIconHover
