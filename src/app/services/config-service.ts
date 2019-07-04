export class ConfigService {
 
    private urlService:string;
 
    constructor(){
 
       // this.urlService = 'http://localhost:8080/';
       this.urlService= 'https://knop-api.herokuapp.com/';
       
    }
 
    getUrlService(): string {
 
        return this.urlService;
    }
 
}