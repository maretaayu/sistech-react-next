import { Button, Card, CardListContainer, ProfileUser } from "../components";

export default function Page() {
  return (
    <>
      {/* <Card
        title="lorem ipsum"
        description="10 min"
        thumbnail="/images/DummyThumbnail.png"
      /> */}
      <ProfileUser name="mareta" imageUrl="/images/DummyProfile.png" />

      <CardListContainer />
      <Button>Click me</Button>
    </>
  );
}
