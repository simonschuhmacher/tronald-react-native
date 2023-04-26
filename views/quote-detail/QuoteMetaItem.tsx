import { Text, StyleSheet, View, Linking } from 'react-native'

export default function QuoteMetaItem(props: { title: string; value: string; isURL?: boolean }) {
    const isURL = props.isURL ?? false

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}{' '}
                <Text
                    style={styles.value}
                    onPress={
                        isURL
                            ? () => {
                                  Linking.openURL(props.value)
                              }
                            : undefined
                    }
                >
                    {props.value}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 4,
    },
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: 18,
        color: 'gray',
    },
    value: {
        fontFamily: 'Inter-Medium',
        fontSize: 18,
        color: 'gray',
    },
})
