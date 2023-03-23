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
  const {data, error, isLoading, setName} = useArticle(articleName);
  const content = useContent(data?.thumbnail || "");
  const [isReady, setIsReady] = React.useState(router.isReady)

  React.useEffect(()=>{
    if(isReady !== router.isReady){
      setIsReady(router.isReady);
    }
    setPageLoading(isLoading || !isReady)
  },[setPageLoading, isLoading, isReady, router])

  React.useEffect(()=>{
    setName(articleName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[articleName])

  React.useEffect(() => {
    if (!isLoading && error !== "") {
      setError(error);
      router.push('/404');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error])
  return (
    <Container>
      <WebInfo subtitle={data?.title} description={data?.description} thumbnail={content}/>
      <ReactMarkdown>
        {data?.body || ""}
      </ReactMarkdown>
    </Container>
  );
}
