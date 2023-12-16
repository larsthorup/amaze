import wui from './wui/main.mjs';

wui.main({
  rows: 15,
  columns: 15,
  // algorithm: 'aldousBroder',
  // algorithm: 'binaryTree',
  algorithm: 'recursiveBacktracker',
  // algorithm: 'sideWinder',
  view: 'svg'
});
