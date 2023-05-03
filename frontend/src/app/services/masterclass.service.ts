import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMasterClass} from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class MasterclassService {

  BASE_URL = "http://127.0.0.1:8000"

  constructor(private client: HttpClient) { }


  createMasterClass(masterclass : IMasterClass): Observable<IMasterClass> {
    return this.client.post<IMasterClass>(`${this.BASE_URL}/masterclass/create/`, masterclass);
  }

  getMasterClasses(): Observable<IMasterClass[]> {
    return this.client.get<IMasterClass[]>(`${this.BASE_URL}/masterclass/`);
  }

  getMasterClass(id : number): Observable<IMasterClass> {
    return this.client.get<IMasterClass>(`${this.BASE_URL}/masterclass/${id}/`);
  }

  updateMasterClass(masterclass : IMasterClass): Observable<IMasterClass> {
    return this.client.put<IMasterClass>(`${this.BASE_URL}/masterclass/${masterclass.id}/`, masterclass);
  }

  updateParticipants(id: number, participants: number): Observable<IMasterClass> {
    return this.client.put<IMasterClass>(`${this.BASE_URL}/masterclass/${id}/`, { "participants": participants });
  }

  deleteMasterClass(id : number): Observable<void> {
    return this.client.delete<void>(`${this.BASE_URL}/masterclass/${id}/`);
  }
}
