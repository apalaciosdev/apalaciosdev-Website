import {Colors} from '../colors'


const ButtonLink = {

 
  
  button: {
    borderRadius: 100,
    fontSize: 20,
    zIndex: 3,
    cursor: 'pointer',
    float: 'left',
    backgroundColor: colorType => 
      colorType === 'winter' ? Colors.winter 
      : colorType === 'navy' ? Colors.navy 
      : Colors.navy,

    borderColor: colorType => 
      colorType === 'winter' ? Colors.winter 
      : colorType === 'navy' ? Colors.navy 
      : Colors.navy,

   borderStyle: 'solid',
    
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    color: '#FFF',

    
   
   
    cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0 #FFFF',
  
    transition: ['ease-in', '0.5s'],
    
    '&:hover': {
      boxShadow: 'inset 400px 0 0 0 #FFFF',
      color: 'black',
    }
 
  },

  aButton: {
    
    display: 'flex',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: -1
  },

  


}

export default ButtonLink
