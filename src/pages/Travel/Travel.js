import React, { useEffect, useRef, useState } from "react"
import { StatusBar, PermissionsAndroid, Pressable } from "react-native"

import View from '../../components/custom/View'
import Text from '../../components/custom/Text'
import Button from '../../components/custom/Button'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Geolocation from 'react-native-geolocation-service'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import styles from "./Travel.style"

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const Travel = () => {

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(0)

    const map = useRef(null)

    const [location, setLocation] = useState({
        from: null,
        to: null
    })

    const [initialCoordinates, setInitialCoordinates] = useState({
        long: 0,
        lat: 0
    })

    const [isPolyLine, setIsPolyLine] = useState(false)

    console.log(initialCoordinates)

    async function requestLocationPermission(){
        try {
            const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Pooly App',
                        'message': "Pooly'nin konumunu kullanması gerekiyor."
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true
                } else {
                    return false
                }
        } catch (err) {
            console.warn(err)
        }
    }

    useEffect(() => {
        if (requestLocationPermission()) {
            Geolocation.getCurrentPosition(
                (position) => {
                  setInitialCoordinates({
                      long: position.coords.longitude,
                      lat: position.coords.latitude
                  })
                },
                (error) => {
                  // See error code charts below.
                  console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }, [])

    useEffect(() => {
        console.log(location);
    }, [location])

    useEffect(() => {
        if(!location.from && !location.to) {
            map.current.animateToRegion({
                latitude: initialCoordinates.lat,
                longitude: initialCoordinates.long,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0221,
            }, 2000)
        }
        if(location.from != null && location.to == null) {
            map.current.animateToRegion({
                latitude: location.from.lat,
                longitude: location.from.lng,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0221,
            }, 2000)
        }
        if(location.from == null && location.to != null) {
            map.current.animateToRegion({
                latitude: location.to.lat,
                longitude: location.to.lng,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0221,
            }, 2000)
        }
        if(location.from != null && location.to != null) {
            setIsPolyLine(true)
            setPrice(23)
            map.current.animateToRegion({
                latitude: location.to.lat,
                longitude: location.to.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0821,
            }, 2000)
        }
    }, [initialCoordinates, location])

    return(
        <View>
            <StatusBar backgroundColor="#5AA3FB" barStyle="light-content" />
            <View>
                <View style={styles.travel_route}>
                    <View style={styles.travel_route_container}>
                        <Text style={styles.from_subtitle}>Nereden:</Text>
                        <View style={styles.from_search_place}>
                            <GooglePlacesAutocomplete
                                placeholder='Ara'
                                fetchDetails
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    setLocation({...location, from: {...data, ...details.geometry.location}})
                                }}
                                query={{
                                    key: 'AIzaSyCcCME3wDVb0-K1ldp96NuV18jx-xTTtjo',
                                    language: 'tr',
                                }}
                                listUnderlayColor="#5AA3FB"
                                styles={{
                                    textInput: {
                                        color: '#5AA3FB',
                                        fontSize: 14
                                    },
                                    listView: {
                                        color: '#5AA3FB',
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        paddingTop: 0
                                    },
                                    separator: {
                                        height: 0
                                    },
                                    powered: {
                                        display: 'none'
                                    },
                                    poweredContainer: {
                                        display: 'none'
                                    }
                                }}
                                renderRow={(rowData) => {
                                    const title = rowData.structured_formatting.main_text;
                                    const address = rowData.structured_formatting.secondary_text;
                                    return (
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 12 }}>{`${title} `}</Text>
                                        <Text style={{ fontSize: 12 }}>{address}</Text>
                                    </View>
                                    );
                                    }}
                                textInputProps={{
                                    placeholderTextColor: '#d8d8d8',
                                }}
                            />
                        </View>
                        <Text style={styles.to_subtitle}>Nereye:</Text>
                        <View style={styles.to_search_place}>
                            <GooglePlacesAutocomplete
                                placeholder='Ara'
                                fetchDetails
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    setLocation({...location, to: {...data, ...details.geometry.location}})
                                }}
                                query={{
                                    key: 'AIzaSyCcCME3wDVb0-K1ldp96NuV18jx-xTTtjo',
                                    language: 'tr',
                                }}
                                listUnderlayColor="#5AA3FB"
                                styles={{
                                    textInput: {
                                        color: '#5AA3FB',
                                        fontSize: 14
                                    },
                                    listView: {
                                        color: '#5AA3FB',
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        paddingTop: 0
                                    },
                                    separator: {
                                        height: 0
                                    },
                                    powered: {
                                        display: 'none'
                                    },
                                    poweredContainer: {
                                        display: 'none'
                                    }
                                }}
                                renderRow={(rowData) => {
                                    const title = rowData.structured_formatting.main_text;
                                    const address = rowData.structured_formatting.secondary_text;
                                    return (
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 12 }}>{`${title} `}</Text>
                                        <Text style={{ fontSize: 12 }}>{address}</Text>
                                    </View>
                                    );
                                    }}
                                textInputProps={{
                                    placeholderTextColor: '#d8d8d8',
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ zIndex: -2 }}>
                    <MapView
                        ref={map}
                        style={{flex: 1, zIndex: -2}}
                        initialRegion={
                            {
                                latitude: initialCoordinates.lat,
                                longitude: initialCoordinates.long,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }
                        }
                    >
                        {
                            isPolyLine && (
                                <MapViewDirections
                                    origin={`place_id:${location.from.place_id}`}
                                    destination={`place_id:${location.to.place_id}`}
                                    apikey={"AIzaSyCcCME3wDVb0-K1ldp96NuV18jx-xTTtjo"}
                                    strokeWidth={5}
                                    strokeColor="hotpink"
                                />
                            )
                        }
                    </MapView>
                    <View style={styles.bottom_bar}>
                        <View style={styles.bottom_bar_inner}>
                            <Pressable onPress={() => setCount(count-1)} style={styles.pressable}><Text style={styles.pressable_text_decrement}>-</Text></Pressable>
                            <Text style={styles.count}>{count}</Text>
                            <Pressable style={styles.pressable} onPress={() => setCount(count+1)}><Text style={styles.pressable_text}>+</Text></Pressable>
                            <Button isDisabled style={styles.button}>{Math.round(price/count)}</Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Travel