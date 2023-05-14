import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../styles'

export const ModalContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  backgroundColor: '$gray800',
  width: '30rem',
  height: '100vh',
  paddingInline: '2rem',

  '@media (max-width: 768px)': {
    paddingInline: '1.5rem',
  },

  '@media (max-width: 426px)': {
    width: '20rem',
    paddingInline: '1rem',
  },

  '@media (max-width: 321px)': {
    width: '18rem',
    paddingInline: '0.5rem',
  },

  h2: {
    color: '$gray100',
    marginTop: '4.5rem',
    marginBottom: '2rem',
    fontSize: '$lg',
    fontWeight: 'bold',

    '@media (max-width: 768px)': {
      marginTop: '1.5rem',
      marginBottom: '1rem',
      fontSize: '$md',
    },

    '@media (max-width: 426px)': {
      marginTop: '1rem',
      fontSize: '$md',
    },
  }
})

export const ButtonOpen = styled('button', {
  height: 48,
  width: 48,
  backgroundColor: '$gray800',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  '@media (max-width: 426px)': {
    height: 40,
    width: 40,
  },
})

export const ButtonClose = styled(Dialog.Close, {
  position: 'fixed',
  top: 24,
  right: 24,
  backgroundColor: 'transparent',
  border: 'none',

  '@media (max-width: 426px)': {
    top: 10,
    right: 10,
  },
})

export const ProductCardsBox = styled('div', {
  width: '100%',
  height: '29rem',
  overflow: 'hidden',

  '@media (max-width: 768px)': {
    height: '25.8rem',
  },
})

export const ProductCards = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  marginBottom: '1.4375rem',

  '@media (max-width: 768px)': {
    marginBottom: '0.8rem',
    gap: 29,
  },

  '@media (max-width: 426px)': {
    marginBottom: '0.5rem',
    gap: 16,
  },
})

export const ProductCardImage = styled('div', {
  height: '5.8125rem',
  width: '6.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  '@media (max-width: 426px)': {
    height: '4rem',
    width: '4rem',
  },
})

export const ProductCardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  flex: 1,

  '@media (max-width: 768px)': {
    gap: 2,
  },

  '@media (max-width: 426px)': {
    gap: 1,
  },

  button: {
    width: 30,
    marginTop: '0.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',

    '@media (max-width: 768px)': {
      marginTop: 0,
    },
  

    '@media (max-width: 426px)': {
      fontSize: 12,
    },

    '&:hover' : {
      color: '$green300',
      transition: '.2s ease'
    }
  }
})

export const ProductCardTitle = styled('p', {
  color: '$gray100',
  fontSize: '$md',
  lineHeight: '160%',

  '@media (max-width: 426px)': {
    fontSize: 12,
  },
})

export const ProductCardPrice = styled('p', {
  color: '$gray100',
  fontSize: '$md',
  lineHeight: '160%',
  fontWeight: 'bold',

  '@media (max-width: 426px)': {
    fontSize: 14,
  },
})

export const ProductInfo = styled('div', {
  position: 'fixed',
  bottom: '3rem',
  width: '24rem',

  '@media (max-width: 768px)': {
    width: '24rem',
    bottom: '1rem',
  },

  '@media (max-width: 426px)': {
    width: '18rem',
    bottom: '1rem',
  },

  '@media (max-width: 321px)': {
    width: '16rem',
    bottom: '1rem',
  },
})

export const ProductInfoAmount = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  fontWeight: '1rem',

  '@media (max-width: 768px)': {
    marginBottom: '0.5rem',
  },

  '@media (max-width: 426px)': {
    fontSize: 14,
  },

  '@media (max-width: 321px)': {
    fontSize: 12,
  },
})

export const ProductInfoPrice = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '3.5625rem',
  fontWeight: 'bold',
  fontSize: '$md',

  '@media (max-width: 768px)': {
    marginBottom: '1rem',
  },

  '@media (max-width: 426px)': {
    fontSize: 14,
  },

  '@media (max-width: 321px)': {
    fontSize: 12,
  },
})

export const ProductInfoButton = styled('button', {
  width: '100%',
  height: '4.3125rem',
  border: 'none',
  borderRadius: 8,
  backgroundColor: '$green300',
  color: '$gray100',
  fontWeight: 'bold',
  fontSize: '$md',

  '@media (max-width: 768px)': {
    height: '3.5rem',
    fontSize: 16,
  },

  '@media (max-width: 426px)': {
    height: '3rem',
    fontSize: 14,
  },

  '@media (max-width: 321px)': {
    fontSize: 12,
  },
})

export const ProductEmpty = styled('p', {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-40%, -50%)',
  fontSize: '$lg',

  '@media (max-width: 426px)': {
    fontSize: 14,
  },
})
