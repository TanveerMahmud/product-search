import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Component } from 'react'
import Product from '../Product'

const products = [
  {
    name: 'Leather Jacket',
    category: 'jackets',
    description:
      "Whether it's to protect from wind or just to look super cool, this jacket has you covered.",
    price: 400,
  },
  {
    name: 'Wool cardigan',
    category: 'jackets',
    description:
      'Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.',
    price: 80,
  },
  {
    name: 'Striped business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this striped shirt.',
    price: 50,
  },
  {
    name: 'Short-sleeved polo shirt',
    category: 'shirts',
    description: 'The best shirt you can get for that business-casual look.',
    price: 30,
  },
  {
    name: 'Plain business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this plain business shirt.',
    price: 50,
  },
  {
    name: 'Suit Jacket',
    category: 'jackets',
    description: 'Wear it with jeans or suit pants, it works with both!',
    price: 120,
  },
  {
    name: 'Suit Trousers',
    category: 'pants',
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    name: 'Denim Jeans',
    category: 'pants',
    description:
      'A timeless classic, these denim jeans will never go out of style.',
    price: 80,
  },
  {
    name: 'Pencil Skirt',
    category: 'skirts',
    description:
      'A classy work-ready skirt that will make you feel like a million bucks.',
    price: 100,
  },
  {
    name: 'Cotton flowy skirt',
    category: 'skirts',
    description:
      'For those warm summer days when you just need to feel the breeze on your legs.',
    price: 45,
  },
]

class ProductList extends Component {
  state = {
    filteredProducts: null,
  }

  showFilteredProducts = (category) => {
    // if 'All products' button is clicked the original data is passed onto as current state, otherwise filtered data is passed based on the button clicked and the argument passed onto the function called on onclick
    if (category === 'All') {
      this.setState({ filteredProducts: products })
    } else {
      const filterProducts = products.filter(
        (product) => product.category === category
      )
      this.setState({ filteredProducts: filterProducts })
    }
  }

  //sorting -  conditionally updating the state with sorted data
  sortItems = (value) => {
    if (value === 'descending') {
      this.state.filteredProducts
        ? this.setState({
            filteredProducts: this.state.filteredProducts.sort(
              (a, b) => a.price - b.price
            ),
          })
        : this.setState({
            filteredProducts: products.sort((a, b) => a.price - b.price),
          })
    } else {
      this.state.filteredProducts
        ? this.setState({
            filteredProducts: this.state.filteredProducts.sort(
              (a, b) => b.price - a.price
            ),
          })
        : this.setState({
            filteredProducts: products.sort((a, b) => b.price - a.price),
          })
    }
  }

  // getting the value from the search bar and filtering products based on the value and then parsing the new array to the current state
  searchProducts = (e) => {
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value)
    )
    this.setState({ filteredProducts: filterProducts })
  }

  render() {
    // if the current state is null mapping is done using the orignal data, but when the current state is not null then mapping is done using the date in the current state
    const productList = this.state.filteredProducts
      ? this.state.filteredProducts.map((product) => (
          <Product key={product.name} product={product} />
        ))
      : products.map((product) => (
          <Product key={product.name} product={product} />
        ))

    return (
      <>
        <Container sx={{ textAlign: 'center', m: '20px auto' }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Welcome to SuperCool Clothing
          </Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={() => this.showFilteredProducts('shirts')}>
              Shirts
            </Button>
            <Button onClick={() => this.showFilteredProducts('pants')}>
              Pants
            </Button>
            <Button onClick={() => this.showFilteredProducts('skirts')}>
              Skirts
            </Button>
            <Button onClick={() => this.showFilteredProducts('jackets')}>
              Jackets
            </Button>
            <Button onClick={() => this.showFilteredProducts('All')}>
              All products
            </Button>
          </ButtonGroup>
        </Container>

        <Box textAlign="center">
          <TextField
            label="Search products"
            variant="outlined"
            size="small"
            sx={{ textAlign: 'center' }}
            onChange={this.searchProducts}
          />
        </Box>
        <Box textAlign="center">
          <FormControl size="small" sx={{ m: 2, minWidth: '150px' }}>
            <InputLabel id="sorting">Sort by price</InputLabel>
            <Select labelId="sorting" label="Sort by price">
              <MenuItem
                value="descending"
                onClick={() => this.sortItems('descending')}
              >
                Low to high
              </MenuItem>
              <MenuItem
                value="ascending"
                onClick={() => this.sortItems('ascending')}
              >
                High to low
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box m="20px">
          <Grid container spacing={3}>
            {productList}
          </Grid>
        </Box>
      </>
    )
  }
}

export default ProductList
