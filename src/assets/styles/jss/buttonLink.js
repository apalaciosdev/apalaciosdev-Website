import {Colors} from '../colors'


const ButtonLink = {

 
  
  buttonT1: {
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
    

    
   
   
    cursor: 'pointer',
    boxShadow: 'inset 0 0 0 0 #FFFF',
  
    transition: ['ease-in', '0.2s'],
    
    '&:hover': {
      boxShadow: 'inset 100px 0 0 0 #FFFF',
      color: 'black',
    }
 
  },

  
  buttonT2: {
    borderRadius: 100,
    fontSize: 20,
    zIndex: 3,
    cursor: 'pointer',
    float: 'left',
    backgroundColor: Colors.darkAbsolute,
    border: [1, 'solid', Colors.darkAbsolute],

 
    
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    

    
   
   
    cursor: 'pointer',
    
  
    transition: ['ease-in', '0.2s'],
    
    '&:hover': {
      
      color: Colors.neon,
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
