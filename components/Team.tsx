import Image from "next/image"
import { useTranslation } from "next-i18next"

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
        leading-[17.64px] tracking-[0.19px] mt-[5px]"
      >
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="hover:text-chinese-green">
            {name}
          </a>
        )}
        {!link && <span>{name}</span>}
      </p>
    </div>
  )
}

function Team() {
  const { t } = useTranslation()

  const teamMembers: TeamMemberProps[] = [
    {
      id: 1,
      image: "/team_droids/ki.png",
      name: "Kennedy",
      role: t("about.team.role.ceo"),
      link: "https://twitter.com/ncodes",
    },
    {
      id: 2,
      image: "/team_droids/o.png",
      name: "Odion",
      role: t("about.team.role.coo"),
      link: "https://twitter.com/ooodion",
    },
    {
      id: 3,
      image: "/team_droids/v.png",
      name: "Vitalis",
      role: t("about.team.role.design"),
      link: undefined,
    },
    {
      id: 5,
      image: "/team_droids/mav.png",
      name: "Marvin",
      role: t("about.team.role.design"),
      link: undefined,
    },
    {
      id: 8,
      image: "/team_droids/il.png",
      name: "Ileke",
      role: t("about.team.role.marketing"),
      link: undefined,
    },
    {
      id: 9,
      image: "/team_droids/ed.png",
      name: "Edwin",
      role: t("about.team.role.community"),
      link: undefined,
    },
    {
      id: 11,
      image: "/team_droids/sa.png",
      name: "Samuel",
      role: t("about.team.role.design"),
      link: undefined,
    },
    {
      id: 14,
      image: "/team_droids/ju.png",
      name: "Adigun",
      role: t("about.team.role.community"),
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
        className="font-mitr antialiased font-semibold text-[48px] lg:text-[50px] leading-[48px] lg:leading-[72px]
       text-white text-center -tracking-[0.6px] lg:-tracking-[0.9px]"
      >
        {t("about.team.title")}
      </p>

      <div className="flex flex-row flex-wrap mx-auto justify-start align-start space-y-[64px] lg:space-y-[30px] mt-[72px] sm:mt-[30px]">
        {teamMembers.map(({ id, image, name, role, link }) => (
          <TeamMember key={id} id={id} image={image} name={name} role={role} link={link} />
        ))}
      </div>
    </section>
  )
}

export default Team
