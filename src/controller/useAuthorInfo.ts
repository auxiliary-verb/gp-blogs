import { useEffect, useState } from "react";
import { AuthorModel } from "../model/AuthorModel";
import { master } from "../service/generateService";

export function useAuthorInfo(){
  const [author, setAuthor] = useState<AuthorModel | undefined>(undefined);
  useEffect(()=>{
    master.getAuthorMaster().then((val)=>{
      setAuthor(val);
    });
  })
  return author;
}
