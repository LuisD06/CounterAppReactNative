import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const FloatingActionButton = ({ title, onPress, position = 'br' }: Props) => {

    console.log(Platform.OS);
    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                onPress={onPress}
                style={[
                    styles.bottom, 
                    position === 'bl'? styles.left : styles.right
                ]}
            >
                <View style={styles.floatingButton}>
                    <Text style={styles.floatingButtonText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const android = () => {
        return (
            <View 
                style={[
                    styles.bottom, 
                    position === 'bl'? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={ TouchableNativeFeedback.Ripple('#28425b', true, 30)}
                >
                    <View style={styles.floatingButton}>
                        <Text style={styles.floatingButtonText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    return ( Platform.OS === 'ios' ) ? ios() : android();
}
const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    floatingButton: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    floatingButtonText: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
});
