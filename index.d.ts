import { ParsedPath } from 'path';

export interface ParsedResult extends ParsedPath {
  query: string;
  path: string;
  file: string;
}

export interface PathParse {
  (p: string) : ParsedResult;
}

declare const pathParse: PathParse;

export = pathParse;