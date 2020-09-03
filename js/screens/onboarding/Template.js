import {
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { ButtonProp, PrimarySecondaryOptions } from '../../components/Buttons';
import { colors } from '../../styles';
import ProgressCircles from '../../components/ProgressCircles';
import useKeyboard from '../../hook/useKeyboard';

const NUM_STEPS = 2;
// create an array [1, 2, ...NUM_STEPS]
const VALID_STEPS = new Array(NUM_STEPS).fill(undefined).map((_, i) => i + 1);

const OnboardingTemplate = ({
  primaryButton,
  secondaryButton,
  children,
  step,
  keyboardAvoiding,
}) => {
  const ContentView = keyboardAvoiding ? KeyboardAvoidingView : View;
  const mountedRef = useRef(false);
  // We don't want a ton of padding if the keyboard is up. This animates between paddings
  const [keyboardVisible] = useKeyboard({
    useWillHide: true,
    useWillShow: true,
  });
  useEffect(() => {
    // only animate on keyboard change, not on mount effect
    if (mountedRef.current) {
      LayoutAnimation.easeInEaseOut();
    } else {
      mountedRef.current = true;
    }
  }, [keyboardVisible]);
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ContentView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flexGrow: 1, paddingBottom: 10, paddingHorizontal: 25 }}
      >
        <View style={{ flex: 1 }}>{children}</View>
        {!!step && (
          <>
            <ProgressCircles numSteps={NUM_STEPS} step={step} />
            <View style={{ height: 15 }} />
          </>
        )}
        <View style={{ height: 25 }} />
        <PrimarySecondaryOptions
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
        />
        {keyboardVisible && <View style={{ height: 12 }} />}
        {keyboardAvoiding && <View style={{ height: 10 }} />}
      </ContentView>
    </SafeAreaView>
  );
};

OnboardingTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  keyboardAvoiding: PropTypes.bool,

  primaryButton: ButtonProp.isRequired,

  secondaryButton: ButtonProp,
  step: PropTypes.oneOf(VALID_STEPS),
};

export default OnboardingTemplate;
