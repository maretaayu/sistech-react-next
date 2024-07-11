import Image from "next/image";

type ProfileAvatarProps = {
  imageUrl: string;
  width?: number;
  height?: number;
};

function ProfileAvatar({
  imageUrl,
  width = 48,
  height = 48,
}: ProfileAvatarProps) {
  return (
    <Image
      src={imageUrl}
      alt="Avatar picture"
      width={width}
      height={height}
      className="rounded-full border-2	border-invert"
    />
  );
}

export { ProfileAvatar };
