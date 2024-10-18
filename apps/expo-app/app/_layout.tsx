import 'react-native-reanimated'
import '../global.css'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import { useColorScheme } from '@/hooks/useColorScheme'

import { trpc } from '../trpc'

const queryClient = new QueryClient({})

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'your api url',
      async headers() {
        const token = await AsyncStorage.getItem('your token')
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
      </ThemeProvider>
    </trpc.Provider>
  )
}
