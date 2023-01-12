import { Components } from "../../core/utils/Components";
import { IWebApplication } from "../../domain/contracts/IWebApplication";

export class MyWebApplication implements IWebApplication {
    
    start(): void {
        const component = new Components;
        setTimeout(() => component.setComponent('barNavigation', 'barNavigation'), 300);
        setTimeout(() => component.setComponent('itemTask', 'itemTask'), 300);
        setTimeout(() => component.setComponent('contentTask', 'contentTask'), 300);
    }        
}