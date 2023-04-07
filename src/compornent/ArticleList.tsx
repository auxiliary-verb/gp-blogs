import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Container, Grid, ImageList } from '@mui/material';
import { useWordFilter, IFilterResult } from '../controller/useArticleFileter';
import ArticleCard from './ArticleCard';
import { IPageProps } from '../common/IPageProps';

interface IArticleListProps extends IPageProps {
  searchWords: string;
  useFilter: (searchWords: string) => IFilterResult;
}

export default function ArticleList(props: IArticleListProps) {
  const {
    searchWords,
    setPageLoading,
    setError,
    useFilter,
  } = props;
  const { data, error, isLoading } = useFilter(searchWords);
  setPageLoading(isLoading);
  if (!isLoading && error) {
    setError(error.toString());
  }
  // sort は作成日を降順
  const out = data ?
    data.sort((a, b) => Date.parse(a.createdDate) > Date.parse(b.createdDate) ? -1 : 1).map((val, idx) => (
      <Grid item xs={12} sm={6} key={`art-${idx}`} >
        <ArticleCard {...val} />
      </Grid>
    ))
    : undefined;

  return (
  <Grid container spacing={2}>
    {out}
  </Grid>
);
}