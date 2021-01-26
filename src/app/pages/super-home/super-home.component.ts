import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import QRScanner from 'qr-code-scanner';
@Component({
  selector: 'app-super-home',
  templateUrl: './super-home.component.html',
  styleUrls: ['./super-home.component.scss']
})
export class SuperHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
scan(){
 console.log(navigator.mediaDevices,"NEw") 
//   QRScanner.initiate({
//     // match: /^[a-zA-Z0-9]{16,18}$/, // optional
//     onResult: function (result) { console.info('DONE: ', result); },
//     onError: function (err) { console.error('ERR :::: ', err); }, // optional
//     onTimeout: function () { console.warn('TIMEOUT'); } // optional
// })
this.router.navigate(['/home'])
}
}
