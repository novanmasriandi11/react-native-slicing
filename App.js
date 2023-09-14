import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CardProfileComponent } from "./components/CardProfileComponent";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{justifyContent:"center", flex:1, padding:20 }}>
        <CardProfileComponent/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}