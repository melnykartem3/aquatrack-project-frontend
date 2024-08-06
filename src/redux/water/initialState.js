export const initialState = {
    dailyItems: [],
    monthlyItems: [],
    currentDate: new Date().toISOString(),
    currentMonth: null,
    isLoading: false,
    error: null,
};