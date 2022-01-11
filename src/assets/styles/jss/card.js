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
    height: '40%',
    width: '100%',
  },

  imgMobileCard: {
    height: 460,
    width: 240,
    borderRadius: '37px',
    marginTop: '-100px',
    marginLeft: 50,
    boxShadow: 'rgba(0, 0, 0, 0.4) 30px -20px 50px 3px',
  },

  textCard: {
    textAlign: 'center',
    width: '100%',
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
    justifyContent: 'left',
    flexWrap: 'wrap',
  },

  '@media (max-width: 477px)': {
    imgMobileCard: {
      marginLeft: 0,

    },

    imagesCard: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },
}

export default card;