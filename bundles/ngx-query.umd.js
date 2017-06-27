/**
 * ngx-query - a query panel for Angular 4+
 * @version v0.1.1
 * @author Joe Xue
 * @link https://github.com/xuemingfeng/ngx-query#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ngxQuery"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else
		root["ngxQuery"] = factory(root["ng"]["core"], root["ng"]["common"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataType;
(function (DataType) {
    DataType[DataType["string"] = 'string'] = "string";
    DataType[DataType["number"] = 'number'] = "number";
    DataType[DataType["boolean"] = 'boolean'] = "boolean";
    DataType[DataType["date"] = 'date'] = "date";
    DataType[DataType["datetime"] = 'datetime'] = "datetime";
    DataType[DataType["any"] = 'any'] = "any";
})(DataType = exports.DataType || (exports.DataType = {}));
var GroupOpType;
(function (GroupOpType) {
    GroupOpType[GroupOpType["AND"] = 'and'] = "AND";
    GroupOpType[GroupOpType["OR"] = 'or'] = "OR";
})(GroupOpType = exports.GroupOpType || (exports.GroupOpType = {}));
var FieldOpType;
(function (FieldOpType) {
    FieldOpType[FieldOpType["Equal"] = 'eq'] = "Equal";
    FieldOpType[FieldOpType["NotEqual"] = 'ne'] = "NotEqual";
    FieldOpType[FieldOpType["Less"] = 'lt'] = "Less";
    FieldOpType[FieldOpType["LessOrEqual"] = 'le'] = "LessOrEqual";
    FieldOpType[FieldOpType["Greater"] = 'gt'] = "Greater";
    FieldOpType[FieldOpType["GreaterOrEqual"] = 'ge'] = "GreaterOrEqual";
    FieldOpType[FieldOpType["BeginWith"] = 'bw'] = "BeginWith";
    FieldOpType[FieldOpType["NotBeginWith"] = 'bn'] = "NotBeginWith";
    FieldOpType[FieldOpType["EndWith"] = 'ew'] = "EndWith";
    FieldOpType[FieldOpType["NotEndWith"] = 'en'] = "NotEndWith";
    FieldOpType[FieldOpType["Contains"] = 'cn'] = "Contains";
    FieldOpType[FieldOpType["NotContains"] = 'nc'] = "NotContains";
    FieldOpType[FieldOpType["Between"] = 'bt'] = "Between";
})(FieldOpType = exports.FieldOpType || (exports.FieldOpType = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode[QueryMode["plain"] = 'plain'] = "plain";
    QueryMode[QueryMode["advanced"] = 'advanced'] = "advanced";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_types_1 = __webpack_require__(1);
var query_defaults_provider_1 = __webpack_require__(8);
var QueryConfigurationService = (function () {
    function QueryConfigurationService(defaultOptions) {
        this.defaultOptions = defaultOptions;
        this.labels = {
            buttons: {
                'quick': 'Quick',
                'advanced': 'Advanced',
                'reset': 'Reset',
                'search': 'Search'
            },
            groupOp: {
                'and': 'all',
                'or': 'any'
            },
            fieldOp: {
                'eq': 'equal',
                'ne': 'does not equal',
                'lt': 'less',
                'le': 'less or equal',
                'gt': 'greater',
                'ge': 'greater or equal',
                'bw': 'begins with',
                'bn': 'does not begin with',
                'ew': 'ends with',
                'en': 'does not end with',
                'cn': 'contains',
                'nc': 'does not contain',
                'bt': 'between'
            }
        };
        this.groupOps = [
            { key: query_types_1.GroupOpType.AND, label: this.labels.groupOp[query_types_1.GroupOpType.AND] },
            { key: query_types_1.GroupOpType.OR, label: this.labels.groupOp[query_types_1.GroupOpType.OR] }
        ];
        this.dataTypeOps = [{
                dataType: query_types_1.DataType.any,
                ops: [
                    { key: query_types_1.FieldOpType.Equal, label: this.labels.fieldOp[query_types_1.FieldOpType.Equal] },
                    { key: query_types_1.FieldOpType.NotEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEqual] }
                ]
            }, {
                dataType: query_types_1.DataType.string,
                ops: [
                    { key: query_types_1.FieldOpType.Equal, label: this.labels.fieldOp[query_types_1.FieldOpType.Equal] },
                    { key: query_types_1.FieldOpType.NotEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEqual] },
                    { key: query_types_1.FieldOpType.Contains, label: this.labels.fieldOp[query_types_1.FieldOpType.Contains] },
                    { key: query_types_1.FieldOpType.NotContains, label: this.labels.fieldOp[query_types_1.FieldOpType.NotContains] },
                    { key: query_types_1.FieldOpType.BeginWith, label: this.labels.fieldOp[query_types_1.FieldOpType.BeginWith] },
                    { key: query_types_1.FieldOpType.NotBeginWith, label: this.labels.fieldOp[query_types_1.FieldOpType.NotBeginWith] },
                    { key: query_types_1.FieldOpType.EndWith, label: this.labels.fieldOp[query_types_1.FieldOpType.EndWith] },
                    { key: query_types_1.FieldOpType.NotEndWith, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEndWith] }
                ]
            }, {
                dataType: query_types_1.DataType.number,
                ops: [
                    { key: query_types_1.FieldOpType.Equal, label: this.labels.fieldOp[query_types_1.FieldOpType.Equal] },
                    { key: query_types_1.FieldOpType.NotEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEqual] },
                    { key: query_types_1.FieldOpType.Less, label: this.labels.fieldOp[query_types_1.FieldOpType.Less] },
                    { key: query_types_1.FieldOpType.LessOrEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.LessOrEqual] },
                    { key: query_types_1.FieldOpType.Greater, label: this.labels.fieldOp[query_types_1.FieldOpType.Greater] },
                    { key: query_types_1.FieldOpType.GreaterOrEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.GreaterOrEqual] },
                    { key: query_types_1.FieldOpType.Between, label: this.labels.fieldOp[query_types_1.FieldOpType.Between] }
                ]
            }, {
                dataType: query_types_1.DataType.date,
                ops: [
                    { key: query_types_1.FieldOpType.Equal, label: this.labels.fieldOp[query_types_1.FieldOpType.Equal] },
                    { key: query_types_1.FieldOpType.NotEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEqual] },
                    { key: query_types_1.FieldOpType.Less, label: this.labels.fieldOp[query_types_1.FieldOpType.Less] },
                    { key: query_types_1.FieldOpType.LessOrEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.LessOrEqual] },
                    { key: query_types_1.FieldOpType.Greater, label: this.labels.fieldOp[query_types_1.FieldOpType.Greater] },
                    { key: query_types_1.FieldOpType.GreaterOrEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.GreaterOrEqual] },
                    { key: query_types_1.FieldOpType.Between, label: this.labels.fieldOp[query_types_1.FieldOpType.Between] }
                ]
            }, {
                dataType: query_types_1.DataType.datetime,
                ops: [
                    { key: query_types_1.FieldOpType.Equal, label: this.labels.fieldOp[query_types_1.FieldOpType.Equal] },
                    { key: query_types_1.FieldOpType.NotEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEqual] },
                    { key: query_types_1.FieldOpType.Less, label: this.labels.fieldOp[query_types_1.FieldOpType.Less] },
                    { key: query_types_1.FieldOpType.LessOrEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.LessOrEqual] },
                    { key: query_types_1.FieldOpType.Greater, label: this.labels.fieldOp[query_types_1.FieldOpType.Greater] },
                    { key: query_types_1.FieldOpType.GreaterOrEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.GreaterOrEqual] },
                    { key: query_types_1.FieldOpType.Between, label: this.labels.fieldOp[query_types_1.FieldOpType.Between] }
                ]
            }, {
                dataType: query_types_1.DataType.boolean,
                ops: [
                    { key: query_types_1.FieldOpType.Equal, label: this.labels.fieldOp[query_types_1.FieldOpType.Equal] },
                    { key: query_types_1.FieldOpType.NotEqual, label: this.labels.fieldOp[query_types_1.FieldOpType.NotEqual] }
                ]
            }];
        this.update(defaultOptions);
    }
    QueryConfigurationService.prototype.update = function (options) {
        this.labels = Object.assign({}, this.labels, options.labels);
        for (var _i = 0, _a = this.groupOps; _i < _a.length; _i++) {
            var groupOp = _a[_i];
            groupOp.label = this.labels.groupOp[groupOp.key];
        }
        for (var _b = 0, _c = this.dataTypeOps; _b < _c.length; _b++) {
            var dataTypeOp = _c[_b];
            for (var _d = 0, _e = dataTypeOp.ops; _d < _e.length; _d++) {
                var op = _e[_d];
                op.label = this.labels.fieldOp[op.key];
            }
        }
    };
    return QueryConfigurationService;
}());
QueryConfigurationService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(query_defaults_provider_1.QUERY_DEFAULTS)),
    __metadata("design:paramtypes", [Object])
], QueryConfigurationService);
exports.QueryConfigurationService = QueryConfigurationService;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_types_1 = __webpack_require__(1);
var ValueInputTemplateDirective = (function () {
    function ValueInputTemplateDirective(template) {
        this.template = template;
    }
    return ValueInputTemplateDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ValueInputTemplateDirective.prototype, "dataType", void 0);
ValueInputTemplateDirective = __decorate([
    core_1.Directive({
        selector: '[ngx-query-value-input-template]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef])
], ValueInputTemplateDirective);
exports.ValueInputTemplateDirective = ValueInputTemplateDirective;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function translateQueryGroup(queryGroup, fields) {
    if (queryGroup.rules != null) {
        var _loop_1 = function (rule) {
            if (rule.datas === undefined) {
                rule.datas = [undefined, undefined];
                if (rule.data) {
                    rule.datas[0] = rule.data;
                }
            }
            if (rule.datas) {
                rule['sdatas'] = rule.datas;
            }
            // if (rule.data) {
            //   rule['sdata'] = rule.data;
            // } else {
            //   rule.data = rule.datas[0]
            // }
            if (typeof rule.field === 'string') {
                field = fields.find(function (x) { return x.name === rule.field; });
                if (field === undefined || field === null) {
                    throw new Error("Can't found out a field by name '" + rule.field + "'.");
                }
                rule.field = field;
            }
        };
        var field;
        for (var _i = 0, _a = queryGroup.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            _loop_1(rule);
        }
    }
    if (queryGroup.groups && queryGroup.groups !== null) {
        for (var _b = 0, _c = queryGroup.groups; _b < _c.length; _b++) {
            var group = _c[_b];
            translateQueryGroup(group, fields);
        }
    }
}
exports.translateQueryGroup = translateQueryGroup;
function cloneQueryGroup(source) {
    var result = {
        op: source.op,
        groups: [],
        rules: []
    };
    if (source.rules && source.rules.length > 0) {
        for (var _i = 0, _a = source.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            result.rules.push({
                field: rule.field,
                op: rule.op,
                data: rule.data,
                datas: rule.datas ? rule.datas.map(function (x) { return x; }) : undefined
            });
        }
    }
    if (source.groups && source.groups.length > 0) {
        for (var _b = 0, _c = source.groups; _b < _c.length; _b++) {
            var child = _c[_b];
            result.groups.push(cloneQueryGroup(child));
        }
    }
    return result;
}
exports.cloneQueryGroup = cloneQueryGroup;
function generateQuery(queryGroup) {
    if (queryGroup === undefined || queryGroup === null) {
        return undefined;
    }
    var result = {
        op: queryGroup.op,
        groups: [],
        rules: []
    };
    if (queryGroup.rules && queryGroup.rules.length > 0) {
        for (var _i = 0, _a = queryGroup.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var rule2 = {
                field: rule.field['name'],
                op: rule.op,
                data: undefined,
                datas: undefined
            };
            if (rule.datas)
                if (rule2.op === 'bt') {
                    rule2.datas = rule.datas;
                }
                else {
                    rule2.data = rule.datas[0];
                }
            result.rules.push(rule2);
        }
    }
    if (queryGroup.groups && queryGroup.groups.length > 0) {
        for (var _b = 0, _c = queryGroup.groups; _b < _c.length; _b++) {
            var child = _c[_b];
            result.groups.push(generateQuery(child));
        }
    }
    return result;
}
exports.generateQuery = generateQuery;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_helper_1 = __webpack_require__(4);
var AdvancedComponent = (function () {
    function AdvancedComponent() {
        this.fields = [];
    }
    Object.defineProperty(AdvancedComponent.prototype, "queryTemplate", {
        get: function () {
            return this._queryTemplate;
        },
        set: function (val) {
            this._queryTemplate = val;
            this.tempQueryTemplate = query_helper_1.cloneQueryGroup(this._queryTemplate);
            this._rules = this.getRules(this.tempQueryTemplate);
        },
        enumerable: true,
        configurable: true
    });
    AdvancedComponent.prototype.reset = function () {
        this.queryTemplate = this._queryTemplate;
    };
    AdvancedComponent.prototype.getQuery = function () {
        return query_helper_1.generateQuery(this.tempQueryTemplate);
    };
    AdvancedComponent.prototype.getRules = function (group) {
        var rules = [];
        if (group.rules && group.rules != null && group.rules.length > 0) {
            rules = rules.concat(group.rules);
        }
        if (group.groups && group.groups != null && group.groups.length > 0) {
            for (var _i = 0, _a = group.groups; _i < _a.length; _i++) {
                var child = _a[_i];
                rules = rules.concat(this.getRules(child));
            }
        }
        return rules;
    };
    return AdvancedComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AdvancedComponent.prototype, "fields", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AdvancedComponent.prototype, "queryTemplate", null);
AdvancedComponent = __decorate([
    core_1.Component({
        selector: 'ngx-query-advanced',
        template: "\n  <div class=\"row\">\n    <div class=\"form-horizontal\">\n      <ngx-query-group [group]=\"tempQueryTemplate\" [fields]=\"fields\"></ngx-query-group>\n    </div>\n  </div>\n  "
    })
], AdvancedComponent);
exports.AdvancedComponent = AdvancedComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_types_1 = __webpack_require__(1);
var value_input_template_directive_1 = __webpack_require__(3);
var FieldDirective = (function () {
    function FieldDirective() {
        this.type = query_types_1.DataType.any;
    }
    return FieldDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FieldDirective.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FieldDirective.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FieldDirective.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FieldDirective.prototype, "custom", void 0);
__decorate([
    core_1.Input(),
    core_1.ContentChild(value_input_template_directive_1.ValueInputTemplateDirective, { read: core_1.TemplateRef }),
    __metadata("design:type", core_1.TemplateRef)
], FieldDirective.prototype, "valueInputTemplate", void 0);
FieldDirective = __decorate([
    core_1.Directive({
        selector: 'ngx-query-field'
    })
], FieldDirective);
exports.FieldDirective = FieldDirective;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_helper_1 = __webpack_require__(4);
var PlainComponent = (function () {
    function PlainComponent() {
    }
    Object.defineProperty(PlainComponent.prototype, "queryTemplate", {
        get: function () {
            return this._queryTemplate;
        },
        set: function (val) {
            this._queryTemplate = val;
            this._tempQueryTemplate = query_helper_1.cloneQueryGroup(this._queryTemplate);
            this.rules = this.getRules(this._tempQueryTemplate);
        },
        enumerable: true,
        configurable: true
    });
    PlainComponent.prototype.reset = function () {
        this.queryTemplate = this._queryTemplate;
    };
    PlainComponent.prototype.getQuery = function () {
        return query_helper_1.generateQuery(this._tempQueryTemplate);
    };
    PlainComponent.prototype.getRules = function (group) {
        var rules = [];
        if (group.rules && group.rules !== null && group.rules.length > 0) {
            rules = rules.concat(group.rules);
        }
        if (group.groups && group.groups !== null && group.groups.length > 0) {
            for (var _i = 0, _a = group.groups; _i < _a.length; _i++) {
                var child = _a[_i];
                rules = rules.concat(this.getRules(child));
            }
        }
        return rules;
    };
    return PlainComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PlainComponent.prototype, "queryTemplate", null);
PlainComponent = __decorate([
    core_1.Component({
        selector: 'ngx-query-plain',
        template: "\n  <div class=\"row\">\n    <div class=\"form-horizontal\">\n      <div class=\"col-md-6\" *ngFor=\"let rule of rules\">\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">{{rule.field.label}}</label>\n          <div class=\"col-lg-9\">\n            <ng-container *ngIf=\"rule.op!='bt'\" [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n              [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\"></ng-container>\n            <ul class=\"list-inline ngx-query-list-inline\" *ngIf=\"rule.op=='bt'\">\n                <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                      [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\">\n                    </ng-container>\n                </li>\n                <li><span>-</span></li>\n                <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                      [ngOutletContext]=\"{rule:rule, dataIndex:1, custom: rule.field.custom}\">\n                    </ng-container>\n                </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    })
], PlainComponent);
exports.PlainComponent = PlainComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
exports.QUERY_DEFAULTS = new core_1.OpaqueToken('QUERY_DEFAULTS');
function QueryDefaultsProvider(options) {
    if (options === void 0) { options = {}; }
    return {
        provide: exports.QUERY_DEFAULTS,
        useValue: options
    };
}
exports.QueryDefaultsProvider = QueryDefaultsProvider;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var forms_1 = __webpack_require__(16);
var query_component_1 = __webpack_require__(13);
var plain_component_1 = __webpack_require__(7);
var advanced_component_1 = __webpack_require__(5);
var group_component_1 = __webpack_require__(10);
var rule_component_1 = __webpack_require__(11);
var value_input_template_directive_1 = __webpack_require__(3);
var field_directive_1 = __webpack_require__(6);
var configuration_service_1 = __webpack_require__(2);
var query_defaults_provider_1 = __webpack_require__(8);
var NgxQueryModule = NgxQueryModule_1 = (function () {
    function NgxQueryModule() {
    }
    NgxQueryModule.forRoot = function (options) {
        return {
            ngModule: NgxQueryModule_1,
            providers: [query_defaults_provider_1.QueryDefaultsProvider(options)]
        };
    };
    return NgxQueryModule;
}());
NgxQueryModule = NgxQueryModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            query_component_1.QueryComponent,
            plain_component_1.PlainComponent,
            advanced_component_1.AdvancedComponent,
            group_component_1.GroupComponent,
            rule_component_1.RuleComponent,
            value_input_template_directive_1.ValueInputTemplateDirective,
            field_directive_1.FieldDirective
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [
            query_component_1.QueryComponent,
            value_input_template_directive_1.ValueInputTemplateDirective,
            field_directive_1.FieldDirective
        ],
        providers: [
            configuration_service_1.QueryConfigurationService
        ]
    })
], NgxQueryModule);
exports.NgxQueryModule = NgxQueryModule;
var NgxQueryModule_1;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_types_1 = __webpack_require__(1);
var configuration_service_1 = __webpack_require__(2);
var GroupComponent = (function () {
    function GroupComponent(config) {
        this.config = config;
        this.fields = [];
        this.canRemove = false;
        this.remove = new core_1.EventEmitter();
        this.groupOps = this.config.groupOps;
    }
    GroupComponent.prototype.addGroup = function () {
        this.group.groups.push({
            op: query_types_1.GroupOpType.AND,
            groups: [],
            rules: []
        });
    };
    GroupComponent.prototype.addRule = function () {
        var field;
        if (this.fields.length > 0) {
            field = this.fields[0];
        }
        this.group.rules.push({
            op: 'eq',
            field: field,
            data: '',
            datas: []
        });
    };
    GroupComponent.prototype.removeGroup = function () {
        this.remove.emit(this.group);
    };
    GroupComponent.prototype.removeGroupItem = function (group) {
        this.group.groups = this.group.groups.filter(function (x) { return x !== group; });
    };
    return GroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GroupComponent.prototype, "group", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], GroupComponent.prototype, "fields", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GroupComponent.prototype, "canRemove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GroupComponent.prototype, "remove", void 0);
GroupComponent = __decorate([
    core_1.Component({
        selector: 'ngx-query-group',
        template: "\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <div class=\"col-md-3\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"addGroup()\"><i class=\"glyphicon glyphicon-plus\"></i> {{'{}'}}</button>\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"addRule()\"><i class=\"glyphicon glyphicon-plus\"></i></button>\n                        <button type=\"button\" class=\"btn btn-default\" *ngIf=\"canRemove\"\n                            (click)=\"removeGroup()\"><i class=\"glyphicon glyphicon-minus\"></i></button>\n                    </div>\n                    <select class=\"form-control\" [(ngModel)]=\"group.op\">\n                        <option *ngFor=\"let item of groupOps\" [ngValue]=\"item.key\">{{item.label}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"group.groups.length>0\" class=\"col-md-12 ngx-query-group-children\">\n        <ngx-query-group *ngFor=\"let group of group.groups\" [group]=\"group\"\n            [fields]=\"fields\" [canRemove]=\"true\" (remove)=\"removeGroupItem($event)\">\n        </ngx-query-group>\n    </div>\n    <div *ngIf=\"group.rules.length>0\" class=\"col-md-12 ngx-query-group-children\">\n        <ngx-query-rule *ngFor=\"let rule of group.rules\" [group]=\"group\" [rule]=\"rule\" [fields]=\"fields\">\n        </ngx-query-rule>\n    </div>\n    ",
        styles: ["\n    .ngx-query-group-children {\n        margin-left:20px;\n    }"]
    }),
    __metadata("design:paramtypes", [configuration_service_1.QueryConfigurationService])
], GroupComponent);
exports.GroupComponent = GroupComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_types_1 = __webpack_require__(1);
var configuration_service_1 = __webpack_require__(2);
var RuleComponent = (function () {
    function RuleComponent(config) {
        this.config = config;
        this.fields = [];
        this.fieldOps = [];
    }
    Object.defineProperty(RuleComponent.prototype, "rule", {
        get: function () {
            return this._rule;
        },
        set: function (val) {
            this._rule = val;
            this.fieldChanged();
        },
        enumerable: true,
        configurable: true
    });
    RuleComponent.prototype.addRule = function () {
        var field;
        if (this.fields.length > 0) {
            field = this.fields[0];
        }
        this.group.rules.push({
            op: 'eq',
            field: field,
            data: '',
            datas: []
        });
    };
    RuleComponent.prototype.removeRule = function () {
        var _this = this;
        this.group.rules = this.group.rules.filter(function (x) { return x !== _this.rule; });
    };
    RuleComponent.prototype.fieldChanged = function () {
        var _this = this;
        if (this._rule.datas === undefined) {
            this._rule.datas = [undefined, undefined];
        }
        var dataType = this.rule.field['type'] || query_types_1.DataType.any;
        var dataTypeOp = this.config.dataTypeOps.find(function (x) { return x.dataType === dataType; });
        if (dataTypeOp && dataTypeOp !== null) {
            this.fieldOps = dataTypeOp.ops;
            if (this.fieldOps.length > 0 && this.fieldOps.findIndex(function (x) { return x.key === _this.rule.op; }) < 0) {
                this.rule.op = this.fieldOps[0].key;
            }
        }
        else {
            this.fieldOps = [];
        }
    };
    return RuleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RuleComponent.prototype, "fields", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RuleComponent.prototype, "group", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RuleComponent.prototype, "rule", null);
RuleComponent = __decorate([
    core_1.Component({
        selector: 'ngx-query-rule',
        template: "\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <div class=\"col-md-3\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"addRule()\"><i class=\"glyphicon glyphicon-plus\"></i></button>\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"removeRule()\"><i class=\"glyphicon glyphicon-minus\"></i></button>\n                    </div>\n                    <select class=\"form-control\" [(ngModel)]=\"rule.field\" (change)=\"fieldChanged()\">\n                        <option *ngFor=\"let field of fields\" [ngValue]=\"field\" [innerHtml]=\"field.label\"></option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <select class=\"form-control\" [(ngModel)]=\"rule.op\">\n                    <option *ngFor=\"let item of fieldOps\" [(ngValue)]=\"item.key\" [innerHtml]=\"item.label\"></option>\n                </select>\n            </div>\n            <div class=\"col-md-6\">\n                <ng-container *ngIf=\"rule.op!='bt'\" [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                    [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\"></ng-container>\n                <ul class=\"list-inline ngx-query-list-inline\" *ngIf=\"rule.op=='bt'\">\n                    <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                            [ngOutletContext]=\"{rule:rule, dataIndex:0, custom: rule.field.custom}\">\n                        </ng-container>\n                    </li>\n                    <li><span>-</span></li>\n                    <li><ng-container [ngTemplateOutlet]=\"rule.field.valueInputTemplate\"\n                            [ngOutletContext]=\"{rule:rule, dataIndex:1, custom: rule.field.custom}\">\n                        </ng-container>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    ",
        styles: ["\n        .ngx-query-list-inline{\n            margin-bottom: 0;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [configuration_service_1.QueryConfigurationService])
], RuleComponent);
exports.RuleComponent = RuleComponent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var query_types_1 = __webpack_require__(1);
var value_input_template_directive_1 = __webpack_require__(3);
var field_directive_1 = __webpack_require__(6);
var field_helper_1 = __webpack_require__(14);
var query_helper_1 = __webpack_require__(4);
var plain_component_1 = __webpack_require__(7);
var advanced_component_1 = __webpack_require__(5);
var configuration_service_1 = __webpack_require__(2);
var QueryComponent = (function () {
    function QueryComponent(config) {
        this.config = config;
        this.query = new core_1.EventEmitter();
        this.mode = query_types_1.QueryMode.plain;
        this._queryTemplates = [];
    }
    Object.defineProperty(QueryComponent.prototype, "fieldTemplates", {
        get: function () {
            return this._fieldTemplates;
        },
        set: function (val) {
            this._fieldTemplates = val;
            if (val) {
                // only set this if results were brought back
                var arr = val.toArray();
                if (arr.length) {
                    // translate them to normal objects
                    this.fields = field_helper_1.translateTemplates(arr);
                    if (this._queryTemplates) {
                        this.queryTemplates = this._queryTemplates;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryComponent.prototype, "fields", {
        get: function () {
            return this.tempFields;
        },
        set: function (val) {
            this.translateFields(val, this._valueInputTemplates);
            this.tempFields = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryComponent.prototype, "queryTemplates", {
        get: function () {
            return this._queryTemplates;
        },
        set: function (val) {
            var _this = this;
            this._queryTemplates = val;
            this._queryTemplates.forEach(function (queryTemplate) {
                _this.translateQueryGroup(queryTemplate.template, _this.tempFields);
            });
            this.queryTemplateChanged(this._queryTemplates[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryComponent.prototype, "defaultValueInputTemplates", {
        set: function (val) {
            this._valueInputTemplates = val;
            this.translateFields(this.tempFields, this._valueInputTemplates);
        },
        enumerable: true,
        configurable: true
    });
    QueryComponent.prototype.getQuery = function () {
        var query;
        if (this.mode === query_types_1.QueryMode.plain) {
            query = this._plainQuery.getQuery();
        }
        else if (this.mode === query_types_1.QueryMode.advanced) {
            query = this._advancedQuery.getQuery();
        }
        else {
            throw new Error("Not implement the mode '" + this.mode + "'.");
        }
        return query;
    };
    QueryComponent.prototype.showPlainPanel = function () {
        this.mode = query_types_1.QueryMode.plain;
    };
    QueryComponent.prototype.showAdvancedPanel = function () {
        this.mode = query_types_1.QueryMode.advanced;
    };
    QueryComponent.prototype.queryTemplateChanged = function (queryTemplate) {
        this.currentQueryTemplate = queryTemplate;
    };
    QueryComponent.prototype.resetQueryTemplate = function () {
        if (this.mode === query_types_1.QueryMode.plain) {
            this._plainQuery.reset();
        }
        if (this.mode === query_types_1.QueryMode.advanced) {
            this._advancedQuery.reset();
        }
    };
    QueryComponent.prototype.executeQuery = function () {
        var query = this.getQuery();
        this.query.emit(query);
    };
    QueryComponent.prototype.translateFields = function (fields, valueInputTemplates) {
        if (fields && fields.length > 0 && valueInputTemplates && valueInputTemplates.length > 0) {
            field_helper_1.translateFields(fields, valueInputTemplates);
        }
    };
    QueryComponent.prototype.translateQueryGroup = function (queryGroup, fields) {
        if (fields && fields !== null && fields.length > 0 && queryGroup !== null) {
            query_helper_1.translateQueryGroup(queryGroup, fields);
        }
    };
    return QueryComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], QueryComponent.prototype, "query", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], QueryComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], QueryComponent.prototype, "mode", void 0);
__decorate([
    core_1.ContentChildren(field_directive_1.FieldDirective),
    __metadata("design:type", core_1.QueryList),
    __metadata("design:paramtypes", [core_1.QueryList])
], QueryComponent.prototype, "fieldTemplates", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], QueryComponent.prototype, "fields", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], QueryComponent.prototype, "queryTemplates", null);
__decorate([
    core_1.ViewChild(plain_component_1.PlainComponent),
    __metadata("design:type", plain_component_1.PlainComponent)
], QueryComponent.prototype, "_plainQuery", void 0);
__decorate([
    core_1.ViewChild(advanced_component_1.AdvancedComponent),
    __metadata("design:type", advanced_component_1.AdvancedComponent)
], QueryComponent.prototype, "_advancedQuery", void 0);
__decorate([
    core_1.ViewChildren(value_input_template_directive_1.ValueInputTemplateDirective),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], QueryComponent.prototype, "defaultValueInputTemplates", null);
QueryComponent = __decorate([
    core_1.Component({
        selector: 'ngx-query',
        template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <div class=\"pull-left\">\n        <h3 class=\"panel-title\">{{title}}</h3>\n      </div>\n      <div class=\"btn-toolbar pull-right\">\n\n        <div class=\"btn-group btn-group-xs\" *ngIf=\"queryTemplates.length>1\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"glyphicon glyphicon-retweet\"></i> {{currentQueryTemplate.name}}\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\">\n            <li *ngFor=\"let item of queryTemplates\"><a href=\"javascript:\" (click)=\"queryTemplateChanged(item)\">{{item.name}}</a></li>\n          </ul>\n        </div>\n\n        <div class=\"btn-group  btn-group-xs\">\n          <button type=\"button\" class=\"btn\" (click)=\"showPlainPanel()\"\n            [ngClass]=\"{'btn-primary': mode=='plain', 'btn-default': mode!='plain'}\">\n            <i class=\"glyphicon glyphicon-filter\"></i> {{config.labels.buttons.quick}}</button>\n          <button type=\"button\" class=\"btn\" (click)=\"showAdvancedPanel()\"\n            [ngClass]=\"{'btn-primary': mode=='advanced', 'btn-default': mode!='advanced'}\">\n            <i class=\"glyphicon glyphicon-fire\"></i> {{config.labels.buttons.advanced}}</button>\n        </div>\n\n        <div class=\"btn-group btn-group-xs\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"resetQueryTemplate()\">\n            <i class=\"glyphicon glyphicon-repeat\"></i> {{config.labels.buttons.reset}}</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"executeQuery()\">\n            <i class=\"glyphicon glyphicon-search\"></i> {{config.labels.buttons.search}}</button>\n        </div>\n\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"panel-body\">\n      <ngx-query-plain [class.hide]=\"mode!='plain'\" #planQuery\n        [queryTemplate]=\"currentQueryTemplate.template\">\n      </ngx-query-plain>\n      <ngx-query-advanced [class.hide]=\"mode!='advanced'\" #advancedQuery\n        [queryTemplate]=\"currentQueryTemplate.template\" [fields]=\"tempFields\">\n      </ngx-query-advanced>\n    </div>\n  </div>\n\n  <!-- Value Input Templates -->\n  <ng-template ngx-query-value-input-template dataType=\"any\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"string\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"text\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"boolean\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n      </label>\n    </div>\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"number\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"number\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template  dataType=\"date\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"date\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <ng-template ngx-query-value-input-template dataType=\"datetime\" let-rule=\"rule\" let-dataIndex=\"dataIndex\">\n    <input type=\"date\" class=\"form-control\" [placeholder]=\"rule.field.label\" [(ngModel)]=\"rule.datas[dataIndex]\" />\n  </ng-template>\n  <!-- Value Input Templates -->\n  ",
        encapsulation: core_1.ViewEncapsulation.None,
        host: {
            class: 'ngx-query'
        }
    }),
    __metadata("design:paramtypes", [configuration_service_1.QueryConfigurationService])
], QueryComponent);
exports.QueryComponent = QueryComponent;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var query_types_1 = __webpack_require__(1);
/**
 * Translates templates definitions to objects
 *
 * @export
 * @param {FieldDirective[]} templates
 * @returns {any[]}
 */
function translateTemplates(templates) {
    var result = [];
    for (var _i = 0, templates_1 = templates; _i < templates_1.length; _i++) {
        var temp = templates_1[_i];
        var field = {};
        var props = Object.getOwnPropertyNames(temp);
        for (var _a = 0, props_1 = props; _a < props_1.length; _a++) {
            var prop = props_1[_a];
            field[prop] = temp[prop];
        }
        if (temp.valueInputTemplate) {
            field.valueInputTemplate = temp.valueInputTemplate;
        }
        result.push(field);
    }
    return result;
}
exports.translateTemplates = translateTemplates;
function translateFields(fields, valueInputTemplates) {
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var field = fields_1[_i];
        translateField(field, valueInputTemplates);
    }
}
exports.translateFields = translateFields;
function translateField(field, valueInputTemplates) {
    if (field.type === undefined || field.type === null) {
        field.type = query_types_1.DataType.any;
    }
    if (field.label === undefined || field.label === null) {
        field.label = field.name;
    }
    if (field.valueInputTemplate === undefined || field.valueInputTemplate === null) {
        var valueInputTemplate = valueInputTemplates.find(function (x) { return x.dataType === field.type; });
        if (valueInputTemplate === undefined || valueInputTemplate === null) {
            throw new Error("Can't fount out a template by type '" + field.type + "'.");
        }
        field.valueInputTemplate = valueInputTemplate.template;
    }
}
exports.translateField = translateField;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-query.umd.js.map