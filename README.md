# VectorShift Assessment - Parth Rathod
This project is build in order to complete the 4 tasks as per the take home assignment.

---

I will guide you through different aspects of the project! I had lots of fun building this one because it was a perfect mixture of **Data Structures and Alogirhtms** with **Web Development**

## Dependencies
- Tailwind CSS - Provides awesome class based styling!
- React-toastify - Toast provider to gracefully display output to the user on clicking submit
- React-textarea-autosize - Component to help manage input dynamically by gorwing and shrinking number of rows. Check [Textarea input builder](https://github.com/Parth0921/vectorshift-OA-frontend/blob/main/src/components/node-builder/nodeInputTextArea.js)


## Run Locally
1. Extract the code
2. `npm install`
3. ` npm run start`

---

## Project Structure
All the source code resides inside src folder. Brief explanation of each folder! I have tried my best to implement a maintainable structure that allows easy extensibility

**1. Components**
This consists of 3 main folders
1. node-builder - It contains all the **reusable components** needed to build any Node
2. nodes - **Nodes** buit using reusable components from node-builder and contains their own logic for user interactions.
3. ui - Consists of components that are on the homepage.

**2. Store**
1. NodeStore - Zustand store for handling logic for nodes on the canvas. I added an extra functionality for the nodes to be deleted and also for an edge to be deleted if we have source handle.

2. ThemeStore - Zustand store which manages theme for the user. It stores the theme in local storage to remember user's preference. If no local theme inside local storage it uses user's system theme as default!

**3. Utils**
Utility functions that are used in multiple files

1. Constants
    1. NodeList - A central place to manage nodes. The nodes array is used for the ui to render the toolbar, then also for reactflow component to let it know what type of nodes are present in the application. To add/delete a node simply add a new entry to the list and it will get updated everywhere!

2. Helper
    1. nodeHelper - A general helper function for all nodes
    2. NodeMapperUI - Builds node and their type object required for Reactflow based on the nodes list constant.

3. Hooks
    1. useFocus - Abstracted implementation to know which input/textarea is active and apply styles for user visibility. Pass the reference of input/textarea as the parameter and it manages event handlers under the hood. Also has a cleanup function to remove event handlers when the component gets unmounted from the DOM.

---

## Explanation of my implementation for different parts

### Part 1: Node Abstraction
My approach to solving this was thinking of nodes which have their own logic which they can pass to a component and it handles the rest. The logic is unique to the node but resuable component which are shared by every node. I thought of node-builder as building blocks for the node hence the name node-builder.

**Steps to add a new Node**
1. Create builder for the node if it doesn't exists inside node-builder.
2. Create a Node along with it's own logic and state to use the node-builder blocks to achieve desired configuration.
3. Add the newly created node to NodesList constant inside utils/constants/

Woohoo in just 3 steps a new node can be made!
Following this approach I have made 5 extra Nodes as per the Part 1 of the problem statement.
1. Note Node - This is not a part of pipeline but serves a purpose for documentation.

2. File Save Node  - Provides options to the user to save intermediate/output locally on their machine in image or text format.

3. Condition Node - Used when the user might want to branch out the logic and implement if --> then into their pipeline. User can pick if they had like to branch out or do nothing based on the condition.

4. API Node - Helps the user when they might want to make external api calls and use the response data in their pipeline. Node provides option to also make POST request upon which input textarea for body appears.

5. Data Transformation Node - Helps the user perform transformations on data. User can pick from image, pdf, csv, txt, and JSON.

### Part 2: Styling
I have picked a theme which resonates with a futuristic vibe for building Pipelines that I feel suits well with VectorShift. The application is available in 2 themes: *Light* and *Dark* this allows the user to work with their preferred theme. I have extended tailwinds colors with accent, primary, and text_secondary.

The nodes are styled with a gradient border which goes well with the coral background. The theme remains consistent throughout which makes the application blend together as cohesive product! Subtle animations are implemented on buttons for easy user access. Overall I hope the team reviewing at VectorShift likes the theme I came up with.

Light Theme
![Light](./screenshots/light.png)

Dark Theme
![Dark](./screenshots/dark.png)


### Part 3: Text Node Logic

For the sub-part 1 which was to increase the size of text node I first replaced input with Textarea component this allowed me to set resize the input. I used an external library called React-textarea-autosize which allowed me to grow and shrink size based on input. I also modified my node-wrapper component to allow growing till a maximum-height. Experimenting a little bit I found the sweet spot of 380px.

For the sub-part 2 I wrote a helper function that took the input string and extracted value inside curly brackets into an array of strings. Returning this array I could map over them and display dynamic handlers. I also used useCallback to cache the function which updated the internalNodes for Reactflow. I set it such that dynamic handler would re-render only when a new variable is added to the list and **not on every character typed**. 

One last thing I am not using **new states** but **computing the values from existing state** which resides inside TextNode. I try to follow this principle to prevent cluttering the states up which is unnecessary.

### Part 4: Backend Integration

I am making a POST request which contains the payload of nodes and edges after filtering unnecessary information. The backend only needs to know these are the nodes and these are the edges between them to compute if the graph formed is DAG or not. 

Edge cases are covered on the frontend which prevent the user from making API calls by clicking submit button when they have no nodes or no edges between nodes. I am displaying the error/success message using React-toastify in a user-friendly manner. 

The response from the output is shown which tells the user 
1. Number of nodes
2. Number of edges
3. If the graph is DAG or not

I had a small **suggesstion** - The backend also tells where the cycle has occurred this would help the user debug the node. With just a few changes I would be able to implement that!

---
# Thank you!