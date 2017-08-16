import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'comments item': {
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'comments item p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'comments item header': {
    'color': '#828282',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'comments item header it-left': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'overflow': 'hidden',
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'comments item header it-left h6': {
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'normal'
  },
  'comments item header it-left time': {
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'comments item header fork': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 12 }],
    'boxSizing': 'border-box',
    'color': '#2196f3',
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'comments item header img': {
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'block',
    'float': 'left',
    'borderRadius': '9999px'
  },
  'comments idark p': {
    'color': '#d6d9db'
  }
});
