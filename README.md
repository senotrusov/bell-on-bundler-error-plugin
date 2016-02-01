# Bell on bundler error plugin

Get notification on [webpack module bundler](http://webpack.github.io/) build errors.
On that occasion, a bell character will be written to STDERR output.


## Usage

Add the plugin to the config:

```javascript
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')

{
plugins: [
  new BellOnBundlerErrorPlugin()
  ]
}
```


## Installation

Install with the [npm package manager](https://github.com/npm/npm):

```
npm install --save-dev bell-on-bundler-error-plugin
```


## License
[MIT](LICENSE)
