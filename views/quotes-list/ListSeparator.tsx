import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function ListSeparator() {
    const safeAreaInsets = useSafeAreaInsets()
    return (
        <View style={{ paddingLeft: safeAreaInsets.left, paddingRight: safeAreaInsets.right }}>
            <View style={styles.container} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        backgroundColor: 'lightgray',
        height: 1,
    },
})
