"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Column = _interopRequireDefault(require("./Column"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ScreenSize;

(function (ScreenSize) {
  ScreenSize["xs"] = "xs";
  ScreenSize["sm"] = "sm";
  ScreenSize["md"] = "md";
  ScreenSize["lg"] = "lg";
  ScreenSize["xl"] = "xl";
})(ScreenSize || (ScreenSize = {}));

var availableScreenSizes = [ScreenSize.xs, ScreenSize.sm, ScreenSize.md, ScreenSize.lg, ScreenSize.xl];

var fillRow = function fillRow(row, maxColumns, columnSpacing) {
  var props = {
    spacing: columnSpacing
  };

  while (row.length < maxColumns) {
    row.push(_react["default"].createElement(_Column["default"], _extends({
      key: row.length
    }, props)));
  }
};

var getOffset = function getOffset(column, screenSize) {
  var offset = column.props["".concat(screenSize, "Offset")];
  var fallbackSizes = availableScreenSizes.slice(availableScreenSizes.indexOf(screenSize));

  while (typeof offset !== 'number' && fallbackSizes.length > 0) {
    offset = column.props["".concat(fallbackSizes.shift(), "Offset")];
  }

  return offset || 0;
};

var buildRows = function buildRows(maxColumns, columns, fill, screenSize, columnSpacing) {
  if (maxColumns === null) return [columns];
  var rows = [];
  var row = [];

  var _loop = function _loop(i) {
    var offset = getOffset(columns[i], screenSize);
    var props = {
      spacing: columnSpacing
    };

    if (offset > 0) {
      rows.push(row.slice());
      row = new Array(offset).fill(null).map(function (_, i) {
        return _react["default"].createElement(_Column["default"], _extends({}, props, {
          key: i
        }));
      });
    }

    var columnClone = _react["default"].createElement(_Column["default"], _extends({}, columns[i].props, {
      spacing: columns[i].props.spacing || columnSpacing,
      key: row.length
    }));

    row.push(columnClone);

    if (row.length >= maxColumns || i === columns.length - 1) {
      rows.push(row.slice());
      row = [];
    }
  };

  for (var i = 0; i < columns.length; i++) {
    _loop(i);
  }

  if (fill) fillRow(rows[rows.length - 1], maxColumns, columnSpacing);
  return rows;
};

var Row = function Row(props) {
  var children = props.children,
      fill = props.fill,
      screenSize = props.screenSize,
      columnSpacing = props.columnSpacing;

  var columns = _react.Children.toArray(children);

  var getMaxColumns = function getMaxColumns() {
    var maxColumns = props[screenSize];
    var fallbackSizes = availableScreenSizes.slice(availableScreenSizes.indexOf(screenSize));

    while (!maxColumns && fallbackSizes.length > 0) {
      maxColumns = props[fallbackSizes.shift()];
    }

    return maxColumns || columns.length;
  };

  var rows = buildRows(getMaxColumns(), columns, fill, screenSize, columnSpacing);
  return _react["default"].createElement(_react.Fragment, null, rows.map(function (row, index) {
    return _react["default"].createElement("div", {
      key: "".concat(props.rowKey, "_").concat(index),
      style: _objectSpread({}, props.style, {
        display: 'flex',
        padding: "".concat(props.spacing, "rem 0"),
        boxSizing: 'border-box'
      }),
      className: props.className
    }, row);
  }));
};

Row.propTypes = {
  fill: _propTypes["default"].bool,
  screenSize: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  columnSpacing: _propTypes["default"].number,
  spacing: _propTypes["default"].number,
  xs: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  md: _propTypes["default"].number,
  lg: _propTypes["default"].number,
  xl: _propTypes["default"].number,
  rowKey: _propTypes["default"].string
};
var defaultProps = {
  spacing: 0,
  columnSpacing: 0
};
Row.defaultProps = defaultProps;
var _default = Row;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Jvdy50c3giXSwibmFtZXMiOlsiU2NyZWVuU2l6ZSIsImF2YWlsYWJsZVNjcmVlblNpemVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImZpbGxSb3ciLCJyb3ciLCJtYXhDb2x1bW5zIiwiY29sdW1uU3BhY2luZyIsInByb3BzIiwic3BhY2luZyIsImxlbmd0aCIsInB1c2giLCJnZXRPZmZzZXQiLCJjb2x1bW4iLCJzY3JlZW5TaXplIiwib2Zmc2V0IiwiZmFsbGJhY2tTaXplcyIsInNsaWNlIiwiaW5kZXhPZiIsInNoaWZ0IiwiYnVpbGRSb3dzIiwiY29sdW1ucyIsImZpbGwiLCJyb3dzIiwiaSIsIkFycmF5IiwibWFwIiwiXyIsImNvbHVtbkNsb25lIiwiUm93IiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJnZXRNYXhDb2x1bW5zIiwiaW5kZXgiLCJyb3dLZXkiLCJzdHlsZSIsImRpc3BsYXkiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiY2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mIiwibnVtYmVyIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQW9CS0EsVTs7V0FBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7R0FBQUEsVSxLQUFBQSxVOztBQVFMLElBQU1DLG9CQUE4QixHQUFHLENBQ3JDRCxVQUFVLENBQUNFLEVBRDBCLEVBRXJDRixVQUFVLENBQUNHLEVBRjBCLEVBR3JDSCxVQUFVLENBQUNJLEVBSDBCLEVBSXJDSixVQUFVLENBQUNLLEVBSjBCLEVBS3JDTCxVQUFVLENBQUNNLEVBTDBCLENBQXZDOztBQVFBLElBQU1DLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLENBQUNDLEdBQUQsRUFBc0JDLFVBQXRCLEVBQTBDQyxhQUExQyxFQUEwRTtBQUNsRyxNQUFNQyxLQUFLLEdBQUc7QUFBRUMsSUFBQUEsT0FBTyxFQUFFRjtBQUFYLEdBQWQ7O0FBQ0EsU0FBT0YsR0FBRyxDQUFDSyxNQUFKLEdBQWFKLFVBQXBCLEVBQWdDO0FBQzlCRCxJQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUyxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsR0FBRyxFQUFFTixHQUFHLENBQUNLO0FBQWpCLE9BQTZCRixLQUE3QixFQUFUO0FBQ0Q7QUFDRixDQUxEOztBQU9BLElBQU1JLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLENBQUNDLE1BQUQsRUFBdUJDLFVBQXZCLEVBQTJEO0FBQ3JGLE1BQUlDLE1BQWMsR0FBR0YsTUFBTSxDQUFDTCxLQUFQLFdBQWdCTSxVQUFoQixZQUFyQjtBQUNBLE1BQUlFLGFBQXVCLEdBQUdsQixvQkFBb0IsQ0FBQ21CLEtBQXJCLENBQTJCbkIsb0JBQW9CLENBQUNvQixPQUFyQixDQUE2QkosVUFBN0IsQ0FBM0IsQ0FBOUI7O0FBQ0EsU0FBTyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLElBQThCQyxhQUFhLENBQUNOLE1BQWQsR0FBdUIsQ0FBNUQsRUFBK0Q7QUFDN0RLLElBQUFBLE1BQU0sR0FBR0YsTUFBTSxDQUFDTCxLQUFQLFdBQWdCUSxhQUFhLENBQUNHLEtBQWQsRUFBaEIsWUFBVDtBQUNEOztBQUVELFNBQU9KLE1BQU0sSUFBSSxDQUFqQjtBQUNELENBUkQ7O0FBVUEsSUFBTUssU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsQ0FBQ2QsVUFBRCxFQUFxQmUsT0FBckIsRUFBOENDLElBQTlDLEVBQTZEUixVQUE3RCxFQUFxRlAsYUFBckYsRUFBaUk7QUFDM0osTUFBSUQsVUFBVSxLQUFLLElBQW5CLEVBQXlCLE9BQU8sQ0FBRWUsT0FBRixDQUFQO0FBQ3pCLE1BQUlFLElBQXNCLEdBQUcsRUFBN0I7QUFDQSxNQUFJbEIsR0FBbUIsR0FBRyxFQUExQjs7QUFIMkosNkJBSWxKbUIsQ0FKa0o7QUFLekosUUFBTVQsTUFBYyxHQUFHSCxTQUFTLENBQUNTLE9BQU8sQ0FBQ0csQ0FBRCxDQUFSLEVBQWFWLFVBQWIsQ0FBaEM7QUFDQSxRQUFNTixLQUFLLEdBQUc7QUFBRUMsTUFBQUEsT0FBTyxFQUFFRjtBQUFYLEtBQWQ7O0FBQ0EsUUFBSVEsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZFEsTUFBQUEsSUFBSSxDQUFDWixJQUFMLENBQVVOLEdBQUcsQ0FBQ1ksS0FBSixFQUFWO0FBQ0FaLE1BQUFBLEdBQUcsR0FBRyxJQUFJb0IsS0FBSixDQUFVVixNQUFWLEVBQWtCTyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkksR0FBN0IsQ0FBaUMsVUFBQ0MsQ0FBRCxFQUFJSCxDQUFKO0FBQUEsZUFBd0IsZ0NBQUMsa0JBQUQsZUFBWWhCLEtBQVo7QUFBbUIsVUFBQSxHQUFHLEVBQUVnQjtBQUF4QixXQUF4QjtBQUFBLE9BQWpDLENBQU47QUFDRDs7QUFFRCxRQUFNSSxXQUF5QixHQUFHLGdDQUFDLGtCQUFELGVBQVlQLE9BQU8sQ0FBQ0csQ0FBRCxDQUFQLENBQVdoQixLQUF2QjtBQUE4QixNQUFBLE9BQU8sRUFBRWEsT0FBTyxDQUFDRyxDQUFELENBQVAsQ0FBV2hCLEtBQVgsQ0FBaUJDLE9BQWpCLElBQTRCRixhQUFuRTtBQUFrRixNQUFBLEdBQUcsRUFBRUYsR0FBRyxDQUFDSztBQUEzRixPQUFsQzs7QUFDQUwsSUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNpQixXQUFUOztBQUNBLFFBQUl2QixHQUFHLENBQUNLLE1BQUosSUFBY0osVUFBZCxJQUE0QmtCLENBQUMsS0FBS0gsT0FBTyxDQUFDWCxNQUFSLEdBQWlCLENBQXZELEVBQTBEO0FBQ3hEYSxNQUFBQSxJQUFJLENBQUNaLElBQUwsQ0FBVU4sR0FBRyxDQUFDWSxLQUFKLEVBQVY7QUFDQVosTUFBQUEsR0FBRyxHQUFHLEVBQU47QUFDRDtBQWpCd0o7O0FBSTNKLE9BQUssSUFBSW1CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE9BQU8sQ0FBQ1gsTUFBNUIsRUFBb0NjLENBQUMsRUFBckMsRUFBeUM7QUFBQSxVQUFoQ0EsQ0FBZ0M7QUFjeEM7O0FBRUQsTUFBSUYsSUFBSixFQUFVbEIsT0FBTyxDQUFDbUIsSUFBSSxDQUFDQSxJQUFJLENBQUNiLE1BQUwsR0FBYyxDQUFmLENBQUwsRUFBd0JKLFVBQXhCLEVBQW9DQyxhQUFwQyxDQUFQO0FBQ1YsU0FBT2dCLElBQVA7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTU0sR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ3JCLEtBQUQsRUFBbUM7QUFBQSxNQUNyQ3NCLFFBRHFDLEdBQ1N0QixLQURULENBQ3JDc0IsUUFEcUM7QUFBQSxNQUMzQlIsSUFEMkIsR0FDU2QsS0FEVCxDQUMzQmMsSUFEMkI7QUFBQSxNQUNyQlIsVUFEcUIsR0FDU04sS0FEVCxDQUNyQk0sVUFEcUI7QUFBQSxNQUNUUCxhQURTLEdBQ1NDLEtBRFQsQ0FDVEQsYUFEUzs7QUFFN0MsTUFBTWMsT0FBb0IsR0FBR1UsZ0JBQVNDLE9BQVQsQ0FBaUJGLFFBQWpCLENBQTdCOztBQUNBLE1BQU1HLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQWM7QUFDNUMsUUFBSTNCLFVBQThCLEdBQUdFLEtBQUssQ0FBQ00sVUFBRCxDQUExQztBQUNBLFFBQUlFLGFBQXVCLEdBQUdsQixvQkFBb0IsQ0FBQ21CLEtBQXJCLENBQTJCbkIsb0JBQW9CLENBQUNvQixPQUFyQixDQUE2QkosVUFBN0IsQ0FBM0IsQ0FBOUI7O0FBQ0EsV0FBTyxDQUFDUixVQUFELElBQWVVLGFBQWEsQ0FBQ04sTUFBZCxHQUF1QixDQUE3QyxFQUFnRDtBQUM5Q0osTUFBQUEsVUFBVSxHQUFHRSxLQUFLLENBQUNRLGFBQWEsQ0FBQ0csS0FBZCxFQUFELENBQWxCO0FBQ0Q7O0FBRUQsV0FBT2IsVUFBVSxJQUFJZSxPQUFPLENBQUNYLE1BQTdCO0FBQ0QsR0FSRDs7QUFVQSxNQUFNYSxJQUFzQixHQUFHSCxTQUFTLENBQUNhLGFBQWEsRUFBZCxFQUFrQlosT0FBbEIsRUFBMkJDLElBQTNCLEVBQWlDUixVQUFqQyxFQUE2Q1AsYUFBN0MsQ0FBeEM7QUFDQSxTQUNFLGdDQUFDLGVBQUQsUUFDR2dCLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNyQixHQUFELEVBQU02QixLQUFOO0FBQUEsV0FDUjtBQUNFLE1BQUEsR0FBRyxZQUFLMUIsS0FBSyxDQUFDMkIsTUFBWCxjQUFxQkQsS0FBckIsQ0FETDtBQUVFLE1BQUEsS0FBSyxvQkFBTzFCLEtBQUssQ0FBQzRCLEtBQWI7QUFBb0JDLFFBQUFBLE9BQU8sRUFBRSxNQUE3QjtBQUFxQ0MsUUFBQUEsT0FBTyxZQUFLOUIsS0FBSyxDQUFDQyxPQUFYLFVBQTVDO0FBQXVFOEIsUUFBQUEsU0FBUyxFQUFFO0FBQWxGLFFBRlA7QUFHRSxNQUFBLFNBQVMsRUFBRS9CLEtBQUssQ0FBQ2dDO0FBSG5CLE9BS0duQyxHQUxILENBRFE7QUFBQSxHQUFULENBREgsQ0FERjtBQWFELENBM0JEOztBQTZCQXdCLEdBQUcsQ0FBQ1ksU0FBSixHQUFnQjtBQUNkbkIsRUFBQUEsSUFBSSxFQUFFb0Isc0JBQVVDLElBREY7QUFFZDdCLEVBQUFBLFVBQVUsRUFBRTRCLHNCQUFVRSxLQUFWLENBQWdCLENBQzFCLElBRDBCLEVBRTFCLElBRjBCLEVBRzFCLElBSDBCLEVBSTFCLElBSjBCLEVBSzFCLElBTDBCLENBQWhCLENBRkU7QUFTZHJDLEVBQUFBLGFBQWEsRUFBRW1DLHNCQUFVRyxNQVRYO0FBVWRwQyxFQUFBQSxPQUFPLEVBQUVpQyxzQkFBVUcsTUFWTDtBQVdkOUMsRUFBQUEsRUFBRSxFQUFFMkMsc0JBQVVHLE1BWEE7QUFZZDdDLEVBQUFBLEVBQUUsRUFBRTBDLHNCQUFVRyxNQVpBO0FBYWQ1QyxFQUFBQSxFQUFFLEVBQUV5QyxzQkFBVUcsTUFiQTtBQWNkM0MsRUFBQUEsRUFBRSxFQUFFd0Msc0JBQVVHLE1BZEE7QUFlZDFDLEVBQUFBLEVBQUUsRUFBRXVDLHNCQUFVRyxNQWZBO0FBZ0JkVixFQUFBQSxNQUFNLEVBQUVPLHNCQUFVSTtBQWhCSixDQUFoQjtBQW1CQSxJQUFNQyxZQUEwQixHQUFHO0FBQ2pDdEMsRUFBQUEsT0FBTyxFQUFFLENBRHdCO0FBRWpDRixFQUFBQSxhQUFhLEVBQUU7QUFGa0IsQ0FBbkM7QUFLQXNCLEdBQUcsQ0FBQ2tCLFlBQUosR0FBbUJBLFlBQW5CO2VBQ2VsQixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBGcmFnbWVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4nXG5cbmludGVyZmFjZSBSb3dQcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGZpbGw/OiBib29sZWFuLFxuICBzY3JlZW5TaXplPzogU2NyZWVuU2l6ZSxcbiAgc3BhY2luZz86IG51bWJlcixcbiAgY29sdW1uU3BhY2luZz86IG51bWJlcixcbiAgeHM/OiBudW1iZXIsXG4gIHNtPzogbnVtYmVyLFxuICBtZD86IG51bWJlcixcbiAgbGc/OiBudW1iZXIsXG4gIHhsPzogbnVtYmVyLFxuICByb3dLZXk/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIERlZmF1bHRQcm9wcyB7XG4gIHNwYWNpbmc6IG51bWJlcixcbiAgY29sdW1uU3BhY2luZzogbnVtYmVyXG59XG5cbmVudW0gU2NyZWVuU2l6ZSB7XG4gIHhzID0gJ3hzJyxcbiAgc20gPSAnc20nLFxuICBtZCA9ICdtZCcsXG4gIGxnID0gJ2xnJyxcbiAgeGwgPSAneGwnXG59XG5cbmNvbnN0IGF2YWlsYWJsZVNjcmVlblNpemVzOiBzdHJpbmdbXSA9IFtcbiAgU2NyZWVuU2l6ZS54cyxcbiAgU2NyZWVuU2l6ZS5zbSxcbiAgU2NyZWVuU2l6ZS5tZCxcbiAgU2NyZWVuU2l6ZS5sZyxcbiAgU2NyZWVuU2l6ZS54bFxuXVxuXG5jb25zdCBmaWxsUm93OiBGdW5jdGlvbiA9IChyb3c6IFJlYWN0RWxlbWVudFtdLCBtYXhDb2x1bW5zOiBudW1iZXIsIGNvbHVtblNwYWNpbmc6IG51bWJlcik6IHZvaWQgPT4ge1xuICBjb25zdCBwcm9wcyA9IHsgc3BhY2luZzogY29sdW1uU3BhY2luZyB9XG4gIHdoaWxlIChyb3cubGVuZ3RoIDwgbWF4Q29sdW1ucykge1xuICAgIHJvdy5wdXNoKDxDb2x1bW4ga2V5PXtyb3cubGVuZ3RofSB7Li4ucHJvcHN9IC8+KVxuICB9XG59XG5cbmNvbnN0IGdldE9mZnNldDogRnVuY3Rpb24gPSAoY29sdW1uOiBSZWFjdEVsZW1lbnQsIHNjcmVlblNpemU6IFNjcmVlblNpemUgKTogbnVtYmVyID0+IHtcbiAgbGV0IG9mZnNldDogbnVtYmVyID0gY29sdW1uLnByb3BzW2Ake3NjcmVlblNpemV9T2Zmc2V0YF1cbiAgbGV0IGZhbGxiYWNrU2l6ZXM6IHN0cmluZ1tdID0gYXZhaWxhYmxlU2NyZWVuU2l6ZXMuc2xpY2UoYXZhaWxhYmxlU2NyZWVuU2l6ZXMuaW5kZXhPZihzY3JlZW5TaXplKSlcbiAgd2hpbGUgKHR5cGVvZiBvZmZzZXQgIT09ICdudW1iZXInICYmIGZhbGxiYWNrU2l6ZXMubGVuZ3RoID4gMCkge1xuICAgIG9mZnNldCA9IGNvbHVtbi5wcm9wc1tgJHtmYWxsYmFja1NpemVzLnNoaWZ0KCl9T2Zmc2V0YF1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgfHwgMFxufVxuXG5jb25zdCBidWlsZFJvd3M6IEZ1bmN0aW9uID0gKG1heENvbHVtbnM6IG51bWJlciwgY29sdW1uczogUmVhY3RFbGVtZW50W10sIGZpbGw6IGJvb2xlYW4sIHNjcmVlblNpemU6IFNjcmVlblNpemUsIGNvbHVtblNwYWNpbmc6IG51bWJlcik6IFJlYWN0RWxlbWVudFtdW10gPT4ge1xuICBpZiAobWF4Q29sdW1ucyA9PT0gbnVsbCkgcmV0dXJuIFsgY29sdW1ucyBdXG4gIGxldCByb3dzOiBSZWFjdEVsZW1lbnRbXVtdID0gW11cbiAgbGV0IHJvdzogUmVhY3RFbGVtZW50W10gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IGdldE9mZnNldChjb2x1bW5zW2ldLCBzY3JlZW5TaXplKVxuICAgIGNvbnN0IHByb3BzID0geyBzcGFjaW5nOiBjb2x1bW5TcGFjaW5nIH1cbiAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgcm93cy5wdXNoKHJvdy5zbGljZSgpKVxuICAgICAgcm93ID0gbmV3IEFycmF5KG9mZnNldCkuZmlsbChudWxsKS5tYXAoKF8sIGkpOiBSZWFjdEVsZW1lbnQgPT4gPENvbHVtbiB7Li4ucHJvcHN9IGtleT17aX0gLz4pXG4gICAgfVxuXG4gICAgY29uc3QgY29sdW1uQ2xvbmU6IFJlYWN0RWxlbWVudCA9IDxDb2x1bW4gey4uLmNvbHVtbnNbaV0ucHJvcHN9IHNwYWNpbmc9e2NvbHVtbnNbaV0ucHJvcHMuc3BhY2luZyB8fCBjb2x1bW5TcGFjaW5nfSBrZXk9e3Jvdy5sZW5ndGh9IC8+XG4gICAgcm93LnB1c2goY29sdW1uQ2xvbmUpXG4gICAgaWYgKHJvdy5sZW5ndGggPj0gbWF4Q29sdW1ucyB8fCBpID09PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJvd3MucHVzaChyb3cuc2xpY2UoKSlcbiAgICAgIHJvdyA9IFtdXG4gICAgfVxuICB9XG5cbiAgaWYgKGZpbGwpIGZpbGxSb3cocm93c1tyb3dzLmxlbmd0aCAtIDFdLCBtYXhDb2x1bW5zLCBjb2x1bW5TcGFjaW5nKVxuICByZXR1cm4gcm93c1xufVxuXG5jb25zdCBSb3cgPSAocHJvcHM6IFJvd1Byb3BzKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZmlsbCwgc2NyZWVuU2l6ZSwgY29sdW1uU3BhY2luZyB9ID0gcHJvcHNcbiAgY29uc3QgY29sdW1uczogUmVhY3ROb2RlW10gPSBDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVxuICBjb25zdCBnZXRNYXhDb2x1bW5zOiBGdW5jdGlvbiA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGxldCBtYXhDb2x1bW5zOiBudW1iZXIgfCB1bmRlZmluZWQgPSBwcm9wc1tzY3JlZW5TaXplXVxuICAgIGxldCBmYWxsYmFja1NpemVzOiBzdHJpbmdbXSA9IGF2YWlsYWJsZVNjcmVlblNpemVzLnNsaWNlKGF2YWlsYWJsZVNjcmVlblNpemVzLmluZGV4T2Yoc2NyZWVuU2l6ZSkpXG4gICAgd2hpbGUgKCFtYXhDb2x1bW5zICYmIGZhbGxiYWNrU2l6ZXMubGVuZ3RoID4gMCkge1xuICAgICAgbWF4Q29sdW1ucyA9IHByb3BzW2ZhbGxiYWNrU2l6ZXMuc2hpZnQoKV1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF4Q29sdW1ucyB8fCBjb2x1bW5zLmxlbmd0aFxuICB9XG5cbiAgY29uc3Qgcm93czogUmVhY3RFbGVtZW50W11bXSA9IGJ1aWxkUm93cyhnZXRNYXhDb2x1bW5zKCksIGNvbHVtbnMsIGZpbGwsIHNjcmVlblNpemUsIGNvbHVtblNwYWNpbmcpXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3Jvd3MubWFwKChyb3csIGluZGV4KTogUmVhY3RFbGVtZW50ID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YCR7cHJvcHMucm93S2V5fV8ke2luZGV4fWB9XG4gICAgICAgICAgc3R5bGU9e3sgLi4ucHJvcHMuc3R5bGUsIGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZzogYCR7cHJvcHMuc3BhY2luZ31yZW0gMGAsIGJveFNpemluZzogJ2JvcmRlci1ib3gnIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICAgID5cbiAgICAgICAgICB7cm93fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLmJvb2wsXG4gIHNjcmVlblNpemU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3hzJyxcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnXG4gIF0pLFxuICBjb2x1bW5TcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzcGFjaW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICB4czogUHJvcFR5cGVzLm51bWJlcixcbiAgc206IFByb3BUeXBlcy5udW1iZXIsXG4gIG1kOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsZzogUHJvcFR5cGVzLm51bWJlcixcbiAgeGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJvd0tleTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHM6IERlZmF1bHRQcm9wcyA9IHtcbiAgc3BhY2luZzogMCxcbiAgY29sdW1uU3BhY2luZzogMFxufVxuXG5Sb3cuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzXG5leHBvcnQgZGVmYXVsdCBSb3dcbiJdfQ==