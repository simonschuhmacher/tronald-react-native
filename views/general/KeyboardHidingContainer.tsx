import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'

export default function KeyboardHidingView(props: { children: React.ReactNode }) {
    return Platform.OS !== 'web' ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{props.children}</TouchableWithoutFeedback>
    ) : (
        <>{props.children}</>
    )
}
