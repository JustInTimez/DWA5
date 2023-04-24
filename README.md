# DWA5 

DWA 5 Challenge from CodeSpace:
This exercise provides user stories in the Gherkin syntax, covered previously.

Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

Unresolved Stories

- Scenario: Dividing numbers result in a decimal number

    - [X] GIVEN that the submit button is pressed
    - [X] WHEN 20 is entered into the first input
    - [X] AND 3 is entered into the second input
    - [X] THEN the number 6 with no decimal should be shown

- Scenario: Validation when values are missing

    - [X] GIVEN that the submit button is pressed
    - [X] WHEN either or both inputs are empty
    - [X] THEN the divisions should not be done
    - [X] AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.

- Scenario: An invalid division should log an error in the console

    - [X] GIVEN that the submit button is pressed
    - [X] WHEN 20 is entered into the first input
    - [X] AND -3 is entered into the second input
    - [X] THEN the division should not be done
    - [X] AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
    - [X] AND an error should be logged in the browser console that shows the call stack
    - [X] BUT the program should not crash entirely

- Scenario: Providing anything that is not a number should crash the program

    - [X] GIVEN that the submit button is pressed
    - [X] WHEN ‘YOLO’ is entered into the first input
    - [X] AND ‘+++’ is entered into the second input
    - [X] THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
    - [X] AND an error should be logged in the browser console that shows the call stack.
