"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _icons = require("@ant-design/icons");
var _useLocalStorageState3 = _interopRequireDefault(require("use-local-storage-state"));
var _core = require("@dnd-kit/core");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _excluded = ["columns", "storageKey", "savedColumns", "onChecklistChange", "modalTitle", "sortable", "sortHandler", "openCustomModal", "onCustomModalClose"];
var _templateObject, _templateObject2, _templateObject3;
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/exhaustive-deps */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var EXPIRE_TIME = 24 * 60 * 60 * 1000;
var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  &:hover {\n    .anticon {\n      opacity: 1;\n    }\n  }\n"])));
var Toolbar = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  z-index: 10;\n  display: flex;\n  & > .anticon {\n    opacity: 0;\n    cursor: pointer;\n    font-size: 16px;\n    transition: all 0.3s ease-in-out;\n    margin: auto;\n  }\n"])));
var Handler = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: move;\n  font-size: 16px;\n  font-weight: bold;\n"])));
var TableCustom = exports["default"] = function TableCustom(_ref) {
  var _options$filter$flatM, _sortedOptions$map;
  var columns = _ref.columns,
    storageKey = _ref.storageKey,
    savedColumns = _ref.savedColumns,
    onChecklistChange = _ref.onChecklistChange,
    modalTitle = _ref.modalTitle,
    sortable = _ref.sortable,
    sortHandler = _ref.sortHandler,
    openCustomModal = _ref.openCustomModal,
    onCustomModalClose = _ref.onCustomModalClose,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useLocalStorageState = (0, _useLocalStorageState3["default"])("table-custom-".concat(storageKey)),
    _useLocalStorageState2 = _slicedToArray(_useLocalStorageState, 3),
    columsLocalStorage = _useLocalStorageState2[0],
    setColumsLocalStorage = _useLocalStorageState2[1],
    removeItem = _useLocalStorageState2[2].removeItem;
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    sortInfo = _useState4[0],
    setSortInfo = _useState4[1];
  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.PointerSensor, {
    activationConstraint: {
      distance: 8
    }
  }));
  var _ref2 = columsLocalStorage || {},
    syncTime = _ref2.syncTime;
  // 超时清空localstorage
  if (storageKey && +new Date() - syncTime > EXPIRE_TIME) {
    removeItem();
  }
  var resetColumns = function resetColumns(columns) {
    return columns.map(function (c) {
      var _ref4, _c$key2;
      if (c.children && c.children.length > 0) {
        var _ref3, _c$key;
        return _objectSpread(_objectSpread({}, c), {}, {
          label: c.title,
          value: (_ref3 = (_c$key = c.key) !== null && _c$key !== void 0 ? _c$key : c.dataIndex) !== null && _ref3 !== void 0 ? _ref3 : c.title,
          children: resetColumns(c.children)
        });
      }
      return _objectSpread(_objectSpread({}, c), {}, {
        label: c.title,
        value: (_ref4 = (_c$key2 = c.key) !== null && _c$key2 !== void 0 ? _c$key2 : c.dataIndex) !== null && _ref4 !== void 0 ? _ref4 : c.title
      });
    });
  };
  var options = resetColumns(columns);
  var parentKeys = options.map(function (o) {
    return o.value;
  });
  var isNoChildrenOptions = !options.find(function (o) {
    return o.children;
  });

  // 判断是否存在不可自定义的列，如果不存在则表示不匹配，使用默认值
  var isNotMatch = ((_options$filter$flatM = options.filter(function (item) {
    return item.disableCustom;
  }).flatMap(function (o) {
    return o.children ? [o.value].concat(_toConsumableArray(o.children.map(function (c) {
      return c.value;
    }))) : o.value;
  }).filter(function (item) {
    return savedColumns === null || savedColumns === void 0 ? void 0 : savedColumns.includes(item);
  })) === null || _options$filter$flatM === void 0 ? void 0 : _options$filter$flatM.length) === 0;
  var _useState5 = (0, _react.useState)(storageKey && columsLocalStorage !== null && columsLocalStorage !== void 0 && columsLocalStorage.sortedList ? columsLocalStorage === null || columsLocalStorage === void 0 ? void 0 : columsLocalStorage.sortedList : options),
    _useState6 = _slicedToArray(_useState5, 2),
    sortedList = _useState6[0],
    setSortedList = _useState6[1];
  var _useState7 = (0, _react.useState)(storageKey && columsLocalStorage !== null && columsLocalStorage !== void 0 && columsLocalStorage.checkedList ? columsLocalStorage === null || columsLocalStorage === void 0 ? void 0 : columsLocalStorage.checkedList : savedColumns && (savedColumns === null || savedColumns === void 0 ? void 0 : savedColumns.length) > 0 && !isNotMatch ? savedColumns : options.flatMap(function (o) {
      return o.children ? [o.value].concat(_toConsumableArray(o.children.map(function (c) {
        return c.value;
      }))) : o.value;
    })),
    _useState8 = _slicedToArray(_useState7, 2),
    checkedList = _useState8[0],
    setCheckedList = _useState8[1];
  (0, _react.useEffect)(function () {
    if (openCustomModal) {
      setVisible(true);
    }
  }, [openCustomModal]);
  (0, _react.useEffect)(function () {
    if (sortInfo) {
      var newColumns = _toConsumableArray(sortedList);
      if (sortInfo.value === null) {
        var oldIndex = sortInfo.oldIndex;
        var newIndex = sortInfo.newIndex;
        newColumns = (0, _sortable.arrayMove)(newColumns, oldIndex, newIndex);
      } else {
        var foundChangedIndex = newColumns.findIndex(function (c) {
          return c.value === sortInfo.value;
        });
        if (foundChangedIndex === -1) return;
        var children = newColumns[foundChangedIndex].children || [];
        newColumns[foundChangedIndex].children = (0, _sortable.arrayMove)(children, sortInfo.oldIndex, sortInfo.newIndex);
      }
      setSortedList(newColumns);
      setSortInfo(null);
    }
  }, [sortInfo, JSON.stringify(sortedList)]);
  var filterColumns = (0, _react.useCallback)(function (columns) {
    return columns.map(function (c) {
      var _ref5, _c$key3;
      var newColumn = _objectSpread({}, c);
      if (c.children && c.children.length > 0) {
        newColumn.children = filterColumns(c.children);
      }
      if (checkedList.includes((_ref5 = (_c$key3 = c.key) !== null && _c$key3 !== void 0 ? _c$key3 : c.dataIndex) !== null && _ref5 !== void 0 ? _ref5 : c.title)) {
        return newColumn;
      }
      return false;
    }).filter(Boolean);
  }, [checkedList]);
  var tableColumns = (0, _react.useMemo)(function () {
    if (sortable) {
      return filterColumns(sortedList);
    }
    return filterColumns(options);
  }, [JSON.stringify(sortedList), filterColumns, sortable, options]);
  var sortedOptions = (0, _react.useMemo)(function () {
    if (sortedList) {
      // sort options by sortedList
      var newColumns = _toConsumableArray(options);
      newColumns.sort(function (a, b) {
        var aIndex = sortedList.findIndex(function (c) {
          return c.value === a.value;
        });
        var bIndex = sortedList.findIndex(function (c) {
          return c.value === b.value;
        });
        return aIndex - bIndex;
      });
      return newColumns.map(function (c) {
        var _sortedList$find;
        var foundItem = ((_sortedList$find = sortedList.find(function (item) {
          return item.value === c.value;
        })) === null || _sortedList$find === void 0 ? void 0 : _sortedList$find.children) || [];
        var children = _toConsumableArray(c.children || []);
        return _objectSpread(_objectSpread({}, c), {}, {
          children: children && children.length > 0 ? children.sort(function (a, b) {
            var aIndex = foundItem.findIndex(function (item) {
              return item.value === a.value;
            });
            var bIndex = foundItem.findIndex(function (item) {
              return item.value === b.value;
            });
            return aIndex - bIndex;
          }) : children
        });
      });
    }
  }, [JSON.stringify(sortedList), options]);
  (0, _react.useEffect)(function () {
    setCheckedList(storageKey && columsLocalStorage !== null && columsLocalStorage !== void 0 && columsLocalStorage.checkedList ? columsLocalStorage === null || columsLocalStorage === void 0 ? void 0 : columsLocalStorage.checkedList : savedColumns && (savedColumns === null || savedColumns === void 0 ? void 0 : savedColumns.length) > 0 && !isNotMatch ? savedColumns : options.flatMap(function (o) {
      return o.children ? [o.value].concat(_toConsumableArray(o.children.map(function (c) {
        return c.value;
      }))) : o.value;
    }));
  }, [columns]);
  (0, _react.useEffect)(function () {
    setCheckedList(tableColumns.flatMap(function (o) {
      return o.children ? [o.value].concat(_toConsumableArray(o.children.map(function (c) {
        return c.value;
      }))) : o.value;
    }));
  }, [JSON.stringify(tableColumns)]);
  (0, _react.useEffect)(function () {
    if (storageKey) {
      setColumsLocalStorage(_objectSpread(_objectSpread({}, columsLocalStorage), {}, {
        checkedList: checkedList,
        syncTime: +new Date()
      }));
    }
    if (onChecklistChange) {
      onChecklistChange(checkedList, sortedList);
    }
  }, [JSON.stringify(checkedList)]);
  (0, _react.useEffect)(function () {
    if (storageKey) {
      setColumsLocalStorage(_objectSpread(_objectSpread({}, columsLocalStorage), {}, {
        sortedList: sortedList,
        syncTime: +new Date()
      }));
    }
    if (onChecklistChange) {
      onChecklistChange(checkedList, sortedList);
    }
  }, [JSON.stringify(sortedList)]);
  var handleDragEnd = function handleDragEnd(_ref6) {
    var value = _ref6.value;
    return function (event) {
      var _active$data$current$, _active$data$current;
      var active = event.active,
        over = event.over;
      var _ref7 = (_active$data$current$ = (_active$data$current = active.data.current) === null || _active$data$current === void 0 ? void 0 : _active$data$current.sortable) !== null && _active$data$current$ !== void 0 ? _active$data$current$ : {},
        items = _ref7.items;
      if (active && over && active.id !== (over === null || over === void 0 ? void 0 : over.id) && items) {
        var oldIndex = items.indexOf(active.id);
        var newIndex = items.indexOf(over === null || over === void 0 ? void 0 : over.id);
        setSortInfo({
          value: value,
          oldIndex: oldIndex,
          newIndex: newIndex
        });
      }
    };
  };
  return /*#__PURE__*/_react["default"].createElement(Container, null, openCustomModal === undefined ? /*#__PURE__*/_react["default"].createElement(Toolbar, null, /*#__PURE__*/_react["default"].createElement(_icons.SettingOutlined, {
    onClick: function onClick() {
      return setVisible(true);
    }
  })) : null, /*#__PURE__*/_react["default"].createElement(_antd.Table, _extends({
    columns: tableColumns
  }, rest)), /*#__PURE__*/_react["default"].createElement(_antd.Modal, {
    title: modalTitle,
    width: 800,
    open: visible,
    visible: visible,
    onOk: function onOk() {
      setVisible(false);
      if (onCustomModalClose) {
        onCustomModalClose();
      }
    },
    onCancel: function onCancel() {
      setVisible(false);
      if (onCustomModalClose) {
        onCustomModalClose();
      }
    },
    footer: null
  }, /*#__PURE__*/_react["default"].createElement(_antd.Checkbox.Group, {
    value: checkedList,
    onChange: function onChange(checkedValues) {
      // 取消勾选
      if (checkedList.length > checkedValues.length) {
        var uncheckItem = checkedList.filter(function (c) {
          return !checkedValues.includes(c);
        });
        // 取消勾选的是父节点
        if (parentKeys.includes(uncheckItem[0])) {
          var childrenKeysToUncheck = options.filter(function (o) {
            return uncheckItem[0] === o.value && !checkedValues.includes(o.value);
          }).flatMap(function (o) {
            return o.children ? _toConsumableArray(o.children.map(function (c) {
              return c.value;
            })) : false;
          }).filter(Boolean);
          setCheckedList(_toConsumableArray(new Set(_toConsumableArray(checkedValues.filter(function (c) {
            return !childrenKeysToUncheck.includes(c);
          })))));
        } else {
          var parentKeysToUncheck = options.filter(function (o) {
            if (o.children && o.children.length > 0) {
              return o.children.every(function (c) {
                return !checkedValues.includes(c.value);
              });
            }
            return false;
          }).map(function (o) {
            return o.value;
          });
          setCheckedList(_toConsumableArray(new Set(_toConsumableArray(checkedValues.filter(function (c) {
            return !parentKeysToUncheck.includes(c);
          })))));
        }
      } else {
        // 勾选
        var checkItem = checkedValues.filter(function (c) {
          return !checkedList.includes(c);
        });
        if (parentKeys.includes(checkItem[0])) {
          var childrenKeysToCheck = options.filter(function (o) {
            return checkItem[0] === o.value && checkedValues.includes(o.value);
          }).flatMap(function (o) {
            return o.children ? _toConsumableArray(o.children.map(function (c) {
              return c.value;
            })) : false;
          }).filter(Boolean);
          setCheckedList(_toConsumableArray(new Set([].concat(_toConsumableArray(checkedValues), _toConsumableArray(childrenKeysToCheck)))));
        } else {
          var parentKeysToCheck = options.filter(function (o) {
            if (o.children && o.children.length > 0) {
              return o.children.find(function (c) {
                return checkedValues.includes(c.value);
              });
            }
            return false;
          }).map(function (o) {
            return o.value;
          });
          setCheckedList(_toConsumableArray(new Set([].concat(_toConsumableArray(checkedValues), _toConsumableArray(parentKeysToCheck)))));
        }
      }
    },
    style: {
      width: '100%',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.DndContext, {
    sensors: sensors,
    collisionDetection: _core.closestCenter,
    onDragEnd: handleDragEnd({
      value: null
    })
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_sortable.SortableContext, {
    items: (_sortedOptions$map = sortedOptions === null || sortedOptions === void 0 ? void 0 : sortedOptions.map(function (o) {
      return o.value;
    })) !== null && _sortedOptions$map !== void 0 ? _sortedOptions$map : [],
    strategy: _sortable.rectSortingStrategy
  }, sortedOptions === null || sortedOptions === void 0 ? void 0 : sortedOptions.map(function (o, index) {
    var _o$children, _o$children2;
    var checkedChildren = (_o$children = o.children) === null || _o$children === void 0 ? void 0 : _o$children.filter(function (c) {
      return checkedList.includes(c.value);
    });
    var indeterminate = (checkedChildren === null || checkedChildren === void 0 ? void 0 : checkedChildren.length) > 0 && (checkedChildren === null || checkedChildren === void 0 ? void 0 : checkedChildren.length) < ((_o$children2 = o.children) === null || _o$children2 === void 0 ? void 0 : _o$children2.length);
    return isNoChildrenOptions ? /*#__PURE__*/_react["default"].createElement(CheckboxItem, _extends({
      key: o.value,
      id: o.value
    }, o, {
      sortable: sortable,
      sortHandler: sortHandler
    })) : /*#__PURE__*/_react["default"].createElement(CheckboxGroupItem, _extends({
      key: o.value,
      id: o.value
    }, o, {
      indeterminate: indeterminate,
      sortable: sortable,
      sortHandler: sortHandler
    }), o.children && o.children.length > 0 && /*#__PURE__*/_react["default"].createElement(_core.DndContext, {
      sensors: sensors,
      collisionDetection: _core.closestCenter,
      onDragEnd: handleDragEnd({
        value: o.value
      })
    }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(_sortable.SortableContext, {
      items: o.children.map(function (c) {
        return c.value;
      }),
      strategy: _sortable.rectSortingStrategy
    }, o.children.map(function (c, i) {
      return /*#__PURE__*/_react["default"].createElement(CheckboxItem, _extends({
        key: c.value,
        id: c.value
      }, c, {
        sortable: sortable,
        sortHandler: sortHandler
      }));
    })))));
  })))))));
};

/**
 * components for sorting
 */
var CheckboxItem = function CheckboxItem(props) {
  var _props$sortHandler;
  var _useSortable = (0, _sortable.useSortable)({
      id: props.id,
      resizeObserverConfig: {}
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition,
    setActivatorNodeRef = _useSortable.setActivatorNodeRef;
  var style = {
    transform: _utilities.CSS.Transform.toString(transform),
    transition: transition
  };
  return /*#__PURE__*/_react["default"].createElement(_antd.Col, _extends({
    span: 6,
    ref: setNodeRef,
    style: style
  }, attributes), /*#__PURE__*/_react["default"].createElement(_antd.Checkbox, {
    value: props.value,
    disabled: props.disableCustom
  }, props.label), props.sortable ? /*#__PURE__*/_react["default"].createElement(Handler, _extends({
    ref: setActivatorNodeRef
  }, listeners), (_props$sortHandler = props.sortHandler) !== null && _props$sortHandler !== void 0 ? _props$sortHandler : '::') : null);
};
var CheckboxGroupItem = function CheckboxGroupItem(props) {
  var _props$sortHandler2;
  var _useSortable2 = (0, _sortable.useSortable)({
      id: props.id,
      resizeObserverConfig: {}
    }),
    attributes = _useSortable2.attributes,
    listeners = _useSortable2.listeners,
    setNodeRef = _useSortable2.setNodeRef,
    transform = _useSortable2.transform,
    transition = _useSortable2.transition,
    setActivatorNodeRef = _useSortable2.setActivatorNodeRef;
  var style = {
    transform: _utilities.CSS.Transform.toString(transform),
    transition: transition,
    width: '100%'
  };
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    key: props.value,
    ref: setNodeRef,
    style: style
  }, attributes), /*#__PURE__*/_react["default"].createElement(_antd.Divider, {
    orientation: "left",
    orientationMargin: "0",
    style: {
      margin: '24px 0 8px 0'
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Checkbox, {
    value: props.value,
    disabled: props.disableCustom,
    indeterminate: props.indeterminate
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: 16
    }
  }, props.label)), props.sortable ? /*#__PURE__*/_react["default"].createElement(Handler, _extends({
    ref: setActivatorNodeRef
  }, listeners), (_props$sortHandler2 = props.sortHandler) !== null && _props$sortHandler2 !== void 0 ? _props$sortHandler2 : '::') : null), props.children);
};