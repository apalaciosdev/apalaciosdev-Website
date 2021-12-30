import {Colors} from '../colors'

const navbar = {
  body: {
    backgroundColor: Colors.navy,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    height: 50,
    fontFamily: "Aller-Bold",
  },

  ul: {
    display: 'inline-block',
    listStyle: 'none'
  },

  li: {
    float: 'left',
    paddingLeft: 20,
    paddingRight: 20,
  }

}

export default navbar