import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { clerkClient } from "@clerk/nextjs";
import { Octokit } from "octokit";
import discord from "discord-oauth2";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    console.log("auth-user", ctx.auth);
    const user = await clerkClient.users.getUser(ctx.auth?.userId);

    const githubToken = await clerkClient.users.getUserOauthAccessToken(
      ctx.auth?.userId,
      "oauth_github"
    );
    const discordToken = await clerkClient.users.getUserOauthAccessToken(
      ctx.auth?.userId,
      "oauth_discord"
    );

    console.log("githubToken", githubToken);
    console.log("discordToken", discordToken);

    const ghToken = githubToken[0]?.token;

    console.log("ghToken", ghToken);

    const octokit = new Octokit({
      auth: ghToken,
    });

    const ghUser = await octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log("ghUser", ghUser);
    try {
      const tiktok = await clerkClient.users.getUserOauthAccessToken(
        ctx.auth?.userId,
        "oauth_tiktok"
      );
      if (tiktok) {
        console.log("tiktok", tiktok);
        const response = await fetch(
          "https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,following_count,follower_count,likes_count,is_verified",
          {
            headers: {
              Authorization: "Bearer " + tiktok[0]?.token,
            },
          }
        );
        const data = await response.json();
        console.log("tiktok response", data);
      }
    } catch (e) {
      console.log("tiktok error", e);
    }

    const disToken = discordToken[0]?.token;
    if (disToken) {
      const oauth = new discord();
      const discordUser = await oauth.getUser(disToken);
      console.log("discordUser", discordUser);
      const guilds = await oauth.getUserGuilds(disToken);
      if (guilds[0]?.id) {
        const guild = await oauth.getGuildMember(disToken, guilds[0]?.id);
        console.log("guild", guild);
      }
    }
    return ctx.prisma.example.findMany();
  }),
});
