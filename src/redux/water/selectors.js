export const selectWater = state => state.water.monthlyItems;
export const selectAllWater = state => state.water.dailyItems.totalWaterVolume;
export const selectChoosenDate = state => state.water.currentDate;
export const selectDailyItems = state => state.water.dailyItems.dayItems;