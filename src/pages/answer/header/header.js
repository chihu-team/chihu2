import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header dv_title': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 165 }],
    'padding': [{ 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.03 }, { 'unit': '%H', 'value': 0.05 }],
    'paddingTop': [{ 'unit': 'px', 'value': 64 }],
    'background': '#488aff',
    'position': 'relative'
  },
  'header dv_title h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'rem', 'value': 2 }],
    'color': '#fff'
  },
  'header dv_title user': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'height': [{ 'unit': 'px', 'value': 65 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'position': 'absolute',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#c4c6c8' }],
    'bottom': [{ 'unit': 'px', 'value': -36 }]
  },
  'header dv_title user img': {
    'width': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'borderRadius': '99999px',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'header dv_title user data': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.54 }]
  },
  'header dv_title user data h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  'header dv_title user data p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  'header dv_title user fork': {
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
  'header dv_title user nofork': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'red' }],
    'color': 'red'
  },
  'header idark user': {
    'background': '#212b30 !important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#748992' }, { 'unit': 'string', 'value': '!important' }]
  }
});
