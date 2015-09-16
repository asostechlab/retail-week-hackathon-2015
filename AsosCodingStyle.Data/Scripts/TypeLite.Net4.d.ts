
 
 

 

/// <reference path="Enums.ts" />

declare module AsosCodingStyle.Data {
	interface Address {
		AddressLine1: string;
		AddressLine2: string;
		City: string;
		PostCode: string;
	}
	interface Notification {
		Message: string;
		DateTime: Date;
		FormattedDateTime: string;
	}
	interface Order {
		Id: string;
		Items: AsosCodingStyle.Data.OrderItem[];
		DateCreated: Date;
		ReturnCollect: AsosCodingStyle.Data.ReturnCollect;
		OrderAddress: AsosCodingStyle.Data.Address;
		Notifications: AsosCodingStyle.Data.Notification[];
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
	interface ReturnCollect {
		Address: AsosCodingStyle.Data.Address;
		Date: Date;
	}
}


