import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip, Container, Divider, Grid, Stack } from '@mui/material';
import { useContent } from '../controller/useContent';
import type { } from '@mui/material/themeCssVarsAugmentation';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IArticleCardProps {
  title: string;
  thumbnail: string;
  createdDate: string;
  tags: string[];
  name: string;
}

export default function ArticleCard(props: IArticleCardProps) {
  const {
    title,
    thumbnail,
    createdDate,
    tags,
    name,
  } = props;
  const router = useRouter();
  const content = useContent(thumbnail);
  const date = new Date(createdDate);
  const dateStr = `${date.getFullYear()}.${date.getMonth().toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
  const href = {
    pathname: '/articles',
    hash: name,
  };

  return (
    <Card>
      <CardActionArea component={Link} href={href}>
        <CardMedia
          component="img"
          image={content}
          alt={thumbnail}
        />
        <CardContent>
          <Typography variant="h5">
            {title}
          </Typography>
          {
            tags.map((val, idx) => (
              <Chip
                component={Link}
                label={val}
                key={`title-tag-${idx}`}
                color="primary"
                clickable
                href={{
                  pathname: '/tag',
                  query: {
                    filter: val,
                  },
                }}
              />
            ))
          }
          <Typography variant="body2">
            {dateStr}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}