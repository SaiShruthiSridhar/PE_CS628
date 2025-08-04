A ToDo List using React. 
Input:
The user can enter the task details in the box.  This field accommodates any description of task that the user wants to keep. Next to the input, there is an add task button. When pressed, the state of the currently entered value then transfers into the implementation of the application so that this list of tasks can be added to as they are completed.

Process:
After the user sends a task the application ensures they do not send an input linked to an empty input, then it adds the request to an array that is controlled by the `useState` hook. This list is the present list of activities. When the state is structured, the list is re-rendered with the help of the `.map()` method. Every task is represented with the help of a reusable component (`TodoItem`) with the description of the task and the button with the text of the word "Delete". When a user clicks the delete button a removal of the selected task is done in the state by filtering it out which causes an immediate update of the UI. The reason is that logic is divided into well-factored parts: `App.js` is input and state logic, `TodoList.js` is line list, `TodoItem.js` is single line display and delete.

Output:
The  screen displays a list of all the activities that have been added by the user. In the task list, there is a delete button besides each task. A new task that is added appears immediately in the list. Upon clicking the "Delete button, the task is removed in the list.