const logger = (req, res, next) => {
  console.log(`Url: ${req.url} \n Method: ${req.method}`);

  next();
};

export default logger;
