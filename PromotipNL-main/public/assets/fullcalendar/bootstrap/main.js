/*!
FullCalendar v5.7.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/
import './main.css';

import { __extends } from 'tslib';
import { Theme, createPlugin } from '@fullcalendar/common';

var BootstrapTheme = /** @class */ (function (_super) {
    __extends(BootstrapTheme, _super);
    function BootstrapTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BootstrapTheme;
}(Theme));
BootstrapTheme.prototype.classes = {
    root: 'fc-theme-bootstrap',
    table: 'table-bordered',
    tableCellShaded: 'table-active',
    buttonGroup: 'btn-group',
    button: 'btn btn-primary',
    buttonActive: 'active',
    popover: 'popover',
    popoverHeader: 'popover-header',
    popoverContent: 'popover-body',
};
BootstrapTheme.prototype.baseIconClass = 'fa';
BootstrapTheme.prototype.iconClasses = {
    close: 'fa-times',
    prev: 'fa-chevron-left',
    next: 'fa-chevron-right',
    prevYear: 'fa-angle-double-left',
    nextYear: 'fa-angle-double-right',
};
BootstrapTheme.prototype.rtlIconClasses = {
    prev: 'fa-chevron-right',
    next: 'fa-chevron-left',
    prevYear: 'fa-angle-double-right',
    nextYear: 'fa-angle-double-left',
};
BootstrapTheme.prototype.iconOverrideOption = 'bootstrapFontAwesome'; // TODO: make TS-friendly. move the option-processing into this plugin
BootstrapTheme.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome';
BootstrapTheme.prototype.iconOverridePrefix = 'fa-';
var plugin = createPlugin({
    themeClasses: {
        bootstrap: BootstrapTheme,
    },
});

export default plugin;
export { BootstrapTheme };
//# sourceMappingURL=main.js.map
