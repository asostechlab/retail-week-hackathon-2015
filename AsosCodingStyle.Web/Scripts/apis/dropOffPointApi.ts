/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />
import $ = require('jquery');
import Address = AsosCodingStyle.Data.Address;

export interface IDropOffPoint {
    Address: Address;
    OpeningTimes: string[];
    MapUrl: string;
}

export class DropOffPointApi {
    getDropOffPoint(postCode: string): Promise<IDropOffPoint> {
        var dropOffPoint: IDropOffPoint;

        if (postCode === 'location') {
            dropOffPoint = {
                Address: {
                    AddressLine1: 'H V Kingsley',
                    AddressLine2: '5 Paul Street',
                    City: 'London',
                    PostCode: 'EC2A 4JJ'
                },
                OpeningTimes: [
                    'Mon - Fri 06:00 - 18:00',
                    'Sat closed',
                    'Sun closed'
                ],
                MapUrl: '/images/ec2a4jj.PNG'
            };
        } else {
            dropOffPoint = {
                Address: {
                    AddressLine1: 'Key Shop',
                    AddressLine2: '227 Eversholt Street',
                    City: 'London',
                    PostCode: 'NW1 1DE'
                },
                OpeningTimes: [
                    'Mon - Fri 07:00 - 19:30',
                    'Sat 07:00 - 19:30',
                    'Sun 07:00 - 19:30'
                ],
                MapUrl: '/images/nw11de.PNG'
            };
        }

        return Promise.resolve(dropOffPoint);
    }
}

var instance = new DropOffPointApi();
export {instance};