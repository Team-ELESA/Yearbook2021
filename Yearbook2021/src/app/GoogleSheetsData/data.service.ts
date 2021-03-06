import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions: any;
  GSheetConst: any = {
    'students': '1uMuleRQ_smf6T_YoDmYumDW9qBNxL25GlZUF8rJWR-E', // Second sheet without grid id. Owner - ELESA
    'teachers': '1hsFSRAkdpNfXN4X_fhrKQxCBU8th9YKX0LE5pcNpGJs',
    'core': '1TMraoIdMnA1Fn5WPnSyUJsOugaLmp7tXyRlXUxWN3GE'
  }

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getSheetData(key: string) {
    const sheetId = this.GSheetConst[key]
    const url = `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`;

    return this.http.get(url)
      .pipe(map((res: any) => {
          const data = res.feed.entry;

          const returnArray: Array<any> = [];
          if (data && data.length > 0) {
            data.forEach(entry => {
              const obj = {};
              for (const x in entry) {
                if (x.includes('gsx$') && entry[x].$t) {
                  obj[x.split('$')[1]] = entry[x]['$t'];
                }
              }
              returnArray.push(obj);
            });
          }
          return this.shuffle(returnArray);
        })
      );
  }

  shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
}
