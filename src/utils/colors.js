const mainColors = {
    blue1: '#1D8AF5',
    black1: '#000000',
    white1: '#ffffff',
    red1: '#EA232A',
  
    blackTransparent1: 'rgba(0, 0, 0, 0.5)',
    whiteTransparent1: 'rgba(255, 255, 255, 0.5)',
  
    neutral20: '#F6F6F6',
    neutral30: '#EFEFEF',
    neutral40: '#E4E4E4',
    neutral50: '#C9C9C9',
    neutral60: '#AAAAAA',
    neutral70: '#868686',
    neutral80: '#747474',
    neutral100: '#282828',
  
    warning_surface: '#FFFAED',
  };
  
  export const colors = {
    primary: mainColors.blue1,
    white: mainColors.white1,
    black: mainColors.black1,
    placeholder: mainColors.neutral60,
    error: mainColors.red1,
    disable: mainColors.whiteTransparent1,
  
    backgroundColor: {
      primary: mainColors.white1,
      secondary: mainColors.neutral20,
      modal: mainColors.blackTransparent1,
    },

    header: {
      primary: mainColors.blue1,
    },
  
    text: {
      primary: mainColors.neutral100,
      secondary: mainColors.neutral80,
      disable: mainColors.neutral50,
    },

    button: {
      submit: {
        backgroundColor: mainColors.blue1,
        colors: mainColors.white1,
        borderColor: mainColors.blue1,
      },

      secondary: {
        backgroundColor: mainColors.red1,
        colors: mainColors.white1,
        borderColor: mainColors.red1,
      },
    },
  };
  