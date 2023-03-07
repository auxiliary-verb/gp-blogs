import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip, Container, Divider, Grid, Stack } from '@mui/material';
import { useContent } from '../controller/useContent';

interface IArticleCardProps {
  title: string;
  thumbnail: string;
  createdDate: string;
  tags: string[];
}

export default function ArticleCard(props: IArticleCardProps) {
  const {
    title,
    thumbnail,
    createdDate,
    tags,
  } = props;
  const content = useContent(thumbnail);
  const date = new Date(createdDate);
  const dateStr = `${date.getFullYear()}.${date.getMonth().toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`

  return (
    <Card>
      <CardActionArea>
      <Container fixed>
        <CardMedia
          component="img"
          sx={{ maxHeight: 120 }}
          image={content}
          alt={thumbnail}
        />
        </Container>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {
            tags.map((val, idx) => (
              <Chip label={val} key={`title-tag-${idx}`} />
            ))
          }
          <Typography variant="body2" color="text.secondary">
            {dateStr}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}