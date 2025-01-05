import My1 from "../Component/page"
import My2 from "../Component2/page"
import My3 from "@/component3/page"

export default function Home(){
    return(
        <div className="overflow-hidden">
            <My1/>
            <My2/>
            <My3/>
        </div>
    )
}