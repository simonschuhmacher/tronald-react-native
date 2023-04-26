import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, Alert } from 'react-native'
import QuotesListView from '../views/quotes-list/QuoteListView'
import { Quote } from '../model/quote'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useEffect, useState } from 'react'
import { searchQuote } from '../api/api'
import LoadingView from '../views/loading/LoadingView'
import NoResultsView from '../views/no-results/NoResultsView'

export default function QuoteListScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Quotes'>) {
    const searchQuery = route.params.query
    const [loading, setLoading] = useState(true)
    const [quotes, setQuotes] = useState<Quote[]>([])

    useEffect(() => {
        navigation.setOptions({ title: searchQuery })
        searchQuote(searchQuery)
            .then(response => setQuotes(response?._embedded?.quotes ?? []))
            .catch(alertError)
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.container}>
            {loading && <LoadingView />}
            {!loading && quotes.length == 0 && <NoResultsView query={searchQuery} />}
            {!loading && quotes.length > 0 && (
                <QuotesListView quotes={quotes} onSelect={quote => navigation.navigate('Quote', { quote })} />
            )}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

function alertError(error: unknown) {
    Alert.alert('Error Fetching Results', `${error}`, [{ text: 'OK' }])
}
