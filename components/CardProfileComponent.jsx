import { Image, Text, TouchableOpacity, View } from "react-native";
import { myStyle } from "./myStyle";
import { FontAwesome } from '@expo/vector-icons';

export function CardProfileComponent() {
    return(
        <View style={myStyle.container}>
            <View style={myStyle.header}>
                <Image style={myStyle.avatar} source={require('../assets/WestSumatra.png')}/>
            </View>
            <View style={myStyle.body}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Novan Masriandi</Text>
                <Text>Software Engineer</Text>
                <View style={myStyle.social}>
                    <TouchableOpacity style={myStyle.btnSocial}>
                        <FontAwesome name="twitter" size={24} color="#1DA1F2"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={myStyle.btnSocial}>
                        <FontAwesome name="linkedin" size={24} color="#0077B5"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={myStyle.btnSocial}>
                        <FontAwesome name="github" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}