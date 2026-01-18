import { AppHeader } from "../ui/AppHeader"
import { ReactNode } from "react"

interface Props{
    children : ReactNode
}
export const GeneralLayout = (props : Props) => {
    return(
        <div className="">
            <AppHeader/>
            <div className="h-screen w-screen">
                {props?.children}
            </div>
        </div>
    )
}