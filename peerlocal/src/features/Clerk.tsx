import {UserButton} from "@clerk/nextjs";

export const Clerk = () => {
    return (
        <UserButton
            afterSignOutUrl="/"
            userProfileProps={{
                additionalOAuthScopes: {
                    discord: ["guilds", "guilds.members.read"],
                    github: ["read:user"],
                    tiktok: ["user.info.basic"],
                },
            }}
        />
    );
}
