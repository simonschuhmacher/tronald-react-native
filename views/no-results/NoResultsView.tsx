import { View, Text, StyleSheet } from 'react-native'

export default function NoResultsView(props: { query?: string }) {
    return (
        <View style={styles.container}>
            {!props.query && <Text style={styles.text}>No results found</Text>}
            {props.query && <Text style={styles.text}>{`No results found for «${props.query}»`}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    text: {
        fontFamily: 'Inter-SemiBold',
        textAlign: 'center',
        color: 'gray',
        fontSize: 22,
    },
})
