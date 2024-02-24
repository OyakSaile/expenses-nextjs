import { twMerge } from "tailwind-merge";

interface CardSummaryHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}
export const CardSummaryHeader = ({
  title,
  children,
  ...rest
}: CardSummaryHeaderProps) => {
  return (
    <div
      {...rest}
      className={twMerge("flex justify-between items-center", rest.className)}
    >
      <h2 className="text-gray-300">{title}</h2>
      {children}
    </div>
  );
};
