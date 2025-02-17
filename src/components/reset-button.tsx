import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/confirm-dialog";
import { deleteRecords } from "@/api/db";
import { useToast } from "@/hooks/use-toast";

export function ResetButton() {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { toast } = useToast();

  const handleReset = async () => {
    try {
      await deleteRecords();
      toast({
        title: "Success",
        description: "All records have been deleted.",
        variant: "default",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to delete records. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Button variant="destructive" size="sm" onClick={() => setShowConfirmDialog(true)} className="gap-2">
        <Trash2 className="h-4 w-4" />
        Reset All Records
      </Button>

      <ConfirmDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        onConfirm={handleReset}
        title="Reset All Records"
        description="Are you sure you want to delete all records? This action cannot be undone."
        confirmText="Reset"
        cancelText="Cancel"
      />
    </>
  );
}
