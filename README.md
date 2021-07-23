# Casai Frontend exercise

## Instructions
The exercise consists of creating a site to adopt puppies.

The site shows the catalog of available puppies, where you can add puppies to your "adoption cart", it also has the dogs that you have adopted, and the "adoption cart" where the dogs selected for adoption are displayed and the user can adopt.

The catalog of dogs available must be 3 columns, and the page of the adopted dogs is the same, only without the option to adopt the puppy.

When a puppy is adopted, you must move from the adoption page to the adopted puppy page.
 
Hints:
- The initial catalog enpoint is`http://localhost:8080/dogs`
- To raise the endpoint with the initial catalog run:
  `npm run server`  
- Think about how to make the catalog consultation more efficient, with each page load..
- Use standard measurements for layout sizes (large desktop, desktop, tablet, mobile)

Extras:
- Add paging (show 10, 20, 50) and update the page number controls according to the number of active elements
- Use mobile first approach
- Optimize the size of the initial site load
- Maintain the status of the catalog (available and adopted) even when the page is refreshed
- Reuse code properly
- Automate actions to send clean commits to the 
- Add properly unit test


Technologies and recommendations
- Use the latest version of create-react-app with typescript
- Do not use css libraries (bootstrap, tailwind, etc), but preferably use styled-components and SCSS, the use of the latter will be valued
- Use the best practices in both HTML, CSS, Javascript and React (functional components and Hooks) since the use of them will be valued
- You can install any package or library that you think is convenient
- Think about how to make the code more efficient and how it can be reused, apply clean code, solid, or other design patterns that you know, apply [React Way] (https://reactjs.org/docs/thinking-in-react.html ) to develop the code

