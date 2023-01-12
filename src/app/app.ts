
import { Components } from "./core/utils/Components";
import { IWebApplication } from "./domain/contracts/IWebApplication";
import { MyWebApplication } from "./ui/todoWeb";

class Application {

  private _app: IWebApplication;

  constructor(_app: IWebApplication) {
    this._app = _app;
  }

  startApp(): void {
    this._app.start();
  }

  initWebApplication(rootContainer: string): void {
    const viewComponent = new Components();
    viewComponent.setRootComponent(rootContainer)
    this._app.start();
  }
}

const app = new Application(
  new MyWebApplication()
);

export default app;