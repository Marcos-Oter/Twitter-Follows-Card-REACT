export { App }
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./App.css"

function App ()
{
    return(
        <>
        <aside className="tw-followCard-section">
            <strong>A quién seguir</strong>
            <TwitterFollowCard userName={"SrSelian"} isFollowing={true}></TwitterFollowCard>
            <TwitterFollowCard userName={"SutsukiChan_"} isFollowing={true}></TwitterFollowCard>
            <TwitterFollowCard userName={"UanPreyas"}></TwitterFollowCard>
            <TwitterFollowCard userName={"_Anandah"}></TwitterFollowCard>
        </aside>
        </>
    )
}