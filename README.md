# Festival Access System

## Project overview

This is a beginner JavaScript project that simulates checking attendees at a festival. It uses an `attendees` array and JavaScript loops, conditions, counters, and a `switch` statement to manage access and display festival information.

## Files included

- `refilwe-segoe-festival-system.js` — the JavaScript file containing the attendee data, examples for Challenges 1–11, the Festival Control Dashboard, and the submission question answers.

## Requirements

- Install [Node.js](https://nodejs.org/) to run the JavaScript file from a terminal.

## How to run

1. Extract this ZIP file.
2. Open a terminal in the `festival-access-system-resubmission` folder.
3. Run the JavaScript file:

   ```bash
   node refilwe-segoe-festival-system.js
   ```

The dashboard currently sets `let option = 2;`, so it runs **Process Entry**. To test another menu operation, change the value of `option` near the bottom of the file to a number from `1` to `7`, save the file, and run it again.

## Dashboard options

1. **View Attendee Queue** — displays attendee details.
2. **Process Entry** — admits attendees who are at least 18 and have a valid ticket, with a venue capacity of five.
3. **View VIP Guests** — displays only VIP attendees who are at least 18 and have a valid ticket.
4. **View Denied Attendees** — displays attendees who do not meet the age or ticket requirements and explains the reason.
5. **View Festival Statistics** — calculates ticket counts, age counts, ticket-type counts, total spending, average spending, and the biggest spender from the attendee data.
6. **Find Biggest Spender** — finds the attendee with the highest `spend` value and displays the reward.
7. **Close Festival** — displays a countdown and the closing messages.

## Attendee data

The attendee list is declared near the top of the JavaScript file. Each attendee has a name, age, ticket type, `hasTicket` value, check-in status, and spending amount. You can change or add attendee objects to test how the program responds to different data.

## Notes

- The menu option is selected by changing the `option` variable in the source code; it does not currently prompt for interactive keyboard input.
- The standalone examples for Challenges 1–11 are mostly commented out. The active code is the Festival Control Dashboard and the submission questions at the end of the JavaScript file.
- The project archive currently contains this README and the JavaScript file only. It does not include separate `test.js`, `sample-output.txt`, or `SUBMISSION_NOTES.docx` files.
