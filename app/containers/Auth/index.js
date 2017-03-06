import { Platform } from 'react-native';
import LoginFormIos from './index.ios';
import LoginFormAndroid from './index.android';

let module = null;

if (Platform.os === 'ios') {
  module = LoginFormIos;
} else {
  module = LoginFormAndroid;
}

export default module;
