import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',

  '@media (max-width: 768px)': {
    maxWidth: 'none',
    gap: '2rem',
    paddingInline: '2rem',
  },

  '@media (max-width: 426px)': {
    gridTemplateColumns: '1fr',
    gap: '1rem',
    paddingInline: '1rem',
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 768px)': {
    maxWidth: 'none',
    height: 450,
  },

  '@media (max-width: 426px)': {
    height: 300,
  },

  img: {
    objectFit: 'cover',

    '@media (max-width: 426px)': {
      height: 20,
    },
  }
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@media (max-width: 426px)': {
    gap: '0.5rem',
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray300',

    '@media (max-width: 768px)': {
      fontSize: '$lg',
    },
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$gray300',

    '@media (max-width: 768px)': {
      fontSize: '$lg',
    },

    '@media (max-width: 426px)': {
      marginTop: '0.5rem',
    },
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    '@media (max-width: 768px)': {
      fontSize: 16,
      marginTop: '2rem',
    },

    '@media (max-width: 426px)': {
      marginTop: '0.5rem',
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '@media (max-width: 768px)': {
      padding: '1rem',
      fontSize: 16,
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(disabled):hover': {
      backgroundColor: '$green300',
    }
  },
});