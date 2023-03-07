import { useEffect, useState } from "react";
import { ArticleModel } from "../model/ArticleModel";
import { article } from "../service/generateService";

export function useArticle(name: string){
  const [data, setData] = useState<ArticleModel|undefined>(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    article.getByName(name).then((val)=>{
      setData(val);
    }).catch((error) => setError(error.toString()))
    .finally(()=>{
      setIsLoading(false);
    });
  },[name]);
  return {
    data,
    error,
    isLoading,
  };
}
