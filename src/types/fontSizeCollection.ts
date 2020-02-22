export interface FontSize {
  desktop: string;
  mobile: string;
}

export type FontSizeCollection<S extends string> = Record<S, FontSize>;
