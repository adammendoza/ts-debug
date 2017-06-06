export class Debugger implements Console {
    public Console: NodeJS.ConsoleConstructor;
    protected console: Console;
    protected isEnabled: boolean;
    protected prefix: string = '';

    public constructor(console: Console, isEnabled: boolean = true, prefix: string = '') {
        this.console = console;
        this.isEnabled = isEnabled;
        this.prefix = prefix;
    }

    public assert(value: any, message?: string, ...optionalParams: any[]): void;
    public assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    public assert(value?, message?: string, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.assert(value, message, optionalParams));
    }

    public dir(obj: any, options?: { showHidden?: boolean; depth?: number; colors?: boolean }): void;
    public dir(value?: any, ...optionalParams: any[]): void;
    public dir(obj?: any, ...options): void {
        return this.doIfEnabled(() => this.console.dir(obj, options));
    }

    public error(message?: any, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.error(this.addPrefix(message), optionalParams));
    }

    public info(message?: any, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.info(this.addPrefix(message), optionalParams));
    }

    public log(message?: any, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.log(this.addPrefix(message), optionalParams));
    }

    public time(label: string): void;
    public time(timerName?: string): void;
    public time(label?: string): void {
        return this.doIfEnabled(() => this.console.time(label));
    }

    public timeEnd(label: string): void;
    public timeEnd(timerName?: string): void;
    public timeEnd(label?: string): void {
        return this.doIfEnabled(() => this.console.timeEnd(label));
    }

    public trace(message?: any, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.trace(this.addPrefix(message), optionalParams));
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.warn(this.addPrefix(message), optionalParams));
    }

    public clear(): void {
        return this.doIfEnabled(() => this.console.clear());
    }

    public count(countTitle?: string): void {
        return this.doIfEnabled(() => this.console.count());
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.debug(this.addPrefix(message), optionalParams));
    }

    public dirxml(value: any): void {
        return this.doIfEnabled(() => this.console.dirxml(value));
    }

    public exception(message?: string, ...optionalParams: any[]): void {
        return this.doIfEnabled(() => this.console.exception(this.addPrefix(message), optionalParams));
    }

    public group(groupTitle?: string): void {
        return this.doIfEnabled(() => this.console.group(groupTitle));
    }

    public groupCollapsed(groupTitle?: string): void {
        return this.doIfEnabled(() => this.console.groupCollapsed(groupTitle));
    }

    public groupEnd(): void {
        return this.doIfEnabled(() => this.console.groupEnd());
    }

    public msIsIndependentlyComposed(element: Element): boolean {
        return this.doIfEnabled(() => this.console.msIsIndependentlyComposed(element));
    }

    public profile(reportName?: string): void {
        return this.doIfEnabled(() => this.console.profile(reportName));
    }

    public profileEnd(): void {
        return this.doIfEnabled(() => this.console.profileEnd());
    }

    public select(element: Element): void {
        return this.doIfEnabled(() => this.console.select(element));
    }

    public table(...data: any[]): void {
        return this.doIfEnabled(() => this.console.table(data));
    }

    protected doIfEnabled(action: Function): any {
        if (this.isEnabled) {
            return action();
        }
    }

    protected addPrefix(message: any): any {
        if (this.prefix && (typeof message === 'string' || !message)) {
            return this.prefix + message;
        }
        return message;
    }

}
