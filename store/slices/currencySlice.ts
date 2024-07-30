import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CurrencyState {
    usd: number | null;
    eur: number | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CurrencyState = {
    usd: null,
    eur: null,
    status: 'idle',
    error: null,
};

interface ExchangeRates {
    rates: {
        USD: number;
        EUR: number;
    };
}
//@ts-ignore
export const fetchExchangeRates = createAsyncThunk('currency/fetchExchangeRates', async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/RUB');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: ExchangeRates = await response.json();
    return {
        usd: data.rates.USD,
        eur: data.rates.EUR,
    };
});
//@ts-ignore
const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExchangeRates.pending, (state:CurrencyState) => {
                state.status = 'loading';
            })
            .addCase(fetchExchangeRates.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.usd = action.payload.usd;
                state.eur = action.payload.eur;
            })
            .addCase(fetchExchangeRates.rejected, (state:CurrencyState, action) => {
                state.status = 'failed';
                //@ts-ignore
                state.error = action.error.message || 'Failed to fetch exchange rates';
            });
    },
});

export default currencySlice.reducer;
