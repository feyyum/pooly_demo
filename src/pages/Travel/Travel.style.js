import { Dimensions, StyleSheet } from 'react-native'

// Import Constants
import Fonts from '../../static/constants/Fonts'

const DEVICE_WIDTH = Dimensions.get("screen").width

const styles = StyleSheet.create({
    travel_route: {
        flex: 0,
        height: 196,
        backgroundColor: "#5AA3FB" 
    },
    travel_route_container: {
        backgroundColor: "#5AA3FB",
        width: DEVICE_WIDTH * 0.96,
        left: DEVICE_WIDTH * 0.02,
    },
    from_subtitle: {
        marginTop: 8,
        fontFamily: Fonts.OpenSans.Bold,
        color: '#ffffff',
        fontSize: 16
    },
    to_subtitle: {
        marginTop: 69,
        fontFamily: Fonts.OpenSans.Bold,
        color: '#ffffff',
        fontSize: 16
    },
    from_search_place: {
        flex: 0,
        marginTop: 8,
        maxHeight: 240,
        position: 'absolute',
        marginTop: 44,
        width: DEVICE_WIDTH * 0.96,
        borderRadius: 12,
        backgroundColor: 'transparent',
        zIndex: 3,
    },
    to_search_place: {
        flex: 0,
        marginTop: 8,
        maxHeight: 240,
        position: 'absolute',
        marginTop: 132,
        width: DEVICE_WIDTH * 0.96,
        borderRadius: 12,
        backgroundColor: 'transparent'
    },
    bottom_bar: {
        flex: 0,
        height: 80,
        backgroundColor: '#5AA3FB',
        justifyContent: 'center'
    },
    bottom_bar_inner: {
        flex: 0,
        width: DEVICE_WIDTH * 0.96,
        left: DEVICE_WIDTH * 0.02,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5AA3FB'
    },
    pressable_text: {
        fontFamily: Fonts.OpenSans.Extra_Bold,
        color: '#ffffff',
        fontSize: 24,
        flex: 0
    },
    pressable_text_decrement: {
        fontFamily: Fonts.OpenSans.Extra_Bold,
        color: '#ffffff',
        marginTop: -3,
        fontSize: 24
    },
    count: {
        fontFamily: Fonts.OpenSans.Bold,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 24,
        marginHorizontal: 16
    },
    button: {
        width: 81,
        marginLeft: 225
    }
})

export default styles