/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />

export interface IReturnReason {
    value: AsosCodingStyle.Data.ReturnReasonType;
    text: string;
    iconClass: string;
}

var returnReasons: IReturnReason[] = [
    { value: AsosCodingStyle.Data.ReturnReasonType.Quality, text: 'Quality', iconClass: 'sliders' }, // search, shield, signal, sliders, sort-amount-asc, chain-broken
    { value: AsosCodingStyle.Data.ReturnReasonType.Size, text: 'Sizing', iconClass: 'arrows-h' }, // arrows-h
    { value: AsosCodingStyle.Data.ReturnReasonType.Damaged, text: 'Damaged', iconClass: 'chain-broken' }, // times, user-times, chain-broken
    { value: AsosCodingStyle.Data.ReturnReasonType.DidntLike, text: `Didn't Like`, iconClass: 'thumbs-o-down' }, // frown-o, thumbs-o-down
    { value: AsosCodingStyle.Data.ReturnReasonType.Other, text: 'Other', iconClass: 'commenting-o' } // commenting-o
];

export interface IFeedbackType {
    value: AsosCodingStyle.Data.OrderItemFeedbackType;
    text: string;
    iconClass: string;
}

var positiveFeedbackTypes: IFeedbackType[] = [
    { value: AsosCodingStyle.Data.OrderItemFeedbackType.LoveTheColour, text: 'Love the colour', iconClass: 'eye' }, // eye, eyedropper, picture-o, paint-brush
    { value: AsosCodingStyle.Data.OrderItemFeedbackType.LoveTheFeel, text: 'Love the feel', iconClass: 'leaf' }, // leaf, hand-paper-o
    { value: AsosCodingStyle.Data.OrderItemFeedbackType.LoveTheSize, text: 'Love the size', iconClass: 'arrows-alt' } // arrows-alt, anchor, paw, street-view, suitcase
];

export {returnReasons, positiveFeedbackTypes}