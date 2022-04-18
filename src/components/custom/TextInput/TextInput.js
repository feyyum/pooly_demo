import React from 'react'
import { TextInput } from 'react-native'

import styles from './TextInput.style'

import View from '../View'
import Text from '../Text'

const TextInputComponent = (props) => {
    return(
        <View style={styles.input_container}>
            <Text style={styles.label}>{props.question.question}</Text>
            <TextInput 
                style={styles.input}
                selectionColor='#5AA3FB'
                value={props.user[props.question.id] && props.user[props.question.id]}
                onChangeText={(e) => {
                    switch (props.question.id) {
                        case 0:
                            props.setUser(() => {
                                return { ...props.user, name_surname: e }
                            })
                            break
                        case 1:
                            props.setUser(() => {
                                return { ...props.user, age: parseInt(e) }
                            })
                            break
                        case 2:
                            props.setUser(() => {
                                return { ...props.user, university: e }
                            })
                            break
                        case 3:
                            props.setUser(() => {
                                return { ...props.user, department: e }
                            })
                            break
                        case 4:
                            props.setUser(() => {
                                return { ...props.user, email: e }
                            })
                            break
                    }       
                }}
                keyboardType={props.question.id == 1 ? "number-pad" : "default"}
            />
        </View>
    )
}

export default TextInputComponent