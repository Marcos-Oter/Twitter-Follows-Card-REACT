import { useState } from "react";


 
export function TwitterFollowCard({userName})
{ 
    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? "Siguiendo" : "Seguir";

    const buttonClassName = isFollowing ? "tw-followCard-button isFolling" : "tw-followCard-button"

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
                    <button className="tw-followCard-button" onClick={handleClick}>
                        {text}
                    </button>
                </aside>

            </article>
        )
    }
}