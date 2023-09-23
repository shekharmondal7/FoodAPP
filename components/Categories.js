import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";
import { Image } from "react-native-feather";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((categorie, index) => {
          let isActive = categorie.id == activeCategory;
          let btnClass = isActive? 'bg-gray-600':'bg-gray-200';
          let textClass = isActive? 'font-semibold text-gray-800':'text-gray-500';
          return (
            <View key={index} className="flex justify-center items-center m-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(categorie.id)}
                className={"p-1 rounded-full shadow bg-gray-200"+btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={categorie.image}
                />
              </TouchableOpacity>
                <Text className={"text-sm"+textClass}>{categorie.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
