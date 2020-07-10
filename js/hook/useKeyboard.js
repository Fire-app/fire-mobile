// copied from https://github.com/react-native-hooks/keyboard

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default (config = {}) => {
  const { useWillShow = false, useWillHide = false } = config;
  const [visible, setVisible] = useState(false);
  const showEvent = useWillShow ? 'keyboardWillShow' : 'keyboardDidShow';
  const hideEvent = useWillHide ? 'keyboardWillHide' : 'keyboardDidHide';

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    Keyboard.addListener(showEvent, onKeyboardShow);
    Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      Keyboard.removeListener(showEvent, onKeyboardShow);
      Keyboard.removeListener(hideEvent, onKeyboardHide);
    };
    // This warning means that the config must be immutable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useWillShow, useWillHide]);

  return [visible, dismiss];
};
