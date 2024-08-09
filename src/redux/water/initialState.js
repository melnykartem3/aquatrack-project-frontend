export const initialState = {
  dailyItems: {
    dayItems: [],
    totalWaterVolume: null,
  },
  monthlyItems: [],
  currentDate: new Date().toISOString(),
  currentMonth: `${new Date().getFullYear()}-${new Date().getMonth()+1}`,
  isLoading: false,
  error: null,
};