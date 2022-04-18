import React from "react"
import { Text } from "react-native"

import styles from "./Text.style"

const TextComponent = ({  children, style }) => {
    return(
        <Text style={{...styles.default, ...style}}>{ children }</Text>
    )
}

export default TextComponent