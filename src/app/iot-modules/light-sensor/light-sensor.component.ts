import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service'

@Component({
  selector: 'iot-light-sensor',
  templateUrl: './light-sensor.component.html',
  styleUrls: ['./light-sensor.component.css']
})
export class LightSensorComponent implements OnInit {
  lightLevel = '-';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.subLight().subscribe( message => {
        try{
          let payload: string = message.payload.toString()
          let json: JSON = JSON.parse(payload);
          this.lightLevel = json['message'];
        }
        catch(err){
          this.lightLevel = '-';
          console.log("Error in sub: message was not in JSON format, ignoring.", err)
        }
    });
  }

}
