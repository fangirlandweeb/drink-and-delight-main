import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  fetchAllWarehouse(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  constructor() {}
}
