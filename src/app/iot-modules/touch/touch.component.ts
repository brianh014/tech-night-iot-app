import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service'

@Component({
  selector: 'iot-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.css']
})
export class TouchComponent implements OnInit {
  touch = '-';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.subTouch().subscribe( message => {
        try{
          let payload: string = message.payload.toString()
          let json: JSON = JSON.parse(payload);
          this.touch = json['message'];
        }
        catch(err){
          this.touch = '-';
          console.log("Error in sub: message was not in JSON format, ignoring.", err)
        }
    });
  }

}
