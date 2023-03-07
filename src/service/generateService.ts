import { ArticleDao } from "../driver/ArticleDao";
import { ContentDao } from "../driver/ContentDao";
import { MasterDao } from "../driver/MasterDao";
import { ArticleSerivce } from "./ArticleService";
import { ContentSerivce } from "./ContentService";
import { MasterSerivce } from "./MasterService";

// require useSWR
export const master = new MasterSerivce(new MasterDao());

// require useSWR
export const article = new ArticleSerivce(new ArticleDao());

// don't require useSWR
export const content = new ContentSerivce(new ContentDao())
