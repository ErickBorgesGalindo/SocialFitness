import { StyleSheet } from "react-native";
export default StyleSheet.create({
    // ------ViewStyles------
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    viewContainer: {
        position: 'absolute',
        top: '93%',
        width: '100%',
        height: '400%',
        borderRadius: 25,
        backgroundColor: '#1C1C1E',
    },
    slashView: {
        position: 'absolute',
        top: '75%',
        width: '200%',
        height: 600,
        backgroundColor: '#1C1C1E',
        transform: [{ skewY: '-10deg' }],
      },
    //   slashView: {
    //     position: 'absolute',
    //     top: '80%',
    //     width: '100%',
    //     height: 600,
    //     backgroundColor: '#1C1C1E',
    //     transform: [{ skewY: '-10deg' }],
    //   },
    completeContainer: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maintxtView: {
        paddingTop: 40,
        paddingLeft: 40,
        paddingBottom: 10
    },
    infoTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginHorizontal: 40
    },
    tabView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#2C2C2E',
        width: '91%',
        borderRadius: 20,
        height: 28,
        marginTop: 40,
    },
    dataView: {
        height: 100,
        width: 340,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#3A3A3C',
    },
    addCardView: {
        justifyContent: 'center',
        height: 130,
        width: 80,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#2C2C2E',
    },
    completeContainer: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    popUpView: {
        height: 300,
        width: 300,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: '#2C2C2E'
    },
    profileView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 70,
        marginLeft:20
    },
    imageProfileView:{
        borderRadius: 150, 
        borderWidth: 6, 
        borderColor: '#2C2C2E', 
        padding: 10
    },
    imageProfileViewPremium:{
        borderRadius: 150, 
        borderWidth: 6, 
        borderColor: '#D0FD3E', 
        padding: 10
    },
    // ------TextStyles------
    header: {
        fontSize: 50,
        fontWeight: "800",
        color: '#fff',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: "300",
        color: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        color: '#fff'
    },
    textOut: {
        fontSize: 18,
        fontWeight: "500",
        color: '#FF2424'
    },
    textColor: {
        fontSize: 17,
        fontWeight: "300",
        color: '#D0FD3E'
    },
    textSmall: {
        fontSize: 17,
        fontWeight: "300",
        color: '#FFF'
    },
    textPopUp: {
        marginLeft: 15,
        fontSize: 25,
        fontWeight: "600",
        color: 'white'
    },
    description: {
        textAlign: 'justify',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 17,
        color: '#fff',
    },
    sectionName: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: "900",
        color: '#fff',
        textTransform: 'uppercase'
    },
    cardInfo: {
        alignItems: 'start',
        flexDirection: 'col',
        marginLeft: 20,
        marginTop: 30
    },
    cardInfoTxt: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
    },
    slashTxt: {
        position: 'absolute',
        top: '60%',
        marginLeft: 40
      },
    joinedTxt:{
        color: '#505050',
        fontSize: 15,
        marginBottom:10
    },

    // ------componentStyles------
    topImage: {
        width: '100%',
        height: 300,
    },
    slashImage: {
        width: '100%',
        height: 550,
      },
    input: {
        height: 60,
        width: 350,
        alignSelf: 'center',
        marginBottom: 10,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderTopColor: '#1C1C1E',
        borderLeftColor: '#1C1C1E',
        borderRightColor: '#1C1C1E',
        borderWidth: 1,
    },
    inputReview: {
        height: 235,
        width: 320,
        alignSelf: 'center',
        marginBottom: 30,
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#2C2C2E',
        backgroundColor: '#2C2C2E',
        borderRadius: 20,
        padding: 20,
        paddingTop: 20
    },
    inputExpires: {
        height: 60,
        width: 150,
        alignSelf: 'center',
        alignContent: 'space-between',
        marginHorizontal:5,
        marginBottom: 30,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderTopColor: '#1C1C1E',
        borderLeftColor: '#1C1C1E',
        borderRightColor: '#1C1C1E',
        borderWidth: 1,
    },
    cellIcon: {
        width: 54,
        height: 54,
        borderRadius: 50,
        marginTop: 17,
        marginRight: 40,
        backgroundColor: '#D0FD3E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    circleTrainerimage: {
        height: 60,
        width: 60,
        marginLeft: 20,
        borderRadius: 50
    },
    profileImage: {
        height: 120,
        width: 120,
        borderRadius: 70,
        justifyContent:'center'
    },
    card: {
        height: 176,
        width: 327,
        marginTop: 30,
        alignSelf: "center",
    },
    cardLogo: {
        width: 80,
        height: 80,
        marginRight: 30,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
    },
    popUpButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        top: '100%',
        width: 200,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#D0FD3E',
    },
})