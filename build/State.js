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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdGF0ZS50c3giXSwibmFtZXMiOlsiU2NyZWVuU2l6ZSIsIkRFRkFVTFRfU0NSRUVOX1NJWkVTIiwic20iLCJtZCIsImxnIiwieGwiLCJnZXRTY3JlZW5TaXplIiwic2NyZWVuU2l6ZXMiLCJzY3JlZW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ4cyIsIkNvbnRleHQiLCJzY3JlZW5TaXplIiwiQ29udGV4dFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDb25zdW1lciIsInByb3BzIiwic2V0U2NyZWVuU2l6ZXMiLCJzZXRTY3JlZW5TaXplIiwidXBkYXRlU2NyZWVuU2l6ZXMiLCJuZXdTY3JlZW5TaXplcyIsIm9uUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU0tBLFU7O1dBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0dBQUFBLFUsS0FBQUEsVTs7QUEwQkwsSUFBTUMsb0JBQWlDLEdBQUc7QUFDeENDLEVBQUFBLEVBQUUsRUFBRSxHQURvQztBQUV4Q0MsRUFBQUEsRUFBRSxFQUFFLEdBRm9DO0FBR3hDQyxFQUFBQSxFQUFFLEVBQUUsR0FIb0M7QUFJeENDLEVBQUFBLEVBQUUsRUFBRTtBQUpvQyxDQUExQzs7QUFPQSxJQUFNQyxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixDQUFDQyxXQUFELEVBQTBDO0FBQ3hFLE1BQU1DLFdBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQixDQUFqRDtBQUNBLE1BQUlGLFdBQVcsR0FBR0QsV0FBVyxDQUFDTCxFQUE5QixFQUFrQyxPQUFPRixV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NUIsSUFBQUEsRUFBRSxFQUFFd0Isc0JBQVVJLE1BSGE7QUFJM0IzQixJQUFBQSxFQUFFLEVBQUV1QixzQkFBVUksTUFKYTtBQUszQjFCLElBQUFBLEVBQUUsRUFBRXNCLHNCQUFVSTtBQUxhLEdBQWhCO0FBRk0sQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW50ZXJmYWNlIFNjcmVlblNpemVzIHtcbiAgc206IG51bWJlcixcbiAgbWQ6IG51bWJlcixcbiAgbGc6IG51bWJlcixcbiAgeGw6IG51bWJlclxufVxuXG5lbnVtIFNjcmVlblNpemUge1xuICB4cyA9ICd4cycsXG4gIHNtID0gJ3NtJyxcbiAgbWQgPSAnbWQnLFxuICBsZyA9ICdsZycsXG4gIHhsID0gJ3hsJ1xufVxuXG5pbnRlcmZhY2UgUGFydGlhbFNjcmVlblNpemVzIHtcbiAgc20/OiBudW1iZXIsXG4gIG1kPzogbnVtYmVyLFxuICBsZz86IG51bWJlcixcbiAgeGw/OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIERlZmF1bHRTdGF0ZSB7XG4gIHNjcmVlblNpemVzOiBTY3JlZW5TaXplcyxcbiAgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZSxcbiAgdXBkYXRlU2NyZWVuU2l6ZXM/KG5ld1NjcmVlblNpemVzOiBQYXJ0aWFsU2NyZWVuU2l6ZXMpOiB2b2lkXG59XG5cbmludGVyZmFjZSBTdGF0ZVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZSxcbiAgc2NyZWVuU2l6ZXM/OiBQYXJ0aWFsU2NyZWVuU2l6ZXNcbn1cblxuY29uc3QgREVGQVVMVF9TQ1JFRU5fU0laRVM6IFNjcmVlblNpemVzID0ge1xuICBzbTogNTc2LFxuICBtZDogNzY4LFxuICBsZzogOTkyLFxuICB4bDogMTIwMFxufVxuXG5jb25zdCBnZXRTY3JlZW5TaXplOiBGdW5jdGlvbiA9IChzY3JlZW5TaXplczogU2NyZWVuU2l6ZXMpOiBTY3JlZW5TaXplID0+IHtcbiAgY29uc3Qgc2NyZWVuV2lkdGg6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgaWYgKHNjcmVlbldpZHRoIDwgc2NyZWVuU2l6ZXMuc20pIHJldHVybiBTY3JlZW5TaXplLnhzXG4gIGlmIChzY3JlZW5XaWR0aCA+PSBzY3JlZW5TaXplcy5zbSAmJiBzY3JlZW5XaWR0aCA8IHNjcmVlblNpemVzLm1kKSByZXR1cm4gU2NyZWVuU2l6ZS5zbVxuICBpZiAoc2NyZWVuV2lkdGggPj0gc2NyZWVuU2l6ZXMubWQgJiYgc2NyZWVuV2lkdGggPCBzY3JlZW5TaXplcy5sZykgcmV0dXJuIFNjcmVlblNpemUubWRcbiAgaWYgKHNjcmVlbldpZHRoID49IHNjcmVlblNpemVzLmxnICYmIHNjcmVlbldpZHRoIDwgc2NyZWVuU2l6ZXMueGwpIHJldHVybiBTY3JlZW5TaXplLmxnXG4gIGlmIChzY3JlZW5XaWR0aCA+PSBzY3JlZW5TaXplcy54bCkgcmV0dXJuIFNjcmVlblNpemUueGxcbn1cblxuY29uc3QgQ29udGV4dDogUmVhY3QuQ29udGV4dDxEZWZhdWx0U3RhdGU+ID0gY3JlYXRlQ29udGV4dCh7IHNjcmVlblNpemVzOiBERUZBVUxUX1NDUkVFTl9TSVpFUywgc2NyZWVuU2l6ZTogZ2V0U2NyZWVuU2l6ZShERUZBVUxUX1NDUkVFTl9TSVpFUykgfSlcbmNvbnN0IENvbnRleHRQcm92aWRlciA9IENvbnRleHQuUHJvdmlkZXJcbmV4cG9ydCBjb25zdCBDb25zdW1lciA9IENvbnRleHQuQ29uc3VtZXJcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczogU3RhdGVQcm9wcykgPT4ge1xuICBjb25zdCBbIHNjcmVlblNpemVzLCBzZXRTY3JlZW5TaXplcyBdOiBbIFNjcmVlblNpemVzLCBGdW5jdGlvbiBdID0gdXNlU3RhdGUoeyAuLi5ERUZBVUxUX1NDUkVFTl9TSVpFUywgLi4ucHJvcHMuc2NyZWVuU2l6ZXMgfSlcbiAgY29uc3QgWyBzY3JlZW5TaXplLCBzZXRTY3JlZW5TaXplIF06IFsgU2NyZWVuU2l6ZSwgRnVuY3Rpb24gXSA9IHVzZVN0YXRlKGdldFNjcmVlblNpemUoc2NyZWVuU2l6ZXMpKVxuICBjb25zdCB1cGRhdGVTY3JlZW5TaXplcyA9IChuZXdTY3JlZW5TaXplczogUGFydGlhbFNjcmVlblNpemVzKTogdm9pZCA9PiBzZXRTY3JlZW5TaXplcyh7IC4uLnNjcmVlblNpemVzLCAuLi5uZXdTY3JlZW5TaXplcyB9KVxuICBjb25zdCBvblJlc2l6ZTogRXZlbnRMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNjcmVlblNpemUoZ2V0U2NyZWVuU2l6ZShzY3JlZW5TaXplcykpLCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNjcmVlblNpemUoZ2V0U2NyZWVuU2l6ZShzY3JlZW5TaXplcykpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxuICB9LCBbIHNjcmVlblNpemVzIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFByb3ZpZGVyIHZhbHVlPXt7IHNjcmVlblNpemVzLCB1cGRhdGVTY3JlZW5TaXplcywgc2NyZWVuU2l6ZSB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgKVxufVxuXG5Qcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBzY3JlZW5TaXplczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB4czogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZzogUHJvcFR5cGVzLm51bWJlcixcbiAgICB4bDogUHJvcFR5cGVzLm51bWJlclxuICB9KVxufVxuIl19