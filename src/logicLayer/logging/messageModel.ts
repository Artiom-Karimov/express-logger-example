export enum MessageLevel {
    Error = 'Error',
    Warning = 'Warning',
    Info = 'Info'
}

export default class MessageModel {
    public timestamp:string

    constructor(
        public message:string,
        public MessageLevel:MessageLevel,
        public details:string = '') {
            this.timestamp = new Date().toISOString()
    }

    public static copy = (model:MessageModel): MessageModel => {
        const copy = new MessageModel(model.message,model.MessageLevel,model.details)
        copy.timestamp = model.timestamp
        return copy
    }
}