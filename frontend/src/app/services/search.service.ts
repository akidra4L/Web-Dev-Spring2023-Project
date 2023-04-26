import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchEvent = new Subject<string>();

  search(query: string): void {
    this.searchEvent.next(query);
  }
}
