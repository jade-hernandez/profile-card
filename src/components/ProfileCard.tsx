"use client";

import Image from "next/image";

import IconGithub from "./icons/Github";
import IconInstagram from "./icons/Instagram";
import IconLinkedIn from "./icons/Linkedin";
import IconX from "./icons/X";

const ICON_SIZE = 20;
const ICON_COLOR = "#4338ca";
const icons = [
  {
    id: "github",
    icon: <IconGithub size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit GitHub profile",
  },
  {
    id: "linkedin",
    icon: <IconLinkedIn size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit LinkedIn profile",
  },
  {
    id: "instagram",
    icon: <IconInstagram size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit Instagram profile",
  },
  {
    id: "x",
    icon: <IconX size={ICON_SIZE} color={ICON_COLOR} />,
    label: "Visit X profile",
  },
];

const IconButton: React.FC<{ children: React.ReactNode; label: string }> = ({
  children,
  label,
}) => {
  return (
    <button className="p-2" aria-label={label}>
      {children}
    </button>
  );
};

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  role: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  role,
  bio,
}) => {
  return (
    <article className=" w-full max-w-[340px] h-fit bg-white rounded-lg mx-auto px-4 py-6 flex flex-col gap-10 items-center shadow-[0_1px_2px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16 rounded-full">
          <Image src={imageUrl} alt={`Profile picture of ${name}`} fill />
        </div>
        <div className="text-center flex flex-col gap-1">
          <h2 className="text-xl text-neutral-900 font-semibold">{name}</h2>
          <p className="text-neutral-600">{role}</p>
        </div>
        <p className="text-neutral-600 text-center">{bio}</p>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <button className="w-full bg-indigo-700 text-white rounded py-[10px] px-4">
          Contact me
        </button>
        <div className="flex gap-4 justify-center">
          {icons.map((icon) => (
            <IconButton key={icon.id} label={icon.label}>
              {icon.icon}
            </IconButton>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
