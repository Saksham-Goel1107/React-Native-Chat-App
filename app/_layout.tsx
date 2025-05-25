import { tokenCache } from "@/utils/cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error("Missing publishable key");
  }
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      tokenCache={tokenCache}
    >
      <SafeAreaProvider>
        <ThemeProvider value={DarkTheme}>
          <Slot />
        </ThemeProvider>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
