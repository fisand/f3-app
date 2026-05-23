import * as React from 'react'
import { useTheme } from 'expo-router'
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  type ColorValue,
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

type HoverEffectProps = {
  color?: ColorValue
  hoverOpacity?: number
  activeOpacity?: number
}

type PlatformPressableProps = Omit<PressableProps, 'style' | 'onPress'> & {
  ref?: React.Ref<React.ComponentRef<typeof AnimatedPressable>>
  href?: string
  pressColor?: ColorValue
  pressOpacity?: number
  hoverEffect?: HoverEffectProps
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>
  onPress?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void
  children: React.ReactNode
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const ANDROID_VERSION_LOLLIPOP = 21
const ANDROID_SUPPORTS_RIPPLE =
  Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP
const useNativeDriver = Platform.OS !== 'web'

export function PlatformPressable({
  ref,
  disabled,
  onPress,
  onPressIn,
  onPressOut,
  android_ripple,
  pressColor,
  pressOpacity = 0.3,
  hoverEffect,
  style,
  children,
  ...rest
}: PlatformPressableProps) {
  const { dark } = useTheme()
  const [opacity] = React.useState(() => new Animated.Value(1))

  const animateTo = (toValue: number, duration: number) => {
    if (ANDROID_SUPPORTS_RIPPLE) {
      return
    }

    Animated.timing(opacity, {
      toValue,
      duration,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver,
    }).start()
  }

  const handlePress = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent,
  ) => {
    if (Platform.OS === 'web' && rest.href !== null) {
      const hasModifierKey =
        ('metaKey' in event && event.metaKey) ||
        ('altKey' in event && event.altKey) ||
        ('ctrlKey' in event && event.ctrlKey) ||
        ('shiftKey' in event && event.shiftKey)
      const isLeftClick = 'button' in event ? event.button == null || event.button === 0 : true
      const isSelfTarget =
        event.currentTarget && 'target' in event.currentTarget
          ? [undefined, null, '', 'self'].includes(event.currentTarget.target)
          : true

      if (!hasModifierKey && isLeftClick && isSelfTarget) {
        event.preventDefault()
        onPress?.(event)
      }
    } else {
      onPress?.(event)
    }
  }

  const handlePressIn: NonNullable<PressableProps['onPressIn']> = (event) => {
    animateTo(pressOpacity, 0)
    onPressIn?.(event)
  }

  const handlePressOut: NonNullable<PressableProps['onPressOut']> = (event) => {
    animateTo(1, 200)
    onPressOut?.(event)
  }

  return (
    <AnimatedPressable
      ref={ref}
      accessible
      role={Platform.OS === 'web' && rest.href != null ? 'link' : 'button'}
      onPress={disabled ? undefined : handlePress}
      onPressIn={disabled ? undefined : handlePressIn}
      onPressOut={disabled ? undefined : handlePressOut}
      android_ripple={
        ANDROID_SUPPORTS_RIPPLE && !disabled
          ? {
              color:
                pressColor !== undefined
                  ? pressColor
                  : dark
                    ? 'rgba(255, 255, 255, .32)'
                    : 'rgba(0, 0, 0, .32)',
              ...android_ripple,
            }
          : undefined
      }
      style={[
        {
          cursor:
            (Platform.OS === 'web' || Platform.OS === 'ios') && !disabled ? 'pointer' : 'auto',
          opacity: !ANDROID_SUPPORTS_RIPPLE && !disabled ? opacity : 1,
        },
        style,
      ]}
      {...rest}
    >
      {!disabled ? <HoverEffect {...hoverEffect} /> : null}
      {children}
    </AnimatedPressable>
  )
}

const CLASS_NAME = '__react-navigation_elements_Pressable_hover'

function HoverEffect({ color, hoverOpacity = 0.08, activeOpacity = 0.16 }: HoverEffectProps) {
  if (Platform.OS !== 'web' || color == null) {
    return null
  }

  return (
    <>
      <style href={CLASS_NAME} precedence='elements'>
        {`
          .${CLASS_NAME} {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: inherit;
            background-color: var(--overlay-color);
            opacity: 0;
            transition: opacity 0.15s;
            pointer-events: none;
          }

          a:hover > .${CLASS_NAME}, button:hover > .${CLASS_NAME} {
            opacity: var(--overlay-hover-opacity);
          }

          a:active > .${CLASS_NAME}, button:active > .${CLASS_NAME} {
            opacity: var(--overlay-active-opacity);
          }
        `}
      </style>
      <div
        className={CLASS_NAME}
        style={
          {
            '--overlay-color': color,
            '--overlay-hover-opacity': hoverOpacity,
            '--overlay-active-opacity': activeOpacity,
          } as React.CSSProperties
        }
      />
    </>
  )
}
