import FileUpload from "@/components/file-uploader";
import Page from "./BasicPage";

export default function Data() {
  const onFileUpload = async (file: File, commitMessage: string) => {
    console.log(commitMessage);
    console.log(file);
    return Promise.resolve();
  };

  return (
    <Page name="Upload data">
      <FileUpload onFileUpload={onFileUpload} />
    </Page>
  );
}
