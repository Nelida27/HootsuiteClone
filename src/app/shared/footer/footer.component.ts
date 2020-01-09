import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../backend.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
configData;
  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.configData = this.backendService.getConfig();
  }

}
