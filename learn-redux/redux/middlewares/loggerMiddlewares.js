//Cấu trúc của middleware
export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Store", store);
  console.log("Next", next);
  console.log("Action", action);
  return next(action);
};
