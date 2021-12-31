import {Colors} from '../colors'

const navbar = {
  body: {
    backgroundColor: Colors.darkAbsolute,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    height: 50,
    fontFamily: "Aller-Bold",
    zIndex: 10
  },

  ul: {
    display: 'inline-block',
    listStyle: 'none',
    
  },

  li: {
    float: 'left',
    paddingLeft: 20,
    paddingRight: 20,
  
  },


}

export default navbar