"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ScreenSize;

(function (ScreenSize) {
  ScreenSize["xs"] = "xs";
  ScreenSize["sm"] = "sm";
  ScreenSize["md"] = "md";
  ScreenSize["lg"] = "lg";
  ScreenSize["xl"] = "xl";
})(ScreenSize || (ScreenSize = {}));

var DEFAULT_SCREEN_SIZES = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

var noop = function noop() {};

var window = global.window || {
  addEventListener: noop,
  removeEventListener: noop
};

var getScreenSize = function getScreenSize(screenSizes) {
  var screenWidth = window.innerWidth || 0;
  if (screenWidth < screenSizes.sm) return ScreenSize.xs;
  if (screenWidth >= screenSizes.sm && screenWidth < screenSizes.md) return ScreenSize.sm;
  if (screenWidth >= screenSizes.md && screenWidth < screenSizes.lg) return ScreenSize.md;
  if (screenWidth >= screenSizes.lg && screenWidth < screenSizes.xl) return ScreenSize.lg;
  if (screenWidth >= screenSizes.xl) return ScreenSize.xl;
};

var Context = (0, _react.createContext)({
  screenSizes: DEFAULT_SCREEN_SIZES,
  screenSize: getScreenSize(DEFAULT_SCREEN_SIZES)
});
var ContextProvider = Context.Provider;
var Consumer = Context.Consumer;
exports.Consumer = Consumer;

var Provider = function Provider(props) {
  var _useState = (0, _react.useState)(_objectSpread({}, DEFAULT_SCREEN_SIZES, props.screenSizes)),
      _useState2 = _slicedToArray(_useState, 2),
      screenSizes = _useState2[0],
      setScreenSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(getScreenSize(screenSizes)),
      _useState4 = _slicedToArray(_useState3, 2),
      screenSize = _useState4[0],
      setScreenSize = _useState4[1];

  var updateScreenSizes = function updateScreenSizes(newScreenSizes) {
    return setScreenSizes(_objectSpread({}, screenSizes, newScreenSizes));
  };

  var onResize = (0, _react.useCallback)(function () {
    return setScreenSize(getScreenSize(screenSizes));
  }, []);
  (0, _react.useEffect)(function () {
    setScreenSize(getScreenSize(screenSizes));
    window.removeEventListener && window.removeEventListener('resize', onResize);
    window.addEventListener && window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener && window.removeEventListener('resize', onResize);
    };
  }, [screenSizes]);
  return _react["default"].createElement(ContextProvider, {
    value: {
      screenSizes: screenSizes,
      updateScreenSizes: updateScreenSizes,
      screenSize: screenSize
    }
  }, props.children);
};

exports.Provider = Provider;
Provider.propTypes = {
  children: _propTypes["default"].node.isRequired,
  screenSizes: _propTypes["default"].shape({
    xs: _propTypes["default"].number,
    sm: _propTypes["default"].number,
    md: _propTypes["default"].number,
    lg: _propTypes["default"].number,
    xl: _propTypes["default"].number
  })
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdGF0ZS50c3giXSwibmFtZXMiOlsiU2NyZWVuU2l6ZSIsIkRFRkFVTFRfU0NSRUVOX1NJWkVTIiwic20iLCJtZCIsImxnIiwieGwiLCJub29wIiwid2luZG93IiwiZ2xvYmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTY3JlZW5TaXplIiwic2NyZWVuU2l6ZXMiLCJzY3JlZW5XaWR0aCIsImlubmVyV2lkdGgiLCJ4cyIsIkNvbnRleHQiLCJzY3JlZW5TaXplIiwiQ29udGV4dFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDb25zdW1lciIsInByb3BzIiwic2V0U2NyZWVuU2l6ZXMiLCJzZXRTY3JlZW5TaXplIiwidXBkYXRlU2NyZWVuU2l6ZXMiLCJuZXdTY3JlZW5TaXplcyIsIm9uUmVzaXplIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNLQSxVOztXQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtHQUFBQSxVLEtBQUFBLFU7O0FBMEJMLElBQU1DLG9CQUFpQyxHQUFHO0FBQ3hDQyxFQUFBQSxFQUFFLEVBQUUsR0FEb0M7QUFFeENDLEVBQUFBLEVBQUUsRUFBRSxHQUZvQztBQUd4Q0MsRUFBQUEsRUFBRSxFQUFFLEdBSG9DO0FBSXhDQyxFQUFBQSxFQUFFLEVBQUU7QUFKb0MsQ0FBMUM7O0FBT0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQVFBLElBQU1DLE1BQWMsR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCO0FBQUVFLEVBQUFBLGdCQUFnQixFQUFFSCxJQUFwQjtBQUEwQkksRUFBQUEsbUJB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Q1MsU0FBVCxHQUFxQjtBQUNuQkQsRUFBQUEsUUFBUSxFQUFFRSxzQkFBVUMsSUFBVixDQUFlQyxVQUROO0FBRW5CbkIsRUFBQUEsV0FBVyxFQUFFaUIsc0JBQVVHLEtBQVYsQ0FBZ0I7QUFDM0JqQixJQUFBQSxFQUFFLEVBQUVjLHNCQUFVSSxNQURhO0FBRTNCL0IsSUFBQUEsRUFBRSxFQUFFMkIsc0JBQVVJLE1BRmE7QUFHM0I5QixJQUFBQSxFQUFFLEVBQUUwQixzQkFBVUksTUFIYTtBQUkzQjdCLElBQUFBLEVBQUUsRUFBRXlCLHNCQUFVSSxNQUphO0FBSzNCNUIsSUFBQUEsRUFBRSxFQUFFd0Isc0JBQVVJO0FBTGEsR0FBaEI7QUFGTSxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgRnVuY3Rpb25Db21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbnRlcmZhY2UgU2NyZWVuU2l6ZXMge1xuICBzbTogbnVtYmVyLFxuICBtZDogbnVtYmVyLFxuICBsZzogbnVtYmVyLFxuICB4bDogbnVtYmVyXG59XG5cbmVudW0gU2NyZWVuU2l6ZSB7XG4gIHhzID0gJ3hzJyxcbiAgc20gPSAnc20nLFxuICBtZCA9ICdtZCcsXG4gIGxnID0gJ2xnJyxcbiAgeGwgPSAneGwnXG59XG5cbmludGVyZmFjZSBQYXJ0aWFsU2NyZWVuU2l6ZXMge1xuICBzbT86IG51bWJlcixcbiAgbWQ/OiBudW1iZXIsXG4gIGxnPzogbnVtYmVyLFxuICB4bD86IG51bWJlclxufVxuXG5pbnRlcmZhY2UgRGVmYXVsdFN0YXRlIHtcbiAgc2NyZWVuU2l6ZXM6IFNjcmVlblNpemVzLFxuICBzY3JlZW5TaXplOiBTY3JlZW5TaXplLFxuICB1cGRhdGVTY3JlZW5TaXplcz8obmV3U2NyZWVuU2l6ZXM6IFBhcnRpYWxTY3JlZW5TaXplcyk6IHZvaWRcbn1cblxuaW50ZXJmYWNlIFN0YXRlUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlLFxuICBzY3JlZW5TaXplcz86IFBhcnRpYWxTY3JlZW5TaXplc1xufVxuXG5jb25zdCBERUZBVUxUX1NDUkVFTl9TSVpFUzogU2NyZWVuU2l6ZXMgPSB7XG4gIHNtOiA1NzYsXG4gIG1kOiA3NjgsXG4gIGxnOiA5OTIsXG4gIHhsOiAxMjAwXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuaW50ZXJmYWNlIFdpbmRvdyB7XG4gIGFkZEV2ZW50TGlzdGVuZXI6IEZ1bmN0aW9uLFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBGdW5jdGlvbixcbiAgaW5uZXJXaWR0aDogbnVtYmVyXG59XG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBhbnlcbmNvbnN0IHdpbmRvdzogV2luZG93ID0gZ2xvYmFsLndpbmRvdyB8fCB7IGFkZEV2ZW50TGlzdGVuZXI6IG5vb3AsIHJlbW92ZUV2ZW50TGlzdGVuZXI6IG5vb3AgfVxuXG5jb25zdCBnZXRTY3JlZW5TaXplOiBGdW5jdGlvbiA9IChzY3JlZW5TaXplczogU2NyZWVuU2l6ZXMpOiBTY3JlZW5TaXplID0+IHtcbiAgY29uc3Qgc2NyZWVuV2lkdGg6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgaWYgKHNjcmVlbldpZHRoIDwgc2NyZWVuU2l6ZXMuc20pIHJldHVybiBTY3JlZW5TaXplLnhzXG4gIGlmIChzY3JlZW5XaWR0aCA+PSBzY3JlZW5TaXplcy5zbSAmJiBzY3JlZW5XaWR0aCA8IHNjcmVlblNpemVzLm1kKSByZXR1cm4gU2NyZWVuU2l6ZS5zbVxuICBpZiAoc2NyZWVuV2lkdGggPj0gc2NyZWVuU2l6ZXMubWQgJiYgc2NyZWVuV2lkdGggPCBzY3JlZW5TaXplcy5sZykgcmV0dXJuIFNjcmVlblNpemUubWRcbiAgaWYgKHNjcmVlbldpZHRoID49IHNjcmVlblNpemVzLmxnICYmIHNjcmVlbldpZHRoIDwgc2NyZWVuU2l6ZXMueGwpIHJldHVybiBTY3JlZW5TaXplLmxnXG4gIGlmIChzY3JlZW5XaWR0aCA+PSBzY3JlZW5TaXplcy54bCkgcmV0dXJuIFNjcmVlblNpemUueGxcbn1cblxuY29uc3QgQ29udGV4dDogUmVhY3QuQ29udGV4dDxEZWZhdWx0U3RhdGU+ID0gY3JlYXRlQ29udGV4dCh7IHNjcmVlblNpemVzOiBERUZBVUxUX1NDUkVFTl9TSVpFUywgc2NyZWVuU2l6ZTogZ2V0U2NyZWVuU2l6ZShERUZBVUxUX1NDUkVFTl9TSVpFUykgfSlcbmNvbnN0IENvbnRleHRQcm92aWRlciA9IENvbnRleHQuUHJvdmlkZXJcbmV4cG9ydCBjb25zdCBDb25zdW1lciA9IENvbnRleHQuQ29uc3VtZXJcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczogU3RhdGVQcm9wcykgPT4ge1xuICBjb25zdCBbIHNjcmVlblNpemVzLCBzZXRTY3JlZW5TaXplcyBdOiBbIFNjcmVlblNpemVzLCBGdW5jdGlvbiBdID0gdXNlU3RhdGUoeyAuLi5ERUZBVUxUX1NDUkVFTl9TSVpFUywgLi4ucHJvcHMuc2NyZWVuU2l6ZXMgfSlcbiAgY29uc3QgWyBzY3JlZW5TaXplLCBzZXRTY3JlZW5TaXplIF06IFsgU2NyZWVuU2l6ZSwgRnVuY3Rpb24gXSA9IHVzZVN0YXRlKGdldFNjcmVlblNpemUoc2NyZWVuU2l6ZXMpKVxuICBjb25zdCB1cGRhdGVTY3JlZW5TaXplcyA9IChuZXdTY3JlZW5TaXplczogUGFydGlhbFNjcmVlblNpemVzKTogdm9pZCA9PiBzZXRTY3JlZW5TaXplcyh7IC4uLnNjcmVlblNpemVzLCAuLi5uZXdTY3JlZW5TaXplcyB9KVxuICBjb25zdCBvblJlc2l6ZTogRXZlbnRMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNjcmVlblNpemUoZ2V0U2NyZWVuU2l6ZShzY3JlZW5TaXplcykpLCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNjcmVlblNpemUoZ2V0U2NyZWVuU2l6ZShzY3JlZW5TaXplcykpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxuICB9LCBbIHNjcmVlblNpemVzIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFByb3ZpZGVyIHZhbHVlPXt7IHNjcmVlblNpemVzLCB1cGRhdGVTY3JlZW5TaXplcywgc2NyZWVuU2l6ZSB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgKVxufVxuXG5Qcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBzY3JlZW5TaXplczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB4czogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZzogUHJvcFR5cGVzLm51bWJlcixcbiAgICB4bDogUHJvcFR5cGVzLm51bWJlclxuICB9KVxufVxuIl19