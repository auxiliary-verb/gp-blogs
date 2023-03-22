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

export default function Article() {
  const router = useRouter();
  const { name } = router.query;
  const articleName = (typeof name === 'string')? name : "";
  const content = useArticle(articleName);
  React.useEffect(() => {
    if(articleName === ""){
      router.push('/404');
    }
  }, [articleName, router])
  return (
    <Container>
      <ReactMarkdown>
        {content.data?.body || ""}
      </ReactMarkdown>
    </Container>
  );
}
