import { format as formatter, isValid, parse, toDate } from "date-fns";

interface Props {
  children: Date | number | string;
  format?: string;
  testId?: string;
  parseFormat?: string;
}

const FormattedDate = ({
  children,
  format = "d MMMM yyyy",
  testId,
  parseFormat,
}: Props) => {
  let parsedDate: Date;

  if (typeof children === "string") {
    parsedDate = parseFormat
      ? parse(children, parseFormat, new Date())
      : new Date(children);
  } else {
    parsedDate = toDate(children);
  }

  if (!isValid(parsedDate)) {
    return null;
  }

  return <time data-testid={testId}>{formatter(parsedDate, format)}</time>;
};

export default FormattedDate;
