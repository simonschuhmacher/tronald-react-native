import { useState } from 'react'
import { TextInput, StyleSheet, View, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CORNER_RADIUS = 10

export default function SearchInput(props: {
    onSubmit: (value: string) => void
    initialValue?: string
    placeholder?: string
}) {
    const [text, setText] = useState(props.initialValue ?? '')

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder={props.placeholder}
                onSubmitEditing={() => props.onSubmit(text)}
                returnKeyType="search"
            />
            <Pressable onPress={() => props.onSubmit(text)} style={styles.button}>
                <Feather name="search" size={24} style={styles.buttonContent} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        margin: 16,
        padding: 0,
        borderWidth: 1,
        borderRadius: CORNER_RADIUS,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        maxWidth: 240,
        margin: 0,
        padding: 8,
        fontSize: 22,
        fontFamily: 'Inter-SemiBold',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 4,
        borderRadius: CORNER_RADIUS,
    },
    buttonContent: {
        color: 'white',
        padding: 10,
    },
    inputAccessoryViewInner: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
})
