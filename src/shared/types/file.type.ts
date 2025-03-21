import { FILE_TYPE_EXTENSIONS } from "~shared/constants/file.constant";

export type FileExt =
  (typeof FILE_TYPE_EXTENSIONS)[keyof typeof FILE_TYPE_EXTENSIONS];
