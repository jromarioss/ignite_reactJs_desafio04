import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  '@media (max-width: 768px)': {
    width: '100vw',
    maxWidth: 'none',
    paddingInline: '2rem',
    marginLeft: '0',
    height: 'auto',
  },

  '@media (max-width: 426px)': {
    paddingInline: '1rem',
  }
});

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  '@media (max-width: 768px)': {
    height: '28rem',
  },

  '@media (max-width: 426px)': {
    height: '24rem',
  },

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    transform: 'translateY(100%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '@media (max-width: 768px)': {
      padding: '1rem',
    },

    '@media (max-width: 426px)': {
      padding: '0.8rem',
    },

    '@media (max-width: 321px)': {
      padding: '0.5rem',
    },


    strong: {
      display: 'block',
      fontSize: '$lg',
      color: '$gray100',

      '@media (max-width: 768px)': {
        fontSize: '$md',
      },

      '@media (max-width: 426px)': {
        fontSize: 12,
      },

      '@media (max-width: 321px)': {
        fontSize: 10,
      },
    },

    span: {
      display: 'block',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',

      '@media (max-width: 768px)': {
        fontSize: '$md',
      },

      '@media (max-width: 426px)': {
        fontSize: 12,
      },

      '@media (max-width: 321px)': {
        fontSize: 10,
      },
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)', /* volta da tela */
      opacity: 1,
    }
  }
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  '@media (max-width: 426px)': {
    gap: 2,
  },
})

export const ButtonAddProductToTheCard = styled('button', {
  height: '3.5rem',
  width: '3.5rem',
  backgroundColor: '$green500',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  '@media (max-width: 768px)': {
    height: '2.5rem',
    width: '2.5rem',

    svg: {
      height: 24,
      width: 24,
    }
  },

  '@media (max-width: 426px)': {
    height: '2rem',
    width: '2rem',

    svg: {
      height: 18,
      width: 18,
    }
  },

  '@media (max-width: 320px)': {
    svg: {
      height: 14,
      width: 14,
    }
  },
  
  '&:hover': {
    backgroundColor: '$green300',
    transition: '.2s ease'
  }
})
