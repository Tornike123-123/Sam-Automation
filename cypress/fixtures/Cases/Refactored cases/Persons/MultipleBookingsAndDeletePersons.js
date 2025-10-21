// /**
//  * Persons - Multiple Bookings and Delete Persons Test
//  * Tests creating multiple bookings and then deleting persons
//  */

// import { setupPersonsTest, PERSONS_CONFIG } from './personsConfig.js';
// import { PersonsHelpers } from './personsHelpers.js';

// describe('Persons - Multiple Bookings and Delete Persons', () => {
//     let helpers;

//     beforeEach(() => {
//         setupPersonsTest();
//         helpers = new PersonsHelpers();
//     });

//     it('should add person, create multiple bookings, delete bookings and persons', () => {
//         const { testData } = PERSONS_CONFIG;
//         const persons = [testData.personName, 'Second Person'];
//         const bookings = [
//             { project: 'First Project', container: 'This is a container for a booking' },
//             { project: 'Second Project', container: 'Another booking container' }
//         ];
        
//         // Create multiple bookings and delete persons using helper function
//         helpers.createMultipleBookingsAndDeletePersons(persons, bookings);
//     });
// });

