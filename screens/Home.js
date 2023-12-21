import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Create, Messages, Profile, Settings, EditProfile } from "../screens";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, Fontisto, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendar } from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen((prevState) => !prevState);
  };

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: COLORS.lightgray,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="home"
              size={24}
              color={focused ? COLORS.white : COLORS.blue}
            />
          ),
        }}
        >
        {() => <HomeScreen onToggleCalendar={toggleCalendar} isCalendarOpen={isCalendarOpen} />}
      </Tab.Screen>
      
      <Tab.Screen
        name="Messages."
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={focused ? COLORS.white : COLORS.blue}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.gray,
                height: Platform.OS == "ios" ? 20 : 60,
                width: Platform.OS == "ios" ? 50 : 60,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 25 : 30,
                borderWidth: 2,
                borderColor: COLORS.blue,
              }}
            >
              <Fontisto name="plus-a" size={24} color={COLORS.blue} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={24}
              color={focused ? COLORS.white : COLORS.blue}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person-outline"
              size={24}
              color={focused ? COLORS.white : COLORS.blue}
            />
          ),
        }}
      />

      <Tab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person-outline"
              size={24}
              color={focused ? COLORS.white : COLORS.blue}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const YourScreenComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="YourScreen"
        component={YourScreenComponent}
        options={{
          title: 'Your Screen Title',
          headerLeft: () => (
            <View style={{ paddingLeft: 16 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Fontisto name="plus-a" size={24} color={COLORS.blue} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const HomeScreen = ({ onToggleCalendar, isCalendarOpen }) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={[COLORS.gray, COLORS.gray]}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={onToggleCalendar}>
          <MaterialCommunityIcons
            name="calendar"
            size={30}
            color={COLORS.blue}
            style={{ marginBottom: 40 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 36, fontWeight: '800', color: COLORS.blue }}>
          Welcome to FocusFlow.
        </Text>

        {/* Display the calendar conditionally based on the state */}
        {isCalendarOpen && (
          <View style={{ flex: 1 }}>
            <Calendar
              // Additional calendar props can be added here
              // For simplicity, I'm not including the full configuration
              onDayPress={(day) => console.log(day)}
            />
          </View>
        )}
      </View>
    </LinearGradient>
  );
};
export default BottomTabNav;
