// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "\n/*\u5929\u5730\u6709\u6DF7\u6C8C\n**/ \n#div1{\n    border:1px solid red;\n    width:300px;\n    height:300px;\n}\n/*\u592A\u6781\u751F\u4E24\u4EEA\n**/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n#div1{\n    background: linear-gradient(180deg, \n    rgba(255,255,255,1) 0%, \n    rgba(255,255,255,1) 50%, \n    rgba(0,0,0,1) 50%, \n    rgba(0,0,0,1) 100%);\n}\n#div1::before{\n    border:1px solid red;\n    width: 150px;\n    height: 150px;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    background: radial-gradient(circle, \n        rgba(0,0,0,1) 0%, \n        rgba(0,0,0,1) 20%, \n        rgba(255,255,255,1) 20%, \n        rgba(255,255,255,1) 100%);\n    border-radius: 50%;\n    border: none;\n}\n#div1::after{\n    border:1px solid red;\n    width: 150px;\n    height: 150px;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    background: radial-gradient(circle, \n        rgba(255,255,255,1) 0%, \n        rgba(255,255,255,1) 20%, \n        rgba(0,0,0,1) 20%, \n        rgba(0,0,0,1) 100%);\n    border-radius: 50%;\n    border: none;\n}\n/*\u4E07\u7269\u7686\u6DF7\u6C8C\n**/\n@keyframes div1{\n  from{\n    transform: rotate(360deg);\n  }\n  to{\n    transform: rotate(0deg);\n  }\n}\n";
console.log(string.length);
var string2 = "";
var n = 0;
//demo.innerHTML=string[n];显示第几个
//demo.innerHTML=string.substring(0,n);

var step = function step() {
    setTimeout(function () {
        /*{if (string[n] ==="\n") {//判断，如果是则改写，不是则照搬
            string2=string2+"</br>;
        } else{
            string2=string2+`string[n]`;
        }=>简写改为
        string2+=(string[n] ==="\n"?"</br>":string[n]);*/
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);

        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            step();
            n = n + 1;
        }
    }, 5);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f927c6be.map