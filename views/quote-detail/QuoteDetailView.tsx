import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Quote } from '../../model/quote'
import { parseDate } from '../../utils/parse'

export default function QuoteDetailView({ quote }: { quote: Quote }) {
    const date = parseDate(quote.appeared_at)
    const sourceUrl = quote._embedded.source[0]?.url

    return (
        <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.value}>
                <Text style={styles.quotes}>“ </Text>
                {quote.value}
                <Text style={styles.quotes}> ”</Text>
            </Text>
            <View style={{ height: 16 }} />
            <View style={styles.metaItem}>
                <Text style={styles.metaTitle}>
                    Author: <Text style={styles.metaValue}>{quote._embedded.author[0]?.name}</Text>
                </Text>
            </View>
            <View style={styles.metaItem}>
                <Text style={styles.metaTitle}>
                    Date: <Text style={styles.metaValue}>{date}</Text>
                </Text>
            </View>
            {sourceUrl && (
                <View style={styles.metaItem}>
                    <Text style={styles.metaTitle}>
                        Source: <Text style={styles.metaValue}>{sourceUrl}</Text>
                    </Text>
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    metaItem: {
        marginTop: 8,
    },
    metaTitle: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 18,
    },
    metaValue: {
        fontFamily: 'Inter-Bold',
        fontSize: 18,
    },
    value: {
        fontFamily: 'Lora-Medium',
        fontSize: 18,
    },
    date: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
        textAlign: 'right',
        color: 'gray',
        paddingTop: 4,
    },
    quotes: {
        fontFamily: 'Lora-SemiBold',
        color: 'lightgray',
    },
})
