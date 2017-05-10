import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from 'ng2-translate';



@Component( {
    /* tslint:disable */
    selector: '.messagesBox',
    /* tslint:enable */
    styleUrls: ['./messages-box.component.css'],
    templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
    // Declaring the variable for binding with initial value
    private msgLength: {};

    constructor(  ) {

    }

    public ngOnInit() {
        // Every incoming message changes entire local message Array.

    }
}
