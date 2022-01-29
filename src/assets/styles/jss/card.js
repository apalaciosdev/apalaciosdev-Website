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
    
  },

  tecnologiesCard: {

  },

  '@media (max-width: 766px)': {
    imagesCard: {
      marginBottom: 65,
    },
  },
 
 
  '@media (max-width: 860px)': {
    imgMobileCard: {
      marginLeft: 0,
    },

    textCard: {
      textAlign: 'center',
      width: '100%',
      marginTop: 40,
      marginLeft: 10,
      marginRight: 10,
    },

    imagesCard: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

  },

  '@media (max-width: 400px)': {
    imgMobileCard: {
      height: 360,
      width: 180,
      borderRadius: '30px',
      marginTop: '-150px'
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

  },
}

export default card;