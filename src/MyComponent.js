import * as React from "react";

function MyComponent(props) {
  return (
    <div className="items-end content-end flex-wrap bg-white flex flex-col">
      <div className="items-end content-end flex-wrap self-stretch flex w-full flex-col max-md:max-w-full">
        <div className="items-end bg-stone-50 self-stretch flex w-full flex-col px-20 py-3.5 max-md:max-w-full max-md:px-5">
          <div className="self-center flex w-full max-w-[1571px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-between items-start flex w-full max-w-[1230px] grow shrink basis-auto gap-5 self-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-emerald-400 text-3xl font-bold self-center grow shrink basis-auto my-auto">
                VitalEase Healthcare
              </div>
              <div className="items-start self-stretch flex w-[678px] max-w-full justify-between gap-5 max-md:flex-wrap">
                <div className="items-start self-center flex w-[476px] max-w-full grow shrink basis-auto justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                  <div className="items-start self-stretch flex justify-between gap-2.5">
                    <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                      Products
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/35b8a748-0dac-4ca9-b8af-592f5052c2af?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-2.5">
                    <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                      Solutions
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f762c85e-4929-4426-8064-5cab2919b135?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-2.5">
                    <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                      Resources
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b04185-d2b3-46b1-bb9b-becbacdb56f5?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-2.5">
                    <div className="text-emerald-400 text-lg font-medium leading-6 self-stretch">
                      Pricing
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5794a1da-d0a9-4fc3-96d6-b6f8dfce1add?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-[2.25] object-contain object-center w-[9px] stroke-[1px] stroke-emerald-400 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
                <div className="text-sky-900 text-lg font-medium leading-6 tracking-tight self-stretch whitespace-nowrap justify-center items-center bg-amber-200 w-[126px] max-w-full pl-10 pr-11 py-6 rounded-lg max-md:px-5">
                  Login
                </div>
              </div>
            </div>
            <div className="text-black text-3xl whitespace-nowrap border shadow-sm bg-yellow-50 w-[280px] max-w-full grow basis-auto pl-14 pr-14 py-5 rounded-[50px] border-solid border-black self-start max-md:px-5">
              Need Help ?
            </div>
          </div>
        </div>
        <div className="bg-stone-50 self-stretch w-full pl-36 pr-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-24 max-md:max-w-full max-md:mt-10">
                <div className="flex w-[674px] max-w-full flex-col pl-5 self-start">
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
                  <div className="flex w-[421px] max-w-full items-start gap-3 mt-6 self-start max-md:flex-wrap">
                    <div className="text-black text-4xl font-bold">95%</div>
                    <div className="text-black text-4xl self-center whitespace-nowrap grow shrink basis-auto my-auto">
                      <span className="font-bold text-green-400">
                        Retention{" "}
                      </span>
                      <span className=" text-black">rate so far</span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3.5 mt-8 self-start max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-4xl font-bold">200+</div>
                    <div className="text-black text-4xl grow shrink basis-auto self-start max-md:max-w-full">
                      <span className="font-bold text-green-400">
                        Hospitals{" "}
                      </span>
                      <span className=" text-stone-900">connected</span>
                      <span className=" text-black"> so far</span>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-3.5 mt-7 self-start max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-4xl font-bold">300+</div>
                    <div className="text-black text-4xl self-center grow shrink basis-auto my-auto max-md:max-w-full">
                      <span className="font-bold text-green-400">Doctors</span>
                      <span className=" text-black"> onboarded so far</span>
                    </div>
                  </div>
                </div>
                <div className="justify-between items-start bg-emerald-400 flex w-[299px] max-w-full gap-5 mt-8 pl-9 pr-8 py-11 rounded-[60px] self-start max-md:px-5">
                  <div className="text-white text-4xl font-medium leading-6 tracking-tighter mt-3">
                    Get started
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4550531b-c0ac-4e43-a05b-ff1c31558093?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                    className="aspect-[1.42] object-contain object-center w-[34px] overflow-hidden max-w-full self-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d52b8abb-b72c-4f86-90b6-847265753a42?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[1.2] object-contain object-center w-[1011px] justify-center items-center overflow-hidden max-w-full my-auto rounded-[60px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="items-end bg-neutral-900 self-stretch flex w-full flex-col pt-36 pb-40 px-20 max-md:max-w-full max-md:px-5 max-md:py-24">
          <div className="self-center w-full max-w-[1622px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b0a3bd-df52-4c4f-bb67-63dc49e0d7b5?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34f6d358-dcfd-411b-abff-9d64195a96da?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.76] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="self-center w-full max-w-[1723px] mt-24 -mb-8 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8138d4b5-b8fc-49f1-918d-03cc1f5abd27?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[2.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="items-start flex w-[670px] max-w-full flex-col self-start">
                    <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                      All in one Chat bot
                    </div>
                    <div className="self-stretch text-white text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
                      We have a network of healthcare workers, hospitals,
                      doctors from reputed institutions. Our software is a
                      product of collaboration of our developer team and medical
                      team.
                    </div>
                  </div>
                  <div className="justify-center items-start bg-emerald-400 flex w-[186px] max-w-full gap-2.5 mt-16 px-10 py-5 rounded-[30px] self-start max-md:mt-10 max-md:px-5">
                    <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch">
                      Try it now
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb5a764b-a2e2-4952-bcb7-17221625c459?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-end bg-lime-200 self-stretch flex w-full flex-col pt-14 pb-9 px-20 max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1599696-8509-454b-a96a-6ad5176e1c47?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
            className="aspect-[1.62] object-contain object-center w-full border overflow-hidden self-center max-w-[1694px] rounded-xl border-solid border-amber-200 max-md:max-w-full"
          />
        </div>
        <div className="items-end bg-neutral-900 self-stretch flex w-full flex-col pt-12 pb-9 px-20 max-md:max-w-full max-md:px-5">
          <div className="self-center w-full max-w-[1518px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba7dd1c9-ae25-497f-bd3c-bfda3ad94831?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.14] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col mt-32 max-md:max-w-full max-md:mt-10">
                  <div className="items-start flex w-[800px] max-w-full flex-col self-start">
                    <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                      <span className="font-light">Complete </span>
                      <span className="font-bold">Encryption</span>
                    </div>
                    <div className="self-stretch text-orange-100 text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
                      Our digital services provides complete security, end to
                      end (E2E) encryption. All the data is stored encrypted and
                      can only be accessed through OTP verification or private
                      keys
                    </div>
                  </div>
                  <div className="justify-center items-start bg-emerald-400 flex w-[197px] max-w-full gap-2.5 mt-16 px-10 py-5 rounded-[30px] self-start max-md:mt-10 max-md:px-5">
                    <div className="text-white text-lg font-medium leading-6 self-stretch">
                      Read more
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/491a213b-a1c8-47cd-8c64-8db98eba85d0?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd479d93-a289-4f3e-aed8-d4c6f828b031?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[0.81] object-contain object-center w-[55px] overflow-hidden max-w-full self-start"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aa1c732-4c2a-4767-b1ab-d7542b5733fb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[4.63] object-contain object-center w-[287px] overflow-hidden self-center max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b195039-5e2f-4434-ad73-6ff1036f7c66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[3.94] object-contain object-center w-[280px] justify-center items-center overflow-hidden self-stretch max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/064b492d-504b-4f4a-94f4-51faabe4f6e9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[3.01] object-contain object-center w-[211px] overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="items-end bg-neutral-900 self-stretch flex w-full flex-col pl-20 pr-20 pb-24 max-md:max-w-full max-md:px-5">
          <div className="self-stretch ml-8 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/542fee5a-2a0c-425c-8d99-e3d3b7f14caa?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.42] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start self-stretch flex flex-col mt-24 max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-orange-100 text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                    Introduce our software into your organisation, get closer to
                    your patients
                  </div>
                  <div className="self-stretch text-white text-lg leading-8 tracking-tight mt-6 max-md:max-w-full">
                    Whitepace teams up with your favorite software. Integrate
                    with over 1000+ apps with Zapier to have all the tools you
                    need for your project success.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-start bg-emerald-400 self-center flex w-[194px] max-w-full gap-2.5 ml-48 mt-9 px-10 py-5 rounded-lg max-md:px-5">
            <div className="text-white text-lg font-medium leading-6 tracking-tight self-stretch">
              Read more
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/183d3e9d-27e2-470c-a236-7d733c5a40e7?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
            />
          </div>
        </div>
        <div className="justify-center items-center bg-lime-200 self-stretch flex w-full flex-col px-20 py-36 max-md:max-w-full max-md:px-5 max-md:py-24">
          <div className="self-center flex w-full max-w-[1480px] flex-col -mb-7 max-md:max-w-full max-md:mb-2.5">
            <div className="justify-center items-center self-stretch flex flex-col max-md:max-w-full">
              <div className="text-neutral-900 text-center text-7xl font-bold tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
                See what our trusted users Say
              </div>
              <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="items-start shadow-2xl bg-neutral-900 flex grow flex-col w-full mx-auto pl-10 pr-20 py-16 rounded-xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                      <div className="items-start self-stretch flex flex-col max-md:mr-0.5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a557be44-fb2f-4202-843f-b08daa7faa8f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-[70px] overflow-hidden max-w-full rounded-[50%] self-start"
                        />
                        <div className="text-white text-lg leading-8 tracking-tight mt-9 self-start">
                          &quot;This software service is a game-changer for
                          older folks! It's incredibly user-friendly, making
                          technology accessible to seniors, and provides
                          essential assistance for daily tasks. A must-have for
                          enhancing their independence.&quot;
                        </div>
                      </div>{" "}
                      <div className="items-start self-stretch flex w-full justify-between gap-5 mt-12 pr-6 max-md:mr-0.5 max-md:mt-10 max-md:pr-5">
                        <div className="text-white text-lg font-bold tracking-tight">
                          Jessie Owner
                        </div>{" "}
                        <div className="items-start flex gap-2 self-start max-md:justify-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c71f019e-8032-40e6-b4cb-d79ca221f8f8?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbce6851-0917-439a-a76d-5773efe48172?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8f88d7-084c-4905-96a3-15551f11f5ce?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a2fba72-16d2-4db7-87a2-405dd0dd07bb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc57804-8754-4e46-860b-6213038ef141?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-start bg-neutral-900 flex grow flex-col w-full mx-auto pl-10 pr-20 py-16 rounded-xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                      <div className="items-start self-stretch flex flex-col max-md:mr-0.5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae75db1c-365d-45ba-9bb3-ff98760703cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-[70px] overflow-hidden max-w-full rounded-[50%] self-start"
                        />{" "}
                        <div className="text-white text-lg leading-8 tracking-tight mt-9 self-start">
                          &quot;This chatbot is a fantastic health buddy for
                          older adults. It simplifies medical info searches and
                          offers tailored exercise recommendations. A must-have
                          for seniors taking charge of their well-being!&quot;
                        </div>
                      </div>{" "}
                      <div className="self-stretch flex w-full items-start justify-between gap-5 mt-20 pr-6 max-md:mr-0.5 max-md:mt-10 max-md:pr-5">
                        <div className="text-white text-lg font-bold tracking-tight">
                          Rakesh Khan
                        </div>{" "}
                        <div className="items-start flex gap-2 self-start max-md:justify-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f7abf4e-cce1-410e-b468-73bc7d6ee730?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be6ef2ae-213f-4d9e-b718-3d813b97e156?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9edcae79-9193-4b89-8a35-e91cd2093c59?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f4ee50-e563-499b-930b-fe0bfd8aa1a8?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42d898c-17f5-48e2-b1dc-3687d0495954?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
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
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42372fba-bbd4-4290-839c-f1c7ad7dba0d?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                          className="aspect-square object-contain object-center w-[70px] overflow-hidden max-w-full rounded-[50%] self-start"
                        />{" "}
                        <div className="text-white text-lg leading-8 tracking-tight mt-9 self-start">
                          &quot;I can't praise this software service enough. It
                          empowers older individuals by simplifying complex
                          tasks and offers peace of mind for their loved ones. A
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
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa95197-1329-4a1f-9ab8-89a1c5dfdd1f?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/360f8089-f5ec-4be4-b070-d8b16855d045?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/568eef9a-2b28-4d4b-ae7e-4fc8274ff12a?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d85d73f-5568-4c20-89b4-a85618e7e2c3?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                            className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f336ef17-5765-4d8f-b33c-94e9f21febe2?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/879f4a3d-a841-4578-8af1-209fa88c9a93?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/764c02d0-d31c-452d-9087-a38adf805e58?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
              />
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-neutral-900 self-stretch flex w-full flex-col pt-36 pb-8 px-20 max-md:max-w-full max-md:pt-24 max-md:px-5">
          <div className="justify-center items-center self-center flex w-full max-w-[1480px] flex-col max-md:max-w-full">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
                  <div className="max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
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
                    <div className="justify-between items-start bg-emerald-400 self-stretch flex w-full gap-2.5 mt-6 pl-10 pr-12 py-5 rounded-lg max-md:px-5">
                      <div className="text-white text-base leading-5 tracking-tight self-stretch">
                        Start today
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59fefc3d-c201-433b-8f5b-a9bfdce25f98?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center max-w-full my-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="items-start self-stretch flex w-[737px] max-w-full justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                <div className="justify-center items-start self-stretch flex gap-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4df58561-92fa-4c93-8da8-c1baeb7179e2?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                    className="aspect-square object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-base leading-5 tracking-tight self-stretch">
                    English
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/119ac3d6-6afa-45d7-abcd-9779abc00231?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cbf8411-7f2f-48be-b289-1f032ddf4a0b?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[0.56] object-contain object-center w-full overflow-hidden flex-1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0f6b5cc-5fab-40b6-a119-65bdc416ca3c?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.21] object-contain object-center w-full overflow-hidden flex-1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c01ce52c-3c50-4def-819c-994112592e4e?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
