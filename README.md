# taskManager

A task management application to control the work for you and your colleagues.

**Login page**:

The login page consists of two inputs that can get any value.

<img src="https://user-images.githubusercontent.com/97622278/182082982-ecb49970-32f3-4c0c-9a15-8c2fee5b0f4c.PNG" width="400"/>

**Drawer navigation**: 

The application uses drawer navigation as the main navigation method.
In the drawer navigation the "username" entered in the login page will be displayed. 
"All Tasks" will display all the tasks that are incomplete, "New Task" will navigate the user to a task creation page, 
"History" will display the user all the completed tasks, "My Tasks" will display the user all the tasks associated with his "username" and the "Logout" button will reset the current user and send the user back to the login screen.
The "+" button inside the header is another way to easily navigate to the task creation screen.

<img src="https://user-images.githubusercontent.com/97622278/182083153-c6ac187a-a6e5-44af-8e89-b3c2a221fc71.PNG" width="400"/>

**All Tasks**: 

"All Tasks" screen will display all the tasks avialable that are incomplete. 
Each task will display the title, description and the user responsible for the task completion. 
When a user presses a task it will unhide three button that change the task status. 
Tasks by default have an "Unknown" status to indicate the user haven't interacted with the task.

<img src="https://user-images.githubusercontent.com/97622278/182083778-8c6dd1bf-fb00-4e51-94ab-4f9a0fe3ff78.PNG" width="400"/>

In order to delete a task a user need to swipe to the left on the desired task and press the button that pops up.

<img src="https://user-images.githubusercontent.com/97622278/182084201-33176bc8-fbda-4b51-8809-4cec18868479.PNG" width="400"/>

**New Task**: 

The "New Task" screen has three inputs one for the title ,one for the description and one for the worker's name (username).
When the user that created the task clicks "Add" the task is added to the "All Tasks" screen and to the respective user personal tasks.

<img src="https://user-images.githubusercontent.com/97622278/182084615-bd68e726-a8f5-4637-a166-b3d5894d48e9.PNG" width="400"/>

**History**:

When a user clicks on the "Done" button on a task, the task will automatically move to the "History" screen.

<img src="https://user-images.githubusercontent.com/97622278/182084797-167a96ab-6a32-49a9-8889-fd09ffd23263.PNG" width="400"/>

**My Tasks**: 

In the "My Tasks" screen a user can see and manage the task associated with the username he or she entered in the "Login" screen. 
The interaction with the tasks work the same as in the "All Tasks" screen.

<img src="https://user-images.githubusercontent.com/97622278/182085677-cc6aba6b-8f0d-4a9b-9b04-50da45de69bc.PNG" width="400"/>

**Notes**: 

App wide state management is managed with the ContextAPI.
The application is a Front-End application only a backend server is to be added.








