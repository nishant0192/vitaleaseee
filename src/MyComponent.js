import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="justify-between items-center bg-stone-50 self-stretch flex w-full flex-col px-20 py-4 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-start self-center flex w-full max-w-[1492px] gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-emerald-400 text-3xl font-bold self-center grow shrink basis-auto my-auto">
            VitalEase Healthcare
          </div>
          <div className="items-start self-stretch flex w-[940px] max-w-full justify-between gap-5 max-md:flex-wrap">
            <div className="items-start self-center flex w-[476px] max-w-full grow shrink basis-auto justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
              <div className="items-start self-stretch flex justify-between gap-2.5">
                <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                  Products
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c9d6fd7-efaf-4be6-b713-32a7d458a514?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                />
              </div>
              <div className="items-start self-stretch flex justify-between gap-2.5">
                <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                  Solutions
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/821265fe-5c4f-4479-863d-e43e1028931b?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                />
              </div>
              <div className="items-start self-stretch flex justify-between gap-2.5">
                <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                  Resources
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/84ceb18b-2976-4c76-bdd2-6e17fd0bdd9b?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                />
              </div>
              <div className="items-start self-stretch flex justify-between gap-2.5">
                <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                  Pricing
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8226d26-aa5e-4a80-a7d4-4ce40279a5d6?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                />
              </div>
            </div>
            <div className="justify-between items-start self-stretch flex w-[388px] max-w-full grow shrink basis-auto gap-5">
              <div className="text-sky-900 text-lg font-medium leading-6 tracking-tight self-stretch whitespace-nowrap justify-center items-center bg-amber-200 w-[126px] max-w-full px-10 py-5 rounded-lg max-md:px-5">
                Login
              </div>
              <div className="justify-between items-start bg-emerald-400 self-stretch flex w-[238px] max-w-full gap-2.5 px-6 py-5 rounded-lg max-md:px-5">
                <div className="text-white text-lg font-medium leading-6 tracking-tight">
                  Try Premium for free
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e550ae4-53f9-4e98-a865-9bf7eb32b4c8?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-square object-contain object-center w-2.5 overflow-hidden self-center max-w-full my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-50 self-stretch flex w-full flex-col pt-36 pb-52 px-20 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="self-center mb-0 w-full max-w-[1654px] max-md:max-w-full max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-7">
                <div className="flex w-[435px] max-w-full items-start gap-4 self-start max-md:flex-wrap max-md:justify-center">
                  <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch whitespace-nowrap items-center bg-pink-300 flex-1 px-5 py-2 rounded-md">
                    Assistance
                  </div>
                  <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch whitespace-nowrap items-center bg-blue-300 flex-1 pl-5 pr-7 py-2.5 rounded-md max-md:pr-5">
                    Well being
                  </div>
                  <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch whitespace-nowrap justify-center items-center bg-orange-300 flex-1 pl-5 pr-6 py-3 rounded-md max-md:pr-5">
                    Connection
                  </div>
                </div>
                <div className="text-black text-6xl font-light tracking-tighter mt-8 self-start max-md:max-w-full max-md:text-4xl">
                  <span className="font-bold">Ease</span>
                  <span className="font-light">
                    {" "}
                    your healthcare
                    <br />
                    with just your{" "}
                  </span>
                  <span className="font-bold">fingertips</span>
                </div>
                <div className="text-black text-lg leading-8 tracking-tight mt-1.5 self-start max-md:max-w-full">
                  VitalEase is a revolutionary software service designed to
                  provide unwavering assistance and support to our cherished
                  senior citizens.
                </div>
                <div className="flex w-[421px] max-w-full items-start gap-3 mt-5 self-start max-md:flex-wrap">
                  <div className="text-black text-4xl font-bold">95%</div>
                  <div className="text-black text-4xl self-center whitespace-nowrap grow shrink basis-auto my-auto">
                    <span className="font-bold text-green-400">Retention </span>
                    <span className=" text-black">rate so far</span>
                  </div>
                </div>
                <div className="justify-between items-start bg-emerald-400 flex w-[299px] max-w-full gap-5 mt-10 pl-9 pr-8 py-11 rounded-[60px] self-start max-md:px-5">
                  <div className="text-white text-4xl font-medium leading-6 tracking-tighter mt-3">
                    Get started
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e575d199-91e7-460b-8f60-cb9f06e97915?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                    className="aspect-[1.42] object-contain object-center w-[34px] overflow-hidden max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bef1993b-d74b-483c-b158-bf9adec7fc37?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[1.63] object-contain object-center w-full justify-center items-center overflow-hidden grow rounded-[60px] max-md:max-w-full max-md:mt-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-start bg-neutral-900 self-stretch z-[1] flex mt-0 w-full flex-col pt-36 pb-80 px-20 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="justify-center items-center self-center flex mb-0 w-full max-w-[1480px] flex-col max-md:max-w-full max-md:mb-2.5">
          <div className="self-center w-full max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="items-start flex w-[672px] max-w-full flex-col self-start">
                    <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                      Our Dashboard
                    </div>
                    <div className="self-stretch text-white text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
                      Dashboard includes all kind of tools and scheduling
                      sections for the elderly, easy to use, easy to learn,
                      completely customizable. We also provide registered and
                      verified relatives and healthcare assistances monitoring
                      services.
                    </div>
                  </div>
                  <div className="justify-center items-start bg-emerald-400 flex w-[257px] max-w-full gap-2.5 mt-16 px-10 py-5 rounded-[30px] self-start max-md:mt-10 max-md:px-5">
                    <div className="text-white text-lg font-medium leading-6 tracking-tight">
                      Checkout features
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b81db9f-6cc7-467b-bc2a-db26480cc6ef?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-blue-200 flex w-[748px] h-[547px] flex-col mx-auto max-md:max-w-full max-md:mt-10" />
              </div>
            </div>
          </div>
          <div className="items-start flex w-[670px] max-w-full grow flex-col mt-64 self-end max-md:mt-10">
            <div className="items-start flex w-full flex-col self-start max-md:max-w-full">
              <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                All in one Chat bot
              </div>
              <div className="self-stretch text-white text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
                We have a network of healthcare workers, hospitals, doctors from
                reputed institutions. Our software is a product of collaboration
                of our developer team and medical team.
              </div>
            </div>
            <div className="justify-center items-start bg-emerald-400 flex w-[186px] max-w-full gap-2.5 mt-16 px-10 py-5 rounded-[30px] self-start max-md:mt-10 max-md:px-5">
              <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch">
                Try it now
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7525f937-9473-4789-885f-c2f4bf4081a3?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-lime-200 self-stretch flex w-full flex-col px-20 py-36 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="justify-center items-center self-center flex w-full max-w-[1481px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
          <div className="items-center self-stretch flex flex-col max-md:max-w-full">
            <div className="self-stretch text-neutral-900 text-center text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
              Choose Your Plan
            </div>
            <div className="text-neutral-900 text-center text-lg leading-8 tracking-tight self-center w-[979px] max-w-[979px] mt-6 max-md:max-w-full">
              Schedule your medications, daily exercises, tasks, get access to
              emergency contacts and get ease assistance
              <br /> with our chatbot.
            </div>
          </div>
          <div className="justify-center self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="justify-center items-start border bg-stone-50 flex flex-col w-full m-auto px-11 py-10 rounded-xl border-solid border-amber-200 max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="items-start flex w-96 max-w-full flex-col self-start">
                    <div className="self-stretch text-neutral-800 text-2xl font-semibold leading-9">
                      Free
                    </div>
                    <div className="self-stretch text-neutral-800 text-4xl font-bold tracking-tighter mt-6">
                      $0
                    </div>
                    <div className="self-stretch text-neutral-800 text-lg font-medium leading-6 tracking-tight mt-6">
                      Capture ideas and find them quickly
                    </div>
                  </div>
                  <div className="items-start flex w-96 max-w-full flex-col mt-6 self-start">
                    <div className="items-start self-stretch flex justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95990a24-7cd6-42a7-8a6a-204ab5445c6f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Sync unlimited devices
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f5b08b3-d58c-4599-bb5e-99838f818944?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        10 GB monthly uploads
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c67ccf6-13ec-4961-8f4d-d932edcde745?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        200 MB max. note size
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/384af40c-3672-4801-83d0-7ee67b1564c9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Customize Home dashboard and access extra widgets
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/62972029-0207-441a-a95a-f2783f258a93?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Connect primary Google Calendar account
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c394322-b6f6-4655-aa28-4adec8736e48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Add due dates, reminders, and notifications to your
                        tasks
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-800 text-base font-medium tracking-tight whitespace-nowrap justify-center items-center border bg-stone-50 w-[166px] max-w-full mt-6 px-10 py-4 rounded-lg border-solid border-amber-200 self-start max-md:px-5">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-start shadow-2xl bg-stone-50 flex grow flex-col w-full mx-auto px-11 py-20 rounded-xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                  <div className="items-start flex w-[385px] max-w-full flex-col self-start">
                    <div className="self-stretch text-emerald-950 text-2xl font-semibold leading-9">
                      Personal
                    </div>
                    <div className="self-stretch text-emerald-950 text-4xl font-bold tracking-tighter mt-6">
                      $11.99
                    </div>
                    <div className="self-stretch text-emerald-950 text-lg font-medium leading-6 tracking-tight mt-6">
                      Keep home and family on track
                    </div>
                  </div>
                  <div className="items-start flex w-[385px] max-w-full flex-col mt-6 self-start">
                    <div className="items-start self-stretch flex justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23ce899-595b-4294-8caf-fb7aef371ae2?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-emerald-950 text-lg font-medium leading-6 tracking-tight self-stretch grow shrink basis-auto">
                        Sync unlimited devices
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5496756e-84d2-4070-a835-0b682a8b29eb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-emerald-950 text-lg font-medium leading-6 tracking-tight self-stretch grow shrink basis-auto">
                        10 GB monthly uploads
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eec4d68-a805-49fa-8916-1da2dc509010?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-emerald-950 text-lg font-medium leading-6 tracking-tight self-stretch grow shrink basis-auto">
                        200 MB max. note size
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0d8e79-5f62-4afa-8bf1-7cc88075518a?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-emerald-950 text-lg font-medium leading-6 tracking-tight self-stretch grow shrink basis-auto">
                        Customize Home dashboard and access extra widgets
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd5f41f-8db4-4798-a9d4-7b6a68d32bd1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-emerald-950 text-lg font-medium leading-6 tracking-tight self-stretch grow shrink basis-auto">
                        Connect primary Google Calendar account
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa288e56-c20a-4621-9792-b72d25aa4ee0?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-emerald-950 text-lg font-medium leading-6 tracking-tight self-stretch grow shrink basis-auto">
                        Add due dates, reminders, and notifications to your
                        tasks
                      </div>
                    </div>
                  </div>
                  <div className="text-stone-50 text-base font-medium tracking-tight whitespace-nowrap justify-center items-center bg-emerald-400 w-[166px] max-w-full mt-6 px-10 py-4 rounded-lg self-start max-md:px-5">
                    Get Started
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-start border bg-stone-50 flex flex-col w-full m-auto px-11 py-10 rounded-xl border-solid border-amber-200 max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="items-start flex w-96 max-w-full flex-col self-start">
                    <div className="self-stretch text-neutral-800 text-2xl font-semibold leading-9">
                      Organization
                    </div>
                    <div className="self-stretch text-neutral-800 text-4xl font-bold tracking-tighter mt-6">
                      $49.99
                    </div>
                    <div className="self-stretch text-neutral-800 text-lg font-medium leading-6 tracking-tight mt-6">
                      Capture ideas and find them quickly
                    </div>
                  </div>
                  <div className="items-start flex w-96 max-w-full flex-col mt-6 self-start">
                    <div className="items-start self-stretch flex justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e022867c-417a-46a3-afae-8f233c6f4ccc?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Sync unlimited devices
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb78441d-cc62-4363-85d6-bcd8bcb412ac?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        10 GB monthly uploads
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aa98416-5fc8-4685-a8d8-fa95303fb18b?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        200 MB max. note size
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e54b70a-0a1e-4ae3-b085-82f9fd98db31?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Customize Home dashboard and access extra widgets
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b902a14f-1436-4c9d-b7e9-1aa0e80a9593?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Connect primary Google Calendar account
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/770acb5c-2073-4eec-8920-19ed0f624142?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[0.95] object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                      />
                      <div className="text-neutral-800 text-base leading-5 tracking-tight self-stretch grow shrink basis-auto">
                        Add due dates, reminders, and notifications to your
                        tasks
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-800 text-base font-medium tracking-tight whitespace-nowrap justify-center items-center border bg-stone-50 w-[166px] max-w-full mt-6 px-10 py-4 rounded-lg border-solid border-amber-200 self-start max-md:px-5">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center bg-neutral-900 self-stretch flex w-full flex-col pt-36 pb-72 px-20 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="items-start flex mb-0 w-[800px] max-w-full flex-col ml-24 self-start max-md:mb-2.5">
          <div className="items-start flex w-full flex-col self-start max-md:max-w-full">
            <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
              <span className="font-light">Complete </span>
              <span className="font-bold">Encryption</span>
            </div>
            <div className="self-stretch text-orange-100 text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
              Our digital services provides complete security, end to end (E2E)
              encryption. All the data is stored encrypted and can only be
              accessed through OTP verification or private keys
            </div>
          </div>
          <div className="justify-center items-start bg-emerald-400 flex w-[197px] max-w-full gap-2.5 mt-16 px-10 py-5 rounded-[30px] self-start max-md:mt-10 max-md:px-5">
            <div className="text-white text-lg font-medium leading-6 self-stretch">
              Read more
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98dbd306-1ad9-4b2a-8044-6e7d6933aae8?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
            />
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-lime-200 self-stretch flex w-full flex-col px-20 py-36 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="justify-center items-center self-center flex w-full max-w-[1482px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
          <div className="text-neutral-800 text-center text-7xl font-bold tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
            Our sponsors
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13198167-f1de-4b7b-a6f8-205cb5f4f39b?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-[0.81] object-contain object-center w-[55px] overflow-hidden max-w-full self-start"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f68d472-7c78-4681-a91d-691acf516f45?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-[4.63] object-contain object-center w-[287px] overflow-hidden self-center max-w-full my-auto"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9700caf9-6a24-45e6-9fcd-08c6c00a75f5?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-[3.94] object-contain object-center w-[280px] justify-center items-center overflow-hidden self-stretch max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f8eab18-61e4-4bda-a764-2bdf4e52ec5d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-[3.06] object-contain object-center w-[211px] overflow-hidden self-stretch max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 self-stretch flex w-full flex-col px-20 py-36 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="items-start flex w-[798px] max-w-full flex-col mr-36 -mb-7 self-end max-md:mr-2.5 max-md:mb-2.5">
          <div className="items-start flex w-full flex-col self-start max-md:max-w-full">
            <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
              Work with Your Favorite Apps Using whitepace
            </div>
            <div className="self-stretch text-white text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </div>
          </div>
          <div className="justify-center items-start bg-emerald-400 flex w-[194px] max-w-full gap-2.5 mt-16 px-10 py-5 rounded-lg self-start max-md:mt-10 max-md:px-5">
            <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch">
              Read more
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b1b8bfd-79fb-49a9-833d-57b8b1c17c9c?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
            />
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-lime-200 self-stretch flex w-full flex-col px-20 py-36 max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="self-center flex w-full max-w-[1480px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
          <div className="justify-center items-center self-stretch flex flex-col max-md:max-w-full">
            <div className="text-emerald-400 text-center text-7xl font-bold tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
              See what our trusted users Say
            </div>
            <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-start shadow-2xl bg-neutral-900 flex grow flex-col w-full mx-auto pl-10 pr-20 py-16 rounded-xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                    <div className="items-start self-stretch flex flex-col max-md:mr-0.5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35aac7ae-d8c2-4934-a128-e000538846ee?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-[70px] overflow-hidden max-w-full rounded-[50%] self-start"
                      />
                      <div className="text-white text-lg leading-8 tracking-tight mt-9 self-start">
                        &quot;This software service is a game-changer for older
                        folks! It's incredibly user-friendly, making technology
                        accessible to seniors, and provides essential assistance
                        for daily tasks. A must-have for enhancing their
                        independence.&quot;
                      </div>
                    </div>{" "}
                    <div className="items-start self-stretch flex w-full justify-between gap-5 mt-12 pr-6 max-md:mr-0.5 max-md:mt-10 max-md:pr-5">
                      <div className="text-white text-lg font-bold tracking-tight">
                        Jessie Owner
                      </div>{" "}
                      <div className="items-start flex gap-2 self-start max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07461b84-0b64-4bd8-a882-1e4e4c769cb7?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb41fb3c-82a0-453a-a7ff-fc3f97948bcb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9df518-bc47-4ca1-9dff-79c66ef2b6e1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9244f04d-15a3-4e65-8e78-f3b2d8fe272e?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c249e2b5-e143-4ae1-babf-50a90baab942?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="justify-center items-start bg-neutral-900 flex grow flex-col w-full mx-auto pl-10 pr-20 py-16 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
                    <div className="items-start self-stretch flex flex-col max-md:mr-0.5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7a3d0fa-e50c-495c-8b9a-6f08ad6d8e7d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-[70px] overflow-hidden max-w-full rounded-[50%] self-start"
                      />{" "}
                      <div className="text-white text-lg leading-8 tracking-tight mt-9 self-start">
                        &quot;This chatbot is a fantastic health buddy for older
                        adults. It simplifies medical info searches and offers
                        tailored exercise recommendations. A must-have for
                        seniors taking charge of their well-being!&quot;
                      </div>
                    </div>{" "}
                    <div className="self-stretch flex w-full items-start justify-between gap-5 mt-20 pr-6 max-md:mr-0.5 max-md:mt-10 max-md:pr-5">
                      <div className="text-white text-lg font-bold tracking-tight">
                        Rakesh Khan
                      </div>{" "}
                      <div className="items-start flex gap-2 self-start max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db5112ca-504b-4248-9227-41f2ada4541d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22e10b97-b2fc-4428-b49c-c5f6c2f8f9ca?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca107948-3997-4119-ad4c-b1f6e968d2c1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be4c53b0-6e08-4b9c-ae11-98f9cf094a7a?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />{" "}
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08acb01f-871d-425a-9694-0b99106a0d34?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start bg-neutral-900 flex grow flex-col w-full mx-auto pl-10 pr-20 py-16 rounded-xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                    <div className="items-start self-stretch flex flex-col max-md:mr-0.5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76c4ef91-d6df-4e8f-b167-425c44f7bd48?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-[70px] overflow-hidden max-w-full rounded-[50%] self-start"
                      />{" "}
                      <div className="text-white text-lg leading-8 tracking-tight mt-9 self-start">
                        &quot;I can't praise this software service enough. It
                        empowers older individuals by simplifying complex tasks
                        and offers peace of mind for their loved ones. A
                        fantastic tool for bridging the generation gap and
                        promoting self-reliance.&quot;
                      </div>
                    </div>
                    <div className="items-start self-stretch flex w-full justify-between gap-5 mt-12 pr-6 max-md:mr-0.5 max-md:mt-10 max-md:pr-5">
                      <div className="text-white text-lg font-bold tracking-tight">
                        Salin Shah
                      </div>
                      <div className="items-start flex gap-2 self-start max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/190398ff-aaa2-4630-a688-92ca6660b9e4?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6381abc-6a89-4361-b3f1-f69d9a9ac370?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f3226d-dce8-477f-909d-3aab94fed8b0?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a50ea4dc-fbf9-4f56-bbcd-aafea3c8d7d0?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9fce3fd-cf54-4e86-863d-1d0e849cefbc?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-center flex w-[250px] max-w-full justify-between gap-5 mt-16 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56962d36-4416-446a-a90d-ff091bbfc016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8577aa94-6db7-4862-ac07-062569d612e8?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
            />
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-emerald-400 self-stretch flex w-full flex-col pt-36 pb-8 px-20 max-md:max-w-full max-md:pt-24 max-md:px-5">
        <div className="justify-center items-center self-center flex w-full max-w-[1480px] flex-col max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
                <div className="max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                      <div className="items-start flex grow flex-col mt-1.5 max-md:mt-10">
                        <div className="text-white text-3xl font-bold self-stretch whitespace-nowrap">
                          VitalEase
                        </div>
                        <div className="text-stone-100 text-lg leading-8 tracking-tight self-stretch mt-6">
                          whitepace was created for the new ways we live and
                          work. We make a better workspace around the world
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-start flex flex-col max-md:mt-10">
                        <div className="text-white text-lg font-bold tracking-tight self-stretch whitespace-nowrap">
                          Product
                        </div>
                        <div className="text-amber-200 text-base leading-5 tracking-tight self-stretch whitespace-nowrap mt-4">
                          Overview
                        </div>
                        <div className="text-white text-base leading-5 tracking-tight self-stretch whitespace-nowrap mt-4">
                          Pricing
                        </div>
                        <div className="text-white text-base leading-5 tracking-tight self-stretch mt-4">
                          Customer stories
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-start flex flex-col max-md:mt-10">
                        <div className="text-white text-lg font-bold tracking-tight self-stretch whitespace-nowrap">
                          Resources
                        </div>
                        <div className="text-white text-base leading-5 tracking-tight self-stretch whitespace-nowrap mt-4">
                          Blog
                        </div>
                        <div className="text-white text-base leading-5 tracking-tight self-stretch whitespace-nowrap mt-4">
                          Guides & tutorials
                        </div>
                        <div className="text-white text-base leading-5 tracking-tight self-stretch mt-4">
                          Help center
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[15%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col max-md:mt-10">
                  <div className="text-white text-lg font-bold tracking-tight self-stretch whitespace-nowrap">
                    Company
                  </div>
                  <div className="text-white text-base leading-5 tracking-tight self-stretch whitespace-nowrap mt-4">
                    About us
                  </div>
                  <div className="text-white text-base leading-5 tracking-tight self-stretch whitespace-nowrap mt-4">
                    Careers
                  </div>
                  <div className="text-white text-base leading-5 tracking-tight self-stretch mt-4">
                    Media kit
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex grow flex-col max-md:mt-10">
                  <div className="text-white text-3xl font-bold leading-9 tracking-tight self-stretch whitespace-nowrap">
                    Try It Today
                  </div>
                  <div className="text-white text-base leading-5 tracking-tight self-stretch mt-6">
                    Get started for free. Add your whole team as your needs
                    grow.
                  </div>
                  <div className="justify-between items-start bg-neutral-900 self-stretch flex w-full gap-2.5 mt-6 pl-10 pr-12 py-5 rounded-lg max-md:px-5">
                    <div className="text-white text-base leading-5 tracking-tight self-stretch">
                      Start today
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb4f8e56-5d76-423f-9e8b-e82aeae06615?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 self-stretch w-full h-px mt-16 max-md:max-w-full max-md:mt-10" />
          <div className="justify-between items-start self-center flex w-full gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
            <div className="items-start self-stretch flex w-[737px] max-w-full justify-between gap-5 max-md:flex-wrap max-md:justify-center">
              <div className="justify-center items-start self-stretch flex gap-1.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f91f6730-73a7-423a-ad02-c6e81451b4e7?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.06] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                />
                <div className="text-white text-base leading-5 tracking-tight self-stretch">
                  English
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a1a7aa7-30a0-47fc-9579-73a1a44f3153?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[2] object-contain object-center w-3 stroke-[1px] stroke-white overflow-hidden self-center max-w-full my-auto"
                />
              </div>
              <div className="text-white text-base leading-5 tracking-tight">
                Terms & privacy
              </div>
              <div className="text-white text-base leading-5 tracking-tight self-stretch">
                Security
              </div>
              <div className="text-white text-base leading-5 tracking-tight self-stretch">
                Status
              </div>
              <div className="text-white text-base leading-5 tracking-tight self-stretch whitespace-nowrap">
                ©2021 Whitepace LLC.
              </div>
            </div>
            <div className="items-start self-center flex w-[105px] max-w-full justify-between gap-5 my-auto max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10df76b4-e873-4b9f-b719-0284782520fd?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[0.56] object-contain object-center w-full overflow-hidden flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a945a3f-1cbc-4c41-81f9-5ada3f6a9ff7?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[1.21] object-contain object-center w-full overflow-hidden flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7d01777-27e9-4d6f-97c7-78d556af0760?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


