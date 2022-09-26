import Image from "next/image"

type TeamMemberProps = {
  id: number
  image: string
  name: string
  role: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TeamMember({ id, image, name, role }: TeamMemberProps) {
  return (
    <div className="flex flex-col justify-end basis-[100%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="relative mx-auto w-[212px] h-[253px]">
        <Image className="!relative object-contain w-full h-full" src={image} alt="team-member-image" layout="fill" quality={100} />
      </div>
      <p
        className="font-mitr antialiased font-medium text-[14px] text-white text-center
       leading-[17.64px] tracking-[0.19px]"
      >
        {name}
      </p>
      <p
        className="font-mitr antialiased font-light text-[14px] text-white text-center
       mt-[3.49px] leading-[17.64px]"
      >
        {role}
      </p>
    </div>
  )
}

function Team() {
  const teamMembers: TeamMemberProps[] = [
    {
      id: 1,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 2,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 3,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 4,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 5,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 6,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 7,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
    {
      id: 8,
      image: "/team-member.svg",
      name: "Trantor Nebuila",
      role: "Head of Ops",
    },
  ]

  return (
    <section
      className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
      2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mb-[80px] lg:mb-[140px]
      md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <p
        className="font-mitr antialiased font-semibold text-[48px] lg:text-[72px] leading-[48px] lg:leading-[72px]
       text-white text-center -tracking-[0.6px] lg:-tracking-[0.9px]"
      >
        Meet the Team
      </p>

      <p
        className="font-mitr antialiased font-light text-[14px] text-white text-center
       mt-[23.36px] leading-[17.64px] -tracking-[0.6px]
       lg:-tracking-[0.9px]"
      >
        We are backed by the industries best.
      </p>

      <div className="flex flex-row flex-wrap mx-auto justify-start align-start space-y-[64px] lg:space-y-[90px] mt-[72px] sm:mt-[0px]">
        {teamMembers.map(({ id, image, name, role }) => (
          <TeamMember key={id} id={id} image={image} name={name} role={role} />
        ))}
      </div>
    </section>
  )
}

export default Team
