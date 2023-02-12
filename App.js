import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useForm } from 'react-hook-form';
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { FormBuilder } from 'react-native-paper-form-builder';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

const HomeScreen = () => {

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>New User 👋</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'name',
              type: 'text',
              textInputProps: {
                label: 'Name',
              },
              rules: {
                required: {
                  value: true,
                  message: 'Name is required',
                },
              },
            },
            {
              name: 'pronouns',
              type: 'text',
              textInputProps: {
                label: 'Pronouns',
              },
              rules: {
                required: {
                  value: true,
                  message: 'Pronouns are required',
                },
              },
            },
            {
              type: 'email',
              name: 'email',

              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              },
              textInputProps: {
                label: 'Email',
              },
            },
            {
              type: 'text',
              name: 'Zipcode',

              rules: {
                required: {
                  value: true,
                  message: 'Zipcode is required',
                },
                pattern: {
                  value:
                    /^\d{5}(?:[-\s]\d{4})?$/,
                  message: 'Zipcode is invalid',
                },
              },
              textInputProps: {
                label: 'Zip Code',
              },
            },

          ]}
        />
        <Button
          title='Submit'
          mode={'contained'}
          onPress={handleSubmit((data) => {
            console.log('form data', data);
          })}>

        </Button>
      </ScrollView>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings could go here</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Found"
            component={HomeScreen}
            options={{ tabBarIcon: makeIconRender("home") }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ tabBarIcon: makeIconRender("cog") }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
