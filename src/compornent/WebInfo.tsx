import * as React from 'react';
import Head from 'next/head'
import { useBlogInfo } from '../controller/useBlogInfo';
import { useContent } from '../controller/useContent';

interface IWebInfoProps {
  subtitle?: string;
  description?: string;
  thumbnail?: string;
}

export default function WebInfo(props: IWebInfoProps) {
  const bloginfo = useBlogInfo();
  const blogTitle = bloginfo?.title || "タイトルが取得できませんでした";
  const title = props.subtitle ? `${props.subtitle} - ${blogTitle}` : blogTitle;
  const type = props.subtitle ? 'article' : 'blog';
  const description = props.description || bloginfo?.description || "" ;
  const thumbnail = useContent(props.thumbnail || "") ;
  
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:site_name" content={blogTitle}/>
      <meta property="og:url" content="ページのURL"/>
      <meta property="og:image" content={thumbnail}/>
      <meta property="og:locale" content="ja_JP"/>
      <meta property="og:type" content={type}/>
      {/* Twitter Card Infomation */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
    </Head>
  );
}
