import { environment } from '../environments/environment';

export const GAMEJSON = Object.freeze({
  DATA:{error:true,message:"gameData",data:[]}
});

export const POSTURL = Object.freeze({

 
  GAME_INFO:{
    getgames: "assets/appData.json"
  }
  
});



export const GAMEDATA = Object.freeze({

  "GAMEWINDOW": {
    "WIDTH": 850,
    "HEIGHT": 500,
    "s3GameStroageLink": "assets/games/",
    "s3GameStroageGeneral": "assets/games/general/"
  },
  "GAMEINFO": [{
    "gameId": "english-capital-letters",
    "slideData": [
      {
        "sliderType": "introSlide",
        "nameHeader": "Alphabet: A",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-stand", "url": "tina-stand.png", "itemPosition": ["100", "100"] }],
          "seperate": [
            { "itemType": "seperate", "itemName": "a", "url": "a/a.png", "itemPosition": ["500", "100"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "intro-audio", "url": "a/a-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "pictureSlide",
        "nameHeader": "ant",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "a", "url": "a/a.png", "itemPosition": ["380", "10"] },
            { "itemType": "seperate", "itemName": "ant", "url": "a/ant.png", "itemPosition": ["360", "250"] },
            { "itemType": "seperate", "itemName": "anttext", "url": "a/ant-text.png", "itemPosition": ["440", "470"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "ant-audio", "url": "a/ant.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "shootingSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-stand", "url": "tina-stand.png", "itemPosition": ["100", "100"] },
            { "itemType": "general", "itemName": "success", "url": "tina-jump.png", "itemPosition": ["300", "100"] },
            { "itemType": "general", "itemName": "cloud", "url": "cloud.png", "itemPosition": ["350", "20"] },
            { "itemType": "general", "itemName": "cloud", "url": "cloud.png", "itemPosition": ["550", "40"] }
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "monster", "url": "a/monster.png", "itemPosition": ["400", "100"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "color-button", "url": "color.png", "itemPosition": ["700", "400"] },
            { "itemid": 4, "itemType": "button-gray", "itemName": "color-gray", "url": "color-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 5, "itemType": "button", "itemName": "color-hover-button", "url": "color-hover.png", "itemPosition": ["700", "400"] }],

          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "welcome", "url": "a/monster-welcome.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 2, "itemType": "audio", "itemName": "click", "url": "a/a-letter.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 3, "itemType": "audio", "itemName": "success", "url": "a/monster-success.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 4, "itemType": "audio", "itemName": "colornext", "url": "a/color-next.wav", "itemPosition": ["0", "0"] }
          ]
        }


      },
      {
        "sliderType": "paintingSlide",
        "nameHeader": "ant",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [

          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "a-outline", "url": "a/a-outline.png", "itemPosition": ["100", "50"] },
            { "itemType": "seperate", "itemName": "ant-outline", "url": "a/ant-outline.png", "itemPosition": ["400", "180"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "color-button", "url": "color.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "color-gray", "url": "color-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "welcome", "url": "a/color-welcome.mp3", "itemPosition": ["0", "0"] },


            { "audioid": 2, "itemType": "audio", "itemName": "colornext", "url": "a/color-next.wav", "itemPosition": ["0", "0"] }
          ]
        }


      },
      {
        "sliderType": "tracingSlide",
        "nameHeader": "ant",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [

          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "a-trace", "url": "a/a-trace.png", "itemPosition": ["100", "10"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "trace-button", "url": "trace.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "trace-gray", "url": "trace-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "welcome", "url": "a/trace-welcome.mp3", "itemPosition": ["0", "0"] },

            { "audioid": 2, "itemType": "audio", "itemName": "playnext", "url": "a/play-next.wav", "itemPosition": ["0", "0"] }
          ]
        }


      },
      {
        "sliderType": "wordSelection",
        "nameHeader": "",
        "backgroundColor": "#fff",

        "chacraterImages": {
          "general": [

          ],
          "seperate": [
          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "outline-word", "url": "outline-word.png", "itemPosition": ["130", "100"] },
            { "itemid": 2, "itemType": "button", "itemName": "outline-word", "url": "outline-word.png", "itemPosition": ["130", "300"] },
            { "itemid": 3, "itemType": "button", "itemName": "outline-word", "url": "outline-word.png", "itemPosition": ["410", "100"] },
            { "itemid": 4, "itemType": "button", "itemName": "outline-word", "url": "outline-word.png", "itemPosition": ["410", "300"] },
            { "itemid": 5, "itemType": "button", "itemName": "outline-word-right", "url": "outline-word-right.png", "itemPosition": ["200", "100"] },
            { "itemid": 6, "itemType": "button", "itemName": "outline-word-wrong", "url": "outline-word-wrong.png", "itemPosition": ["200", "100"] },
            { "itemid": 7, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 8, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 9, "itemType": "button", "itemName": "submit", "url": "submit.png", "itemPosition": ["700", "400"] },
            { "itemid": 10, "itemType": "button", "itemName": "submit-gray", "url": "submit-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "welcome", "url": "a/word-welcome.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 2, "itemType": "audio", "itemName": "click", "url": "a/click-effect.wav", "itemPosition": ["0", "0"] },
            { "audioid": 3, "itemType": "audio", "itemName": "playnext", "url": "a/play-next.wav", "itemPosition": ["0", "0"] },
            { "audioid": 4, "itemType": "audio", "itemName": "correctanswer", "url": "a/correct-answer.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 5, "itemType": "audio", "itemName": "wronganswer", "url": "a/wrong-answer.mp3", "itemPosition": ["0", "0"] }
          ]



        }


      }, {
        "sliderType": "gameComplete",
        "nameHeader": "ant",
        "backgroundColor": "#fff",

        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-jump", "url": "tina-jump.png", "itemPosition": ["350", "100"] }
          ],
          "seperate": [
          ],
          "button": [

            { "itemid": 1, "itemType": "button", "itemName": "replay", "url": "replay.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button", "itemName": "replay-gray", "url": "replay-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "success", "url": "a/game-complete.mp3", "itemPosition": ["0", "0"] },

          ]



        }


      }


    ]
  },
  {
    "gameId": "numeric-digit",
    "slideData": [
      {
        "sliderType": "introSlide",
        "nameHeader": "5 or Five",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-stand", "url": "tina-stand.png", "itemPosition": ["100", "100"] }],
          "seperate": [
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["580", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["580", "300"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["650", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["650", "300"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["720", "300"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "intro-audio", "url": "one/one-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "exampleSlide",
        "nameHeader": "5 Apples",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "apple", "url": "one/apple.png", "itemPosition": ["200", "100"] },
            { "itemType": "seperate", "itemName": "apple", "url": "one/apple.png", "itemPosition": ["300", "100"] },
            { "itemType": "seperate", "itemName": "apple", "url": "one/apple.png", "itemPosition": ["400", "100"] },
            { "itemType": "seperate", "itemName": "apple", "url": "one/apple.png", "itemPosition": ["500", "100"] },
            { "itemType": "seperate", "itemName": "apple", "url": "one/apple.png", "itemPosition": ["600", "100"] }],
          "button": [
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "example-intro", "url": "one/example-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "exampleTwoSlide",
        "nameHeader": "5 Trees",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "tree", "url": "one/tree.png", "itemPosition": ["200", "100"] },
            { "itemType": "seperate", "itemName": "tree", "url": "one/tree.png", "itemPosition": ["300", "100"] },
            { "itemType": "seperate", "itemName": "tree", "url": "one/tree.png", "itemPosition": ["400", "100"] },
            { "itemType": "seperate", "itemName": "tree", "url": "one/tree.png", "itemPosition": ["500", "100"] },
            { "itemType": "seperate", "itemName": "tree", "url": "one/tree.png", "itemPosition": ["600", "100"] }],
          "button": [
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "example--two-intro", "url": "one/example-two-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "StartGameSlide",
        "nameHeader": "5 or Five",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-stand", "url": "tina-stand.png", "itemPosition": ["100", "100"] }],
          "seperate": [

            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["580", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["580", "300"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["650", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["650", "300"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["720", "300"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "intro-audio", "url": "one/start-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectPictureGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/blue-shocks.png", "itemPosition": ["250", "150"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["610", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["670", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["610", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["670", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/shocks.png", "itemPosition": ["750", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectNumericGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/shocks.png", "itemPosition": ["660", "150"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["210", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["270", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["210", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["270", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["350", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectNumericTwoGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/green-chilly.png", "itemPosition": ["710", "180"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/green-chilly.png", "itemPosition": ["640", "180"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/green-chilly.png", "itemPosition": ["680", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/brinjal.png", "itemPosition": ["210", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/brinjal.png", "itemPosition": ["280", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/brinjal.png", "itemPosition": ["210", "220"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/brinjal.png", "itemPosition": ["280", "220"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/brinjal.png", "itemPosition": ["340", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectNumericThreeGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/kali-flower.png", "itemPosition": ["720", "190"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/kali-flower.png", "itemPosition": ["620", "190"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/kali-flower.png", "itemPosition": ["720", "100"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/kali-flower.png", "itemPosition": ["620", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["210", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["270", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["210", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["270", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/apple-question.png", "itemPosition": ["350", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "SelectNumericFourGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/green-grapes.png", "itemPosition": ["720", "140"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/green-grapes.png", "itemPosition": ["630", "140"] },

            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-grapes.png", "itemPosition": ["210", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-grapes.png", "itemPosition": ["280", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-grapes.png", "itemPosition": ["210", "210"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-grapes.png", "itemPosition": ["280", "210"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-grapes.png", "itemPosition": ["340", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      },

      {
        "sliderType": "SelectNumericFiveGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/beetroot.png", "itemPosition": ["720", "190"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/beetroot.png", "itemPosition": ["620", "190"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/beetroot.png", "itemPosition": ["720", "100"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/beetroot.png", "itemPosition": ["620", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/carrot.png", "itemPosition": ["210", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/carrot.png", "itemPosition": ["270", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/carrot.png", "itemPosition": ["210", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/carrot.png", "itemPosition": ["270", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/carrot.png", "itemPosition": ["350", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "SelectNumericSixGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphinleft.png", "itemPosition": ["600", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphinleft.png", "itemPosition": ["600", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphinleft.png", "itemPosition": ["680", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphinleft.png", "itemPosition": ["680", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphinleft.png", "itemPosition": ["740", "160"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["215", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["320", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["215", "210"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["320", "210"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "SelectNumericSevenGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphin.png", "itemPosition": ["720", "190"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphin.png", "itemPosition": ["620", "190"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphin.png", "itemPosition": ["720", "100"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/dolphin.png", "itemPosition": ["620", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/dolphinleft.png", "itemPosition": ["210", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/dolphinleft.png", "itemPosition": ["270", "100"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/dolphinleft.png", "itemPosition": ["210", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/dolphinleft.png", "itemPosition": ["270", "200"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/dolphinleft.png", "itemPosition": ["350", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectNumericEightGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/star.png", "itemPosition": ["600", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/star.png", "itemPosition": ["600", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/star.png", "itemPosition": ["680", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/star.png", "itemPosition": ["680", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/star.png", "itemPosition": ["740", "160"] },

            { "itemType": "seperate", "itemName": "shocks", "url": "one/dolphin.png", "itemPosition": ["260", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectNumericNineGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/orange-fish.png", "itemPosition": ["600", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/orange-fish.png", "itemPosition": ["600", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/orange-fish.png", "itemPosition": ["680", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/orange-fish.png", "itemPosition": ["680", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/orange-fish.png", "itemPosition": ["740", "160"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["215", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["320", "110"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["215", "210"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/blue-fish.png", "itemPosition": ["320", "210"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      },
      {
        "sliderType": "SelectNumericTenGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/calc.png", "itemPosition": ["600", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/calc.png", "itemPosition": ["600", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/calc.png", "itemPosition": ["670", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/calc.png", "itemPosition": ["670", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/calc.png", "itemPosition": ["740", "160"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/laptop.png", "itemPosition": ["215", "150"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/laptop.png", "itemPosition": ["320", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }, {
        "sliderType": "SelectNumericElevenGameSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/laptop.png", "itemPosition": ["600", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/laptop.png", "itemPosition": ["600", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/laptop.png", "itemPosition": ["670", "110"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/laptop.png", "itemPosition": ["670", "210"] },
            { "itemType": "seperate", "itemName": "blue-shocks", "url": "one/laptop.png", "itemPosition": ["740", "160"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/calc.png", "itemPosition": ["215", "150"] },
            { "itemType": "seperate", "itemName": "shocks", "url": "one/calc.png", "itemPosition": ["320", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "replay", "url": "replay.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button", "itemName": "replay-gray", "url": "replay-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "one/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }]
  },
  {
    "gameId": "science",
    "slideData": [
      {
        "sliderType": "introSlide",
        "nameHeader": "In The Sky",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-stand", "url": "tina-stand.png", "itemPosition": ["100", "100"] }],
          "seperate": [
            { "itemType": "seperate", "itemName": "sun", "url": "science/sun.png", "itemPosition": ["580", "200"] },
            { "itemType": "seperate", "itemName": "off-moon", "url": "science/off-moon.png", "itemPosition": ["460", "120"] },
            { "itemType": "seperate", "itemName": "cloud", "url": "science/cloud.png", "itemPosition": ["550", "100"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "intro-audio", "url": "science/science-intro.mp3", "itemPosition": ["0", "0"] }]
        }
      }, {
        "sliderType": "pictureSlide",
        "nameHeader": "Sun",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "sun", "url": "sun.png", "itemPosition": ["400", "200"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "sun-intro", "url": "science/sun-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 2, "itemType": "audio", "itemName": "select-sun", "url": "science/select-sun.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideB",
        "nameHeader": "Clouds",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "clouds", "url": "clouds.png", "itemPosition": ["340", "200"] },
            { "itemid": 4, "itemType": "button", "itemName": "clouds-small", "url": "cloud-small.png", "itemPosition": ["540", "180"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "clouds-intro", "url": "science/clouds-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-clouds", "url": "science/select-clouds.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideC",
        "nameHeader": "Moon",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "moon", "url": "moons.png", "itemPosition": ["390", "200"] },

            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "moon-intro", "url": "science/moons-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-moon", "url": "science/select-moon.mp3", "itemPosition": ["0", "0"] }]
        }
      }, {
        "sliderType": "pictureSlideD",
        "nameHeader": "Stars",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "stars", "url": "stars.png", "itemPosition": ["290", "110"] },
            { "itemid": 4, "itemType": "button", "itemName": "stars", "url": "stars.png", "itemPosition": ["430", "100"] },
            { "itemid": 5, "itemType": "button", "itemName": "stars", "url": "stars.png", "itemPosition": ["390", "200"] },
            { "itemid": 6, "itemType": "button", "itemName": "stars", "url": "stars.png", "itemPosition": ["520", "200"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "stars-intro", "url": "science/stars-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-stars", "url": "science/select-stars.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideE",
        "nameHeader": "Birds",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "birds", "url": "birds.png", "itemPosition": ["340", "200"] },
             { "itemid": 4, "itemType": "button", "itemName": "birds", "url": "birds.png", "itemPosition": ["430", "200"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "birds-intro", "url": "science/birds-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-birds", "url": "science/select-birds.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideF",
        "nameHeader": "Helicopter",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "helipcopter", "url": "helipcopter.png", "itemPosition": ["390", "200"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "helipcopter-intro", "url": "science/helipcopter-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-helipcopter", "url": "science/select-helipcopter.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideG",
        "nameHeader": "AeroPlane",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "aeroplane", "url": "aeroplane.png", "itemPosition": ["370", "200"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "aeroplane-intro", "url": "science/aeroplane-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-aeroplane", "url": "science/select-aeroplane.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideH",
        "nameHeader": "Rocket",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "rocket", "url": "rocket.png", "itemPosition": ["390", "150"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "rocket-intro", "url": "science/rocket-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-rocket", "url": "science/select-rocket.mp3", "itemPosition": ["0", "0"] }]
        }
      },
      {
        "sliderType": "pictureSlideJ",
        "nameHeader": "Planets",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [

          ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 3, "itemType": "button", "itemName": "planets", "url": "planets.png", "itemPosition": ["370", "150"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "planets-intro", "url": "science/planets-intro.mp3", "itemPosition": ["0", "0"] },
            { "audioid": 1, "itemType": "audio", "itemName": "select-planets", "url": "science/select-planets.mp3", "itemPosition": ["0", "0"] }]
        }
      },  {
        "sliderType": "selectpictureone",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "sun", "url": "science/sun.png", "itemPosition": ["650", "150"] },
            
            { "itemType": "seperate", "itemName": "planets", "url": "science/planets.png", "itemPosition": ["210", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question", "url": "science/select-sun.mp3", "itemPosition": ["0", "0"] }]
        }


      },{
        "sliderType": "selectpicturetwo",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "cloud", "url": "science/cloud.png", "itemPosition": ["610", "150"] },
            
            { "itemType": "seperate", "itemName": "rocket", "url": "science/rocket.png", "itemPosition": ["250", "100"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-clouds.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },{
        "sliderType": "selectpicturethree",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "off-moon", "url": "science/off-moon.png", "itemPosition": ["650", "150"] },
            
            { "itemType": "seperate", "itemName": "helipcopter", "url": "science/helipcopter.png", "itemPosition": ["250", "170"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-moon.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },{
        "sliderType": "selectpicturefour",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "cloud", "url": "science/aeroplane.png", "itemPosition": ["580", "150"] },
            
            { "itemType": "seperate", "itemName": "rocket", "url": "science/stars.png", "itemPosition": ["250", "140"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-stars.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },{
        "sliderType": "selectpicturefive",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "off-moon", "url": "science/off-moon.png", "itemPosition": ["640", "150"] },
            
            { "itemType": "seperate", "itemName": "rocket", "url": "science/birds.png", "itemPosition": ["250", "150"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-birds.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },{
        "sliderType": "selectpicturesix",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "cloud", "url": "science/cloud.png", "itemPosition": ["610", "150"] },
            
            { "itemType": "seperate", "itemName": "rocket", "url": "science/rocket.png", "itemPosition": ["250", "100"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-rocket.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },{
        "sliderType": "selectpictureseven",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "off-moon", "url": "science/off-moon.png", "itemPosition": ["640", "150"] },
            
            { "itemType": "seperate", "itemName": "planets", "url": "science/planets.png", "itemPosition": ["210", "140"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-planets.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },{
        "sliderType": "selectpictureeight",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "cloud", "url": "science/cloud.png", "itemPosition": ["610", "150"] },
            
            { "itemType": "seperate", "itemName": "rocket", "url": "science/rocket.png", "itemPosition": ["250", "100"] }],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-clouds.mp3", "itemPosition": ["0", "0"] }]
        },
          


      },
      {
        "sliderType": "selectpicturenine",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
            { "itemType": "seperate", "itemName": "helipcopter", "url": "science/helipcopter.png", "itemPosition": ["640", "180"] },
            
            { "itemType": "seperate", "itemName": "rocket", "url": "science/rocket.png", "itemPosition": ["250", "100"] }],
          "button": [
             { "itemid": 1, "itemType": "button", "itemName": "replay", "url": "replay.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button", "itemName": "replay-gray", "url": "replay-gray.png", "itemPosition": ["700", "400"] },
            { "itemid": 1, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["180", "80"] },
            { "itemid": 2, "itemType": "button", "itemName": "rectangle-right", "url": "rectangle-right.png", "itemPosition": ["180", "80"] },
            { "itemid": 3, "itemType": "button", "itemName": "rectangle", "url": "rectangle.png", "itemPosition": ["580", "80"] },
            { "itemid": 4, "itemType": "button", "itemName": "rectangle-wrong", "url": "rectangle-wrong.png", "itemPosition": ["580", "80"] }
          ],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "question-cloud", "url": "science/select-helipcopter.mp3", "itemPosition": ["0", "0"] }]
        },
          


      }



    ]
  }, {
    "gameId": "medical",
    "slideData": [
         {
        "sliderType": "introSlide",
        "nameHeader": "",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
            { "itemType": "general", "itemName": "tina-stand", "url": "tina-stand.png", "itemPosition": ["200", "120"] }],
          "seperate": [
             { "itemType": "background", "itemName": "intro-background", "url": "medical/intro-background.png", "itemPosition": ["300", "100"] }
            ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "intro-audio", "url": "medical/medical-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      },{
        "sliderType": "pictureSlide",
        "nameHeader": "ant",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
               { "itemType": "background", "itemName": "doctor-background", "url": "medical/doctor-background.png", "itemPosition": ["300", "100"] },
            { "itemType": "seperate", "itemName": "boy", "url": "medical/boy.png", "itemPosition": ["200", "0"] }
             
            ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "body-audio", "url": "medical/body-intro.mp3", "itemPosition": ["0", "0"] }]
        }


      },{
        "sliderType": "matchSlide",
        "nameHeader": "ant",
        "backgroundColor": "#fff",
        "chacraterImages": {
          "general": [
          ],
          "seperate": [
             { "itemType": "background", "itemName": "doctor-background", "url": "medical/doctor-background.png", "itemPosition": ["300", "100"] },
            { "itemType": "seperate", "itemName": "boy", "url": "medical/boy-small.png", "itemPosition": ["330", "30"] }
            
            ],
          "button": [
            { "itemid": 1, "itemType": "button", "itemName": "play-button", "url": "play.png", "itemPosition": ["700", "400"] },
            { "itemid": 2, "itemType": "button-gray", "itemName": "play-gray", "url": "play-gray.png", "itemPosition": ["700", "400"] }],
          "audio": [
            { "audioid": 1, "itemType": "audio", "itemName": "body-audio", "url": "medical/question.mp3", "itemPosition": ["0", "0"] }]
        }


      }
    ]
  }],
  "emotion": [{ "sliderType": "emotionSelectionSlide", "answer": [1] },
  { "sliderType": "SelectPictureGameSlide", "answer": [1] },
  { "sliderType": "SelectScaredGameSlide", "answer": [1] },
  { "sliderType": "SelectSadGameSlide", "answer": [1] }],
  "words": [{ "wordid": "1", "word": "Ball", "itemPostion": ["10", "20"] },
  { "wordid": "2", "word": "Banana", "itemPostion": ["290", "20"] },
  { "wordid": "3", "word": "Bell", "itemPostion": ["10", "220"] },
  { "wordid": "4", "word": "Deer", "itemPostion": ["290", "220"] }
  ],
  "wordsanswer": [1, 2, 3],
  "numeric": [{ "sliderType": "pictureSelectionSlide", "answer": [3] },
  { "sliderType": "SelectNumericGameSlide", "answer": [1] },
  { "sliderType": "SelectNumericTwoGameSlide", "answer": [1] },
  { "sliderType": "SelectNumericThreeGameSlide", "answer": [1] },
  { "sliderType": "SelectNumericFourGameSlide", "answer": [1] },
  { "sliderType": "SelectNumericFiveGameSlide", "answer": [1] },
  { "sliderType": "SelectNumericSixGameSlide", "answer": [3] },
  { "sliderType": "SelectNumericSevenGameSlide", "answer": [1] },
  { "sliderType": "SelectNumericEightGameSlide", "answer": [3] },
  { "sliderType": "SelectNumericNineGameSlide", "answer": [3] },
  { "sliderType": "SelectNumericTenGameSlide", "answer": [3] },
  { "sliderType": "SelectNumericElevenGameSlide", "answer": [3] },
  ],
  
"science":[{"sliderType":"selectpictureone","answer":[3]},
{"sliderType":"selectpicturetwo","answer":[3]},
{"sliderType":"selectpicturethree","answer":[3]},
{"sliderType":"selectpicturefour","answer":[1]},
{"sliderType":"selectpicturefive","answer":[3]},
{"sliderType":"selectpicturesix","answer":[1]},
{"sliderType":"selectpictureseven","answer":[3]},
{"sliderType":"selectpictureeight","answer":[3]},
{"sliderType":"selectpicturenine","answer":[1]},
]
});

export const ROUTER = Object.freeze({
  PATH: []
});



