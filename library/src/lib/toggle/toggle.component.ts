import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HashService } from '../utils/hash.service';

@Component({
    selector: 'fd-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

    @Input() size: string;

    @Input() disabled: boolean = false;

    @Input() isToggled: boolean = false;

    @Input() id: string;

    @Output() onToggle = new EventEmitter<boolean>();

    constructor(private hasher: HashService) {
    }

    ngOnInit() {
        if (!this.id) {
            this.id = this.hasher.hash();
        }

        if (this.size && this.size !== 'xs' && this.size !== 's' && this.size !== 'l') {
            this.size = null;
        }
    }

    onKeypressHandler(event) {
        if (event.code === 'Enter') {
            this.toggle();
        }
    }

    toggle() {
        this.isToggled = !this.isToggled;
        this.onToggle.emit(this.isToggled);
    }

}
