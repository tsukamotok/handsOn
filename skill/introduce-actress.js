"use strict";

module.exports = class SkillHandleDeliveryOrder {

    constructor(){
        this.required_parameter = {
            question1: {
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

            question2: {
                message_to_confirm: {
                    type: "template",
                    altText: "好きな目は？",
                    template: {
                        type: "buttons",
                        text: "好きな目は？",
                        actions: [
                            {type: "message", label: "たれ目", text: "たれ目"},
                            {type: "message", label: "つり目", text: "つり目"},
                            {type: "message", label: "普通目", text: "普通目"}
                        ]
                    }
                },
                parser: async (value, bot, event, context) => {
                    if (["たれ目", "つり目", "普通目"].includes(value)) {
                        return value;
                    }

                    throw new Error();
                },
                reaction: async (error, value, bot, event, context) => {
                    if (error) {
                        bot.queue({
                            type: "text",
                            text: `好きな目を選んでね！`
                        });
                    
                        return;
                    }
                    

                    bot.queue({
                        type: "text",
                        text: `あいよっ！${value}ね。`
                    });
                }
            },

            question3: {
                message_to_confirm: {
                    type: "template",
                    altText: "顔の濃さはどう？",
                    template: {
                        type: "buttons",
                        text: "顔の濃さはどう？",
                        actions: [
                            {type: "message", label: "塩", text: "塩顔"},
                            {type: "message", label: "ソース", text: "ソース"},
                            {type: "message", label: "醤油", text: "醤油"}
                        ]
                    }
                },
                parser: async (value, bot, event, context) => {
                    if (["塩顔", "ソース", "醤油"].includes(value)) {
                        return value;
                    }

                    throw new Error();
                },
                reaction: async (error, value, bot, event, context) => {
                    if (error) {
                        bot.queue({
                            type: "text",
                            text: `顔の濃さのタイプを選んでね！`
                        });
                    
                        return;
                    }
                    

                    bot.queue({
                        type: "text",
                        text: `あいよっ！${value}ね。`
                    });
                }
            },
        }
    }

    async finish(bot, event, context){
        await bot.reply({
            type: "text",
            text: `あいよっ。じゃあ${context.confirmed.menu}を30分後くらいに${context.confirmed.address}にお届けしますわ。おおきに。`
        });
    }

}