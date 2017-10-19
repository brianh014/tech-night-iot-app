import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service'

@Component({
  selector: 'iot-rotary',
  templateUrl: './rotary.component.html',
  styleUrls: ['./rotary.component.css']
})
export class RotaryComponent implements OnInit {
  angle = '-';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.subRotary().subscribe( message => {
        try{
          let payload: string = message.payload.toString()
          let json: JSON = JSON.parse(payload);
          this.angle = json['message'];
        }
        catch(err){
          this.angle = '-';
          console.log("Error in sub: message was not in JSON format, ignoring.", err)
        }
    });
  }

}
