import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        width: "90%",
    },
    closeIcon: {
        tintColor:'#fff',
        height: 25,
        width: 25
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify'
    },
    textTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 2
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100055'
    },
    modalContainer: {
        backgroundColor: '#121000',
        borderRadius: 20,
        padding: "5%",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        maxHeight: "80%",
    },
    firstStatsContainer: {
        flexDirection: "row",
    },
    descriptionContainer: {
        flexDirection: "column",
        width: "100%"
    },
    firstStats: {
        flexDirection: "column",
        width: "30%",
        marginHorizontal: 5
    },
    botao: {
        color: "#fff",
        backgroundColor: "#FFCF00",
        height: 50,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#21025D",     
      },
      textButton:{
        color: "#000000",
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      img:{
        width:280,
        height:280
    },
    footerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight:60
    },
})