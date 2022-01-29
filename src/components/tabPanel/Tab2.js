import React from 'react'

import Icon from '../Icon'

const Tab2 = () => {
  return (
    <div className='tab2'>
      <ul>
        <li><Icon iconType={'react'} bg={'neon'} size={'30'}/><p>React</p></li>
        <li><Icon iconType={'nextjs'} bg={'white'} size={'30'}/><p>NextJS</p></li>
        <li><Icon iconType={'nodejs'} bg={'nodeJS'} size={'30'}/><p>NodeJS</p></li>
        <li><Icon iconType={'express'} bg={'express'} size={'30'}/><p>Express</p></li>
        <li><Icon iconType={'mongodb'} bg={'mongoDB'} size={'30'}/><p>MongoDB</p></li>
        <li><Icon iconType={'js'} bg={'js'} size={'30'}/><p>JS</p></li>
        <li><Icon iconType={'html'} bg={'html'} size={'30'}/><p>HTML</p></li>
        <li><Icon iconType={'css'} bg={'css'} size={'30'}/><p>CSS</p></li>
        <li><Icon iconType={'styled-components'} bg={'styled-components'} size={'30'}/><p>Styled Components</p></li>
        <li><Icon iconType={'jss'} bg={'js'} size={'30'}/><p>JSS</p></li>
        <li><Icon iconType={'photoshop'} bg={'photoshop'} size={'30'}/><p>Photoshop</p></li>
        <li><Icon iconType={'premierepro'} bg={'premierePro'} size={'30'}/><p>Premiere Pro</p></li>
      </ul>
    </div>
  )
}

export default Tab2
