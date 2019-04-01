import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ],
  bootstrap: []
})
export class TableComponent implements OnInit {

  response: any;
  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  TableContentsAPICall() {
    this.http.get('http://localhost:8080/cookies')
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

}
