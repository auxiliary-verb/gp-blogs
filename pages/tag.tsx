import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/compornent/Link';
import ProTip from '../src/compornent/ProTip';
import Copyright from '../src/compornent/Copyright';
import { IPageProps } from '@/src/common/IPageProps';
import ArticleList from '@/src/compornent/ArticleList';
import { useRouter } from 'next/router';
import { useTagFilter } from '@/src/controller/useArticleFileter';

export default function Home(props: IPageProps) {
  const router = useRouter();
  const { filter } = router.query;
  return (
    <ArticleList {...props} searchWords={filter?.toString() || ""} useFilter={useTagFilter}/>
  );
}
