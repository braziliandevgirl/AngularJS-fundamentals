eventsApp.factory('eventData', function () {
    return {
        event: {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass introductory',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this sesison will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for run and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This section will take a closer look at scopes',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controller',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beggining of everything Angularn does. Learn how to craft controllers that will win the respect of your friends and neighbors',
                    upVoteCount: 0
                }
            ]
        }
    };
});