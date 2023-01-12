import scanf from "scanf";
import { IConsoleUI } from "../../domain/contracts/IConsoleUI";
import { ILog } from "../../domain/contracts/ILog";
import { TodoDTO } from "../../domain/dto/ToDo.DTO";
import { ITodoConsoleRepositorie } from "../../domain/repositories/ITodoConsole.Repository";
import { MyApp } from "../../ui/todoConsole/app.enum";


export class ConsoleMenuUI implements IConsoleUI {

  private _task: ITodoConsoleRepositorie<TodoDTO>;
  private _log: ILog;

  constructor(_log: ILog, _task: ITodoConsoleRepositorie<TodoDTO>) {
    this._log = _log;
    this._task = _task;
  }

  uiCreate(): void {
    this._log.showMessage(MyApp.createTask);
    this._log.showMessage(MyApp.nameTask);
    var titleTask = scanf('%S');
    this._log.putWhiteSpace();
    this._log.showMessage(MyApp.descriptionTask);
    var descriptionTask = scanf('%S')

    this._task.create({
      nameTask: titleTask,
      description: descriptionTask
    })

    this._log.showMessage(MyApp.enterContinue);
    this._log.putWhiteSpace();
    this._log.enterToContinue();
    this._log.clearView();
  }

  uiRead(): void {
    this._log.showTable(this._task.read());
    this._log.showMessage(MyApp.enterContinue);
    this._log.putWhiteSpace();
    this._log.enterToContinue();
    this._log.clearView();
  }

  uiUpdate(): void {
    this._log.putWhiteSpace();
    this._log.showMessage(MyApp.listTask);
    this._log.showTable(this._task.read());
    this._log.showMessage(MyApp.updateItem);
    let indexTitle = scanf('%d');
    this._log.showMessage(MyApp.updateTitle);
    let optionTitle = scanf('%S');

    var newTask: TodoDTO = {
      nameTask: "",
      description: ""
    }

    if (optionTitle === MyApp.checkYes) {
      this._log.showMessage(MyApp.newTitle);
      let newTitle = scanf('%S');

      newTask.nameTask = newTitle;

    } else {
      this._log.showMessage('...')
    }

    this._log.showMessage(MyApp.updateDescription);
    let optionDescription = scanf('%S');

    if (optionDescription === MyApp.checkYes) {
      this._log.showMessage(MyApp.newDescription);
      let newDescription = scanf('%S');

      newTask.description = newDescription
    } else {
      this._log.showMessage('...')
    }

    this._task.update(indexTitle, newTask);

    this._log.showMessage(MyApp.enterContinue);
    this._log.putWhiteSpace();
    this._log.enterToContinue();
    this._log.clearView();
  }

  uiDelete(): void {
    this._log.putWhiteSpace();

    this._log.showMessage(MyApp.enterContinue);
    this._log.putWhiteSpace();
    this._log.enterToContinue();
    this._log.clearView();
  }

}
