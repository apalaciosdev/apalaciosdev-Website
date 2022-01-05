import { Colors } from "../colors";

const about = {
  div: {
    backgroundColor: Colors.darkBg,
    color: 'white',
    paddingTop: 30,

  },
 

  section: {
    display: 'grid',
    justifyContent: 'center',
    
    'grid-template-rows': '1fr',
    columnGap: 20,
  },

  '@media (min-width: 1024px)': {
    section: {
      'grid-template-columns': 'repeat(2, 1fr)',
 
    },
  },
  
  
  img: {
    
  },

  
  tab: {
    
  },
 


};

export default about;
