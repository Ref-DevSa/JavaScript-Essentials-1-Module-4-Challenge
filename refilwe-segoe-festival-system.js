// Food Delivery System - Object-Oriented Programming Practical Demonstration

const attendees = [
  { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
  { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
  { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
  { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
  { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
  { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
  { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
  { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 },
];

// Challenge 1: Viewing the queue of attendees

// console.log("--- Challenge 1: View the Queue ---");

// for (const attendee of attendees) {
//   console.log("========================");
//   console.log(`Name: ${attendee.name}`);
//   console.log(`Age: ${attendee.age}`);
//   console.log(`Ticket: ${person.ticket}`);
//   console.log(`Valid Ticket: ${person.hasTicket}`);
// }

// console.log("========================");


// // Challenge 2: Who can enter?
// {
//   console.log("\n########## CHALLENGE 2: WHO CAN ENTER? ##########");

  // for (const attendee of attendees) {
  //   if (attendee.age >= 18 && attendee.hasTicket === true) {
  //     console.log(`${attendee.name}: ENTRY APPROVED`);
  //   } else if (attendee.age < 18) {
  //     console.log(`${attendee.name}: ENTRY DENIED - UNDER 18`);
  //   } else {
  //     console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
  //   }
  // }
// }

// // Challenge 3: Access Zones (Checking tickets and assigning wristbands)

// for (const attendee of attendees) {
//     if (!(attendee.age >= 18 && attendee.hasTicket === true)) {
//       continue;
//     }

// let wristband;

// switch (attendee.ticket) {
//   case "VIP":
//     wristband = "GOLD WRISTBAND";
//     break;

//   case "General":
//     wristband = "BLUE WRISTBAND";
//     break;

//   default:
//     wristband = "UNKNOWN TICKET TYPE";
// }

// console.log(attendee.name);
// console.log(`Ticket: ${person.ticket}`);
// console.log(`Wristband: ${wristband}`);
// }

// // Challenge 4: VIP Lounge Security

  // for (const attendee of attendees) {
  //   if (attendee.hasTicket === true && attendee.ticket === "VIP" && attendee.age >= 18) {
  //     console.log(`${attendee.name}: VIP LOUNGE ACCESS APPROVED`);
  //   } else {
  //     console.log(`${attendee.name}: VIP LOUNGE ACCESS DENIED`);
  //   }
  // }
// Karabo fails because he in under the age of 18.

// // Challenge 5: Find a Person in the Queue


// let searchName = "Zanele";

// for (const person of attendees) {
//     if (person.name === searchName) {
//         console.log("ATTENDEE FOUND");
//         console.log("Name: " + person.name);
//         console.log("Age: " + person.age);
//         console.log("Ticket: " + person.ticket);
//         console.log("Valid Ticket: " + person.hasTicket);

//         break;
//     }
// }

// // Challenge 6: Security Fast Lane

// for (const attendee of attendees) {
//     if (attendee.hasTicket === false) {
//         continue;
//     }
//     console.log(`Checking ${attendee.name}...`);
// }

// // Challenge 7: Food Voucher Rewards

  // for (const attendee of attendees) {
  //   if (attendee.spend >= 1000) {
  //     console.log(`${attendee.name} receives a R200 food voucher.`);
  //   } else if (attendee.spend >= 500) {
  //     console.log(`${attendee.name} receives a R100 food voucher.`);
  //   } else if (attendee.spend >= 300) {
  //     console.log(`${attendee.name} receives a R50 food voucher.`);
  //   } else {
  //     console.log(`${attendee.name} receives no food voucher.`);
  //   }
  // }


// // Challenge 8: Festival Statistics

// let validTickets = 0;
// let invalidTickets = 0;
// let under18 = 0;
// let vipCount = 0;
// let generalCount = 0;
// let totalSpend = 0;

// // Assume the first attendee is the highest spender initially
// let highestSpender = attendees[0];

// for (let i = 0; i < attendees.length; i++) {
//   const attendee = attendees[i];

//   if (attendee.hasTicket === true) {
//     validTickets++;
//   } else {
//     invalidTickets++;
//   }

//   if (attendee.age < 18) {
//     under18++;
//   }

//   if (attendee.ticket === "VIP") {
//     vipCount++;
//   } else if (attendee.ticket === "General") {
//     generalCount++;
//   }

//   totalSpend += attendee.spend;

//   if (attendee.spend > highestSpender.spend) {
//     highestSpender = attendee;
//   }
// }

// // Calculate the average spending
// const averageSpend = totalSpend / attendees.length;

// // Display the statistics
// console.log(`Total attendees: ${attendees.length}`);
// console.log(`Valid tickets: ${validTickets}`);
// console.log(`Invalid tickets: ${invalidTickets}`);
// console.log(`Attendees under 18: ${under18}`);
// console.log(`VIP attendees: ${vipCount}`);
// console.log(`General attendees: ${generalCount}`);
// console.log(`Total spend: R${totalSpend}`);
// console.log(`Average spend: R${averageSpend.toFixed(2)}`);
// console.log(`Highest spender: ${highestSpender.name}`);
// console.log(`Highest amount spent: R${highestSpender.spend}`);

// // Challenge 9: Find the Biggest Spender

// let biggestSpender = attendees[0];

// for (const attendee of attendees) {
//     if (attendee.spend > biggestSpender.spend) {
//         biggestSpender = attendee;
//     }
// }

// console.log("===== TOP CUSTOMER =====");
// console.log(`Name: ${biggestSpender.name}`);
// console.log(`Amount Spent: R${biggestSpender.spend}`);
// console.log("Reward: Backstage Upgrade");

// // Challenge 10: Venue Capacity

// let capacity = 5;
// let peopleInside = 0;

// for (const attendee of attendees) {
//   // Only admit people who are 18 or older and have a valid ticket
//   if (attendee.age >= 18 && attendee.hasTicket === true) {
//     peopleInside++;

//     console.log(attendee.name + " entered.");
//     console.log("People inside: " + peopleInside + " / " + capacity);

//     // Stop when the venue is full
//     if (peopleInside === capacity) {
//       console.log("VENUE FULL");
//       console.log("STOP ADMITTING PEOPLE");
//       break;
//     }
//   }
// }

// // Challenge 11: Check-in Summary

// for (let minutes = 10; minutes >= 1; minutes--) {
//     console.log(`Festival closes in ${minutes} minute${minutes === 1 ? "" : "s"}...`);

//     if (minutes === 5) {
//         console.log("WARNING: LAST ENTRY HAS ENDED.");
//     }

//     if (minutes === 2) {
//         console.log("PLEASE PROCEED TO THE EXIT.");
//     }
// }
// console.log("FESTIVAL CLOSED");


let option = 2;

console.log("================================");
console.log("       FESTIVAL CONTROL");
console.log("================================");
console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");
console.log("================================");

switch (option) {
    case 1:
        // View the attendee queue
        console.log("=== ATTENDEE QUEUE ===");

        for (const person of attendees) {
            console.log(`Name: ${person.name}`);
            console.log(`Age: ${person.age}`);
            console.log(`Ticket: ${person.ticket}`);
            console.log(`Valid Ticket: ${person.hasTicket}`);
            console.log("--------------------");
        }
        break;

    case 2:
        // Process entry with a maximum capacity of 5
        console.log("=== PROCESS ENTRY ===");

        let capacity = 5;
        let peopleInside = 0;

        for (const person of attendees) {
            if (person.age < 18 || person.hasTicket !== true) {
                console.log(`${person.name} denied entry.`);
                continue;
            }

            if (peopleInside === capacity) {
                console.log("VENUE FULL");
                console.log("STOP ADMITTING PEOPLE");
                break;
            }

            peopleInside++;

            console.log(`${person.name} entered.`);
            console.log(`People inside: ${peopleInside} / ${capacity}`);
        }

        if (peopleInside === capacity) {
            console.log("VENUE FULL");
            console.log("STOP ADMITTING PEOPLE");
        }
        break;

    case 3:
        // Display only eligible VIP guests
        console.log("=== ELIGIBLE VIP GUESTS ===");

        let vipFound = false;

        for (const person of attendees) {
            if (
                person.ticket === "VIP" &&
                person.age >= 18 &&
                person.hasTicket === true
            ) {
                console.log(`Name: ${person.name}`);
                console.log(`Age: ${person.age}`);
                console.log(`Ticket: ${person.ticket}`);
                vipFound = true;
            }
        }

        if (!vipFound) {
            console.log("No eligible VIP guests found.");
        }
        break;

    case 4:
        // Display denied attendees and their reasons
        console.log("=== DENIED ATTENDEES ===");

        let deniedFound = false;

        for (const person of attendees) {
            let reasons = [];

            if (person.age < 18) {
                reasons.push("Under 18");
            }

            if (person.hasTicket !== true) {
                reasons.push("Invalid or missing ticket");
            }

            if (reasons.length > 0) {
                console.log(`Name: ${person.name}`);
                console.log(`Reason: ${reasons.join(", ")}`);
                console.log("--------------------");
                deniedFound = true;
            }
        }

        if (!deniedFound) {
            console.log("No attendees were denied entry.");
        }
        break;

    case 5:
        // Calculate festival statistics
        let validTickets = 0;
        let invalidTickets = 0;
        let under18 = 0;
        let vipCount = 0;
        let generalCount = 0;
        let totalSpend = 0;
        let biggestSpender = attendees[0];

        for (const person of attendees) {
            if (person.hasTicket === true) {
                validTickets++;
            } else {
                invalidTickets++;
            }

            if (person.age < 18) {
                under18++;
            }

            if (person.ticket === "VIP") {
                vipCount++;
            } else if (person.ticket === "General") {
                generalCount++;
            }

            totalSpend += person.spend;

            if (person.spend > biggestSpender.spend) {
                biggestSpender = person;
            }
        }

        console.log("=== FESTIVAL STATISTICS ===");
        console.log(`Total attendees: ${attendees.length}`);
        console.log(`Valid tickets: ${validTickets}`);
        console.log(`Invalid tickets: ${invalidTickets}`);
        console.log(`Attendees under 18: ${under18}`);
        console.log(`VIP attendees: ${vipCount}`);
        console.log(`General attendees: ${generalCount}`);
        console.log(`Total spend: R${totalSpend}`);

        if (attendees.length > 0) {
            console.log(
                `Average spend: R${(totalSpend / attendees.length).toFixed(2)}`
            );
            console.log(`Biggest spender: ${biggestSpender.name}`);
            console.log(`Highest amount spent: R${biggestSpender.spend}`);
        }
        break;

    case 6:
        // Find the biggest spender
        if (attendees.length === 0) {
            console.log("No attendees available.");
            break;
        }

        let topSpender = attendees[0];

        for (const person of attendees) {
            if (person.spend > topSpender.spend) {
                topSpender = person;
            }
        }

        console.log("===== TOP CUSTOMER =====");
        console.log(`Name: ${topSpender.name}`);
        console.log(`Amount Spent: R${topSpender.spend}`);
        console.log("Reward: Backstage Upgrade");
        break;

    case 7:
        // Close the festival
        console.log("=== CLOSING FESTIVAL ===");

        for (let minutes = 10; minutes >= 1; minutes--) {
            console.log(
                `Festival closes in ${minutes} minute${minutes === 1 ? "" : "s"}...`
            );

            if (minutes === 5) {
                console.log("WARNING: LAST ENTRY HAS ENDED.");
            }

            if (minutes === 2) {
                console.log("PLEASE PROCEED TO THE EXIT.");
            }
        }

        console.log("FESTIVAL CLOSED");
        break;

    default:
        console.log("Invalid option. Please select a number from 1 to 7.");
}

/* Submission Questions and Answers
    1. Why did you use && for festival entry?

    I used && because a person must be 18 or older and have a 
    valid ticket to enter the festival. Both conditions must be true.

    2. Where did you use else if and why?

    I used else if when checking ticket types, such as VIP and General. 
    It helps me check another condition if the first one is false.

    3. Why is switch appropriate for the control menu?

    I used switch because the menu has seven different options. 
    Each option performs a different task, which makes the code easier to read and understand.

    4. What is the difference between break in your search and continue in the security check?

    I used break in my search to stop the loop when I found the person I was looking for. 
    I used continue in the security check to skip people without valid tickets and move to the next person.

    5. How did you determine the biggest spender?

    I started with the first attendee as the biggest spender. 
    Then I compared everyone's spending amount and updated the biggest spender whenever I found 
    someone who spent more money.

    6. How did you prevent the venue from exceeding capacity?

    I set the venue capacity to five and counted each person who entered successfully. 
    When five people were inside, I used break to stop admitting more people.

    7. What would happen if another 20 attendees were added to the array?

    The program would check the new attendees too. It would update the statistics and 
    find the biggest spender based on the new data. The venue would still only allow five eligible people inside.

    8. Which part of the project required the most problem-solving?

    The festival control dashboard required the most problem-solving because I had to use a switch statement 
    to connect different options to the correct operations. 
    I also had to make sure the ticket checks and venue capacity worked correctly. 
*/

//   for (const [question, answer] of reflections) {
//     console.log(question);
//     console.log(`Answer: ${answer}\n`);
//   }

// // Run the selected menu option. Other commands can be run separately.
// if (require.main === module) {
//   const args = process.argv.slice(2);
//   if (args.includes("--surprise")) {
//     surpriseTest();
//   } else if (args.includes("--reflections")) {
//     showReflections();
//   } else if (args.includes("--all")) {
//     for (const challenge of [
//       challenge1, challenge2, challenge3, challenge4, challenge5, challenge6,
//       challenge7, challenge8, challenge9, challenge10, challenge11
//     ]) challenge();
//   } else {
//     runMenu(args[0]);
//   }
// }

// module.exports = {
//   attendees, challenge1, challenge2, challenge3, challenge4, challenge5,
//   challenge6, challenge7, challenge8, challenge9, challenge10, challenge11,
//   runMenu, surpriseTest, showReflections
// };
