export const appColors = {
    error: '#BF352F',
    blue: '#0F3F76',
    lightBlue: '#03A687',
    grey: '#BCBEC0',
    dark: '#333333'

};

export const appFont = "'Roboto', sans-serif";

export default {
    appFont: {
        fontFamily: appFont,
        color: appColors.dark
    },
    // flexCenter: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column'
    // },
    // centerItalic: {
    //     textAlign: 'center',
    //     fontStyle: 'italic'
    // },
    appBar: {
        backgroundColor: appColors.lightBlue
    },
    appBarTitle: {
        fontFamily: appFont,
        fontSize: '1.75em'
    },
    sideBar: {
        backgroundColor: appColors.grey,
        fontFamily: appFont,
        fontSize: '1.1em'
    },
    // input: {
    //     display: 'block',
    //     marginBottom: '5px',
    //     fontFamily: appFont,
    //     color: appColors.dark
    // },
    // link: {
    //     color: appColors.primary,
    //     fontFamily: appFont,
    //     fontSize: '1.15em',
    //     textDecoration: 'none',
    //     margin: '1em 0'
    // },
    // dashboard: {
    //     fontFamily: appFont,
    //     color: appColors.dark,
    //     padding: '40px',
    //     width: '80vw',
    //     margin: '50px auto 0 auto'
    // }
}