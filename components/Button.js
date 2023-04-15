import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    ></TouchableOpacity>
  );
};

// that way we can add more then one button with export default we can add only one button
export const ReactButton = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};
