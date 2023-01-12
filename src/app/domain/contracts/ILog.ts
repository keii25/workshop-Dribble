
export interface ILog { // ILog
    showMenu(options: any): void
    showMessage(msg: string): void
    showError(msg: string): void
    showTable(obj: any): void
    putWhiteSpace(): void
    enterToContinue(): void
    clearView(): void

}