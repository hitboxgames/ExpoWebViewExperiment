import { View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { useState } from "react";

export default function HomeScreen() {
  const [url, setUrl] = useState("https://www.sitebrew.ai/");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop:
          url === "https://www.sitebrew.ai/" ||
          url === "https://www.sitebrew.ai/create"
            ? 20
            : 0,
        backgroundColor:
          url === "https://www.sitebrew.ai/" ||
          url === "https://www.sitebrew.ai/create"
            ? "white"
            : "transparent",
      }}
    >
      <WebView
        source={{ uri: "https://www.sitebrew.ai/" }}
        style={{ flex: 1 }}
        onNavigationStateChange={(navState) => {
          setUrl(navState.url);
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
}
