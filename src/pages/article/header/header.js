import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header idark h4': {
    'color': '#d6d9db'
  },
  'header idark p': {
    'color': '#d6d9db'
  },
  'header dv_banner': {
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 190 }]
  },
  'header user': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 65 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#c4c6c8' }]
  },
  'header user img': {
    'width': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'borderRadius': '99999px',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'header user data': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.54 }]
  },
  'header user data h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  'header user data p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  'header user fork': {
    'width': [{ 'unit': 'px', 'value': 65 }],
    'height': [{ 'unit': 'px', 'value': 34 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 34 }],
    'float': 'right',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#1e8ae8' }],
    'color': '#1e8ae8',
    'textAlign': 'center',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 5 }]
  },
  'header user nofork': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'red' }],
    'color': 'red'
  }
});
