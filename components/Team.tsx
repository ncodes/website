import Image from "next/image"

interface TeamMemberProps {
  id: number
  image: string
  name: string
  role: string
  link: undefined | string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TeamMember({ id, image, name, role, link }: TeamMemberProps) {
  return (
    <div className="flex flex-col justify-end basis-[100%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="relative mx-auto w-[212px] h-[253px]">
        <Image className="!relative object-contain w-full h-full" src={image} alt="team-member-image" layout="fill" quality={100} />
      </div>
      <p
        className="font-mitr antialiased font-medium text-[14px] text-white text-center
       leading-[17.64px] tracking-[0.19px] mt-[24px]"
      >
        {name}
      </p>
      <p
        className="font-mitr antialiased font-light text-[14px] text-white text-center
       mt-[3.49px] leading-[17.64px]"
      >
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="hover:text-chinese-green">
            {role}
          </a>
        )}
        {!link && <span>{role}</span>}
      </p>
    </div>
  )
}

function Team() {
  const teamMembers: TeamMemberProps[] = [
    {
      id: 1,
      image: "/kennedy-member.svg",
      name: "Kennedy Idialu",
      role: "CEO",
      link: "https://linktr.ee/ncodes",
    },
    {
      id: 2,
      image: "/odion-member.svg",
      name: "Odion Olumhense",
      role: "COO",
      link: undefined,
    },
    {
      id: 3,
      image: "/vitalis-member.svg",
      name: "Vitalis Nwenyi",
      role: "Designer",
      link: undefined,
    },
    {
      id: 4,
      image: "/michael-member.svg",
      name: "Michael Azonobi",
      role: "Developer",
      link: undefined,
    },
    {
      id: 5,
      image: "/marvin-member.svg",
      name: "Marvin Ogah",
      role: "UI/UX Designer",
      link: undefined,
    },
    {
      id: 6,
      image: "/chris-member.svg",
      name: "Chris Ezike",
      role: "Developer",
      link: undefined,
    },
    {
      id: 7,
      image: "/samuel-member.svg",
      name: "Samuel Bolu",
      role: "Researcher",
      link: undefined,
    },
    {
      id: 8,
      image: "/ileke-member.svg",
      name: "Ileke Airende",
      role: "Marketing",
      link: undefined,
    },
    {
      id: 9,
      image: "/Edwin.svg",
      name: "Edwin Achebo",
      role: "Community",
      link: undefined,
    },
    {
      id: 10,
      image: "/Mona Faith.svg",
      name: "Alumona Faith ",
      role: "Content",
      link: undefined,
    },
    {
      id: 11,
      image: "/Sam Godfrey.svg",
      name: "Sammuel Godfrey",
      role: "Design",
      link: undefined,
    },
    {
      id: 12,
      image: "/Coker.svg",
      name: "Coker Ayodeji",
      role: "Community",
      link: undefined,
    },
    {
      id: 13,
      image: "/Mercy B.svg",
      name: "Ajayi Mercy",
      role: "Community",
      link: undefined,
    },
    {
      id: 14,
      image: "/Juwon.svg",
      name: "Adigun Olorunjuwon",
      role: "Community",
      link: undefined,
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

      <div className="flex flex-row flex-wrap mx-auto justify-start align-start space-y-[64px] lg:space-y-[90px] mt-[72px] sm:mt-[0px]">
        {teamMembers.map(({ id, image, name, role, link }) => (
          <TeamMember key={id} id={id} image={image} name={name} role={role} link={link} />
        ))}
      </div>
    </section>
  )
}

export default Team
