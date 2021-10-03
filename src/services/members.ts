import { MemberEntity } from "@/types";

export const memberService = {
  async get(): Promise<MemberEntity[]> {
    const members: MemberEntity[] = await fetch(
      `https://api.github.com/orgs/lemoncode/members`
    ).then((response) => response.json());

    return members;
  },

  async getByName(orgName: string): Promise<MemberEntity[]> {
    const members: MemberEntity[] = await fetch(
      `https://api.github.com/orgs/${orgName}/members`
    ).then((response) => response.json());

    return members;
  },

  async getMember(
    login: MemberEntity["login"]
  ): Promise<MemberEntity | undefined> {
    if (!login) throw new Error("id is required");

    const member: MemberEntity = await fetch(
      `https://api.github.com/users/${login}`
    ).then((response) => response.json());

    return member;
  },
};
