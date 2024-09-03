export function TwitterFollowCard({userName, isFollowing})
{
    {
        return(
            <article>
                <header>
                    <img 
                    className="tw-followCard-avatar" 
                    src={`https://unavatar.io/${userName}`}>
                    </img>

                    <div className="tw-followCard-info">
                        <strong>{userName}</strong>
                        <span>@{userName}</span>
                    </div>
                </header>

                <aside>
                    <button className="tw-followCard-button">
                        Seguir
                    </button>
                </aside>

            </article>
        )
    }
}