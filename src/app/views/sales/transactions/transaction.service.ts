import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {

  constructor(private _http: HttpClient) { }

  getData(filter) {
    if (filter == 'Day')
    {return this._http.get<any[]>("./assets/weekly_transaction.json")
      .map(result => result);}
    else if (filter == 'Month')
    {
      return this._http.get<any[]>("./assets/monthly_transaction.json")
        .map(result => result);
    }
    else
    {
      return this._http.get<any[]>("./assets/weekly_transaction.json")
        .map(result => result);
    }
  }

}
