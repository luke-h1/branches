import axios from "axios";

interface Version {
  version: string;
  deployedBy: string;
  deployedAt: string;
  gitSha: string;
}

export interface FormattedVersion extends Version {
  title: string;
  url: string;
  environment: "development" | "production" | "staging";
}

const versionService = {
  lhowsamVersions: async (): Promise<FormattedVersion[]> => {
    const [development, production] = await Promise.all([
      axios.get<Version>("https://dev.lhowsam.com/api/version"),
      axios.get<Version>("https://lhowsam.com/api/version"),
    ]);

    const dev = {
      ...development.data,
      environment: "development" as const,
      url: "https://dev.lhowsam.com",
      title: "lhowsam.com development",
    };

    const prod = {
      ...production.data,
      environment: "production" as const,
      url: "https://lhowsam.com",
      title: "lhowsam.com production",
    };

    return [dev, prod];
  },
  nowPlayingVersions: async (): Promise<FormattedVersion[]> => {
    const [staging, production] = await Promise.all([
      axios.get<Version>("https://nowplaying-staging.lhowsam.com/api/version"),
      axios.get<Version>("https://nowplaying.lhowsam.com/api/version"),
    ]);

    const stg = {
      ...staging.data,
      environment: "staging" as const,
      title: "Now Playing staging",
      url: "https://nowplaying-staging.lhowsam.com",
    };

    const prod = {
      ...production.data,
      environment: "production" as const,
      title: "Now Playing production",
      url: "https://nowplaying.lhowsam.com",
    };

    return [stg, prod];
  },

  petVersions: async (): Promise<FormattedVersion[]> => {
    const staging = await axios.get<Version>(
      "https://pets-staging.lhowsam.com/api/version",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const stg = {
      ...staging.data,
      environment: "staging" as const,
      title: "Pet adoption API staging",
      url: "https://pets-staging.lhowsam.com",
    };

    return [stg];
  },
};

export default versionService;
