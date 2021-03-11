/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 * Current version: 0.2.0
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */

import { NgModule, Component, Pipe, OnInit, DoCheck, HostListener, Input, ElementRef, Output, EventEmitter, forwardRef, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const MULTISELECT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiselectDropdown),
    multi: true
};

export interface IMultiSelectOption {
    id: number;
    name: string;
}

export interface IMultiSelectSettings {
    pullRight?: boolean;
    enableSearch?: boolean;
    checkedStyle?: 'checkboxes' | 'glyphicon';
    buttonClasses?: string;
    selectionLimit?: number;
    closeOnSelect?: boolean;
    showCheckAll?: boolean;
    showUncheckAll?: boolean;
    dynamicTitleMaxItems?: number;
    maxHeight?: string;
    dropup?: boolean;
}

export interface IMultiSelectTexts {
    checkAll?: string;
    uncheckAll?: string;
    checked?: string;
    checkedPlural?: string;
    searchPlaceholder?: string;
    defaultTitle?: string;
}

@Pipe({
    name: 'searchFilter'
})
class MultiSelectSearchFilter {
    transform(options: Array<IMultiSelectOption>, args: string): Array<IMultiSelectOption> {
        return options.filter((option: IMultiSelectOption) => option.name.toLowerCase().indexOf((args || '').toLowerCase()) > -1);
    }
}

@Component({
    selector: 'ss-multiselect-dropdown',
    providers: [MULTISELECT_VALUE_ACCESSOR],
    styles: [`
		a { outline: none !important; }
	`],
    template: `
        <div [style.width]="'100%'" [class.btn-group]="true" [class.dropup]="settings.dropup" >
            <button [style.width]="'100%'" type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown()">{{ title }}&nbsp;<span class="caret"></span></button>
            <ul *ngIf="isVisible" class="dropdown-menu" [class.pull-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto;">
                <li style="margin: 0px 5px 5px 5px;" *ngIf="settings.enableSearch">
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="{{ texts.searchPlaceholder }}" aria-describedby="sizing-addon3" [(ngModel)]="searchFilterText">
                        <span class="input-group-btn" *ngIf="searchFilterText.length > 0">
                            <button class="btn btn-default" type="button" (click)="clearSearch()"><i class="fa fa-times"></i></button>
                        </span>
                    </div>
                </li>
                <li class="divider" *ngIf="settings.enableSearch"></li>
                <li *ngIf="settings.showCheckAll">
                    <a href="javascript:;" role="menuitem" tabindex="-1" (click)="checkAll($event)">
                        <span style="width: 16px;" class="glyphicon glyphicon-ok"></span>
                        {{ texts.checkAll }}
                    </a>
                </li>
                <li *ngIf="settings.showUncheckAll">
                    <a href="javascript:;" role="menuitem" tabindex="-1" (click)="uncheckAll($event)">
                        <span style="width: 16px;" class="glyphicon glyphicon-remove"></span>
                        {{ texts.uncheckAll }}
                    </a>
                </li>
                <li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="divider"></li>
                <li *ngFor="let option of options | searchFilter:searchFilterText">
                    <a href="javascript:;" role="menuitem" tabindex="-1" (click)="setSelected($event, option)">
                        <input *ngIf="settings.checkedStyle == 'checkboxes'" type="checkbox" [checked]="isSelected(option)" />
                        <span *ngIf="settings.checkedStyle == 'glyphicon'" style="width: 16px;" class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span>
                        {{ option.name }}
                    </a>
                </li>
            </ul>
        </div>
    `
})
export class MultiselectDropdown implements OnInit, DoCheck, ControlValueAccessor {

    @Input() options: Array<IMultiSelectOption>;
    @Input() settings: IMultiSelectSettings;
    @Input() texts: IMultiSelectTexts;
    @Input() customTitle: string = '';
    @Output() selectionLimitReached = new EventEmitter();
    @HostListener('document: click', ['$event.target'])
    onClick(target) {
        let parentFound = false;
        while (target !== null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
        }
    }

    protected onModelChange: Function = (_: any) => {};
    protected onModelTouched: Function = () => {};
    protected model: number[];
    protected title: string;
    protected differ: any;
    protected numSelected: number = 0;
    protected isVisible: boolean = false;
    protected searchFilterText: string = '';
    protected defaultSettings: IMultiSelectSettings = {
        pullRight: false,
        enableSearch: false,
        checkedStyle: 'checkboxes',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: false,
        showUncheckAll: false,
        dynamicTitleMaxItems: 3,
        maxHeight: '300px',
    };
    protected defaultTexts: IMultiSelectTexts = {
        checkAll: 'Check all',
        uncheckAll: 'Uncheck all',
        checked: 'checked',
        checkedPlural: 'checked',
        searchPlaceholder: 'Search...',
        defaultTitle: 'Select',
    };

    constructor(
        protected element: ElementRef,
        protected differs: IterableDiffers
    ) {
        this.differ = differs.find([]).create(null);
    }

    ngOnInit() {
        //noinspection TypeScriptUnresolvedFunction
      this.settings = Object.assign(this.defaultSettings, this.settings);
        //noinspection TypeScriptUnresolvedFunction
      this.texts = Object.assign(this.defaultTexts, this.texts);
      if (this.customTitle.length > 0){
        this.title = this.customTitle;
      }
    }

    writeValue(value: any) : void {
        if (value !== undefined) {
            this.model = value;
        }
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    ngDoCheck() {
        let changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    }

    clearSearch() {
        this.searchFilterText = '';
    }

    toggleDropdown() {
        this.isVisible = !this.isVisible;
    }

    isSelected(option: IMultiSelectOption): boolean {
        return this.model && this.model.indexOf(option.id) > -1;
    }

    setSelected(event: Event, option: IMultiSelectOption) {
        var index = this.model.indexOf(option.id);
        if (index > -1) {
            this.model.splice(index, 1);
        } else {
            if (this.settings.selectionLimit === 0 || this.model.length < this.settings.selectionLimit) {
                this.model.push(option.id);
            } else {
              if (this.settings.selectionLimit == 1){
                this.model[0] = option.id;
              }else{
                this.selectionLimitReached.emit(this.model.length);
                return;
              }
            }
        }
        if (this.settings.closeOnSelect) {
            this.toggleDropdown();
        }
        this.onModelChange(this.model);
    }

    updateNumSelected() {
        this.numSelected = this.model && this.model.length || 0;
    }

    updateTitle() {
        if (this.numSelected === 0) {
           // this.title = this.texts.defaultTitle;
          if (this.customTitle.length > 0){
            this.title = this.customTitle;
          }else{
            this.title = this.texts.defaultTitle;
          }
        } else if (this.settings.dynamicTitleMaxItems >= this.numSelected) {
            this.title = this.options
                .filter((option: IMultiSelectOption) => this.model && this.model.indexOf(option.id) > -1)
                .map((option: IMultiSelectOption) => option.name)
                .join(', ');
        } else {
            this.title = this.numSelected + ' ' + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
        }
    }

    checkAll(event: Event) {
        this.model = this.options.map(option => option.id);
        this.onModelChange(this.model);
    }

    uncheckAll(event: Event) {
        this.model = [];
        this.onModelChange(this.model);
    }
}

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [MultiselectDropdown],
    declarations: [MultiselectDropdown, MultiSelectSearchFilter],
})
export class MultiselectDropdownModule { }
