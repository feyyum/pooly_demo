import { Dimensions, StyleSheet } from "react-native"
import Fonts from "../../static/constants/Fonts"

const DEVICE_WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    title_container: {
        width: DEVICE_WIDTH * 0.96,
        left: DEVICE_WIDTH * 0.02,
        flex: 0,
        marginVertical: 16,
    },
    title: {
        color: '#5AA3FB',
        fontFamily: Fonts.OpenSans.Bold,
        fontSize: 24
    },
    button_area: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        marginBottom: 16, 
        width: DEVICE_WIDTH * 0.96,
    }
})

export default styles