import { StatusBar } from 'expo-status-bar'
import { StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SearchInput from '../views/search/SearchInput'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import KeyboardHidingView from '../views/general/KeyboardHidingContainer'

export default function SearchScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Search'>) {
    const safeAreaInsets = useSafeAreaInsets()
    const headerHeight = useHeaderHeight()

    return (
        <KeyboardHidingView>
            <KeyboardAvoidingView
                style={{
                    ...styles.container,
                    marginTop: safeAreaInsets.top + headerHeight,
                    marginBottom: safeAreaInsets.bottom,
                    marginLeft: safeAreaInsets.left,
                    marginRight: safeAreaInsets.right,
                }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <SearchInput
                    onSubmit={query => navigation.navigate('Quotes', { query })}
                    placeholder="Search..."
                ></SearchInput>
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        </KeyboardHidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
