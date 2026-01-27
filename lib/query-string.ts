// lib/utils/query-string.ts

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue | QueryValue[]>;

type GenerateQueryStringOptions = {
    /**
     * Include empty strings in the query string
     * @default false
     */
    includeEmpty?: boolean;

    /**
     * Include null/undefined values in the query string
     * @default false
     */
    includeNullish?: boolean;

    /**
     * Array format: 'brackets' | 'comma' | 'repeat'
     * - brackets: ?tags[]=a&tags[]=b
     * - comma: ?tags=a,b
     * - repeat: ?tags=a&tags=b
     * @default 'repeat'
     */
    arrayFormat?: 'brackets' | 'comma' | 'repeat';

    /**
     * Include the '?' prefix
     * @default true
     */
    includePrefix?: boolean;
};

/**
 * Generate a query string from an object of parameters
 * 
 * @example
 * generateQueryString({ page: 1, limit: 10 }) 
 * // => "?page=1&limit=10"
 * 
 * @example
 * generateQueryString({ search: '', page: 1 }, { includeEmpty: true })
 * // => "?search=&page=1"
 */
export function generateQueryString(
    params?: QueryParams,
    options: GenerateQueryStringOptions = {}
): string {
    const {
        includeEmpty = false,
        includeNullish = false,
        arrayFormat = 'repeat',
        includePrefix = true,
    } = options;

    if (!params) {
        return '';
    }

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        // Skip null/undefined if not included
        if (!includeNullish && (value === null || value === undefined)) {
            return;
        }

        // Skip empty strings if not included
        if (!includeEmpty && value === '') {
            return;
        }

        // Handle arrays
        if (Array.isArray(value)) {
            handleArrayValue(searchParams, key, value, arrayFormat);
            return;
        }

        // Handle primitive values
        if (value !== null && value !== undefined) {
            searchParams.append(key, String(value));
        }
    });

    const queryString = searchParams.toString();

    if (!queryString) {
        return '';
    }

    return includePrefix ? `?${queryString}` : queryString;
}

/**
 * Handle array values in query string
 */
function handleArrayValue(
    searchParams: URLSearchParams,
    key: string,
    values: QueryValue[],
    format: 'brackets' | 'comma' | 'repeat'
): void {
    const filteredValues = values.filter(
        (v) => v !== null && v !== undefined && v !== ''
    );

    if (filteredValues.length === 0) {
        return;
    }

    switch (format) {
        case 'brackets':
            filteredValues.forEach((value) => {
                searchParams.append(`${key}[]`, String(value));
            });
            break;

        case 'comma':
            searchParams.append(key, filteredValues.map(String).join(','));
            break;

        case 'repeat':
        default:
            filteredValues.forEach((value) => {
                searchParams.append(key, String(value));
            });
            break;
    }
}

/**
 * Parse query string into an object
 * 
 * @example
 * parseQueryString("?page=1&limit=10")
 * // => { page: "1", limit: "10" }
 */
export function parseQueryString(queryString: string): Record<string, string | string[]> {
    const params = new URLSearchParams(queryString);
    const result: Record<string, string | string[]> = {};

    params.forEach((value, key) => {
        // Handle array notation key[]
        const isArray = key.endsWith('[]');
        const cleanKey = isArray ? key.slice(0, -2) : key;

        if (result[cleanKey]) {
            // Convert to array if multiple values exist
            if (Array.isArray(result[cleanKey])) {
                (result[cleanKey] as string[]).push(value);
            } else {
                result[cleanKey] = [result[cleanKey] as string, value];
            }
        } else {
            result[cleanKey] = value;
        }
    });

    return result;
}

/**
 * Merge query params with existing URLSearchParams
 * 
 * @example
 * const existing = new URLSearchParams("?page=1");
 * mergeQueryParams(existing, { limit: 10, sort: 'asc' })
 * // => URLSearchParams with page=1&limit=10&sort=asc
 */
export function mergeQueryParams(
    existing: URLSearchParams,
    newParams: QueryParams
): URLSearchParams {
    const merged = new URLSearchParams(existing);

    Object.entries(newParams).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
            merged.delete(key);
        } else if (Array.isArray(value)) {
            merged.delete(key);
            value.forEach((v) => {
                if (v !== null && v !== undefined && v !== '') {
                    merged.append(key, String(v));
                }
            });
        } else {
            merged.set(key, String(value));
        }
    });

    return merged;
}