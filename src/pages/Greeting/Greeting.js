import React from "react"
import { Image } from "react-native"

// Import Custom Component
import View from "../../components/custom/View"
import Text from "../../components/custom/Text"
import Button from "../../components/custom/Button"

// Import Style
import styles from './Greeting.style'

const Greeting = ({ navigation: { navigate } }) => {

    const handleButton = () => {
        navigate('Form')
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image 
                    style={styles.image} 
                    source={require('../../static/logo/logo.png')}
                    resizeMode="cover"    
                />
            </View>
            <View style={styles.text_container}>
                <Text style={styles.text}>A noktasından B noktasına ulaşmanın en {<Text style={styles.subtext}>ekonomik</Text>} ve {<Text style={styles.subtext}>sosyal</Text>} yolu.</Text>
            </View>
            <View style={styles.button_group_container}>
                <View style={styles.button_container}>
                    <Button callback={handleButton} customHitSlop={20}>Yolcuyum 💥</Button>
                </View>
                <View style={styles.button_container}>
                    <Button callback={handleButton} isDisabled customHitSlop={20}>Sürücüyüm</Button>
                </View>
            </View>
        </View>
    )
}

export default Greeting