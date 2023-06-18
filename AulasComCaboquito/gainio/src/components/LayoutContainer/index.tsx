import { ReactNode } from "react";

 type Props = {
    children: ReactNode
 }

export function LayoutContainer({children}:Props) {

    return (
        <div className="container">
            {children}
        </div>
    );
}

