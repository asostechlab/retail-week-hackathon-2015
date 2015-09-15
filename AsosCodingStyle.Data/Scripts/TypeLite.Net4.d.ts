
 
 

 

/// <reference path="Enums.ts" />

declare module AsosCodingStyle.Data {
	interface Order {
		Id: string;
		Items: AsosCodingStyle.Data.OrderItem[];
		DateCreated: Date;
	}
	interface OrderItem {
		OrderItemId: number;
		Product: AsosCodingStyle.Data.Product;
		Quantity: number;
		Price: number;
		Return: AsosCodingStyle.Data.OrderItemReturn;
		FeedbackTypes: AsosCodingStyle.Data.OrderItemFeedbackType[];
	}
	interface Product {
		ProductId: number;
		Description: string;
		Size: string;
		Colour: string;
		ImageUrl: string;
	}
	interface OrderItemReturn {
		Reason: AsosCodingStyle.Data.ReturnReasonType;
		ExtraInformation: string;
	}
}


