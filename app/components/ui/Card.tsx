import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-8">
      {children}
    </div>
  );
}