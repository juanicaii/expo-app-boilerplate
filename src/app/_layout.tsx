import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import useDidUpdate from "../hooks/useDidUpdate";
import React from "react";
export { ErrorBoundary } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const unstable_settings = {
	initialRouteName: "index",
};

const queryClient = new QueryClient();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	useDidUpdate(() => {
		if (error) throw error;
		if (!loaded) SplashScreen.preventAutoHideAsync();
		if (loaded) SplashScreen.hideAsync();
	}, [loaded, error]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<PaperProvider>
			<QueryClientProvider client={queryClient}>
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="modal" options={{ presentation: "modal" }} />
				</Stack>
			</QueryClientProvider>
		</PaperProvider>
	);
}
