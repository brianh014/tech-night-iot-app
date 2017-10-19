import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service';

@Component({
  selector: 'iot-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.css']
})
export class BuzzerComponent implements OnInit {
  messages: Array<JSON> = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
      this.messageService.subAlarm().subscribe( message => {
        try{
          let payload: string = message.payload.toString()
          let json: JSON = JSON.parse(payload);
          this.messageService.messageLogger(this.messages, json);
        }
        catch(err){
          console.log("Error in sub: message was not in JSON format, ignoring.", err)
        }
    });
  }

  play(){
    this.messageService.pubAlarm();
  }

}
