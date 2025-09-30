import React from 'react';

export default function S4() {
    const team = [
        {
            name: 'Lou Salge',
            title: 'President & Owner',
            image: '/TeamPhotos/Lou.jpeg',
            alt: 'Lou Salge'
        },
    
        {
            name: 'Kristi Steffen',
            title: 'Designer & Pre-Production Manager',
            image: '/TeamPhotos/Kristi.jpeg',
            alt: 'Kristi Steffen'
        },
        {
            name: 'Kevin Gray',
            title: 'Sales Manager',
            image: '/TeamPhotos/Kevin.jpeg',
            alt: 'Kevin Gray'
        },
        {
            name: 'Jeff Webster',
            title: 'Production Manager',
            image: '/TeamPhotos/JeffW.jpeg',
            alt: 'Jeff Webster'
        },
        {
            name: 'Rachel Forman',
            title: 'Office Manager',
            image: '/TeamPhotos/Rachel.jpeg',
            alt: 'Rachel Forman'
        },
        {
            name: 'Jeff Hicks',
            title: 'Estimator',
            image: '/TeamPhotos/JeffH.jpeg',
            alt: 'Jeff Hicks'
        },
        {
            name: 'Paul Dierkes',
            title: 'Site Superintendent',
            image: '/TeamPhotos/Paul.jpeg',
            alt: 'Paul Dierkes'
        },
        {
            name: 'Sam Hunley',
            title: 'Site Superintendent',
            image: '/TeamPhotos/Sam.jpeg',
            alt: 'Sam Hunley'
        },
        {
            name: 'Ted Gear',
            title: 'Field Technician',
            image: '/TeamPhotos/Ted.jpeg',
            alt: 'Ted Gear'
        },
        {
            name: 'Jake Mathis',
            title: 'Field Technician',
            image: '/TeamPhotos/Jake.jpeg',
            alt: 'Jake Mathis'
        },
        {
            name: 'Mike Mondello',
            title: 'Field Technician',
            image: '/TeamPhotos/Mike.jpeg',
            alt: 'Mike Mondell'
        },
        {
            name: 'Bruce Pardue',
            title: 'Field Technician',
            image: '/TeamPhotos/Bruce.jpeg',
            alt: 'Bruce Pardue'
        },
        {
            name: 'Evan Towns',
            title: 'Field Technician',
            image: '/TeamPhotos/Evan.jpeg',
            alt: 'Evan Towns'
        },
        {
            name: 'Jim Walker',
            title: 'Field Technician',
            image: '/TeamPhotos/Jim.jpeg',
            alt: 'Jim Walker'
        },
        {
            name: 'Abby Salge',
            title: 'HR & Accounting Administrator',
            image: '/TeamPhotos/Abby.jpeg',
            alt: 'Abby Salge'
        }
    ]



    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                        Meet The Team
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto"></div>
                </div>

                {/* Team Grid - 3 columns on desktop, 1 column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-4">
                                <img 
                                    src={member.image} 
                                    alt={member.alt} 
                                    className="w-48 h-48 mx-auto rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">
                                {member.name}
                            </h3>
                            <p className="text-lg text-gray-600">
                                {member.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
