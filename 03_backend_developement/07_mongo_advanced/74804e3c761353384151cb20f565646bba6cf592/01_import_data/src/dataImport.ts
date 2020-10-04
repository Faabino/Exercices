import * as fs from "fs";
import { Db } from "mongodb";
import * as path from "path";

type Platform = Record<string, unknown> & {
  games: Record<string, unknown>[];
};

type Game = {
  [key: string]: unknown;
};

function getDataFromFile(fileName: string): [Game[], Platform] {
  const filePath = path.resolve(`data/${fileName}`);
  const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
  const platform = JSON.parse(stringifiedPlatform);
  const { games, ...platformWithoutGames } = platform;
  return [games, platformWithoutGames];
}

export default function dataImport(db: Db): Promise<true> {
  let allGames: Game[] = [];
  const allPlatforms: Platform[] = [];
  const dirPath = path.resolve("data");
  const fileNames = fs.readdirSync(dirPath);

  fileNames.forEach((fileName) => {
    const [games, platform] = getDataFromFile(fileName);
    allPlatforms.push(platform);
    allGames = [...allGames, ...games];
  });

  return db.createCollection<Platform>("platforms").then((platformsCollection) => {
    return db.createCollection<Game>("games").then((gamesCollection) => {
      return platformsCollection.insertMany(allPlatforms).then(() => {
        return gamesCollection.insertMany(allGames).then(() => {
          return true;
        });
      });
    });
  });
}
