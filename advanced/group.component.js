import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GroupOpType } from '../query.types';
import { QueryConfigurationService } from '../services/configuration.service';
var GroupComponent = (function () {
    function GroupComponent(config) {
        this.config = config;
        this.fields = [];
        this.canRemove = false;
        this.remove = new EventEmitter();
        this.groupOps = this.config.groupOps;
    }
    GroupComponent.prototype.addGroup = function () {
        this.group.groups.push({
            op: GroupOpType.AND,
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
export { GroupComponent };
GroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-query-group',
                template: "\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <div class=\"col-md-3\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"addGroup()\"><i class=\"glyphicon glyphicon-plus\"></i> {{'{}'}}</button>\n                        <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"addRule()\"><i class=\"glyphicon glyphicon-plus\"></i></button>\n                        <button type=\"button\" class=\"btn btn-default\" *ngIf=\"canRemove\"\n                            (click)=\"removeGroup()\"><i class=\"glyphicon glyphicon-minus\"></i></button>\n                    </div>\n                    <select class=\"form-control\" [(ngModel)]=\"group.op\">\n                        <option *ngFor=\"let item of groupOps\" [ngValue]=\"item.key\">{{item.label}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"group.groups.length>0\" class=\"col-md-12 ngx-query-group-children\">\n        <ngx-query-group *ngFor=\"let group of group.groups\" [group]=\"group\"\n            [fields]=\"fields\" [canRemove]=\"true\" (remove)=\"removeGroupItem($event)\">\n        </ngx-query-group>\n    </div>\n    <div *ngIf=\"group.rules.length>0\" class=\"col-md-12 ngx-query-group-children\">\n        <ngx-query-rule *ngFor=\"let rule of group.rules\" [group]=\"group\" [rule]=\"rule\" [fields]=\"fields\">\n        </ngx-query-rule>\n    </div>\n    ",
                styles: ["\n    .ngx-query-group-children {\n        margin-left:20px;\n    }"]
            },] },
];
/** @nocollapse */
GroupComponent.ctorParameters = function () { return [
    { type: QueryConfigurationService, },
]; };
GroupComponent.propDecorators = {
    'group': [{ type: Input },],
    'fields': [{ type: Input },],
    'canRemove': [{ type: Input },],
    'remove': [{ type: Output },],
};
//# sourceMappingURL=group.component.js.map