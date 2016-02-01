# Bell on bundler error plugin

Notification on [webpack module bundler](http://webpack.github.io/) build errors by writing bell character to stderr output


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
