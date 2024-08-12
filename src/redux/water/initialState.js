export const initialState = {
  dailyItems: {
    dayItems: [],
    totalWaterVolume: null,
  },
  monthlyItems: [],
  currentDate: new Date().toISOString().split('T')[0],
  currentMonth: `${new Date().getFullYear()}-${new Date().getMonth()+1}`,
  isLoading: false,
  error: null,
};