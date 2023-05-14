import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  '@media (max-width: 768px)': {
    justifyContent: 'flex-start',
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',

    '@media (max-width: 768px)': {
      marginTop: '2rem',
    },

    '@media (max-width: 426px)': {
      marginTop: '1rem',
      fontSize: '$lg',
    },

    '@media (max-width: 320px)': {
      fontSize: 16,
    },
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,

    '@media (max-width: 768px)': {
      marginTop: '2rem',
    },

    '@media (max-width: 426px)': {
      maxWidth: 250,
      marginTop: '1rem',
      fontSize: 16,
    },

    '@media (max-width: 320px)': {
      fontSize: 12,
    },
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '@media (max-width: 768px)': {
      marginTop: '4rem',
    },

    '@media (max-width: 320px)': {
      fontSize: 14,
    },

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageArea = styled('div', {
  width: 600,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 426px)': {
    width: '100%',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 150,
  height: 150,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 999,
  borderLeft: '1px solid rgba(18, 18, 20, 0.75)',
  boxShadow: ' 1px 1px 1px black',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: -35,
  zIndex: 1,

  '@media (max-width: 426px)': {
    maxWidth: 'none',
    width: 100,
    height: 100,
  },
  
  img: {
    objectFit: 'cover',
  }
})
