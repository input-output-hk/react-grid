"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _State = require("../State");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = function Grid(props) {
  return _react["default"].createElement(_State.Consumer, null, function (_ref) {
    var screenSize = _ref.screenSize;
    return _react["default"].createElement("div", {
      className: props.className,
      style: _objectSpread({}, props.style, {
        padding: "".concat(props.spacing, "rem 0"),
        boxSizing: 'border-box'
      })
    }, _react.Children.toArray(props.children).map(function (child, index) {
      return (0, _react.cloneElement)(child, {
        fill: props.fillRows,
        screenSize: screenSize,
        rowKey: "".concat(index)
      });
    }));
  });
};

var defaultProps = {
  fillRows: false,
  spacing: 0
};
Grid.propTypes = {
  fillRows: _propTypes["default"].bool,
  spacing: _propTypes["default"].number
};
Grid.defaultProps = defaultProps;
var _default = Grid;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQudHN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInNjcmVlblNpemUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm94U2l6aW5nIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiY2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImluZGV4IiwiZmlsbCIsImZpbGxSb3dzIiwicm93S2V5IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBT0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1gsZ0NBQUMsZUFBRCxRQUNHO0FBQUEsUUFBR0MsVUFBSCxRQUFHQSxVQUFIO0FBQUEsV0FDQztBQUFLLE1BQUEsU0FBUyxFQUFFRCxLQUFLLENBQUNFLFNBQXRCO0FBQWlDLE1BQUEsS0FBSyxvQkFBT0YsS0FBSyxDQUFDRyxLQUFiO0FBQW9CQyxRQUFBQSxPQUFPLFlBQUtKLEtBQUssQ0FBQ0ssT0FBWCxVQUEzQjtBQUFzREMsUUFBQUEsU0FBUyxFQUFFO0FBQWpFO0FBQXRDLE9BQ0dDLGdCQUFTQyxPQUFULENBQWlCUixLQUFLLENBQUNTLFFBQXZCLEVBQWlDQyxHQUFqQyxDQUFxQyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxhQUFnQyx5QkFBYUQsS0FBYixFQUEwQztBQUFFRSxRQUFBQSxJQUFJLEVBQUViLEtBQUssQ0FBQ2MsUUFBZDtBQUF3QmIsUUFBQUEsVUFBVSxFQUFWQSxVQUF4QjtBQUFvQ2MsUUFBQUEsTUFBTSxZQUFLSCxLQUFMO0FBQTFDLE9BQTFDLENBQWhDO0FBQUEsS0FBckMsQ0FESCxDQUREO0FBQUEsR0FESCxDQURXO0FBQUEsQ0FBYjs7QUFVQSxJQUFNSSxZQUF1QixHQUFHO0FBQzlCRixFQUFBQSxRQUFRLEVBQUUsS0FEb0I7QUFFOUJULEVBQUFBLE9BQU8sRUFBRTtBQUZxQixDQUFoQztBQUtBTixJQUFJLENBQUNrQixTQUFMLEdBQWlCO0FBQ2ZILEVBQUFBLFFBQVEsRUFBRUksc0JBQVVDLElBREw7QUFFZmQsRUFBQUEsT0FBTyxFQUFFYSxzQkFBVUU7QUFGSixDQUFqQjtBQUtBckIsSUFBSSxDQUFDaUIsWUFBTCxHQUFvQkEsWUFBcEI7ZUFDZWpCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDb25zdW1lciB9IGZyb20gJy4uL1N0YXRlJ1xuXG5pbnRlcmZhY2UgR3JpZFByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgZmlsbFJvd3M/OiBib29sZWFuLFxuICBzcGFjaW5nPzogbnVtYmVyXG59XG5cbmNvbnN0IEdyaWQgPSAocHJvcHM6IEdyaWRQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiAoXG4gIDxDb25zdW1lcj5cbiAgICB7KHsgc2NyZWVuU2l6ZSB9KTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IHN0eWxlPXt7IC4uLnByb3BzLnN0eWxlLCBwYWRkaW5nOiBgJHtwcm9wcy5zcGFjaW5nfXJlbSAwYCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfX0+XG4gICAgICAgIHtDaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKS5tYXAoKGNoaWxkLCBpbmRleCk6IFJlYWN0RWxlbWVudCA9PiBjbG9uZUVsZW1lbnQoY2hpbGQgYXMgUmVhY3QuUmVhY3RFbGVtZW50LCB7IGZpbGw6IHByb3BzLmZpbGxSb3dzLCBzY3JlZW5TaXplLCByb3dLZXk6IGAke2luZGV4fWAgfSkpfVxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9Db25zdW1lcj5cbilcblxuY29uc3QgZGVmYXVsdFByb3BzOiBHcmlkUHJvcHMgPSB7XG4gIGZpbGxSb3dzOiBmYWxzZSxcbiAgc3BhY2luZzogMFxufVxuXG5HcmlkLnByb3BUeXBlcyA9IHtcbiAgZmlsbFJvd3M6IFByb3BUeXBlcy5ib29sLFxuICBzcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbkdyaWQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBHcmlkXG4iXX0=