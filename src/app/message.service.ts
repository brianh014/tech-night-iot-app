import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';

@Injectable()
export class MessageService {
    //base configs
    baseTopic = "IoT/";

    //topics
    ledSubTopic = this.baseTopic + "led/web";
    ledPubTopic = this.baseTopic + "led/device";

    alarmSubTopic = this.baseTopic + "alarm/web";
    alarmPubTopic = this.baseTopic + "alarm/device";

    lightSubTopic = this.baseTopic + "light/web";

    tempSubTopic = this.baseTopic + "temp/web";

    rotarySubTopic = this.baseTopic + "rotary/web";

    touchSubTopic = this.baseTopic + "touch/web";

    constructor(private mqttService: MqttService){this.mqttService.connect();}

    private genPublish(action: string = null, message: string = null){
        return JSON.stringify({'client': 'web-app', 'timestamp': new Date(), 'action': action, 'message': message});
    }

    public messageLogger(list: Array<any>, message: any): Array<any>{
        list.push(message);
        if(list.length > 5){
            list.shift();
        }
        return list;
    }

    public subLed(): Observable<MqttMessage>{
        return this.mqttService.observe(this.ledSubTopic);
    }

    public pubLed(message: string = null){
        this.mqttService.unsafePublish(this.ledPubTopic, this.genPublish("flash"), {qos: 1, retain: false});
    }

    public subAlarm(): Observable<MqttMessage>{
        return this.mqttService.observe(this.alarmSubTopic);
    }

    public pubAlarm(message: string = null){
        this.mqttService.unsafePublish(this.alarmPubTopic, this.genPublish("alarm"), {qos: 1, retain: false});
    }

    public subLight(): Observable<MqttMessage>{
        return this.mqttService.observe(this.lightSubTopic);
    }

    public subTemp(): Observable<MqttMessage>{
        return this.mqttService.observe(this.tempSubTopic);
    }

    public subRotary(): Observable<MqttMessage>{
        return this.mqttService.observe(this.rotarySubTopic);
    }

    public subTouch(): Observable<MqttMessage>{
        return this.mqttService.observe(this.touchSubTopic);
    }
}