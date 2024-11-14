import 'react-native-reanimated'
import '../global.css'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'

import { useColorScheme } from '@/hooks/useColorScheme'

import { trpc } from '../trpc'

const queryClient = new QueryClient({})

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'your api url',
      headers() {
        const token = ''
        return token ? { Authorization: `Bearer ${token}` } : {}
      },
    }),
  ],
})

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </trpc.Provider>
  )
}
