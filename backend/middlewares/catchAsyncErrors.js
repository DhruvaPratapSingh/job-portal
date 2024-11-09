// export const catchAsyncErrors = (theFunction) => {
//   return (req, res, next) => {
//     Promise.resolve(theFunction(req, res, next)).catch("error occured",error);
//   };
// };
export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch((error) => {
      next(error); // Properly handle the error
    });
  };
};
