import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';
@Component({
  selector: 'app-shooting',
  templateUrl: './shooting.component.html',
  styleUrls: ['./shooting.component.css']
})
export class ShootingComponent implements OnInit {
  public game: Phaser.Game;
  constructor(private alphabetService: AlphabetService) { }

  ngOnInit() {
  }


  preload() {


    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {

          if (elements.sliderType == "shootingSlide") {
            elements.chacraterImages['general'].forEach(element => {
              this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageGeneral + element.url);
            });

            elements.chacraterImages['seperate'].forEach(element => {
              this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageLink + element.url);
            });

            elements.chacraterImages['button'].forEach(element => {
              this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageGeneral + element.url, 80, 30);

            });

            elements.chacraterImages['audio'].forEach(element => {
              this.game.load.audio(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageLink + element.url);

            });

          }
        });
      }
    });
  }

  click_effect;
  create() {
    this.game.stage.backgroundColor = '#fff';
    let style = { font: "normal 38px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        let aliens;
        element.slideData.forEach(elements => {
          if (elements.sliderType == "shootingSlide") {
            let onload_audio; let mouseClick;
            elements.chacraterImages['general'].forEach(element => {
              // if (element.itemName != "success") {
              //   this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
              // } else if (element.itemName != "tina-stand") {
              //   this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
              // }

              if(element.itemName == "cloud"){
                this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
              }
            });

            elements.chacraterImages['seperate'].forEach(element => {
              this.game.physics.startSystem(Phaser.Physics.ARCADE);
              aliens = this.game.add.group();
              aliens.enableBody = true;
              for (var i = 0; i < 5; i++) {
                console.log(this.game.world.randomX);
                console.log(this.game.world.randomY);
                var s = aliens.create(this.game.world.randomX, this.game.world.randomY - 20, element.itemName);
                s.name = 'alien' + s;
                s.body.collideWorldBounds = true;
                s.body.bounce.setTo(0.8, 0.8);
                s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
                s.inputEnabled = true;
               s.input.useHandCursor = true;
                s.events.onInputDown.add(this.destroySprite, this);

              }
              //  this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
            });

            elements.chacraterImages['audio'].forEach(element => {

              if (element.itemName != "welcome") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
              }
              if (element.itemName == "click") {
                this.click_effect = this.game.add.audio(element.itemName);
                this.click_effect.allowMultiple = false;
              }

            });

            elements.chacraterImages['button'].forEach(element => {

              // onload_audio.play();  // Start Button

              if (element.itemName == "play-gray") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }
              //  onload_audio.onStop.add(() => {
              // if (element.itemType == "button") {
              //   this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {


              //     this.game.state.start("DrawingGame");

              //   }, this, 2, 1, 0);
              // }
              //  }, this);

            });

          }

        });
      }
    });
  }

  j = 0; k = 0;
  destroySprite(s) {
    let aliens;
    s.destroy();
    this.click_effect.play();
    // this.click_effect.onStop.add(() => {
    this.j = this.j + 1;
    this.k = this.k + 1;
    if (this.k != 21) {

      if (this.j == 1) {
        this.j = 0;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        aliens = this.game.add.group();
        aliens.enableBody = true;
        for (var i = 0; i < 1; i++) {

          s = aliens.create(this.game.world.randomX, this.game.world.randomY - 20, 'monster');
          s.name = 'alien' + s;
          s.body.collideWorldBounds = true;
          s.body.bounce.setTo(0.8, 0.8);
          s.body.velocity.setTo(10 + Math.random() * 60, 10 + Math.random() * 60);
          s.inputEnabled = true;
            s.input.useHandCursor = true;
          s.events.onInputDown.add(this.destroySprite, this);

        }


      }
    }


    if (this.k == 25) {
      this.game.sound.stopAll();
      this.game.state.start("ShootingSuccessGame");
    }

    // },this);
  }

}
