import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './src/HomeTabScreen';
import ListTabScreen from './src/screen/ListTabScreen';
import AddListScreen from './src/screen/AddListScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import SetingsTabScreen from './src/screen/SettingsTabScreen'
import Button from './src/components/atoms/Button';
import LinearGradient from 'react-native-linear-gradient';
import ColorPalette from './src/screen/Deneme/ColorPalette';
import FontFamily from './src/screen/Deneme/FontFamily';
import ListDetailScreen from './src/screen/List/ListDetailScreen';
import TryAllTabScreen from './src/screen/TryAllTabScreen';
import GetKeyScreen from './src/screen/TRY/GetKeyScreen';
import DotsVertical from './src/components/atoms/DotsVertical';
import EditListScreen from './src/screen/List/EditListScreen';
import GetUserKeyScreen from './src/screen/TRY/GetUserKeyScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
    }}>
        <Stack.Screen name="Home" component={HomeTabScreen} 
        options={{
            headerStyle:styles.headerStyles, 
            headerTitleAlign: 'center',
            headerTintColor: 'black',
          }}>
          </Stack.Screen>
    </Stack.Navigator>
) 
const ListStack = () => {
    return (
        <Stack.Navigator screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}>
            <Stack.Screen name="Listelerim" component={ListTabScreen} options={{ headerTitleAlign: 'center',
            
            }}></Stack.Screen>
              <Stack.Screen name="Liste Detayı" component={ListDetailScreen} 
              // initialParams={{ listId: liste }}
              options={{ headerTitleAlign: 'center',
              // headerRight:()=>(
              //   <DotsVertical/>
              // ),
            }}>
            </Stack.Screen>
            <Stack.Screen name="Liste Düzenle" component={EditListScreen} options={{ headerTitleAlign: 'center',
            }} />
        </Stack.Navigator>
    );
}
const AddListStack = () => (
    <Stack.Navigator screenOptions={{
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
    }}>
        <Stack.Screen name="Liste Ekle" component={AddListScreen} options={{ headerTitleAlign: 'center',
            }} />

        
    </Stack.Navigator>
)
const SettingsStack = () => (
    <Stack.Navigator screenOptions={{
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
    }}>
        <Stack.Screen name="SettingTab" component={SetingsTabScreen}  options={{ headerTitleAlign: 'center',
            }}/>
    
    </Stack.Navigator>
)

const TryStack = () => (
  <Stack.Navigator screenOptions={{
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
  }}>
    <Stack.Screen name='Try' component={TryAllTabScreen} options={{ headerTitleAlign: 'center',
            }} />
    <Stack.Screen name='GetKey' component={GetKeyScreen} options={{ headerTitleAlign: 'center',
            }} />
            <Stack.Screen name="ColorPalette" component={ColorPalette} options={{ headerTitleAlign: 'center',
            }}/>
    <Stack.Screen name="FontFamily" component={FontFamily}  options={{ headerTitleAlign: 'center',
            }}/>
            <Stack.Screen name="GetUser" component={GetUserKeyScreen}  options={{ headerTitleAlign: 'center',
            }}/>
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
        
        <Tab.Navigator screenOptions={styles.tabBarStyles}
        >
    {/* <Tab.Screen name="Hom" component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" color={color} size={22} />
          ),
        }}/> */}

<Tab.Screen name="ListelerimMy" component={ListStack} 
        options={{
          tabBarLabel: 'Listeler',
          tabBarIcon: ({ color, size }) => (
            <Icon name="format-list-group" color={color} size={22} />
          ),
          headerStyle: styles.tabscreenHeaderStyle,
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerTitleStyle:{fontFamily: 'Ubuntu-Medium'},
          headerShown: false,
        }}
        />

        <Tab.Screen name="ADD LİST" component={AddListStack} 
        options={{
          tabBarLabel: 'Liste Ekle',
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-thick" color={color} size={25} />
          ),
          headerStyle: styles.tabscreenHeaderStyle,
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerShown: false,
            
        }}/>

        <Tab.Screen name="Settings" component={SettingsStack} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-settings" color={color} size={22} />
          ),
          headerStyle: styles.tabscreenHeaderStyle,
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerShown: false,

        }}/>
        <Tab.Screen name="TryTab" component={TryStack} 
        options={{
          tabBarLabel: 'TryTab',
          tabBarIcon: ({ color, size }) => (
            <Icon name="file" color={color} size={22} />
          ),
          headerStyle: styles.tabscreenHeaderStyle,
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerShown: false,

        }}/>

        </Tab.Navigator>

        <SafeAreaView>
          {/* <BannerAd
            size={BannerAdSize.BANNER}
            unitId="ca-app-pub-7538406758481338/9481115604"  
            onAdLoaded={() => {
            //   console.log('Advert loaded');
            }}
            onAdFailedToLoad={error => {
              // console.error('Advert failed to load: ', error);
            }}
          /> */}
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   tabscreenHeaderStyle:{
    // borderBottomLeftRadius: 100, 
    // borderBottomRightRadius: 100,
    backgroundColor: '#ffd6ff',
   },
   tabBarStyles:{
      tabBarActiveTintColor: '#c8b6ff',
      tabBarInactiveTintColor: '#b8c0ff',
      tabBarActiveBackgroundColor: '#bbd0ff',
      // tabBarInactiveBackgroundColor: 'pink',
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        marginBottom: 20,
        borderRadius: 30,
        marginHorizontal: 10,
        height: 60,
        backgroundColor: '#ffd6ff',
        overflow: 'hidden',
      },
      tabBarLabelStyle: {
        fontSize: 16,
      },
      tabBarIconStyle: {
        flex: 3
      },
    },
    header: {
      backgroundColor: '#ffd6ff',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitle: {
      alignItems: 'center',
    },
    });