import React from "react"
import { View } from "react-native"

import styles from "./View.style"

const ViewComponent = ({  children, style }) => {
    return(
        <View style={{...styles.container, ...style}}>{ children }</View>
    )
}

export default ViewComponent