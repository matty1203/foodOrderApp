import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import QRScanner from 'qr-code-scanner';
@Component({
  selector: 'app-super-home',
  templateUrl: './super-home.component.html',
  styleUrls: ['./super-home.component.scss']
})
export class SuperHomeComponent implements OnInit {
  public output: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  public onError(e): void {
    alert(e);
  }
}
