import { useEffect, useState } from "react";
import { ArticleModel } from "../model/ArticleModel";
import { article } from "../service/generateService";

export function useArticle(name: string) {
  const [data, setData] = useState<ArticleModel | undefined>(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [artName, setName] = useState(name);
  useEffect(() => {
    if (artName !== undefined && artName !== "") {
      setIsLoading(true);
      article.getByName(artName).then((val) => {
        setData(val);
      }).catch((error) => setError(error.toString()))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [artName]);
  return {
    data,
    error,
    isLoading,
    setName,
  };
}
