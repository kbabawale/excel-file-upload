import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseObj } from '../model/response';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url = environment.api_url;

  constructor(

  ) { }


}
