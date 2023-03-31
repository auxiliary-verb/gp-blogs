import { useEffect, useState } from "react";
import useSWR from "swr";
import { IArticleInfoModel } from "../model/ArticleListModel";
import { article } from "../service/generateService";

export interface IFilterResult{
  data: IArticleInfoModel[];
  error: string;
  isLoading: boolean;
};

export function useWordFilter(searchWords:string): IFilterResult{
  const [data, setData] = useState<IArticleInfoModel[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    article.wordFilter(searchWords).then((val)=>{
      setData(val);
    }).catch((error) => setError(error.toString()))
    .finally(()=>{
      setIsLoading(false);
    });
  },[searchWords]);
  return {
    data,
    error,
    isLoading,
  };
}

export function useTagFilter(searchWords:string): IFilterResult{
  const [data, setData] = useState<IArticleInfoModel[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    article.tagFilter(searchWords).then((val)=>{
      setData(val);
    }).catch((error) => setError(error.toString()))
    .finally(()=>{
      setIsLoading(false);
    });
  },[searchWords]);
  return {
    data,
    error,
    isLoading,
  };
}
