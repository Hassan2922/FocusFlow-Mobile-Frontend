import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import COLORS from '../constants/colors';

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Replace 'your-api-login-endpoint' with the actual login endpoint
      const response = await fetch('http://192.168.162.183:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Navigate to the Home screen upon successful login
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure, show an error message, etc.
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.blue
          }}>
            Hi Welcome Back ! 👋
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color: COLORS.blue,
          }}>Email address</Text>

          <View style={{
            width: '100%',
            height: 48,
            borderColor: COLORS.blue,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your email address'
              placeholderTextColor={COLORS.blue}
              keyboardType='email-address'
              style={{
                width: '100%',
                color: COLORS.blue
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color: COLORS.blue,
          }}>Password</Text>

          <View style={{
            width: '100%',
            height: 48,
            borderColor: COLORS.blue,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.blue}
              secureTextEntry={isPasswordShown}
              style={{
                width: '100%',
                color: COLORS.blue
              }}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 12
              }}
            >
              {
                isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.blue} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.blue} />
                )
              }
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          marginVertical: 6
        }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.blue : undefined}
          />

          <Text style={{
            color: COLORS.blue,
          }}>Remember Me.</Text>
        </View>

        <Button
          title="Login"
          filled
          onPress={handleLogin}
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
          <Text style={{ fontSize: 14, color: COLORS.blue }}>Or Login with</Text>
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
          justifyContent: 'center'
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
          <Text style={{ fontSize: 16, color: COLORS.blue }}>Don't have an account ? </Text>
          <Pressable
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.blue,
              fontWeight: "bold",
              marginLeft: 6,
              textDecorationLine: 'underline',
            }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;