export { App }
import { TwitterFollowCard } from "./TwitterFollowCard"
import "./App.css"

const users = [
    {
        userName: "NasukiChan",
        isFollowing: false
    },
    {
        userName: "SrSelian",
        isFollowing: true
    },
    {
        userName: "SutsukiChan_",
        isFollowing: true
    },
    {
        userName: "UanPreyas",
        isFollowing : false
    },
    {
        userName: "_Anandah",
        isFollowing: false
    },
    {
        userName: "x",
        isFollowing: false
    },
]

function App ()
{
    return(
        <>
            <aside className="tw-followCard-section">
                <strong>A quién seguir</strong>
                {
                users.map(({userName, isFollowing}) => 
                    (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}></TwitterFollowCard>
                    )
                )   
                }
            </aside>
        </>
    )
}