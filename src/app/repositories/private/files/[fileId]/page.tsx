"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

function SingleFile() {
  const router = useRouter();

  return (
    <div>
      <Button onPress={() => router.back()}>Back</Button>
      <div>Single Private File</div>
    </div>
  );
}

export default SingleFile;
