import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-send-comments textarea': {
    'width': [{ 'unit': '%H', 'value': 0.9 }, { 'unit': 'string', 'value': '!important' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block !important',
    'height': [{ 'unit': 'rem', 'value': 10 }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-send-comments idark toolbar-background': {
    'background': '#37474f !important'
  },
  'page-send-comments idark_content toolbar-background': {
    'background': '#212b30 !important'
  },
  'page-send-comments idark_content item': {
    'background': '#212b30 !important'
  },
  'page-send-comments idark_content button-md': {
    'background': '#37474f !important'
  }
});
