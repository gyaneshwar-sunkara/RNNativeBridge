import React from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';

import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import {useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const BUTTON_WIDTH = Dimensions.get('window').width - 10;
const BUTTON_HEIGHT = 50;
const SWIPEABLE_DIMENSIONS = 55;

const H_SWIPE_RANGE = BUTTON_WIDTH - SWIPEABLE_DIMENSIONS;

const SwipeButton = ({onToggle}: any) => {
  const X = useSharedValue(0);
  const [toggled, setToggled] = useState(false);

  const handleComplete = (isToggled: boolean) => {
    if (isToggled) {
      Alert.alert('Button Four');
    }
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => {
      return {};
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{translateX: X.value}],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.7, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };

  return (
    <Animated.View style={[styles.swipeCont, AnimatedStyles.swipeCont]}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <SimpleLineIcons name="diamond" size={24} color="white" />
          </View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Slide me to continue
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    marginHorizontal: 5,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#59bfff',
    marginVertical: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  swipeable: {
    position: 'absolute',
    left: 0,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: 10,
    backgroundColor: '#59bfff',
  },
  swipeText: {
    margin: 10,
    color: 'white',
    textAlign: 'center',
  },
});

export default SwipeButton;
