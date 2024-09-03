export { App }
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./App.css"

function App ()
{
    return(
        <>
            <strong>A quién seguir</strong>
            <TwitterFollowCard userName={"SrSelian"}></TwitterFollowCard>
            <TwitterFollowCard userName={"SutsukiChan_"}></TwitterFollowCard>
            <TwitterFollowCard userName={"UanPreyas"}></TwitterFollowCard>
            <TwitterFollowCard userName={"_Anandah"}></TwitterFollowCard>
        </>
    )
}