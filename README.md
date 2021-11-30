# Portfolio in React

[Visit my portfolio site!](https://dmartin4820.github.io/)

This is a version of my portfolio using React showcasing my interests, projects, and resume. The site also allows visitors to leave a message on the contact page which are sent to the server-side database for me to read.

## Tailwind

To style the site quickly and in a consistent way, I chose to use Tailwind CSS. The pattern for styling I chose to follow was to create strings containing Tailwind specific classes for specific elements I wanted to style. As an example below is the code for the portfolio header. 


Define variables to hold Tailwind specific classes as strings.
```javascript
const headerContainer =
  "flex flex-col items-center xl:flex-row xl:items-end xl:justify-evenly bg-green-300 sm:p-10 text-white";
const nameHeading = "text-5xl m-2 sm:m-0 sm:text-6xl";
const navContainer = "m-2 md:m-0";
const navList = "flex flex-col md:flex-row justify-center md:mt-5";
```
Attach those Tailwind classes to the elements in the React component so that the styling is applied.
```javascript
function Header() {
  const currLocation = useLocation();

  return (
    <div className={headerContainer}>
      <div>
        <h1 className={nameHeading}>Denzal Martin</h1>
      </div>
      <div className={navContainer}>
        <ul className={navList}>
          {navItems.map((navItem, i) => {
            return (
              <NavItem
                content={navItem.content}
                href={navItem.href}
                active={currLocation.pathname}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
```

With Tailwind, it's also easy to setup mobile friendly behavior. The prefixes sm, md, and xl specify breakpoints for certain styling. For example, sm is a breakpoint at 640px where widths above this will have the associated Tailwind class applied.

## Projects and Resume

Currently, my projects and resume page are fetching data from server I setup for my previous portfolio. This allows me to maintain previous work I had where the skills were associated to projects using Sequelize. The issue with this is that it takes time to start up and subsequently the projects and resume page take a while to load. As a temporary fix, I display text indicating loading, but I hope to reduce this load time by deploying completely on Heroku with a client and server together. This will also still take some time to load, but once the initial visit to the page is made, the projects and resume page should be available.

In order to make the projects page, I make a simple fetch, set state with data from the fetch, and display the projects:

```javascript
async function getProjects() {
  const results = await fetch(url);
  const data = await results.json();
  setLoading(false);
  setProjects(data);
}
```

```javascript
return (
  <div className={projectContainer}>
    {loading
      ? "Loading Projects..."
      : projects.map((project, i) => {
          return <Project {...project} key={i} />;
        })}
  </div>
);
```

The resume page is similar in implementation to the projects page.

## Contact Me Page

The contact me page allows anyone visiting to send me a message that I can view in the server-side database (currently disabled). To do this, I implement basic form handling by creating objects holding a state variables and set methods for each input on the page:

```javascript
const nameInput = {
  value: useState(""),
  wasClicked: useState(false),
  isActive: useState(false),
  style: useState(inputStyleNoWarn),
};

const emailInput = {
  value: useState(""),
  wasClicked: useState(false),
  isActive: useState(false),
  style: useState(inputStyleNoWarn),
};

const messageInput = {
  value: useState(""),
  wasClicked: useState(false),
  isActive: useState(false),
  style: useState(messageStyle),
};
```
By doing this I can keep track of each input and certain pieces of state associated with each input. Upon revisiting this, a generic input could be made such as a factory function that can make the code more DRY. 

**Handle change of input:**
To handle changes to a specific input element in a generic way, a function called `getInputHandler` is used to determine which input is being dealt with:

```javascript
function getInputHandler(e) {
  const { name } = e.target;
  let input = {};
  name === "fullName"
    ? (input = nameInput)
    : name === "email"
      ? (input = emailInput)
      : (input = messageInput);
  return input;
}

// Changes value state
function handleChange(e) {
  const inputHandler = getInputHandler(e);
  inputHandler.value[1](e.target.value);//Set input state with user input
}
```

**Handle empty input fields:**
Whenever the user clicks into an input field and exits without entering anything, they are notified that the input is required to submit the message. This behavior is handled by using a function called `handleFocus` which uses the `isActive` state (i.e. user is currently focused on an input) and the `wasClicked` state of the input:

```javascript
// Change active status of an input and set wasClicked to track whether error is displayed
function handleFocus(e) {
  const { name, value } = e.target;
  const inputHandler = getInputHandler(e);
  e.type === "focus" //Set active and wasClicked state if user clicks into input element
    ? inputHandler.isActive[1](true)
    : inputHandler.isActive[1](false) || inputHandler.wasClicked[1](true);
}
```

By setting both these boolean states, an `Alert` component can be conditionally rendered notifying the user that the input is required:

```javascript
{
  nameInput.wasClicked[0] && nameInput.value[0] === "" 
    ? <Alert inputName="Full Name" /> 
    : <></>;
}
<input
  value={nameInput.value[0]}
  name="fullName"
  type="text"
  placeholder="Name"
  onChange={handleChange}
  onFocus={handleFocus}
  onBlur={handleFocus}
  className={nameInput.style[0]}
/>;
```

## Acknowledgements

Thank you to the UC Berkeley Bootcamp staff for providing the resources to build a React site.

## Contributors

Denzal M.

## Questions

Find my contact details at [GitHub](https://github.com/dmartin4820)

Or contact by email: dom4822@yahoo.com
