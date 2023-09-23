import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function RestaurantCard({item}) {
  return (
    <TouchableWithoutFeedback>
    <View className="m-6 bg-white rounded-3xl shadow-lg">
      <Image className="h-36 w-64 rounded-t-3xl" source={item.Image}/>
    </View>
    </TouchableWithoutFeedback>
  )
}