## Product Search

You're building an online store! The store sells a variety of business and casual clothes, such as pants, skirts, shirts and jackets.

All the product information is below in a JavaScript array that you can use in your code.

### Part 1 - list the products

Create two components `ProductList` and `Product`.

The `Product` component should show all the details about a single product,
formatted nicely with headings and displaying the price in dollars.

The `ProductList` component should use the `Product` component to list all of the available products.

### Part 2 - Filter by category

Create 4 buttons or links at the top of the `ProductList` component:

- `Shirts`
- `Pants and skirts`
- `Jackets`
- `All products`

Use those three buttons and some React state to filter the list of products to only show the products in that category.

The `All products` button should remove the filter and show all products again.
This should also be the starting-state of the `ProductList` component.

### Extensions

Text search

- Add a text box in the `ProductList` component to act as a search box
- When searching, show only the products that include the search text in the name or description.

Sort by price

- Add an option to sort the products by price, both lowest-to-highest and highest-to-lowest.
