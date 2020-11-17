import create, { SetState } from 'zustand';
import { version } from '../package.json';
import { Entry } from './search-api';

//type SearchFilters = {
//  author: string;
//  publisher: string;
//  year: string;
//  pages: string;
//  language: string;
//  extension: string;
//}

type Constants = {
  version: string;
  baseAppWidth: number;
  uiPageSize: number;
  entryTitleLength: number;
  minSearchQueryLength: number;
  errorTolarance: number;
  errorReconnectDelayMS: number;
}

type Config = {
  mirrors: string[];
  pageSize: number;
  searchReqPattern: string;
  searchByMD5Pattern: string;
  MD5ReqPattern: string;
  cssSelectors: {
    tableContainer: string;
    row: string;
    downloadURL: string;
    cellSelector: string;
  }
}

export type Globals = {
  appWidth: number;
  errorStatus: boolean;
  currentPage: number;
  mirror: string | null;
  entries: Entry[];
  query: string;
  searchFilters: {
    author: string;
    publisher: string;
    year: string;
    pages: string;
    language: string;
    extension: string;
  };
}

type Setters = {
  reset: () => void;
  appWidth: (appWidth: number) => void;
  errorStatus: (errorStatus: boolean) => void;
  currentPage: (callback: Function) => void;
  mirror: (mirror: string) => void;
  entries: (entries: Entry[]) => void;
  query: (query: string) => void;
  searchFilters: (callback: Function) => void;
}

type State = {
  config: Config | null;
  constants: Constants,
  globals: Globals,
  set: Setters
}

const initialGlobals: Globals = {
  appWidth: 0,
  errorStatus: false,
  currentPage: 1,
  mirror: null,
  entries: [],
  query: '',
  searchFilters: {
    author: '',
    publisher: '',
    year: '',
    pages: '',
    language: '',
    extension: '',
  }
}

export const useStore = create<State>((set: SetState<State>): State => ({
  config: null,
  constants: {
    version,
    baseAppWidth: 75,
    uiPageSize: 10,
    entryTitleLength: 70,
    minSearchQueryLength: 3,
    errorTolarance: 5,
    errorReconnectDelayMS: 300
  },
  globals: { ...initialGlobals },
  set: {
    reset: () => set({ globals: { ...initialGlobals  } }),
    appWidth: (appWidth: number) => set(state => ({ globals: { ...state.globals, appWidth } })),
    errorStatus: (errorStatus: boolean) => set(state => ({ globals: { ...state.globals, errorStatus } })),
    currentPage: (callback: Function) => set(state => ({ globals: { ...state.globals, currentPage: callback(state.globals) } })),
    mirror: (mirror: string) => set(state => ({ globals: { ...state.globals, mirror } })),
    entries: (entries: Entry[]) => set(state => ({ globals: { ...state.globals, entries } })),
    query: (query: string) => set(state => ({ globals: { ...state.globals, query } })),
    searchFilters: (callback: Function) => set(state => ({ globals: { ...state.globals, searchFilters: callback(state.globals) } }))
  }
}));
