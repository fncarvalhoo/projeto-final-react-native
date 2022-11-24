import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        backgroundColor: '#121212',
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#0A64DD",
        paddingVertical:20 
       
    },
    logo: {
        width:220,
        height:220,
        marginHorizontal:100,
        marginTop:-110,
    },
    button: {
        backgroundColor:'#FFCF00',
        padding: 10,
        borderRadius: 20,
        marginLeft: 310
    },
    textButton: {
        color:'#000000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    preco:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10, 
        justifyContent:"space-between", 
        flexDirection: 'row'
    }

})