import { Injectable } from '@angular/core';
import { POSTURL } from './../../app.config';

import { AppService} from './../../app.service';
@Injectable()

@Injectable()
export class StoryService {
  constructor(private appService: AppService) { }
  
    onPreloadImages(){
      
       return this.appService.getAPIData(POSTURL.GAME_INFO.getgames);
       }
  }
  