"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Commitment; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanta/dist/vanta.waves.min.js */ \"./node_modules/vanta/dist/vanta.waves.min.js\");\n/* harmony import */ var vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanta/dist/vanta.net.min */ \"./node_modules/vanta/dist/vanta.net.min.js\");\n/* harmony import */ var vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aztec/sdk */ \"./node_modules/@aztec/sdk/index.js\");\n/* harmony import */ var _aztec_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aztec_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./pages/utils.ts\");\n/* harmony import */ var _nomiclabs_hardhat_ethers_signers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nomiclabs/hardhat-ethers/signers */ \"../node_modules/@nomiclabs/hardhat-ethers/signers.js\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chai */ \"../node_modules/chai/index.mjs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ \"?3109\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @noir-lang/noir_wasm */ \"./node_modules/@noir-lang/noir_wasm/noir_wasm.js\");\n/* harmony import */ var _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nvar _jsxFileName = \"/Users/margulus/Desktop/Programming/Masters/Repository/Github/cyclone/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import { setup_generic_prover_and_verifier, create_proof, verify_proof } from '@noir-lang/barretenberg/dest/client_proofs';\n// import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';\n// import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';\n// import { Schnorr } from '@noir-lang/barretenberg/dest/crypto/schnorr';\n// import { serialise_public_inputs } from '@noir-lang/aztec_backend';\n\n\nfunction Commitment() {\n  _s();\n\n  const {\n    0: userAccount,\n    1: setUserAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    AztecSdkUser: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.AztecSdkUser\n  });\n  const {\n    0: publicKeyNew,\n    1: setPublicKey\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    GrumpkinAddress: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.GrumpkinAddress\n  });\n  const {\n    0: privateKeyNew,\n    1: setPrivateKey\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    Buffer\n  });\n  const {\n    0: spendingSigner,\n    1: setSpendingSigner\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    SchnorrSigner: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.SchnorrSigner\n  });\n  const {\n    0: walletAddress,\n    1: setWalletAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    EthAddress: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthAddress\n  });\n  const {\n    0: sdk,\n    1: setSDK\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    AztecSdk: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.AztecSdk\n  });\n  const {\n    0: ethAccount,\n    1: setEthAccount\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    EthAddress: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthAddress\n  });\n\n  let renderSDK = () => {\n    InitializeSDK();\n  };\n\n  let renderRegisterUser = () => {\n    registerUser();\n  };\n\n  let renderProveDeposit = () => {\n    proveDeposit();\n  };\n\n  async function proveDeposit() {}\n\n  async function registerUser() {\n    const depositTokenQuantity = ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.utils.parseEther(\"1\").toBigInt();\n    let txId = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.depositEthToAztec)(walletAddress, publicKeyNew, depositTokenQuantity, _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.TxSettlementTime.NEXT_ROLLUP, sdk);\n    console.log(\"deposit txId\", txId);\n    console.log(\"lookup tx on explorer\", `https://aztec-connect-testnet-explorer.aztec.network/goerli/tx/${txId.toString()}`);\n  }\n\n  async function InitializeSDK() {\n    // Retrieve user's metamask address\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.providers.Web3Provider(window.ethereum);\n    const ethereumProvider = new _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthersAdapter(provider);\n    await provider.send(\"eth_requestAccounts\", []);\n    const userSigner = provider.getSigner();\n    const userAddress = _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthAddress.fromString(await userSigner.getAddress());\n    console.log(\"user's metamask wallet address is: \" + userAddress);\n    setWalletAddress(userAddress); // Initialize SDK\n\n    const sdk = await (0,_aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.createAztecSdk)(ethereumProvider, {\n      serverUrl: \"https://api.aztec.network/aztec-connect-testnet/falafel\",\n      // testnet\n      pollInterval: 1000,\n      memoryDb: true,\n      // set to false to save chain data\n      debug: \"bb:*\",\n      // print debug logs\n      flavour: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.SdkFlavour.PLAIN,\n      // Use PLAIN with Nodejs\n      minConfirmation: 1 // ETH block confirmations\n\n    });\n    sdk.run();\n    await sdk.awaitSynchronised();\n    setSDK(sdk); // Generate privacy keys which enables decrypting the notes and calculating the account balance\n\n    console.log(\"Generate the user's privacy keypair\");\n    const {\n      publicKey,\n      privateKey\n    } = await sdk.generateAccountKeyPair(userAddress);\n    let accounts = await ethereum.request({\n      method: \"eth_requestAccounts\"\n    });\n    console.log(\"Public key is: \" + publicKey);\n    console.log(\"Private key is: \" + privateKey);\n    setPublicKey(publicKey);\n    setPrivateKey(privateKey);\n    console.log(\"Add user to SDK\");\n    let account = await sdk.userExists(publicKey);\n\n    if (account == true) {\n      await sdk.getUser(publicKey);\n      await sdk.addUser(privateKey);\n    }\n\n    setUserAddress(account); // Generate user's spending key and register it\n\n    const spendingPrivateKey = await sdk.generateSpendingKeyPair(userAddress);\n    console.log(\"Spending key is:\" + spendingPrivateKey); // Create Aztec signer using spending key\n\n    const signer = await sdk.createSchnorrSigner(spendingPrivateKey);\n    setSpendingSigner(signer);\n    console.log(\"Signer:\", signer);\n  } // Vanta UI design\n\n\n  const {\n    0: vantaEffect,\n    1: setVantaEffect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const vantaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!vantaEffect) {\n      setVantaEffect(vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1___default()({\n        el: vantaRef.current,\n        THREE: three__WEBPACK_IMPORTED_MODULE_12__,\n        mouseControls: true,\n        touchControls: true,\n        gyroControls: false,\n        minHeight: 200.00,\n        minWidth: 200.00,\n        scale: 1.00,\n        scaleMobile: 1.00,\n        color: 0x711,\n        shininess: 35.00,\n        waveHeight: 31.50,\n        waveSpeed: 0.25,\n        zoom: 0.95\n      }));\n    }\n  }, [vantaEffect]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"main\", {\n    ref: vantaRef,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"section\", {\n      class: \"general\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        class: \"homepage\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"big\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"u\", {\n            children: \"Cyclone\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 164,\n            columnNumber: 16\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          class: \"homepag-sub\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"small\", {\n            children: \"Proving interactions on Aztec using Noir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          class: \"button-group\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n            class: \"button button1 b1\",\n            onClick: renderSDK,\n            children: \"Create Privacy and Spending Keys\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 171,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          class: \"button-group\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n            class: \"button button1 b1\",\n            onClick: renderRegisterUser,\n            children: \"Register a User\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 174,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 173,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          class: \"button-group\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"button\", {\n            class: \"button button1 b1\",\n            onClick: renderProveDeposit,\n            children: \"Generate Zero-Knowledge Proof of Deposit on Aztec\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 177,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 176,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 161,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Commitment, \"+FcEX3IEk4SCcDLkSV7UseE9NYE=\");\n\n_c = Commitment;\n\nvar _c;\n\n$RefreshReg$(_c, \"Commitment\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBYUU7QUFBSyxlQUFLLEVBQUMsY0FBWDtBQUFBLGlDQUNJO0FBQVEsaUJBQUssRUFBQyxtQkFBZDtBQUFrQyxtQkFBTyxFQUFFRSxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Qkg7O0dBbkp1QnBCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHTE9CRSBmcm9tICd2YW50YS9kaXN0L3ZhbnRhLndhdmVzLm1pbi5qcyc7XG5pbXBvcnQgTkVUIGZyb20gXCJ2YW50YS9kaXN0L3ZhbnRhLm5ldC5taW5cIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgSnNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2Fic3RyYWN0LXByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICAgIEF6dGVjU2RrLFxuICAgIGNyZWF0ZUF6dGVjU2RrLFxuICAgIEV0aGVyc0FkYXB0ZXIsXG4gICAgRXRoZXJldW1Qcm92aWRlcixcbiAgICBTZGtGbGF2b3VyLFxuICAgIEF6dGVjU2RrVXNlcixcbiAgICBHcnVtcGtpbkFkZHJlc3MsXG4gICAgU2Nobm9yclNpZ25lcixcbiAgICBFdGhBZGRyZXNzLFxuICAgIFR4U2V0dGxlbWVudFRpbWUsXG4gICAgVHhJZCxcbiAgfSBmcm9tIFwiQGF6dGVjL3Nka1wiO1xuICBpbXBvcnQgeyByYW5kb21CeXRlcyB9IGZyb20gXCJjcnlwdG9cIjtcbiAgaW1wb3J0IHtcbiAgICBkZXBvc2l0RXRoVG9BenRlY1xuICB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmltcG9ydCB7IFNpZ25lcldpdGhBZGRyZXNzIH0gZnJvbSBcIkBub21pY2xhYnMvaGFyZGhhdC1ldGhlcnMvc2lnbmVyc1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBDb250cmFjdCwgQ29udHJhY3RGYWN0b3J5LCB1dGlscyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBjb21waWxlLCBhY2lyX2Zyb21fYnl0ZXMgfSBmcm9tICdAbm9pci1sYW5nL25vaXJfd2FzbSc7XG4vLyBpbXBvcnQgeyBzZXR1cF9nZW5lcmljX3Byb3Zlcl9hbmRfdmVyaWZpZXIsIGNyZWF0ZV9wcm9vZiwgdmVyaWZ5X3Byb29mIH0gZnJvbSAnQG5vaXItbGFuZy9iYXJyZXRlbmJlcmcvZGVzdC9jbGllbnRfcHJvb2ZzJztcbi8vIGltcG9ydCB7IEJhcnJldGVuYmVyZ1dhc20gfSBmcm9tICdAbm9pci1sYW5nL2JhcnJldGVuYmVyZy9kZXN0L3dhc20nO1xuLy8gaW1wb3J0IHsgU2luZ2xlUGVkZXJzZW4gfSBmcm9tICdAbm9pci1sYW5nL2JhcnJldGVuYmVyZy9kZXN0L2NyeXB0by9wZWRlcnNlbic7XG4vLyBpbXBvcnQgeyBTY2hub3JyIH0gZnJvbSAnQG5vaXItbGFuZy9iYXJyZXRlbmJlcmcvZGVzdC9jcnlwdG8vc2Nobm9ycic7XG4vLyBpbXBvcnQgeyBzZXJpYWxpc2VfcHVibGljX2lucHV0cyB9IGZyb20gJ0Bub2lyLWxhbmcvYXp0ZWNfYmFja2VuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1pdG1lbnQgKCkge1xuICAgIGNvbnN0IFt1c2VyQWNjb3VudCwgc2V0VXNlckFkZHJlc3NdID0gdXNlU3RhdGUoe0F6dGVjU2RrVXNlcn0pO1xuICAgIGNvbnN0IFtwdWJsaWNLZXlOZXcsIHNldFB1YmxpY0tleV0gPSAgdXNlU3RhdGUoe0dydW1wa2luQWRkcmVzc30pO1xuICAgIGNvbnN0IFtwcml2YXRlS2V5TmV3LCBzZXRQcml2YXRlS2V5XSA9IHVzZVN0YXRlKHtCdWZmZXJ9KTtcbiAgICBjb25zdCBbc3BlbmRpbmdTaWduZXIsIHNldFNwZW5kaW5nU2lnbmVyXSA9IHVzZVN0YXRlKHtTY2hub3JyU2lnbmVyfSk7XG4gICAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoe0V0aEFkZHJlc3N9KTtcbiAgICBjb25zdCBbc2RrLCBzZXRTREtdID0gdXNlU3RhdGUoe0F6dGVjU2RrfSk7XG4gICAgY29uc3QgW2V0aEFjY291bnQsIHNldEV0aEFjY291bnRdID0gdXNlU3RhdGUoe0V0aEFkZHJlc3N9KTtcblxuICAgIGxldCByZW5kZXJTREsgPSAoKSA9PiB7XG4gICAgICAgIEluaXRpYWxpemVTREsoKTtcbiAgICB9XG5cbiAgICBsZXQgcmVuZGVyUmVnaXN0ZXJVc2VyID0gKCkgPT4ge1xuICAgICAgcmVnaXN0ZXJVc2VyKCk7XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlclByb3ZlRGVwb3NpdCA9ICgpID0+IHtcbiAgICAgIHByb3ZlRGVwb3NpdCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHByb3ZlRGVwb3NpdCgpIHtcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcigpIHtcbiAgICAgIGNvbnN0IGRlcG9zaXRUb2tlblF1YW50aXR5ID0gZXRoZXJzLnV0aWxzXG4gICAgICAgIC5wYXJzZUV0aGVyKFwiMVwiKVxuICAgICAgICAudG9CaWdJbnQoKTtcbiAgXG4gICAgICBsZXQgdHhJZCA9IGF3YWl0IGRlcG9zaXRFdGhUb0F6dGVjKFxuICAgICAgICB3YWxsZXRBZGRyZXNzLFxuICAgICAgICBwdWJsaWNLZXlOZXcsXG4gICAgICAgIGRlcG9zaXRUb2tlblF1YW50aXR5LFxuICAgICAgICBUeFNldHRsZW1lbnRUaW1lLk5FWFRfUk9MTFVQLFxuICAgICAgICBzZGssXG4gICAgICApO1xuICBcbiAgICAgIGNvbnNvbGUubG9nKFwiZGVwb3NpdCB0eElkXCIsIHR4SWQpO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwibG9va3VwIHR4IG9uIGV4cGxvcmVyXCIsXG4gICAgICAgIGBodHRwczovL2F6dGVjLWNvbm5lY3QtdGVzdG5ldC1leHBsb3Jlci5henRlYy5uZXR3b3JrL2dvZXJsaS90eC8ke3R4SWQudG9TdHJpbmcoKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIEluaXRpYWxpemVTREsoKSB7XG4gICAgICAvLyBSZXRyaWV2ZSB1c2VyJ3MgbWV0YW1hc2sgYWRkcmVzc1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgIGNvbnN0IGV0aGVyZXVtUHJvdmlkZXIgPSBuZXcgRXRoZXJzQWRhcHRlcihwcm92aWRlcik7XG5cbiAgICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcbiAgICAgIGNvbnN0IHVzZXJTaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IHVzZXJBZGRyZXNzID0gRXRoQWRkcmVzcy5mcm9tU3RyaW5nKGF3YWl0IHVzZXJTaWduZXIuZ2V0QWRkcmVzcygpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIG1ldGFtYXNrIHdhbGxldCBhZGRyZXNzIGlzOiBcIiArIHVzZXJBZGRyZXNzKTtcbiAgICAgIHNldFdhbGxldEFkZHJlc3ModXNlckFkZHJlc3MpXG4gICAgICAgIFxuICAgICAgLy8gSW5pdGlhbGl6ZSBTREtcbiAgICAgIGNvbnN0IHNkayA9IGF3YWl0IGNyZWF0ZUF6dGVjU2RrKGV0aGVyZXVtUHJvdmlkZXIsIHsgICAgICAgICAgXG4gICAgICAgIHNlcnZlclVybDogXCJodHRwczovL2FwaS5henRlYy5uZXR3b3JrL2F6dGVjLWNvbm5lY3QtdGVzdG5ldC9mYWxhZmVsXCIsIC8vIHRlc3RuZXRcbiAgICAgICAgcG9sbEludGVydmFsOiAxMDAwLFxuICAgICAgICBtZW1vcnlEYjogdHJ1ZSwgICAgICAgICAgICAvLyBzZXQgdG8gZmFsc2UgdG8gc2F2ZSBjaGFpbiBkYXRhXG4gICAgICAgIGRlYnVnOiBcImJiOipcIiwgICAgICAgICAgICAgLy8gcHJpbnQgZGVidWcgbG9nc1xuICAgICAgICBmbGF2b3VyOiBTZGtGbGF2b3VyLlBMQUlOLCAvLyBVc2UgUExBSU4gd2l0aCBOb2RlanNcbiAgICAgICAgbWluQ29uZmlybWF0aW9uOiAxLCAgICAgICAgLy8gRVRIIGJsb2NrIGNvbmZpcm1hdGlvbnNcbiAgICAgIH0pO1xuICAgICAgc2RrLnJ1bigpO1xuICAgICAgYXdhaXQgc2RrLmF3YWl0U3luY2hyb25pc2VkKCk7XG4gICAgICBzZXRTREsoc2RrKTtcblxuICAgICAgLy8gR2VuZXJhdGUgcHJpdmFjeSBrZXlzIHdoaWNoIGVuYWJsZXMgZGVjcnlwdGluZyB0aGUgbm90ZXMgYW5kIGNhbGN1bGF0aW5nIHRoZSBhY2NvdW50IGJhbGFuY2VcbiAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGUgdGhlIHVzZXIncyBwcml2YWN5IGtleXBhaXJcIik7XG4gICAgICBjb25zdCB7IHB1YmxpY0tleSwgcHJpdmF0ZUtleSB9ID0gYXdhaXQgc2RrLmdlbmVyYXRlQWNjb3VudEtleVBhaXIodXNlckFkZHJlc3MpO1xuICAgICAgbGV0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJQdWJsaWMga2V5IGlzOiBcIiArIHB1YmxpY0tleSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlByaXZhdGUga2V5IGlzOiBcIiArIHByaXZhdGVLZXkpO1xuICAgICAgc2V0UHVibGljS2V5KHB1YmxpY0tleSk7XG4gICAgICBzZXRQcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZCB1c2VyIHRvIFNES1wiKVxuICAgICAgbGV0IGFjY291bnQgPSBhd2FpdCBzZGsudXNlckV4aXN0cyhwdWJsaWNLZXkpO1xuICAgICAgaWYgKGFjY291bnQgPT0gdHJ1ZSkge1xuICAgICAgICBhd2FpdCBzZGsuZ2V0VXNlcihwdWJsaWNLZXkpO1xuICAgICAgICBhd2FpdCBzZGsuYWRkVXNlcihwcml2YXRlS2V5KTtcbiAgICAgIH0gXG4gICAgICBzZXRVc2VyQWRkcmVzcyhhY2NvdW50KTtcblxuICAgICAgLy8gR2VuZXJhdGUgdXNlcidzIHNwZW5kaW5nIGtleSBhbmQgcmVnaXN0ZXIgaXRcbiAgICAgIGNvbnN0IHNwZW5kaW5nUHJpdmF0ZUtleSA9IGF3YWl0IHNkay5nZW5lcmF0ZVNwZW5kaW5nS2V5UGFpcih1c2VyQWRkcmVzcyk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNwZW5kaW5nIGtleSBpczpcIiArIHNwZW5kaW5nUHJpdmF0ZUtleSlcbiAgICAgIC8vIENyZWF0ZSBBenRlYyBzaWduZXIgdXNpbmcgc3BlbmRpbmcga2V5XG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBzZGsuY3JlYXRlU2Nobm9yclNpZ25lcihzcGVuZGluZ1ByaXZhdGVLZXkpO1xuICAgICAgc2V0U3BlbmRpbmdTaWduZXIoc2lnbmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2lnbmVyOlwiLCBzaWduZXIpO1xuICAgIH1cblxuICAgIC8vIFZhbnRhIFVJIGRlc2lnblxuICAgIGNvbnN0IFt2YW50YUVmZmVjdCwgc2V0VmFudGFFZmZlY3RdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgdmFudGFSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghdmFudGFFZmZlY3QpIHtcbiAgICAgICAgc2V0VmFudGFFZmZlY3QoXG4gICAgICAgICAgR0xPQkUoe1xuICAgICAgICAgICAgZWw6IHZhbnRhUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBUSFJFRSxcbiAgICAgICAgICAgIG1vdXNlQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgICB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbkhlaWdodDogMjAwLjAwLFxuICAgICAgICAgICAgbWluV2lkdGg6IDIwMC4wMCxcbiAgICAgICAgICAgIHNjYWxlOiAxLjAwLFxuICAgICAgICAgICAgc2NhbGVNb2JpbGU6IDEuMDAsXG4gICAgICAgICAgICBjb2xvcjogMHg3MTEsXG4gICAgICAgICAgICBzaGluaW5lc3M6IDM1LjAwLFxuICAgICAgICAgICAgd2F2ZUhlaWdodDogMzEuNTAsXG4gICAgICAgICAgICB3YXZlU3BlZWQ6IDAuMjUsXG4gICAgICAgICAgICB6b29tOiAwLjk1XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sIFt2YW50YUVmZmVjdF0pXG4gICAgICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiByZWY9e3ZhbnRhUmVmfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2VuZXJhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZXBhZ2VcIj5cbiAgICAgICAgICA8YmlnPjx1PkN5Y2xvbmU8L3U+PC9iaWc+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvbWVwYWctc3ViXCI+XG4gICAgICAgICAgICA8c21hbGw+UHJvdmluZyBpbnRlcmFjdGlvbnMgb24gQXp0ZWMgdXNpbmcgTm9pcjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbjEgYjFcIiBvbkNsaWNrPXtyZW5kZXJTREt9PkNyZWF0ZSBQcml2YWN5IGFuZCBTcGVuZGluZyBLZXlzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbjEgYjFcIiBvbkNsaWNrPXtyZW5kZXJSZWdpc3RlclVzZXJ9PlJlZ2lzdGVyIGEgVXNlcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24xIGIxXCIgb25DbGljaz17cmVuZGVyUHJvdmVEZXBvc2l0fT5HZW5lcmF0ZSBaZXJvLUtub3dsZWRnZSBQcm9vZiBvZiBEZXBvc2l0IG9uIEF6dGVjPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICAgKTsgICAgXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiR0xPQkUiLCJORVQiLCJUSFJFRSIsImV0aGVycyIsIkpzb25ScGNQcm92aWRlciIsIkF6dGVjU2RrIiwiY3JlYXRlQXp0ZWNTZGsiLCJFdGhlcnNBZGFwdGVyIiwiRXRoZXJldW1Qcm92aWRlciIsIlNka0ZsYXZvdXIiLCJBenRlY1Nka1VzZXIiLCJHcnVtcGtpbkFkZHJlc3MiLCJTY2hub3JyU2lnbmVyIiwiRXRoQWRkcmVzcyIsIlR4U2V0dGxlbWVudFRpbWUiLCJUeElkIiwicmFuZG9tQnl0ZXMiLCJkZXBvc2l0RXRoVG9BenRlYyIsIlNpZ25lcldpdGhBZGRyZXNzIiwiQmlnTnVtYmVyIiwiQ29udHJhY3QiLCJDb250cmFjdEZhY3RvcnkiLCJ1dGlscyIsImV4cGVjdCIsInJlYWRGaWxlU3luYyIsImNvbXBpbGUiLCJhY2lyX2Zyb21fYnl0ZXMiLCJDb21taXRtZW50IiwidXNlckFjY291bnQiLCJzZXRVc2VyQWRkcmVzcyIsInB1YmxpY0tleU5ldyIsInNldFB1YmxpY0tleSIsInByaXZhdGVLZXlOZXciLCJzZXRQcml2YXRlS2V5IiwiQnVmZmVyIiwic3BlbmRpbmdTaWduZXIiLCJzZXRTcGVuZGluZ1NpZ25lciIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwic2RrIiwic2V0U0RLIiwiZXRoQWNjb3VudCIsInNldEV0aEFjY291bnQiLCJyZW5kZXJTREsiLCJJbml0aWFsaXplU0RLIiwicmVuZGVyUmVnaXN0ZXJVc2VyIiwicmVnaXN0ZXJVc2VyIiwicmVuZGVyUHJvdmVEZXBvc2l0IiwicHJvdmVEZXBvc2l0IiwiZGVwb3NpdFRva2VuUXVhbnRpdHkiLCJwYXJzZUV0aGVyIiwidG9CaWdJbnQiLCJ0eElkIiwiTkVYVF9ST0xMVVAiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZXRoZXJldW1Qcm92aWRlciIsInNlbmQiLCJ1c2VyU2lnbmVyIiwiZ2V0U2lnbmVyIiwidXNlckFkZHJlc3MiLCJmcm9tU3RyaW5nIiwiZ2V0QWRkcmVzcyIsInNlcnZlclVybCIsInBvbGxJbnRlcnZhbCIsIm1lbW9yeURiIiwiZGVidWciLCJmbGF2b3VyIiwiUExBSU4iLCJtaW5Db25maXJtYXRpb24iLCJydW4iLCJhd2FpdFN5bmNocm9uaXNlZCIsInB1YmxpY0tleSIsInByaXZhdGVLZXkiLCJnZW5lcmF0ZUFjY291bnRLZXlQYWlyIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudCIsInVzZXJFeGlzdHMiLCJnZXRVc2VyIiwiYWRkVXNlciIsInNwZW5kaW5nUHJpdmF0ZUtleSIsImdlbmVyYXRlU3BlbmRpbmdLZXlQYWlyIiwic2lnbmVyIiwiY3JlYXRlU2Nobm9yclNpZ25lciIsInZhbnRhRWZmZWN0Iiwic2V0VmFudGFFZmZlY3QiLCJ2YW50YVJlZiIsImVsIiwiY3VycmVudCIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJzY2FsZSIsInNjYWxlTW9iaWxlIiwiY29sb3IiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});