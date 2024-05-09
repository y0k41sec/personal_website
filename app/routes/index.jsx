export default function Index() {
  return (
    <div class="p-8 flex flex-col items-center mx-auto max-w-2xl">
      <img
        class="w-16 h-16 rounded-full"
        src="/shibe.jpeg"
      />

      <h1 class="my-4 text-2xl font-bold">Jojo - y0k41sec</h1>

      <p class="my-4 text-lg">
        I'm Jonathan Nogiri, a security engineer who loves to learn technology.
      </p>

      <div class="my-4 flex text-center w-1/2">
        <a class="flex-1 font-semibold" href="https://www.linkedin.com/in/jonathan-n-2852b028/?locale=en_US">
          Linkedin
        </a>

        <a class="flex-1 font-semibold" href="https://github.com/y0k41sec">
          GitHub
        </a>
        ><a href="mailto:jonathan@jogoya.xyz">
          Email
        </a>
      </div>

      <ul class="my-8 text-center w-2/3 mx-auto space-y-4">
        <li class="p-4 w-full rounded border transition-all hover:bg-orange-600 hover:text-white">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jonathan-n-2852b028/?locale=en_US"
          >
            Connect with me on Linkedin
          </a>
        </li>

      </ul>
    </div>
  );
}
