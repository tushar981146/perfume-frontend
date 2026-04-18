import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard({product}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (product && (product._id)) {
      navigate(`/product/${product._id }`);
    }
  };


  return (
    <Card 
      sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        cursor: product ? 'pointer' : 'default',
        '&:hover': product ? {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
        } : {}
      }}
    >
      <div className='relative overflow-hidden bg-gray-200'>
        <CardMedia
          component="img"
          alt={product?.name || "premium fragrance"}
          sx={{
            height: { xs: 160, sm: 180, md: 200 },
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
          image={product.productImage}
        />
      </div>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 600 }}
        >
          {product.brandName}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', sm: '0.95rem' },
            lineHeight: 1.5
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardContent sx={{ pt: 0 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#b45309',
            fontWeight: 'bold',
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
        >
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0, gap: 1 }}>
        <Button onClick={handleClick} size="small" sx={{ fontSize: '0.75rem' }}>View Details</Button>
      </CardActions>
    </Card>
  );
}
