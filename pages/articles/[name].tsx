import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../../src/compornent/Link';
import ProTip from '../../src/compornent/ProTip';
import Copyright from '../../src/compornent/Copyright';
import ReactMarkdown from 'react-markdown';
import { useArticle } from '@/src/controller/useArticle';
import WebInfo from '@/src/compornent/WebInfo';
import { useContent } from '@/src/controller/useContent';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { IPageProps } from '@/src/common/IPageProps';

export default function Article(props: IPageProps) {
  const {setPageLoading, setError} = props;
  const router = useRouter();
  const { name } = router.query;
  const articleName = (typeof name === 'string') ? name : "";
  const article = useArticle(articleName);
  const content = useContent(article.data?.thumbnail || "");
  React.useEffect(()=>{
    setPageLoading(article.isLoading)
  },[setPageLoading, article.isLoading])

  React.useEffect(() => {
    if (articleName === "") {
      console.log(router.query);
      router.push('/404');
    }
  }, [articleName, router])
  return (
    <Container>
      <WebInfo subtitle={article.data?.title} description={article.data?.description} thumbnail={content}/>
      <ReactMarkdown>
        {article.data?.body || ""}
      </ReactMarkdown>
    </Container>
  );
}
