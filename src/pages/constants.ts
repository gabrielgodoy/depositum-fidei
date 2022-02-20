export interface IPageDetail {
  path: string;
  title: string;
}

export const pages = {
  home: {
    path: "/",
    title: "Depositum Fidei",
  },
  churchFathers: {
    path: "/church-fathers",
    title: "Church Fathers",
  },
} as const;
