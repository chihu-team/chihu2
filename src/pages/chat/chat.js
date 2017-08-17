import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-chat ion-content scroll-content': {
    'backgroundColor': '#f5f5f5'
  },
  'page-chat ion-footer': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.11)' }],
    'backgroundColor': '#fff',
    'height': [{ 'unit': 'px', 'value': 55 }]
  },
  'page-chat line-breaker': {
    'whiteSpace': 'pre-line'
  },
  'page-chat input-wrap': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'page-chat input-wrap ion-textarea': {
    'position': 'static'
  },
  'page-chat input-wrap ion-colcol': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-chat input-wrap button': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.3 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-chat input-wrap textarea': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#387ef5' }],
    'borderStyle': 'solid'
  },
  'page-chat message-wrap': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'page-chat message-wrap message': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-chat message-wrap message user-img': {
    'borderRadius': '50%',
    'width': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.36)' }]
  },
  'page-chat message-wrap message msg-detail': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 60 }]
  },
  'page-chat message-wrap message msg-detail p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-chat message-wrap message msg-detail msg-info p': {
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'color': '#888'
  },
  'page-chat message-wrap message msg-detail msg-content': {
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'backgroundColor': '#fff',
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'page-chat message-wrap message msg-detail msg-content spantriangle': {
    'backgroundColor': '#fff',
    'borderRadius': '2px',
    'height': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': 'px', 'value': 8 }],
    'display': 'block',
    'borderStyle': 'solid',
    'borderColor': '#ddd',
    'borderWidth': '1px',
    'WebkitTransform': 'rotate(45deg)',
    'transform': 'rotate(45deg)',
    'position': 'absolute'
  },
  'page-chat message-wrap messageleft msg-content': {
    'backgroundColor': '#fff'
  },
  'page-chat message-wrap messageleft msg-detail': {
    'paddingLeft': [{ 'unit': 'px', 'value': 60 }]
  },
  'page-chat message-wrap messageleft user-img': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-chat message-wrap messageleft msg-content spantriangle': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-chat message-wrap messageright msg-detail': {
    'paddingRight': [{ 'unit': 'px', 'value': 60 }]
  },
  'page-chat message-wrap messageright msg-detail msg-info': {
    'textAlign': 'right'
  },
  'page-chat message-wrap messageright user-img': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-chat message-wrap messageright ion-spinner': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 50 }]
  },
  'page-chat message-wrap messageright msg-content': {
    'backgroundColor': '#387ef5',
    'color': '#fff'
  },
  'page-chat message-wrap messageright msg-content spantriangle': {
    'backgroundColor': '#387ef5',
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 12 }]
  },
  'page-chat idark toolbar-background': {
    'background': '#37474f !important'
  },
  'page-chat idark_content scroll-content': {
    'background': '#212b30 !important'
  }
});
