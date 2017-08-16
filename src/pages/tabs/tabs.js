import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'tabs tab-button': {
    'minHeight': [{ 'unit': 'rem', 'value': 5 }]
  },
  'tab-button-icon': {
    'color': 'rgba(103, 103, 103, 0.7) !important'
  },
  'tab-button[aria-selected=true] tab-button-icon': {
    'color': '#387ef5 !important'
  },
  'html': {
    'background': '#212b30 !important'
  },
  'body idark tabbar': {
    'background': '#212b30 !important'
  }
});
