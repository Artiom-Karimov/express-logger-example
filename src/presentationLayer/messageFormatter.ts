import MessageModel from "../logicLayer/logging/messageModel";

export default class MessageFormatter {
    public static format(messages:MessageModel[]): string {
        return `<section>${MessageFormatter.getList(messages)}</section>`
    }
    private static getList(messages:MessageModel[]): string {
        const elements = messages.map(m => MessageFormatter.formatOne(m))
        return elements.join('\n')
    }
    private static formatOne(msg:MessageModel): string {
        return `<div style="display:block">${MessageFormatter.formatField(msg.message)}${MessageFormatter.formatField(msg.timestamp)}</div>`
    }
    private static formatField(field:string): string {
        return `<div style="display:inline-block;padding:1rem;background:#eeeeee">${field}</div>`
    }
}