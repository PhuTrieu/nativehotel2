(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon{\r\n    position: relative;\r\n    top: -1px;\r\n}\r\n\r\n.iconBasket{\r\n    position: relative;\r\n    top: -8px;\r\n}\r\n\r\n.iconCalendar{\r\n    position: relative;\r\n    top: -3px;\r\n}\r\n\r\n.breadcrumb-nativeLink a:hover{\r\n    color: gray !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.breadcrumb-nativeLink a{\r\n    color: black !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.button-Continue button{\r\n    color: white !important;\r\n    background-color: black;\r\n    border: 1px solid black;\r\n    width: 11vw;\r\n    transition: 0.5s;\r\n}\r\n\r\n.button-Continue button:hover{\r\n    color: black !important;\r\n    background-color: #F3F1EF;\r\n    border: 1px solid black;\r\n    width: 11vw;\r\n}\r\n\r\n.btn-del-spin:hover .icon-spin{\r\n    transition: 1s;\r\n}\r\n\r\n.btn-del-spin:hover .icon-spin{\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.hover-pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n.hover-underline:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.modalDate{\r\n    width: 30vw;\r\n    top: 30%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.date-start-picker input, .date-end-picker input{\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: 2.5vh;\r\n    border: none;\r\n    line-height: 30px;\r\n    border-bottom: 1px solid rgba(169, 169, 169, 0.823);\r\n    outline: none;\r\n}\r\n.date-start-picker, .date-end-picker{\r\n    margin-bottom: 2.5vh;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Basket/YourBasket.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Basket/YourBasket.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YourBasket; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer/Footer */ "./resources/js/components/Footer/Footer.jsx");
/* harmony import */ var _Navigation_NavTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/NavTop */ "./resources/js/components/Navigation/NavTop.jsx");
/* harmony import */ var _YourBasketInfo_YourBasketInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YourBasketInfo/YourBasketInfo */ "./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var YourBasket = /*#__PURE__*/function (_Component) {
  _inherits(YourBasket, _Component);

  var _super = _createSuper(YourBasket);

  function YourBasket(props) {
    var _this;

    _classCallCheck(this, YourBasket);

    _this = _super.call(this, props);
    _this.state = {
      slItemAddCart: localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'), 10) : 0
    };
    _this.addItemInShoppingCart = _this.addItemInShoppingCart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(YourBasket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "addItemInShoppingCart",
    value: function addItemInShoppingCart(sl) {
      this.setState({
        slItemAddCart: sl
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        slItemAddCart: this.state.slItemAddCart
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YourBasketInfo_YourBasketInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onAddItemInShoppingCart: this.addItemInShoppingCart
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return YourBasket;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.css":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./YourBasketInfo.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YourBasketInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var _YourBasketInfo_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./YourBasketInfo.css */ "./resources/js/components/Basket/YourBasketInfo/YourBasketInfo.css");
/* harmony import */ var _YourBasketInfo_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_YourBasketInfo_css__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





















var YourBasketInfo = /*#__PURE__*/function (_Component) {
  _inherits(YourBasketInfo, _Component);

  var _super = _createSuper(YourBasketInfo);

  function YourBasketInfo(props) {
    var _this;

    _classCallCheck(this, YourBasketInfo);

    _this = _super.call(this, props);
    _this.state = {
      slPhong: 0,
      startDate: null,
      endDate: null,
      diff: '',
      rooms: [],
      totalPrice: '',
      tempSD: null,
      tempED: null,
      tempDiff: '',
      modalDate: false,
      goToBooking: false,
      goToHome: false
    };
    _this.changeStartDate = _this.changeStartDate.bind(_assertThisInitialized(_this));
    _this.changeEndDate = _this.changeEndDate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(YourBasketInfo, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        slPhong: localStorage.getItem('slItemsShoppingCart') ? JSON.parse(localStorage.getItem('slItemsShoppingCart')) : 0,
        startDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
        endDate: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate),
        diff: localStorage.getItem('dateArriveCart') ? JSON.parse(localStorage.getItem('dateArriveCart')).days_diff : '',
        rooms: localStorage.getItem('itemsShoppingCart') ? JSON.parse(localStorage.getItem('itemsShoppingCart')) : null,
        tempSD: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).startDate),
        tempED: !localStorage.getItem('dateArriveCart') ? null : new Date(JSON.parse(localStorage.getItem('dateArriveCart')).endDate)
      }, function () {
        if (_this2.state.rooms != null) {
          var ttp = 0;

          _this2.state.rooms.forEach(function (room) {
            ttp += parseInt(room.giaLP, 10) * _this2.state.diff;
          });

          _this2.setState({
            totalPrice: ttp
          });
        }
      });
    }
  }, {
    key: "deleteItemsLocalStorage",
    value: function deleteItemsLocalStorage(no) {
      var _this3 = this;

      console.log('del cart item id: ', no);
      this.setState({
        rooms: this.state.rooms.filter(function (obj, index) {
          return index != no;
        }),
        slPhong: this.state.slPhong - 1
      }, function () {
        var ttp = 0;

        _this3.state.rooms.forEach(function (room) {
          ttp += parseInt(room.giaLP, 10) * _this3.state.diff;
        });

        _this3.setState({
          totalPrice: ttp
        });

        console.log(_this3.state.rooms);
        if (_this3.state.rooms.length == 0) localStorage.removeItem('itemsShoppingCart');else localStorage.setItem('itemsShoppingCart', JSON.stringify(_this3.state.rooms));
        if (_this3.state.slPhong == 0) localStorage.removeItem('slItemsShoppingCart');else localStorage.setItem('slItemsShoppingCart', JSON.stringify(_this3.state.slPhong));

        _this3.props.onAddItemInShoppingCart(localStorage.getItem('slItemsShoppingCart') ? parseInt(localStorage.getItem('slItemsShoppingCart'), 10) : 0);
      });
    }
  }, {
    key: "showRooms",
    value: function showRooms() {
      var _this4 = this;

      console.log(this.state.rooms);
      var lst = this.state.rooms.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "3",
          style: {
            borderRight: '1px solid #F3F1EF',
            height: '14vh',
            overflow: 'hidden'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.hinhAnh,
          style: {
            width: '12vw',
            height: 'auto'
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "6",
          style: {
            fontSize: '1.3vw',
            fontFamily: 'Georgia',
            borderRight: '1px solid #F3F1EF'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            fontWeight: 'bold',
            paddingLeft: '2vw'
          }
        }, "Room: ", item.tenLP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            fontWeight: 'bold',
            fontSize: '1.4vw',
            lineHeight: '3vw',
            paddingLeft: '2vw'
          }
        }, "Price: ", new Intl.NumberFormat().format(parseInt(item.giaLP, 10) * _this4.state.diff), " VND")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "3",
          style: {
            fontSize: '1.2vw',
            fontFamily: 'Georgia'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          outline: true,
          color: "red",
          className: "btn-del-spin",
          style: {
            padding: 0,
            marginTop: '5vh',
            marginLeft: '2.5vw'
          },
          onClick: function onClick() {
            return _this4.deleteItemsLocalStorage(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_15__["ImCancelCircle"], {
          style: {
            fontSize: '3vh'
          },
          color: "black",
          className: "icon-spin"
        }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
          style: {
            fontSize: '2vh',
            paddingLeft: '1vw'
          }
        }, "Remove")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
      });
      return lst;
    }
  }, {
    key: "changeStartDate",
    value: function changeStartDate(e) {
      var date = new Date(e);

      if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(), 'yyyy/MM/dd') > Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(date, 'yyyy/MM/dd')) {
        alert('Chọn nhầm ngày trong quá khứ');
        return;
      } else {
        // console.log('today', new Date());
        // console.log('e: ', e);
        this.setState({
          tempSD: date
        });
        date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(date, 'yyyy/MM/dd'); // console.log('start date: ', date);
      }
    }
  }, {
    key: "changeEndDate",
    value: function changeEndDate(e) {
      var _this5 = this;

      if (this.state.startDate === null) {
        alert('Bạn chưa chọn ngày bắt đầu');
        return;
      } else {
        var date = new Date(e); // console.log('today', new Date());
        // console.log('e: ', e);

        this.setState({
          tempED: date
        }, function () {
          date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(date, 'yyyy/MM/dd'); // console.log('end date: ', date);

          console.log('start date: ', _this5.state.tempSD);
          console.log('end date: ', _this5.state.tempED);
          var days_diff = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["differenceInDays"])(_this5.state.tempED, _this5.state.tempSD);
          console.log('days diff: ', days_diff);

          _this5.setState({
            tempDiff: days_diff
          });
        });
      }
    }
  }, {
    key: "saveChangeDatePicker",
    value: function saveChangeDatePicker() {
      var _this6 = this;

      this.setState({
        startDate: this.state.tempSD,
        endDate: this.state.tempED,
        diff: this.state.tempDiff
      }, function () {
        if (_this6.state.rooms != null) {
          var ttp = 0;

          _this6.state.rooms.forEach(function (room) {
            ttp += parseInt(room.giaLP, 10) * _this6.state.diff;
          });

          _this6.setState({
            totalPrice: ttp
          });
        }
      });
      var date_cart = {
        startDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(this.state.tempSD, 'yyyy/MM/dd'),
        endDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(this.state.tempED, 'yyyy/MM/dd'),
        days_diff: this.state.tempDiff
      };
      localStorage.setItem('dateArriveCart', JSON.stringify(date_cart));
      this.setState({
        modalDate: !this.state.modalDate
      });
    }
  }, {
    key: "showModalDate",
    value: function showModalDate() {
      var _this7 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
        style: {
          fontFamily: 'Georgia',
          fontSize: '2.5vh'
        },
        toggle: function toggle() {
          _this7.setState({
            modalDate: !_this7.state.modalDate
          });
        }
      }, "Change Date \xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__["BsCalendar"], {
        className: "iconCalendar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "3",
        style: {
          fontSize: '2.5vh',
          fontFamily: 'Georgia',
          paddingTop: '1%'
        }
      }, "Arrive:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "date-start-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
        selected: this.state.tempSD,
        onChange: this.changeStartDate,
        selectsStart: true,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        dateFormat: "dd/MM/yyyy"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "3",
        style: {
          fontSize: '2.5vh',
          fontFamily: 'Georgia',
          paddingTop: '1%'
        }
      }, "Depart:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "date-end-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
        selected: this.state.tempED,
        onChange: this.changeEndDate,
        selectsEnd: true,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        minDate: this.state.startDate,
        dateFormat: "dd/MM/yyyy"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "dark",
        onClick: function onClick() {
          return _this7.saveChangeDatePicker();
        }
      }, "Save change")));
    }
  }, {
    key: "onGoToBooking",
    value: function onGoToBooking() {
      var _this8 = this;

      if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(new Date(), 'yyyy/MM/dd') <= Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(this.state.startDate, 'yyyy/MM/dd')) {
        if (this.state.slPhong <= 0) {
          react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              fontSize: '20px'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_14__["BiErrorAlt"], null), "  B\u1EA1n ch\u01B0a ch\u1ECDn ph\xF2ng"), {
            position: react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].POSITION.BOTTOM_RIGHT,
            autoClose: 4000
          });
          this.setState({
            goToHome: !this.state.goToHome
          });
        } else {
          if (this.state.slPhong > 1) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              style: {
                fontSize: '20px'
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_14__["BiErrorAlt"], null), "  B\u1EA1n ch\u1EC9 \u0111\u01B0\u1EE3c ch\u1ECDn 1 ph\xF2ng"), {
              position: react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].POSITION.BOTTOM_RIGHT,
              autoClose: 4000
            });
          } else {
            axios.get('https://nativehotel2.herokuapp.com/api/room_types/' + this.state.rooms[0].idLP).then(function (res) {
              if (res.data != null) {
                if (res.data.slPhongTrong > 0) {
                  _this8.setState({
                    goToBooking: !_this8.state.goToBooking
                  });
                } else {
                  react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    style: {
                      fontSize: '20px'
                    }
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                    style: {
                      fontSize: '28px'
                    }
                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaRegSadCry"], null)), "  Phi\u1EC1n b\u1EA1n ch\u1ECDn ph\xF2ng kh\xE1c"), {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].POSITION.BOTTOM_RIGHT,
                    autoClose: 4000
                  });
                }
              }
            });
          }
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            fontSize: '20px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_14__["BiErrorAlt"], null), "  Ng\xE0y \u0111i c\u1EE7a b\u1EA1n \u0111\xE3 trong qu\xE1 kh\u1EE9"), {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].POSITION.BOTTOM_RIGHT,
          autoClose: 4000
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      if (this.state.goToHome) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/"
        });
      }

      if (this.state.goToBooking) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: "/booking"
        });
      }

      if (this.state.slPhong <= 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            paddingTop: '4%',
            backgroundColor: '#FFFFFF'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            backgroundColor: '#FFFFFF',
            paddingBottom: '1%'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "breadcrumb-nativeLink"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "NATIVE")), "\xA0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosArrowForward"], {
          className: "icon"
        }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YOUR BASKET"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            backgroundColor: '#F3F1EF'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          style: {
            paddingTop: '6%',
            paddingBottom: '2%'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            fontSize: '3vw',
            fontWeight: 'bold',
            fontFamily: 'Georgia'
          }
        }, "YOUR BASKET"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__["RiShoppingBasket2Line"], {
          style: {
            width: '4vw',
            height: '4vh'
          },
          className: "iconBasket"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: '1.3vw',
            fontFamily: 'Georgia'
          }
        }, "We no longer offer Pay on Arrival (for the moment anyway) and now ask for all web customers to pay on booking.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "6"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          style: {
            paddingTop: '2%',
            paddingBottom: '5%'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: '1.3vw',
            fontFamily: 'Georgia'
          }
        }, "Your basket is empty.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "6"
        }))));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          paddingTop: '4%',
          backgroundColor: '#FFFFFF'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: '#FFFFFF',
          paddingBottom: '1%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "breadcrumb-nativeLink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "NATIVE")), "\xA0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosArrowForward"], {
        className: "icon"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "YOUR BASKET"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: '#F3F1EF'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%',
          paddingBottom: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '2vw',
          fontWeight: 'bold',
          fontFamily: 'Georgia'
        }
      }, "YOUR BASKET"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__["RiShoppingBasket2Line"], {
        style: {
          width: '4vw',
          height: '4vh'
        },
        className: "iconBasket"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: '1.3vw',
          fontFamily: 'Georgia'
        }
      }, "We no longer offer Pay on Arrival (for the moment anyway) and now ask for all web customers to pay on booking.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "3"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '3%',
          paddingBottom: '8%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "3",
        style: {
          borderRight: '1px solid #F3F1EF'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '1.3vw',
          fontFamily: 'Georgia'
        }
      }, "Benefits of booking with us direct:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosStarOutline"], {
        style: {
          width: '4vw',
          height: '4vh'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontWeight: 'bold'
        }
      }, "LOWEST PRICE GUARANTEE"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__["RiCoinsLine"], {
        style: {
          width: '4vw',
          height: '4vh'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontWeight: 'bold'
        }
      }, "NO CREDIT CARD OR BOOKING FEES"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_9__["GiCarKey"], {
        style: {
          width: '4vw',
          height: '4vh'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontWeight: 'bold'
        }
      }, "11AM CHECKOUT"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ti__WEBPACK_IMPORTED_MODULE_10__["TiShoppingCart"], {
        style: {
          width: '4vw',
          height: '4vh'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontWeight: 'bold'
        }
      }, "CUSTOMISE YOUR BOOKING"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_11__["GrDocumentLocked"], {
        style: {
          width: '4vw',
          height: '4vh'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontWeight: 'bold'
        }
      }, "BOOK WITH CONFIDENCE")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '1.5vw',
          fontFamily: 'Georgia',
          fontWeight: 'revert'
        }
      }, "YOUR ROOM"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '2vh',
          fontFamily: 'Georgia',
          fontWeight: 'revert'
        }
      }, "Cost ", this.state.slPhong > 1 ? this.state.slPhong + " rooms" : this.state.slPhong + " room", " for ", this.state.diff, " ", this.state.diff > 1 ? 'nights' : 'night', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-pointer hover-underline",
        onClick: function onClick() {
          _this9.setState({
            modalDate: !_this9.state.modalDate
          });
        }
      }, "from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(this.state.startDate, 'dd/MM/yyyy')), " to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(this.state.endDate, 'dd/MM/yyyy')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        className: "modalDate",
        isOpen: this.state.modalDate,
        toggle: function toggle() {
          _this9.setState({
            modalDate: !_this9.state.modalDate
          });
        }
      }, this.showModalDate()))), this.showRooms(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '5%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        sm: "4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        sm: "4",
        style: {
          fontSize: '1.4vw',
          fontFamily: 'Georgia',
          textAlign: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total booking cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontWeight: 'bold',
          fontSize: '2vw'
        }
      }, new Intl.NumberFormat().format(this.state.totalPrice), " VND"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          paddingTop: '7%'
        },
        className: "button-Continue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this9.onGoToBooking();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "CONTINUE"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: "4"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], null));
    }
  }]);

  return YourBasketInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);