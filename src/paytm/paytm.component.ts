import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="!loading">
      <p>Order ID: {{ order_id }}</p>
      <p>Payment URL: {{ payment_url }}</p>
      <button (click)="makePayment()">Make Payment</button>
    </div>
  `
})
export class PaymentComponent {
  loading = false;
  order_id = '';
  payment_url = '';

  constructor(private http: HttpClient) {}

  makePayment() {
    const body = { amount: 1000 }; // change amount as needed
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.loading = true;
    this.http.post<any>('/payment/start', body, { headers }).subscribe(
      (response) => {
        console.log(response);
        this.loading = false;
        this.order_id = response.orderId;
        this.payment_url = response.paytmPaymentUrl;
        // redirect user to payment_url to complete payment
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
