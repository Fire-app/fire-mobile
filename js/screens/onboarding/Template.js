import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  LayoutAnimation,
} from 'react-native';
import { colors } from '../../styles';
import { ButtonProp, PrimarySecondaryOptions } from '../../components/Buttons';
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
    useWillShow: true,
    useWillHide: true,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ContentView
        style={{ paddingHorizontal: 25, paddingBottom: 10, flexGrow: 1 }}
        behavior="padding"
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
  primaryButton: ButtonProp.isRequired,
  children: PropTypes.node.isRequired,
  /* eslint-disable react/require-default-props */
  secondaryButton: ButtonProp,
  step: PropTypes.oneOf(VALID_STEPS),
  keyboardAvoiding: PropTypes.bool,
  /* eslint-enable react/require-default-props */
};

export default OnboardingTemplate;
