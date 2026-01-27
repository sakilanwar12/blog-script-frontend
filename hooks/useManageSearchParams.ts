"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type ParamValue = string | number | boolean | null | undefined;

type UpdateOptions = {
    replace?: boolean;
    debounceMs?: number;
    scroll?: boolean;
};

type ParamsRecord = Record<string, ParamValue>;

const useManageSearchParams = <T extends ParamsRecord = ParamsRecord>() => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup debounce timer on unmount
    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, []);

    // Get single param or all params
    function getParams(): Partial<T>;
    function getParams<K extends keyof T>(key: K): string | null;
    function getParams<K extends keyof T>(key?: K): Partial<T> | string | null {
        if (key !== undefined) {
            return searchParams.get(String(key));
        }

        const allParams: Record<string, string> = {};
        searchParams.forEach((value, key) => {
            allParams[key] = value;
        });

        return allParams as Partial<T>;
    }

    // Update params with debounce support
    const updateParams = useCallback(
        (params: Partial<T>, options: UpdateOptions = {}) => {
            const applyUpdate = () => {
                const currentParams = new URLSearchParams(searchParams.toString());

                Object.entries(params).forEach(([key, value]) => {
                    if (value === null || value === undefined || value === "") {
                        currentParams.delete(key);
                    } else {
                        currentParams.set(key, String(value));
                    }
                });

                const queryString = currentParams.toString();
                const url = queryString ? `?${queryString}` : window.location.pathname;

                const navigationOptions = {
                    scroll: options.scroll ?? false,
                };

                if (options.replace) {
                    router.replace(url, navigationOptions);
                } else {
                    router.push(url, navigationOptions);
                }
            };

            // Clear existing debounce timer
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }

            // Apply debounce if specified
            if (options.debounceMs && options.debounceMs > 0) {
                debounceTimerRef.current = setTimeout(applyUpdate, options.debounceMs);
            } else {
                applyUpdate();
            }
        },
        [router, searchParams]
    );

    // Delete specific params
    const deleteParams = useCallback(
        (keys: Array<keyof T>) => {
            const currentParams = new URLSearchParams(searchParams.toString());

            keys.forEach((key) => {
                currentParams.delete(String(key));
            });

            const queryString = currentParams.toString();
            const url = queryString ? `?${queryString}` : window.location.pathname;

            router.replace(url, { scroll: false });
        },
        [router, searchParams]
    );

    // Clear all params
    const clearParams = useCallback(() => {
        router.replace(window.location.pathname, { scroll: false });
    }, [router]);

    return {
        getParams,
        updateParams,
        deleteParams,
        clearParams,
    };
};

export default useManageSearchParams;