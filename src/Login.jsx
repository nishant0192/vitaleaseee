import * as React from "react";

function Login(props) {
  return (
    <main className="bg-stone-50 flex flex-col pl-12 pr-16 max-md:px-5">
      <header className="self-center flex w-full max-w-[1808px] items-start justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb4f3982-1171-4b8f-926e-a3fdd73a3bba?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
          className="aspect-[1.02] object-contain object-center w-[66px] overflow-hidden self-stretch max-w-full"
          alt="Logo"
        />
        <h1 className="text-black text-4xl font-bold self-center whitespace-nowrap my-auto">
          VitalEase Healthcare
        </h1>
      </header>
      <h2 className="text-black text-5xl font-bold whitespace-nowrap ml-56 mt-14 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Welcome back, Olivia
      </h2>
      <p className="text-black text-2xl whitespace-nowrap ml-56 mt-9 self-start max-md:max-w-full">
        Welcome back, Please enter your details
      </p>
      <form className="border bg-stone-50 flex w-[410px] max-w-full items-start gap-4 ml-64 mt-9 pl-14 pr-16 py-4 rounded-3xl border-solid border-black self-start max-md:ml-2.5 max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d8ef29f-c291-42df-aebb-daa03b968ef1?apiKey=c8124662f4cd41fcb5a7c76ea0f8f4e3&"
          className="aspect-[0.92] object-contain object-center w-[45px] overflow-hidden self-stretch max-w-full"
          alt="Google Logo"
        />
        <button className="text-black text-3xl font-medium self-center whitespace-nowrap my-auto">
          Login with Google
        </button>
      </form>
      <p className="text-black text-3xl font-light whitespace-nowrap ml-96 mt-7 self-start max-md:ml-2.5">
        or
      </p>
      <div className="flex w-[410px] max-w-full flex-col ml-64 mt-12 self-start max-md:ml-2.5 max-md:mt-10">
        <div className="border bg-stone-50 self-stretch flex w-full grow flex-col pl-4 pr-8 pt-5 pb-3 rounded-2xl border-solid border-black max-md:pr-5">
          <label className="text-black text-3xl font-light whitespace-nowrap bg-stone-50 w-[87px] max-w-full pl-2.5 pr-4 py-2 self-start">
            Email
          </label>
          <div className="bg-black w-full h-px ml-3.5 mt-2 self-start max-md:ml-2.5" />
          <input type="email" />
        </div>
      </div>
      <div className="flex w-[410px] max-w-full flex-col ml-64 mt-7 self-start max-md:ml-2.5">
        <div className="border bg-stone-50 self-stretch flex w-full grow flex-col pl-4 pr-8 py-4 rounded-2xl border-solid border-black max-md:pr-5">
          <label className="text-black text-3xl font-light whitespace-nowrap bg-stone-50 w-[87px] max-w-full pr-0 pl-2.5 py-2 self-start">
            Password
          </label>
          <div className="bg-black w-full h-px ml-3.5 mt-1 self-start max-md:ml-2.5" />
          <input type="password" />
        </div>
      </div>
      <div className="flex w-[427px] max-w-full items-start justify-between gap-5 ml-60 mt-16 self-start max-md:flex-wrap max-md:mt-10">
        <div className="flex items-start gap-2 self-start">
          <input
            type="checkbox"
            id="remember"
            className="border bg-stone-50 self-stretch flex w-4 h-4 flex-col rounded-sm border-solid border-black"
          />
          <label
            htmlFor="remember"
            className="text-black text-lg self-stretch whitespace-nowrap"
          >
            Remember for 30 days
          </label>
        </div>
        <a
          href="#forgot-password"
          className="text-black text-xl underline whitespace-nowrap self-start"
        >
          Forgot Password ?
        </a>
      </div>
      <button className="bg-emerald-400 flex w-[410px] max-w-full flex-col ml-64 mt-10 px-20 py-6 rounded-2xl self-start max-md:ml-2.5 max-md:px-5">
        <span className="text-stone-50 text-3xl font-semibold self-center whitespace-nowrap">
          Log In
        </span>
      </button>
      <p className="text-black text-2xl font-semibold whitespace-nowrap ml-64 mt-12 mb-32 self-start max-md:ml-2.5 max-md:my-10">
        <span className="">Don’t have an account ?</span>
        <span className="font-semibold"> Sign up for free</span>
      </p>
    </main>
  );
}

export default Login;
