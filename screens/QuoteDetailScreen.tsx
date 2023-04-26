import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import QuoteDetailView from '../views/quote-detail/QuoteDetailView'

export default function QuoteDetailScreen({ route }: NativeStackScreenProps<RootStackParamList, 'Quote'>) {
    const quote = route.params.quote

    return (
        <View style={styles.container}>
            <QuoteDetailView quote={quote} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
