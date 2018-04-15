export const appColors = {
    error: '#BF352F',
    blue: '#0F3F76',
    lightBlue: '#03A687',
    grey: '#BCBEC0',
    lightGray: '#f1f1f1',
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
        color: appColors.dark,
        textDecoration: 'none',
        textAlign: 'left'
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
    },
    listItem:{
        fontSize: '1.5em',
        color: appColors.lightGray,
        width: '60vw',
        marginLeft: '20vw',
        marginTop:'5vh',
        padding: '1em',
        backgroundColor: appColors.blue
    },
    itemInfo: {
        marginTop: '0.5em'
    },
    link: {
        textDecoration: 'none',
    }
}