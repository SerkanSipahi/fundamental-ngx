import { Directive } from '@angular/core';

@Directive({
    selector: '[fd-table-sortable]',
    host: {
        class: 'fd-table__sort-column'
    }
})
export class TableSortableDirective {}
