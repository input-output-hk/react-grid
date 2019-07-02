"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getJustifyContentValue = function getJustifyContentValue(verticalAlign) {
  switch (verticalAlign) {
    case 'top':
      return 'flex-start';

    case 'bottom':
      return 'flex-end';

    default:
      return verticalAlign;
  }
};

var Column = function Column(props) {
  return _react["default"].createElement("div", {
    style: _objectSpread({}, props.style, {
      flex: props.size,
      padding: "0 ".concat(props.spacing, "rem"),
      boxSizing: 'border-box'
    }),
    className: props.className
  }, props.verticalAlign && _react["default"].createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: getJustifyContentValue(props.verticalAlign)
    }
  }, props.children), !props.verticalAlign && props.children);
};

var defaultProps = {
  size: 1,
  spacing: 0
};
exports.defaultProps = defaultProps;
Column.propTypes = {
  size: _propTypes["default"].number,
  spacing: _propTypes["default"].number,
  verticalAlign: _propTypes["default"].oneOf(['top', 'center', 'bottom']),
  xsOffset: _propTypes["default"].number,
  smOffset: _propTypes["default"].number,
  mdOffset: _propTypes["default"].number,
  lgOffset: _propTypes["default"].number,
  xlOffset: _propTypes["default"].number
};
Column.defaultProps = defaultProps;
var _default = Column;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbHVtbi50c3giXSwibmFtZXMiOlsiZ2V0SnVzdGlmeUNvbnRlbnRWYWx1ZSIsInZlcnRpY2FsQWxpZ24iLCJDb2x1bW4iLCJwcm9wcyIsInN0eWxlIiwiZmxleCIsInNpemUiLCJwYWRkaW5nIiwic3BhY2luZyIsImJveFNpemluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsIm9uZU9mIiwieHNPZmZzZXQiLCJzbU9mZnNldCIsIm1kT2Zmc2V0IiwibGdPZmZzZXQiLCJ4bE9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQWVBLElBQU1BLHNCQUFnQyxHQUFHLFNBQW5DQSxzQkFBbUMsQ0FBQ0MsYUFBRCxFQUEwQztBQUNqRixVQUFRQSxhQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsYUFBTyxZQUFQOztBQUNGLFNBQUssUUFBTDtBQUNFLGFBQU8sVUFBUDs7QUFDRjtBQUNFLGFBQU9BLGFBQVA7QUFOSjtBQVFELENBVEQ7O0FBV0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFDRSxJQUFBLEtBQUssb0JBQU9BLEtBQUssQ0FBQ0MsS0FBYjtBQUFvQkMsTUFBQUEsSUFBSSxFQUFFRixLQUFLLENBQUNHLElBQWhDO0FBQXNDQyxNQUFBQSxPQUFPLGNBQU9KLEtBQUssQ0FBQ0ssT0FBYixRQUE3QztBQUF3RUMsTUFBQUEsU0FBUyxFQUFFO0FBQW5GLE1BRFA7QUFFRSxJQUFBLFNBQVMsRUFBRU4sS0FBSyxDQUFDTztBQUZuQixLQUlHUCxLQUFLLENBQUNGLGFBQU4sSUFDQztBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVVLE1BQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCQyxNQUFBQSxPQUFPLEVBQUUsTUFBM0I7QUFBbUNDLE1BQUFBLGFBQWEsRUFBRSxRQUFsRDtBQUE0REMsTUFBQUEsY0FBYyxFQUFFZCxzQkFBc0IsQ0FBQ0csS0FBSyxDQUFDRixhQUFQO0FBQWxHO0FBRFQsS0FHR0UsS0FBSyxDQUFDWSxRQUhULENBTEosRUFXRyxDQUFDWixLQUFLLENBQUNGLGFBQVAsSUFBd0JFLEtBQUssQ0FBQ1ksUUFYakMsQ0FEYTtBQUFBLENBQWY7O0FBZ0JPLElBQU1DLFlBQXlCLEdBQUc7QUFDdkNWLEVBQUFBLElBQUksRUFBRSxDQURpQztBQUV2Q0UsRUFBQUEsT0FBTyxFQUFFO0FBRjhCLENBQWxDOztBQUtQTixNQUFNLENBQUNlLFNBQVAsR0FBbUI7QUFDakJYLEVBQUFBLElBQUksRUFBRVksc0JBQVVDLE1BREM7QUFFakJYLEVBQUFBLE9BQU8sRUFBRVUsc0JBQVVDLE1BRkY7QUFHakJsQixFQUFBQSxhQUFhLEVBQUVpQixzQkFBVUUsS0FBVixDQUFnQixDQUFFLEtBQUYsRUFBUyxRQUFULEVBQW1CLFFBQW5CLENBQWhCLENBSEU7QUFJakJDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVDLE1BSkg7QUFLakJHLEVBQUFBLFFBQVEsRUFBRUosc0JBQVVDLE1BTEg7QUFNakJJLEVBQUFBLFFBQVEsRUFBRUwsc0JBQVVDLE1BTkg7QUFPakJLLEVBQUFBLFFBQVEsRUFBRU4sc0JBQVVDLE1BUEg7QUFRakJNLEVBQUFBLFFBQVEsRUFBRVAsc0JBQVVDO0FBUkgsQ0FBbkI7QUFXQWpCLE1BQU0sQ0FBQ2MsWUFBUCxHQUFzQkEsWUFBdEI7ZUFFZWQsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxudHlwZSBWZXJ0aWNhbEFsaWduID0gJ3RvcCcgfCAnYm90dG9tJyB8ICdjZW50ZXInXG5cbmludGVyZmFjZSBDb2x1bW5Qcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIHNpemU/OiBudW1iZXIsXG4gIHNwYWNpbmc/OiBudW1iZXIsXG4gIHZlcnRpY2FsQWxpZ24/OiBWZXJ0aWNhbEFsaWduLFxuICB4c09mZnNldD86IG51bWJlcixcbiAgc21PZmZzZXQ/OiBudW1iZXIsXG4gIG1kT2Zmc2V0PzogbnVtYmVyLFxuICBsZ09mZnNldD86IG51bWJlcixcbiAgeGxPZmZzZXQ/OiBudW1iZXJcbn1cblxuY29uc3QgZ2V0SnVzdGlmeUNvbnRlbnRWYWx1ZTogRnVuY3Rpb24gPSAodmVydGljYWxBbGlnbjogVmVydGljYWxBbGlnbik6IHN0cmluZyA9PiB7XG4gIHN3aXRjaCAodmVydGljYWxBbGlnbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiAnZmxleC1lbmQnXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2ZXJ0aWNhbEFsaWduXG4gIH1cbn1cblxuY29uc3QgQ29sdW1uID0gKHByb3BzOiBDb2x1bW5Qcm9wcyk6IFJlYWN0RWxlbWVudCA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17eyAuLi5wcm9wcy5zdHlsZSwgZmxleDogcHJvcHMuc2l6ZSwgcGFkZGluZzogYDAgJHtwcm9wcy5zcGFjaW5nfXJlbWAsIGJveFNpemluZzogJ2JvcmRlci1ib3gnIH19XG4gICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gID5cbiAgICB7cHJvcHMudmVydGljYWxBbGlnbiAmJlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6IGdldEp1c3RpZnlDb250ZW50VmFsdWUocHJvcHMudmVydGljYWxBbGlnbikgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIHshcHJvcHMudmVydGljYWxBbGlnbiAmJiBwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcHM6IENvbHVtblByb3BzID0ge1xuICBzaXplOiAxLFxuICBzcGFjaW5nOiAwXG59XG5cbkNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNwYWNpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbICd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScgXSksXG4gIHhzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbU9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWRPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB4bE9mZnNldDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5Db2x1bW4uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblxuIl19