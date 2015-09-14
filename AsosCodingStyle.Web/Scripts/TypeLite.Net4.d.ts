
 
 

 

/// <reference path="Enums.ts" />

declare module AsosCodingStyle.Web.Models {
	interface EmployeeRecord {
		Benefits: AsosCodingStyle.Web.Models.Benefit[];
		Id: System.Guid;
		Name: string;
		Title: string;
		Salary: number;
	}
	interface Benefit {
		Type: AsosCodingStyle.Web.Models.BenefitType;
		ValidUntil: Date;
	}
}
declare module System {
	interface Guid {
	}
}


