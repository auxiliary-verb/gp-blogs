import { useEffect, useState } from "react";
import { content } from "../service/generateService";

export function useContent(name: string){
  const [path, setPath] = useState("image-not-found-icon.svg");
  useEffect(()=>{
    if(name !== ""){
      content.getByName(name).then((result)=>{
        setPath(result.path)
      });
    }
  }, [name]);
  return path;
}
