import { StyleSheet, Dimensions } from "react-native"
import Fonts from "../../../static/constants/Fonts"

const DEVICE_WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    input_container: {
        flex: 0,
        position: 'relative',
        width: DEVICE_WIDTH * 0.96,
        left: DEVICE_WIDTH * 0.02,
        marginBottom: 16,
    },
    label: {
        fontFamily: Fonts.OpenSans.Medium,
        color: '#5AA3FB',
        fontSize: 15
    },
    input: {
        borderColor: '#D9D7D7',
        borderWidth: 1,
        marginTop: 4,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 15,
        color: '#5AA3FB'
    }
})

export default styles