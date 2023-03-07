import { useEffect, useState } from "react";
import useSWR from "swr";
import { IArticleInfoModel } from "../model/ArticleListModel";
import { article } from "../service/generateService";

export function useWordFilter(word:string){
  const [data, setData] = useState<IArticleInfoModel[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    article.wordFilter(word).then((val)=>{
      setData(val);
    }).catch((error) => setError(error.toString()))
    .finally(()=>{
      setIsLoading(false);
    });
  },[word]);
  return {
    data,
    error,
    isLoading,
  };
}

export function useTagFilter(tags:string){
  const [data, setData] = useState<IArticleInfoModel[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    article.tagFilter(tags).then((val)=>{
      setData(val);
    }).catch((error) => setError(error.toString()))
    .finally(()=>{
      setIsLoading(false);
    });
  },[tags]);
  return {
    data,
    error,
    isLoading,
  };
}
