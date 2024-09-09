import { useState } from "react";

export function TwitterFollowCard({userName = "x", initialIsFollowing})
{ 
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? "Siguiendo" : "Seguir";

    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleClick =  () =>
    {
        setIsFollowing(!isFollowing);
    }

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
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className="tw-followCard-text">{text}</span>
                        <span className="tw-followCard-stopFollow">Deja de seguir</span>
                    </button>
                </aside>

            </article>
        )
    }
}