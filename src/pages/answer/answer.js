import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-answer ion-header': {
    'transition': 'all 1000ms cubic-bezier(0.19, 1.12, 0.65, 0.91)'
  },
  'page-answer toolbar-title': {
    'transition': 'all 1000ms cubic-bezier(0.19, 1.12, 0.65, 0.91)'
  },
  'page-answer dv_content': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }],
    'paddingTop': [{ 'unit': '%V', 'value': 0.18 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }],
    'overflow': 'hidden'
  },
  'page-answer dv_content img': {
    'display': 'inline-block !important',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-answer scroll-content': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-answer animate': {
    'top': [{ 'unit': 'px', 'value': -90 }]
  },
  'page-answer idark toolbar-background': {
    'background': '#212b30 !important'
  },
  'page-answer idark dv_content': {
    'color': '#d6d9db !important'
  },
  'page-answer idark dv_content p': {
    'color': '#d6d9db !important'
  }
});
