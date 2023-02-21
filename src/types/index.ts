import React, { ReactNode, Dispatch, SetStateAction } from "react";

export interface Button extends React.PropsWithChildren {
  type?: string;
  href?: string;
  onClick?: () =>{};
}
export interface HandleSearch {
  (
    value: string,
    filter: string,
    setValue: Dispatch<SetStateAction<string>>,
    setFilter: Dispatch<SetStateAction<string>>
  ): any;
}

export interface HadleChangeSearch {
  (value: string): void;
}

export interface Search {
  handleSearch?: HandleSearch;
  hadleChange?: HadleChangeSearch;
  name: string;
  variant: string;
  placeholder: string;
}
