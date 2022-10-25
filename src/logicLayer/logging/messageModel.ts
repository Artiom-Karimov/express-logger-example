export enum MessageLevel {
    Error = 'Error',
    Warning = 'Warning',
    Info = 'Info'
}

export default class MessageModel {
    public timestamp:string

    constructor(public message:string,public MessageLevel:MessageLevel) {
        this.timestamp = new Date().toISOString()
    }
}