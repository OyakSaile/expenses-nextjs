import { twMerge } from "tailwind-merge";

interface CardSummaryRootProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}
export const CardSummaryRoot = ({ title, ...rest }: CardSummaryRootProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "bg-black border h-[100px] flex flex-col p-4 rounded-md",
        rest.className
      )}
    ></div>
  );
};
