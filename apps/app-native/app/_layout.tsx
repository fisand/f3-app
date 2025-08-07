import 'react-native-reanimated'
import '../global.css'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

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
      // transformer: superjson,
    }),
  ],
})

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    // Async font loading only occurs in development.
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
