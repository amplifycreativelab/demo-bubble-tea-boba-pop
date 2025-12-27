export interface Location {
    id: string;
    name: string;
    address: string;
    suburb: string;
    hours: {
        mon_fri: string;
        sat_sun: string;
    };
    mapUrl: string;
}

export const locations: Location[] = [
    {
        id: 'subiaco-flagship',
        name: 'Boba Pop! Central District',
        address: '123 Example Rd, Central District',
        suburb: 'Central District',
        hours: {
            mon_fri: '10:00 AM - 9:00 PM',
            sat_sun: '10:00 AM - 10:00 PM'
        },
        mapUrl: '#'
    },
    {
        id: 'northbridge-neon',
        name: 'Boba Pop! Old Quarter',
        address: '45 Sample St, Old Quarter',
        suburb: 'Old Quarter',
        hours: {
            mon_fri: '11:00 AM - 11:00 PM',
            sat_sun: '11:00 AM - 12:00 AM'
        },
        mapUrl: '#'
    },
    {
        id: 'vic-park-vibes',
        name: 'Boba Pop! Riverside',
        address: '789 Demo Ave, Riverside',
        suburb: 'Riverside',
        hours: {
            mon_fri: '10:00 AM - 9:30 PM',
            sat_sun: '10:00 AM - 10:00 PM'
        },
        mapUrl: '#'
    }
];
