import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1180,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  margin: '0 auto',

  img: {
    cursor: 'pointer',
  },

  div: {
    position: 'relative',
  },

  '@media (max-width: 768px)': {
    maxWidth: 'none',
    padding: '3rem 2rem',
  },

  '@media (max-width: 426px)': {
    padding: '2rem 1rem',
  },
})

export const CountProducts = styled('div', {
  width: '1.5rem',
  height: '1.5rem',
  position: 'absolute',
  top: 15,
  left: 30,
  backgroundColor: '$green300',
  borderRadius: 999,
  border: '3px solid #121215',

  '@media (max-width: 426px)': {
    top: 15,
    left: 25,
  },
  
  p: {
    marginTop: 1,
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: 'bold'
  }
})
