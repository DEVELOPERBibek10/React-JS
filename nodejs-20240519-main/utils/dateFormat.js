import { formatDate } from "date-fns";

const customDateFormatter = (date, pattern) => {
  return formatDate(date, pattern);
};

export default customDateFormatter;
