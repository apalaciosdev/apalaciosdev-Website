import {Colors} from '../colors'


const card = {

  generalDivCard: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  
  divCard: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 790,
    width: '70vw',
    // maxHeight: 700,
    // height: '70vh',
    boxShadow: 'rgba(0, 0, 0, 0.4) 3px 5px 50px',
    overflow: 'hidden'
  },

  imgCard: {
    height: '50%',
    width: '100%',
    "&:hover": {
      cursor: 'pointer'
    },
  },

  imgMobileCard: {
    height: 460,
    width: 240,
    borderRadius: '37px',
    marginTop: '-35%',
    boxShadow: 'rgba(0, 0, 0, 0.4) 30px -20px 50px 3px',
    "&:hover": {
      cursor: 'pointer'
    },
  },

  textCard: {
    textAlign: 'left',
    width: '40%',
    marginLeft: 30,
    marginTop: '-30px',
    marginBottom: '150px',
    display: 'grid',
    justifyContent: 'none',
  },
  
  titleCard: {
    textAlign: 'left',
    maxWidth: 790,
    width: '70vw',
    marginTop: 100, 
    marginBottom: 20, 
    color: Colors.winter,
    borderBottom: [2, 'solid', Colors.lightGrey],
  },

  imagesCard: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 0,
    marginBottom: '-60px',
    
  },


  technologiesDiv: {
    height: 80,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-20px',
    marginBottom: '20px',
  },

  buttonDiv: {
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },

  technologiesCard: {
    display: 'grid',
    justifyContent: 'center',
  },

  technologiesH3: {
    textAlign: 'center'
  },

  '@media (max-width: 560px)': {
    technologiesCard: {
      marginTop: 60
    },
  },
 
 
  '@media (max-width: 860px)': {
    imgMobileCard: {
      marginLeft: 0,
      marginTop: '-20%',
    },

    textCard: {
      textAlign: 'center',
      display: 'grid',
      justifyContent: 'center',
      width: '100%',
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: '20%',
    },

    imagesCard: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

    imgCard: {
      height: '30%',
    },
    

  },

  '@media (max-width: 400px)': {
    imgMobileCard: {
      height: 360,
      width: 180,
      borderRadius: '30px',
      marginTop: '-30%',
    },

    textCard: {
      textAlign: 'center',
      width: '100%',
      marginTop: 40,
  
    },

    imagesCard: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

    technologiesCard: {
      marginTop: 100
    },
  },
}

export default card;