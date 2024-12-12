import ProfileCard from "../components/ProfileCard";

import profilePic from "../../public/images/profile-thumbnail.png";

const cardData = {
  imageUrl: profilePic.src,
  name: "Sarah Dole",
  role: "Front End Engineer @ Microsoft",
  bio: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
};

export default function Home() {
  return (
    <main className="mx-auto min-h-screen pt-[200px] bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB]">
      <ProfileCard
        imageUrl={cardData.imageUrl}
        name={cardData.name}
        role={cardData.role}
        bio={cardData.bio}
      />
    </main>
  );
}
