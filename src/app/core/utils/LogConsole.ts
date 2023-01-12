import scanf from "scanf";
import { ILog } from "../../domain/contracts/ILog";

export class LogConsole implements ILog {
  clearView(): void {
    console.clear();
  }  // log

  showMenu(options: any): void {
    Object.values(options).forEach(options => console.log(options));
  }

  showMessage(msg: string): void {
    console.log(msg);
  }

  showError(msg: string): void {
    console.log(msg);
  }

  showTable(obj: any): void {
    console.table(obj);
  }

  putWhiteSpace(): void {
    console.log();
  }

  enterToContinue(): void{
    const continuar = scanf('%s');
  }

}