var cli = require('./src/cli/main');
var options = {};
options.rows = process.argv[2] || 4;
options.columns = process.argv[3] || 4;
options.algorithm = process.argv[4] || 'binaryTree';
cli.main(options);
