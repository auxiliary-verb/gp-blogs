import { useEffect, useState } from "react";
import { content } from "../service/generateService";
import {ROOT_URL} from "../common/appInfo"

export function useContent(name: string){
  const [path, setPath] = useState(ROOT_URL + "/image-not-found-icon.svg");
  useEffect(()=>{
    if(name !== ""){
      content.getByName(name).then((result)=>{
        setPath(result.path)
      });
    }
  }, [name]);
  return path;
}
