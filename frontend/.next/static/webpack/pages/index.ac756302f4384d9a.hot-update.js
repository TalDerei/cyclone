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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Commitment; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanta/dist/vanta.waves.min.js */ \"./node_modules/vanta/dist/vanta.waves.min.js\");\n/* harmony import */ var vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanta/dist/vanta.net.min */ \"./node_modules/vanta/dist/vanta.net.min.js\");\n/* harmony import */ var vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aztec/sdk */ \"./node_modules/@aztec/sdk/index.js\");\n/* harmony import */ var _aztec_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aztec_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"./node_modules/next/dist/compiled/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./pages/utils.ts\");\n/* harmony import */ var _nomiclabs_hardhat_ethers_signers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nomiclabs/hardhat-ethers/signers */ \"../node_modules/@nomiclabs/hardhat-ethers/signers.js\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chai */ \"../node_modules/chai/index.mjs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ \"?3109\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\nvar _jsxFileName = \"/Users/margulus/Desktop/Programming/Masters/Repository/Github/cyclone/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import { compile, acir_from_bytes } from '@noir-lang/noir_wasm';\n// import { setup_generic_prover_and_verifier, create_proof, verify_proof } from '@noir-lang/barretenberg/dest/client_proofs';\n// import { BarretenbergWasm } from '@noir-lang/barretenberg/dest/wasm';\n// import { SinglePedersen } from '@noir-lang/barretenberg/dest/crypto/pedersen';\n// import { Schnorr } from '@noir-lang/barretenberg/dest/crypto/schnorr';\n// import { serialise_public_inputs } from '@noir-lang/aztec_backend';\n\n\nfunction Commitment() {\n  _s();\n\n  const {\n    0: userAccount,\n    1: setUserAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    AztecSdkUser: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.AztecSdkUser\n  });\n  const {\n    0: publicKeyNew,\n    1: setPublicKey\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    GrumpkinAddress: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.GrumpkinAddress\n  });\n  const {\n    0: privateKeyNew,\n    1: setPrivateKey\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    Buffer\n  });\n  const {\n    0: spendingSigner,\n    1: setSpendingSigner\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    SchnorrSigner: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.SchnorrSigner\n  });\n  const {\n    0: walletAddress,\n    1: setWalletAddress\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    EthAddress: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthAddress\n  });\n  const {\n    0: sdk,\n    1: setSDK\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    AztecSdk: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.AztecSdk\n  });\n  const {\n    0: ethAccount,\n    1: setEthAccount\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    EthAddress: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthAddress\n  });\n\n  let renderSDK = () => {\n    InitializeSDK();\n  };\n\n  let renderRegisterUser = () => {\n    registerUser();\n  };\n\n  let renderProveDeposit = () => {\n    proveDeposit();\n  };\n\n  async function proveDeposit() {// let acirByteArray = path_to_uint8array(path.resolve(__dirname, '../circuits/build/p.acir'));\n    // let acir = acir_from_bytes(acirByteArray);\n    // let merkleProof = tree.proof(0);\n    // let note_hash_path = merkleProof.pathElements;\n    // let abi = {\n    //   recipient: recipient,\n    //   priv_key: `0x` + sender_priv_key.toString('hex'),\n    //   note_root: `0x` + note_root, \n    //   index: 0,\n    //   note_hash_path: [\n    //     `0x` + note_hash_path[0],\n    //     `0x` + note_hash_path[1],\n    //     `0x` + note_hash_path[2],\n    //   ],\n    //   secret: `0x` + transfers[0].secret.toString('hex'),\n    //   return: [`0x` + transfers[0].nullifier.toString('hex'), recipient],\n    // };\n    // let [prover, verifier] = await setup_generic_prover_and_verifier(acir);\n    // const proof = await create_proof(prover, acir, abi);\n    // const verified = await verify_proof(verifier, proof);\n    // console.log(\"verifier is: \" + verifier);\n  }\n\n  async function registerUser() {\n    const depositTokenQuantity = ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.utils.parseEther(\"1\").toBigInt();\n    let txId = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.depositEthToAztec)(walletAddress, publicKeyNew, depositTokenQuantity, _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.TxSettlementTime.NEXT_ROLLUP, sdk);\n    console.log(\"deposit txId\", txId);\n    console.log(\"lookup tx on explorer\", `https://aztec-connect-testnet-explorer.aztec.network/goerli/tx/${txId.toString()}`);\n  }\n\n  async function InitializeSDK() {\n    // Retrieve user's metamask address\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(window.ethereum);\n    const ethereumProvider = new _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthersAdapter(provider);\n    await provider.send(\"eth_requestAccounts\", []);\n    const userSigner = provider.getSigner();\n    const userAddress = _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.EthAddress.fromString(await userSigner.getAddress());\n    console.log(\"user's metamask wallet address is: \" + userAddress);\n    setWalletAddress(userAddress); // Initialize SDK\n\n    const sdk = await (0,_aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.createAztecSdk)(ethereumProvider, {\n      serverUrl: \"https://api.aztec.network/aztec-connect-testnet/falafel\",\n      // testnet\n      pollInterval: 1000,\n      memoryDb: true,\n      // set to false to save chain data\n      debug: \"bb:*\",\n      // print debug logs\n      flavour: _aztec_sdk__WEBPACK_IMPORTED_MODULE_3__.SdkFlavour.PLAIN,\n      // Use PLAIN with Nodejs\n      minConfirmation: 1 // ETH block confirmations\n\n    });\n    sdk.run();\n    await sdk.awaitSynchronised();\n    setSDK(sdk); // Generate privacy keys which enables decrypting the notes and calculating the account balance\n\n    console.log(\"Generate the user's privacy keypair\");\n    const {\n      publicKey,\n      privateKey\n    } = await sdk.generateAccountKeyPair(userAddress);\n    let accounts = await ethereum.request({\n      method: \"eth_requestAccounts\"\n    });\n    console.log(\"Public key is: \" + publicKey);\n    console.log(\"Private key is: \" + privateKey);\n    setPublicKey(publicKey);\n    setPrivateKey(privateKey);\n    console.log(\"Add user to SDK\");\n    let account = await sdk.userExists(publicKey);\n\n    if (account == true) {\n      await sdk.getUser(publicKey);\n      await sdk.addUser(privateKey);\n    }\n\n    setUserAddress(account); // Generate user's spending key and register it\n\n    const spendingPrivateKey = await sdk.generateSpendingKeyPair(userAddress);\n    console.log(\"Spending key is:\" + spendingPrivateKey); // Create Aztec signer using spending key\n\n    const signer = await sdk.createSchnorrSigner(spendingPrivateKey);\n    setSpendingSigner(signer);\n    console.log(\"Signer:\", signer);\n  } // Vanta UI design\n\n\n  const {\n    0: vantaEffect,\n    1: setVantaEffect\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const vantaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!vantaEffect) {\n      setVantaEffect(vanta_dist_vanta_waves_min_js__WEBPACK_IMPORTED_MODULE_1___default()({\n        el: vantaRef.current,\n        THREE: three__WEBPACK_IMPORTED_MODULE_11__,\n        mouseControls: true,\n        touchControls: true,\n        gyroControls: false,\n        minHeight: 200.00,\n        minWidth: 200.00,\n        scale: 1.00,\n        scaleMobile: 1.00,\n        color: 0x711,\n        shininess: 35.00,\n        waveHeight: 31.50,\n        waveSpeed: 0.25,\n        zoom: 0.95\n      }));\n    }\n  }, [vantaEffect]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"main\", {\n    ref: vantaRef,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"section\", {\n      class: \"general\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n        class: \"homepage\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"big\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"u\", {\n            children: \"Cyclone\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 190,\n            columnNumber: 16\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 190,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 191,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          class: \"homepag-sub\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"small\", {\n            children: \"Proving interactions on Aztec using Noir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 194,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          class: \"button-group\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n            class: \"button button1 b1\",\n            onClick: renderSDK,\n            children: \"Create Privacy and Spending Keys\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 196,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          class: \"button-group\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n            class: \"button button1 b1\",\n            onClick: renderRegisterUser,\n            children: \"Register a User\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 200,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 199,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n          class: \"button-group\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"button\", {\n            class: \"button button1 b1\",\n            onClick: renderProveDeposit,\n            children: \"Prove Deposit on Aztec\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 203,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 202,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 189,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 187,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Commitment, \"+FcEX3IEk4SCcDLkSV7UseE9NYE=\");\n\n_c = Commitment;\n\nvar _c;\n\n$RefreshReg$(_c, \"Commitment\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVFO0FBQUssZUFBSyxFQUFDLGNBQVg7QUFBQSxpQ0FDSTtBQUFRLGlCQUFLLEVBQUMsbUJBQWQ7QUFBa0MsbUJBQU8sRUFBRUUsa0JBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWFFO0FBQUssZUFBSyxFQUFDLGNBQVg7QUFBQSxpQ0FDSTtBQUFRLGlCQUFLLEVBQUMsbUJBQWQ7QUFBa0MsbUJBQU8sRUFBRUUsa0JBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJIOztHQTdLdUJwQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR0xPQkUgZnJvbSAndmFudGEvZGlzdC92YW50YS53YXZlcy5taW4uanMnO1xuaW1wb3J0IE5FVCBmcm9tIFwidmFudGEvZGlzdC92YW50YS5uZXQubWluXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEpzb25ScGNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1wcm92aWRlclwiO1xuaW1wb3J0IHtcbiAgICBBenRlY1NkayxcbiAgICBjcmVhdGVBenRlY1NkayxcbiAgICBFdGhlcnNBZGFwdGVyLFxuICAgIEV0aGVyZXVtUHJvdmlkZXIsXG4gICAgU2RrRmxhdm91cixcbiAgICBBenRlY1Nka1VzZXIsXG4gICAgR3J1bXBraW5BZGRyZXNzLFxuICAgIFNjaG5vcnJTaWduZXIsXG4gICAgRXRoQWRkcmVzcyxcbiAgICBUeFNldHRsZW1lbnRUaW1lLFxuICAgIFR4SWQsXG4gIH0gZnJvbSBcIkBhenRlYy9zZGtcIjtcbiAgaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tIFwiY3J5cHRvXCI7XG4gIGltcG9ydCB7XG4gICAgZGVwb3NpdEV0aFRvQXp0ZWNcbiAgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbXBvcnQgeyBTaWduZXJXaXRoQWRkcmVzcyB9IGZyb20gXCJAbm9taWNsYWJzL2hhcmRoYXQtZXRoZXJzL3NpZ25lcnNcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgQ29udHJhY3QsIENvbnRyYWN0RmFjdG9yeSwgdXRpbHMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuLy8gaW1wb3J0IHsgY29tcGlsZSwgYWNpcl9mcm9tX2J5dGVzIH0gZnJvbSAnQG5vaXItbGFuZy9ub2lyX3dhc20nO1xuLy8gaW1wb3J0IHsgc2V0dXBfZ2VuZXJpY19wcm92ZXJfYW5kX3ZlcmlmaWVyLCBjcmVhdGVfcHJvb2YsIHZlcmlmeV9wcm9vZiB9IGZyb20gJ0Bub2lyLWxhbmcvYmFycmV0ZW5iZXJnL2Rlc3QvY2xpZW50X3Byb29mcyc7XG4vLyBpbXBvcnQgeyBCYXJyZXRlbmJlcmdXYXNtIH0gZnJvbSAnQG5vaXItbGFuZy9iYXJyZXRlbmJlcmcvZGVzdC93YXNtJztcbi8vIGltcG9ydCB7IFNpbmdsZVBlZGVyc2VuIH0gZnJvbSAnQG5vaXItbGFuZy9iYXJyZXRlbmJlcmcvZGVzdC9jcnlwdG8vcGVkZXJzZW4nO1xuLy8gaW1wb3J0IHsgU2Nobm9yciB9IGZyb20gJ0Bub2lyLWxhbmcvYmFycmV0ZW5iZXJnL2Rlc3QvY3J5cHRvL3NjaG5vcnInO1xuLy8gaW1wb3J0IHsgc2VyaWFsaXNlX3B1YmxpY19pbnB1dHMgfSBmcm9tICdAbm9pci1sYW5nL2F6dGVjX2JhY2tlbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21taXRtZW50ICgpIHtcbiAgICBjb25zdCBbdXNlckFjY291bnQsIHNldFVzZXJBZGRyZXNzXSA9IHVzZVN0YXRlKHtBenRlY1Nka1VzZXJ9KTtcbiAgICBjb25zdCBbcHVibGljS2V5TmV3LCBzZXRQdWJsaWNLZXldID0gIHVzZVN0YXRlKHtHcnVtcGtpbkFkZHJlc3N9KTtcbiAgICBjb25zdCBbcHJpdmF0ZUtleU5ldywgc2V0UHJpdmF0ZUtleV0gPSB1c2VTdGF0ZSh7QnVmZmVyfSk7XG4gICAgY29uc3QgW3NwZW5kaW5nU2lnbmVyLCBzZXRTcGVuZGluZ1NpZ25lcl0gPSB1c2VTdGF0ZSh7U2Nobm9yclNpZ25lcn0pO1xuICAgIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKHtFdGhBZGRyZXNzfSk7XG4gICAgY29uc3QgW3Nkaywgc2V0U0RLXSA9IHVzZVN0YXRlKHtBenRlY1Nka30pO1xuICAgIGNvbnN0IFtldGhBY2NvdW50LCBzZXRFdGhBY2NvdW50XSA9IHVzZVN0YXRlKHtFdGhBZGRyZXNzfSk7XG5cbiAgICBsZXQgcmVuZGVyU0RLID0gKCkgPT4ge1xuICAgICAgICBJbml0aWFsaXplU0RLKCk7XG4gICAgfVxuXG4gICAgbGV0IHJlbmRlclJlZ2lzdGVyVXNlciA9ICgpID0+IHtcbiAgICAgIHJlZ2lzdGVyVXNlcigpO1xuICAgIH1cblxuICAgIGxldCByZW5kZXJQcm92ZURlcG9zaXQgPSAoKSA9PiB7XG4gICAgICBwcm92ZURlcG9zaXQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwcm92ZURlcG9zaXQoKSB7XG4gICAgICAvLyBsZXQgYWNpckJ5dGVBcnJheSA9IHBhdGhfdG9fdWludDhhcnJheShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY2lyY3VpdHMvYnVpbGQvcC5hY2lyJykpO1xuICAgICAgLy8gbGV0IGFjaXIgPSBhY2lyX2Zyb21fYnl0ZXMoYWNpckJ5dGVBcnJheSk7XG5cbiAgICAgIC8vIGxldCBtZXJrbGVQcm9vZiA9IHRyZWUucHJvb2YoMCk7XG4gICAgICAvLyBsZXQgbm90ZV9oYXNoX3BhdGggPSBtZXJrbGVQcm9vZi5wYXRoRWxlbWVudHM7XG4gICAgICBcbiAgICAgIC8vIGxldCBhYmkgPSB7XG4gICAgICAvLyAgIHJlY2lwaWVudDogcmVjaXBpZW50LFxuICAgICAgLy8gICBwcml2X2tleTogYDB4YCArIHNlbmRlcl9wcml2X2tleS50b1N0cmluZygnaGV4JyksXG4gICAgICAvLyAgIG5vdGVfcm9vdDogYDB4YCArIG5vdGVfcm9vdCwgXG4gICAgICAvLyAgIGluZGV4OiAwLFxuICAgICAgLy8gICBub3RlX2hhc2hfcGF0aDogW1xuICAgICAgLy8gICAgIGAweGAgKyBub3RlX2hhc2hfcGF0aFswXSxcbiAgICAgIC8vICAgICBgMHhgICsgbm90ZV9oYXNoX3BhdGhbMV0sXG4gICAgICAvLyAgICAgYDB4YCArIG5vdGVfaGFzaF9wYXRoWzJdLFxuICAgICAgLy8gICBdLFxuICAgICAgLy8gICBzZWNyZXQ6IGAweGAgKyB0cmFuc2ZlcnNbMF0uc2VjcmV0LnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgIC8vICAgcmV0dXJuOiBbYDB4YCArIHRyYW5zZmVyc1swXS5udWxsaWZpZXIudG9TdHJpbmcoJ2hleCcpLCByZWNpcGllbnRdLFxuICAgICAgLy8gfTtcblxuICAgICAgLy8gbGV0IFtwcm92ZXIsIHZlcmlmaWVyXSA9IGF3YWl0IHNldHVwX2dlbmVyaWNfcHJvdmVyX2FuZF92ZXJpZmllcihhY2lyKTtcbiAgICAgIFxuICAgICAgLy8gY29uc3QgcHJvb2YgPSBhd2FpdCBjcmVhdGVfcHJvb2YocHJvdmVyLCBhY2lyLCBhYmkpO1xuXG4gICAgICAvLyBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IHZlcmlmeV9wcm9vZih2ZXJpZmllciwgcHJvb2YpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInZlcmlmaWVyIGlzOiBcIiArIHZlcmlmaWVyKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIoKSB7XG4gICAgICBjb25zdCBkZXBvc2l0VG9rZW5RdWFudGl0eSA9IGV0aGVycy51dGlsc1xuICAgICAgICAucGFyc2VFdGhlcihcIjFcIilcbiAgICAgICAgLnRvQmlnSW50KCk7XG4gIFxuICAgICAgbGV0IHR4SWQgPSBhd2FpdCBkZXBvc2l0RXRoVG9BenRlYyhcbiAgICAgICAgd2FsbGV0QWRkcmVzcyxcbiAgICAgICAgcHVibGljS2V5TmV3LFxuICAgICAgICBkZXBvc2l0VG9rZW5RdWFudGl0eSxcbiAgICAgICAgVHhTZXR0bGVtZW50VGltZS5ORVhUX1JPTExVUCxcbiAgICAgICAgc2RrLFxuICAgICAgKTtcbiAgXG4gICAgICBjb25zb2xlLmxvZyhcImRlcG9zaXQgdHhJZFwiLCB0eElkKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcImxvb2t1cCB0eCBvbiBleHBsb3JlclwiLFxuICAgICAgICBgaHR0cHM6Ly9henRlYy1jb25uZWN0LXRlc3RuZXQtZXhwbG9yZXIuYXp0ZWMubmV0d29yay9nb2VybGkvdHgvJHt0eElkLnRvU3RyaW5nKCl9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBJbml0aWFsaXplU0RLKCkge1xuICAgICAgLy8gUmV0cmlldmUgdXNlcidzIG1ldGFtYXNrIGFkZHJlc3NcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICBjb25zdCBldGhlcmV1bVByb3ZpZGVyID0gbmV3IEV0aGVyc0FkYXB0ZXIocHJvdmlkZXIpO1xuXG4gICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XG4gICAgICBjb25zdCB1c2VyU2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCB1c2VyQWRkcmVzcyA9IEV0aEFkZHJlc3MuZnJvbVN0cmluZyhhd2FpdCB1c2VyU2lnbmVyLmdldEFkZHJlc3MoKSk7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIncyBtZXRhbWFzayB3YWxsZXQgYWRkcmVzcyBpczogXCIgKyB1c2VyQWRkcmVzcyk7XG4gICAgICBzZXRXYWxsZXRBZGRyZXNzKHVzZXJBZGRyZXNzKVxuICAgICAgICBcbiAgICAgIC8vIEluaXRpYWxpemUgU0RLXG4gICAgICBjb25zdCBzZGsgPSBhd2FpdCBjcmVhdGVBenRlY1NkayhldGhlcmV1bVByb3ZpZGVyLCB7ICAgICAgICAgIFxuICAgICAgICBzZXJ2ZXJVcmw6IFwiaHR0cHM6Ly9hcGkuYXp0ZWMubmV0d29yay9henRlYy1jb25uZWN0LXRlc3RuZXQvZmFsYWZlbFwiLCAvLyB0ZXN0bmV0XG4gICAgICAgIHBvbGxJbnRlcnZhbDogMTAwMCxcbiAgICAgICAgbWVtb3J5RGI6IHRydWUsICAgICAgICAgICAgLy8gc2V0IHRvIGZhbHNlIHRvIHNhdmUgY2hhaW4gZGF0YVxuICAgICAgICBkZWJ1ZzogXCJiYjoqXCIsICAgICAgICAgICAgIC8vIHByaW50IGRlYnVnIGxvZ3NcbiAgICAgICAgZmxhdm91cjogU2RrRmxhdm91ci5QTEFJTiwgLy8gVXNlIFBMQUlOIHdpdGggTm9kZWpzXG4gICAgICAgIG1pbkNvbmZpcm1hdGlvbjogMSwgICAgICAgIC8vIEVUSCBibG9jayBjb25maXJtYXRpb25zXG4gICAgICB9KTtcbiAgICAgIHNkay5ydW4oKTtcbiAgICAgIGF3YWl0IHNkay5hd2FpdFN5bmNocm9uaXNlZCgpO1xuICAgICAgc2V0U0RLKHNkayk7XG5cbiAgICAgIC8vIEdlbmVyYXRlIHByaXZhY3kga2V5cyB3aGljaCBlbmFibGVzIGRlY3J5cHRpbmcgdGhlIG5vdGVzIGFuZCBjYWxjdWxhdGluZyB0aGUgYWNjb3VudCBiYWxhbmNlXG4gICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlIHRoZSB1c2VyJ3MgcHJpdmFjeSBrZXlwYWlyXCIpO1xuICAgICAgY29uc3QgeyBwdWJsaWNLZXksIHByaXZhdGVLZXkgfSA9IGF3YWl0IHNkay5nZW5lcmF0ZUFjY291bnRLZXlQYWlyKHVzZXJBZGRyZXNzKTtcbiAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUHVibGljIGtleSBpczogXCIgKyBwdWJsaWNLZXkpO1xuICAgICAgY29uc29sZS5sb2coXCJQcml2YXRlIGtleSBpczogXCIgKyBwcml2YXRlS2V5KTtcbiAgICAgIHNldFB1YmxpY0tleShwdWJsaWNLZXkpO1xuICAgICAgc2V0UHJpdmF0ZUtleShwcml2YXRlS2V5KTtcblxuICAgICAgY29uc29sZS5sb2coXCJBZGQgdXNlciB0byBTREtcIilcbiAgICAgIGxldCBhY2NvdW50ID0gYXdhaXQgc2RrLnVzZXJFeGlzdHMocHVibGljS2V5KTtcbiAgICAgIGlmIChhY2NvdW50ID09IHRydWUpIHtcbiAgICAgICAgYXdhaXQgc2RrLmdldFVzZXIocHVibGljS2V5KTtcbiAgICAgICAgYXdhaXQgc2RrLmFkZFVzZXIocHJpdmF0ZUtleSk7XG4gICAgICB9IFxuICAgICAgc2V0VXNlckFkZHJlc3MoYWNjb3VudCk7XG5cbiAgICAgIC8vIEdlbmVyYXRlIHVzZXIncyBzcGVuZGluZyBrZXkgYW5kIHJlZ2lzdGVyIGl0XG4gICAgICBjb25zdCBzcGVuZGluZ1ByaXZhdGVLZXkgPSBhd2FpdCBzZGsuZ2VuZXJhdGVTcGVuZGluZ0tleVBhaXIodXNlckFkZHJlc3MpO1xuICAgICAgY29uc29sZS5sb2coXCJTcGVuZGluZyBrZXkgaXM6XCIgKyBzcGVuZGluZ1ByaXZhdGVLZXkpXG4gICAgICAvLyBDcmVhdGUgQXp0ZWMgc2lnbmVyIHVzaW5nIHNwZW5kaW5nIGtleVxuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgc2RrLmNyZWF0ZVNjaG5vcnJTaWduZXIoc3BlbmRpbmdQcml2YXRlS2V5KTtcbiAgICAgIHNldFNwZW5kaW5nU2lnbmVyKHNpZ25lcik7XG4gICAgICBjb25zb2xlLmxvZyhcIlNpZ25lcjpcIiwgc2lnbmVyKTtcbiAgICB9XG5cbiAgICAvLyBWYW50YSBVSSBkZXNpZ25cbiAgICBjb25zdCBbdmFudGFFZmZlY3QsIHNldFZhbnRhRWZmZWN0XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHZhbnRhUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIXZhbnRhRWZmZWN0KSB7XG4gICAgICAgIHNldFZhbnRhRWZmZWN0KFxuICAgICAgICAgIEdMT0JFKHtcbiAgICAgICAgICAgIGVsOiB2YW50YVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgVEhSRUUsXG4gICAgICAgICAgICBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgdG91Y2hDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICAgIG1pbldpZHRoOiAyMDAuMDAsXG4gICAgICAgICAgICBzY2FsZTogMS4wMCxcbiAgICAgICAgICAgIHNjYWxlTW9iaWxlOiAxLjAwLFxuICAgICAgICAgICAgY29sb3I6IDB4NzExLFxuICAgICAgICAgICAgc2hpbmluZXNzOiAzNS4wMCxcbiAgICAgICAgICAgIHdhdmVIZWlnaHQ6IDMxLjUwLFxuICAgICAgICAgICAgd2F2ZVNwZWVkOiAwLjI1LFxuICAgICAgICAgICAgem9vbTogMC45NVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LCBbdmFudGFFZmZlY3RdKVxuICAgICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gcmVmPXt2YW50YVJlZn0+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImdlbmVyYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvbWVwYWdlXCI+XG4gICAgICAgICAgPGJpZz48dT5DeWNsb25lPC91PjwvYmlnPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lcGFnLXN1YlwiPlxuICAgICAgICAgICAgPHNtYWxsPlByb3ZpbmcgaW50ZXJhY3Rpb25zIG9uIEF6dGVjIHVzaW5nIE5vaXI8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24xIGIxXCIgb25DbGljaz17cmVuZGVyU0RLfT5DcmVhdGUgUHJpdmFjeSBhbmQgU3BlbmRpbmcgS2V5czwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24xIGIxXCIgb25DbGljaz17cmVuZGVyUmVnaXN0ZXJVc2VyfT5SZWdpc3RlciBhIFVzZXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uMSBiMVwiIG9uQ2xpY2s9e3JlbmRlclByb3ZlRGVwb3NpdH0+UHJvdmUgRGVwb3NpdCBvbiBBenRlYzwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICAgICk7ICAgIFxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkdMT0JFIiwiTkVUIiwiVEhSRUUiLCJldGhlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJBenRlY1NkayIsImNyZWF0ZUF6dGVjU2RrIiwiRXRoZXJzQWRhcHRlciIsIkV0aGVyZXVtUHJvdmlkZXIiLCJTZGtGbGF2b3VyIiwiQXp0ZWNTZGtVc2VyIiwiR3J1bXBraW5BZGRyZXNzIiwiU2Nobm9yclNpZ25lciIsIkV0aEFkZHJlc3MiLCJUeFNldHRsZW1lbnRUaW1lIiwiVHhJZCIsInJhbmRvbUJ5dGVzIiwiZGVwb3NpdEV0aFRvQXp0ZWMiLCJTaWduZXJXaXRoQWRkcmVzcyIsIkJpZ051bWJlciIsIkNvbnRyYWN0IiwiQ29udHJhY3RGYWN0b3J5IiwidXRpbHMiLCJleHBlY3QiLCJyZWFkRmlsZVN5bmMiLCJDb21taXRtZW50IiwidXNlckFjY291bnQiLCJzZXRVc2VyQWRkcmVzcyIsInB1YmxpY0tleU5ldyIsInNldFB1YmxpY0tleSIsInByaXZhdGVLZXlOZXciLCJzZXRQcml2YXRlS2V5IiwiQnVmZmVyIiwic3BlbmRpbmdTaWduZXIiLCJzZXRTcGVuZGluZ1NpZ25lciIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwic2RrIiwic2V0U0RLIiwiZXRoQWNjb3VudCIsInNldEV0aEFjY291bnQiLCJyZW5kZXJTREsiLCJJbml0aWFsaXplU0RLIiwicmVuZGVyUmVnaXN0ZXJVc2VyIiwicmVnaXN0ZXJVc2VyIiwicmVuZGVyUHJvdmVEZXBvc2l0IiwicHJvdmVEZXBvc2l0IiwiZGVwb3NpdFRva2VuUXVhbnRpdHkiLCJwYXJzZUV0aGVyIiwidG9CaWdJbnQiLCJ0eElkIiwiTkVYVF9ST0xMVVAiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiZXRoZXJldW1Qcm92aWRlciIsInNlbmQiLCJ1c2VyU2lnbmVyIiwiZ2V0U2lnbmVyIiwidXNlckFkZHJlc3MiLCJmcm9tU3RyaW5nIiwiZ2V0QWRkcmVzcyIsInNlcnZlclVybCIsInBvbGxJbnRlcnZhbCIsIm1lbW9yeURiIiwiZGVidWciLCJmbGF2b3VyIiwiUExBSU4iLCJtaW5Db25maXJtYXRpb24iLCJydW4iLCJhd2FpdFN5bmNocm9uaXNlZCIsInB1YmxpY0tleSIsInByaXZhdGVLZXkiLCJnZW5lcmF0ZUFjY291bnRLZXlQYWlyIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWNjb3VudCIsInVzZXJFeGlzdHMiLCJnZXRVc2VyIiwiYWRkVXNlciIsInNwZW5kaW5nUHJpdmF0ZUtleSIsImdlbmVyYXRlU3BlbmRpbmdLZXlQYWlyIiwic2lnbmVyIiwiY3JlYXRlU2Nobm9yclNpZ25lciIsInZhbnRhRWZmZWN0Iiwic2V0VmFudGFFZmZlY3QiLCJ2YW50YVJlZiIsImVsIiwiY3VycmVudCIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJzY2FsZSIsInNjYWxlTW9iaWxlIiwiY29sb3IiLCJzaGluaW5lc3MiLCJ3YXZlSGVpZ2h0Iiwid2F2ZVNwZWVkIiwiem9vbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});