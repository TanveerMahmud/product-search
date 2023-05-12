import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { Component } from 'react'

class Product extends Component {
  render() {
    const { name, description, price } = this.props.product
    return (
      <>
        <Grid item xs={4}>
          <Card variant="outlined" sx={{ bgcolor: '#dbdbdb' }}>
            <CardContent>
              <Typography variant="h5" color="primary" gutterBottom>
                {name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {description}
              </Typography>
              <Typography mt="20px">
                Price:&nbsp;
                <Box component="span" fontWeight="800">
                  ${price.toFixed(2)}
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    )
  }
}

export default Product
