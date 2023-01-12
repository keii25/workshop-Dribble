import scanf from "scanf";
import { MenuOption } from "../../core/constants/menu.options.enum";
import { IConsoleAplication } from "../../domain/contracts/IConsoleAplication";
import { IConsoleUI } from "../../domain/contracts/IConsoleUI";
import { ILog } from "../../domain/contracts/ILog";
import { MyApp } from "./app.enum";
import { MyConsoleMenu } from "./menu.enum";

export class ConsoleApplication implements IConsoleAplication { 
  private _log: ILog
  private _uiMenu: IConsoleUI

  constructor(_Log: ILog, _uiMenu: IConsoleUI) {    
    this._log = _Log;
    this._uiMenu = _uiMenu;
  }

  start(): void {
    this.checkOption();
  }
  
  checkOption = (): void => {    
    do {
      var salir: number = 5;
      this._log.putWhiteSpace();
      this._log.showMenu(MyConsoleMenu);
      this._log.showMessage(MyApp.selectedOption)
      var option = scanf('%d');
      this._log.clearView();

      switch (option) {
        case MenuOption.create:
          this._uiMenu.uiCreate();
        break;

        case MenuOption.read:
          this._uiMenu.uiRead();
        break;
        
        case MenuOption.update:
          this._uiMenu.uiUpdate();
        break;

        case MenuOption.delete:
          this._uiMenu.uiDelete();
        break;

        default:
          this._log.showMessage('Programa Terminado');
        break;
      }
      
    } while (option != salir);

  }
}

