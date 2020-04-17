module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UpdatePost.tsx":
/*!***********************************!*\
  !*** ./components/UpdatePost.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/oleksii/Documents/Programming/develops-today-test-task1/components/UpdatePost.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UpdatePost = ({
  post,
  sendUpdate,
  sendDelete
}) => {
  const {
    0: update,
    1: setUpdate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: updateTitle,
    1: setUpdateTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(post ? post.title : "");
  const {
    0: updateBody,
    1: setUpdateBody
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(post ? post.body : "");

  const changeTitle = event => {
    setUpdateTitle(event.target.value);
  };

  const changeBody = event => {
    setUpdateBody(event.target.value);
  };

  return __jsx("div", {
    className: "post__edit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, !update ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
    onClick: () => setUpdate(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Update"), __jsx("button", {
    onClick: () => sendDelete(post.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Delete")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "text",
    value: updateTitle,
    onChange: changeTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    value: updateBody,
    onChange: changeBody,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("button", {
    onClick: () => sendUpdate(post.id, updateTitle, updateBody),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Confirm"), __jsx("button", {
    onClick: () => setUpdate(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Cancel")));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdatePost);

/***/ }),

/***/ "./core/axios.ts":
/*!***********************!*\
  !*** ./core/axios.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "https://simple-blog-api.crew.red";
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./core/index.ts":
/*!***********************!*\
  !*** ./core/index.ts ***!
  \***********************/
/*! exports provided: axios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./core/axios.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axios", function() { return _axios__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/posts/[postId].tsx":
/*!**********************************!*\
  !*** ./pages/posts/[postId].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/values */ "lodash/values");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_retrievePost_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/retrievePost/actions */ "./store/retrievePost/actions.ts");
/* harmony import */ var store_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/posts/actions */ "./store/posts/actions.ts");
/* harmony import */ var components_UpdatePost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UpdatePost */ "./components/UpdatePost.tsx");
var _jsxFileName = "/home/oleksii/Documents/Programming/develops-today-test-task1/pages/posts/[postId].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Posts = ({
  post,
  fetchRetrievePosts,
  fetchUpdatePost,
  fetchDeletePost,
  fetchCreateComment
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: newComment,
    1: setNewComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const postId = router.query.postId;

  if (!post || post.id !== Number(postId)) {
    fetchRetrievePosts(router.query.postId).then(() => {});
  }

  const updatePost = (postId, updateTitle, updateBody) => {
    fetchUpdatePost(postId, updateTitle, updateBody).then(() => {
      fetchRetrievePosts(router.query.postId);
    });
  };

  const deletePost = () => {
    fetchDeletePost(postId).then(() => {
      alert("Post deleted!");
      router.push("/");
    });
  };

  const changeComment = event => {
    setNewComment(event.target.value);
  };

  const addComment = () => {
    fetchCreateComment(postId, newComment);
  };

  return post && __jsx("div", {
    className: "post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "post__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, post.title), __jsx("div", {
    className: "post__body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, post.body), __jsx(components_UpdatePost__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    sendUpdate: updatePost,
    sendDelete: deletePost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "post__add-comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    value: newComment,
    onChange: changeComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("button", {
    onClick: addComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Add comment")), __jsx("div", {
    className: "post__comments",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, lodash_values__WEBPACK_IMPORTED_MODULE_3___default()(post.comments).map(comment => __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, comment.body))));
};

const mapStateToProps = ({
  retrievePostReducer
}) => ({
  post: retrievePostReducer.post
});

const mapDispatchToProps = {
  fetchRetrievePosts: store_retrievePost_actions__WEBPACK_IMPORTED_MODULE_4__["default"].fetchRetrievePosts,
  fetchUpdatePost: store_posts_actions__WEBPACK_IMPORTED_MODULE_5__["default"].fetchUpdatePost,
  fetchDeletePost: store_posts_actions__WEBPACK_IMPORTED_MODULE_5__["default"].fetchDeletePost,
  fetchCreateComment: store_retrievePost_actions__WEBPACK_IMPORTED_MODULE_4__["default"].fetchCreateComment
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Posts));

/***/ }),

/***/ "./store/posts/actions.ts":
/*!********************************!*\
  !*** ./store/posts/actions.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/api */ "./utils/api/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store/posts/types.ts");


const Actions = {
  createPost: newPost => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST"],
      payload: newPost
    };
  },
  updatePost: newPost => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST"],
      payload: newPost
    };
  },
  deletePost: postId => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST"],
      payload: {
        id: postId
      }
    };
  },
  setPosts: posts => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_POSTS"],
      payload: posts
    };
  },
  //   fetchCreatePost: (title, body) => (dispatch) :void => {
  // postApi.createPost(title, body)
  //   }
  fetchPosts: () => dispatch => {
    return utils_api__WEBPACK_IMPORTED_MODULE_0__["postApi"].getListAllPost().then(({
      data
    }) => {
      dispatch(Actions.setPosts(data));
      return Promise.resolve();
    }).catch(err => console.log(err));
  },
  fetchDeletePost: postId => dispatch => {
    return utils_api__WEBPACK_IMPORTED_MODULE_0__["postApi"].deletePost(postId).then(data => {
      console.log("data", data);
      dispatch(Actions.deletePost(postId));
      return Promise.resolve();
    });
  },
  fetchUpdatePost: (postId, title, body) => dispatch => {
    return utils_api__WEBPACK_IMPORTED_MODULE_0__["postApi"].updatePost(postId, title, body).then(({
      data
    }) => {
      console.log("data", data);
      dispatch(Actions.updatePost({
        id: data.id,
        title: data.title,
        body: data.body
      }));
      return Promise.resolve();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/posts/types.ts":
/*!******************************!*\
  !*** ./store/posts/types.ts ***!
  \******************************/
/*! exports provided: CREATE_POST, UPDATE_POST, DELETE_POST, SET_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTS", function() { return SET_POSTS; });
const CREATE_POST = "CREATE_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const SET_POSTS = "SET_POSTS";

/***/ }),

/***/ "./store/retrievePost/actions.ts":
/*!***************************************!*\
  !*** ./store/retrievePost/actions.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/api */ "./utils/api/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./store/retrievePost/types.ts");


const Actions = {
  setRetrievePost: retrievePost => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_RETRIEVE_POST"],
      payload: retrievePost
    };
  },
  addComment: comment => {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT"],
      payload: comment
    };
  },
  fetchRetrievePosts: postId => dispatch => {
    return utils_api__WEBPACK_IMPORTED_MODULE_0__["postApi"].getRetrievePost(postId).then(({
      data
    }) => {
      dispatch(Actions.setRetrievePost(data));
      return Promise.resolve();
    }).catch(err => console.log(err));
  },
  fetchCreateComment: (postId, body) => dispatch => {
    utils_api__WEBPACK_IMPORTED_MODULE_0__["commentApi"].createComment(postId, body).then(response => {
      const {
        data
      } = response;
      dispatch(Actions.addComment(data));
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/retrievePost/types.ts":
/*!*************************************!*\
  !*** ./store/retrievePost/types.ts ***!
  \*************************************/
/*! exports provided: SET_RETRIEVE_POST, ADD_COMMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RETRIEVE_POST", function() { return SET_RETRIEVE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT", function() { return ADD_COMMENT; });
const SET_RETRIEVE_POST = "SET_RETRIEVE_POST";
const ADD_COMMENT = "ADD_COMMENT";

/***/ }),

/***/ "./utils/api/comment.ts":
/*!******************************!*\
  !*** ./utils/api/comment.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./core/index.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  createComment: (post_id, body) => core__WEBPACK_IMPORTED_MODULE_0__["axios"].post("/comments", {
    postId: post_id,
    body: body
  })
});

/***/ }),

/***/ "./utils/api/index.ts":
/*!****************************!*\
  !*** ./utils/api/index.ts ***!
  \****************************/
/*! exports provided: postApi, commentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./utils/api/post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postApi", function() { return _post__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ "./utils/api/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commentApi", function() { return _comment__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./utils/api/post.ts":
/*!***************************!*\
  !*** ./utils/api/post.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core */ "./core/index.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  getListAllPost: () => core__WEBPACK_IMPORTED_MODULE_0__["axios"].get("/posts"),
  getRetrievePost: post_id => core__WEBPACK_IMPORTED_MODULE_0__["axios"].get(`/posts/${post_id}?_embed=comments`),
  createPost: (title, body) => core__WEBPACK_IMPORTED_MODULE_0__["axios"].post("/posts", {
    title: title,
    body: body
  }),
  updatePost: (post_id, title, body) => core__WEBPACK_IMPORTED_MODULE_0__["axios"].put(`/posts/${post_id}`, {
    title: title,
    body: body
  }),
  deletePost: post_id => core__WEBPACK_IMPORTED_MODULE_0__["axios"].delete(`/posts/${post_id}`)
});

/***/ }),

/***/ 6:
/*!****************************************!*\
  !*** multi ./pages/posts/[postId].tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oleksii/Documents/Programming/develops-today-test-task1/pages/posts/[postId].tsx */"./pages/posts/[postId].tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash/values":
/*!********************************!*\
  !*** external "lodash/values" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/values");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=[postId].js.map