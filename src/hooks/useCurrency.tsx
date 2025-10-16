"use client";

import { useState, useEffect } from 'react';

const exchangeRates: Record<string, { rate: number; symbol: string }> = {
    CO: { rate: 3900, symbol: 'COP' }, // Colombia
    PE: { rate: 3.75, symbol: 'S/' },   // Peru
    MX: { rate: 18.0, symbol: 'MXN' }, // Mexico
    CL: { rate: 930, symbol: 'CLP' },  // Chile
    UY: { rate: 39, symbol: 'UYU' },    // Uruguay
    PY: { rate: 7500, symbol: 'PYG' }, // Paraguay
};

const defaultCurrency = { rate: 1, symbol: 'USD' };

async function getCountry(): Promise<string> {
    try {
        const response = await fetch('https://ipapi.co/country');
        if (response.ok) {
            return await response.text();
        }
    } catch (error) {
        console.error("Error fetching country:", error);
    }
    return 'US'; // Default to US
}

export function useCurrency() {
    const [currency, setCurrency] = useState<{ rate: number; symbol: string }>(defaultCurrency);

    useEffect(() => {
        let isMounted = true;
        
        async function fetchAndSetCurrency() {
            try {
                const country = await getCountry();
                if (isMounted) {
                    const countryCurrency = exchangeRates[country] || defaultCurrency;
                    setCurrency(countryCurrency);
                }
            } catch (error) {
                if (isMounted) {
                    setCurrency(defaultCurrency);
                }
            }
        }

        fetchAndSetCurrency();

        return () => {
            isMounted = false;
        };
    }, []);

    const getPrice = (usdPrice: number) => {
        const value = usdPrice * currency.rate;
        if (['COP', 'CLP', 'PYG'].includes(currency.symbol)) {
            return Math.round(value / 100) * 100;
        }
        return parseFloat(value.toFixed(2));
    };

    return {
        getPrice,
        currencySymbol: currency.symbol,
    };
}
