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
    title:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    price:{
        color:'#fff',
        fontSize: 12,
    },
    container:{    
        flexDirection: "row",
    },
    card:{
        backgroundColor: "#000000",
        paddingVertical:4,
        paddingHorizontal:10,
        paddingBottom:10,
        marginVertical:10,
        marginHorizontal:17,
        borderRadius:15,
        alignItems:"center",    
        borderWidth: 2,     
        borderColor: "#FFCF00",

    },
    imgCard:{
        width:150,
        height:150
    }



})