var cli = require('./cli/main');
var options = {};
options.rows = process.argv[2] || 15;
options.columns = process.argv[3] || 15;
options.algorithm = process.argv[4] || 'recursiveBacktracker';
options.view = process.argv[5] || 'ascii';
cli.main(options);
