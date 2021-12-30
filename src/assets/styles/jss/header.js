import {Colors} from '../colors'

const header = {
  letras: {
    fontFamily: "Poppins-ExtraBold",
    zIndex: 2
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
    color: Colors.darkOcean,
  },
  
  generalDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '110vh',
   
  },

}

export default header