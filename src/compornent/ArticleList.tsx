import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Grid, ImageList } from '@mui/material';
import { useWordFilter } from '../controller/useArticleFileter';
import ArticleCard from './ArticleCard';
import { IPageProps } from '../common/IPageProps';

interface IArticleListProps extends IPageProps {
  searchWords: string;
}

export default function ArticleList(props: IArticleListProps) {
  const {
    searchWords,
    setPageLoading,
    setError,
  } = props;
  const { data, error, isLoading } = useWordFilter(searchWords);
  setPageLoading(isLoading);
  if (!isLoading && error) {
    setError(error.toString());
  }
  const out = data ?
    data.map((val, idx) => (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`art-${idx}`} >
        <ArticleCard {...val}/>
      </Grid>
    ))
    : undefined;

  return (
    <Grid container spacing={2}>
      {out}
    </Grid>
  );
}