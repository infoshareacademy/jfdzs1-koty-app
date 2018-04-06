export const appColors = {
    error: '#BF352F',
    blue: '#0F3F76',
    lightBlue: '#03A687',
    grey: '#BCBEC0',
    lightGray: '#f0f3f5',
    dark: '#333333'

};

export const appFont = "'Roboto', sans-serif";

export default {
    appFont: {
        fontFamily: appFont,
        color: appColors.dark
    },
    grantsList: {
        fontSize: '1.5em',
        width: '60vw',
        marginLeft: '20vw',
        marginTop:'5vh',
        color: appColors.dark
    },
   logo: {
        width:'10vw',
        height:'5vh',
        marginTop: '0.5em',
        marginLeft: '1em'
   },
    appBar: {
        backgroundColor: appColors.lightBlue
    },
    appBarTitle: {
        fontFamily: appFont,
        fontSize: '1.75em'
    },
    sideBar: {
        backgroundColor: appColors.grey,
        fontFamily: appFont
    },
    sideBarItem: {
        textDecoration: 'none',
        fontSize: '1.2em',
        color: appColors.lightBlue,
        letterSpacing: '0.1em'
    }
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