import { StyleSheet, Dimensions } from "react-native"
import Fonts from "../../static/constants/Fonts"

const DEVICE_WIDTH = Dimensions.get("screen").width
const DEVICE_HEIGHT = Dimensions.get("screen").height

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo_container: {
        flex: 0,
        width: DEVICE_WIDTH * 0.96,
        alignItems: 'center'
    },
    image: {
        height: 240,
        width: DEVICE_WIDTH * 0.96,
        marginTop: 24
    },
    text_container: {
        /*
        borderWidth: 1,
        borderColor: 'orange',
        */
        flex: 1,
        height: 240,
        width: DEVICE_WIDTH * 0.96,
    },
    text: {
        fontFamily: Fonts.OpenSans.SemiBold,
        fontSize: 24,
        textAlign: 'center'
    },
    subtext: {
        fontFamily: Fonts.OpenSans.Bold,
        color: '#5AA3FB'
    },
    button_group_container: {
        flex: 0,
        width: DEVICE_WIDTH * 0.96,
        bottom: 0,
        height: 126
    },
    button_container: {
        flex: 0,
        marginBottom: 15
    }
})

export default styles