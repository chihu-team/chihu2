import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'share-header iheader': {
    'color': '#828282',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'overflow': 'hidden'
  },
  'share-header iheader img': {
    'width': [{ 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'block',
    'float': 'left',
    'borderRadius': '9999px'
  },
  'share-header iheader h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'normal',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'float': 'left'
  },
  'share-header iheader time': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});
