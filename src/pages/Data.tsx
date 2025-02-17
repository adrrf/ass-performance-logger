import FileUpload from "@/components/file-uploader";
import Page from "./BasicPage";
import { addRecord } from "@/api/db";

export default function Data() {
  const onFileUpload = async (file: File, commitMessage: string) => {
    const csvData = await file.text();
    const records = csvData.split("\n").map((line) => line.split(","));
    for (const row of records) {
      if (row[0] === "scope") continue;
      const scope = row[0];
      const mongodb = row[1];
      const mongodbatlas = row[2];
      const mariadb = row[3];

      const record = {
        name: commitMessage,
        scope: scope,
        mongo: Number(mongodb),
        atlas: Number(mongodbatlas),
        mariadb: Number(mariadb),
      };
      await addRecord(record);
    }
    return Promise.resolve();
  };

  return (
    <Page name="Upload data">
      <FileUpload onFileUpload={onFileUpload} />
    </Page>
  );
}
