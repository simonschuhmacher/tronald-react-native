import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import QuotesListView from '../views/quotes-list/QuoteListView'
import sampleQuoteResponse from '../model/SampleQuoteResponse.json'
import { QuoteResponse } from '../model/quote'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function DetailScreen() {
    const sampleResponse: QuoteResponse = sampleQuoteResponse
    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <QuotesListView quotes={sampleResponse._embedded.quotes}></QuotesListView>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
