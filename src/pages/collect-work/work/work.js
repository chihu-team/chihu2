import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'work item': {
    'background': '#fff',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }]
  },
  'work item header': {
    'color': '#828282',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'work item header img': {
    'width': [{ 'unit': 'px', 'value': 35 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'verticalAlign': 'top',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'block',
    'float': 'left',
    'borderRadius': '9999px'
  },
  'work item header h4': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'normal',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'float': 'left'
  },
  'work item header time': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'work item h5 i': {
    'color': '#488aff'
  },
  'work item banner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center center !important',
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'work item mark': {
    'color': '#828282'
  },
  'work item mark i': {
    'color': '#488aff'
  }
});
