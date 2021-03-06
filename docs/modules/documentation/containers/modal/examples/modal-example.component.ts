import { Component } from '@angular/core';
import { ModalService } from '../../../../../../library/src/lib/modal/modal.service';

@Component({
    selector: 'fd-modal-example',
    template: `
    <fd-modal #informationalModal>
        <fd-modal-header>
            Modal Header/Title
        </fd-modal-header>
        <fd-modal-body>
            Modal Body
        </fd-modal-body>
    </fd-modal>
    <button fd-button (click)="openInfoModal(informationalModal)">Launch Demo</button>`
})
export class ModalExampleComponent {
    openInfoModal(modalType) {
        this.modalService.open(modalType);
    }
    constructor(private modalService: ModalService) {}
}
