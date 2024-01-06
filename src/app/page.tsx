import Image from "next/image";
import me from "@/assets/images/me.jpg";

export default function Home() {
  return (
    <div>
      <p className="p-4 mt-4 font-light bg-secondary rounded-md text-center leading-relaxed">
        이곳은 웹개발자
        <span className="font-medium">&nbsp;서민석</span>의 포트폴리오 사이트
        입니다. 😊
      </p>
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
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
      <p className="mt-4 leading-loose">
        경영학과를 졸업하고 진로에 대한 고민 끝에 27살에 웹개발자가 되었습니다.
        주력 분야는 Front-End이며, 배움에 대한 열정으로 실무에서 Back-End,
        Native-App 등등 가리지 않고 다양한 경험을 하였습니다. 더 좋은 개발을
        위해 끊임없이 탐구하고, 함께 일하고 싶은 사람이 되기 위해 항상
        노력하겠습니다.
      </p>
      <div className="mt-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Profile
        </h2>
        <p></p>
      </div>
    </div>
  );
}
