import * as React from "react";

function Chatbot(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="bg-neutral-900 self-stretch w-full pr-11 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
            <div className="bg-gray-800 flex grow flex-col w-full mx-auto pl-7 pr-9 pt-9 pb-7 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="self-stretch flex w-full items-start justify-between gap-5 pl-36 pr-14 py-5 rounded-2xl border-2 border-solid border-white max-md:flex-wrap max-md:px-5">
                <div className="text-white text-xl font-light my-auto">
                  New Chat
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c78413f1-332c-41bd-9ec7-7d945dc898cb?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-square object-contain object-center w-[41px] fill-white overflow-hidden self-stretch max-w-full"
                />
              </div>
              <div className="bg-neutral-900 self-stretch flex w-full items-start justify-between gap-5 mt-16 pl-4 pr-5 py-6 rounded-xl max-md:flex-wrap max-md:mt-10">
                <div className="self-stretch flex items-start justify-between gap-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60fbc530-94e6-4e08-bc02-2764cab0b9c0?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                    className="aspect-[0.94] object-contain object-center w-[34px] overflow-hidden max-w-full self-start"
                  />
                  <div className="text-white text-xl font-bold whitespace-nowrap mt-2 self-start">
                    Previous Messages
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4798fc52-5919-4eb7-9347-9caf7fbb0424?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[0.94] object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                />
              </div>
              <div className="text-white text-xl font-bold self-stretch bg-neutral-900 mt-7 pl-5 pr-7 py-9 rounded-xl max-md:max-w-full max-md:text-xl max-md:pr-5">
                Previous
                <br />
                excercise recommendations
              </div>
              <div className="text-white text-xl font-bold self-stretch bg-neutral-900 mt-7 pl-5 pr-7 py-9 rounded-xl max-md:max-w-full max-md:text-xl max-md:pr-5">
                Previous
                <br />
                remedial
                <br />
                recommendations
              </div>
              <div className="text-white text-xl font-bold self-stretch bg-neutral-900 mt-7 pl-5 pr-7 py-8 rounded-xl max-md:max-w-full max-md:text-xl max-md:pr-5">
                Dietary
                <br />
                recommendations
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="flex w-[825px] max-w-full flex-col self-end">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2be60e43-3505-4c07-b203-5424c3db1a21?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-[1.02] object-contain object-center w-[66px] overflow-hidden max-w-full self-end"
                />
                <div className="text-white text-opacity-40 text-xl font-medium leading-6 tracking-tighter whitespace-nowrap mt-8 self-end max-md:max-w-full max-md:text-xl">
                  VitalChat V2.14
                </div>
              </div>
              <div className="flex w-[500px] max-w-full items-start justify-between gap-5 mt-24 self-start max-md:flex-wrap max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9006f41-cf6a-4eaa-9149-04c61ca96e66?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                  className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full self-start"
                />
                <div className="flex flex-col grow shrink-0 basis-auto mt-4 self-start">
                  <div className="text-neutral-400 text-opacity-60 text-xl font-medium leading-6 tracking-tight self-stretch whitespace-nowrap">
                    VitalChat
                  </div>
                  <div className="text-zinc-100 text-xl font-medium leading-6 tracking-tight self-stretch whitespace-nowrap mt-5">
                    Hello! How can I help you? :)
                  </div>
                </div>
              </div>
              <div className="self-center flex w-full max-w-[1127px] flex-col mt-48 max-md:max-w-full max-md:mt-10">
                <div className="self-stretch max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-30 text-xl font-medium leading-6 tracking-tight self-stretch whitespace-nowrap items-center shadow-sm bg-neutral-900 grow w-full mx-auto pl-10 pr-14 pt-14 pb-10 rounded-xl border-2 border-solid border-zinc-500 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        Recommend exercises for back pain
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-30 text-xl font-medium leading-6 tracking-tight whitespace-nowrap items-center shadow-sm bg-neutral-900 grow w-full mx-auto pl-10 pr-20 py-11 rounded-xl border-2 border-solid border-zinc-500 self-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                        What is a meme?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch mt-8 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-30 text-xl font-medium leading-6 tracking-tight self-stretch whitespace-nowrap items-center shadow-sm bg-neutral-900 grow w-full mx-auto pl-10 pr-14 pt-14 pb-10 rounded-xl border-2 border-solid border-zinc-500 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        How to learn a new Language
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="text-white text-opacity-30 text-xl font-medium leading-6 tracking-tight self-stretch whitespace-nowrap items-center shadow-sm bg-neutral-900 grow w-full mx-auto pl-10 pr-16 pt-14 pb-10 rounded-xl border-2 border-solid border-zinc-500 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        Gift recommendations for grandson
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch mt-8 pr-7 max-md:max-w-full max-md:pr-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[6%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fa95f4c-408d-4fcd-9e52-6a1c0c8aa017?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                      className="aspect-square object-contain object-center w-[78px] overflow-hidden max-w-full my-auto max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[94%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-between items-start shadow-sm bg-neutral-900 flex w-full max-w-[1156px] grow gap-5 mx-auto px-10 py-8 rounded-xl border-2 border-solid border-zinc-500 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                      <div className="text-white text-xl font-medium leading-6 tracking-tight grow shrink basis-auto mt-5 self-start">
                        I can’t find my glasses
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d47a949-be04-4ff9-ba11-156217a32c63?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
                        className="aspect-[1.17] object-contain object-center w-[54px] overflow-hidden max-w-full self-start"
                      />
                    </div>
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


export default Chatbot;