import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnimationScreen() {

const Circle = ({ size = 100, color = 'black' }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
      }}
    />
  );
};
  return <SafeAreaView style={styles.Container}>
    <Text>My To Do</Text>
     <Circle />
    </SafeAreaView>;
// return <Text>Animation Screen</Text>;
}



const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  Container: {
    flexDirection: 'row',
    gap: 8,
  },
});
