import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ResponseObj } from './model/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  uploadedFile: File | null = null;
  uploadedFileName: string = '____';
  formData: FormData = new FormData();
  result!: ResponseObj;
  mode: string = '';
  median: string = '';
  average: string = '';
  mean: string = '';
  sum: string = '';
  evenNumbers: string = '';
  oddNumbers: string = '';
  numbersDivisibleBy3: string = '';
  numbersDivisibleBy5: string = '';
  numbersDivisibleBy7: string = '';

  constructor(
    private loadingBar: LoadingBarService
  ) {

  }

  ngOnInit() {

  }

  async loadFile(event: any) {
    let files = event.target.files;

    this.formData.append('file', files[0], files[0].name);
    this.uploadedFileName = files[0].name;
  }

  setAsNull() {
    this.uploadedFile = null;
    this.uploadedFileName = '____';
    this.formData = new FormData();

    this.oddNumbers = '';
    this.evenNumbers = '';
    this.sum = '';
    this.mode = '';
    this.median = '';
    this.mean = '';
    this.numbersDivisibleBy3 = '';
    this.numbersDivisibleBy5 = '';
    this.numbersDivisibleBy7 = '';
  }

  async UploadFile() {
    if (!this.formData || this.uploadedFileName == '____') {
      alert('Upload a file');
    } else {
      let response: ResponseObj = await fetch('https://glacial-taiga-43222.herokuapp.com/https://halogen-netcore.herokuapp.com/api/FileUpload/upload', {
        method: 'POST',
        body: this.formData
      }).then(res => res.json());

      this.result = response;

      this.oddNumbers = this.result.oddNumbers.join(',');
      this.evenNumbers = this.result.evenNumbers.join(',');
      this.sum = this.result.sum.toString();
      this.mode = this.result.mode.toString();
      this.median = this.result.median.toString();
      this.mean = this.result.mean.toString();
      this.numbersDivisibleBy3 = this.result.evenNumbers.join(',');
      this.numbersDivisibleBy5 = this.result.evenNumbers.join(',');
      this.numbersDivisibleBy7 = this.result.numbersDivisibleBy7.join(',');
    }
  }

  startLoading() {
    this.loadingBar.start();
  }

  stopLoading() {
    this.loadingBar.complete();
  }


}
