import { createSlice } from "@reduxjs/toolkit";
import { statistSummary } from "./stat-operations";

const initialState = {
        categoriesSummary: [{
            name: '',
            type: '',
            total: 0
        }],
        incomeSummary: 0,
        expenseSummary: 0,
        periodTotal: 0,
        month: null,
        year: null,
        isLoader: false,
    }

export const statSlice = createSlice({
    name: 'stat',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(statistSummary.pending, state => {
                state.isLoader = true;
            })
            .addCase(statistSummary.fulfilled, (state, {payload}) => {
                state.isLoader = false;
                state.categoriesSummary = payload.categoriesSummary;
                state.incomeSummary = payload.incomeSummary;
                state.expenseSummary = payload.expenseSummary;
                state.periodTotal = payload.periodTotal;
                state.month = payload.month;
                state.year = payload.year;
            })
            .addCase(statistSummary.rejected, state => {
                state.isLoader = false;
                console.error();
            })
    }
})

export const statReducer = statSlice.reducer;