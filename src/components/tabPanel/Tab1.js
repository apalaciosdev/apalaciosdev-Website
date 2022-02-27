import React from "react"

import Button2 from "../buttons/Button2"

const Tab1 = () => {
  return (
    <div className="tab1">
      <p>
        I'm a JR Developer motivated to learn new technologies, especially in
        JavaScript ecosystem.
      </p>
      <p>
        My mantra: <cite>`Nothing is impossible, but it only comes with hard work.´</cite> <br/>For
        this reason, I try to spend my time in learn and create projects
        that can help people.
      </p>
      <p>
        Actually, I develop projects in MERN Stack (mongoDB, expressJS, reactJS & nodeJS).
      </p>
      <Button2 type={"cv"} colorType={"neon"} text={"Download CV"}></Button2>
    </div>
  )
}

export default Tab1
