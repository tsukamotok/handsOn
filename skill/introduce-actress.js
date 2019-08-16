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
                        text: `${value}いいよな～`
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
                        text: `${value}ね！わしも好き`
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
                            {type: "message", label: "塩", text: "塩"},
                            {type: "message", label: "ソース", text: "ソース"},
                            {type: "message", label: "醤油", text: "醤油"}
                        ]
                    }
                },
                parser: async (value, bot, event, context) => {
                    if (["塩", "ソース", "醤油"].includes(value)) {
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
                        text: `${value}ね。目玉焼きはソース派です。`
                    });
                }
            },

            question4: {
                message_to_confirm: {
                    type: "template",
                    altText: "好きな体型は？",
                    template: {
                        type: "buttons",
                        text: "好きな体型は？",
                        actions: [
                            {type: "message", label: "スレンダー", text: "スレンダー"},
                            {type: "message", label: "ぽっちゃり", text: "ぽっちゃり"},
                            {type: "message", label: "ノーマル", text: "ノーマル"}
                        ]
                    }
                },
                parser: async (value, bot, event, context) => {
                    if (["スレンダー", "ぽっちゃり", "ノーマル"].includes(value)) {
                        return value;
                    }

                    throw new Error();
                },
                reaction: async (error, value, bot, event, context) => {
                    if (error) {
                        bot.queue({
                            type: "text",
                            text: `好きな体型を選んでね！`
                        });
                    
                        return;
                    }
                    

                    bot.queue({
                        type: "text",
                        text: `${value}って惹かれるよね。`
                    });
                }
            }
        }
    }

    async finish(bot, event, context){
        await bot.reply({
            type: "text",
            //text: `あなた女優のさん好きでしょ？`
           text: `あなた女優の${actressName}さん好きでしょ？`
        });
    }

}