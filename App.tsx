import QuoteListScreen from './screens/QuoteListScreen'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SearchScreen from './screens/SearchScreen'
import { Quote } from './model/quote'
import QuoteDetailScreen from './screens/QuoteDetailScreen'

export type RootStackParamList = {
    Search: undefined
    Quotes: { query: string }
    Quote: { quote: Quote }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lora-Medium': require('./assets/fonts/Lora/Lora-Medium.ttf'),
        'Lora-SemiBold': require('./assets/fonts/Lora/Lora-Medium.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter/Inter-Medium.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerTitleStyle: {
                                fontFamily: 'Inter-SemiBold',
                            },
                            headerLargeTitleStyle: {
                                fontFamily: 'Inter-SemiBold',
                            },
                            headerBackTitleStyle: {
                                fontFamily: 'Inter-SemiBold',
                            },
                        }}
                    >
                        <Stack.Screen
                            name="Search"
                            component={SearchScreen}
                            options={{
                                headerLargeTitle: true,
                            }}
                        />
                        <Stack.Screen
                            name="Quotes"
                            component={QuoteListScreen}
                            options={{
                                headerLargeTitle: true,
                            }}
                        />
                        <Stack.Screen
                            name="Quote"
                            component={QuoteDetailScreen}
                            options={{
                                headerLargeTitle: true,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})
