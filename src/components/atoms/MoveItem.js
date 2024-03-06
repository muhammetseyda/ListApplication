import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function MoveItem() {
  return (
    <View>
      <TouchableOpacity
                        onPress={() => moveInput(index, index - 1)} // Move up
                        style={styles.SortingTouch}>
                        <Text>
                            <Icon name="arrow-up-bold-circle" size={20} color="black" />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => moveInput(index, index + 1)} // Move down
                        style={styles.SortingTouch}>
                        <Text>
                            <Icon name="arrow-down-bold-circle" size={20} color="black" />
                        </Text>
                    </TouchableOpacity>
                               {/* {index !== inputs.length - 1 && (
        <TouchableOpacity onPress={() => removeInput(index)} style={styles.SortingTouch}>
          <Text>
            <Icon name="sort" size={20} color="black" />
          </Text>
        </TouchableOpacity>
      )} */}
    </View>
    
  )
}

const styles = StyleSheet.create({})