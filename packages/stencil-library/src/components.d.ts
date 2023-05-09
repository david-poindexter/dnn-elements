/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColorInfo } from "./utilities/colorInfo";
import { IPermissions } from "./components/dnn-permissions-grid/permissions-interface";
import { IRoleGroup } from "./components/dnn-permissions-grid/role-group-interface";
import { IRole } from "./components/dnn-permissions-grid/role-interface";
import { ILocalization } from "./components/dnn-permissions-grid/localization-interface";
import { ISearchedUser } from "./components/dnn-permissions-grid/searched-user-interface";
import { DnnToggleChangeEventDetail } from "./components/dnn-toggle/toggle-interface";
export { ColorInfo } from "./utilities/colorInfo";
export { IPermissions } from "./components/dnn-permissions-grid/permissions-interface";
export { IRoleGroup } from "./components/dnn-permissions-grid/role-group-interface";
export { IRole } from "./components/dnn-permissions-grid/role-interface";
export { ILocalization } from "./components/dnn-permissions-grid/localization-interface";
export { ISearchedUser } from "./components/dnn-permissions-grid/searched-user-interface";
export { DnnToggleChangeEventDetail } from "./components/dnn-toggle/toggle-interface";
export namespace Components {
    interface DnnButton {
        /**
          * Optionally add a confirmation dialog before firing the action.
         */
        "confirm"?: boolean;
        /**
          * The text of the confirmation message;
         */
        "confirmMessage"?: string;
        /**
          * The text of the no button for confirmation.
         */
        "confirmNoText"?: string;
        /**
          * The text of the yes button for confirmation.
         */
        "confirmYesText"?: string;
        /**
          * Disables the button
         */
        "disabled": boolean;
        /**
          * Optionally reverses the button style.
         */
        "reversed": boolean;
        /**
          * Optionally sets the button size, small normal or large, defaults to normal
         */
        "size"?: 'small' | 'normal' | 'large';
        /**
          * Optional button style, can be either primary, secondary or tertiary and defaults to primary if not specified
         */
        "type": 'primary' | 'secondary' | 'tertiary';
    }
    interface DnnCheckbox {
        /**
          * Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined)
         */
        "checked": "checked" | "unchecked" | "intermediate";
        /**
          * Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state)
         */
        "useIntermediate": boolean;
        /**
          * The value for this checkbox (not to be confused with its checked state).
         */
        "value": string;
    }
    interface DnnChevron {
        /**
          * Collapse text for screen readers
         */
        "collapseText"?: string;
        /**
          * Expand text for screen readers
         */
        "expandText"?: string;
        /**
          * Is the chevron expanded
         */
        "expanded"?: boolean;
    }
    interface DnnCollapsible {
        /**
          * Defines if the panel is expanded or not.
         */
        "expanded": boolean;
        /**
          * Defines the transition time in ms, defaults to 150ms
         */
        "transitionDuration"?: number;
        /**
          * Updates the component height, use to update after a slot content changes.
         */
        "updateSize": () => Promise<void>;
    }
    /**
     * Color Picker for Dnn
     */
    interface DnnColorPicker {
        /**
          * Sets the initial color, must be a valid 8 character hexadecimal string without the # sign.
         */
        "color": string;
        /**
          * Sets the width-height ratio of the color picker saturation-lightness box.
          * @example 100% renders a perfect square
         */
        "colorBoxHeight": string;
    }
    interface DnnDropzone {
        /**
          * If true, will allow the user to take a snapshot using the device camera. (only works over https).
         */
        "allowCameraMode": boolean;
        /**
          * A list of allowed file extensions. If not specified, any file is allowed. Ex: ["jpg", "jped", "gif", "png"]
         */
        "allowedExtensions": string[];
        /**
          * Specifies the jpeg quality for when the device camera is used to generate a picture. Needs to be a number between 0 and 1 and defaults to 0.8
         */
        "captureQuality": number;
        /**
          * Localization strings
         */
        "resx": {
    dragAndDropFile: string;
    capture: string;
    or: string;
    takePicture: string;
    uploadFile: string;
  };
    }
    /**
     * Allows cropping an image in-browser with the option to enforce a specific final size.
     * All computation happens in the browser and the final image is emmited
     * in an event that has a data-url of the image.
     */
    interface DnnImageCropper {
        /**
          * Sets the desired final image height.
         */
        "height": number;
        /**
          * When set to true, prevents cropping an image smaller than the required size, which would blow pixel and make the final picture look blurry.
         */
        "preventUndersized": boolean;
        /**
          * Sets the output quality of the corpped image (number between 0 and 1).
         */
        "quality": number;
        /**
          * Can be used to customize controls text. Some values support tokens, see default values for examples.
         */
        "resx": {
    capture: string;
    dragAndDropFile: string;
    or: string;
    takePicture: string;
    uploadFile: string;
    imageTooSmall: string;
    modalCloseText: string;
  };
        /**
          * Sets the desired final image width.
         */
        "width": number;
    }
    interface DnnModal {
        /**
          * Pass false to remove the backdrop click auto-dismiss feature.
         */
        "backdropDismiss": boolean;
        /**
          * Optionally pass the aria-label text for the close button. Defaults to "Close modal" if not provided.
         */
        "closeText"?: string;
        /**
          * Hides the modal
         */
        "hide": () => Promise<void>;
        /**
          * Shows the modal
         */
        "show": () => Promise<void>;
        /**
          * Optionally you can pass false to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content.
         */
        "showCloseButton"?: boolean;
        /**
          * Reflects the visible state of the modal.
         */
        "visible": boolean;
    }
    interface DnnMonacoEditor {
    }
    interface DnnPermissionsGrid {
        /**
          * The list of users to show under the search users field when a search is performed.
         */
        "foundUsers": ISearchedUser[];
        /**
          * The list of permissions.
         */
        "permissions": IPermissions;
        /**
          * Optionally allows localizing the component strings.
         */
        "resx": ILocalization;
        /**
          * The list of role groups.
         */
        "roleGroups": IRoleGroup[];
        /**
          * The list of possible roles.
         */
        "roles": IRole[];
    }
    interface DnnSearchbox {
        /**
          * Debounces the queryChanged by 500ms.
         */
        "debounced": boolean;
        /**
          * Sets the field placeholder text.
         */
        "placeholder"?: string;
        /**
          * Sets the query
         */
        "query": string;
    }
    interface DnnSortIcon {
        /**
          * Defines the current sort direction
         */
        "sortDirection": "asc" | "desc" | "none";
    }
    /**
     * Represents a single tab and must be used inside a dnn-tabs element.
     */
    interface DnnTab {
        /**
          * Hides the modal
         */
        "hide": () => Promise<void>;
        /**
          * Shows the tab.
         */
        "show": () => Promise<void>;
        /**
          * Defines the tab title.
         */
        "tabTitle": string;
    }
    interface DnnTabs {
    }
    interface DnnToggle {
        /**
          * If 'true' the toggle is checked (on).
         */
        "checked": boolean;
        /**
          * If 'true' the toggle is not be interacted with.
         */
        "disabled": boolean;
    }
    interface DnnTreeviewItem {
        /**
          * Defines if the current node is expanded.
         */
        "expanded": boolean;
    }
    /**
     * A component that shows a vertical list of items as they fit. When they don't all fit, it puts the ones that don't fit into a dropdown menu.
     */
    interface DnnVerticalOverflowMenu {
    }
    interface DnnVerticalSplitview {
        /**
          * Gets the current divider position percentage.
         */
        "getSplitWidthPercentage": () => Promise<number>;
        /**
          * Sets the width percentage of the divider
         */
        "setSplitWidthPercentage": (newWidth: number) => Promise<void>;
        /**
          * The percentage position of the splitter in the container.
         */
        "splitWidthPercentage": number;
        /**
          * The width of the splitter area.
         */
        "splitterWidth": number;
    }
}
export interface DnnButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnButtonElement;
}
export interface DnnCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnCheckboxElement;
}
export interface DnnChevronCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnChevronElement;
}
export interface DnnCollapsibleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnCollapsibleElement;
}
export interface DnnColorPickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnColorPickerElement;
}
export interface DnnDropzoneCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnDropzoneElement;
}
export interface DnnImageCropperCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnImageCropperElement;
}
export interface DnnModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnModalElement;
}
export interface DnnPermissionsGridCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnPermissionsGridElement;
}
export interface DnnSearchboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnSearchboxElement;
}
export interface DnnSortIconCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnSortIconElement;
}
export interface DnnToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnToggleElement;
}
export interface DnnTreeviewItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnTreeviewItemElement;
}
export interface DnnVerticalSplitviewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDnnVerticalSplitviewElement;
}
declare global {
    interface HTMLDnnButtonElement extends Components.DnnButton, HTMLStencilElement {
    }
    var HTMLDnnButtonElement: {
        prototype: HTMLDnnButtonElement;
        new (): HTMLDnnButtonElement;
    };
    interface HTMLDnnCheckboxElement extends Components.DnnCheckbox, HTMLStencilElement {
    }
    var HTMLDnnCheckboxElement: {
        prototype: HTMLDnnCheckboxElement;
        new (): HTMLDnnCheckboxElement;
    };
    interface HTMLDnnChevronElement extends Components.DnnChevron, HTMLStencilElement {
    }
    var HTMLDnnChevronElement: {
        prototype: HTMLDnnChevronElement;
        new (): HTMLDnnChevronElement;
    };
    interface HTMLDnnCollapsibleElement extends Components.DnnCollapsible, HTMLStencilElement {
    }
    var HTMLDnnCollapsibleElement: {
        prototype: HTMLDnnCollapsibleElement;
        new (): HTMLDnnCollapsibleElement;
    };
    /**
     * Color Picker for Dnn
     */
    interface HTMLDnnColorPickerElement extends Components.DnnColorPicker, HTMLStencilElement {
    }
    var HTMLDnnColorPickerElement: {
        prototype: HTMLDnnColorPickerElement;
        new (): HTMLDnnColorPickerElement;
    };
    interface HTMLDnnDropzoneElement extends Components.DnnDropzone, HTMLStencilElement {
    }
    var HTMLDnnDropzoneElement: {
        prototype: HTMLDnnDropzoneElement;
        new (): HTMLDnnDropzoneElement;
    };
    /**
     * Allows cropping an image in-browser with the option to enforce a specific final size.
     * All computation happens in the browser and the final image is emmited
     * in an event that has a data-url of the image.
     */
    interface HTMLDnnImageCropperElement extends Components.DnnImageCropper, HTMLStencilElement {
    }
    var HTMLDnnImageCropperElement: {
        prototype: HTMLDnnImageCropperElement;
        new (): HTMLDnnImageCropperElement;
    };
    interface HTMLDnnModalElement extends Components.DnnModal, HTMLStencilElement {
    }
    var HTMLDnnModalElement: {
        prototype: HTMLDnnModalElement;
        new (): HTMLDnnModalElement;
    };
    interface HTMLDnnMonacoEditorElement extends Components.DnnMonacoEditor, HTMLStencilElement {
    }
    var HTMLDnnMonacoEditorElement: {
        prototype: HTMLDnnMonacoEditorElement;
        new (): HTMLDnnMonacoEditorElement;
    };
    interface HTMLDnnPermissionsGridElement extends Components.DnnPermissionsGrid, HTMLStencilElement {
    }
    var HTMLDnnPermissionsGridElement: {
        prototype: HTMLDnnPermissionsGridElement;
        new (): HTMLDnnPermissionsGridElement;
    };
    interface HTMLDnnSearchboxElement extends Components.DnnSearchbox, HTMLStencilElement {
    }
    var HTMLDnnSearchboxElement: {
        prototype: HTMLDnnSearchboxElement;
        new (): HTMLDnnSearchboxElement;
    };
    interface HTMLDnnSortIconElement extends Components.DnnSortIcon, HTMLStencilElement {
    }
    var HTMLDnnSortIconElement: {
        prototype: HTMLDnnSortIconElement;
        new (): HTMLDnnSortIconElement;
    };
    /**
     * Represents a single tab and must be used inside a dnn-tabs element.
     */
    interface HTMLDnnTabElement extends Components.DnnTab, HTMLStencilElement {
    }
    var HTMLDnnTabElement: {
        prototype: HTMLDnnTabElement;
        new (): HTMLDnnTabElement;
    };
    interface HTMLDnnTabsElement extends Components.DnnTabs, HTMLStencilElement {
    }
    var HTMLDnnTabsElement: {
        prototype: HTMLDnnTabsElement;
        new (): HTMLDnnTabsElement;
    };
    interface HTMLDnnToggleElement extends Components.DnnToggle, HTMLStencilElement {
    }
    var HTMLDnnToggleElement: {
        prototype: HTMLDnnToggleElement;
        new (): HTMLDnnToggleElement;
    };
    interface HTMLDnnTreeviewItemElement extends Components.DnnTreeviewItem, HTMLStencilElement {
    }
    var HTMLDnnTreeviewItemElement: {
        prototype: HTMLDnnTreeviewItemElement;
        new (): HTMLDnnTreeviewItemElement;
    };
    /**
     * A component that shows a vertical list of items as they fit. When they don't all fit, it puts the ones that don't fit into a dropdown menu.
     */
    interface HTMLDnnVerticalOverflowMenuElement extends Components.DnnVerticalOverflowMenu, HTMLStencilElement {
    }
    var HTMLDnnVerticalOverflowMenuElement: {
        prototype: HTMLDnnVerticalOverflowMenuElement;
        new (): HTMLDnnVerticalOverflowMenuElement;
    };
    interface HTMLDnnVerticalSplitviewElement extends Components.DnnVerticalSplitview, HTMLStencilElement {
    }
    var HTMLDnnVerticalSplitviewElement: {
        prototype: HTMLDnnVerticalSplitviewElement;
        new (): HTMLDnnVerticalSplitviewElement;
    };
    interface HTMLElementTagNameMap {
        "dnn-button": HTMLDnnButtonElement;
        "dnn-checkbox": HTMLDnnCheckboxElement;
        "dnn-chevron": HTMLDnnChevronElement;
        "dnn-collapsible": HTMLDnnCollapsibleElement;
        "dnn-color-picker": HTMLDnnColorPickerElement;
        "dnn-dropzone": HTMLDnnDropzoneElement;
        "dnn-image-cropper": HTMLDnnImageCropperElement;
        "dnn-modal": HTMLDnnModalElement;
        "dnn-monaco-editor": HTMLDnnMonacoEditorElement;
        "dnn-permissions-grid": HTMLDnnPermissionsGridElement;
        "dnn-searchbox": HTMLDnnSearchboxElement;
        "dnn-sort-icon": HTMLDnnSortIconElement;
        "dnn-tab": HTMLDnnTabElement;
        "dnn-tabs": HTMLDnnTabsElement;
        "dnn-toggle": HTMLDnnToggleElement;
        "dnn-treeview-item": HTMLDnnTreeviewItemElement;
        "dnn-vertical-overflow-menu": HTMLDnnVerticalOverflowMenuElement;
        "dnn-vertical-splitview": HTMLDnnVerticalSplitviewElement;
    }
}
declare namespace LocalJSX {
    interface DnnButton {
        /**
          * Optionally add a confirmation dialog before firing the action.
         */
        "confirm"?: boolean;
        /**
          * The text of the confirmation message;
         */
        "confirmMessage"?: string;
        /**
          * The text of the no button for confirmation.
         */
        "confirmNoText"?: string;
        /**
          * The text of the yes button for confirmation.
         */
        "confirmYesText"?: string;
        /**
          * Disables the button
         */
        "disabled"?: boolean;
        /**
          * Fires when confirm is true and the user cancels the action.
         */
        "onCanceled"?: (event: DnnButtonCustomEvent<any>) => void;
        /**
          * Fires when confirm is true and the user confirms the action.
         */
        "onConfirmed"?: (event: DnnButtonCustomEvent<any>) => void;
        /**
          * Optionally reverses the button style.
         */
        "reversed"?: boolean;
        /**
          * Optionally sets the button size, small normal or large, defaults to normal
         */
        "size"?: 'small' | 'normal' | 'large';
        /**
          * Optional button style, can be either primary, secondary or tertiary and defaults to primary if not specified
         */
        "type"?: 'primary' | 'secondary' | 'tertiary';
    }
    interface DnnCheckbox {
        /**
          * Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined)
         */
        "checked"?: "checked" | "unchecked" | "intermediate";
        /**
          * Fires up when the checkbox checked property changes.
         */
        "onCheckedchange"?: (event: DnnCheckboxCustomEvent<"checked" | "unchecked" | "intermediate">) => void;
        /**
          * Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state)
         */
        "useIntermediate"?: boolean;
        /**
          * The value for this checkbox (not to be confused with its checked state).
         */
        "value"?: string;
    }
    interface DnnChevron {
        /**
          * Collapse text for screen readers
         */
        "collapseText"?: string;
        /**
          * Expand text for screen readers
         */
        "expandText"?: string;
        /**
          * Is the chevron expanded
         */
        "expanded"?: boolean;
        /**
          * Fires up when the expanded status changes
         */
        "onChanged"?: (event: DnnChevronCustomEvent<any>) => void;
    }
    interface DnnCollapsible {
        /**
          * Defines if the panel is expanded or not.
         */
        "expanded"?: boolean;
        /**
          * Fires whenever the collapsible height has changed
         */
        "onDnnCollapsibleHeightChanged"?: (event: DnnCollapsibleCustomEvent<void>) => void;
        /**
          * Defines the transition time in ms, defaults to 150ms
         */
        "transitionDuration"?: number;
    }
    /**
     * Color Picker for Dnn
     */
    interface DnnColorPicker {
        /**
          * Sets the initial color, must be a valid 8 character hexadecimal string without the # sign.
         */
        "color"?: string;
        /**
          * Sets the width-height ratio of the color picker saturation-lightness box.
          * @example 100% renders a perfect square
         */
        "colorBoxHeight"?: string;
        /**
          * Fires up when the color is changed and emits a ColorInfo object
          * @see .. /../utilities/colorInfo.ts
         */
        "onColorChanged"?: (event: DnnColorPickerCustomEvent<ColorInfo>) => void;
    }
    interface DnnDropzone {
        /**
          * If true, will allow the user to take a snapshot using the device camera. (only works over https).
         */
        "allowCameraMode"?: boolean;
        /**
          * A list of allowed file extensions. If not specified, any file is allowed. Ex: ["jpg", "jped", "gif", "png"]
         */
        "allowedExtensions"?: string[];
        /**
          * Specifies the jpeg quality for when the device camera is used to generate a picture. Needs to be a number between 0 and 1 and defaults to 0.8
         */
        "captureQuality"?: number;
        /**
          * Fires when file were selected.
         */
        "onFilesSelected"?: (event: DnnDropzoneCustomEvent<File[]>) => void;
        /**
          * Localization strings
         */
        "resx"?: {
    dragAndDropFile: string;
    capture: string;
    or: string;
    takePicture: string;
    uploadFile: string;
  };
    }
    /**
     * Allows cropping an image in-browser with the option to enforce a specific final size.
     * All computation happens in the browser and the final image is emmited
     * in an event that has a data-url of the image.
     */
    interface DnnImageCropper {
        /**
          * Sets the desired final image height.
         */
        "height"?: number;
        /**
          * When the image crop changes, emits the dataurl for the new cropped image.
         */
        "onImageCropChanged"?: (event: DnnImageCropperCustomEvent<string>) => void;
        /**
          * When set to true, prevents cropping an image smaller than the required size, which would blow pixel and make the final picture look blurry.
         */
        "preventUndersized"?: boolean;
        /**
          * Sets the output quality of the corpped image (number between 0 and 1).
         */
        "quality"?: number;
        /**
          * Can be used to customize controls text. Some values support tokens, see default values for examples.
         */
        "resx"?: {
    capture: string;
    dragAndDropFile: string;
    or: string;
    takePicture: string;
    uploadFile: string;
    imageTooSmall: string;
    modalCloseText: string;
  };
        /**
          * Sets the desired final image width.
         */
        "width"?: number;
    }
    interface DnnModal {
        /**
          * Pass false to remove the backdrop click auto-dismiss feature.
         */
        "backdropDismiss"?: boolean;
        /**
          * Optionally pass the aria-label text for the close button. Defaults to "Close modal" if not provided.
         */
        "closeText"?: string;
        /**
          * Fires when the modal is dismissed.
         */
        "onDismissed"?: (event: DnnModalCustomEvent<any>) => void;
        /**
          * Optionally you can pass false to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content.
         */
        "showCloseButton"?: boolean;
        /**
          * Reflects the visible state of the modal.
         */
        "visible"?: boolean;
    }
    interface DnnMonacoEditor {
    }
    interface DnnPermissionsGrid {
        /**
          * The list of users to show under the search users field when a search is performed.
         */
        "foundUsers"?: ISearchedUser[];
        /**
          * Fires when any permissions have changed, can be used for instance to have linked permissions.
         */
        "onPermissionsChanged"?: (event: DnnPermissionsGridCustomEvent<IPermissions>) => void;
        /**
          * Fires when searching for users to add to the permissions. Emits the search query.
         */
        "onUserSearchQueryChanged"?: (event: DnnPermissionsGridCustomEvent<string>) => void;
        /**
          * The list of permissions.
         */
        "permissions": IPermissions;
        /**
          * Optionally allows localizing the component strings.
         */
        "resx"?: ILocalization;
        /**
          * The list of role groups.
         */
        "roleGroups": IRoleGroup[];
        /**
          * The list of possible roles.
         */
        "roles": IRole[];
    }
    interface DnnSearchbox {
        /**
          * Debounces the queryChanged by 500ms.
         */
        "debounced"?: boolean;
        /**
          * Fires up each time the search query changes. The data passed is the new query.
         */
        "onQueryChanged"?: (event: DnnSearchboxCustomEvent<string>) => void;
        /**
          * Sets the field placeholder text.
         */
        "placeholder"?: string;
        /**
          * Sets the query
         */
        "query"?: string;
    }
    interface DnnSortIcon {
        /**
          * Emitted when the sort is changed.
         */
        "onSortChanged"?: (event: DnnSortIconCustomEvent<"asc"|"desc"|"none">) => void;
        /**
          * Defines the current sort direction
         */
        "sortDirection"?: "asc" | "desc" | "none";
    }
    /**
     * Represents a single tab and must be used inside a dnn-tabs element.
     */
    interface DnnTab {
        /**
          * Defines the tab title.
         */
        "tabTitle": string;
    }
    interface DnnTabs {
    }
    interface DnnToggle {
        /**
          * If 'true' the toggle is checked (on).
         */
        "checked"?: boolean;
        /**
          * If 'true' the toggle is not be interacted with.
         */
        "disabled"?: boolean;
        /**
          * Fires when the toggle changed
         */
        "onCheckChanged"?: (event: DnnToggleCustomEvent<DnnToggleChangeEventDetail>) => void;
    }
    interface DnnTreeviewItem {
        /**
          * Defines if the current node is expanded.
         */
        "expanded"?: boolean;
        /**
          * Fires when the user collapses a node.
         */
        "onUserCollapsed"?: (event: DnnTreeviewItemCustomEvent<void>) => void;
        /**
          * Fires when the user expands a node.
         */
        "onUserExpanded"?: (event: DnnTreeviewItemCustomEvent<void>) => void;
    }
    /**
     * A component that shows a vertical list of items as they fit. When they don't all fit, it puts the ones that don't fit into a dropdown menu.
     */
    interface DnnVerticalOverflowMenu {
    }
    interface DnnVerticalSplitview {
        /**
          * Fires when the width of the divider changes.
         */
        "onWidthChanged"?: (event: DnnVerticalSplitviewCustomEvent<number>) => void;
        /**
          * The percentage position of the splitter in the container.
         */
        "splitWidthPercentage"?: number;
        /**
          * The width of the splitter area.
         */
        "splitterWidth"?: number;
    }
    interface IntrinsicElements {
        "dnn-button": DnnButton;
        "dnn-checkbox": DnnCheckbox;
        "dnn-chevron": DnnChevron;
        "dnn-collapsible": DnnCollapsible;
        "dnn-color-picker": DnnColorPicker;
        "dnn-dropzone": DnnDropzone;
        "dnn-image-cropper": DnnImageCropper;
        "dnn-modal": DnnModal;
        "dnn-monaco-editor": DnnMonacoEditor;
        "dnn-permissions-grid": DnnPermissionsGrid;
        "dnn-searchbox": DnnSearchbox;
        "dnn-sort-icon": DnnSortIcon;
        "dnn-tab": DnnTab;
        "dnn-tabs": DnnTabs;
        "dnn-toggle": DnnToggle;
        "dnn-treeview-item": DnnTreeviewItem;
        "dnn-vertical-overflow-menu": DnnVerticalOverflowMenu;
        "dnn-vertical-splitview": DnnVerticalSplitview;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dnn-button": LocalJSX.DnnButton & JSXBase.HTMLAttributes<HTMLDnnButtonElement>;
            "dnn-checkbox": LocalJSX.DnnCheckbox & JSXBase.HTMLAttributes<HTMLDnnCheckboxElement>;
            "dnn-chevron": LocalJSX.DnnChevron & JSXBase.HTMLAttributes<HTMLDnnChevronElement>;
            "dnn-collapsible": LocalJSX.DnnCollapsible & JSXBase.HTMLAttributes<HTMLDnnCollapsibleElement>;
            /**
             * Color Picker for Dnn
             */
            "dnn-color-picker": LocalJSX.DnnColorPicker & JSXBase.HTMLAttributes<HTMLDnnColorPickerElement>;
            "dnn-dropzone": LocalJSX.DnnDropzone & JSXBase.HTMLAttributes<HTMLDnnDropzoneElement>;
            /**
             * Allows cropping an image in-browser with the option to enforce a specific final size.
             * All computation happens in the browser and the final image is emmited
             * in an event that has a data-url of the image.
             */
            "dnn-image-cropper": LocalJSX.DnnImageCropper & JSXBase.HTMLAttributes<HTMLDnnImageCropperElement>;
            "dnn-modal": LocalJSX.DnnModal & JSXBase.HTMLAttributes<HTMLDnnModalElement>;
            "dnn-monaco-editor": LocalJSX.DnnMonacoEditor & JSXBase.HTMLAttributes<HTMLDnnMonacoEditorElement>;
            "dnn-permissions-grid": LocalJSX.DnnPermissionsGrid & JSXBase.HTMLAttributes<HTMLDnnPermissionsGridElement>;
            "dnn-searchbox": LocalJSX.DnnSearchbox & JSXBase.HTMLAttributes<HTMLDnnSearchboxElement>;
            "dnn-sort-icon": LocalJSX.DnnSortIcon & JSXBase.HTMLAttributes<HTMLDnnSortIconElement>;
            /**
             * Represents a single tab and must be used inside a dnn-tabs element.
             */
            "dnn-tab": LocalJSX.DnnTab & JSXBase.HTMLAttributes<HTMLDnnTabElement>;
            "dnn-tabs": LocalJSX.DnnTabs & JSXBase.HTMLAttributes<HTMLDnnTabsElement>;
            "dnn-toggle": LocalJSX.DnnToggle & JSXBase.HTMLAttributes<HTMLDnnToggleElement>;
            "dnn-treeview-item": LocalJSX.DnnTreeviewItem & JSXBase.HTMLAttributes<HTMLDnnTreeviewItemElement>;
            /**
             * A component that shows a vertical list of items as they fit. When they don't all fit, it puts the ones that don't fit into a dropdown menu.
             */
            "dnn-vertical-overflow-menu": LocalJSX.DnnVerticalOverflowMenu & JSXBase.HTMLAttributes<HTMLDnnVerticalOverflowMenuElement>;
            "dnn-vertical-splitview": LocalJSX.DnnVerticalSplitview & JSXBase.HTMLAttributes<HTMLDnnVerticalSplitviewElement>;
        }
    }
}
