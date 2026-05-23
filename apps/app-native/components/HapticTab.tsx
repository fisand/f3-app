import type { BottomTabBarButtonProps } from 'expo-router/js-tabs'
import * as Haptics from 'expo-haptics'

import { PlatformPressable } from '@/components/ui/PlatformPressable'

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }
        props.onPressIn?.(ev)
      }}
    />
  )
}
