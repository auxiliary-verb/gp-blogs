import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/compornent/Link';
import ProTip from '../src/compornent/ProTip';
import Copyright from '../src/compornent/Copyright';
import ReactMarkdown from 'react-markdown';
import { useArticle } from '@/src/controller/useArticle';
import WebInfo from '@/src/compornent/WebInfo';
import { useContent } from '@/src/controller/useContent';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { IPageProps } from '@/src/common/IPageProps';
import { useHash } from '@/src/controller/useHash';
import { HeadingProps } from 'react-markdown/lib/ast-to-react';

export default function Article(props: IPageProps) {
  const {setPageLoading, setError} = props;
  const router = useRouter();
  const [hash, setHash] = useHash();
  const name = hash;
  const articleName = (typeof name === 'string') ? name : "";
  const {data, error, isLoading, setName} = useArticle(articleName);
  const content = useContent(data?.thumbnail || "");
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(()=>{
    if(isReady !== router.isReady){
      setIsReady(router.isReady);
    }
    setPageLoading(isLoading || !router.isReady)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setPageLoading, isLoading, router.isReady])

  React.useEffect(()=>{
    setName(articleName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[articleName])

  React.useEffect(() => {
    if (!isLoading && error !== "" && isReady) {
      console.log('error')
      setError(error);
      router.replace('/404');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error, isReady]);

  const hVariant :("h1" | "h2" | "h3" | "h4" | "h5" | "h6")[] = ["h2","h3","h4","h5","h6","h6"];
  const Htypo = ({children, level}: HeadingProps)=>(<Typography variant={hVariant[level-1]}>{children}</Typography>);

  return (
    <>
      <WebInfo subtitle={data?.title} description={data?.description} thumbnail={content}/>
      <ReactMarkdown
        components={{
            h1: Htypo,
            h2: Htypo,
            h3: Htypo,
            h4: Htypo,
            h5: Htypo,
            h6: Htypo,
        }}
      >
        {data?.body || ""}
      </ReactMarkdown>
    </>
  );
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   return { paths:[], fallback: true }
// }

// // This function gets called at build time
// export async function getStaticProps() {
//   return { props:[], fallback: true }
// }
