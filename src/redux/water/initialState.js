export const initialState = {
    dailyItems: {
        dayItems: [],
        totalWaterVolume:null
    },
    monthlyItems: [],
    currentDate: new Date().toISOString(),
    currentMonth: null,
    isLoading: false,
    error: null,
};