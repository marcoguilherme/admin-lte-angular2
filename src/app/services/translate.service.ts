import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

const langs = ['en', 'fr', 'ru', 'he', 'zh'];
const langmatch = /en|fr|ru|he|zh/;

@Injectable()
export class AdminLTETranslateService implements OnInit {
    private lang: string = 'us';

    constructor( private translate: TranslateService ) {
        translate.addLangs( langs );
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang( 'en' );

    }

    public ngOnInit() {
        // TODO
    }

    public getTranslate(): TranslateService {
        return this.translate;
    }

}
