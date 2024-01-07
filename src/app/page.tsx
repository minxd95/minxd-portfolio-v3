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

const educations = [
  "1995. 서울 출생",
  "2008. 길동초등학교 졸업",
  "2011. 동신중학교 졸업",
  "2014. 한국디지털미디어 고등학교 졸업",
  "2022. 상명대학교 경영학부 졸업",
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
    descriptions: ["더프라이빗 Mobile App"],
  },
];

export default function Home() {
  return (
    <div>
      <WelcomeAnimation />
      <p className="p-4 mt-4 font-light bg-secondary rounded-md text-center leading-relaxed">
        이곳은 웹개발자
        <span className="font-medium">&nbsp;서민석</span>의 포트폴리오
        사이트입니다. 😊
      </p>
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-y-3">
          <span className="text-4xl font-bold">Minseok Seo</span>
          <span className="font-light">
            Seoul, Korea / Front-End Web Developer
          </span>
        </div>
        <div className="self-center sm:self-auto relative w-32 h-32 mt-8 sm:mt-0 rounded-full overflow-hidden">
          <Image src={me} alt="Minseok Seo" fill className="object-cover" />
        </div>
      </div>
      <p className="mt-6 leading-loose">
        경영학과를 졸업하고 진로에 대한 고민 끝에 27살에 웹개발자가 되었습니다.
        주력 분야는 Front-End이며, 배움에 대한 열정으로 실무에서 Back-End,
        Native-App 등등 가리지 않고 다양한 경험을 하였습니다. 더 좋은 개발을
        위해 끊임없이 탐구하고, 함께 일하고 싶은 사람이 되기 위해 항상
        노력하겠습니다.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <H2>Education</H2>
          <div className="mt-2 flex flex-col">
            {educations.map((education, idx) => (
              <span key={idx.toString()} className="py-2">
                {education}
              </span>
            ))}
          </div>
        </div>
        <div>
          <H2>Career</H2>
          <Accordion
            type="multiple"
            defaultValue={["0"]}
            className="w-full mt-2"
          >
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
      </div>
    </div>
  );
}
