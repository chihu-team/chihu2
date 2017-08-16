import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer ion-footer': {
    'transition': 'all 1000ms cubic-bezier(0.19, 1.12, 0.65, 0.91)'
  },
  'footer ion-footer ion-icon': {
    'display': 'block'
  },
  'footer ion-footer dv_f': {
    'float': 'right',
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'color': '#777777'
  },
  'footer footanimate': {
    'bottom': [{ 'unit': 'px', 'value': -78 }]
  },
  'footer idark toolbar-background': {
    'background': '#212b30 !important'
  }
});
