import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Quote } from '../../model/quote'
import { parseDate } from '../../utils/parse'
import QuoteMetaItem from './QuoteMetaItem'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function QuoteDetailView({ quote }: { quote: Quote }) {
    const safeAreaInsets = useSafeAreaInsets()
    const date = parseDate(quote.appeared_at)
    const author = quote._embedded.author[0]?.name
    const sourceUrl = quote._embedded.source[0]?.url

    return (
        <ScrollView
            style={{ ...styles.container, paddingLeft: safeAreaInsets.left, paddingRight: safeAreaInsets.right }}
            contentContainerStyle={styles.contentContainer}
            contentInsetAdjustmentBehavior="automatic"
        >
            <Text style={styles.value}>
                <Text style={styles.quotes}>“ </Text>
                {quote.value}
                <Text style={styles.quotes}> ”</Text>
            </Text>

            <View style={styles.separator}>
                <View style={styles.separatorInner} />
            </View>

            {author && <QuoteMetaItem title="Author:" value={author} />}
            <QuoteMetaItem title="Date:" value={date} />
            {sourceUrl && <QuoteMetaItem title="Source:" value={sourceUrl} isURL={true} />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 4,
    },
    value: {
        fontFamily: 'Lora-Medium',
        fontSize: 28,
        marginBottom: 16,
    },
    separator: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginVertical: 24,
    },
    separatorInner: {
        backgroundColor: 'lightgray',
        width: '100%',
        maxWidth: 160,
        height: 2,
    },
    quotes: {
        fontFamily: 'Lora-SemiBold',
        color: 'lightgray',
    },
})
