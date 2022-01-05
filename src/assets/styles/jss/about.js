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
    
    
    columnGap: 80,
  },

  
  
  divImg: {
    display: 'grid',
    justifyContent: 'right',
  },
  
  
  divTab: {
    
  },
  
  '@media (min-width: 780px)': {
    section: {
      'grid-template-columns': 'repeat(2, 1fr)',
 
    },
    divImg: {
    display: 'grid',
    justifyContent: 'none',
  },
  },


};

export default about;
