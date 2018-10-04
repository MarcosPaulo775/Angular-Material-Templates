import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: any;
  hora: any;

  constructor() {  }

  ngOnInit() {
    this.date = this.getCalendarDate();
    setTimeout(this.getClockTime(), 1000);
  }

  getCalendarDate(): String {
    var months = new Array(13);
    months[0] = "Janeiro";
    months[1] = "Fevereiro";
    months[2] = "Março";
    months[3] = "Abril";
    months[4] = "Maio";
    months[5] = "Junho";
    months[6] = "Julho";
    months[7] = "Agosto";
    months[8] = "Setembro";
    months[9] = "Outubro";
    months[10] = "Novembro";
    months[11] = "Dezembro";

    var now = new Date();
    var monthnumber = now.getMonth();
    var monthname = months[monthnumber];
    var monthday = now.getDate();
    var year = now.getFullYear();
    if (year < 2000) { year = year + 1900; }
    var dateString = monthday +
      ' de ' +
      monthname +
      ' de ' +
      year;
    return dateString;
  } // function getCalendarDate()

  getClockTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ap = "AM";
    var hora;
    var minuto;
    var segundo;
    if (hour > 11) { ap = "PM"; }
    if (hour > 12) { hora = hour - 12; }
    if (hour == 0) { hora = 12; }
    if (hour < 10) { hora = "0" + hour; }
    if (minute < 10) { minuto = "0" + minute; }else minuto = minute;
    if (second < 10) { segundo = "0" + second; }else segundo = second;
    var timeString = hora +
      ':' +
      minuto +
      ':' +
      segundo +
      " " +
      ap;
    this.hora = timeString;
    setInterval(this.getClockTime,1000);
  }

  

}
