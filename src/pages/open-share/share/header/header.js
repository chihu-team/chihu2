import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header header': {
    'color': '#828282',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'header header it-left': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'overflow': 'hidden',
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'header header it-left h6': {
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'normal'
  },
  'header header it-left time': {
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'header header fork': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2196f3' }],
    'boxSizing': 'border-box',
    'color': '#2196f3',
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'header header img': {
    'width': [{ 'unit': 'px', 'value': 46 }],
    'height': [{ 'unit': 'px', 'value': 46 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'block',
    'float': 'left',
    'borderRadius': '9999px'
  },
  'header header nofork': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'red' }],
    'color': 'red'
  }
});
