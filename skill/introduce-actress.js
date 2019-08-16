"use strict";

module.exports = class SkillHandleDeliveryOrder {

    constructor(){
        this.required_parameter = {
            menu: {
                message_to_confirm: {
                    type: "template",
                    altText: "好きな顔のタイプは？",
                    template: {
                        type: "buttons",
                        text: "好きな顔のタイプは？",
                        actions: [
                            {type: "message", label: "かわいい系", text: "かわいい系"},
                            {type: "message", label: "きれい系", text: "きれい系"}
                        ]
                    }
                },
                parser: async (value, bot, event, context) => {
                    if (["かわいい系", "きれい系"].includes(value)) {
                        return value;
                    }

                    throw new Error();
                },
                reaction: async (error, value, bot, event, context) => {
                    if (error) {
                        bot.queue({
                            type: "text",
                            text: `「かわいい系」か「きれい系」どちらかを選んでね！`
                        });
                    
                        return;
                    }
                    

                    bot.queue({
                        type: "text",
                        text: `あいよっ！${value}ね。`
                    });
                }
            },
            address: {
                message_to_confirm: {
                    type: "text",
                    text: "どちらにお届けしましょっ？"
                },
                parser: async (value, bot, event, context) => {
                    if (typeof value == "string"){
                        return value;
                    } else if (typeof value == "object" && value.type == "location"){
                        return value.address;
                    }

                    throw new Error();
                }
            }
        }
    }

    async finish(bot, event, context){
        await bot.reply({
            type: "text",
            text: `あいよっ。じゃあ${context.confirmed.menu}を30分後くらいに${context.confirmed.address}にお届けしますわ。おおきに。`
        });
    }

}