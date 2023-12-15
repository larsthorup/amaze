import '../test/mocha_setup.mjs';

import '../test/wui/main.test.mjs';

window.mocha.run((failures) => { window.__mocha_failures__ = failures; });
