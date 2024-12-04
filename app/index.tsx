import { Text, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

export default function Index() {
  const { box } = UnistylesRuntime.getTheme();
  const sv = useSharedValue(0);

  const boxStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(sv.value, [0, 1], [box, "#00ff00"]), // output color doesn't matter here for the reproducer purpose
  }));

  return (
    <View style={s.wrapper}>
      <Animated.View style={[s.box, boxStyle]} />
    </View>
  );
}

const s = StyleSheet.create((theme) => ({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.background,
  },

  box: {
    width: 100,
    height: 100,
  },
}));
