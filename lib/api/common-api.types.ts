export type TNullish = null | undefined;
export type TString = string | TNullish;
export type TNumber = number | TNullish;
export type TBoolean = boolean | TNullish;


type TMeta = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
};

export type TApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
    meta: TMeta | TNullish;
}

// form validation


type ValidatorFn<T> = (value: T) => string | null

export type FormValidators<T> = {
  [K in keyof T]?: ValidatorFn<T[K]>
}