import * as React from "react";

function Dashboard(props) {
  return (
    <div className="bg-black flex flex-col">
      <div className="self-stretch z-[1] flex w-full flex-col mt-9 pl-20 pr-14 max-md:max-w-full max-md:px-5">
        <div className="self-center z-[1] w-full max-w-[1176px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-8 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  VitalEase Healthcare
                </div>
                <div className="text-white text-xl font-black self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                  VitalEase Healthcare: Empowering Elderly Well-being and Care
                  Management
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e4f1b-4eeb-4c7f-ab63-04eb3cb6a016?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.09] object-contain object-center w-[88px] overflow-hidden self-center max-w-full rounded-[50%]"
                />
                <div className="text-white text-xl font-bold self-stretch mt-4">
                  One Click Emergency Contact
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac9330a7-1219-4251-a88f-7ccf2284c1f9?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.09] object-contain object-center w-[88px] overflow-hidden self-center max-w-full rounded-[50%]"
                />
                <div className="text-white text-xl font-bold self-stretch mt-4">
                  Change Language
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-0 w-[525px] max-w-full grow flex-col self-end max-md:mt-0">
          <div className="self-stretch flex flex-col pl-16 max-md:max-w-full max-md:pl-5">
            <div className="flex w-[463px] max-w-full items-start justify-between gap-5 self-end max-md:flex-wrap">
              <div className="text-white text-xl font-bold underline grow shrink basis-auto mt-5 self-end">
                <a href="mailto:vitaleasehealthcare@gmai.com" target="_blank">
                  vitaleasehealthcare@gmai.com
                </a>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5039751a-6d9c-4ecb-8072-286bf5d1ad29?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[0.92] object-contain object-center w-[47px] overflow-hidden max-w-full self-end"
              />
            </div>
            <div className="flex w-[380px] max-w-full items-start gap-2 mr-10 mt-20 self-end max-md:mr-2.5 max-md:mt-10">
              <div className="text-white text-xl font-black self-center grow shrink basis-auto my-auto">
                Medicines for today
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9951d250-1ba3-4b68-8904-26597fcd1bd8?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[0.96] object-contain object-center w-[76px] overflow-hidden self-stretch max-w-full"
              />
            </div>
            <div className="flex w-[313px] max-w-full items-start gap-2 mr-9 self-end max-md:mr-2.5">
              <div className="text-white text-xl font-black self-center my-auto">
                Tasks for today
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c94855-77cf-4321-b152-65e5511745e0?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                className="aspect-[0.96] object-contain object-center w-[76px] overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
          <div className="self-stretch flex items-start justify-between gap-4 mt-4 pr-1.5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-xl font-black self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Manage monitoring access
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb26dac-a085-4f0d-b2a1-6fc1a747b688?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
              className="aspect-[0.96] object-contain object-center w-[55px] overflow-hidden self-stretch max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex mt-0 w-full flex-col mb-3 pl-20 pr-20 pb-7 max-md:max-w-full max-md:px-5">
        <div className="flex w-[410px] max-w-full flex-col self-start">
          <div className="text-white text-xl font-extrabold self-stretch whitespace-nowrap max-md:text-xl">
            Welcome @User
          </div>
          <div className="self-stretch z-[1] flex flex-col mt-6">
            <div className="text-black text-xl font-bold max-w-[258px] self-stretch bg-emerald-400 w-full grow pl-16 pr-20 pt-96 pb-16 rounded-[29px] max-md:text-xl max-md:pl-5 max-md:pr-6 max-md:pt-24">
              Medication <br />
              Adherence{" "}
            </div>
          </div>
          <div className="text-black text-xl font-bold max-w-[258px] self-center mt-0 max-md:text-xl">
            Medication <br />
            Adherence{" "}
          </div>
        </div>
        <div className="self-center z-[1] mt-0 w-full max-w-[1303px] mb-7 max-md:max-w-full max-md:mt-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <div className="text-stone-900 text-xl font-bold self-stretch whitespace-nowrap bg-green-500 w-full grow pl-20 pr-20 pt-96 pb-20 rounded-[29px] max-md:text-xl max-md:pt-24 max-md:px-5">
                  Daily Tasks
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <div className="text-black text-xl font-bold self-stretch bg-lime-300 w-full grow pl-16 pr-20 pt-96 pb-20 rounded-[29px] max-md:text-xl max-md:pl-5 max-md:pr-6 max-md:pt-24">
                  Emergency <br />
                  Contact
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <div className="flex-col fill-green-300 overflow-hidden self-stretch relative flex aspect-[0.7693798449612403] grow pt-96 pb-14 px-20 max-md:pt-24 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ff8a66d-dfb6-421d-a990-1f44a4c9878e?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative text-black text-xl font-bold self-center whitespace-nowrap max-md:text-xl">
                    Chatbot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;