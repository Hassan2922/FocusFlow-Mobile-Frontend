import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.gray, COLORS.gray]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/adaptive-icon.png")}
                        style={{
                            height: 60,
                            width: 70,
                            borderRadius: 20,
                            position: "absolute",
                            top: 5,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-3deg" }
                            ]
                        }}
                    />
              
                </View>

                {/* content  */}

                

                <View style={{
                    paddingHorizontal: 25,
                    position: "absolute",
                    top: 350,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.blue
                    }}>FocusFlow</Text>

                    <Text style={{
                        fontSize: 40,
                        fontWeight: 800,
                        color: COLORS.blue
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 36,
                        fontWeight: 800,
                        color: COLORS.blue
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue,
                            marginVertical: 4
                        }}>Let us help you become productive</Text>

                        

                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue,
                        }}>Our powerful features will shock you</Text>
                    </View>

                    <Button
                        title="Join Now"
                        filled
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 10,
                            width: "100%",
                            backgroundColor: COLORS.darkblue,
                            borderColor: COLORS.white, 
                            
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        color: COLORS.blue,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.blue,
                                fontWeight: "bold",
                                marginLeft: 4,
                                textDecorationLine: 'underline',
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome