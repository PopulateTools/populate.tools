"use strict";

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Connector = function Connector(params) {
  var _this = this;

  _classCallCheck(this, Connector);

  _defineProperty(this, "series", []);

  _defineProperty(this, "charts", []);

  _defineProperty(this, "dataset0", void 0);

  _defineProperty(this, "dataset1", void 0);

  _defineProperty(this, "dataset2", void 0);

  _defineProperty(this, "RANGES_DEFAULT", []);

  _defineProperty(this, "CHARTS_DEFAULT", []);

  _defineProperty(this, "setDefaults", function() {
    _this.series = [
      {
        id: "ds-contratos-municipio",
        freq: "month",
        name: "Número de contratos",
        units: "contratos / hab.",
        ranges: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-poblacion-municipal",
        name: "Población",
        units: "habitantes",
        ranges: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        scale: "log"
      },
      {
        id: "ds-autonomos-municipio",
        name: "Autónomos",
        units: "autónomos / hab.",
        freq: "month",
        ranges: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-defunciones-municipal",
        name: "Defunciones",
        units: "defunciones / hab.",
        ranges: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-empresas-municipio",
        name: "Empresas",
        units: "empresas / hab.",
        ranges: [2014],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-deuda-municipal",
        name: "Deuda",
        units: "€ / hab.",
        ranges: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-afiliados-ss-municipio",
        freq: "month",
        name: "Afiliados a la Seg. Social",
        units: "afiliados / hab.",
        ranges: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-personas-paradas-municipio",
        freq: "month",
        name: "Personas paradas",
        units: "desempleados / hab.",
        ranges: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        ratio: "ds-poblacion-municipal"
      },
      {
        id: "ds-renta-bruta-media-municipal",
        name: "Renta bruta media",
        units: "€",
        ranges: [2014, 2016]
      },
      {
        id: "ds-nacimientos-municipal",
        name: "Nacimientos",
        units: "nacimientos / hab.",
        ranges: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        ratio: "ds-poblacion-municipal"
      }
    ];
    _this.RANGES_DEFAULT = [
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018
    ];
    _this.CHARTS_DEFAULT = [
      {
        type: "Dispersion",
        xAxisProp: "value1",
        yAxisProp: "value0",
        aggregationProp: "province_desc",
        btnPlaceholder: "Añadir provincia",
        tooltip: _this.tooltipCommon,
        xScaleFunction: function xScaleFunction(d3) {
          return d3.scaleSymlog();
        }
      },
      {
        key: "Espectro",
        xAxisProp: "value1",
        yAxisProp: "value0",
        aggregationProp: "province_desc",
        legendLabels: ["Más", "Menos"],
        averageLabel: "Media",
        medianLabel: "Mediana",
        sampleSize: 3,
        baseDataset: "ds-poblacion-municipal",
        tooltip: _this.tooltipCommon
      }
    ];
  });

  _defineProperty(this, "tooltipCommon", function(d) {
    var _this$series$find = _this.series.find(function(d) {
        return d.id === _this.dataset0;
      }),
      units0 = _this$series$find.units,
      name0 = _this$series$find.name;

    var _this$series$find2 = _this.series.find(function(d) {
        return d.id === _this.dataset1;
      }),
      units1 = _this$series$find2.units,
      name1 = _this$series$find2.name;

    return '<div style="padding: 1rem;"><div style="margin: 0 0 8px"><strong>'
      .concat(d.location_desc, "</strong> (")
      .concat(d.province_desc, ")</div><div>")
      .concat(name0, ": ")
      .concat(d.value0.toLocaleString(), " ")
      .concat(units0, "</div><div>")
      .concat(name1, ": ")
      .concat(d.value1.toLocaleString(), " ")
      .concat(units1, "</div></div>");
  });

  _defineProperty(this, "helperDatasetQuery", function(param, range, otherParam) {
    var isMonthly = _this.series.some(function(d) {
      return d.id === param && d.freq === "month";
    });

    var seriesWithRatio = _this.series.find(function(d) {
      return d.id === param && d.ratio === otherParam;
    });

    var ratioQuery = "";

    if (seriesWithRatio !== undefined) {
      ratioQuery = "&divided_by=".concat(seriesWithRatio.ratio);
    }

    if (isMonthly) {
      range = new Date().getFullYear() === range ? "".concat(range, "-01") : "".concat(range, "-12");
    }

    return "datasets/"
      .concat(param, ".csv?filter_by_date=")
      .concat(
        range,
        "&include=municipality,province&except_columns=municipality_slug,province_slug,municipality_lat,municipality_lon,province_lat,province_lon"
      )
      .concat(ratioQuery);
  });

  _defineProperty(this, "helperCollectionQuery", function(param, range) {
    var _this$dataset2$find = _this.dataset2.find(function(d) {
        return d.code === param.toString();
      }),
      code = _this$dataset2$find.code,
      area = _this$dataset2$find.area,
      kind = _this$dataset2$find.kind;

    var dataset = area === "functional" ? "ds-presupuestos-municipales-funcional" : "ds-presupuestos-municipales-economica";
    var type = kind === "expense" ? "G" : "I";
    return "datasets/"
      .concat(dataset, ".json?filter_by_year=")
      .concat(range, "&filter_by_code=")
      .concat(code, "&filter_by_kind=")
      .concat(type);
  });

  this.charts = params || [];
  this.setDefaults();
  return {
    charts: this.charts.map(function(x) {
      return Object.assign(
        x,
        _this.CHARTS_DEFAULT.find(function(y) {
          return y.type == x.type;
        })
      );
    }),
    setup: {
      baseURL: "https://data.populate.tools/visualizador/",
      headers: {
        Authorization: "Bearer WxVwwI-uTEVzvP6RF8FiFg" // timeout: 10000
      }
    },
    ranges: function ranges(dataset) {
      if (!dataset) {
        return _this.RANGES_DEFAULT;
      }

      var _this$series$find3 = _this.series.find(function(d) {
          return d.id === dataset;
        }),
        ranges = _this$series$find3.ranges;

      return ranges;
    },
    endpoints: {
      series: {
        build: function build() {
          return ["datasets.json", "collections/c-categorias-presupuestos-municipales/items.json"];
        },
        parse: function parse(data) {
          var _data = _slicedToArray(data, 2),
            datasets = _data[0],
            collections = _data[1]; // Handle user selections

          _this.dataset2 = collections; // FIXME: Don't merge budgets, concat disabled

          return Object.values(datasets)
            .filter(function(d) {
              return _this.series.some(function(f) {
                return f.id === d.id;
              });
            })
            .map(function(d) {
              return {
                id: d.id,
                name: d.name
              };
            })
            .sort(function(a, b) {
              return (
                _this.series.findIndex(function(d) {
                  return d.id === a.id;
                }) -
                _this.series.findIndex(function(d) {
                  return d.id === b.id;
                })
              );
            }); // .concat(collections.map(d => ({ id: parseInt(d.code), name: d.name })));
        }
      },
      data: {
        build: function build(params) {
          var req = [];

          if (params.varX) {
            if (Number.isInteger(params.varX)) {
              req.push(_this.helperCollectionQuery(params.varX, params.range));
            } else {
              req.push(_this.helperDatasetQuery(params.varX, params.range, params.varY));
            }
          }

          if (params.varY) {
            req.push(_this.helperDatasetQuery(params.varY, params.range, params.varX));
          } // Handle user selections

          _this.dataset0 = params.varX;
          _this.dataset1 = params.varY;
          return req;
        },
        parse: function parse(data) {
          var arrMerged = [];

          var _data2 = _slicedToArray(data, 2),
            _data2$ = _data2[0],
            arr0 = _data2$ === void 0 ? [] : _data2$,
            _data2$2 = _data2[1],
            arr1 = _data2$2 === void 0 ? [] : _data2$2;

          if (arr0.length && arr1.length) {
            if (
              arr0.some(function(d) {
                return d.hasOwnProperty("organization_id");
              })
            ) {
              arr0.forEach(function(d) {
                var itemMerged = {};
                var matchedItem = arr1.find(function(g) {
                  return parseInt(g.location_id) === parseInt(d.ine_code);
                });

                if (matchedItem) {
                  itemMerged.value0 = parseInt(d.amount);
                  itemMerged.value1 = parseFloat(
                    matchedItem.hasOwnProperty("divided_by_value") ? matchedItem.divided_by_value : matchedItem.value
                  );
                  itemMerged.location_id = parseInt(d.ine_code);
                  itemMerged.location_desc = matchedItem.municipality_name;
                  itemMerged.province_id = parseInt(d.province_id);
                  itemMerged.province_desc = matchedItem.province_name;
                  arrMerged.push(itemMerged);
                }
              });
            } else {
              arr0.forEach(function(d) {
                // Ignore if there's no location. It won't match
                if (d.location_id) {
                  var itemMerged = {};
                  var matchedItem = arr1.find(function(g) {
                    return parseInt(g.location_id) === parseInt(d.location_id);
                  });

                  if (matchedItem) {
                    itemMerged.value0 = parseFloat(d.hasOwnProperty("divided_by_value") ? d.divided_by_value : d.value);
                    itemMerged.value1 = parseFloat(
                      matchedItem.hasOwnProperty("divided_by_value") ? matchedItem.divided_by_value : matchedItem.value
                    );
                    itemMerged.location_id = parseInt(d.location_id);
                    itemMerged.location_desc = d.municipality_name;
                    itemMerged.province_id = parseInt(d.province_id);
                    itemMerged.province_desc = d.province_name;
                    arrMerged.push(itemMerged);
                  }
                }
              });
            }
          } else if (arr0.length) {
            arrMerged.concat(arr0);
          } else if (arr1.length) {
            arrMerged.concat(arr1);
          }

          return arrMerged;
        }
      }
    }
  };
};
