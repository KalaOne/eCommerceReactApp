import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

type Props = {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <Card elevation={3} sx={{ width: 250, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <CardMedia 
            sx={{ height: 240, backgroundSize: 'cover' }}
            image={product.imageUrl}
            title={product.name}
        />
        <CardContent>
            <Typography
                gutterBottom
                sx={{textTransform: 'uppercase', fontWeight: 'bold'}}
                variant="subtitle2">
                {product.name}
            </Typography>
            <Typography
                variant="h6"
                sx={{color: 'secondary.main'}}>
                    £{(product.price / 100).toFixed(2)}
            </Typography>
            <CardActions
                sx={{justifyContent: 'space-between', marginX: -2}}>
                    <Button>Add to cart</Button>
                    <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
            </CardActions>
        </CardContent>
    </Card>
    )
}