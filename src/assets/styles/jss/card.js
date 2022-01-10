import {Colors} from '../colors'


const card = {
  generalDivCard: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
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

  titleCard: {
    width: '100%',
    textAlign: 'center',
  },
  
  textCard: {
    textAlign: 'center',
    width: '100%',
  },
  
  titleCard: {
    textAlign: 'left',
    width: '100%',
    marginLeft: 60,
    marginTop: 80,
  }
}

export default card;