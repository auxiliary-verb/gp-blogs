import { useEffect, useState } from "react";
import { BlogInfoModel } from "../model/InfoModel";
import { master } from "../service/generateService";

export function useBlogInfo(){
  const [blogInfo, setBlogInfo] = useState<BlogInfoModel | undefined>(undefined);
  useEffect(()=>{
    master.getBlogInfoMaster().then((val)=>{
      setBlogInfo(val);
    });
  })
  return blogInfo;
}
