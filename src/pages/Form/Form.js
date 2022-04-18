import React, { useState } from "react"
import { KeyboardAvoidingView, Keyboard, Pressable } from "react-native"

// Import Custom Components
import Text from "../../components/custom/Text"
import TextInput from "../../components/custom/TextInput"
import View from "../../components/custom/View"
import Button from "../../components/custom/Button"

import styles from './Form.style'

const Questions = [
    {
        id: 0,
        question: "Adın ve Soyadın",
        type: "sting"
    },
    {
        id: 1,
        question: "Yaşın",
        type: "integer"
    },
    {
        id: 2,
        question: "Üniversiten",
        type: "string"
    },
    {
        id: 3,
        question: "Bölümün",
        type: "string"
    },
    {
        id: 4,
        question: "Üniversite E-Posta Adresin",
        type: "string"
    },

]

const Form = ({ navigation }) => {

    const [user, setUser] = useState({
        name_surname: "",
        age: 0,
        university: "",
        department: "",
        email: "",
    })

    const handleSubmit = () => {
        navigation.navigate("Travel", {...user})
        
    }

    return(
        <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
                keyboardVerticalOffset={35}
            >
                <Pressable onPress={() => {
                        Keyboard.dismiss()
                    }}
                    style={{flex:1}}
                >
                    <View>
                        <View style={styles.title_container}>
                            <Text style={styles.title}>Seni biraz tanıyalım</Text>
                        </View>
                        <View>
                            {
                                Questions.map((item, id) => (
                                    <TextInput key={id} question={item} user={user} setUser={setUser} />
                                ))
                            }
                            <View style={styles.button_area}>
                                <Button 
                                    callback={handleSubmit.bind(user)} 
                                    style={styles.button}
                                    isDisabled={user.name_surname != "" && user.university != "" && user.university != "" && user.email != "" && user.age != 0 ? false : true}
                                >Devam Et</Button>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Form