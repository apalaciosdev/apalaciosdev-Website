import { Colors } from "../colors";

const about = {
  div: {
    backgroundColor: Colors.darkBg,
    color: 'white',
    paddingTop: 100,

  },
 

  section: {
    display: 'grid',
    justifyContent: 'center',
    'grid-template-columns': '30% 70%',
    
    
    columnGap: 80,
  },

  
  
  divImg: {
    display: 'grid',
    justifyContent: 'right',
  },
  
  
  divTab: {
    width: '70%',
    display: 'grid',
    justifyContent: 'center',
  },
  
  '@media (max-width: 1250px)': {
    section: {
      'grid-template-columns': 'repeat(1, 1fr)',
 
    },
    
    divImg: {
      display: 'grid',
      justifyContent: 'center',
    },
    
    divTab: {
      display: 'grid',
      justifyContent: 'center',
      width: '100%',
      paddingLeft: '15%',
      paddingRight: '15%',
    },
  },


};

export default about;
