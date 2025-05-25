import { Text } from "@/components/text";
import { SafeAreaView, View, Image } from "react-native";
import { Button } from "@/components/buttons";
import * as WebBrowser from  "expo-web-browser"
import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { ClerkAPIError } from "@clerk/types";
WebBrowser.maybeCompleteAuthSession()

export default function Index() {
  const {startSSOFlow} = useSSO()
  const [Error, setError] = useState<ClerkAPIError[]>([])
  const handleSignInWithPasskey = async () => {
   
  }
  const handleSignInWithGoogle = async () => {
    
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 16,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ gap: 20, alignItems: "center" }}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>
            Modern Chat App
          </Text>
          <Text>The Best Chat App in the World.</Text>
        </View>
        <View style={{ flex: 0.8 }} />
        <Button onPress={handleSignInWithPasskey} style={{ marginBottom: 20 }}>SignIn With Passkey</Button>
        <Button
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "10",
            marginBottom: 20,
          }}
          onPress={handleSignInWithGoogle}
        >
          <Image
            source={require("@/assets/images/google-icon.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ color: "black", fontWeight: "500" }}>
            Continue With Google
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
