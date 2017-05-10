import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = 'http://localhost:9000/';
    public serverWithApiUrl = this.server;
}
