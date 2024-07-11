import { ProfileAvatar } from "./ProfileAvatar";

type ProfileUserProps = {
  name: string;
  imageUrl: string;
};

function ProfileUser({ name, imageUrl }: ProfileUserProps) {
  return (
    <div className="flex items-center">
      <ProfileAvatar imageUrl={imageUrl} width={32} height={32} />
      <div>
        <p>Good Evening</p>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export { ProfileUser };
