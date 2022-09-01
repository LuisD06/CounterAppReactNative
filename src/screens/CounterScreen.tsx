import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Counter: { counter }
            </Text>
            <FloatingActionButton 
                title='+1'
                onPress={() => setCounter(counter + 1)}
            />
            <FloatingActionButton 
                title='-1'
                onPress={() => setCounter(counter - 1)}
                position='bl'
            />
            {/* <TouchableOpacity
                style={styles.bottomL}
                onPress={}
            >
                <View 
                    style={styles.floatingButton}
                >
                    <Text 
                        style={styles.floatingButtonText}
                    >
                        - 1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -40
    },
    
});
