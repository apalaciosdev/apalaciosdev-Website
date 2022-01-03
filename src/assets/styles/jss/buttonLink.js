import {Colors} from '../colors'


const ButtonLink = {
  
  type1: {
    borderRadius: 7,
    fontSize: 20,
    zIndex: 3,
    cursor: 'pointer',
    float: 'left',
    backgroundColor: Colors.deadGrey,
    border: [1, 'solid', Colors.deadGrey],

    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    width: 100,
    height: 50,
  
    transition: ['ease-in', '0.2s'],
    
    '&:hover': {
      
      color: colorType => 
      colorType === "darkAbsolute"
      ? Colors.darkAbsolute
      : colorType === "deadGrey"
      ? Colors.deadGrey
      : colorType === "navy"
      ? Colors.navy
      : colorType === "darkOcean"
      ? Colors.darkOcean
      : colorType === "winter"
      ? Colors.winter
      : colorType === "cold"
      ? Colors.cold
      : colorType === "neon"
      ? Colors.neon
      : colorType === "lightGrey"
      ? Colors.lightGrey
      : colorType === "white"
      ? Colors.white
      : colorType === "white",
    }
 
  },

  type2: {
    borderRadius: 7,
    fontSize: 20,
    zIndex: 3,
    cursor: 'pointer',
    float: 'left',
    backgroundColor: 'transparent',
    color: 'black',
    border: [3, 'solid', Colors.deadGrey],

   
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 8,
    width: 100,
    height: 50,
  
    transition: ['ease-in', '0.2s'],
    
    '&:hover': {
      
      color: colorType => 
      colorType === "darkAbsolute"
      ? Colors.darkAbsolute
      : colorType === "deadGrey"
      ? Colors.deadGrey
      : colorType === "navy"
      ? Colors.navy
      : colorType === "darkOcean"
      ? Colors.darkOcean
      : colorType === "winter"
      ? Colors.winter
      : colorType === "cold"
      ? Colors.cold
      : colorType === "neon"
      ? Colors.neon
      : colorType === "lightGrey"
      ? Colors.lightGrey
      : colorType === "white"
      ? Colors.white
      : colorType === "white",
    }
  },



  buttonT3: {
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



}

export default ButtonLink
