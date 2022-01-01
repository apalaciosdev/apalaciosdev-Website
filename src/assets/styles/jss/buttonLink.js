import {Colors} from '../colors'


const ButtonLink = {

 
  
  button: {
    borderRadius: 100,
    fontSize: 20,
    zIndex: 2,
    cursor: 'pointer',
    float: 'left',
    backgroundColor: colorType => 
      colorType === 'winter' ? Colors.winter 
      : colorType === 'navy' ? Colors.navy 
      : Colors.navy,
    
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },


}

export default ButtonLink
