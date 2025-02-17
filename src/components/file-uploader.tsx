import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileUpload: (file: File, commitMessage: string) => Promise<void>;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [commitMessage, setCommitMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleCommitMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 15) {
      setCommitMessage(e.target.value);
    }
  };

  const handleUpload = async () => {
    if (file && commitMessage.trim()) {
      setIsUploading(true);
      try {
        await onFileUpload(file, commitMessage);
        toast({
          title: "Upload Successful",
          description: "Your file has been uploaded successfully.",
          variant: "default",
          duration: 3000,
        });
        setCommitMessage(""); // Reset commit message after upload
        setFile(null); // Reset file input
      } catch (error) {
        console.error(error);
        toast({
          title: "Upload Failed",
          description: "There was an error uploading your file. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setIsUploading(false);
      }
    }
  };

  const messageLength = commitMessage.length;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload your results</h1>
      <div>
        <Label htmlFor="file-upload">Select File</Label>
        <Input id="file-upload" type="file" onChange={handleFileChange} accept=".csv" />
      </div>
      <div>
        <Label htmlFor="commit-message">Commit Message (max 15 chars)</Label>
        <Input
          id="commit-message"
          placeholder="Enter message"
          value={commitMessage}
          onChange={handleCommitMessageChange}
          maxLength={15}
        />
        <p className="text-sm text-muted-foreground mt-1">Characters: {messageLength} / 15</p>
      </div>
      <Button onClick={handleUpload} disabled={!file || messageLength === 0 || isUploading}>
        {isUploading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
}
