import axios from "axios";

export interface Version {
  title: string;
  environment: "development" | "production" | "staging";
  version: string;
  deployedBy: string;
  deployedAt: string;
  gitSha: string;
}

const versionService = {
  lhowsamVersions: async (): Promise<Version[]> => {
    const [development, production] = await Promise.all([
      axios.get<Version>("https://dev.lhowsam.com/api/version"),
      axios.get<Version>("https://lhowsam.com/api/version"),
    ]);

    const dev = {
      ...development.data,
      environment: "development" as const,
      title: "lhowsam.com development",
    };

    const prod = {
      ...production.data,
      environment: "production" as const,
      title: "lhowsam.com production",
    };

    return [dev, prod];
  },
  nowPlayingVersions: async (): Promise<Version[]> => {
    const [staging, production] = await Promise.all([
      axios.get<Version>("https://now-playing-staging.lhowsam.com/api/version"),
      axios.get<Version>("https://now-playing.lhowsam.com/api/version"),
    ]);

    const stg = {
      ...staging.data,
      environment: "staging" as const,
      title: "Now Playing staging",
    };

    const prod = {
      ...production.data,
      environment: "production" as const,
      title: "Now Playing production",
    };

    return [stg, prod];
  },

  petVersions: async (): Promise<Version[]> => {
    const staging = await axios.get<Version>(
      "https://pets-staging.lhowsam.com/api/version"
    );

    const stg = {
      ...staging.data,
      environment: "staging" as const,
      title: "Pet adoption API staging",
    };

    return [stg];
  },
};

export default versionService;
