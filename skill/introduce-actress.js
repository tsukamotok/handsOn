"use strict";

var actressName = {
    "0000": "戸田恵梨香さん、おのののかさん",
    "0001": "桜井日菜子さん",
    "0002": "吉岡里穂さん、夏帆さん、清野菜名さん",
    "0010": "石原さとみさん、新川優愛さん、中条あやみさん",
    "0011": "橋本環奈さん、菊地亜美さん",
    "0012": "桜長濱ねるさん、板野友美さん",
    "0020": "齋藤飛鳥さん、山本美月さん、スザンヌさん",
    "0021": "大原櫻子さん、水卜麻美さん、篠崎愛さん",
    "0022": "有村架純さん",
    "0100": "足立梨花さん",
    "0101": "富田望生さん",
    "0102": "木南晴夏さん、吉田羊さん",
    "0110": "山本舞香さん",
    "0111": "土屋太鳳さん、松井珠理奈さん",
    "0112": "能年玲奈さん、広瀬すずさん",
    "0120": "西野七瀬さん、波瑠さんさん",
    "0121": "北乃きいさん、野呂佳代さん",
    "0122": "川栄李奈さん",
    "0200": "松岡茉優さん、蒼井優さん",
    "0201": "多部未華子さん",
    "0202": "永野芽衣さん",
    "0210": "深田恭子さん",
    "0211": "中村静香さん、磯山さやかさん",
    "0212": "葵わかなさん、杉崎花さん",
    "0220": "本田翼さん、新垣結衣さん、真野恵里菜さん",
    "0221": "筧美和子さん",
    "0222": "高畑充希さん",
};

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
        var number1 = context.confirmed.question1;
        var number2 = context.confirmed.question2;
        var number3 = context.confirmed.question3;
        var number4 = context.confirmed.question4;

        if(number1 === "かわいい系"){
            number1 = "0";
        }else　if(number1 === "きれい系"){
            number1 = "1";
        }

        if(number2 === "たれ目"){
            number2 = "0";
        }else if(number2 === "つり目"){
            number2 = "1";
        }else　if(number2 === "普通目"){
            number2 = "2";
        }

        if(number3 === "塩"){
            number3 = "0";
        }else if(number3 === "ソース"){
            number3 = "1";
        }else　if(number3 === "醤油"){
            number3 = "2";
        }

        if(number4 === "スレンダー"){
            number4 = "0";
        }else if(number3 === "ぽっちゃり"){
            number4 = "1";
        }else　if(number4 === "ノーマル"){
            number4 = "2";
        }

       var sum = number1 + number2 + number3 + number4;

        await bot.reply({
            type: "text",
            text: `あなたのタイプの女優は${actressName[sum]}です`
            //text: `あなたのタイプの女優は${context.confirmed.question1}${actressName[0011]}です`
        });
    }

}