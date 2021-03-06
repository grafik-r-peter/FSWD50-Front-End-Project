import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../shared/customer.service";

@Component({
 selector:'app-customer-list',
 templateUrl:'./customer-list.component.html',
 styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 customerArray =[];
 searchText:string = "";
 constructor(private customerService: CustomerService) { }

	 ngOnInit() {
	         this.customerService.getCustomers().subscribe(
	                 (list) => {
	                         this.customerArray = list.map( (item) => {
	                                return {
	                                        $key : item.key,
	                                        ...item.payload.val()
	                                }
	                        })
	                 });
	}

	filterCondition(customer){
     return customer.course.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }
}