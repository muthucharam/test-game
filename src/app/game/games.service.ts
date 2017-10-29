import { Injectable } from '@angular/core';
import { POSTURL } from './../app.config';

// App Service
import { AppService } from './../app.service';
@Injectable()
export class GamesService {

  constructor(private appService: AppService) { }


  /**
   * getGame Data from JSON FIle
   * @method: GET
   * @return: JSON Objects
   */
  getGame(){
    return this.appService.getAPIData(POSTURL.GAME_INFO.getgames);
  }
  
}
