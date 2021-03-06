import {Colors} from '../colors'


const footer = {
  generalDivFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    background: Colors.deadGrey,
    color: 'white',
  
    width: '100%',
    marginTop: 100,
    paddingTop: 30,
    paddingBottom: 10
  },
  
  divFooter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: 50
  },
  
  buttonFooter: {
    marginLeft: 15,
    marginRight: 15
  },
  
  upFooter: {
    border: [5, 'solid', Colors.deadGrey],
    borderRadius: '100%',
    width: 60,
    height: 60,
    paddingLeft: 5,
    paddingTop: 5,
    background: Colors.cold,
    marginTop: '-60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: ['ease-in', '0.3s'],
    
    '&:hover': {
      cursor: 'pointer',
      background: '#8aa2ad',
    }
  },

  contactDivFooter: {
    width: '100%',
    display: 'grid',
    justifyContent: 'center'
  },

  contactFooter: {
    width: 180,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: '-20px',
    fontSize: 20,
    borderBottom: [2, 'solid', Colors.white],
  }
  
  

  
}

export default footer;