import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { Quote } from '../../model/quote'
import ListSeparator from './ListSeparator'
import QuoteItem from './QuoteItem'
import QuotesListFooter from './QuoteListFooter'

export default function QuotesListView(props: { quotes: Quote[]; onSelect: (quote: Quote) => void }) {
    const quotes = props.quotes
    const onSelect = props.onSelect
    return (
        <FlatList
            data={quotes}
            renderItem={({ item }) => (
                <Pressable onPress={() => onSelect(item)}>
                    <QuoteItem quote={item}></QuoteItem>
                </Pressable>
            )}
            ItemSeparatorComponent={ListSeparator}
            contentInsetAdjustmentBehavior="automatic"
            ListFooterComponent={<QuotesListFooter text="🤡🍊" />}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
