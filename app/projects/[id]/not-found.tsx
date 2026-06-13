import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="mb-4 text-3xl font-bold">Project not found</h1>
      <p className="mx-auto mb-6 max-w-md text-muted-foreground">
        The project you are looking for is not available in this portfolio.
      </p>
      <Button asChild>
        <Link href="/#projects">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
    </div>
  );
}
