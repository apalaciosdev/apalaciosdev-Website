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
    width: 120,
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
      : colorType === "blueLinked"
      ? Colors.blueLinked
      : colorType === "blueLinked",
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
    width: 120,
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
      : colorType === "blueLinked"
      ? Colors.blueLinked
      : colorType === "blueLinked",
    }
  },



  type3: {
    borderRadius: 7,
    fontSize: 20,
    zIndex: 3,
    cursor: 'pointer',
    float: 'left',
    backgroundColor: 'transparent',
    color: 'white',
    border: [2, 'solid', Colors.white],

   
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 8,
    width: 170,
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
      : colorType === "blueLinked"
      ? Colors.blueLinked
      : colorType === "blueLinked",
    }
  },

  type4: {
    borderRadius: 7,
    fontSize: 20,
    zIndex: 3,
    cursor: 'pointer',
    backgroundColor: Colors.deadGrey,
    border: [1, 'solid', Colors.deadGrey],

    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 5,
    width: 135,
    height: 40,
  
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
      : colorType === "blueLinked"
      ? Colors.blueLinked
      : colorType === "blueLinked",
    }
 
  },



}

export default ButtonLink
