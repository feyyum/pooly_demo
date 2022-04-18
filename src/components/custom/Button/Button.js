import React from 'react'
import { Pressable, Vibration, StyleSheet } from 'react-native'

// Import Constants
import Fonts from '../../../static/constants/Fonts'

// Import Custom Text
import Text from '../Text'

const Button = (props) => {
    
    const handlePress = () => {
        Vibration.vibrate(16)
        if(props.callback) props.callback()
    }

    const detectStyle = () => {
        return props.isDisabled ? {...styles.disabledButton, ...props.style} : {...styles.button, ...props.style}
    }
    
    return(
        <Pressable
            disabled={props.isDisabled ? props.isDisabled : false}
            onPress={handlePress}
            style={detectStyle}
            hitSlop={props.customHitSlop ? props.customHitSlop : 12}
        >
            <Text>{props.children ? 
                (
                    <Text style={props.isDisabled ? styles.disabledButtonText : styles.buttonText}>{props.children}</Text>
                ) : (
                    <Text style={props.isDisabled ? styles.disabledButtonText : styles.buttonText}>Devam Et</Text>
                )
            }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        width: '100%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#5AA3FB'
    },
    disabledButton: {
        width: '100%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#d9d9d9'
    },
    buttonText: {
        fontFamily: Fonts.OpenSans.Bold,
        fontSize: 14,
        color: '#ffffff'
    },
    disabledButtonText: {
        fontFamily: Fonts.OpenSans.Bold,
        fontSize: 14,
        color: '#858585'
    }
})

export default Button