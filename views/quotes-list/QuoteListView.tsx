import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Quote } from '../../model/quote'
import ListSeparator from './ListSeparator'
import QuoteItem from './QuoteItem'
import QuotesListFooter from './QuoteListFooter'

export default function QuotesListView({ quotes }: { quotes: Quote[] }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={quotes}
                renderItem={({ item }) => <QuoteItem quote={item}></QuoteItem>}
                ItemSeparatorComponent={ListSeparator}
                contentInsetAdjustmentBehavior="automatic"
                ListFooterComponent={<QuotesListFooter text="🤡🍊" />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
