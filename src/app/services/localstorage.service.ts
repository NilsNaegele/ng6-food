import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  getCustomer(): string {
    const customer = window.localStorage['customer'];
    return JSON.parse(customer);
  }

  saveCustomer(name: string, address): void {
    const customer = {'name': name, 'address': address };
    window.localStorage['customer'] = JSON.stringify(customer);
  }

  destroyCustomer(): void {
    window.localStorage.removeItem('customer');
  }
}
