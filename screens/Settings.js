import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  FONTS } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import { EditProfile } from "../screens";
import COLORS from '../constants/colors';

const Settings = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const navigateToSecurity = () => {
    console.log('Security function');
  };

  const navigateToNotifications = () => {
    console.log('Notifications function');
  };

  const navigateToPrivacy = () => {
    console.log('Privacy function');
  };

  const navigateToSubscription = () => {
    console.log('Subscription function');
  };

  const navigateToSupport = () => {
    console.log('Support function');
  };

  const navigateToTermsAndPolicies = () => {
    console.log('Terms and Policies function');
  };

  const navigateToFreeSpace = () => {
    console.log('Free Space function');
  };

  const navigateToDateSaver = () => {
    console.log('Date saver');
  };

  const navigateToReportProblem = () => {
    console.log('Report a problem');
  };

  const addAccount = () => {
    console.log('Add account');
  };

  const logout = () => {
    console.log('Logout');
  };

  const accountItems = [
    { icon: 'person-outline', text: 'Edit Profile', action: navigateToEditProfile },
    { icon: 'security', text: 'Security', action: navigateToSecurity },
    { icon: 'notifications-none', text: 'Notifications', action: navigateToNotifications },
    { icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy },
  ];

  const supportItems = [
    { icon: 'credit-card', text: 'My Subscription', action: navigateToSubscription },
    { icon: 'help-outline', text: 'Help & Support', action: navigateToSupport },
    { icon: 'info-outline', text: 'Terms and Policies', action: navigateToTermsAndPolicies },
  ];

  const cacheAndCellularItems = [
    { icon: 'delete-outline', text: 'Free up space', action: navigateToFreeSpace },
    { icon: 'save-alt', text: 'Date Saver', action: navigateToDateSaver },
    { icon: 'backup', text: 'Backup Data', action: () => console.log('Backup Data') },
    { icon: 'restore', text: 'Restore Data', action: () => console.log('Restore Data') },
    { icon: 'developer-mode', text: 'Developer Options', action: () => console.log('Developer Options') },
  ];

  const actionsItems = [
    { icon: 'outlined-flag', text: 'Report a problem', action: navigateToReportProblem },
    { icon: 'people-outline', text: 'Add Account', action: addAccount },
    { icon: 'logout', text: 'Log out', action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.lightgray,
      }}
    >
      <MaterialIcons name={icon} size={24} color={COLORS.blue} />
      <Text style={{ marginLeft: 36, ...FONTS.semiBold, fontWeight: 600, fontSize: 16, color: COLORS.blue }}>
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.gray,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.blue} />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3, color: COLORS.blue }}>Settings</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12, paddingBottom: 20 }}>
        {/* Account Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10, color: COLORS.blue }}>Account</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Support and About settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 , color: COLORS.blue}}>Support & About </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Cache & Cellular */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 ,color: COLORS.blue}}>Cache & Cellular </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}
        <View style={{ marginBottom: 72 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10,color: COLORS.blue }}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
