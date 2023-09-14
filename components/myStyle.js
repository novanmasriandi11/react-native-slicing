import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"row",
        padding:20,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    avatar:{
        height:100,
        width:100,
        borderRadius: 35,
    },
    body:{
        paddingLeft:15,
    },
    header:{
        flexDirection:'row',
    },
    social:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:10,
        marginHorizontal:0,
        gap:8,
    },
    btnSocial:{
        backgroundColor:"#eee",
        borderRadius:40,
        padding:10,
    },
})