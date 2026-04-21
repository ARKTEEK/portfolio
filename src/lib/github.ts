import type { Commit } from "./types";

export async function getRecentCommits(username: string, limit = 5): Promise<Commit[]> {
  const res = await fetch(`https://api.github.com/users/${username}/events/public`);
  const data = await res.json();

  return data
    .filter((event: any) => event.type === "PushEvent")
    .map((event: any) => {
      const repoFull = event.repo.name;
      return {
        repo: repoFull.split("/")[1],
        repoFull,
        sha: event.payload.head,
        msg: `push → ${event.payload.ref?.replace("refs/heads/", "") ?? "?"}`,
        url: `https://github.com/${repoFull}/commit/${event.payload.head}`,
      };
    })
    .slice(0, limit);
}

export async function getCommitStats(repoFull: string, sha: string) {
  const r = await fetch(`https://api.github.com/repos/${repoFull}/commits/${sha}`);
  if (r.status === 403) {
    throw new Error("RATE_LIMITED");
  }

  if (!r.ok) {
    throw new Error("FETCH_ERROR");
  }

  const d = await r.json();
  return {
    msg: d.commit?.message?.split("\n")[0],
    additions: d.stats?.additions ?? 0,
    deletions: d.stats?.deletions ?? 0,
  };
}
