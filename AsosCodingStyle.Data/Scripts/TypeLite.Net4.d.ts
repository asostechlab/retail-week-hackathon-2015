
 
 

 

/// <reference path="Enums.ts" />

declare module AsosCodingStyle.Data {
	interface Order {
		OrderId: number;
		Items: AsosCodingStyle.Data.OrderItem[];
		DateCreated: Date;
	}
	interface OrderItem {
		OrderItemId: number;
		Product: AsosCodingStyle.Data.Product;
		Quantity: number;
	}
	interface Product {
		ProductId: number;
		Description: string;
		Size: string;
		Colour: string;
		ImageUrl: string;
	}
}


