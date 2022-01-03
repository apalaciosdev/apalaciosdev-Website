import {Colors} from '../colors'

const header = {
  letras: {
    fontFamily: "Poppins-ExtraBold",
    zIndex: 2,
  },

  nameTitle: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: 60,
    textAlign: 'center',
    lineHeight: 1,
    marginTop: -25,
    zIndex: 2
  },
  
  surnameTitle: {
    color: Colors.winter,
  },
  
  generalDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '110vh',
    overflow:'hidden'
  },

  

  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 4
  },

}

export default header