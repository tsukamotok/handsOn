"use strict";

var actressName = {
    a0: "戸田恵梨香さん、おのののかさん",
    a1: "桜井日菜子さん",
    a2: "吉岡里穂さん、夏帆さん、清野菜名さん",
    b0: "石原さとみさん、新川優愛さん、中条あやみさん",
    b1: "橋本環奈さん、菊地亜美さん",
    b2: "桜長濱ねるさん、板野友美さん",
    c0: "齋藤飛鳥さん、山本美月さん、スザンヌさん",
    c1: "大原櫻子さん、水卜麻美さん、篠崎愛さん",
    c2: "有村架純さん",
    d0: "足立梨花さん",
    d1: "富田望生さん",
    d2: "木南晴夏さん、吉田羊さん",
    e0: "山本舞香さん",
    e1: "土屋太鳳さん、松井珠理奈さん",
    e2: "能年玲奈さん、広瀬すずさん",
    f0: "西野七瀬さん、波瑠さんさん",
    f1: "北乃きいさん、野呂佳代さん",
    f2: "川栄李奈さん",
    g0: "松岡茉優さん、蒼井優さん",
    g1: "多部未華子さん",
    g2: "永野芽衣さん",
    h0: "深田恭子さん",
    h1: "中村静香さん、磯山さやかさん",
    h2: "葵わかなさん、杉崎花さん",
    i0: "本田翼さん、新垣結衣さん、真野恵里菜さん",
    i1: "筧美和子さん",
    i2: "高畑充希さん",
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
        await bot.reply({
            type: "text",
            text: `あなたのタイプの女優は${context.confirmed.question1}です`
        });
    }

}