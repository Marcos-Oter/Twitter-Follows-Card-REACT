export { App }
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./App.css"

function App ()
{
    return(
        <>
        <aside className="tw-followCard-section">
            <strong>A quién seguir</strong>
            <TwitterFollowCard userName={"SrSelian"} initialIsFollowing></TwitterFollowCard>
            <TwitterFollowCard userName={"SutsukiChan_"} initialIsFollowing></TwitterFollowCard>
            <TwitterFollowCard userName={"UanPreyas"} initialIsFollowing={false}></TwitterFollowCard>
            <TwitterFollowCard userName={"_Anandah"} initialIsFollowing={false}></TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={false}></TwitterFollowCard>
        </aside>
        </>
    )
}