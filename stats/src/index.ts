import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

Summary.winsAnalysisWithHtmlReport("Crystal Palace").buildAndPrintReport(
  matchReader.matches
);
