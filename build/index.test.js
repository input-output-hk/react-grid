"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _State = require("./State");

var _Grid = _interopRequireDefault(require("./components/Grid"));

var _Row = _interopRequireDefault(require("./components/Row"));

var _Column = _interopRequireDefault(require("./components/Column"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getWrapper = function getWrapper(children) {
  return (0, _enzyme.mount)(_react["default"].createElement(_State.Provider, null, children));
};

describe('ReactGrid', function () {
  var describeTestsForInput = function describeTestsForInput(children) {
    var screenSizes = {
      xs: 340,
      sm: 600,
      md: 800,
      lg: 1100,
      xl: 1600
    };
    Object.keys(screenSizes).forEach(function (size) {
      describe("".concat(size, " screens"), function () {
        beforeEach(function () {
          window.innerWidth = screenSizes[size];
        });
        test('it renders correctly', function () {
          expect(getWrapper(children)).toMatchSnapshot();
        });
      });
    });
  };

  describe('responsive grid with filled rows', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], {
      fillRows: true
    }, _react["default"].createElement(_Row["default"], {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    }, _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null))));
  });
  describe('responsive grid with no filled rows', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], null, _react["default"].createElement(_Row["default"], {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    }, _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null))));
  });
  describe('non-responsive grid', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], null, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null))));
  });
  describe('columns with offsets', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], null, _react["default"].createElement(_Row["default"], {
      xl: 5,
      md: 3
    }, _react["default"].createElement(_Column["default"], {
      mdOffset: 2,
      lgOffset: 3,
      smOffset: 0
    }), _react["default"].createElement(_Column["default"], {
      xsOffset: 1,
      xlOffset: 4
    }))));
  });
  describe('center vertically aligned columns', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], {
      fillRows: true
    }, _react["default"].createElement(_Row["default"], {
      sm: 1,
      xl: 3
    }, _react["default"].createElement(_Column["default"], {
      verticalAlign: "center"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "center"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "center"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "center"
    }))));
  });
  describe('bottom vertically aligned columns', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], {
      fillRows: true
    }, _react["default"].createElement(_Row["default"], {
      sm: 1,
      xl: 3
    }, _react["default"].createElement(_Column["default"], {
      verticalAlign: "bottom"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "bottom"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "bottom"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "bottom"
    }))));
  });
  describe('top vertically aligned columns', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], {
      fillRows: true
    }, _react["default"].createElement(_Row["default"], {
      sm: 1,
      xl: 3
    }, _react["default"].createElement(_Column["default"], {
      verticalAlign: "top"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "top"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "top"
    }), _react["default"].createElement(_Column["default"], {
      verticalAlign: "top"
    }))));
  });
  describe('nested grids', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], {
      fillRows: true
    }, _react["default"].createElement(_Row["default"], {
      sm: 1,
      xl: 3
    }, _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null, _react["default"].createElement(_Grid["default"], null, _react["default"].createElement(_Row["default"], {
      sm: 3,
      xl: 5
    }, _react["default"].createElement(_Column["default"], null, _react["default"].createElement(_Grid["default"], {
      fillRows: true
    }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], {
      mdOffset: 1
    }), _react["default"].createElement(_Column["default"], null)))), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], null)))), _react["default"].createElement(_Column["default"], null))));
  });
  describe('grids with spacing', function () {
    describeTestsForInput(_react["default"].createElement(_Grid["default"], {
      spacing: 2
    }, _react["default"].createElement(_Row["default"], {
      spacing: 0.6
    }, _react["default"].createElement(_Column["default"], {
      spacing: 1.8
    }), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], {
      spacing: 3.6
    })), _react["default"].createElement(_Row["default"], {
      spacing: 1.4,
      columnSpacing: 1.2
    }, _react["default"].createElement(_Column["default"], {
      spacing: 1.8
    }), _react["default"].createElement(_Column["default"], null), _react["default"].createElement(_Column["default"], {
      spacing: 3.6
    }), _react["default"].createElement(_Column["default"], null))));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJnZXRXcmFwcGVyIiwiY2hpbGRyZW4iLCJkZXNjcmliZSIsImRlc2NyaWJlVGVzdHNGb3JJbnB1dCIsInNjcmVlblNpemVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2l6ZSIsImJlZm9yZUVhY2giLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidGVzdCIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFFBQUQsRUFBYztBQUMvQixTQUFPLG1CQUNMLGdDQUFDLGVBQUQsUUFDR0EsUUFESCxDQURLLENBQVA7QUFLRCxDQU5EOztBQVFBQyxRQUFRLENBQUMsV0FBRCxFQUFjLFlBQU07QUFDMUIsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBRixRQUFRLEVBQUk7QUFDeEMsUUFBTUcsV0FBVyxHQUFHO0FBQ2xCQyxNQUFBQSxFQUFFLEVBQUUsR0FEYztBQUVsQkMsTUFBQUEsRUFBRSxFQUFFLEdBRmM7QUFHbEJDLE1BQUFBLEVBQUUsRUFBRSxHQUhjO0FBSWxCQyxNQUFBQSxFQUFFLEVBQUUsSUFKYztBQUtsQkMsTUFBQUEsRUFBRSxFQUFFO0FBTGMsS0FBcEI7QUFRQUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlQLFdBQVosRUFBeUJRLE9BQXpCLENBQWlDLFVBQUFDLElBQUksRUFBSTtBQUN2Q1gsTUFBQUEsUUFBUSxXQUFJVyxJQUFKLGVBQW9CLFlBQU07QUFDaENDLFFBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2RDLFVBQUFBLE1BQUQsQ0FBZ0JDLFVBQWhCLEdBQTZCWixXQUFXLENBQUNTLElBQUQsQ0FBeEM7QUFDRCxTQUZTLENBQVY7QUFJQUksUUFBQUEsSUFBSSxDQUFDLHNCQUFELEVBQXlCLFlBQU07QUFDakNDLFVBQUFBLE1BQU0sQ0FBQ2xCLFVBQVUsQ0FBQ0MsUUFBRCxDQUFYLENBQU4sQ0FBNkJrQixlQUE3QjtBQUNELFNBRkcsQ0FBSjtBQUdELE9BUk8sQ0FBUjtBQVNELEtBVkQ7QUFXRCxHQXBCRDs7QUFzQkFqQixFQUFBQSxRQUFRLENBQUMsa0NBQUQsRUFBcUMsWUFBTTtBQUNqREMsSUFBQUEscUJBQXFCLENBQ25CLGdDQUFDLGdCQUFEO0FBQU0sTUFBQSxRQUFRO0FBQWQsT0FDRSxnQ0FBQyxlQUFEO0FBQUssTUFBQSxFQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUEsRUFBRSxFQUFFLENBQWhCO0FBQW1CLE1BQUEsRUFBRSxFQUFFLENBQXZCO0FBQTBCLE1BQUEsRUFBRSxFQUFFLENBQTlCO0FBQWlDLE1BQUEsRUFBRSxFQUFFO0FBQXJDLE9BQ0UsZ0NBQUMsa0JBQUQsT0FERixFQUVFLGdDQUFDLGtCQUFELE9BRkYsRUFHRSxnQ0FBQyxrQkFBRCxPQUhGLEVBSUUsZ0NBQUMsa0JBQUQsT0FKRixFQUtFLGdDQUFDLGtCQUFELE9BTEYsRUFNRSxnQ0FBQyxrQkFBRCxPQU5GLEVBT0UsZ0NBQUMsa0JBQUQsT0FQRixFQVFFLGdDQUFDLGtCQUFELE9BUkYsQ0FERixDQURtQixDQUFyQjtBQWNELEdBZk8sQ0FBUjtBQWlCQUQsRUFBQUEsUUFBUSxDQUFDLHFDQUFELEVBQXdDLFlBQU07QUFDcERDLElBQUFBLHFCQUFxQixDQUNuQixnQ0FBQyxnQkFBRCxRQUNFLGdDQUFDLGVBQUQ7QUFBSyxNQUFBLEVBQUUsRUFBRSxDQUFUO0FBQVksTUFBQSxFQUFFLEVBQUUsQ0FBaEI7QUFBbUIsTUFBQSxFQUFFLEVBQUUsQ0FBdkI7QUFBMEIsTUFBQSxFQUFFLEVBQUUsQ0FBOUI7QUFBaUMsTUFBQSxFQUFFLEVBQUU7QUFBckMsT0FDRSxnQ0FBQyxrQkFBRCxPQURGLEVBRUUsZ0NBQUMsa0JBQUQsT0FGRixFQUdFLGdDQUFDLGtCQUFELE9BSEYsRUFJRSxnQ0FBQyxrQkFBRCxPQUpGLEVBS0UsZ0NBQUMsa0JBQUQsT0FMRixFQU1FLGdDQUFDLGtCQUFELE9BTkYsRUFPRSxnQ0FBQyxrQkFBRCxPQVBGLEVBUUUsZ0NBQUMsa0JBQUQsT0FSRixDQURGLENBRG1CLENBQXJCO0FBY0QsR0FmTyxDQUFSO0FBaUJBRCxFQUFBQSxRQUFRLENBQUMscUJBQUQsRUFBd0IsWUFBTTtBQUNwQ0MsSUFBQUEscUJBQXFCLENBQ25CLGdDQUFDLGdCQUFELFFBQ0UsZ0NBQUMsZUFBRCxRQUNFLGdDQUFDLGtCQUFELE9BREYsRUFFRSxnQ0FBQyxrQkFBRCxPQUZGLEVBR0UsZ0NBQUMsa0JBQUQsT0FIRixFQUlFLGdDQUFDLGtCQUFELE9BSkYsRUFLRSxnQ0FBQyxrQkFBRCxPQUxGLENBREYsQ0FEbUIsQ0FBckI7QUFXRCxHQVpPLENBQVI7QUFjQUQsRUFBQUEsUUFBUSxDQUFDLHNCQUFELEVBQXlCLFlBQU07QUFDckNDLElBQUFBLHFCQUFxQixDQUNuQixnQ0FBQyxnQkFBRCxRQUNFLGdDQUFDLGVBQUQ7QUFBSyxNQUFBLEVBQUUsRUFBRSxDQUFUO0FBQVksTUFBQSxFQUFFLEVBQUU7QUFBaEIsT0FDRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsUUFBUSxFQUFFLENBQWxCO0FBQXFCLE1BQUEsUUFBUSxFQUFFLENBQS9CO0FBQWtDLE1BQUEsUUFBUSxFQUFFO0FBQTVDLE1BREYsRUFFRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsUUFBUSxFQUFFLENBQWxCO0FBQXFCLE1BQUEsUUFBUSxFQUFFO0FBQS9CLE1BRkYsQ0FERixDQURtQixDQUFyQjtBQVFELEdBVE8sQ0FBUjtBQVdBRCxFQUFBQSxRQUFRLENBQUMsbUNBQUQsRUFBc0MsWUFBTTtBQUNsREMsSUFBQUEscUJBQXFCLENBQ25CLGdDQUFDLGdCQUFEO0FBQU0sTUFBQSxRQUFRO0FBQWQsT0FDRSxnQ0FBQyxlQUFEO0FBQUssTUFBQSxFQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUEsRUFBRSxFQUFFO0FBQWhCLE9BQ0UsZ0NBQUMsa0JBQUQ7QUFBUSxNQUFBLGFBQWEsRUFBQztBQUF0QixNQURGLEVBRUUsZ0NBQUMsa0JBQUQ7QUFBUSxNQUFBLGFBQWEsRUFBQztBQUF0QixNQUZGLEVBR0UsZ0NBQUMsa0JBQUQ7QUFBUSxNQUFBLGFBQWEsRUFBQztBQUF0QixNQUhGLEVBSUUsZ0NBQUMsa0JBQUQ7QUFBUSxNQUFBLGFBQWEsRUFBQztBQUF0QixNQUpGLENBREYsQ0FEbUIsQ0FBckI7QUFVRCxHQVhPLENBQVI7QUFhQUQsRUFBQUEsUUFBUSxDQUFDLG1DQUFELEVBQXNDLFlBQU07QUFDbERDLElBQUFBLHFCQUFxQixDQUNuQixnQ0FBQyxnQkFBRDtBQUFNLE1BQUEsUUFBUTtBQUFkLE9BQ0UsZ0NBQUMsZUFBRDtBQUFLLE1BQUEsRUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFBLEVBQUUsRUFBRTtBQUFoQixPQUNFLGdDQUFDLGtCQUFEO0FBQVEsTUFBQSxhQUFhLEVBQUM7QUFBdEIsTUFERixFQUVFLGdDQUFDLGtCQUFEO0FBQVEsTUFBQSxhQUFhLEVBQUM7QUFBdEIsTUFGRixFQUdFLGdDQUFDLGtCQUFEO0FBQVEsTUFBQSxhQUFhLEVBQUM7QUFBdEIsTUFIRixFQUlFLGdDQUFDLGtCQUFEO0FBQVEsTUFBQSxhQUFhLEVBQUM7QUFBdEIsTUFKRixDQURGLENBRG1CLENBQXJCO0FBVUQsR0FYTyxDQUFSO0FBYUFELEVBQUFBLFFBQVEsQ0FBQyxnQ0FBRCxFQUFtQyxZQUFNO0FBQy9DQyxJQUFBQSxxQkFBcUIsQ0FDbkIsZ0NBQUMsZ0JBQUQ7QUFBTSxNQUFBLFFBQVE7QUFBZCxPQUNFLGdDQUFDLGVBQUQ7QUFBSyxNQUFBLEVBQUUsRUFBRSxDQUFUO0FBQVksTUFBQSxFQUFFLEVBQUU7QUFBaEIsT0FDRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsYUFBYSxFQUFDO0FBQXRCLE1BREYsRUFFRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsYUFBYSxFQUFDO0FBQXRCLE1BRkYsRUFHRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsYUFBYSxFQUFDO0FBQXRCLE1BSEYsRUFJRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsYUFBYSxFQUFDO0FBQXRCLE1BSkYsQ0FERixDQURtQixDQUFyQjtBQVVELEdBWE8sQ0FBUjtBQWFBRCxFQUFBQSxRQUFRLENBQUMsY0FBRCxFQUFpQixZQUFNO0FBQzdCQyxJQUFBQSxxQkFBcUIsQ0FDbkIsZ0NBQUMsZ0JBQUQ7QUFBTSxNQUFBLFFBQVE7QUFBZCxPQUNFLGdDQUFDLGVBQUQ7QUFBSyxNQUFBLEVBQUUsRUFBRSxDQUFUO0FBQVksTUFBQSxFQUFFLEVBQUU7QUFBaEIsT0FDRSxnQ0FBQyxrQkFBRCxPQURGLEVBRUUsZ0NBQUMsa0JBQUQsT0FGRixFQUdFLGdDQUFDLGtCQUFELFFBQ0UsZ0NBQUMsZ0JBQUQsUUFDRSxnQ0FBQyxlQUFEO0FBQUssTUFBQSxFQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUEsRUFBRSxFQUFFO0FBQWhCLE9BQ0UsZ0NBQUMsa0JBQUQsUUFDRSxnQ0FBQyxnQkFBRDtBQUFNLE1BQUEsUUFBUTtBQUFkLE9BQ0UsZ0NBQUMsZUFBRCxRQUNFLGdDQUFDLGtCQUFELE9BREYsRUFFRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsUUFBUSxFQUFFO0FBQWxCLE1BRkYsRUFHRSxnQ0FBQyxrQkFBRCxPQUhGLENBREYsQ0FERixDQURGLEVBVUUsZ0NBQUMsa0JBQUQsT0FWRixFQVdFLGdDQUFDLGtCQUFELE9BWEYsRUFZRSxnQ0FBQyxrQkFBRCxPQVpGLEVBYUUsZ0NBQUMsa0JBQUQsT0FiRixFQWNFLGdDQUFDLGtCQUFELE9BZEYsQ0FERixDQURGLENBSEYsRUF1QkUsZ0NBQUMsa0JBQUQsT0F2QkYsQ0FERixDQURtQixDQUFyQjtBQTZCRCxHQTlCTyxDQUFSO0FBZ0NBRCxFQUFBQSxRQUFRLENBQUMsb0JBQUQsRUFBdUIsWUFBTTtBQUNuQ0MsSUFBQUEscUJBQXFCLENBQ25CLGdDQUFDLGdCQUFEO0FBQU0sTUFBQSxPQUFPLEVBQUU7QUFBZixPQUNFLGdDQUFDLGVBQUQ7QUFBSyxNQUFBLE9BQU8sRUFBRTtBQUFkLE9BQ0UsZ0NBQUMsa0JBQUQ7QUFBUSxNQUFBLE9BQU8sRUFBRTtBQUFqQixNQURGLEVBRUUsZ0NBQUMsa0JBQUQsT0FGRixFQUdFLGdDQUFDLGtCQUFEO0FBQVEsTUFBQSxPQUFPLEVBQUU7QUFBakIsTUFIRixDQURGLEVBTUUsZ0NBQUMsZUFBRDtBQUFLLE1BQUEsT0FBTyxFQUFFLEdBQWQ7QUFBbUIsTUFBQSxhQUFhLEVBQUU7QUFBbEMsT0FDRSxnQ0FBQyxrQkFBRDtBQUFRLE1BQUEsT0FBTyxFQUFFO0FBQWpCLE1BREYsRUFFRSxnQ0FBQyxrQkFBRCxPQUZGLEVBR0UsZ0NBQUMsa0JBQUQ7QUFBUSxNQUFBLE9BQU8sRUFBRTtBQUFqQixNQUhGLEVBSUUsZ0NBQUMsa0JBQUQsT0FKRixDQU5GLENBRG1CLENBQXJCO0FBZUQsR0FoQk8sQ0FBUjtBQWlCRCxDQTFLTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0VGVzdFV0aWxzIGZyb20gJ3JlYWN0LWRvbS90ZXN0LXV0aWxzJ1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4vU3RhdGUnXG5pbXBvcnQgR3JpZCBmcm9tICcuL2NvbXBvbmVudHMvR3JpZCdcbmltcG9ydCBSb3cgZnJvbSAnLi9jb21wb25lbnRzL1JvdydcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb21wb25lbnRzL0NvbHVtbidcblxuY29uc3QgZ2V0V3JhcHBlciA9IChjaGlsZHJlbikgPT4ge1xuICByZXR1cm4gbW91bnQoXG4gICAgPFByb3ZpZGVyPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZGVzY3JpYmUoJ1JlYWN0R3JpZCcsICgpID0+IHtcbiAgY29uc3QgZGVzY3JpYmVUZXN0c0ZvcklucHV0ID0gY2hpbGRyZW4gPT4ge1xuICAgIGNvbnN0IHNjcmVlblNpemVzID0ge1xuICAgICAgeHM6IDM0MCxcbiAgICAgIHNtOiA2MDAsXG4gICAgICBtZDogODAwLFxuICAgICAgbGc6IDExMDAsXG4gICAgICB4bDogMTYwMFxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNjcmVlblNpemVzKS5mb3JFYWNoKHNpemUgPT4ge1xuICAgICAgZGVzY3JpYmUoYCR7c2l6ZX0gc2NyZWVuc2AsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmlubmVyV2lkdGggPSBzY3JlZW5TaXplc1tzaXplXVxuICAgICAgICB9KVxuXG4gICAgICAgIHRlc3QoJ2l0IHJlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICAgICAgICAgIGV4cGVjdChnZXRXcmFwcGVyKGNoaWxkcmVuKSkudG9NYXRjaFNuYXBzaG90KClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlc2NyaWJlKCdyZXNwb25zaXZlIGdyaWQgd2l0aCBmaWxsZWQgcm93cycsICgpID0+IHtcbiAgICBkZXNjcmliZVRlc3RzRm9ySW5wdXQoKFxuICAgICAgPEdyaWQgZmlsbFJvd3M+XG4gICAgICAgIDxSb3cgeHM9ezF9IHNtPXsyfSBtZD17M30gbGc9ezR9IHhsPXs1fT5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdyZXNwb25zaXZlIGdyaWQgd2l0aCBubyBmaWxsZWQgcm93cycsICgpID0+IHtcbiAgICBkZXNjcmliZVRlc3RzRm9ySW5wdXQoKFxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxSb3cgeHM9ezF9IHNtPXsyfSBtZD17M30gbGc9ezR9IHhsPXs1fT5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdub24tcmVzcG9uc2l2ZSBncmlkJywgKCkgPT4ge1xuICAgIGRlc2NyaWJlVGVzdHNGb3JJbnB1dCgoXG4gICAgICA8R3JpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb2x1bW5zIHdpdGggb2Zmc2V0cycsICgpID0+IHtcbiAgICBkZXNjcmliZVRlc3RzRm9ySW5wdXQoKFxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxSb3cgeGw9ezV9IG1kPXszfT5cbiAgICAgICAgICA8Q29sdW1uIG1kT2Zmc2V0PXsyfSBsZ09mZnNldD17M30gc21PZmZzZXQ9ezB9IC8+XG4gICAgICAgICAgPENvbHVtbiB4c09mZnNldD17MX0geGxPZmZzZXQ9ezR9IC8+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICkpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ2NlbnRlciB2ZXJ0aWNhbGx5IGFsaWduZWQgY29sdW1ucycsICgpID0+IHtcbiAgICBkZXNjcmliZVRlc3RzRm9ySW5wdXQoKFxuICAgICAgPEdyaWQgZmlsbFJvd3M+XG4gICAgICAgIDxSb3cgc209ezF9IHhsPXszfT5cbiAgICAgICAgICA8Q29sdW1uIHZlcnRpY2FsQWxpZ249J2NlbnRlcicgLz5cbiAgICAgICAgICA8Q29sdW1uIHZlcnRpY2FsQWxpZ249J2NlbnRlcicgLz5cbiAgICAgICAgICA8Q29sdW1uIHZlcnRpY2FsQWxpZ249J2NlbnRlcicgLz5cbiAgICAgICAgICA8Q29sdW1uIHZlcnRpY2FsQWxpZ249J2NlbnRlcicgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKSlcbiAgfSlcblxuICBkZXNjcmliZSgnYm90dG9tIHZlcnRpY2FsbHkgYWxpZ25lZCBjb2x1bW5zJywgKCkgPT4ge1xuICAgIGRlc2NyaWJlVGVzdHNGb3JJbnB1dCgoXG4gICAgICA8R3JpZCBmaWxsUm93cz5cbiAgICAgICAgPFJvdyBzbT17MX0geGw9ezN9PlxuICAgICAgICAgIDxDb2x1bW4gdmVydGljYWxBbGlnbj0nYm90dG9tJyAvPlxuICAgICAgICAgIDxDb2x1bW4gdmVydGljYWxBbGlnbj0nYm90dG9tJyAvPlxuICAgICAgICAgIDxDb2x1bW4gdmVydGljYWxBbGlnbj0nYm90dG9tJyAvPlxuICAgICAgICAgIDxDb2x1bW4gdmVydGljYWxBbGlnbj0nYm90dG9tJyAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApKVxuICB9KVxuXG4gIGRlc2NyaWJlKCd0b3AgdmVydGljYWxseSBhbGlnbmVkIGNvbHVtbnMnLCAoKSA9PiB7XG4gICAgZGVzY3JpYmVUZXN0c0ZvcklucHV0KChcbiAgICAgIDxHcmlkIGZpbGxSb3dzPlxuICAgICAgICA8Um93IHNtPXsxfSB4bD17M30+XG4gICAgICAgICAgPENvbHVtbiB2ZXJ0aWNhbEFsaWduPSd0b3AnIC8+XG4gICAgICAgICAgPENvbHVtbiB2ZXJ0aWNhbEFsaWduPSd0b3AnIC8+XG4gICAgICAgICAgPENvbHVtbiB2ZXJ0aWNhbEFsaWduPSd0b3AnIC8+XG4gICAgICAgICAgPENvbHVtbiB2ZXJ0aWNhbEFsaWduPSd0b3AnIC8+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICkpXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ25lc3RlZCBncmlkcycsICgpID0+IHtcbiAgICBkZXNjcmliZVRlc3RzRm9ySW5wdXQoKFxuICAgICAgPEdyaWQgZmlsbFJvd3M+XG4gICAgICAgIDxSb3cgc209ezF9IHhsPXszfT5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgPFJvdyBzbT17M30geGw9ezV9PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBmaWxsUm93cz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbHVtbiBtZE9mZnNldD17MX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgICAgICAgPENvbHVtbiAvPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgKSlcbiAgfSlcblxuICBkZXNjcmliZSgnZ3JpZHMgd2l0aCBzcGFjaW5nJywgKCkgPT4ge1xuICAgIGRlc2NyaWJlVGVzdHNGb3JJbnB1dCgoXG4gICAgICA8R3JpZCBzcGFjaW5nPXsyfT5cbiAgICAgICAgPFJvdyBzcGFjaW5nPXswLjZ9PlxuICAgICAgICAgIDxDb2x1bW4gc3BhY2luZz17MS44fSAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIHNwYWNpbmc9ezMuNn0gLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgc3BhY2luZz17MS40fSBjb2x1bW5TcGFjaW5nPXsxLjJ9PlxuICAgICAgICAgIDxDb2x1bW4gc3BhY2luZz17MS44fSAvPlxuICAgICAgICAgIDxDb2x1bW4gLz5cbiAgICAgICAgICA8Q29sdW1uIHNwYWNpbmc9ezMuNn0gLz5cbiAgICAgICAgICA8Q29sdW1uIC8+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgICkpXG4gIH0pXG59KSJdfQ==