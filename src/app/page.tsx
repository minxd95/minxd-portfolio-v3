import Image from "next/image";
import me from "@/assets/images/me.jpg";
import { H2, List } from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WelcomeAnimation } from "@/components/welcome-animation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { ContactMe } from "@/components/contact-me";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PageDescription } from "@/components/page-description";
import { GITHUB_URL, INSTAGRAM_URL, PROJECTS_URL } from "@/constants";

const educations = [
  "2008.03. 길동초등학교 졸업",
  "2011.03. 동신중학교 졸업",
  "2014.03. 한국디지털미디어 고등학교 졸업",
  "2021.08. 상명대학교 경영학부 졸업",
];

const careers = [
  {
    company: "(주)나이비",
    period: "2021.01. ~ 2021.07.",
    descriptions: [
      "지역/날씨별 플레이리스트 추천 기능 (BE)",
      "웹소켓을 이용한 Direct Message 기능 (FE/BE)",
      "실시간 음성채팅 랜덤 매칭 기능 (BE)",
      "기능개선 및 유지보수",
    ],
  },
  {
    company: "(주)플랫타이엑스",
    period: "2021.07. ~ 2023.07.",
    descriptions: [
      "거래소 어플리케이션 제작 (FE)",
      "거래소 웹 사이트 제작 (FE)",
      "회사 소개 웹 사이트 제작 (FE/BE)",
      "생산성 향상을 위한 기술 및 체계 도입",
      "기능개선 및 유지보수",
    ],
  },
  {
    company: "프리랜서",
    period: "2023.07. ~ 현재",
    descriptions: ["더프라이빗 Mobile App (FE)"],
  },
];

const techStacks = {
  frontend: [
    "TypeScript",
    "React",
    "NextJS",
    "Recoil",
    "styled-components",
    "Emotion",
    "tailwindCSS",
    "React-Native",
    "Playwright",
  ],
  backend: ["NodeJS", "Express", "Sequelize", "NestJS"],
  database: ["MySQL", "MariaDB"],
  versionControl: ["Github"],
  cloud: ["Firebase", "Vercel", "AWS"],
  tools: ["Slack", "Figma", "AdobeXD"],
};

export default function Home() {
  return (
    <div>
      <WelcomeAnimation />
      <PageDescription>
        이곳은 웹개발자
        <span className="font-medium">&nbsp;서민석</span>의 포트폴리오
        사이트입니다. 😊
      </PageDescription>
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-y-3">
          <span className="text-4xl font-bold">서민석</span>
          <span className="font-light">
            1995년 10월 출생 / 서울 강동구 거주
          </span>
        </div>
        <div className="self-center sm:self-auto relative w-28 h-28 mt-8 sm:mt-0 rounded-full overflow-hidden">
          <Image src={me} alt="Minseok Seo" fill className="object-cover" />
        </div>
      </div>
      <p className="mt-6 leading-loose first-letter:text-2xl first-letter:font-medium">
        주력 분야는 Front-End이며, 배움에 대한 열정으로 실무에서 Back-End,
        Native-App 등등 가리지 않고 다양한 경험을 하였습니다. 더 좋은 개발을
        위해 끊임없이 탐구하고, 함께 일하고 싶은 사람이 되기 위해 항상
        노력하겠습니다.
      </p>
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-1">
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 flex justify-center items-center"
            asChild
          >
            <Link href={INSTAGRAM_URL} target="_blank">
              <Instagram className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 flex justify-center items-center"
            asChild
          >
            <Link href={GITHUB_URL} target="_blank">
              <Github className="w-5 h-5" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" asChild>
            <Link target="_blank" href={PROJECTS_URL}>
              프로젝트 구경하기
            </Link>
          </Button>
          <ContactMe />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-8">
        <div>
          <H2>학력 🎓</H2>
          <div className="mt-2 flex flex-col">
            {educations.map((education, idx) => (
              <span key={idx.toString()} className="py-2">
                {education}
              </span>
            ))}
          </div>
        </div>
        <div>
          <H2 className="flex justify-between">
            <span>경력 📝</span>
            <Link
              target="_blank"
              href="/resume.pdf"
              className="flex mt-4 text-sm font-light justify-end items-center gap-1"
            >
              <span>상세 경력 기술서 보러가기</span>
              <ExternalLink className="w-[1rem] h-[1rem]" />
            </Link>
          </H2>
          <Accordion type="multiple" className="w-full mt-2">
            {careers
              .slice(0)
              .reverse()
              .map((career, idx) => (
                <AccordionItem
                  value={idx.toString()}
                  key={idx.toString()}
                  className="border-none"
                >
                  <AccordionTrigger className="font-normal py-2 rounded-md hover:no-underline">
                    <div className="flex">
                      <span className="w-40 text-left">{career.period}</span>
                      <span className="font-medium">{career.company}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <List className="my-2">
                      {career.descriptions.map((description, idx) => (
                        <li key={idx.toString()} className="first:mt-0">
                          {description}
                        </li>
                      ))}
                    </List>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
        <div>
          <H2>기술 스택 🛠️</H2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">분야</TableHead>
                <TableHead>기술</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>프론트엔드</TableCell>
                <TableCell className="flex flex-wrap gap-1">
                  {techStacks.frontend.map((tech, idx) => (
                    <Badge key={idx.toString()} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>백엔드</TableCell>
                <TableCell className="flex flex-wrap gap-1">
                  {techStacks.backend.map((tech, idx) => (
                    <Badge key={idx.toString()} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>데이터베이스</TableCell>
                <TableCell className="flex flex-wrap gap-1">
                  {techStacks.database.map((tech, idx) => (
                    <Badge key={idx.toString()} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>클라우드 & 배포</TableCell>
                <TableCell className="flex flex-wrap gap-1">
                  {techStacks.cloud.map((tech, idx) => (
                    <Badge key={idx.toString()} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>버전관리</TableCell>
                <TableCell className="flex flex-wrap gap-1">
                  {techStacks.versionControl.map((tech, idx) => (
                    <Badge key={idx.toString()} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>도구</TableCell>
                <TableCell className="flex flex-wrap gap-1">
                  {techStacks.tools.map((tech, idx) => (
                    <Badge key={idx.toString()} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <H2>저는 이렇게 일해요 😁</H2>
          <List>
            <li>
              프로젝트를 대충 마치기보다, 지속 가능한 프로젝트로 설계하는 것을
              중요시합니다.
            </li>
            <li>
              발생한 문제를 단순히 해결하기보다, 근본적인 원인을 파악하여
              해결합니다.
            </li>
            <li>모든 인연을 소중하게 생각하며 항상 최선을 다합니다.</li>
          </List>
        </div>
      </div>
    </div>
  );
}
