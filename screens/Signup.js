import { View, Text, Image, Pressable, TextInput, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import COLORS from '../constants/colors';

const Signup = ({ navigation }) => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSubmit = () => {
        // Construct JSON payload from formData
        const payload = {
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
        };

        // Now you can send the payload to your API endpoint using fetch or any other method
        // For example:
        fetch('192.168.9.40:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: -20,
                        color: COLORS.blue
                    }}>
                        Create Account
                    </Text>

                    
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 3,
                        color: COLORS.blue
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.blue,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.blue}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                color: COLORS.blue
                            }}
                        />
                    </View>
                </View>
                
                <View style={{ marginBottom: 12 }}>
  <Text style={{
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
    color: COLORS.blue
  }}>Name</Text>

  <View style={{
    width: "100%",
    flexDirection: "row", // Add flexDirection to make them side by side
    justifyContent: "space-between", // Add justifyContent to space them evenly
    alignItems: "center"
  }}>
    <TextInput
      placeholder='First Name'
      placeholderTextColor={COLORS.blue}
      style={{
        width: "48%", // Adjust the width as needed
        height: 48,
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 22,
        color: COLORS.blue
      }}
    />

    <TextInput
      placeholder='Last Name'
      placeholderTextColor={COLORS.blue}
      style={{
        width: "48%", // Adjust the width as needed
        height: 48,
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 22,
        color: COLORS.blue
      }}
    />
  </View>
</View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.blue
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.blue,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+92'
                            placeholderTextColor={COLORS.blue}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%",
                                color: COLORS.blue
                            }}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.blue}
                            keyboardType='numeric'
                            style={{
                                width: "80%",
                                color: COLORS.blue
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.blue
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.blue,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.blue}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                color: COLORS.blue
                            }}
                            onChangeText={(text) => handleInputChange('password', text)}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {isPasswordShown ? (
                                <Ionicons name="eye-off" size={24} color={COLORS.blue} />
                            ) : (
                                <Ionicons name="eye" size={24} color={COLORS.blue} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.blue
                    }}>Confirm Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.blue,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Confirm your password'
                            placeholderTextColor={COLORS.blue}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                color: COLORS.blue
                            }}
                            onChangeText={(text) => handleInputChange('confirmPassword', text)}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {isPasswordShown ? (
                                <Ionicons name="eye-off" size={24} color={COLORS.blue} />
                            ) : (
                                <Ionicons name="eye" size={24} color={COLORS.blue} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={formData.agreeToTerms}
                        onValueChange={(value) => handleInputChange('agreeToTerms', value)}
                        color={formData.agreeToTerms ? COLORS.blue : undefined}
                    />
                    <Text style={{ color: COLORS.blue }}>I agree to the terms and conditions</Text>
                </View>

                <Button
                    title="Sign Up"
                    filled
                    onPress={handleSubmit}
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.darkblue,
                        borderColor: COLORS.white,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.blue,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14, color: COLORS.blue}}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.blue,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    Color: COLORS.blue
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.blue,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{
                        color: COLORS.blue
                    }}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => Linking.openURL('http://localhost:3000/auth/google')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.blue,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{
                        color: COLORS.blue
                    }}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue,
                            fontWeight: "bold",
                            marginLeft: -103,
                            marginTop: -15,
                            textDecorationLine: 'underline',
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Signup;