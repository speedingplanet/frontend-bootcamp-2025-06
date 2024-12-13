# Front-end Labs

## HTML Exercises

### Zippay App: Home page

Starting command: `npm run dev`

We have a home page that points to "To-dos", which we will build together, "Zippay" which you will build, and "Zippay Finished" which you can use to see completed versions of the Zippay app.

Working in `zippay/index.html`:

- Add the basic strcture of an HTML document. Maybe use Emmet shortcuts to help?
- In the `body` of the HTML document, add an `h1` element
  - The content of the element should be `The ZipPay app`.
- Add an `hr` element below it.
- Below the `hr` element, add a paragraph with some placeholder text, maybe lorem ipsum or just "Content will eventually go here."
- All set! Take a look at http://localhost:5173/zippay, or whatever port your server opened on, to see the results.

Leave `npm run dev` running.

### Home Page: Navbar with Text

Starter command: Open up another terminal and run `npm run begin 2`

There are now several placeholder files in the `zippay` folder. Let's build a navigational list, a navbar, to link to those pages

Working in `zippay/index.html`:

- Below the `h1` but above the `hr` add a `p` element.
- In the `p` element, add the following lines, separated by `br` tags for line breaks
  - Send/Receive
  - Account settings
  - Balance
  - Search
  - Split the bill
- Check to see that each shows up on a line by itself
- You're done!

### Home Page: Navbar as a list

No starting command here, keep working with the previous code

The navbar lacks semantic meaning. That is, it's just a few lines of text: it could be a poem, a list of pages, or gibberish. We should organize it as a unit.

Working in `index.html`, remove the `br` tags. Make each line a list item in an unordered list. To be clear, there should be _one_ unordered list, with the _five_ list items under it. When you're done, check your page in the browser to see what it looks like.

Note: Eventually, we will do two things: remove the bullets, and lay out the list horizontally. That will happen when we get to CSS. For now, we are working within the limitations of HTML.

### Home Page: Navbar with Links

No starting command here, keep working with the previous code

Our navbar is a little bit limited, in that it does not take the user anywhere. Let's change that.

Working in `index.html`:

- Turn each list item into a link, as follows:
  - Send/Receive: send-receive.html
  - Account settings: account-settings.html
  - Balance: balance-and-payments.html
  - Search: search.html
  - Split the bill: split-the-bill.html
- You will not be deleting the list items! The links should go _inside_ the list items
- Check to see that the links work and go to the appropriate pages

### Home Page: Semantic updates

Starter command: Keep using your code, or, for a fresh start, run `npm run begin 3`

The home page needs a little bit more organization:

- The `h1` should be inside a `header`
- Wrap the `ul` in a `nav` tag to better indicate its semantic role
- Below the `nav`, add a `main` element. This will be where the main content of the pages goes.
  - Within `main`, add an `h2` with the content "ZipPay Home"
- Below the `main`, add a `footer` with the following information:
  - "Copyright 2024, ZipPay, incorporated."
  - Put an `hr` above this (but still inside the footer) to separate it from the rest of the page.
- Check your page to see that the layout works.

### Balance: Recent Transactions

Starter command: Keep using your code, or, for a fresh start, run `npm run begin 4`

We want to add a "Recent Transactions" section to the "Balance" page `balance-and-payments.html`. We will use an HTML table to list recent transactions.

First, we should take care of the basics with respect to layout:

- Copy the header, navbar, and footer over from `index.html`. Place them appropriately within the `body` of the HTML document
- In `main`, add or change the `h2` to read `Balance`
- Below that `h2`, add two `section`s:
  - One with a paragraph that says "Current Balance"
  - The other with an `h3` that says "Recent Transactions"
- Check that the page layout looks the way you would expect it to.

Onto the details... Here's the data set:

```csv
id,payorId,payeeId,datePaid,amount,reason
8,wvancastele6i,mloveguardhr,2022-09-06,51.37,sed tristique
91,wvancastele6i,ddunabie5j,2023-07-23,10.77,nec nisi vulputate
235,wvancastele6i,rbottell93,2024-02-26,79.09,eu tincidunt
494,wvancastele6i,mwallend6,2023-06-12,38.05,nunc donec quis orci eget orci vehicula condimentum curabitur
765,wvancastele6i,pbann7c,2022-06-01,89.99,turpis donec posuere metus vitae ipsum aliquam non mauris
```

We will assume the user is `wvancastele6i`. In the table we want to display:

- The payee (as the userid)
- The payment date
- The amount
- The reason (it's the pseudo-latin lorem ipsum text)

Remember that the structure of a table, generally, is

```html
<table>
	<thead>
		<tr>
			<th>Header for column 1</th>
			<th>Header for column 2</th>
			<th>Header for column 3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Data for row 1, column 1</td>
			<td>Data for row 1, column 2</td>
			<td>Data for row 1, column 3</td>
		</tr>
		<tr>
			<td>Data for row 2, column 1</td>
			<td>Data for row 2, column 2</td>
			<td>Data for row 2, column 3</td>
		</tr>
		<!-- And so on -->
	</tbody>
</table>
```

You will need a table headers section, with the column headers, and then a table row for each of the rows of data.

### Lab 5: Send/Receive Payments: Add Form

The Send/Receive Payments `send-receive.html` page is a placeholder. Let's make that better!

First, layout, same as with `balance-and-payments.html`:

- Copy the header, navbar, and footer over from `index.html`. Place them appropriately within the `body` of the HTML document
- In `main`, add or change the `h2` to read `Send/Receive Payments`
- Check that the page layout looks the way you would expect it to.

Onto the form:

1. In the `main` element, add a `form`. No need for an `action` attribute
2. For each of the below, add a `label` and the appropriate form field (usually an `input` element). Consider wrapping each label+input combo in its own `div`.

- Account
- Recipient
- Amount
- Reason

3. Add a submit button labeled "Send".
4. Check out the form in the browser. Don't worry about the layout, which we will fix soon.

### Lab 6: Send/Receive Payments: Improve form with validations

Let's make the form a little bit better. We will add some validations to the form. After each of the validations, try submitting the form to see if the validation is successful.

1. The "Account" field should be a `select` list if it isn't already
1. It should also default to the current user's default account. We don't have that information right now, so you can set the default value to "Default account"
1. Also add a few other options like "Checking" and "Savings"
1. The Recipient can't be empty. All of our usernames are at least four characters long. Validate this field accordingly.
1. The Amount is also required, must be positive, have only two decimal places, and be between $0.01 and $1000.00
1. The Reason can't be longer than 255 characters

## CSS Exercises

### Lab 8: Navbar: CSS Setup

Currently, the navbar is a bulleted list, not ideal for a navbar. Let's improve it as follows:

1. Create a file `navbar.html`. We will use this as our baseline. It can be a basic HTML page.
1. Edit `index.html` to add a link to `navbar.html`
1. Create a second file `navbar.css` which will have all the CSS for navbar.html`
1. Link `navbar.css` in `navbar.html`
1. Also link `/css/reset.css` in `navbar.html`. Notice how `navbar.html` looks different now
1. Best practices first: add a class to the `nav` element and call it `navbar-list`.
1. Change the appropriate elements under `.navbar-list` so that the following are true

- List items do not have bullets
- Anchors do not have underlines
- Choose a color for list items; suggestion: #3a6bbf

1. Take a look at your page and see if you have the changes you want

### Lab 9: Navbar: Display

We're going to change the way the navbar elements are displayed. Keep working in `navbar.html` and `navbar.css`.

1. Remove any padding from the unordered list
1. Target the appropriate element in the unordered list so that it displays in-line
1. Update the padding for list items to something appropriate so there's a little horizontal space on either side
1. Try getting the list items to equally take up space in the width of the screen
1. Center the text in each element in the navbar

### Lab 10: Navbar: Pseudo-classes

We will use psuedo-classes to respond to user interactions

1. Turn off the behavior where a visited link has a different color from an unvisited link
1. When hovering over one of the navbar elements, swap the background and text colors (for example, if it was originally black text on a white background, make it white text on a black background)

### Lab 11: Navbar: Flexbox

There are limitations to using `inline-block`. Let's swap it out for flexbox

1. Set the display to flex on the appropriate element
1. Size the elements so that they expand to fill the available space
1. Modify the container to have _space around_ the various elements
1. Put a small _gap_ between the various elements

## Lab 12: Putting it all together. Part 1: Form HTML

Now that we know grids forms pretty well, let's add a form all at once. Account settings should have the following:

1. **First Name** field: required, minimum length 2, alphabetical characters, spaces and dashes only. [The format is a challenge, feel free to come back to it when you get the rest of the form done]
2. Same for **Last Name**
3. Same for **City**
4. Add a **State/Province** field as a drop-down of US states and Canadian provinces. Don't write the drop-down yourself. Search on the internet for something like "html us states select list" and copy and paste that. Add on Canadian provinces as well.
5. **Postal Code**: This could be challenging
6. **Email**: Is there a custom field that could be helpful here?
7. **Telephone**: Similar?
8. **Account type**: Select from one of "Personal", "Corporate" or "Other". Is there a form widget that could help here? Select "Personal" by default.

### Lab 12: Putting it all together. Part 2: Grid Layout

The Account Settings form has the functionality we need, but does not have any sort of useful or pleasing layout.

1. Copy our new, better navbar into the account-settings.html page.
2. Organize the HTML of the form you have chosen so that it will work with a grid. Some questions:

- Does each form element have to be in a div?
- Does each label have to be in a div?
- Do we wrap the form element plus the label into a container div, or leave them as-is?
- Do you see any other particular gotchas?

3. Design a CSS grid for the form. There are many paths to success here.
   - A suggestion: think of the grid as two columns, the left column could hold the labels. The right column could hold the form fields.
   - Alternatively, a four column grid, which prizes monitor space over flexibility
   - Or maybe use the grid to group like elements (name info goes together, so does address info, for example)
   - Use the grid layout that makes most sense to you. There are many possible variations!

### Bonus Lab: Navbar: Fonts and icons

We'll work on this one together.
