module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 690:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(389)
const exec = __nccwpck_require__(129).exec

try {
  let version = core.getInput('pmd-version');
  installPMD(version)
} catch (error) {
  core.setFailed(error.message)
}

function installPMD(version){
  var download = `wget https://github.com/pmd/pmd/releases/download/pmd_releases%2F${version}/pmd-bin-${version}.zip -P /tmp -O pmd.zip`
  var unzip = 'unzip /tmp/pmd.zip -d /tmp'
  var mk = 'mkdir $HOME/pmd'
  var mv = 'mv /tmp/pmd/* $HOME/pmd'
  exec(download+' && '+unzip+' && '+mk+' && '+mv, function(error, stdout, stderr){
    if(error) core.setFailed(stderr)
    core.debug(stdout)
    referencePMD()
  })
}

function referencePMD(){
  var mk = 'sudo mkdir -p /snap/bin && sudo chmod -R 757 /snap/bin'
  var cmd = 
`sudo echo '#! /bin/bash
$HOME/pmd/bin/run.sh pmd "$@"' > /snap/bin/pmd`
  var cm = 'chmod +x /snap/bin/pmd'
  exec(mk+' && '+cmd+' && '+cm, function(error, stdout, stderr){
    if(error) core.setFailed(stderr)
    core.debug(stdout)
  })
}


/***/ }),

/***/ 389:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(690);
/******/ })()
;