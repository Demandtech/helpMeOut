import { ShareIcon } from "../svgs";
import { Button } from "../ui";

export default function ShareVideoToSocial({ url }: { url: string }) {
  const handleShare = async () => {
    if (navigator.share && url) {
      try {
        await navigator.share({
          title: "Check out this video!",
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <div className="pb-10">
      <h3 className="mb-3 text-primary-900 font-medium text-xl">
        Share your video
      </h3>
      <Button
        onPress={handleShare}
        radius="full"
        variant="bordered"
        aria-label="Share button"
        className="p-2"
        isIconOnly
      >
        <ShareIcon fill="#ccc" />
      </Button>
    </div>
  );
}
