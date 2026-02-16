import Image from "next/image";

export default function Login() {
  return (
    <div className="flex max-h-screen max-w-(--screen-width-desktop) items-center justify-center font-inter m-auto ">
      <main className="flex flex-row h-screen w-full p-(--spacing-huge) flex-col items-center justify-between bg-white text-black">
        <div className="h-full w-7/12 bg-(--color-bg-light-alt)">Hai</div>
        <div className="flex flex-col p-8 pl-22 items-center justify-center w-5/12 gap-(--spacing-extra-large) text-(--color-bg-light-alt)">
          <Image
            className="flex w-32 h-32 bg-(--color-bg-light-alt) items-center justify-center"
            src=""
            alt="Logo"
            priority
          />
          <div className="flex flex-col w-full gap-(--spacing-large)">
            <div className="w-full h-2 bg-(--color-bg-light-alt)"></div>
            <div className="w-full h-2 bg-(--color-bg-light-alt)"></div>
          </div>
          <div className="flex flex-col w-full gap-(--spacing-large)">
            <div className="w-full h-16 bg-(--color-bg-light-alt)"></div>
            <div className="w-full h-16 bg-(--color-bg-light-alt)"></div>
          </div>
          <div className="flex flex-col w-full gap-(--spacing-large)">
            <div className="flex flex-row items-center gap-(--spacing-small) w-full">
              <div className="h-12 w-12 bg-(--color-bg-light-alt)"></div>
              <div className="w-2/3 h-2 bg-(--color-bg-light-alt)"></div>
            </div>
            <div className="flex flex-col items-center w-full gap-(--spacing-small)">
              <div className="w-full h-16 bg-(--color-bg-light-alt)"></div>
              <p className="text-(--color-bg-light-alt) font-(--font-weight-semibold)">
                Forgot Password?
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-(--spacing-large)">
            <div className="flex flex-row items-center justify-center gap-(--spacing-extra-large) w-full">
              <div className="w-1/3 h-1 bg-(--color-bg-light-alt)"></div>
              <p className="font-(--font-weight-semibold)">OR</p>
              <div className="w-1/3 h-1 bg-(--color-bg-light-alt)"></div>
            </div>
          </div>
          <div className="w-full h-16 bg-(--color-bg-light-alt)"></div>
        </div>
      </main>
    </div>
  );
}
