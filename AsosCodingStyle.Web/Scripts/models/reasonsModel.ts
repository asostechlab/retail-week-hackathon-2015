/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />

export interface IRefundReason {
    value: AsosCodingStyle.Data.ReturnReasonType;
    text: string;
}

var returnReasons: IRefundReason[] = [
    { value: AsosCodingStyle.Data.ReturnReasonType.Quality, text: 'Quality' },
    { value: AsosCodingStyle.Data.ReturnReasonType.Size, text: 'Sizing' },
    { value: AsosCodingStyle.Data.ReturnReasonType.Damaged, text: 'Damaged' },
    { value: AsosCodingStyle.Data.ReturnReasonType.DidntLike, text: `Didn't Like` },
    { value: AsosCodingStyle.Data.ReturnReasonType.Other, text: 'Other' }
];

export interface IFeedbackType {
    value: AsosCodingStyle.Data.OrderItemFeedbackType;
    text: string;
}

var feedbackTypes: IFeedbackType[] = [
    { value: AsosCodingStyle.Data.OrderItemFeedbackType.LoveTheColour, text: 'Love the colour' },
    { value: AsosCodingStyle.Data.OrderItemFeedbackType.LoveTheFeel, text: 'Love the feel' },
    { value: AsosCodingStyle.Data.OrderItemFeedbackType.LoveTheSize, text: 'Love the size' }
];

export {returnReasons, feedbackTypes}