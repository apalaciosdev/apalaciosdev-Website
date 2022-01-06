import React from 'react'

import Icon from '../Icon'

const Tab2 = () => {
  return (
    <div className='tab2'>
      <ul>
        <li><Icon iconType={'react'} bg={'neon'} size={'30'} className={'tab2-icon'}/>React</li>
        <li><Icon iconType={'html'} bg={'html'} size={'30'}/><p>HTML</p></li>
        <li><Icon iconType={'css'} bg={'css'} size={'30'}/>CSS</li>
      </ul>
    </div>
  )
}

export default Tab2
