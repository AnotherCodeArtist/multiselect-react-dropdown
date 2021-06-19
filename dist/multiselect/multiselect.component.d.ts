import React from "react";
import "./styles.css";
import { IMultiselectProps } from "./interface";
export declare class Multiselect extends React.Component<IMultiselectProps, any> {
    static defaultProps: {
        options: never[];
        disablePreSelectedValues: boolean;
        selectedValues: never[];
        isObject: boolean;
        displayValue: string;
        showCheckbox: boolean;
        selectionLimit: number;
        placeholder: string;
        groupBy: string;
        style: {};
        emptyRecordMsg: string;
        onSelect: () => void;
        onRemove: () => void;
        closeIcon: string;
        singleSelect: boolean;
        caseSensitiveSearch: boolean;
        id: string;
        closeOnSelect: boolean;
        avoidHighlightFirstOption: boolean;
        hidePlaceholder: boolean;
        showArrow: boolean;
        keepSearchTerm: boolean;
    };
    constructor(props: any);
    initialSetValue(): void;
    resetSelectedValues(): Promise<unknown>;
    getSelectedItems(): any;
    getSelectedItemsCount(): any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    listenerCallback(): void;
    componentWillUnmount(): void;
    removeSelectedValuesFromOptions(skipCheck: any): void;
    groupByOptions(options: any): void;
    onChange(event: any): void;
    filterOptionsByInput(): void;
    matchValues(value: any, search: any): boolean;
    onArrowKeyNavigation(e: any): void;
    onRemoveSelectedItem(item: any): void;
    onSelectItem(item: any): void;
    onSingleSelect(item: any): void;
    isSelectedValue(item: any): boolean;
    renderOptionList(): JSX.Element;
    renderGroupByOptions(): JSX.Element[];
    renderNormalOption(): any;
    renderSelectedList(): any;
    isDisablePreSelectedValues(value: any): boolean;
    fadeOutSelection(item: any): boolean | undefined;
    toggelOptionList(): void;
    onFocus(): void;
    onBlur(): void;
    isVisible(elem: any): boolean;
    hideOnClickOutside(): void;
    renderMultiselectContainer(): JSX.Element;
    render(): JSX.Element;
}