export interface Location {
    id: string;
    name: string;
    address: string;
    suburb: string;
    phone: string;
    hours: {
        mon_fri: string;
        sat_sun: string;
    };
    mapUrl: string;
}

export const locations: Location[] = [
    {
        id: 'subiaco-flagship',
        name: 'Boba Pop! Subiaco',
        address: '123 Rokeby Rd, Subiaco WA 6008',
        suburb: 'Subiaco',
        phone: '08 9234 5678',
        hours: {
            mon_fri: '10:00 AM - 9:00 PM',
            sat_sun: '10:00 AM - 10:00 PM'
        },
        mapUrl: '#'
    },
    {
        id: 'northbridge-neon',
        name: 'Boba Pop! Northbridge',
        address: '45 William St, Northbridge WA 6003',
        suburb: 'Northbridge',
        phone: '08 9345 6789',
        hours: {
            mon_fri: '11:00 AM - 11:00 PM',
            sat_sun: '11:00 AM - 12:00 AM'
        },
        mapUrl: '#'
    },
    {
        id: 'vic-park-vibes',
        name: 'Boba Pop! Vic Park',
        address: '789 Albany Hwy, Victoria Park WA 6100',
        suburb: 'Victoria Park',
        phone: '08 9456 7890',
        hours: {
            mon_fri: '10:00 AM - 9:30 PM',
            sat_sun: '10:00 AM - 10:00 PM'
        },
        mapUrl: '#'
    }
];
