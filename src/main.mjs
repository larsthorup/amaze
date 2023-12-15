import * as wui from "./wui/main.mjs";

wui.main();

// /* eslint-env amd */

// // Note: require.conf.js is already loaded by now
// require.config({
//   deps: ['./wui/main'],

//   // we have to kickoff mocha, as it is asynchronous
//   callback: function (wui) {
//     wui.main();
//   }
// });
