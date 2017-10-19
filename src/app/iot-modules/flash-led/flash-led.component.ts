import { Component, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service'

@Component({
  selector: 'iot-flash-led',
  templateUrl: './flash-led.component.html',
  styleUrls: ['./flash-led.component.css']
})
export class FlashLedComponent implements OnInit {
  messages: Array<JSON> = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
      this.messageService.subLed().subscribe( message => {
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

  flash(){
    this.messageService.pubLed();
  }

}
