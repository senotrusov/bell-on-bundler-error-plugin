// Copyright 2015-2016 Stanislav Senotrusov
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function BellOnBundlerErrorPlugin() {}

BellOnBundlerErrorPlugin.prototype.apply = function(compiler) {
  if (typeof process === 'undefined') {
    return
  }

  var doneFunc = function(stats) {
    if (stats.hasErrors()) {
      process.stderr.write('\x07')
    }
  }

  var failedFunc = function(err) {
    process.stderr.write('\x07')
  }

  if (compiler.hooks) {
    var plugin = { name: 'BellOnBundlerErrorPlugin' }

    compiler.hooks.done.tap(plugin, doneFunc)
    compiler.hooks.failed.tap(plugin, failedFunc)
  } else {
    compiler.plugin('done', doneFunc)
    compiler.plugin('failed', failedFunc)
  }
}

module.exports = BellOnBundlerErrorPlugin
