import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function ChatLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: "Chat",
          headerShown: true,
        }} 
      />
    </Stack>
  );
}
