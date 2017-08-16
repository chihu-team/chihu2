import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'share item': {
    'background': '#fff',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }]
  },
  'share item p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'share item imgs-wrap': {
    'overflow': 'hidden'
  },
  'share item imgs-wrap imgs': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.23 }],
    'margin': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': '%V', 'value': 0.23 }],
    'backgroundColor': '#dbe0e4',
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important',
    'backgroundRepeat': 'no-repeat !important'
  },
  'share item mark': {
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'display': '-webkit-flex',
    'display': 'flex'
  },
  'share item mark p': {
    'flexGrow': '1',
    'textAlign': 'center',
    'color': '#9a9a9a',
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'share item mark cen': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9a9a9a' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9a9a9a' }],
    'boxSizing': 'border-box'
  },
  'share item mark i': {
    'color': '#488aff'
  },
  'share idark p': {
    'color': '#d6d9db'
  }
});
