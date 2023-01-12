import { dataRoutes, getRouteComponent } from "../constants/dataRoutes";

export class Components {

    async setComponent(selector: string, template: string): Promise<any>{
        let htmlNode: HTMLElement = document.getElementById(selector);
        const data = getRouteComponent(template)

        const response = await fetch(data);
        const info = await response.text();
        htmlNode.innerHTML = info;
    }

    async setRootComponent(selector: string): Promise<any> {
        let root: HTMLElement = document.getElementById(selector);
        const data = dataRoutes.webApp

        const response = await fetch(data);
        const info = await response.text();
        root.innerHTML = info;
    }
}