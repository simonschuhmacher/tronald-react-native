import { Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function QuotesListFooter({ text }: { text: string }) {
    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <Text
                style={{
                    ...styles.text,
                    bottom: -insets.bottom - 20,
                }}
            >
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 16,
        right: 16,
    },
    text: {
        fontFamily: 'Inter-SemiBold',
        textAlign: 'center',
        color: 'gray',
        paddingVertical: 22,
    },
})
