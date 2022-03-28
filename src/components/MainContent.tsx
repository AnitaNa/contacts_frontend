import { FunctionComponent } from "react";

export interface MainContentProps{
   name: string;
   email: string;
   mobile: string;
}

const MainContent: FunctionComponent<MainContentProps> = ({
   name,
   email,
   mobile,
}) => {
    return (
       <div>
        
       </div>
    )
}
export default MainContent;



