
export enum dataRoutes {
    webApp = './src/app/ui/todoWeb/webApp.html'
}

export const getRouteComponent = (template: string) : string => {
    const url = `./src/app/ui/todoWeb/components/${template}.html`;
    return url;
}