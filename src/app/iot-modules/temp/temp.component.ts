import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service'

@Component({
  selector: 'iot-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  temp = 0;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.subTemp().subscribe( message => {
        try{
          let payload: string = message.payload.toString()
          let json: JSON = JSON.parse(payload);
          this.temp = +json['message'];
        }
        catch(err){
          this.temp = 0;
          console.log("Error in sub: message was not in JSON format, ignoring.", err)
        }
    });
  }

}
